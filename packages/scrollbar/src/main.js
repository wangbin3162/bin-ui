import { toObject } from './util'

export default {
  name: 'BScrollbar',
  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },
  data () {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    }
  },
  computed: {
    wrap () {
      return this.$refs.wrap
    }
  },
  render (h) {
    // 获取浏览器滚动条宽度scrollBarWidth()// 这里先默认为17
    let gutter = 17
    let style = this.wrapStyle
    // 如果宽度获取成功
    if (gutter) {
      const gutterWith = `-${gutter}px`
      const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`
      // 设置margin隐藏原有滚动条
      if (Array.isArray(this.wrapStyle)) {
        style = toObject(this.wrapStyle)
        style.marginRight = style.marginBottom = gutterWith
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle
      } else {
        style = gutterStyle
      }
    }
    let nodes
    // 创建slots视图
    const view = h(this.tag, {
      class: ['bin-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default)
    // 创建容器
    const wrap = h('div', {
      class: [this.wrapClass, 'bin-scrollbar__wrap', gutter ? '' : 'bin-scrollbar__wrap--hidden-default'],
      style: style,
      ref: 'resize'
    }, [view])

    // 如果不需要显示滚动条
    if (!this.native) {
      nodes = wrap
    } else {
      nodes = wrap
    }
    return h('div', {class: 'bin-scrollbar'}, [wrap])
  },

  methods: {
    handleScroll () {
      const wrap = this.wrap
      this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight)
      this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth)
    },
    update () {
    }
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
