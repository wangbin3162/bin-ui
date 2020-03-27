<template>
  <div :class="[prefixCls]"
       v-click-outside="onClickOutside"
       @mouseenter="handleMouseenter"
       @mouseleave="handleMouseleave">
    <div :class="relClasses" ref="reference" @click="handleClick" @contextmenu.prevent="handleRightClick">
      <slot></slot>
    </div>
    <transition name="zoom-in-top">
      <drop
          :class="dropdownCls"
          v-show="currentVisible"
          :placement="placement"
          ref="drop"
          @mouseenter.native="handleMouseenter"
          @mouseleave.native="handleMouseleave"
          :data-transfer="appendToBody"
          :transfer="appendToBody"
          v-transfer-dom>
        <slot name="list"></slot>
      </drop>
    </transition>
  </div>
</template>

<script>
  import { oneOf, findComponentUpward } from '../../utils/util'
  import ClickOutside from '../../directive/clickoutside'
  import TransferDom from '../../directive/transfer-dom'
  import Drop from '../select/drop'

  const prefixCls = 'bin-dropdown'
  export default {
    name: 'BDropdown',
    directives: { ClickOutside, TransferDom },
    components: { Drop },
    props: {
      trigger: {
        validator(value) {
          return oneOf(value, ['click', 'hover', 'custom', 'contextMenu'])
        },
        default: 'hover'
      },
      placement: {
        validator(value) {
          return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
        },
        default: 'bottom'
      },
      visible: {
        type: Boolean,
        default: false
      },
      appendToBody: Boolean, // 是否移动至body
      transferClassName: { // 包裹的样式名
        type: String
      },
      stopPropagation: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        prefixCls: prefixCls,
        currentVisible: this.visible
      }
    },
    watch: {
      visible(val) {
        this.currentVisible = val
      },
      currentVisible(val) {
        if (val) {
          this.$refs.drop.update()
        }
        this.$emit('on-visible-change', val)
      }
    },
    methods: {
      handleClick() {
        if (this.trigger === 'custom') return false
        if (this.trigger !== 'click') {
          return false
        }
        this.currentVisible = !this.currentVisible
      },
      handleRightClick() {
        if (this.trigger === 'custom') return false
        if (this.trigger !== 'contextMenu') {
          return false
        }
        this.currentVisible = !this.currentVisible
      },
      handleMouseenter() {
        if (this.trigger === 'custom') return false
        if (this.trigger !== 'hover') {
          return false
        }
        if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.currentVisible = true
        }, 250)
      },
      handleMouseleave() {
        if (this.trigger === 'custom') return false
        if (this.trigger !== 'hover') {
          return false
        }
        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = setTimeout(() => {
            this.currentVisible = false
          }, 150)
        }
      },
      onClickOutside(e) {
        this.handleClose()
        this.handleRightClose()
        if (this.currentVisible) this.$emit('on-click-outside', e)
      },
      handleClose() {
        if (this.trigger === 'custom') return false
        if (this.trigger !== 'click') {
          return false
        }
        this.currentVisible = false
      },
      handleRightClose() {
        if (this.trigger === 'custom') return false
        if (this.trigger !== 'contextMenu') {
          return false
        }
        this.currentVisible = false
      },
      hasParent() {
        const $parent = findComponentUpward(this, 'BDropdown')
        if ($parent) {
          return $parent
        } else {
          return false
        }
      }
    },
    mounted() {
      this.$on('on-click', (key) => {
        if (this.stopPropagation) return
        const $parent = this.hasParent()
        if ($parent) $parent.$emit('on-click', key)
      })
      this.$on('on-hover-click', () => {
        const $parent = this.hasParent()
        if ($parent) {
          this.$nextTick(() => {
            if (this.trigger === 'custom') return false
            this.currentVisible = false
          })
          $parent.$emit('on-hover-click')
        } else {
          this.$nextTick(() => {
            if (this.trigger === 'custom') return false
            this.currentVisible = false
          })
        }
      })
      this.$on('on-haschild-click', () => {
        this.$nextTick(() => {
          if (this.trigger === 'custom') return false
          this.currentVisible = true
        })
        const $parent = this.hasParent()
        if ($parent) $parent.$emit('on-haschild-click')
      })
    },
    computed: {
      transition() {
        return ['bottom-start', 'bottom', 'bottom-end'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade'
      },
      dropdownCls() {
        return {
          [prefixCls + '-transfer']: this.appendToBody,
          [this.transferClassName]: this.transferClassName
        }
      },
      relClasses() {
        return [
          `${prefixCls}-rel`,
          {
            [`${prefixCls}-rel-user-select-none`]: this.trigger === 'contextMenu'
          }
        ]
      }
    }
  }
</script>
