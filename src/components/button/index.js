import BButton from './src/button'

/* istanbul ignore next */
BButton.install = function (Vue) {
  Vue.component(BButton.name, BButton)
}

export default BButton
