import Form from './form.vue'
import FormItem from './form-item.vue'

Form.Item = FormItem

/* istanbul ignore next */
Form.install = function (Vue) {
  Vue.component(Form.name, Form)
}
export default Form
