<template>
  <li :class="itemClasses">
    <div :class="tailClasses"></div>
    <div :class="headClasses" :style="customColor" ref="dot">
      <slot name="dot"></slot>
    </div>
    <div :class="contentClasses">
      <slot></slot>
    </div>
  </li>
</template>
<script>
  import { oneOf } from '../../utils/util'

  const prefixCls = 'bin-timeline'

  export default {
    name: 'BTimelineItem',
    props: {
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        dot: false
      }
    },
    mounted () {
      this.dot = !!this.$refs.dot.innerHTML.length
    },
    computed: {
      itemClasses () {
        return `${prefixCls}-item`
      },
      tailClasses () {
        return `${prefixCls}-item-tail`
      },
      headClasses () {
        return [
          `${prefixCls}-item-head`,
          {
            [`${prefixCls}-item-head-custom`]: this.dot,
            [`${prefixCls}-item-head-${this.color}`]: this.headColorShow
          }
        ]
      },
      headColorShow () {
        return oneOf(this.color, ['primary', 'success', 'info', 'warning', 'danger'])
      },
      customColor () {
        let style = {}
        if (this.color) {
          if (!this.headColorShow) {
            style = {
              'color': this.color,
              'border-color': this.color
            }
          }
        }

        return style
      },
      contentClasses () {
        return `${prefixCls}-item-content`
      }
    }
  }
</script>
