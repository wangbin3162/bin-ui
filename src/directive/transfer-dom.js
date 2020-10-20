// move-to-body
export default {
  inserted(el, { value }, vnode) {
    if (el.dataset && el.dataset.transfer !== 'true') return false
    el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom'
    const parentNode = el.parentNode
    if (!parentNode) return
    const home = document.createComment('')
    let hasMovedOut = false
    if (value !== false) {
      parentNode.replaceChild(home, el) // moving out, el is no longer in the document
      document.body.appendChild(el) // moving into body
      hasMovedOut = true
    }
  },
  unbind(el, { value }, vnode) {
    const parentNode = el.parentNode
    if (parentNode && parentNode === document.body) {
      // remove body el
      document.body.removeChild(el)
    }
  }
}
