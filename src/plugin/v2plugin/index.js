import waves from '../../directive/waves'

// 功能插件
import util from '../../common/util/util'

export default {
  async install (Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示 https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 全局指令
    Vue.directive('waves', waves) //水波纹指令

    // Vue.prototype.$message = Message

    Vue.prototype.$global = {
      zIndex: 2000
    }
    Vue.prototype.$clog = util.log
    Vue.prototype.$open = util.open
    Vue.prototype.$Util = util
  }
}
