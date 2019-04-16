import util from '../../common/util/util'

export default {
  install (Vue, options) {
    Vue.prototype.$open = util.open
  }
}
