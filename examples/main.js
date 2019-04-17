import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BinUI from '../src/index'
import '../packages/theme/src/index.styl'
import './assets/styles/color-brewer.css'
import './assets/styles/common.styl'
import './assets/styles/fonts/iconfont.css'

import DemoBlock from './components/demo-block.vue'

Vue.use(BinUI)
Vue.component('DemoBlock', DemoBlock)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
