<template>
  <div class="bin-modal" v-transfer-dom :data-transfer="appendToBody">
    <transition name="fade-in-linear">
      <div class="bin-modal-mask" :style="wrapStyles" v-show="visible" v-if="showMask" @click="handleMask"></div>
    </transition>
    <div :class="wrapClasses" :style="wrapStyles" @click="handleWrapClick">
      <transition name="fade-scale-move" @after-leave="animationFinish">
        <div :class="classes" :style="mainStyles" v-show="visible">
          <div :class="contentClasses" ref="content" :style="contentStyles" @click="handleClickModal">
            <a :class="[prefixCls + '-close']" v-if="closable" @click="close">
              <slot name="close">
                <b-icon name="ios-close"></b-icon>
              </slot>
            </a>
            <div :class="[prefixCls + '-header']"
                 @mousedown="handleMoveStart"
                 v-if="showHead"
            >
              <slot name="header">
                <div :class="[prefixCls + '-header-inner']">{{ title }}</div>
              </slot>
            </div>
            <div :class="[prefixCls + '-body']">
              <slot></slot>
            </div>
            <div :class="[prefixCls + '-footer']" v-if="!footerHide">
              <slot name="footer">
                <b-button type="text" size="small" @click.native="cancel">{{ cancelText }}</b-button>
                <b-button type="primary" size="small" :loading="buttonLoading" @click.native="ok" v-waves>{{ okText }}
                </b-button>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { transferIndex as modalIndex, transferIncrease as modalIncrease } from '../../../utils/transfer-queue'
  import { on, off } from '../../../utils/dom'
  import TransferDom from '../../../directive/transfer-dom'

  const prefixCls = 'bin-modal'
  export default {
    name: 'BModal',
    directives: {TransferDom},
    props: {
      value: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      title: {
        type: String
      },
      width: {
        type: [Number, String],
        default: 520
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      loading: {
        type: Boolean,
        default: false
      },
      styles: {
        type: Object
      },
      className: {
        type: String
      },
      footerHide: {
        type: Boolean,
        default: false
      },
      fullscreen: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: true
      },
      draggable: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: Number,
        default: 2000
      },
      appendToBody: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        wrapShow: false,
        showHead: true,
        buttonLoading: false,
        visible: this.value,
        dragData: {
          x: null,
          y: null,
          dragX: null,
          dragY: null,
          dragging: false
        },
        modalIndex: this.handleGetModalIndex(),  // for Esc close the top modal
      }
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}-wrap`,
          {
            [`${prefixCls}-hidden`]: !this.wrapShow,
            [`${this.className}`]: !!this.className,
            [`${prefixCls}-no-mask`]: !this.showMask
          }
        ]
      },
      wrapStyles () {
        return {
          zIndex: this.modalIndex + this.zIndex
        }
      },
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-fullscreen`]: this.fullscreen,
            [`${prefixCls}-fullscreen-no-header`]: this.fullscreen && !this.showHead,
            [`${prefixCls}-fullscreen-no-footer`]: this.fullscreen && this.footerHide
          }
        ]
      },
      mainStyles () {
        let style = {}
        // 主要样式配置，配置宽度
        const width = parseInt(this.width)
        const styleWidth = this.dragData.x !== null ? {
          top: 0
        } : {
          width: width <= 100 ? `${width}%` : `${width}px`
        }

        const customStyle = this.styles ? this.styles : {}

        Object.assign(style, styleWidth, customStyle)

        return style
      },
      contentClasses () {
        return [
          `${prefixCls}-content`,
          {
            [`${prefixCls}-content-no-mask`]: !this.showMask,
            [`${prefixCls}-content-drag`]: this.draggable,
            [`${prefixCls}-content-dragging`]: this.draggable && this.dragData.dragging
          }
        ]
      },
      contentStyles () {
        let style = {}
        if (this.draggable) {
          if (this.dragData.x !== null) style.left = `${this.dragData.x}px`
          if (this.dragData.y !== null) style.top = `${this.dragData.y}px`
          const width = parseInt(this.width)
          const styleWidth = {
            width: width <= 100 ? `${width}%` : `${width}px`
          }

          Object.assign(style, styleWidth)
        }
        return style
      },
      showMask () {
        return this.draggable ? false : this.mask
      }
    },
    mounted () {
      if (this.visible) {
        this.wrapShow = true
      }
      let showHead = true
      if (this.$slots.header === undefined && !this.title) {
        showHead = false
      }
      this.showHead = showHead
    },
    methods: {
      // 全局modal的索引
      handleGetModalIndex () {
        modalIncrease()
        return modalIndex
      },
      handleWrapClick (event) {
        const className = event.target.getAttribute('class')
        if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.handleMask()
      },
      cancel () {
        this.close()
      },
      ok () {
        if (this.loading) {
          this.buttonLoading = true
        } else {
          this.visible = false
          this.$emit('input', false)
        }
        this.$emit('on-ok')
      },
      // 点击遮罩层
      handleMask () {
        if (this.maskClosable && this.showMask) {
          this.close()
        }
      },
      handleClickModal () {
        if (this.draggable) {
          this.modalIndex = this.handleGetModalIndex()
        }
      },
      close () {
        this.visible = false
        this.$emit('input', false)
        this.$emit('on-cancel')
      },
      // 缩放动画结束
      animationFinish () {
        this.$emit('on-hidden')
      },
      // 拖拽开始
      handleMoveStart (event) {
        if (!this.draggable) return false

        const $content = this.$refs.content
        const rect = $content.getBoundingClientRect()
        this.dragData.x = rect.x || rect.left
        this.dragData.y = rect.y || rect.top

        const distance = {
          x: event.clientX,
          y: event.clientY
        }

        this.dragData.dragX = distance.x
        this.dragData.dragY = distance.y

        this.dragData.dragging = true

        on(window, 'mousemove', this.handleMoveMove)
        on(window, 'mouseup', this.handleMoveEnd)
      },
      handleMoveMove (event) {
        if (!this.dragData.dragging) return false

        const distance = {
          x: event.clientX,
          y: event.clientY
        }

        const diff_distance = {
          x: distance.x - this.dragData.dragX,
          y: distance.y - this.dragData.dragY
        }

        this.dragData.x += diff_distance.x
        this.dragData.y += diff_distance.y

        this.dragData.dragX = distance.x
        this.dragData.dragY = distance.y
      },
      handleMoveEnd () {
        this.dragData.dragging = false
        off(window, 'mousemove', this.handleMoveMove)
        off(window, 'mouseup', this.handleMoveEnd)
      },
    },
    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        if (val === false) {
          this.buttonLoading = false
          // 关闭内容显示
          this.timer = setTimeout(() => {
            this.wrapShow = false
          }, 300)
        } else {
          this.modalIndex = this.handleGetModalIndex()
          if (this.timer) clearTimeout(this.timer)
          this.wrapShow = true
        }
        this.$emit('on-visible-change', val)
      },
      loading (val) {
        if (!val) {
          this.buttonLoading = false
        }
      },
      title (val) {
        if (this.$slots.header === undefined) {
          this.showHead = !!val
        }
      }
    }
  }
</script>
