import Modal from './src/confirm'

let modalInstance

function getModalInstance (render = undefined) {
  modalInstance = modalInstance || Modal.newInstance({
    closable: false,
    maskClosable: false,
    footerHide: true,
    render: render
  })

  return modalInstance
}

function confirm (options) {
  const render = ('render' in options) ? options.render : undefined
  let instance = getModalInstance(render)

  options.onRemove = function () {
    modalInstance = null
  }

  instance.show(options)
}

Modal.alert = function (props = {}) {
  props.icon = 'info'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return confirm(props)
}
Modal.alert.success = function (props = {}) {
  props.icon = 'success'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return confirm(props)
}
Modal.alert.warning = function (props = {}) {
  props.icon = 'warning'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return confirm(props)
}
Modal.alert.danger = function (props = {}) {
  props.icon = 'danger'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return confirm(props)
}

Modal.confirm = function (props = {}) {
  props.icon = 'confirm'
  props.showCancel = true
  return confirm(props)
}

Modal.remove = function () {
  if (!modalInstance) {   // at loading status, remove after Cancel
    return false
  }

  const instance = getModalInstance()

  instance.remove()
}

/* istanbul ignore next */
Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal)
}

export default Modal
