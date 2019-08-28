import TimePicker from '../date-picker/picker/time-picker'

/* istanbul ignore next */
TimePicker.install = function (Vue) {
  Vue.component(TimePicker.name, TimePicker)
}

export default TimePicker
