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
    target: {
      type: String,
      default: ''
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
    this.container = document
    this.el = document.documentElement
    if (this.target) {
      this.el = document.querySelector(this.target)
      if (!this.el) {
        console.error(`target is not existed: ${this.target}`)
      }
      this.container = this.el
    }
    this.scrollEvent = this.$throttle(this.handleScroll, 50)
    // 监听滚动事件
    on(this.container, 'scroll', this.scrollEvent)
    on(window, 'resize', this.scrollEvent)
  },
  beforeDestroy() {
    off(this.container, 'scroll', this.scrollEvent)
    off(window, 'resize', this.scrollEvent)
  },
  methods: {
    // 滚动监听事件
    handleScroll() {
      this.backTop = this.el.scrollTop >= this.height
    },
    back() {
      scrollTop(this.el, this.el.scrollTop, 0, this.duration)
      this.$emit('click')
    }
  }
}
</script>
