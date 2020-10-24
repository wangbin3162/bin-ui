<template>
  <div :class="prefixCls">
    <template v-if="!isEmpty">
      <tree-node
          v-for="(item, i) in stateTree"
          :key="i"
          :data="item"
          :multiple="multiple"
          :show-checkbox="showCheckbox"
          :children-key="childrenKey">
      </tree-node>
    </template>
    <div v-else>
      <b-empty style="margin: 16px 0;">{{ emptyText }}</b-empty>
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
    defaultExpand: {
      type: Boolean
    },
    nowrap: { // 是否不进行换行显示
      type: Boolean,
      default: true
    },
    filterNodeMethod: {
      type: Function
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      stateTree: this.data,
      flatState: [],
      query: ''
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
  computed: {
    isEmpty() {
      const { stateTree } = this
      return !stateTree || stateTree.length === 0 || stateTree.every(({ visible }) => !visible)
    }
  },
  methods: {
    compileFlatState() { // 每个结点都有一个关系父结点/子结点
      let keyCounter = 0
      let { childrenKey, defaultExpand } = this
      const flatTree = []

      const flattenChildren = (node, parent) => {
        this.$set(node, 'nodeKey', keyCounter++)
        if (typeof node.expand === 'undefined') {
          this.$set(node, 'expand', defaultExpand)
        }
        if (typeof node.visible === 'undefined') {
          this.$set(node, 'visible', true)
        }
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

      this.data.forEach(rootNode => {
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
    /* public API 折叠所有 */
    collapseAll() {
      this.flatState.forEach(node => {
        node.node.expand = false
      })
    },
    /* public API 展开所有 */
    expandAll() {
      this.flatState.forEach(node => {
        node.node.expand = true
      })
    },
    getMatchesNode(query) {
      return this.flatState.filter(obj => this.filterNodeMethod.call(obj.node, query, obj.node))
    },
    filter(query) {
      // 如果不存在则如果不存在判定函数则跳出
      if (!this.filterNodeMethod) return
      // 获取匹配的拉平节点
      let matches = this.getMatchesNode(query)
      // 隐藏全部
      this.flatState.forEach(item => {
        item.node.visible = false
        this.replaceDisplayTitle(item.node, query)
        if (query.length > 0) {
          this.$set(item.node, 'expand', false)
        }
      })
      // 再遍历一次匹配数组以及父级的开关
      matches.forEach(item => {
        item.node.visible = true
        if (query.length > 0) {
          this.$set(item.node, 'expand', true)
          this.replaceDisplayTitle(item.node, query)
        }
        const parentKey = item.parent
        // 如果是第一层则直接跳过下面逻辑
        if (typeof parentKey === 'undefined') return

        let parentNode = this.flatState[parentKey]
        do {
          parentNode.node.visible = true
          if (query.length > 0) {
            this.$set(parentNode.node, 'expand', true)
          }
          parentNode = this.flatState[parentNode.parent]
        } while (parentNode)
      })
    },
    // 替换节点文字
    replaceDisplayTitle(node, query) {
      if (query) {
        const display = node.title.replace(new RegExp(query, 'g'), `<span>${query}</span>`)
        this.$set(node, 'display', display)
      } else {
        this.$delete(node, 'display')
      }
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

      this.$emit('select-change', this.getSelectedNodes(), node)
    },
    handleCheck({ checked, nodeKey }) {
      const node = this.flatState[nodeKey].node
      this.$set(node, 'checked', checked)
      this.$set(node, 'indeterminate', false)

      this.updateTreeUp(nodeKey) // propagate up
      this.updateTreeDown(node, { checked, indeterminate: false }) // reset `indeterminate` when going down

      this.$emit('check-change', this.getCheckedNodes(), node)
    }
  },
  created() {
    this.flatState = this.compileFlatState()
    this.rebuildTree()
  },
  mounted() {
    this.$on('check', this.handleCheck)
    this.$on('selected', this.handleSelect)
    this.$on('expand', node => this.$emit('toggle-expand', node))
  }
}
</script>
