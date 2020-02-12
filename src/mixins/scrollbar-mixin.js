// used for Modal  & Drawer
import { getScrollBarSize } from '../utils/util'

export default {
  methods: {
    checkScrollBar() {
      let fullWindowWidth = window.innerWidth
      if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
        const documentElementRect = document.documentElement.getBoundingClientRect()
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
      }
      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
      if (this.bodyIsOverflowing) {
        this.scrollBarWidth = getScrollBarSize()
      }
    },
    checkMaskInVisible() {
      let masks = document.getElementsByClassName('bin-modal-mask') || []
      return Array.from(masks).every(m => m.style.display === 'none' || m.classList.contains('fade-in-linear-leave-to'))
    },
    setScrollBar() {
      if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
        document.body.style.paddingRight = `${this.scrollBarWidth}px`
      }
    },
    resetScrollBar() {
      document.body.style.paddingRight = ''
    },
    addScrollEffect() {
      this.checkScrollBar()
      this.setScrollBar()
      document.body.style.overflow = 'hidden'
    },
    removeScrollEffect() {
      if (this.checkMaskInVisible()) {
        document.body.style.overflow = ''
        this.resetScrollBar()
      }
    }
  }
}
