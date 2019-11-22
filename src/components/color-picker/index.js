import ColorPicker from './color-picker.vue'

/* istanbul ignore next */
ColorPicker.install = function (Vue) {
  Vue.component(ColorPicker.name, ColorPicker)
}

export default ColorPicker
