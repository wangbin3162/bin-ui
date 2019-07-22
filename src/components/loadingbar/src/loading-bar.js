import LoadingBar from './loading-bar.vue'
import Vue from 'vue'

LoadingBar.newInstance = properties => {
  const _props = properties || {}
  // 创建一个实例
  const Instance = new Vue({
    data: _props,
    render (h) {
      return h(LoadingBar, {
        props: _props
      })
    }
  })
  // 绑定组件实例
  const component = Instance.$mount()
  // 添加到dom
  document.body.appendChild(component.$el)
  // 这个loading_bar即是返回的Vnode
  const loadingBar = Instance.$children[0]
  // 返回一个vnode对象
  return {
    update (options) {
      if ('percent' in options) {
        loadingBar.percent = options.percent
      }
      if (options.status) {
        loadingBar.status = options.status
      }
      if ('show' in options) {
        loadingBar.show = options.show
      }
    },
    component: loadingBar,
    destroy () {
      document.body.removeChild(document.getElementsByClassName('bin-loading-bar')[0])
    }
  }
}

export default LoadingBar
