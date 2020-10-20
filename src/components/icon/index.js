import BIcon from './icon.vue'
import BIconSelect from './icon-select'

/* istanbul ignore next */
BIcon.install = function (Vue) {
  Vue.component(BIcon.name, BIcon)
}
/* istanbul ignore next */
BIconSelect.install = function (Vue) {
  Vue.component(BIconSelect.name, BIconSelect)
}

export default BIcon
