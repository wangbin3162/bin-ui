import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'

Checkbox.Group = CheckboxGroup

/* istanbul ignore next */
Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
}
export default Checkbox
