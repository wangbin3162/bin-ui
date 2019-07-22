import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkbox-group.vue'

Checkbox.Group = CheckboxGroup

/* istanbul ignore next */
Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
}
export default Checkbox
