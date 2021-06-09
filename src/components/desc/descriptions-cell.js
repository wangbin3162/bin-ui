export default {
  name: 'BDescCell',
  inject: ['BDesc'],
  props: {
    cell: {
      type: Object
    },
    tag: {
      type: String
    },
    type: {
      type: String
    }
  },
  computed: {
    label() {
      return (this.cell && this.cell.data) ? this.cell.data.attrs.label : ''
    },
    content() {
      return (this.cell && this.cell.componentOptions) ? this.cell.componentOptions.children : ''
    },
    span() {
      return (this.cell.componentOptions.propsData && this.cell.componentOptions.propsData.span) ? this.cell.componentOptions.propsData.span : 1
    },
    labelWidth() {
      return this.BDesc.labelWidth || (50 / this.BDesc.column)
    },
    contentWidth() {
      const labelWidth = this.BDesc.labelWidth
      const column = this.BDesc.column
      return labelWidth ? ((100 - column * labelWidth) / column) : (50 / column)
    }
  },
  render(h) {
    switch (this.type) {
      case 'label':
        return h(this.tag, {
          'class': ['bin-desc__label', { 'is-bordered-label': this.BDesc.border }],
          style: { width: `${this.labelWidth}%` },
          attrs: { colSpan: 1 }
        }, this.label)
      case 'content':
        return h(this.tag, {
          'class': 'bin-desc__content',
          style: { width: `${this.span * this.contentWidth}%` },
          attrs: { colSpan: this.span }
        }, this.content)
      default:
        return h('td', {
          attrs: { colSpan: this.span },
          style: { width: `${this.span * this.contentWidth}%` }
        }, [
          h('span', {
            'class': 'bin-desc__label'
          }, this.label + ':'),
          h('span', {
            'class': 'bin-desc__content'
          }, this.content)])
    }
  }
}
