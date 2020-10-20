/*eslint-disable*/
// 把 YYYY-MM-DD 改成了 yyyy-MM-dd
(function (main) {
  'use strict'

  /**
   * Parse or format dates
   * @class fecha
   */
  let fecha = {}
  let token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g
  let twoDigits = /\d\d?/
  let threeDigits = /\d{3}/
  let fourDigits = /\d{4}/
  let word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i
  let noop = function () {
  }

  function shorten(arr, sLen) {
    let newArr = []
    for (let i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen))
    }
    return newArr
  }

  function monthUpdate(arrName) {
    return function (d, v, i18n) {
      let index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase())
      if (~index) {
        d.month = index
      }
    }
  }

  function pad(val, len) {
    val = String(val)
    len = len || 2
    while (val.length < len) {
      val = '0' + val
    }
    return val
  }

  let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let monthNamesShort = shorten(monthNames, 3)
  let dayNamesShort = shorten(dayNames, 3)
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    /**
     * @return {string}
     */
    DoFn: function DoFn(D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10]
    }
  }

  let formatFlags = {
    /**
     * @return {number}
     */
    D: function (dateObj) {
      return dateObj.getDay()
    },
    DD: function (dateObj) {
      return pad(dateObj.getDay())
    },
    Do: function (dateObj, i18n) {
      return i18n.DoFn(dateObj.getDate())
    },
    d: function (dateObj) {
      return dateObj.getDate()
    },
    dd: function (dateObj) {
      return pad(dateObj.getDate())
    },
    ddd: function (dateObj, i18n) {
      return i18n.dayNamesShort[dateObj.getDay()]
    },
    dddd: function (dateObj, i18n) {
      return i18n.dayNames[dateObj.getDay()]
    },
    /**
     * @return {number}
     */
    M: function (dateObj) {
      return dateObj.getMonth() + 1
    },
    MM: function (dateObj) {
      return pad(dateObj.getMonth() + 1)
    },
    MMM: function (dateObj, i18n) {
      return i18n.monthNamesShort[dateObj.getMonth()]
    },
    /**
     * @return {string}
     */
    MMMM: function (dateObj, i18n) {
      return i18n.monthNames[dateObj.getMonth()]
    },
    yy: function (dateObj) {
      return String(dateObj.getFullYear()).substr(2)
    },
    yyyy: function (dateObj) {
      return dateObj.getFullYear()
    },
    h: function (dateObj) {
      return dateObj.getHours() % 12 || 12
    },
    hh: function (dateObj) {
      return pad(dateObj.getHours() % 12 || 12)
    },
    /**
     * @return {number}
     */
    H: function (dateObj) {
      return dateObj.getHours()
    },
    HH: function (dateObj) {
      return pad(dateObj.getHours())
    },
    m: function (dateObj) {
      return dateObj.getMinutes()
    },
    mm: function (dateObj) {
      return pad(dateObj.getMinutes())
    },
    s: function (dateObj) {
      return dateObj.getSeconds()
    },
    ss: function (dateObj) {
      return pad(dateObj.getSeconds())
    },
    /**
     * @return {number}
     */
    S: function (dateObj) {
      return Math.round(dateObj.getMilliseconds() / 100)
    },
    SS: function (dateObj) {
      return pad(Math.round(dateObj.getMilliseconds() / 10), 2)
    },
    SSS: function (dateObj) {
      return pad(dateObj.getMilliseconds(), 3)
    },
    a: function (dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1]
    },
    /**
     * @return {string}
     */
    A: function (dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase()
    },
    /**
     * @return {string}
     */
    ZZ: function (dateObj) {
      let o = dateObj.getTimezoneOffset()
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4)
    }
  }

  let parseFlags = {
    d: [twoDigits, function (d, v) {
      d.day = v
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1
    }],
    yy: [twoDigits, function (d, v) {
      let da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2)
      d.year = '' + (v > 68 ? cent - 1 : cent) + v
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v
    }],
    s: [twoDigits, function (d, v) {
      d.second = v
    }],
    yyyy: [fourDigits, function (d, v) {
      d.year = v
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v
    }],
    D: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, i18n) {
      let val = v.toLowerCase()
      if (val === i18n.amPm[0]) {
        d.isPm = false
      } else if (val === i18n.amPm[1]) {
        d.isPm = true
      }
    }],
    ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
      let parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes

      if (parts) {
        minutes = +(parts[1] * 60) + parseInt(parts[2], 10)
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes
      }
    }]
  }
  parseFlags.DD = parseFlags.DD
  parseFlags.dddd = parseFlags.ddd
  parseFlags.Do = parseFlags.dd = parseFlags.d
  parseFlags.mm = parseFlags.m
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h
  parseFlags.MM = parseFlags.M
  parseFlags.ss = parseFlags.s
  parseFlags.A = parseFlags.a

  // Some common format strings
  fecha.masks = {
    'default': 'ddd MMM dd yyyy HH:mm:ss',
    shortDate: 'M/D/yy',
    mediumDate: 'MMM d, yyyy',
    longDate: 'MMMM d, yyyy',
    fullDate: 'dddd, MMMM d, yyyy',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
  }

  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */
  fecha.format = function (dateObj, mask, i18nSettings) {
    let i18n = i18nSettings || fecha.i18n

    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj)
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in fecha.format')
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default']

    return mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1)
    })
  }

  /**
   * Parse a date string into an object, changes - into /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @returns {Date|boolean}
   */
  fecha.parse = function (dateStr, format, i18nSettings) {
    let i18n = i18nSettings || fecha.i18n

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse')
    }

    format = fecha.masks[format] || format

    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
      return false
    }

    let isValid = true
    let dateInfo = {}
    format.replace(token, function ($0) {
      if (parseFlags[$0]) {
        let info = parseFlags[$0]
        let index = dateStr.search(info[0])
        if (!~index) {
          isValid = false
        } else {
          dateStr.replace(info[0], function (result) {
            info[1](dateInfo, result, i18n)
            dateStr = dateStr.substr(index + result.length)
            return result
          })
        }
      }

      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1)
    })

    if (!isValid) {
      return false
    }

    let today = new Date()
    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0
    }

    let date
    if (dateInfo.timezoneOffset != null) {
      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset
      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0))
    } else {
      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0)
    }
    return date
  }

  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fecha
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return fecha
    })
  } else {
    main.fecha = fecha
  }
})(this)
