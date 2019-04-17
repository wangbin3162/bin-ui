import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/color-brewer.css'
import './assets/styles/fonts/iconfont.css'
import './assets/styles/index.styl'

import BinUI from '../src/index'
import '../packages/theme/src/index.styl'

Vue.use(BinUI)

import DemoBlock from './components/demo-block.vue'
import SideNav from './components/side-nav.vue'

Vue.component('DemoBlock', DemoBlock)
Vue.component('SideNav', SideNav)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
