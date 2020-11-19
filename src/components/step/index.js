import step from '../steps/step'

/* istanbul ignore next */
step.install = function (Vue) {
  Vue.component(step.name, step)
}

export default step
