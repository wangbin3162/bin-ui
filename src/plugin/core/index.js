import config from '../../../package.json'
// 指令
import clickOutSide from '../../directive/clickoutside'
import waves from '../../directive/waves'
import clickAnimation from '../../directive/click-animation/click-animation'

// 功能插件
import util, { debounce, throttle, isEqual } from '../../utils/util'
import log from '../../utils/log'
import { scrollTop } from '../../utils/dom'
import { addResizeListener, removeResizeListener } from '../../utils/resize-event'

let baseUrl = 'https://wangbin3162.gitee.io'

export default {
  async install(Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示 https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 全局过滤器
    Vue.filter('filterTime', function (time) {
      return util.parseTime(time, '{y}-{m}-{d}')
    })
    // 全局指令
    Vue.directive('waves', waves)
    Vue.directive('clickOutSide', clickOutSide)
    Vue.directive('clickAnimation', clickAnimation)

    Vue.prototype.$global = {
      zIndex: 2000
    }
    Vue.prototype.$log = log
    Vue.prototype.$util = util

    Vue.prototype.$open = util.open
    Vue.prototype.$copy = util.copy

    Vue.prototype.$throttle = throttle
    Vue.prototype.$debounce = debounce
    Vue.prototype.$isEqual = isEqual
    Vue.prototype.$print = log.print
    Vue.prototype.$scrollTop = scrollTop
    Vue.prototype.$resize = { addResizeListener, removeResizeListener }
    if (options && options.disabledDoc) return
    log.pretty(`[${config.name}] ${config.version}`, `${baseUrl}/${config.name}`)
  }
}
