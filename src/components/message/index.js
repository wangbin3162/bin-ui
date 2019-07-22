import Message from './src/message'

const prefixKey = 'bin_message_key_'
let messageInstance
let name = 1

// 获取一个实例
function getMessageInstance () {
  messageInstance = messageInstance || Message.newInstance({
    styles: {
      top: '24px'
    }
  })
  return messageInstance
}

// 提示方法
function notice (options) {
  let instance = getMessageInstance()
  let _notice = Object.assign({ name: `${prefixKey}${name}` }, options)
  // 实例弹出提示
  instance.notice(_notice)
  // 用于手动消除
  return (function () {
    let target = name++

    return function () {
      instance.remove(`${prefixKey}${target}`)
    }
  })()
}

let defaultOption = {
  transitionName: 'move-up',
  type: 'info',
  content: '',
  duration: 3,
  closable: false,
  render: function () {
  },
  onClose: function () {
  }
}
export default {
  name: 'Message',
  message (options) {
    // 如果第一个是默认字符
    let _option = {}
    if (typeof options === 'string') {
      _option = Object.assign({}, defaultOption, { content: options })
      return notice(_option)
    }
    _option = Object.assign({}, defaultOption, options)
    return notice(_option)
  },
  destroy () {
    let instance = getMessageInstance()
    messageInstance = null
    instance.destroy('bin-message')
  }
}
