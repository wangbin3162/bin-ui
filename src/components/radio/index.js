import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'

Radio.Group = RadioGroup

/* istanbul ignore next */
Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}

export default Radio
