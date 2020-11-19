import steps from './steps'

/* istanbul ignore next */
steps.install = function (Vue) {
  Vue.component(steps.name, steps)
}

export default steps
