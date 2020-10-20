import Vue from 'vue'
import Modal from './modal.vue'
import Button from '../button/button'

const prefixCls = 'bin-modal-confirm'

Modal.newInstance = properties => {
  const _props = properties || {}
  const Instance = new Vue({
    data: Object.assign({}, _props, {
      visible: false,
      width: 400,
      title: '',
      body: '',
      iconType: '',
      iconName: '',
      okText: '确 定',
      okType: 'primary',
      cancelText: '取 消',
      cancelType: 'default',
      showCancel: false,
      loading: false,
      buttonLoading: false,
      scrollable: false
    }),
    render(h) {
      let footerVNodes = []
      if (this.showCancel) {
        footerVNodes.push(h(Button, {
          props: {
            type: this.cancelType
          },
          on: {
            click: this.cancel
          }
        }, this.cancelText))
      }
      footerVNodes.push(h(Button, {
        props: {
          type: this.okType,
          loading: this.buttonLoading
        },
        on: {
          click: this.ok
        }
      }, this.okText))

      // render content
      let bodyRender
      if (this.render) {
        bodyRender = h('div', {
          attrs: {
            class: `${prefixCls}-body ${prefixCls}-body-render`
          }
        }, [this.render(h)])
      } else {
        bodyRender = h('div', {
          attrs: {
            class: `${prefixCls}-body`
          }
        }, [
          h('div', {
            domProps: {
              innerHTML: this.body
            }
          })
        ])
      }

      // when render with no title, hide head
      let headRender
      if (this.title) {
        headRender = h('div', {
          attrs: {
            class: `${prefixCls}-head`
          }
        }, [
          h('div', {
            class: this.iconTypeCls
          }, [
            h('i', {
              class: this.iconNameCls
            })
          ]),
          h('div', {
            attrs: {
              class: `${prefixCls}-head-title`
            },
            domProps: {
              innerHTML: this.title
            }
          })
        ])
      }
      return h(Modal, {
        props: Object.assign({}, _props, {
          width: this.width,
          closable: this.closable
        }),
        domProps: {
          value: this.visible
        },
        on: {
          input: (status) => {
            this.visible = status
          },
          'cancel': this.cancel
        }
      }, [
        h('div', {
          attrs: {
            class: prefixCls
          }
        }, [
          headRender,
          bodyRender,
          h('div', {
            attrs: {
              class: `${prefixCls}-footer`
            }
          }, footerVNodes)
        ])
      ])
    },
    computed: {
      iconTypeCls() {
        return [
          `${prefixCls}-head-icon`,
          `${prefixCls}-head-icon-${this.iconType}`
        ]
      },
      iconNameCls() {
        return [
          'iconfont',
          `icon-${this.iconName}`
        ]
      }
    },
    methods: {
      cancel() {
        this.$children[0].visible = false
        this.buttonLoading = false
        this.onCancel()
        this.remove()
      },
      ok() {
        if (this.loading) {
          this.buttonLoading = true
        } else {
          this.$children[0].visible = false
          this.remove()
        }
        this.onOk()
      },
      remove() {
        setTimeout(() => {
          this.destroy()
        }, 300)
      },
      destroy() {
        this.$destroy()
        document.body.removeChild(this.$el)
        this.onRemove()
      },
      onOk() {
      },
      onCancel() {
      },
      onRemove() {
      }
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const modal = Instance.$children[0]

  return {
    show(props) {
      modal.$parent.showCancel = props.showCancel
      modal.$parent.iconType = props.iconType || props.icon

      switch (props.icon) {
        case 'info':
          modal.$parent.iconName = 'ios-information-circle'
          break
        case 'success':
          modal.$parent.iconName = 'ios-checkmark-circle'
          break
        case 'warning':
          modal.$parent.iconName = 'ios-alert'
          break
        case 'danger':
          modal.$parent.iconName = 'ios-close-circle'
          break
        case 'confirm':
          modal.$parent.iconName = 'ios-help-circle'
          break
        default:
          modal.$parent.iconName = props.icon
          break
      }

      if ('width' in props) {
        modal.$parent.width = props.width
      }
      if ('closable' in props) {
        modal.$parent.closable = props.closable
      }
      if ('title' in props) {
        modal.$parent.title = props.title
      }
      if ('content' in props) {
        modal.$parent.body = props.content
      }
      if ('okText' in props) {
        modal.$parent.okText = props.okText
      }
      if ('okType' in props) {
        modal.$parent.okType = props.okType
      }
      if ('cancelText' in props) {
        modal.$parent.cancelText = props.cancelText
      }
      if ('cancelType' in props) {
        modal.$parent.cancelType = props.cancelType
      }
      if ('onCancel' in props) {
        modal.$parent.onCancel = props.onCancel
      }
      if ('onOk' in props) {
        modal.$parent.onOk = props.onOk
      }
      // async for ok
      if ('loading' in props) {
        modal.$parent.loading = props.loading
      }

      if ('scrollable' in props) {
        modal.$parent.scrollable = props.scrollable
      }

      // notice when component destroy
      modal.$parent.onRemove = props.onRemove

      modal.visible = true
    },
    remove() {
      modal.visible = false
      modal.$parent.buttonLoading = false
      modal.$parent.remove()
    },
    component: modal
  }
}

export default Modal
