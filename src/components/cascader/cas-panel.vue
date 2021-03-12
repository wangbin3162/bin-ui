<template>
  <div class="bin-cascader-panel">
    <ul v-if="data && data.length" :class="[prefixCls + '-menu']">
      <cas-item
          v-for="(item,index) in data" :key="index"
          :prefix-cls="prefixCls"
          :data="item"
          :tmp-item="tmpItem"
          @click.native.stop="handleClickItem(item)"
          @mouseenter.native.stop="handleHoverItem(item)"></cas-item>
    </ul>
    <cas-panel v-if="sublist && sublist.length" :prefix-cls="prefixCls" :data="sublist" :disabled="disabled"
               :trigger="trigger" :change-on-select="changeOnSelect"></cas-panel>
  </div>
</template>
<script>
import CasItem from './cas-item.vue'
import Emitter from '../../mixins/emitter'
import { findComponentUpward, findComponentDownward } from '../../utils/util'

export default {
  name: 'CasPanel',
  mixins: [Emitter],
  components: { CasItem },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: Boolean,
    changeOnSelect: Boolean,
    trigger: String,
    prefixCls: String
  },
  data() {
    return {
      tmpItem: {},
      result: [],
      sublist: []
    }
  },
  watch: {
    data() {
      this.sublist = []
    }
  },
  methods: {
    handleClickItem(item) {
      if (this.trigger !== 'click' && item.children && item.children.length) return
      this.handleTriggerItem(item, false, true)
    },
    handleHoverItem(item) {
      if (this.trigger !== 'hover' || !item.children || !item.children.length) return
      this.handleTriggerItem(item, false, true)
    },
    handleTriggerItem(item, fromInit = false, fromUser = false) {
      if (item.disabled) return

      const cascade = findComponentUpward(this, 'BCascader')
      // return value back recursion  // 向上递归，设置临时选中值（并非真实选中）
      const backItem = this.getBaseItem(item)

      if (item.loading !== undefined && !item.children.length) {
        if (this.changeOnSelect) {
          this.tmpItem = backItem
          this.emitUpdate([backItem])
          this.dispatch('BCascader', 'result-change', {
            lastValue: false,
            changeOnSelect: this.changeOnSelect,
            fromInit: fromInit
          })
        }
        if (cascade && cascade.loadData) {
          cascade.loadData(item, () => {
            if (fromUser) {
              cascade.isLoadedChildren = true
            }
            if (item.children.length) {
              this.handleTriggerItem(item)
            } else {
              if (this.changeOnSelect) {
                this.tmpItem = backItem
                this.emitUpdate([backItem])
                this.sublist = []
                this.dispatch('BCascader', 'result-change', {
                  lastValue: true,
                  changeOnSelect: this.changeOnSelect,
                  fromInit: fromInit
                })
              }
            }
          })
          return
        }
      }

      // #5021 for this.changeOnSelect，加 if 是因为 #4472
      if (
          this.changeOnSelect ||
          (backItem.label !== this.tmpItem.label || backItem.value !== this.tmpItem.value) ||
          (backItem.label === this.tmpItem.label && backItem.value === this.tmpItem.value)
      ) {
        this.tmpItem = backItem
        this.emitUpdate([backItem])
      }

      if (item.children && item.children.length) {
        this.sublist = item.children
        this.dispatch('BCascader', 'result-change', {
          lastValue: false,
          changeOnSelect: this.changeOnSelect,
          fromInit: fromInit
        })

        if (this.changeOnSelect) {
          const CasPanel = findComponentDownward(this, 'CasPanel')
          if (CasPanel) {
            CasPanel.$emit('clear', true)
          }
        }
      } else {
        this.sublist = []
        this.dispatch('BCascader', 'result-change', {
          lastValue: true,
          changeOnSelect: this.changeOnSelect,
          fromInit: fromInit
        })
      }

      if (cascade) {
        cascade.$refs.drop.update()
      }
    },
    updateResult(item) {
      this.result = [this.tmpItem].concat(item)
      this.emitUpdate(this.result)
    },
    getBaseItem(item) {
      let backItem = Object.assign({}, item)
      if (backItem.children) {
        delete backItem.children
      }

      return backItem
    },
    emitUpdate(result) {
      if (this.$parent.$options.name === 'CasPanel') {
        this.$parent.updateResult(result)
      } else {
        this.$parent.$parent.updateResult(result)
      }
    }
  },
  mounted() {
    this.$on('find-selected', (params) => {
      const val = params.value
      let value = [...val]
      for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          if (value[i] === this.data[j].value) {
            this.handleTriggerItem(this.data[j], true)
            value.splice(0, 1)
            this.$nextTick(() => {
              this.broadcast('CasPanel', 'find-selected', {
                value: value
              })
            })
            return false
          }
        }
      }
    })
    // deep for #1553
    this.$on('clear', (deep = false) => {
      this.sublist = []
      this.tmpItem = {}
      if (deep) {
        const CasPanel = findComponentDownward(this, 'CasPanel')
        if (CasPanel) {
          CasPanel.$emit('clear', true)
        }
      }
    })
  }
}
</script>
