<template>
  <div class="bin-modal">
    <transition name="fade-in-linear">
      <div class="bin-modal-mask" :style="wrapStyles" v-show="visible" v-if="showMask" @click.stop="handleMask"></div>
    </transition>
    <div :class="wrapClasses" :style="wrapStyles" @click.stop="handleWrapClick">
      <transition :name="transitionName?transitionName:'modal-fade'"
                  @after-enter="animationEnter"
                  @after-leave="animationFinish">
        <div :class="classes" :style="mainStyles" v-show="visible">
          <div :class="contentClasses" ref="content" :style="contentStyles" @click="handleClickModal">
            <a :class="[prefixCls + '-close']" v-if="closable" @click="close">
              <slot name="close">
                <b-icon name="close"></b-icon>
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
            <div :class="[prefixCls + '-body']" :style="bodyStyles">
              <slot></slot>
            </div>
            <div :class="[prefixCls + '-footer']" v-if="!footerHide">
              <slot name="footer">
                <b-button @click="cancel">{{ cancelText }}</b-button>
                <b-button type="primary" :loading="buttonLoading" @click="ok">{{ okText }}</b-button>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { transferIndex as modalIndex, transferIncrease as modalIncrease } from '../../utils/transfer-queue'
import { on, off, hasClass } from '../../utils/dom'
import scrollbarMixin from '../../mixins/scrollbar-mixin'

let mousePosition = null
// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  // eslint-disable-next-line no-unused-vars
  setTimeout(() => (mousePosition = null), 100)
}

let supportsPassive = false
try {
  let opts = Object.defineProperty({}, 'passive', {
    // eslint-disable-next-line getter-return
    get() {
      supportsPassive = true
    }
  })
  window.addEventListener('testPassive', null, opts)
  window.removeEventListener('testPassive', null, opts)
// eslint-disable-next-line no-empty
} catch (e) {
}

function addEventListenerWrap(target, eventType, cb, option) {
  if (target.addEventListener) {
    let opt = option
    if (
        opt === undefined &&
        supportsPassive &&
        (eventType === 'touchstart' || eventType === 'touchmove' || eventType === 'wheel')
    ) {
      opt = { passive: false }
    }
    target.addEventListener(eventType, cb, opt)
  }
  return {
    remove: () => {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, cb)
      }
    }
  }
}

// 只有点击事件支持从鼠标位置动画展开
if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  addEventListenerWrap(document.documentElement, 'click', getClickPosition, true)
}

function getScroll(w, top) {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`]
  const method = `scroll${top ? 'Top' : 'Left'}`
  if (typeof ret !== 'number') {
    const d = w.document
    ret = d.documentElement[method]
    if (typeof ret !== 'number') {
      ret = d.body[method]
    }
  }
  return ret
}

function setTransformOrigin(node, value) {
  const style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(prefix => {
    style[`${prefix}TransformOrigin`] = value
  })
  style[`transformOrigin`] = value
}

function offset(el) {
  const rect = el.getBoundingClientRect()
  const pos = {
    left: rect.left,
    top: rect.top
  }
  const doc = el.ownerDocument
  const w = doc.defaultView || doc.parentWindow
  pos.left += getScroll(w, false)
  pos.top += getScroll(w, true)
  return pos
}

const prefixCls = 'bin-modal'
export default {
  name: 'BModal',
  mixins: [scrollbarMixin],
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
      default: '确 定'
    },
    cancelText: {
      type: String,
      default: '取 消'
    },
    loading: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object
    },
    bodyStyles: {
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
    scrollable: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    stopRemoveScroll: {
      type: Boolean
    },
    transitionName: {
      type: String
    }
  },
  data() {
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
          [`${prefixCls}-no-mask`]: !this.showMask
        }
      ]
    },
    wrapStyles() {
      return {
        zIndex: this.modalIndex + this.zIndex
      }
    },
    classes() {
      return [
        `${prefixCls}-inner`,
        {
          [`${prefixCls}-fullscreen`]: this.fullscreen,
          [`${prefixCls}-fullscreen-no-header`]: this.fullscreen && !this.showHead,
          [`${prefixCls}-fullscreen-no-footer`]: this.fullscreen && this.footerHide
        }
      ]
    },
    mainStyles() {
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
    contentClasses() {
      return [
        `${prefixCls}-content`,
        {
          [`${prefixCls}-content-no-mask`]: !this.showMask,
          [`${prefixCls}-content-drag`]: this.draggable,
          [`${prefixCls}-content-dragging`]: this.draggable && this.dragData.dragging
        }
      ]
    },
    contentStyles() {
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
    showMask() {
      return this.draggable ? false : this.mask
    }
  },
  mounted() {
    if (this.visible) {
      this.wrapShow = true
      if (this.appendToBody && !this.hasMoveOut) {
        document.body.appendChild(this.$el)
        this.hasMoveOut = true
      }
    }
    let showHead = true
    if (this.$slots.header === undefined && !this.title) {
      showHead = false
    }
    this.showHead = showHead
    this.$nextTick(() => {
      this.updateCallback(false)
    })
  },
  methods: {
    updateCallback(visible) {
      if (this.transitionName && this.transitionName !== 'modal-fade') return
      if (this.value) {
        // first show
        if (!visible) {
          const dialogNode = this.$refs.content
          if (mousePosition) {
            const elOffset = offset(dialogNode)
            setTransformOrigin(
                dialogNode,
                `${mousePosition.x - elOffset.left}px ${mousePosition.y - elOffset.top}px`
            )
          } else {
            setTransformOrigin(dialogNode, '')
          }
        }
      }
    },
    // 全局modal的索引
    handleGetModalIndex() {
      modalIncrease()
      return modalIndex
    },
    handleWrapClick(event) {
      const className = event.target.getAttribute('class')
      if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.handleMask()
    },
    cancel() {
      this.close()
    },
    ok() {
      if (this.loading) {
        this.buttonLoading = true
      } else {
        this.visible = false
        this.$emit('input', false)
      }
      this.$emit('ok')
    },
    // 点击遮罩层
    handleMask() {
      if (this.maskClosable && this.showMask) {
        this.close()
      }
    },
    handleClickModal() {
      if (this.draggable) {
        this.modalIndex = this.handleGetModalIndex()
      }
    },
    close() {
      this.visible = false
      this.$emit('input', false)
      this.$emit('close')
    },
    // 动画完成
    animationEnter() {
      this.$emit('opened')
    },
    // 缩放动画结束
    animationFinish() {
      this.$emit('closed')
    },
    // 拖拽开始
    handleMoveStart(event) {
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
    handleMoveMove(event) {
      if (!this.dragData.dragging) return false

      const distance = {
        x: event.clientX,
        y: event.clientY
      }

      const diffDistance = {
        x: distance.x - this.dragData.dragX,
        y: distance.y - this.dragData.dragY
      }

      this.dragData.x += diffDistance.x
      this.dragData.y += diffDistance.y

      this.dragData.dragX = distance.x
      this.dragData.dragY = distance.y
    },
    handleMoveEnd() {
      this.dragData.dragging = false
      off(window, 'mousemove', this.handleMoveMove)
      off(window, 'mouseup', this.handleMoveEnd)
    }
  },
  watch: {
    value(val) {
      this.visible = val
      this.$nextTick(() => {
        this.updateCallback(!val)
      })
    },
    visible(val) {
      if (val === false) {
        this.buttonLoading = false
        // 关闭内容显示
        this.timer = setTimeout(() => {
          this.wrapShow = false
          // 如果父级组件为模态窗则不需要移除滚动效果
          if (
              (!hasClass(this.$parent.$el, 'bin-modal') && !this.stopRemoveScroll) ||
              (this.$el === this.$parent.$el)
          ) {
            this.removeScrollEffect()
          }
        }, 300)
      } else {
        this.modalIndex = this.handleGetModalIndex()
        if (this.timer) clearTimeout(this.timer)
        this.wrapShow = true
        if (!this.scrollable && !this.draggable) {
          this.addScrollEffect()
        }
        if (this.appendToBody && !this.hasMoveOut) {
          document.body.appendChild(this.$el)
          this.hasMoveOut = true
        }
        this.$emit('open')
      }
      this.$emit('visible-change', val)
    },
    scrollable(val) {
      if (!val) {
        this.addScrollEffect()
      } else {
        this.removeScrollEffect()
      }
    },
    loading(val) {
      if (!val) {
        this.buttonLoading = false
      }
    },
    title(val) {
      if (this.$slots.header === undefined) {
        this.showHead = !!val
      }
    }
  },
  beforeDestroy() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>
