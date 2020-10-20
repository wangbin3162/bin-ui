<template>
  <div
      :class="classes"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
      v-click-outside="handleClose">
    <div
        :class="[prefixCls + '-rel']"
        ref="reference"
        @click="handleClick"
        @mousedown="handleFocus(false)"
        @mouseup="handleBlur(false)">
      <slot></slot>
    </div>
    <transition name="fade-in-linear">
      <div
          :class="popperClasses"
          :style="styles"
          ref="popper"
          v-show="visible"
          @click="handleTransferClick"
          @mouseenter="handleMouseenter"
          @mouseleave="handleMouseleave"
          :data-transfer="appendToBody"
          v-transfer-dom>
        <div :class="[prefixCls + '-content']">
          <div :class="[prefixCls + '-arrow']"></div>
          <div :class="[prefixCls + '-inner']" v-if="confirm">
            <div :class="[prefixCls + '-body']">
              <div :class="[prefixCls + '-body-message']">
                <i :class="`iconfont icon-${iconName}`" :style="iconStyles"></i>
                <slot name="title"><span class="message-title">{{ title }}</span></slot>
              </div>
              <div :class="[prefixCls + '-body-buttons']">
                <b-button size="mini" @click="cancel">{{ cancelText }}</b-button>
                <b-button type="primary" size="mini" @click="ok">{{ okText }}</b-button>
              </div>
            </div>
          </div>
          <div :class="[prefixCls + '-inner']" v-if="!confirm">
            <div :class="[prefixCls + '-title']" :style="contentPaddingStyle" v-if="showTitle" ref="title">
              <slot name="title">
                <div :class="[prefixCls + '-title-inner']">{{ title }}</div>
              </slot>
            </div>
            <div :class="[prefixCls + '-body']" :style="contentPaddingStyle">
              <div :class="contentClasses">
                <slot name="content">
                  <div :class="[prefixCls + '-body-content-inner']">{{ content }}</div>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Popper from '../base/popper'
import clickOutside from '../../directive/clickoutside'
import TransferDom from '../../directive/transfer-dom'
import { oneOf } from '../../utils/util'
import { transferIndex, transferIncrease } from '../../utils/transfer-queue'

const prefixCls = 'bin-popover'

export default {
  name: 'BPopover',
  mixins: [Popper],
  directives: { clickOutside, TransferDom },
  props: {
    trigger: {
      validator(value) {
        return oneOf(value, ['click', 'focus', 'hover'])
      },
      default: 'click'
    },
    placement: {
      validator(value) {
        return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
      },
      default: 'top'
    },
    title: {
      type: [String, Number]
    },
    content: {
      type: [String, Number],
      default: ''
    },
    width: {
      type: [String, Number]
    },
    confirm: {
      type: Boolean,
      default: false
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    appendToBody: {
      type: Boolean
    },
    popperClass: {
      type: String
    },
    wordWrap: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String
    },
    iconName: {
      type: String,
      default: 'ios-help-circle'
    },
    iconStyles: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      showTitle: true,
      isInput: false,
      disableCloseUnderTransfer: false, // transfer 模式下，点击 slot 也会触发关闭
      tIndex: this.handleGetIndex()
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-confirm`]: this.confirm
        }
      ]
    },
    popperClasses() {
      return [
        `${prefixCls}-popper`,
        {
          [`${prefixCls}-confirm`]: this.appendToBody && this.confirm,
          [`${this.popperClass}`]: !!this.popperClass
        }
      ]
    },
    styles() {
      let style = {}
      if (this.width) {
        style.width = `${this.width}px`
      }
      if (this.appendToBody) style['z-index'] = 2060 + this.tIndex
      return style
    },
    contentClasses() {
      return [
        `${prefixCls}-body-content`,
        {
          [`${prefixCls}-body-content-word-wrap`]: this.wordWrap
        }
      ]
    },
    contentPaddingStyle() {
      const styles = {}
      if (this.padding !== '') styles['padding'] = this.padding
      return styles
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) return

      if (this.confirm) {
        this.visible = !this.visible
        return true
      }
      if (this.trigger !== 'click') {
        return false
      }
      this.visible = !this.visible
    },
    handleTransferClick() {
      if (this.appendToBody) this.disableCloseUnderTransfer = true
    },
    handleClose() {
      if (this.disableCloseUnderTransfer) {
        this.disableCloseUnderTransfer = false
        return false
      }
      if (this.confirm) {
        this.visible = false
        return true
      }
      if (this.trigger !== 'click') {
        return false
      }
      this.visible = false
    },
    handleFocus(fromInput = true) {
      if (this.disabled) return

      if (this.trigger !== 'focus' || this.confirm || (this.isInput && !fromInput)) {
        return false
      }
      this.visible = true
    },
    handleBlur(fromInput = true) {
      if (this.trigger !== 'focus' || this.confirm || (this.isInput && !fromInput)) {
        return false
      }
      this.visible = false
    },
    handleMouseenter() {
      if (this.disabled) return

      if (this.trigger !== 'hover' || this.confirm) {
        return false
      }
      if (this.enterTimer) clearTimeout(this.enterTimer)
      this.enterTimer = setTimeout(() => {
        this.visible = true
      }, 100)
    },
    handleMouseleave() {
      if (this.trigger !== 'hover' || this.confirm) {
        return false
      }
      if (this.enterTimer) {
        clearTimeout(this.enterTimer)
        this.enterTimer = setTimeout(() => {
          this.visible = false
        }, 100)
      }
    },
    cancel() {
      this.visible = false
      this.$emit('cancel')
    },
    ok() {
      this.visible = false
      this.$emit('ok')
    },
    getInputChildren() {
      const $input = this.$refs.reference.querySelectorAll('input')
      const $textarea = this.$refs.reference.querySelectorAll('textarea')
      let $children = null

      if ($input.length) {
        $children = $input[0]
      } else if ($textarea.length) {
        $children = $textarea[0]
      }

      return $children
    },
    handleGetIndex() {
      transferIncrease()
      return transferIndex
    },
    handleIndexIncrease() {
      this.tIndex = this.handleGetIndex()
    }
  },
  mounted() {
    if (!this.confirm) {
      this.showTitle = (this.$slots.title !== undefined) || this.title
    }
    if (this.trigger === 'focus') {
      this.$nextTick(() => {
        const $children = this.getInputChildren()
        if ($children) {
          this.isInput = true
          $children.addEventListener('focus', this.handleFocus, false)
          $children.addEventListener('blur', this.handleBlur, false)
        }
      })
    }
  },
  beforeDestroy() {
    const $children = this.getInputChildren()
    if ($children) {
      $children.removeEventListener('focus', this.handleFocus, false)
      $children.removeEventListener('blur', this.handleBlur, false)
    }
  }
}
</script>
