import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'

Radio.Group = RadioGroup

/* istanbul ignore next */
Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}

export default Radio
