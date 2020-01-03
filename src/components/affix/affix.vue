<template>
  <div>
    <div ref="point" :class="affixClass" :style="styles">
      <slot></slot>
    </div>
    <div v-show="slot" :style="slotStyle"></div>
  </div>
</template>

<script>
  import { on, off } from '../../utils/dom'
  import { findComponentUpward } from '../../utils/util'

  export default {
    name: 'BAffix',
    props: {
      offsetTop: {
        type: Number,
        default: 0
      },
      zIndex: {
        type: Number,
        default: 10
      }
    },
    data () {
      return {
        affix: false,
        styles: {},
        slot: false,
        slotStyle: {}
      }
    },
    computed: {
      affixClass () {
        if (this.affix) {
          if (this.scroll) {
            return 'bin-affix-abs'
          } else {
            return 'bin-affix'
          }
        }
        return null
      }
    },
    mounted () {
      // 查找最近的滚动组件
      this.scroll = findComponentUpward(this, 'BScrollbar')
      this.domEl = this.scroll ? this.scroll.$el.querySelector('.bin-scrollbar__wrap') : window

      this.scrollEvent = this.$util.debounce(this.handleScroll, 10)
      on(this.domEl, 'scroll', this.scrollEvent)
      on(window, 'resize', this.scrollEvent)
      this.$nextTick(() => {
        this.handleScroll()
      })
    },
    beforeDestroy () {
      off(this.domEl, 'scroll', this.scrollEvent)
      off(window, 'resize', this.scrollEvent)
    },
    methods: {
      handleScroll () {
        const affix = this.affix
        const scrollTop = this.domEl.pageYOffset || this.domEl.scrollTop
        const oTop = this.$el.offsetTop
        const oLeft = this.$el.offsetLeft

        // Fixed Top
        if ((oTop - this.offsetTop) < scrollTop && !affix) {
          this.affix = true
          this.slotStyle = {
            width: this.$refs.point.clientWidth + 'px',
            height: this.$refs.point.clientHeight + 'px'
          }
          this.slot = true
          this.styles = {
            top: `${this.offsetTop}px`,
            left: `${oLeft}px`,
            width: `${this.$el.offsetWidth}px`,
            zIndex: this.zIndex
          }
          this.$emit('on-change', true)
        } else if ((oTop - this.offsetTop) > scrollTop && affix) {
          this.slot = false
          this.slotStyle = {}
          this.affix = false
          this.styles = null
          this.$emit('on-change', false)
        }
      }
    }
  }
</script>
