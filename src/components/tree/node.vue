<template>
  <ul :class="classes">
    <li v-show="data.visible">
      <div class="bin-tree-node" :style="{whiteSpace:TreeInstance.nowrap?'nowrap':null}">
          <span :class="arrowClasses" @click="handleExpand">
          <b-icon v-if="showArrow" name="ios-arrow-forward"></b-icon>
          <b-icon v-if="showLoading" name="loading" class="bin-load-loop"></b-icon>
        </span>
        <b-checkbox
            v-if="showCheckbox"
            :value="data.checked"
            :indeterminate="data.indeterminate"
            :disabled="data.disabled || data.disableCheckbox"
            @click.native.prevent="handleCheck"></b-checkbox>
        <span v-if="data.render" :class="renderClasses" @click="handleSelect">
            <render :render="data.render" :data="data" :node="node"></render>
          </span>
        <span v-else-if="isParentRender" :class="renderClasses" @click="handleSelect">
            <render :render="parentRender" :data="data" :node="node"></render>
        </span>
        <template v-else>
          <span v-if="data.display" :class="titleClasses" @click="handleSelect" v-html="data.display"></span>
          <span v-else :class="titleClasses" @click="handleSelect">{{ data.title }}</span>
        </template>
      </div>
      <collapse-transition>
        <div class="bin-tree-node-children" v-show="data.expand">
          <tree-node
              v-for="(item, i) in children"
              :key="i"
              :data="item"
              :multiple="multiple"
              :show-checkbox="showCheckbox"
              :children-key="childrenKey">
          </tree-node>
        </div>
      </collapse-transition>
    </li>
  </ul>
</template>
<script>
import Render from './render'
import CollapseTransition from '../base/collapse-transition'
import Emitter from '../../mixins/emitter'
import { findComponentUpward } from '../../utils/util'

const prefixCls = 'bin-tree'

export default {
  name: 'TreeNode',
  mixins: [Emitter],
  inject: ['TreeInstance'],
  components: { CollapseTransition, Render },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}-children`
      ]
    },
    arrowClasses() {
      return [
        `${prefixCls}-arrow`,
        {
          [`${prefixCls}-arrow-disabled`]: this.data.disabled,
          [`${prefixCls}-arrow-open`]: this.data.expand
        }
      ]
    },
    titleClasses() {
      return [
        `${prefixCls}-title`,
        {
          [`${prefixCls}-title-selected`]: this.data.selected
        }
      ]
    },
    renderClasses() {
      return [
        `${prefixCls}-render-title`,
        {
          [`${prefixCls}-title-selected`]: this.data.selected
        }
      ]
    },
    showArrow() {
      return (this.data[this.childrenKey] && this.data[this.childrenKey].length) || ('loading' in this.data && !this.data.loading)
    },
    showLoading() {
      return 'loading' in this.data && this.data.loading
    },
    isParentRender() {
      const Tree = findComponentUpward(this, 'BTree')
      return Tree && Tree.render
    },
    parentRender() {
      const Tree = findComponentUpward(this, 'BTree')
      if (Tree && Tree.render) {
        return Tree.render
      } else {
        return null
      }
    },
    node() {
      const Tree = findComponentUpward(this, 'BTree')
      if (Tree) {
        // 将所有的 node（即flatState）和当前 node 都传递
        return [Tree.flatState, Tree.flatState.find(item => item.nodeKey === this.data.nodeKey)]
      } else {
        return []
      }
    },
    children() {
      return this.data[this.childrenKey]
    }
  },
  methods: {
    handleExpand() {
      const item = this.data
      if (item.disabled) return

      // async loading
      if (item[this.childrenKey].length === 0) {
        const tree = findComponentUpward(this, 'BTree')
        if (tree && tree.loadData) {
          this.$set(this.data, 'loading', true)
          tree.loadData(item, children => {
            this.$set(this.data, 'loading', false)
            if (children.length) {
              this.$set(this.data, this.childrenKey, children)
              this.$nextTick(() => this.handleExpand())
            }
          })
          return
        }
      }

      if (item[this.childrenKey] && item[this.childrenKey].length) {
        this.$set(this.data, 'expand', !this.data.expand)
        this.dispatch('BTree', 'expand', this.data)
      }
    },
    handleSelect() {
      if (this.data.disabled) return
      if (this.TreeInstance.showCheckbox && this.TreeInstance.checkDirectly) {
        this.handleCheck()
      } else {
        this.dispatch('BTree', 'selected', this.data.nodeKey)
      }
    },
    handleCheck() {
      if (this.data.disabled) return
      const changes = {
        checked: !this.data.checked && !this.data.indeterminate,
        nodeKey: this.data.nodeKey
      }
      this.dispatch('BTree', 'check', changes)
    }
  }
}
</script>
