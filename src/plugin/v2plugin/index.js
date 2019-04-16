import 'normalize.css'
import 'flex.css'
// 指令
import waves from '../../directive/waves'

// 功能插件
import pluginLog from '../log'
import pluginOpen from '../open'

export default {
  async install (Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示 https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false

    Vue.prototype.$Global = {
      zIndex: 2000
    }
    // 全局指令
    Vue.directive('waves', waves) //水波纹指令
    // Vue.prototype.$loading = Loading.service
    // Vue.prototype.$msgbox = MessageBox
    // Vue.prototype.$alert = MessageBox.alert
    // Vue.prototype.$confirm = MessageBox.confirm
    // Vue.prototype.$prompt = MessageBox.prompt
    // Vue.prototype.$notify = Notification
    // Vue.prototype.$message = Message
    Vue.use(pluginLog)
    Vue.use(pluginOpen)
  }
}
