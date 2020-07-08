import TransitionEvents from '../../utils/TransitionEvents'

let instance
let styleForPesudo // 插入style句柄
let clickWaveTimeoutId // 计时器id
let animationStartId // 动画计时器
let animationStart
let destroy
let $el

function bindAnimationEvent(node) {
  if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
    return
  }
  const onClick = e => {
    resetEffect(node)
    let waveColor =
      getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
      getComputedStyle(node).getPropertyValue('border-color') ||
      getComputedStyle(node).getPropertyValue('background-color')
    clickWaveTimeoutId = setTimeout(() => clickHandler(node, waveColor), 0)
    animationStart = true

    if (animationStartId) {
      clearTimeout(animationStartId)
    }
    animationStartId = setTimeout(() => {
      animationStart = false
    }, 10)
  }
  node.addEventListener('click', onClick, true)
  return {
    cancel: () => {
      node.removeEventListener('click', onClick, true)
    }
  }
}

// 重置效果
function resetEffect(node) {
  if (!node || !(node instanceof Element)) {
    return
  }
  const attributeName = getAttributeName()
  node.setAttribute(attributeName, 'false') // edge has bug on `removeAttribute` #14466
  if (styleForPesudo) {
    styleForPesudo.innerHTML = ''
  }
  TransitionEvents.removeStartEventListener(node, onTransitionStart)
  TransitionEvents.removeEndEventListener(node, onTransitionEnd)
}

function onTransitionStart(e) {
  if (destroy) return
  const node = $el
  if (!e || e.target !== node) {
    return
  }
  if (!animationStart) {
    resetEffect(node)
  }
}

function onTransitionEnd(e) {
  if (!e || e.animationName !== 'fadeEffect') {
    return
  }
  resetEffect(e.target)
}

function getAttributeName() {
  return 'bin-click-animating'
}

function clickHandler(el, waveColor) {
  const node = el
  if (!node) {
    return
  }
  const attributeName = getAttributeName()
  node.removeAttribute(attributeName)
  node.setAttribute(attributeName, 'true')
  styleForPesudo = styleForPesudo || document.createElement('style')
  if (waveColor && waveColor !== '#ffffff' &&
    waveColor !== 'rgb(255, 255, 255)' && waveColor !== 'transparent') {
    styleForPesudo.innerHTML = `
      [bin-click-animating='true']::after {
        --bin-wave-shadow-color: ${waveColor};
      }`
    if (!document.body.contains(styleForPesudo)) {
      document.body.appendChild(styleForPesudo)
    }
  }
  TransitionEvents.addStartEventListener(node, onTransitionStart)
  TransitionEvents.addEndEventListener(node, onTransitionEnd)
}

export default {
  bind(el, binding) {
    $el = el
    instance = bindAnimationEvent(el)
  },
  unbind(el) {
    if (instance) {
      instance.cancel()
    }
    if (clickWaveTimeoutId) {
      clearTimeout(clickWaveTimeoutId)
    }
    destroy = true
  }
}
