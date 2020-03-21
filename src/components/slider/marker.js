export default {
  name: 'SliderMarker',
  props: {
    mark: {
      type: [String, Object]
    }
  },
  render(h) {
    let label = typeof this.mark === 'string' ? this.mark : [this.mark.label]

    return h('div', {
      class: 'bin-slider-marks-item',
      style: this.mark.style || {}
    }, label)
  }
}
