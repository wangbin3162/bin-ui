<template>
  <div v-transfer-dom :data-transfer="appendToBody">
    <transition name="fade-in">
      <div :class="maskClasses" :style="wrapStyles" v-show="visible" v-if="mask" @click="handleMask"></div>
    </transition>
    <div :class="wrapClasses" :style="wrapStyles" @click="handleWrapClick">
      <transition :name="'move-' + placement">
        <div :class="classes" :style="mainStyles" v-show="visible">
          <div :class="contentClasses" ref="content">
            <a class="bin-drawer-close" v-if="closable" @click="close">
              <slot name="close">
                <b-icon name="ios-close"></b-icon>
              </slot>
            </a>
            <div :class="[prefixCls + '-header']" v-if="showHead">
              <slot name="header">
                <div :class="[prefixCls + '-header-inner']">{{ title }}</div>
              </slot>
            </div>
            <div :class="[prefixCls + '-body']" :style="styles">
              <slot></slot>
            </div>
          </div>
          <div class="bin-drawer-drag" :class="{ 'bin-drawer-drag-left': placement === 'left' }" v-if="draggable"
               @mousedown="handleTriggerMousedown">
            <slot name="trigger">
              <div class="bin-drawer-drag-move-trigger">
                <div class="bin-drawer-drag-move-trigger-point">
                  <i></i><i></i><i></i><i></i><i></i>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { oneOf, findBrothersComponents, findComponentsUpward } from '../../utils/util'
  import TransferDom from '../../directive/transfer-dom'
  import Emitter from '../../mixins/emitter'
  import ScrollbarMixins from '../../mixins/scrollbar-mixin'

  import { on, off } from '../../utils/dom'
  import { transferIncrease as modalIncrease, transferIndex as modalIndex } from '../../utils/transfer-queue'

  const prefixCls = 'bin-drawer'

  export default {
    name: 'BDrawer',
    mixins: [Emitter, ScrollbarMixins],
    directives: { TransferDom },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
      },
      width: {
        type: [Number, String],
        default: 300
      },
      closable: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      mask: {
        type: Boolean,
        default: true
      },
      styles: {
        type: Object
      },
      scrollable: {
        type: Boolean,
        default: false
      },
      placement: {
        validator(value) {
          return oneOf(value, ['left', 'right'])
        },
        default: 'right'
      },
      zIndex: {
        type: Number,
        default: 1000
      },
      appendToBody: {
        type: Boolean,
        default: false
      },
      className: {
        type: String
      },
      inner: {
        type: Boolean,
        default: false
      },
      // Whether drag and drop is allowed to adjust width
      draggable: {
        type: Boolean,
        default: false
      },
      beforeClose: Function
    },
    data() {
      return {
        prefixCls: prefixCls,
        visible: this.value,
        wrapShow: false,
        showHead: true,
        canMove: false,
        dragWidth: this.width,
        wrapperWidth: this.width,
        wrapperLeft: 0,
        minWidth: 300,
        modalIndex: this.handleGetModalIndex() // for Esc close the top modal
      }
    },
    computed: {
      wrapClasses() {
        return [
          `${prefixCls}-wrap`,
          {
            [`${prefixCls}-hidden`]: !this.wrapShow,
            [`${this.className}`]: !!this.className,
            [`${prefixCls}-no-mask`]: !this.mask,
            [`${prefixCls}-wrap-inner`]: this.inner,
            [`${prefixCls}-wrap-dragging`]: this.canMove
          }
        ]
      },
      wrapStyles() {
        return {
          zIndex: this.modalIndex + this.zIndex
        }
      },
      mainStyles() {
        let style = {}
        const width = parseInt(this.dragWidth)
        const styleWidth = {
          width: width <= 100 ? `${width}%` : `${width}px`
        }
        Object.assign(style, styleWidth)
        return style
      },
      contentClasses() {
        return [
          `${prefixCls}-content`,
          {
            [`${prefixCls}-content-no-mask`]: !this.mask
          }
        ]
      },
      classes() {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.placement}`,
          {
            [`${prefixCls}-no-header`]: !this.showHead,
            [`${prefixCls}-inner`]: this.inner
          }
        ]
      },
      maskClasses() {
        return [
          `${prefixCls}-mask`,
          {
            [`${prefixCls}-mask-inner`]: this.inner
          }
        ]
      }
    },
    methods: {
      // 全局modal的索引
      handleGetModalIndex() {
        modalIncrease()
        return modalIndex
      },
      close() {
        if (!this.beforeClose) {
          return this.handleClose()
        }
        const before = this.beforeClose()
        if (before && before.then) {
          before.then(() => {
            this.handleClose()
          })
        } else {
          this.handleClose()
        }
      },
      handleClose() {
        this.visible = false
        this.$emit('input', false)
        this.$emit('on-close')
      },
      handleMask() {
        if (this.maskClosable && this.mask) {
          this.close()
        }
      },
      handleWrapClick(event) {
        // use indexOf,do not use === ,because bin-modal-wrap can have other custom className
        const className = event.target.getAttribute('class')
        if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.handleMask()
      },
      handleMousemove(event) {
        if (!this.canMove || !this.draggable) return
        // 更新容器宽度和距离左侧页面距离，如果是window则距左侧距离为0
        this.handleSetWrapperWidth()
        const left = event.pageX - this.wrapperLeft
        // 如果抽屉方向为右边，宽度计算需用容器宽度减去left
        let width = this.placement === 'right' ? this.wrapperWidth - left + 16 : left
        // 限定最小宽度
        width = Math.max(width, parseFloat(this.minWidth))
        event.atMin = width === parseFloat(this.minWidth)
        // 如果当前width不大于100，视为百分比
        if (width <= 100) width = (width / this.wrapperWidth) * 100
        this.dragWidth = width
        this.$emit('on-resize-width', parseInt(this.dragWidth))
      },
      handleSetWrapperWidth() {
        const { width, left } = this.$el.getBoundingClientRect()
        this.wrapperWidth = width
        this.wrapperLeft = left
      },
      handleMouseup() {
        if (!this.draggable) return
        this.canMove = false
      },
      handleTriggerMousedown() {
        this.canMove = true
        // 防止鼠标选中抽屉中文字，造成拖动trigger触发浏览器原生拖动行为
        window.getSelection().removeAllRanges()
      }
    },
    mounted() {
      if (this.visible) {
        this.wrapShow = true
      }
      let showHead = true
      if (this.$slots.header === undefined && !this.title) {
        showHead = false
      }
      this.showHead = showHead
      on(document, 'mousemove', this.handleMousemove)
      on(document, 'mouseup', this.handleMouseup)
      this.handleSetWrapperWidth()
    },
    beforeDestroy() {
      off(document, 'mousemove', this.handleMousemove)
      off(document, 'mouseup', this.handleMouseup)
      this.removeScrollEffect()
    },
    watch: {
      value(val) {
        this.visible = val
      },
      visible(val) {
        if (val === false) {
          this.timer = setTimeout(() => {
            this.wrapShow = false
            // #4831 Check if there are any drawers left at the parent level
            const brotherDrawers = findBrothersComponents(this, 'BDrawer') || []
            const parentDrawers = findComponentsUpward(this, 'BDrawer') || []

            const otherDrawers = [].concat(brotherDrawers).concat(parentDrawers)

            const isScrollDrawer = otherDrawers.some(item => item.visible && !item.scrollable)

            if (!isScrollDrawer && !this.inner) {
              this.removeScrollEffect()
            }
          }, 300)
        } else {
          if (this.timer) clearTimeout(this.timer)
          this.wrapShow = true
          if (!this.scrollable && !this.inner) {
            this.addScrollEffect()
          }
        }
        this.broadcast('BTable', 'on-visible-change', val)
        this.$emit('on-visible-change', val)
      },
      scrollable(val) {
        if (!val) {
          this.addScrollEffect()
        } else {
          this.removeScrollEffect()
        }
      },
      title(val) {
        if (this.$slots.header === undefined) {
          this.showHead = !!val
        }
      },
      width(val) {
        this.dragWidth = val
      }
    }
  }
</script>
