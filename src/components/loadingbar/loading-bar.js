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
  const loading_bar = Instance.$children[0]
  // 返回一个vnode对象
  return {
    update (options) {
      if ('percent' in options) {
        loading_bar.percent = options.percent
      }
      if (options.status) {
        loading_bar.status = options.status
      }
      if ('show' in options) {
        loading_bar.show = options.show
      }
    },
    component: loading_bar,
    destroy () {
      document.body.removeChild(document.getElementsByClassName('bin-loading-bar')[0])
    }
  }
}

export default LoadingBar
