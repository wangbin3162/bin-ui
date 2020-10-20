<template>
  <transition name="back-top-fade">
    <div :class="classes" :style="styles" v-show="backTop" @click="back">
      <slot>
        <div :class="innerClasses">
          <b-icon name="md-arrow-dropup" size="24"></b-icon>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
import { scrollTop, on, off } from '../../utils/dom'

const prefixCls = 'bin-back-top'
export default {
  name: 'BBackTop',
  props: {
    height: {
      type: Number,
      default: 400
    },
    bottom: {
      type: Number,
      default: 50
    },
    right: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 1000
    },
    zIndex: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      backTop: false
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-show`]: this.backTop
        }
      ]
    },
    styles() {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`,
        zIndex: this.zIndex
      }
    },
    innerClasses() {
      return `${prefixCls}-inner`
    }
  },
  mounted() {
    this.domEl = window
    // 父级元素是否设置了scroll-box
    let parentScrollBox = this.$parent.$el.querySelector('.scroll-box')
    if (parentScrollBox) {
      this.domEl = parentScrollBox
    } else {
      // 如果父级是自定义滚动则绑定滚动为父级元素dom
      this.domEl = this.$parent.$el.className === 'bin-scrollbar'
          ? this.$parent.$el.querySelector('.bin-scrollbar__wrap')
          : window
    }
    this.scrollEvent = this.$util.debounce(this.handleScroll, 50, false)
    // 监听滚动事件
    on(this.domEl, 'scroll', this.scrollEvent)
    on(window, 'resize', this.scrollEvent)
  },
  beforeDestroy() {
    off(this.domEl, 'scroll', this.scrollEvent)
    off(window, 'resize', this.scrollEvent)
  },
  methods: {
    // 滚动监听事件
    handleScroll() {
      const sTop = this.domEl !== window ? (this.domEl.pageYOffset || this.domEl.scrollTop) : (document.documentElement.scrollTop || document.body.scrollTop)
      this.backTop = sTop >= this.height
    },
    back() {
      const sTop = this.domEl !== window ? (this.domEl.pageYOffset || this.domEl.scrollTop) : (document.documentElement.scrollTop || document.body.scrollTop)
      scrollTop(this.domEl, sTop, 0, this.duration)
      this.$emit('click')
    }
  }
}
</script>
