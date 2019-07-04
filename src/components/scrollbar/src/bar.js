import { on, off } from '../../../utils/dom'
import { renderThumbStyle, BAR_MAP } from './util'

/* istanbul ignore next */
export default {
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number,
    barStyle: {},
    barWrapStyle: {}
  },

  computed: {
    bar () {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal']
    },
    wrap () {
      return this.$parent.wrap
    }
  },

  render (h) {
    const {size, move, bar} = this
    let barStyle = Object.assign({}, renderThumbStyle({size, move, bar}), this.barStyle)
    return h('div', {
      class: ['bin-scrollbar__bar', 'is-' + bar.key],
      on: {
        mousedown: this.clickTrackHandler
      },
      style: this.barWrapStyle
    }, [
      h('div', {
        ref: 'thumb',
        class: ['bin-scrollbar__thumb'],
        on: {
          mousedown: this.clickThumbHandler
        },
        style: barStyle
      })
    ])
  },

  methods: {
    clickThumbHandler (e) {
      // 防止右键点击事件
      if (e.ctrlKey || e.button === 2) {
        return
      }
      // 开始拖拽事件
      this.startDrag(e)
      this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]))
    },
    // 点击跳转至句柄
    clickTrackHandler (e) {
      const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client])
      // 获取滚动的一半距离
      const thumbHalf = (this.$refs.thumb[this.bar.offset] / 2)
      // 计算需要跳转的位置百分比
      const thumbPositionPercentage = ((offset - thumbHalf) * 100 / this.$el[this.bar.offset])
      // 设置父级的滚动top
      this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100)
    },
    // 开始拖拽事件
    startDrag (e) {
      e.stopImmediatePropagation()
      this.cursorDown = true
      on(document, 'mousemove', this.mouseMoveDocumentHandler)
      on(document, 'mouseup', this.mouseUpDocumentHandler)
      document.onselectstart = () => false
    },
    // 鼠标拖拽模拟
    mouseMoveDocumentHandler (e) {
      if (this.cursorDown === false) return
      const prevPage = this[this.bar.axis]
      if (!prevPage) return
      const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1)
      const thumbClickPosition = (this.$refs.thumb[this.bar.offset] - prevPage)
      const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[this.bar.offset])

      this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100)
    },
    // 鼠标抬起事件
    mouseUpDocumentHandler (e) {
      this.cursorDown = false
      this[this.bar.axis] = 0
      // 移除拖拽事件
      off(document, 'mousemove', this.mouseMoveDocumentHandler)
      document.onselectstart = null
    }
  },
  destroyed () {
    off(document, 'mouseup', this.mouseUpDocumentHandler)
  }
}
