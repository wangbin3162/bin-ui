<template>
  <div class="bin-select-dropdown" :class="className" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import { getStyle } from '../../utils/dom'
  import { transferIndex, transferIncrease } from '../../utils/transfer-queue'

  const Popper = require('popper.js/dist/umd/popper.js')  // eslint-disable-line

  export default {
    name: 'Drop',
    props: {
      placement: {
        type: String,
        default: 'bottom-start'
      },
      className: {
        type: String
      },
      transfer: {
        type: Boolean
      }
    },
    data () {
      return {
        popper: null,
        width: '',
        popperStatus: false,
        tIndex: this.handleGetIndex()
      }
    },
    computed: {
      styles () {
        let style = {}
        if (this.width) style.minWidth = `${this.width}px`

        if (this.transfer) style['z-index'] = 1060 + this.tIndex

        return style
      }
    },
    methods: {
      update () {
        if (this.popper) {
          this.$nextTick(() => {
            this.popper.update()
            this.popperStatus = true
          })
        } else {
          this.$nextTick(() => {
            this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
              placement: this.placement,
              modifiers: {
                computeStyle: {
                  gpuAcceleration: false
                },
                preventOverflow: {
                  boundariesElement: 'window'
                }
              },
              onCreate: () => {
                this.resetTransformOrigin()
                this.$nextTick(this.popper.update())
              },
              onUpdate: () => {
                this.resetTransformOrigin()
              }
            })
          })
        }
        // set a height for parent is Modal and Select's width is 100%
        // 为parent设置一个height为Modal, Select的宽度为100%
        if (this.$parent.$options.name === 'BSelect') {
          this.width = parseInt(getStyle(this.$parent.$el, 'width'))
        }
        this.tIndex = this.handleGetIndex()
      },
      destroy () {
        if (this.popper) {
          setTimeout(() => {
            if (this.popper && !this.popperStatus) {
              this.popper.destroy()
              this.popper = null
            }
            this.popperStatus = false
          }, 300)
        }
      },
      resetTransformOrigin () {
        // 不判断，Select 会报错，不知道为什么
        if (!this.popper) return

        let xPlacement = this.popper.popper.getAttribute('x-placement')
        let placementStart = xPlacement.split('-')[0]
        let placementEnd = xPlacement.split('-')[1]
        const leftOrRight = xPlacement === 'left' || xPlacement === 'right'
        if (!leftOrRight) {
          this.popper.popper.style.transformOrigin = placementStart === 'bottom' ||
          (placementStart !== 'top' && placementEnd === 'start') ? 'center top' : 'center bottom'
        }
      },
      handleGetIndex () {
        transferIncrease()
        return transferIndex
      }
    },
    created () {
      this.$on('on-update-popper', this.update)
      this.$on('on-destroy-popper', this.destroy)
    },
    beforeDestroy () {
      if (this.popper) {
        this.popper.destroy()
      }
    }
  }
</script>
