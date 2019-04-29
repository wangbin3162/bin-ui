import { addResizeListener, removeResizeListener } from '../../utils/resize-event'
// 指令
import ellipsis from '../../directive/ellipsis'
import waves from '../../directive/waves'

// 功能插件
import util from '../../utils/util'
import log from '../../utils/log'
import dom from '../../utils/dom'

export default {
  async install (Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示 https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 全局指令
    Vue.directive('waves', waves)
    Vue.directive('ellipsis', ellipsis)

    Vue.prototype.$global = {
      zIndex: 2000
    }
    Vue.prototype.$dom = dom
    Vue.prototype.$log = log
    Vue.prototype.$util = util

    Vue.prototype.$open = util.open
    Vue.prototype.$scrollTop = dom.scrollTop
    Vue.prototype.$print = log.print
    Vue.prototype.$resize = {addResizeListener, removeResizeListener}
    // 打印地址
    log.print('welcome to use bin-ui', 'primary')
    log.print('Link: ' + 'https://wangbin3162.github.io/bin-ui-doc/', 'danger')
  }
}
