import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由数据
import routes from './routes'

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  NProgress.done()
  // util.title(to.meta.title)
})

export default router
