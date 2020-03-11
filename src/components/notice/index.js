import Notification from './notification'

const prefixCls = 'bin-notice'
const iconPrefixCls = 'bin-icon'
const prefixKey = 'bin_notice_key_'

let top = 24
let defaultDuration = 4.5
let noticeInstance
let name = 1

const iconTypes = {
  'info': 'ios-information-circle',
  'success': 'ios-checkmark-circle',
  'warning': 'ios-warning',
  'danger': 'ios-close-circle'
}

function getNoticeInstance() {
  noticeInstance = noticeInstance || Notification.newInstance({
    prefixCls: prefixCls,
    styles: {
      top: `${top}px`,
      right: 0
    }
  })

  return noticeInstance
}

function notice(type, options) {
  const title = options.title || ''
  const desc = options.desc || ''
  const noticeKey = options.name || `${prefixKey}${name}`
  const onClose = options.onClose || function () {
  }
  const render = options.render
  // todo const btn = options.btn || null;
  const duration = (options.duration === 0) ? 0 : options.duration || defaultDuration

  name++

  let instance = getNoticeInstance()

  let content

  let withIcon

  const withDesc = (options.render && !title) ? '' : (desc || options.render) ? ` ${prefixCls}-with-desc` : ''

  if (type === 'normal') {
    withIcon = false
    content = `
            <div class="${prefixCls}-custom-content ${prefixCls}-with-normal ${withDesc}">
                <div class="${prefixCls}-title">${title}</div>
                <div class="${prefixCls}-desc">${desc}</div>
            </div>
        `
  } else {
    const iconType = iconTypes[type]
    withIcon = true
    content = `
            <div class="${prefixCls}-custom-content ${prefixCls}-with-icon ${prefixCls}-with-${type} ${withDesc}">
                <span class="${prefixCls}-icon ${prefixCls}-icon-${type}">
                    <i class="iconfont icon-${iconType}"></i>
                </span>
                <div class="${prefixCls}-title">${title}</div>
                <div class="${prefixCls}-desc">${desc}</div>
            </div>
        `
  }
  instance.notice({
    name: noticeKey.toString(),
    duration: duration,
    styles: {},
    transitionName: 'move-right',
    content: content,
    withIcon: withIcon,
    render: render,
    hasTitle: !!title,
    onClose: onClose,
    closable: true,
    type: 'notice'
  })
}

export default {
  open(options) {
    return notice('normal', options)
  },
  info(options) {
    return notice('info', options)
  },
  success(options) {
    return notice('success', options)
  },
  warning(options) {
    return notice('warning', options)
  },
  danger(options) {
    return notice('danger', options)
  },
  config(options) {
    if (options.top) {
      top = options.top
    }
    if (options.duration || options.duration === 0) {
      defaultDuration = options.duration
    }
  },
  close(name) {
    if (name) {
      name = name.toString()
      if (noticeInstance) {
        noticeInstance.remove(name)
      }
    } else {
      return false
    }
  },
  destroy() {
    let instance = getNoticeInstance()
    noticeInstance = null
    instance.destroy('bin-notice')
  }
}
