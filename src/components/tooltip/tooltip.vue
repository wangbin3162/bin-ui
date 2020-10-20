<template>
  <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div :class="[prefixCls + '-rel']" ref="reference">
      <slot></slot>
    </div>
    <transition name="fade-in">
      <div
          :class="[prefixCls + '-popper', prefixCls + '-' + theme]"
          :style="dropStyles"
          ref="popper"
          v-show="!disabled && (visible || always)"
          @mouseenter="handleShowPopper"
          @mouseleave="handleClosePopper">
        <div :class="[prefixCls + '-content']">
          <div :class="[prefixCls + '-arrow']"></div>
          <div :class="innerClasses" :style="innerStyles">
            <slot name="content">{{ content }}</slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Popper from '../base/popper'
  import { oneOf } from '../../utils/util'
  import { transferIndex, transferIncrease } from '../../utils/transfer-queue'

  const prefixCls = 'bin-tooltip'

  export default {
    name: 'BTooltip',
    mixins: [Popper],
    props: {
      placement: {
        validator (value) {
          return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
        },
        default: 'top'
      },
      content: {
        type: [String, Number],
        default: ''
      },
      delay: {
        type: Number,
        default: 100
      },
      disabled: {
        type: Boolean,
        default: false
      },
      controlled: { // under this prop,Tooltip will not close when mouseleave
        type: Boolean,
        default: false
      },
      always: {
        type: Boolean,
        default: false
      },
      appendToBody: {
        type: Boolean,
        default: false
      },
      theme: {
        validator (value) {
          return oneOf(value, ['dark', 'light'])
        },
        default: 'dark'
      },
      maxWidth: {
        type: [String, Number]
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        tIndex: this.handleGetIndex()
      }
    },
    computed: {
      innerStyles () {
        const styles = {}
        if (this.maxWidth) styles['max-width'] = `${this.maxWidth}px`
        return styles
      },
      innerClasses () {
        return [
          `${prefixCls}-inner`,
          {
            [`${prefixCls}-inner-with-width`]: !!this.maxWidth
          }
        ]
      },
      dropStyles () {
        let styles = {}
        if (this.appendToBody) styles['z-index'] = 2060 + this.tIndex

        return styles
      }
    },
    watch: {
      content () {
        this.updatePopper()
      },
      visible (val) {
        if (val) {
          if (this.appendToBody) {
            this.tooltipEl = this.$refs.popper
            if (this.tooltipEl && !this.hasMoveOut) {
              document.body.appendChild(this.tooltipEl)
              this.hasMoveOut = true
            }
          }
        }
        this.$emit('visible-change', val)
      }
    },
    methods: {
      handleShowPopper () {
        if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = true
        }, this.delay)
        this.tIndex = this.handleGetIndex()
      },
      handleClosePopper () {
        if (this.timeout) {
          clearTimeout(this.timeout)
          if (!this.controlled) {
            this.timeout = setTimeout(() => {
              this.visible = false
            }, 100)
          }
        }
      },
      handleGetIndex () {
        transferIncrease()
        return transferIndex
      }
    },
    mounted () {
      if (this.always) {
        this.updatePopper()
      }
    },
    beforeDestroy () {
      // if appendToBody is true, remove DOM node after destroy
      if (!this.tooltipEl || !this.appendToBody) {
        return
      }
      const parentNode = this.tooltipEl.parentNode
      if (parentNode && parentNode === document.body) {
        // remove body el
        document.body.removeChild(this.tooltipEl)
      }
    }
  }
</script>
