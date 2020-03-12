import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BinUI from '../src/index'
import '../src/styles/index.styl'
import './assets/styles/color-brewer.css'
import './assets/styles/index.styl'
import icon from './icon.config'

import BCollapseTransition from '../src/components/base/collapse-transition'

import DemoBlock from './components/demo-block.vue'
import MainHeader from './components/header.vue'
import MainFooter from './components/footer.vue'
import SideNav from './components/side-nav.vue'

Vue.use(BinUI)

Vue.component('DemoBlock', DemoBlock)
Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.component('SideNav', SideNav)
Vue.component('BCollapseTransition', BCollapseTransition)

Vue.prototype.$icon = icon // Icon 列表页用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
