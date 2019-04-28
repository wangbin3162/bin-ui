import LoadingBar from './src/loading-bar'

let loadingBarInstance
let color = 'primary'
let duration = 800
let failedColor = 'error'
let height = 2
let timer

// 获取loadingBar的实例
function getLoadingBarInstance () {
  //初始化实例
  loadingBarInstance = loadingBarInstance || LoadingBar.newInstance({
    color: color,
    failedColor: failedColor,
    height: height
  })
  return loadingBarInstance
}

//更新进度并传入配置
function update (options) {
  let instance = getLoadingBarInstance()
  instance.update(options)
}

// 隐藏加载进度
function hide () {
  setTimeout(() => {
    update({
      show: false
    })
    setTimeout(() => {
      update({
        percent: 0
      })
    }, 200)
  }, duration)
}

// 清除timer
function clearTimer () {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

export default {
  start () {
    if (timer) return
    let percent = 0
    update({
      percent: percent,
      status: 'success',
      show: true
    })
    //  开启模拟动画
    timer = setInterval(() => {
      percent += Math.floor(Math.random() * 3 + 1)
      if (percent > 95) {
        clearTimer()
      }
      update({
        percent: percent,
        status: 'success',
        show: true
      })
    }, 200)
  },
  update (percent) {
    clearTimer()
    update({
      percent: percent,
      status: 'success',
      show: true
    })
  },
  done () {
    clearTimer()
    update({
      percent: 100,
      status: 'success',
      show: true
    })
    hide()
  },
  error () {
    clearTimer()
    update({
      percent: 100,
      status: 'error',
      show: true
    })
    hide()
  },
  config (options) {
    this.destroy()
    if (options.color) {
      color = options.color
    }
    if (options.duration) {
      duration = options.duration
    }
    if (options.failedColor) {
      failedColor = options.failedColor
    }
    if (options.height) {
      height = options.height
    }
  },
  destroy () {
    clearTimer()
    let instance = getLoadingBarInstance()
    loadingBarInstance = null
    instance.destroy()
  }
}
