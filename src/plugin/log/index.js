import log from '../../common/util/log'

export default {
  install (Vue, options) {
    Vue.prototype.$clog = log
  }
}
