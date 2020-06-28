<template>
  <div :class="prefixCls">
    <tree-node
        v-for="(item, i) in stateTree"
        :key="i"
        :data="item"
        visible
        :multiple="multiple"
        :show-checkbox="showCheckbox"
        :children-key="childrenKey">
    </tree-node>
    <div v-if="!stateTree.length">
      <b-empty>{{ emptyText }}</b-empty>
    </div>
  </div>
</template>

<script>
  import TreeNode from './node.vue'
  import Emitter from '../../mixins/emitter'

  const prefixCls = 'bin-tree'

  export default {
    name: 'BTree',
    mixins: [Emitter],
    components: { TreeNode },
    provide() {
      return { TreeInstance: this }
    },
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      multiple: {
        type: Boolean,
        default: false
      },
      showCheckbox: {
        type: Boolean,
        default: false
      },
      checkStrictly: {
        type: Boolean,
        default: false
      },
      // 当开启 showCheckbox 时，如果开启 checkDirectly，select 将强制转为 check 事件
      checkDirectly: {
        type: Boolean,
        default: false
      },
      emptyText: {
        type: String,
        default: '暂无数据'
      },
      childrenKey: {
        type: String,
        default: 'children'
      },
      loadData: {
        type: Function
      },
      render: {
        type: Function
      },
      lockSelect: {
        type: Boolean,
        default: false
      },
      nowrap: { // 是否不进行换行显示
        type: Boolean
      }
    },
    data() {
      return {
        prefixCls: prefixCls,
        stateTree: this.data,
        flatState: []
      }
    },
    watch: {
      data: {
        deep: true,
        handler() {
          this.stateTree = this.data
          this.flatState = this.compileFlatState()
          this.rebuildTree()
        }
      }
    },
    methods: {
      compileFlatState() { // 每个结点都有一个关系父结点/子结点
        let keyCounter = 0
        let childrenKey = this.childrenKey
        const flatTree = []

        function flattenChildren(node, parent) {
          node.nodeKey = keyCounter++
          flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey }
          if (typeof parent !== 'undefined') {
            flatTree[node.nodeKey].parent = parent.nodeKey
            flatTree[parent.nodeKey][childrenKey].push(node.nodeKey)
          }

          if (node[childrenKey]) {
            flatTree[node.nodeKey][childrenKey] = []
            node[childrenKey].forEach(child => flattenChildren(child, node))
          }
        }

        this.stateTree.forEach(rootNode => {
          flattenChildren(rootNode)
        })
        return flatTree
      },
      updateTreeUp(nodeKey) {
        const parentKey = this.flatState[nodeKey].parent
        if (typeof parentKey === 'undefined' || this.checkStrictly) return

        const node = this.flatState[nodeKey].node
        const parent = this.flatState[parentKey].node
        if (node.checked === parent.checked && node.indeterminate === parent.indeterminate) return // no need to update upwards

        if (node.checked === true) {
          this.$set(parent, 'checked', parent[this.childrenKey].every(node => node.checked))
          this.$set(parent, 'indeterminate', !parent.checked)
        } else {
          this.$set(parent, 'checked', false)
          this.$set(parent, 'indeterminate', parent[this.childrenKey].some(node => node.checked || node.indeterminate))
        }
        this.updateTreeUp(parentKey)
      },
      rebuildTree() { // only called when `data` prop changes
        const checkedNodes = this.getCheckedNodes()
        checkedNodes.forEach(node => {
          this.updateTreeDown(node, { checked: true })
          // propagate upwards
          const parentKey = this.flatState[node.nodeKey].parent
          if (!parentKey && parentKey !== 0) return
          const parent = this.flatState[parentKey].node
          const childHasCheckSetter = typeof node.checked !== 'undefined' && node.checked
          if (childHasCheckSetter && parent.checked !== node.checked) {
            this.updateTreeUp(node.nodeKey) // update tree upwards
          }
        })
      },
      /* public API */
      getSelectedNodes() {
        return this.flatState.filter(obj => obj.node.selected).map(obj => obj.node)
      },
      /* public API */
      getCheckedNodes() {
        return this.flatState.filter(obj => obj.node.checked).map(obj => obj.node)
      },
      /* public API */
      getCheckedAndIndeterminateNodes() {
        return this.flatState.filter(obj => (obj.node.checked || obj.node.indeterminate)).map(obj => obj.node)
      },
      updateTreeDown(node, changes = {}) {
        if (this.checkStrictly) return

        for (let key in changes) {
          this.$set(node, key, changes[key])
        }
        if (node[this.childrenKey]) {
          node[this.childrenKey].forEach(child => {
            this.updateTreeDown(child, changes)
          })
        }
      },
      handleSelect(nodeKey) {
        if (this.lockSelect) { // 如果锁定选择，则不触发选中事件
          return
        }
        const node = this.flatState[nodeKey].node
        if (!this.multiple) { // reset previously selected node
          const currentSelectedKey = this.flatState.findIndex(obj => obj.node.selected)
          if (currentSelectedKey >= 0 && currentSelectedKey !== nodeKey) this.$set(this.flatState[currentSelectedKey].node, 'selected', false)
        }
        this.$set(node, 'selected', !node.selected)

        this.$emit('on-select-change', this.getSelectedNodes(), node)
      },
      handleCheck({ checked, nodeKey }) {
        const node = this.flatState[nodeKey].node
        this.$set(node, 'checked', checked)
        this.$set(node, 'indeterminate', false)

        this.updateTreeUp(nodeKey) // propagate up
        this.updateTreeDown(node, { checked, indeterminate: false }) // reset `indeterminate` when going down

        this.$emit('on-check-change', this.getCheckedNodes(), node)
      }
    },
    created() {
      this.flatState = this.compileFlatState()
      this.rebuildTree()
    },
    mounted() {
      this.$on('on-check', this.handleCheck)
      this.$on('on-selected', this.handleSelect)
      this.$on('toggle-expand', node => this.$emit('on-toggle-expand', node))
    }
  }
</script>
