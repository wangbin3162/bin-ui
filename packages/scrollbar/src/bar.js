import { renderThumbStyle, BAR_MAP } from './util'

/* istanbul ignore next */
export default {
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number
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
    const nodes = h('div', {
      class: ['el-scrollbar__bar', 'is-' + bar.key],
      on: {
        onMousedown: this.clickTrackHandler
      },
    }, h('div', {
      ref: 'thumb',
      class: ['el-scrollbar__thumb'],
      on: {
        onMousedown: this.clickThumbHandler
      },
      style: renderThumbStyle({size, move, bar})
    }))

    return h('div', {}, nodes)
  },

  methods: {
    clickThumbHandler (e) {

    },

    clickTrackHandler (e) {

    },

    startDrag (e) {

    },

    mouseMoveDocumentHandler (e) {

    },

    mouseUpDocumentHandler (e) {

    }
  },

  destroyed () {

  }
}
