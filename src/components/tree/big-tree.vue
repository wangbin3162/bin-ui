<template>
  <div :class="prefixCls" ref="scroller" :style="wrapStyle"
       @scroll="handleScroll">
    <template v-if="!isEmpty">
      <div :class="`${prefixCls}-phantom`" :style="{ height: contentHeight }"></div>
      <div :class="`${prefixCls}-content`" :style="{ transform: `translateY(${offset}px)` }">
        <div
            v-for="(node,index) in visibleData"
            :key="node.id||index"
            :class="`${prefixCls}-node`"
            :style="{ paddingLeft: 18 * (node.level - 1) + 'px', height: itemHeight + 'px' }"
        >
          <div :class="arrowClasses(node)" @click="handleExpand(node)">
            <b-icon v-if="node[childrenKey] && node[childrenKey].length" name="ios-arrow-forward"></b-icon>
          </div>
          <b-checkbox
              v-if="showCheckbox"
              :value="node.checked"
              :indeterminate="node.indeterminate"
              :disabled="node.disabled || node.disableCheckbox"
              @click.native.prevent="handleCheck(node)"></b-checkbox>
          <span v-if="node.display" :class="titleClasses(node)"
                @click="handleSelect(node)"
                v-html="node.display"></span>
          <span v-else :class="titleClasses(node)" @click="handleSelect(node)">{{ node.title }}</span>
        </div>
      </div>
    </template>
    <div v-else>
      <b-empty style="margin: 16px 0;">{{ emptyText }}</b-empty>
    </div>
  </div>
</template>

<script>

const prefixCls = 'bin-tree'
let lastTime = 0
export default {
  name: 'BBigTree',
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
    lockSelect: {
      type: Boolean,
      default: false
    },
    timeout: { // 刷新频率
      type: Number,
      default: 17
    },
    defaultExpand: {
      type: Boolean
    },
    itemHeight: {
      type: Number,
      default: 28
    },
    visibleCount: {
      type: Number,
      default: 15
    },
    filterNodeMethod: {
      type: Function
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      offset: 0, // translateY偏移量
      contentHeight: '0px',
      visibleData: [],
      flattenTree: []
    }
  },
  watch: {
    data: {
      handler() {
        this.flattenTree = this.compileFlatState()
        this.updateView()
      },
      deep: true
    }
  },
  computed: {
    wrapStyle() {
      return {
        position: 'relative',
        overflow: 'auto',
        height: this.visibleCount * this.itemHeight + 'px'
      }
    },
    isEmpty() {
      return this.visibleData.length === 0
    }
  },
  created() {
    this.flattenTree = this.compileFlatState()
  },
  mounted() {
    this.updateView()
  },
  methods: {
    compileFlatState() {
      let keyCounter = 0
      let { childrenKey, defaultExpand } = this

      const flatten = function (list, level = 1, parent = null) {
        let arr = []
        list.forEach(item => {
          item.level = level
          item.nodeKey = keyCounter++
          if (item.expand === undefined) {
            item.expand = defaultExpand
          }
          if (item.visible === undefined) {
            item.visible = true
          }
          if (!parent.visible || !parent.expand) {
            item.visible = false
          }
          item.parent = parent
          arr.push(item)
          if (item[childrenKey]) {
            arr.push(...flatten(item[childrenKey], level + 1, item))
          }
        })
        return arr
      }
      return flatten(this.data, 1, { level: 0, visible: true, expand: true, children: this.data })
    },
    updateView() {
      this.getContentHeight()
      this.$emit('update', this.data)
      this.handleScroll()
    },
    handleScroll() {
      let currentTime = +new Date()
      if (currentTime - lastTime > this.timeout) {
        this.updateVisibleData(this.$refs.scroller.scrollTop)
        lastTime = currentTime
      }
    },
    updateVisibleData(scrollTop = 0) {
      let start = Math.floor(scrollTop / this.itemHeight) - Math.floor(this.visibleCount / 2)
      start = start < 0 ? 0 : start
      const end = start + this.visibleCount * 2
      const allVisibleData = (this.flattenTree || []).filter(
          item => item.visible
      )
      this.visibleData = allVisibleData.slice(start, end)
      this.offset = start * this.itemHeight
    },
    getContentHeight() {
      this.contentHeight = (this.flattenTree || []).filter(item => item.visible).length * this.itemHeight + 'px'
    },
    arrowClasses(node) {
      return [
        `${prefixCls}-arrow`,
        {
          [`${prefixCls}-arrow-disabled`]: node.disabled,
          [`${prefixCls}-arrow-open`]: node.expand
        }
      ]
    },
    titleClasses(node) {
      return [
        `${prefixCls}-title`,
        {
          [`${prefixCls}-title-selected`]: node.selected
        }
      ]
    },
    handleExpand(node) {
      const isExpand = node.expand
      if (isExpand) {
        this.collapse(node, true) // 折叠
      } else {
        this.expand(node, true) // 展开
      }
      this.updateView()
    },
    /* public API 获取所有select节点 */
    getSelectedNodes() {
      return this.flattenTree.filter(obj => obj.selected)
    },
    /* public API 获取所有checked 节点 */
    getCheckedNodes() {
      return this.flattenTree.filter(obj => obj.checked)
    },
    /* public API 获取全选和半选节点 */
    getCheckedAndIndeterminateNodes() {
      return this.flattenTree.filter(obj => (obj.checked || obj.indeterminate))
    },
    /* public API 折叠所有 */
    collapseAll(level = 1) {
      this.flattenTree.forEach(node => {
        node.expand = false
        if (node.level !== level) {
          node.visible = false
        }
      })
      this.updateView()
    },
    /* public API 展开所有 */
    expandAll() {
      this.flattenTree.forEach(node => {
        node.expand = true
        node.visible = true
      })
      this.updateView()
    },
    filter(query) {
      // 如果不存在则如果不存在判定函数则跳出
      if (!this.filterNodeMethod) return
      // 获取匹配的拉平节点
      let matches = this.flattenTree.filter(obj => this.filterNodeMethod.call(obj, query, obj))
      // 隐藏全部
      this.flattenTree.forEach(item => {
        item.visible = false
        this.replaceDisplayTitle(item, query)
        if (query.length > 0) {
          this.$set(item, 'expand', false)
        }
      })
      // 再遍历一次匹配数组以及父级的开关
      matches.forEach(item => {
        item.visible = true
        if (query.length > 0) {
          item.expand = true
          this.replaceDisplayTitle(item, query)
        }
        // 如果是第一层则直接跳过下面逻辑
        if (item.parent === undefined || item.parent.level === 1) return

        let parentNode = item.parent
        do {
          parentNode.visible = true
          if (query.length > 0) {
            parentNode.expand = true
          }
          parentNode = parentNode.parent
        } while (parentNode && parentNode.level !== 0)
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
    handleSelect(node) {
      if (this.lockSelect) { // 如果锁定选择，则不触发选中事件
        return
      }
      if (this.showCheckbox && this.checkDirectly) {
        this.handleCheck(node)
        return
      }
      if (!this.multiple) { // reset previously selected node
        const currentSelectedKey = this.flattenTree.findIndex(obj => obj.selected)
        if (currentSelectedKey >= 0 && currentSelectedKey !== node.nodeKey) {
          this.$set(this.flattenTree[currentSelectedKey], 'selected', false)
        }
      }
      this.$set(node, 'selected', !node.selected)
      this.$emit('select-change', this.getSelectedNodes(), node)
    },
    handleCheck(node) {
      let checked = !node.checked && !node.indeterminate
      this.$set(node, 'checked', checked)
      this.$set(node, 'indeterminate', false)

      this.updateTreeUp(node) // propagate up
      this.updateTreeDown(node, { checked, indeterminate: false }) // reset `indeterminate` when going down

      this.$emit('check-change', this.getCheckedNodes(), node)
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
    updateTreeUp(node) {
      if (node.parent === undefined || node.level === 0 || this.checkStrictly) return

      const parent = node.parent
      if (node.checked === parent.checked && node.indeterminate === parent.indeterminate) return // no need to update upwards

      if (node.checked === true) {
        this.$set(parent, 'checked', parent[this.childrenKey].every(node => node.checked))
        this.$set(parent, 'indeterminate', !parent.checked)
      } else {
        this.$set(parent, 'checked', false)
        this.$set(parent, 'indeterminate', parent[this.childrenKey].some(node => node.checked || node.indeterminate))
      }
      this.updateTreeUp(parent)
    },
    // 展开节点
    expand(node) {
      node.expand = true
      this.recursionVisible(node.children, true)
    },
    // 折叠节点
    collapse(node) {
      node.expand = false
      this.recursionVisible(node.children, false)
    },
    // 递归节点
    recursionVisible(children, status) {
      children.forEach(node => {
        node.visible = status
        if (!node.parent.visible || !node.parent.expand) {
          node.visible = false
        }
        if (node.children) {
          this.recursionVisible(node.children, status)
        }
      })
    }
  }
}
</script>
