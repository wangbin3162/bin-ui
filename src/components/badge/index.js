import Badge from './badge'

/* istanbul ignore next */
Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge)
}

export default Badge
