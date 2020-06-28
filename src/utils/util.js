const util = {}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function (title) {
  window.document.title = title || 'bin-ui'
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 * @param target
 */
util.open = function (url, target = false) {
  let a = document.createElement('a')
  a.setAttribute('href', url)
  if (target) {
    a.setAttribute('target', '_blank')
  }
  a.setAttribute('id', 'b-link-temp')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('b-link-temp'))
}

/**
 * @description 拷贝到剪切板
 * @param {String} content 内容
 */
util.copy = function (content) {
  return new Promise(resolve => {
    let copyInput = document.createElement('textarea')
    copyInput.value = content
    copyInput.setAttribute('id', 'b-copy-temp')
    document.body.appendChild(copyInput)
    copyInput.select() // 选择对象
    let result = document.execCommand('Copy') // 执行浏览器复制命令
    copyInput.style.display = 'none'
    document.body.removeChild(document.getElementById('b-copy-temp'))
    resolve(result)
  })
}

/**
 * 时间格式化
 * @param time
 * @param cFormat
 * @param weekArray
 * @returns {*}
 */
util.parseTime = parseTime

/**
 * 获取区间范围，如近一周，近三个月，后一个月等
 * @param days 为负值时往前，正为之后的日期
 * @param mode
 * @returns {*}
 */
util.rangeTime = function (days, mode = '{y}-{m}-{d}') {
  const startDate = new Date()
  const endDate = new Date()
  if (days < 0) {
    startDate.setTime(startDate.getTime() + 3600 * 1000 * 24 * days)
  } else {
    endDate.setTime(endDate.getTime() + 3600 * 1000 * 24 * days)
  }
  const startDateStr = parseTime(startDate, mode)
  const endDateStr = parseTime(endDate, mode)
  return {
    startDate,
    endDate,
    startDateStr,
    endDateStr
  }
}

function parseTime(time, cFormat = '{y}-{m}-{d} {h}:{i}:{s}', weekArray) {
  if (arguments.length === 0) {
    return null
  }
  let type = typeOf(time)
  let date
  switch (type) {
    case 'date':
      date = time
      break
    case 'number':
      date = new Date(time)
      break
    case 'string':
      date = new Date(time.replace(/-/g, '/'))
      break
    default:
      return null
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  return cFormat.replace(/{([ymdhisa])+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') {
      if (weekArray && weekArray.length === 7) {
        return weekArray[value]
      }
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) { // 补0
      value = '0' + value
    }
    return value || 0
  })
}

/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
util.debounce = function (func, wait = 50, immediate = true) {
  let timer, context, args
  // 延迟执行函数
  const later = () => setTimeout(() => {
    // 延迟函数执行完毕，清空缓存的定时器序号
    timer = null
    // 延迟执行的情况下，函数会在延迟函数中执行
    // 使用到之前缓存的参数和上下文
    if (!immediate) {
      func.apply(context, args)
      context = args = null
    }
  }, wait)

  // 这里返回的函数是每次实际调用的函数
  return function (...params) {
    // 如果没有创建延迟执行函数（later），就创建一个
    if (!timer) {
      timer = later()
      // 如果是立即执行，调用函数
      // 否则缓存参数和调用上下文
      if (immediate) {
        func.apply(this, params)
      } else {
        context = this
        args = params
      }
      // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
      // 这样做延迟函数会重新计时
    } else {
      clearTimeout(timer)
      timer = later()
    }
  }
}

/**
 * 洗牌函数
 * @param arr 需要洗牌的数组
 */
util.shuffle = function (arr) {
  let newArr = arr.slice()// 复制一个新数组
  for (let i = 0; i < newArr.length; i++) {
    let j = util.getRandomInt(0, i)// 在0-当前循环的位置随机一个位置做交换
    let t = newArr[i]
    newArr[i] = newArr[j]
    newArr[j] = t
  }
  return newArr
}

/**
 * 在某个区间随机一个整数
 * @param min 最小值
 * @param max 最大值
 * @return {number}
 */
util.getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 清空回车换行符
 * @param str
 * @returns {*}
 */
util.replaceReturn = function (str) {
  return str ? str.replace(/(↵)+|(\n)+|(\r\n)+/g, '') : ''
}

/**
 * 返回一个水印canvas
 */
util.getWaterMark = function (str) {
  let waterMarkText = str || 'water-mark'

  let canvas = document.createElement('canvas')
  let ctx = canvas.getContext('2d')
  canvas.width = canvas.height = 100
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.globalAlpha = 0.08
  ctx.font = '20px Microsoft Yahei'
  ctx.translate(50, 50)
  ctx.rotate(-Math.PI / 4)
  ctx.fillText(waterMarkText, 0, 0)
  return canvas
}

util.deepClone = deepCopy

util.onOf = oneOf

util.typeOf = typeOf

// 一个值是否在列表中
export function oneOf(value, validList) {
  return validList.indexOf(value) > -1
}

// Find components upward
export function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

// Find component downward
export function findComponentDownward(context, componentName) {
  const childrens = context.$children
  let children = null

  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}

// Find components downward
export function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// Find components upward
export function findComponentsUpward(context, componentName) {
  let parents = []
  const parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}

// Find brothers components
export function findBrothersComponents(context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}

function typeOf(obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

export function deepCopy(data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

export default util
