import Message from './message.vue'
import Vue from 'vue'

Message.newInstance = properties => {
  const _props = properties || {}
  // 创建一个实例
  const Instance = new Vue({
    render(h) {
      return h(Message, {
        props: _props
      })
    }
  })
  // 绑定组件实例
  const component = Instance.$mount()
  // 添加到dom
  document.body.appendChild(component.$el)
  // 这个notification即是返回的Vnode
  const message = Instance.$children[0]
  // 返回一个vnode对象
  return {
    notice(noticeProps) {
      message.add(noticeProps)
    },
    remove(name) {
      message.close(name)
    },
    component: message,
    destroy(element) {
      message.closeAll()
      setTimeout(function () {
        document.body.removeChild(document.getElementsByClassName(element)[0])
      }, 500)
    }
  }
}

export default Message
