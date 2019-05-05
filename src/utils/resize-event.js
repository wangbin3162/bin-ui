import ResizeObserver from 'resize-observer-polyfill'

const isServer = typeof window === 'undefined'

/* istanbul ignore next */
const resizeHandler = function (entries) {
  for (let entry of entries) {
    const listeners = entry.target.__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach(fn => {
        fn()
      })
    }
  }
}

/* istanbul ignore next */
export const addResizeListener = function (el, fn) {
  if (isServer) return
  if (!el.__resizeListeners__) {
    el.__resizeListeners__ = []
    el.__ro__ = new ResizeObserver(resizeHandler)
    el.__ro__.observe(el)
  }
  el.__resizeListeners__.push(fn)
}

/* istanbul ignore next */
export const removeResizeListener = function (el, fn) {
  if (!el || !el.__resizeListeners__) return
  el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(fn), 1)
  if (!el.__resizeListeners__.length) {
    el.__ro__.disconnect()
  }
}
