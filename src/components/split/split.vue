<template>
  <div :style="{ cursor, userSelect}" class="bin-splitter-container clear-fix" @mouseup="onMouseUp"
       @mousemove="onMouseMove">

    <pane class="bin-splitter-pane splitter-left" :split="split" :style="{ [type]: percent+'%'}">
      <slot name="left"></slot>
    </pane>

    <resizer :className="className" :style="{ [resizeType]: percent+'%'}" :split="split" @mousedown.native="onMouseDown"
             @click.native="onClick"></resizer>

    <pane class="bin-splitter-pane splitter-right" :split="split" :style="{ [type]: 100-percent+'%'}">
      <slot name="right"></slot>
    </pane>

  </div>
</template>

<script>
  import Resizer from './resizer'
  import Pane from './pane'

  export default {
    name: 'BSplit',
    components: { Resizer, Pane },
    props: {
      minPercent: {
        type: Number,
        default: 10
      },
      defaultPercent: {
        type: Number,
        default: 20
      },
      split: {
        validator(value) {
          return ['vertical', 'horizontal'].indexOf(value) >= 0
        },
        default: 'vertical'
      },
      className: String
    },
    computed: {
      userSelect() {
        return this.active ? 'none' : ''
      },
      cursor() {
        return this.active ? 'col-resize' : ''
      }
    },
    data() {
      return {
        active: false,
        hasMoved: false,
        height: null,
        percent: this.defaultPercent,
        type: this.split === 'vertical' ? 'width' : 'height',
        resizeType: this.split === 'vertical' ? 'left' : 'top'
      }
    },
    methods: {
      onClick() {
        if (!this.hasMoved) {
          this.percent = this.defaultPercent
          this.$emit('on-resize', this.percent)
        }
      },
      onMouseDown() {
        this.active = true
        this.hasMoved = false
      },
      onMouseUp() {
        this.active = false
      },
      onMouseMove(e) {
        if (e.buttons === 0 || e.which === 0) {
          this.active = false
        }
        if (this.active) {
          let offset = 0
          let target = e.currentTarget
          if (this.split === 'vertical') {
            while (target) {
              offset += target.offsetLeft
              target = target.offsetParent
            }
          } else {
            while (target) {
              offset += target.offsetTop
              target = target.offsetParent
            }
          }
          const currentPage = this.split === 'vertical' ? e.pageX : e.pageY
          const targetOffset = this.split === 'vertical' ? e.currentTarget.offsetWidth : e.currentTarget.offsetHeight
          const percent = Math.floor(((currentPage - offset) / targetOffset) * 10000) / 100
          if (percent > this.minPercent && percent < 100 - this.minPercent) {
            this.percent = percent
          }
          this.$emit('on-resize', percent)
          this.hasMoved = true
        }
      }
    }
  }
</script>
