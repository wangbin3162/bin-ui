import { addClass, removeClass, hasClass } from '../../utils/dom'

export default {
  functional: true,
  render (h, context) {
    const data = {
      props: {
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          el.style.opacity = 0.2
        },
        enter (el) {
          addClass(el, 'el-opacity-transition')
          el.style.opacity = 1
        },
        afterEnter (el) {
          removeClass(el, 'el-opacity-transition')
          el.style.opacity = ''
        },
        beforeLeave (el) {
          if (!el.dataset) el.dataset = {}
          if (hasClass(el, 'el-menu--collapse')) {
            removeClass(el, 'el-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = el.clientWidth
            addClass(el, 'el-menu--collapse')
          } else {
            addClass(el, 'el-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = el.clientWidth
            removeClass(el, 'el-menu--collapse')
          }
          el.style.width = el.scrollWidth + 'px'
          el.style.overflow = 'hidden'
        },
        leave (el) {
          addClass(el, 'horizontal-collapse-transition')
          el.style.width = el.dataset.scrollWidth + 'px'
        }
      }
    }
    return h('transition', data, context.children)
  }
}
