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
        default: 150
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
      }
    },
    data () {
      return {
        backTop: false
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-show`]: this.backTop
          }
        ]
      },
      styles () {
        return {
          bottom: `${this.bottom}px`,
          right: `${this.right}px`
        }
      },
      innerClasses () {
        return `${prefixCls}-inner`
      }
    },
    mounted () {
      // 如果父级是自定义滚动则绑定滚动为父级元素dom
      this.domEl = this.$parent.$el.className === 'bin-scrollbar' ? this.$parent.$el.querySelector('.bin-scrollbar__wrap') : window
      // 监听滚动事件
      this.throttledScrollHandler = this.$util.throttle(this.handleScroll, 300)
      on(this.domEl, 'scroll', this.throttledScrollHandler)
      on(window, 'resize', this.throttledScrollHandler)
    },
    beforeDestroy () {
      off(this.domEl, 'scroll', this.throttledScrollHandler)
      off(window, 'resize', this.throttledScrollHandler)
    },
    methods: {
      // 滚动监听事件
      handleScroll () {
        this.backTop = this.domEl.pageYOffset || this.domEl.scrollTop >= this.height
      },
      back () {
        const sTop = this.domEl !== window ? (this.domEl.pageYOffset || this.domEl.scrollTop) : (document.documentElement.scrollTop || document.body.scrollTop)
        scrollTop(this.domEl, sTop, 0, this.duration)
        this.$emit('on-click')
      }
    }
  }
</script>
