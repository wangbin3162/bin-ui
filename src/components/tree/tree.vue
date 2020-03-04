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
      <div class="bin-empty bin-empty-normal">
        <div class="bin-empty-image">
          <svg class="bin-empty-img-simple" width="64" height="41" viewBox="0 0 64 41"
               xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
              <ellipse class="bin-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse>
              <g class="bin-empty-img-simple-g" fill-rule="nonzero">
                <path
                    d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                <path
                    d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                    class="bin-empty-img-simple-path"></path>
              </g>
            </g>
          </svg>
        </div>
        <p class="bin-empty-description">{{ emptyText }}</p>
      </div>
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
