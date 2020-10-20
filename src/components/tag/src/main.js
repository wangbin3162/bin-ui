import { typeColor } from '../../../utils/log'

export default {
  name: 'BTag',
  data() {
    return {
      checked: true
    }
  },
  props: {
    name: '',
    closable: Boolean,
    type: String,
    dot: Boolean,
    noBorder: Boolean,
    color: String,
    tagStyle: {},
    size: String,
    fontSize: String,
    dark: Boolean,
    checkable: Boolean,
    value: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value: {
      handler(value) {
        this.checked = value
      },
      immediate: true
    }
  },
  methods: {
    handleClose(event) {
      event.stopPropagation()
      this.$emit('close', event)
    },
    handleClick(event) {
      event.stopPropagation()
      if (this.checkable) {
        this.checked = !this.checked
        this.$emit('input', this.checked)
        this.$emit('change', this.checked, this.name)
      }
      this.$emit('click', event)
    }
  },
  computed: {
    dotColor() {
      // 获取type的颜色
      if (this.type) {
        return typeColor(this.type)
      }
      return this.color
    },
    tagStyleBind() {
      return this.tagStyle ? this.tagStyle
        : this.dot ? {
            backgroundColor: 'transparent',
            color: this.color,
            fontSize: this.fontSize
          }
          : {
            backgroundColor: this.color,
            color: this.color ? '#fff' : '',
            fontSize: this.fontSize
          }
    }
  },
  render(h) {
    let $child = []
    const dotEl = h('span', {
      class: ['bin-dot'],
      style: { backgroundColor: this.dotColor }
    })
    const closeEl = h('i', {
      class: ['iconfont', 'icon-ios-close'],
      style: this.dot ? { backgroundColor: '#fff', color: this.color } : {},
      on: {
        click: this.handleClose
      }
    })
    let $inner = []
    // 有没有dot
    this.dot && $inner.push(dotEl)
    $inner.push(this.$slots.default)
    // 有没有关闭按钮
    this.closable && $inner.push(closeEl)
    // tag标签
    const tagEl = h('span', {
      class: ['bin-tag',
        this.type ? `is-${this.type}` : '',
        this.size ? `is-${this.size}` : '',
        this.dark ? 'is-dark' : '',
        this.checkable ? 'is-checkable' : '',
        (this.checkable && this.checked) ? 'is-checked' : '',
        { 'no-border': this.noBorder }
      ],
      style: this.tagStyleBind,
      on: {
        click: this.handleClick
      }
    }, $inner)
    $child.push(tagEl)
    return h('transition', {
      attrs: {
        name: 'zoom-in-center'
      }
    }, $child)
  }
}
