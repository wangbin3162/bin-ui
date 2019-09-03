module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__("fa49");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(util.format(options.messages.whitespace, rule.fullField));
  }
}

exports['default'] = whitespace;

/***/ }),

/***/ "123a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = floatFn;

/***/ }),

/***/ "12d4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__("fa49");

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = boolean;

/***/ }),

/***/ "1996":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__("fa49");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var ENUM = 'enum';

/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

exports['default'] = enumerable;

/***/ }),

/***/ "1afe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _required = __webpack_require__("975a");

var _required2 = _interopRequireDefault(_required);

var _whitespace = __webpack_require__("014d");

var _whitespace2 = _interopRequireDefault(_whitespace);

var _type = __webpack_require__("a043");

var _type2 = _interopRequireDefault(_type);

var _range = __webpack_require__("97c3");

var _range2 = _interopRequireDefault(_range);

var _enum = __webpack_require__("1996");

var _enum2 = _interopRequireDefault(_enum);

var _pattern = __webpack_require__("9a85");

var _pattern2 = _interopRequireDefault(_pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  required: _required2['default'],
  whitespace: _whitespace2['default'],
  type: _type2['default'],
  range: _range2['default'],
  'enum': _enum2['default'],
  pattern: _pattern2['default']
};

/***/ }),

/***/ "1ce5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (!(0, _util.isEmptyValue)(value)) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = regexp;

/***/ }),

/***/ "24aa":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "2f6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (!(0, _util.isEmptyValue)(value, 'string')) {
      _rule2['default'].pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = pattern;

/***/ }),

/***/ "3268":
/***/ (function(module, exports) {

// calendar with 8 column x 7 rows

var oneDay = 1000 * 60 * 60 * 24;

function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getYear(year, month, weekNr){
	if (month === 0 && weekNr > 50) return year - 1;
	else if(month === 11 && weekNr < 10) return year + 1;
	else return year;
}

function getDateInfo(y, m, d, iso) {
	if (m > 11){
		m = 0;
		y++;
	}
    var currentDay = new Date(y, m, d);
    if (iso) currentDay.setDate(currentDay.getDate() + 4 - (currentDay.getDay() || 7));
    var year = iso ? currentDay.getFullYear() : y;
    var firstOfJanuary = new Date(year, 0, 1);
    var numberOfDays = 1 + Math.round((currentDay - firstOfJanuary) / oneDay);

    if (!iso) numberOfDays += firstOfJanuary.getDay();
	var w = Math.ceil(numberOfDays / 7);
    if (!iso) {
		var initialDay = new Date(y, m, d);
        var beginOfNextYear = new Date(y + 1, 0, 1);
        var startDayOfNextYear = beginOfNextYear.getDay();
        if (initialDay.getTime() >= beginOfNextYear.getTime() - (oneDay * startDayOfNextYear)) w = 1;
    }
	return w;
}

function getMonthCalender(year, month, iteratorFns){

	// config passed by binding
	var lang = this.lang || 'en';
	var onlyDays = this.onlyDays;
	var weekStart = typeof this.weekStart === 'undefined' ? 1 : this.weekStart;
	var iso = weekStart === 1;
	var cells = [];
	var monthStartDate = new Date(year, month, 1);	// make a date object
	var dayOfWeek = monthStartDate.getDay() || (iso ? 7 : 0);	// month week day for day 1
	var currentDay = weekStart - dayOfWeek; 		// starting position of first day in the week
	var weekNr = getDateInfo(year, month, 1, iso);	// get week number of month start
	var maxDays = daysInMonth(year, month);			// total days in current month
	var lastMonthMaxDays = daysInMonth(year, month - 1);
	var currentMonth, day, dayBefore;
	var currentYear = getYear(year, month, weekNr);

	var returnObject = {
		month: month,
		year: year,
		daysInMonth: maxDays
	};

	for (var i = 0; i < 7; i++){					// 7 rows in the calendar
		dayBefore = currentDay;
		for (var j = 0; j < 8; j++){				// 8 columns: week nr + 7 days p/ week
			if (i > 0 && j > 0) currentDay++;		// not first row, not week nr column

			if (currentDay > maxDays || currentDay < 1){ // day belongs to sibling month
				// calculate day in sibling month
				day = currentDay > maxDays ? currentDay - maxDays : lastMonthMaxDays + currentDay;
				currentMonth = currentDay > maxDays ? month + 1 : month - 1;
			} else {
				day = currentDay;
				currentMonth = month;
			}

			var type = (function(){
				if (j === 0) return 'weekLabel';
				else if (i === 0) return 'dayLabel';
				else if (currentDay < 1) return 'prevMonth';
				else if (currentDay > maxDays) return 'nextMonth';
				else return 'monthDay';
			})();
			var isDay = dayBefore !== currentDay && i > 0;

			var dayData = {
				desc: isDay ? day : weekNr,
				week: weekNr,
				type: type,
				format: iso ? 'ISO 8601' : 'US',
				date: isDay ? new Date(Date.UTC(year, currentMonth, day)) : false,
				year: currentYear,
				index: cells.length
			};

			if (iteratorFns){
				if (typeof iteratorFns === "function") dayData = iteratorFns.call(returnObject, dayData, lang);
				else iteratorFns.forEach(function(fn){
					dayData = fn.call(returnObject, dayData, lang);
				});
			}
			if (onlyDays && isDay) cells.push(dayData);	// add only days
			else if (!onlyDays) cells.push(dayData);	// add also week numbers and labels
		}
		if (i > 0) weekNr = getDateInfo(year, currentMonth, day + 1, iso);
		currentYear = getYear(year, month, weekNr);
	}

	returnObject.cells = cells;
	return returnObject;
}

module.exports = function (config){
	return getMonthCalender.bind(config);
}


/***/ }),

/***/ "51eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
  _rule2['default'].required(rule, value, source, errors, options, type);
  callback(errors);
}

exports['default'] = required;

/***/ }),

/***/ "571b":
/***/ (function(module, exports, __webpack_require__) {


module.exports = {
	Generator: __webpack_require__("3268"),
	addLabels: __webpack_require__("67c8")
}


/***/ }),

/***/ "5c96":
/***/ (function(module, exports) {


module.exports = {
	weekPlaceholder: '',
	columnNames: {
		en: {
			0: 'w',
			1: 'monday',
			2: 'tuesday',
			3: 'wednesday',
			4: 'thursday',
			5: 'friday',
			6: 'saturday',
			7: 'sunday'
		},
		sv: {
			0: 'v',
			1: 'måndag',
			2: 'tisdag',
			3: 'onsdag',
			4: 'torsdag',
			5: 'fredag',
			6: 'lördag',
			7: 'söndag'
		},
		pt: {
			0: 's',
			1: 'segunda',
			2: 'terça',
			3: 'quarta',
			4: 'quinta',
			5: 'sexta',
			6: 'sábado',
			7: 'domingo'
		}
	},
	monthNames: {
		en: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		sv: [
			"januari",
			"februari",
			"mars",
			"april",
			"maj",
			"juni",
			"juli",
			"augusti",
			"september",
			"oktober",
			"november",
			"december"
		],
		pt: [
			"Janeiro",
			"Fevereiro",
			"Março",
			"Abril",
			"Maio",
			"Junho",
			"Julho",
			"Agosto",
			"Setembro",
			"Outubro",
			"Novembro",
			"Dezembro"
		]
	},
	classes: {
		dayLabel: 'day-of-week',
		weekLabel: 'week-number',
		prevMonth: 'inactive',
		nextMonth: 'inactive',
		monthDay: 'day-in-month'
	}
};


/***/ }),

/***/ "5d1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = integer;

/***/ }),

/***/ "5d90":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = object;

/***/ }),

/***/ "67c8":
/***/ (function(module, exports, __webpack_require__) {

// calendar with 8 column x 7 rows

var labels = __webpack_require__("5c96");

function isIterable(variable){
	if (variable == null) return false;
	if (variable.constructor === Array) return true;
	if (variable.constructor === Object) return true;
	return false;
}

function merge(_new, _old){
    for (var prop in _new){
        if (!_old[prop]) _old[prop] = _new[prop];
        else if (isIterable(_new[prop])) merge(_new[prop], _old[prop]);
    }
}

function addLabels(dayObject, lang){
	var cssClass = [labels.classes[dayObject.type]];

	if (dayObject.class) dayObject.class = (typeof dayObject.class == 'string' ? [dayObject.class] : dayObject.class).concat(cssClass);
	else dayObject.class = cssClass;

	if (dayObject.type.indexOf('Label') > 0){
		if (dayObject.index == 0 && labels.weekPlaceholder) dayObject.desc = labels.weekPlaceholder;
		else if (dayObject.index < 8) dayObject.desc = labels.columnNames[lang][dayObject.index];
		else if (dayObject.index % 8 == 0) dayObject.desc = dayObject.week;
	}

	if (dayObject.date) dayObject.monthName = labels.monthNames[lang][dayObject.date.getMonth()];
	if (!this.monthName) this.monthName = labels.monthNames[lang][this.month];
	if (!this.labels) this.labels = {
		monthNames: labels.monthNames[lang],
		columnNames: labels.columnNames[lang],
		classes: labels.classes
	}

	return dayObject;
}
addLabels.setLabels = function(newOptions){
	merge(newOptions, labels);
};

module.exports = addLabels;


/***/ }),

/***/ "6dd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("24aa")))

/***/ }),

/***/ "721c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options, ruleType);
    if (!(0, _util.isEmptyValue)(value, ruleType)) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = type;

/***/ }),

/***/ "730c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options, 'array');
    if (!(0, _util.isEmptyValue)(value, 'array')) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = array;

/***/ }),

/***/ "887c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      value = undefined;
    }
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = number;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8c44":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _string = __webpack_require__("ccff");

var _string2 = _interopRequireDefault(_string);

var _method = __webpack_require__("acdb");

var _method2 = _interopRequireDefault(_method);

var _number = __webpack_require__("887c");

var _number2 = _interopRequireDefault(_number);

var _boolean = __webpack_require__("12d4");

var _boolean2 = _interopRequireDefault(_boolean);

var _regexp = __webpack_require__("1ce5");

var _regexp2 = _interopRequireDefault(_regexp);

var _integer = __webpack_require__("5d1f");

var _integer2 = _interopRequireDefault(_integer);

var _float = __webpack_require__("123a");

var _float2 = _interopRequireDefault(_float);

var _array = __webpack_require__("730c");

var _array2 = _interopRequireDefault(_array);

var _object = __webpack_require__("5d90");

var _object2 = _interopRequireDefault(_object);

var _enum = __webpack_require__("ae3c");

var _enum2 = _interopRequireDefault(_enum);

var _pattern = __webpack_require__("2f6c");

var _pattern2 = _interopRequireDefault(_pattern);

var _date = __webpack_require__("9b23");

var _date2 = _interopRequireDefault(_date);

var _required = __webpack_require__("51eb");

var _required2 = _interopRequireDefault(_required);

var _type = __webpack_require__("721c");

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  string: _string2['default'],
  method: _method2['default'],
  number: _number2['default'],
  boolean: _boolean2['default'],
  regexp: _regexp2['default'],
  integer: _integer2['default'],
  float: _float2['default'],
  array: _array2['default'],
  object: _object2['default'],
  'enum': _enum2['default'],
  pattern: _pattern2['default'],
  date: _date2['default'],
  url: _type2['default'],
  hex: _type2['default'],
  email: _type2['default'],
  required: _required2['default']
};

/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = {"name":"bin-ui","version":"2.1.1","description":"基于 vue2.6 / vue-cli3 的 UI 组件库","main":"lib/bin-ui.common.js","keywords":["bin-ui","bin","ui","vue","vue","components"],"author":"wang bin","files":["lib","src"],"private":false,"license":"MIT","scripts":{"serve":"vue-cli-service serve","lint":"vue-cli-service lint","build":"vue-cli-service build","build:lib":"npm run lib && npm run style","lib":"vue-cli-service build --target lib --name bin-ui --dest lib src/index.js","style":"gulp build"},"homepage":"https://wangbin3162.github.io/docs/bin-ui/","dependencies":{"async-validator":"^1.11.5","core-js":"^2.6.5","js-calendar":"^1.2.3","popper.js":"^1.15.0","resize-observer-polyfill":"^1.5.1","vue":"^2.6.10","vue-router":"^3.0.7"},"devDependencies":{"@babel/core":"^7.5.5","@babel/plugin-transform-runtime":"^7.5.5","@babel/preset-env":"^7.5.5","@vue/cli-plugin-babel":"^3.5.0","@vue/cli-plugin-eslint":"^3.5.0","@vue/cli-service":"^3.5.0","@vue/eslint-config-standard":"^4.0.0","babel-eslint":"^10.0.1","eslint":"^5.8.0","eslint-plugin-vue":"^5.0.0","gulp":"^4.0.0","gulp-autoprefixer":"^4.0.0","gulp-cssmin":"^0.1.7","gulp-stylus":"^2.7.0","highlight.js":"^9.15.6","markdown-it":"^8.4.2","markdown-it-anchor":"^5.0.2","markdown-it-container":"^2.0.0","stylus":"^0.54.5","stylus-loader":"^3.0.2","vue-markdown-loader":"^2.4.1","vue-template-compiler":"^2.5.21","webpack":"^4.39.3"},"lint-staged":{"*.{js,vue}":["vue-cli-service lint","git add"]}};

/***/ }),

/***/ "975a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__("fa49");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
    errors.push(util.format(options.messages.required, rule.fullField));
  }
}

exports['default'] = required;

/***/ }),

/***/ "97c3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__("fa49");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

exports['default'] = range;

/***/ }),

/***/ "9a85":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__("fa49");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

exports['default'] = pattern;

/***/ }),

/***/ "9b23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (!(0, _util.isEmptyValue)(value)) {
      var dateObject = void 0;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      _rule2['default'].type(rule, dateObject, source, errors, options);
      if (dateObject) {
        _rule2['default'].range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}

exports['default'] = date;

/***/ }),

/***/ "9c4a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newMessages = newMessages;
function newMessages() {
  return {
    'default': 'Validation error on field %s',
    required: '%s is required',
    'enum': '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = exports.messages = newMessages();

/***/ }),

/***/ "a043":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__("fa49");

var util = _interopRequireWildcard(_util);

var _required = __webpack_require__("975a");

var _required2 = _interopRequireDefault(_required);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    (0, _required2['default'])(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

exports['default'] = type;

/***/ }),

/***/ "a15e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__("fa49");

var _validator = __webpack_require__("8c44");

var _validator2 = _interopRequireDefault(_validator);

var _messages2 = __webpack_require__("9c4a");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = _messages2.messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = void 0;
    var item = void 0;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }

    function complete(results) {
      var i = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = (0, _util.convertFieldsError)(errors);
      }
      callback(errors, fields);
    }

    if (options.messages) {
      var messages = this.messages();
      if (messages === _messages2.messages) {
        messages = (0, _messages2.newMessages)();
      }
      (0, _util.deepMerge)(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }
    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return (0, _util.asyncMap)(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map((0, _util.complementError)(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
            } else if (options.error) {
              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }

          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res = void 0;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + ' fails');
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !_validator2['default'].hasOwnProperty(rule.type)) {
      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return _validator2['default'].required;
    }
    return _validator2['default'][this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  _validator2['default'][type] = validator;
};

Schema.warning = _util.warning;

Schema.messages = _messages2.messages;

exports['default'] = Schema;

/***/ }),

/***/ "acdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value !== undefined) {
      _rule2['default'].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = method;

/***/ }),

/***/ "ae3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ENUM = 'enum';

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value) {
      _rule2['default'][ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = enumerable;

/***/ }),

/***/ "ccff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

var _util = __webpack_require__("fa49");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options, 'string');
    if (!(0, _util.isEmptyValue)(value, 'string')) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value, source, errors, options);
      _rule2['default'].pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        _rule2['default'].whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

exports['default'] = string;

/***/ }),

/***/ "d2e4":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("24aa")))

/***/ }),

/***/ "d7d3":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable*/
// 把 YYYY-MM-DD 改成了 yyyy-MM-dd
(function (main) {
  'use strict'

  /**
   * Parse or format dates
   * @class fecha
   */
  var fecha = {}
  var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g
  var twoDigits = /\d\d?/
  var threeDigits = /\d{3}/
  var fourDigits = /\d{4}/
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i
  var noop = function () {
  }

  function shorten (arr, sLen) {
    var newArr = []
    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen))
    }
    return newArr
  }

  function monthUpdate (arrName) {
    return function (d, v, i18n) {
      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase())
      if (~index) {
        d.month = index
      }
    }
  }

  function pad (val, len) {
    val = String(val)
    len = len || 2
    while (val.length < len) {
      val = '0' + val
    }
    return val
  }

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var monthNamesShort = shorten(monthNames, 3)
  var dayNamesShort = shorten(dayNames, 3)
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    /**
     * @return {string}
     */
    DoFn: function DoFn (D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10]
    }
  }

  var formatFlags = {
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
      var o = dateObj.getTimezoneOffset()
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4)
    }
  }

  var parseFlags = {
    d: [twoDigits, function (d, v) {
      d.day = v
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1
    }],
    yy: [twoDigits, function (d, v) {
      var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2)
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
      var val = v.toLowerCase()
      if (val === i18n.amPm[0]) {
        d.isPm = false
      } else if (val === i18n.amPm[1]) {
        d.isPm = true
      }
    }],
    ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
      var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes

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
    var i18n = i18nSettings || fecha.i18n

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
    var i18n = i18nSettings || fecha.i18n

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse')
    }

    format = fecha.masks[format] || format

    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
      return false
    }

    var isValid = true
    var dateInfo = {}
    format.replace(token, function ($0) {
      if (parseFlags[$0]) {
        var info = parseFlags[$0]
        var index = dateStr.search(info[0])
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

    var today = new Date()
    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0
    }

    var date
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
  if ( true && module.exports) {
    module.exports = fecha
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return fecha
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(this)


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fa49":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.convertFieldsError = convertFieldsError;
exports.format = format;
exports.isEmptyValue = isEmptyValue;
exports.isEmptyObject = isEmptyObject;
exports.asyncMap = asyncMap;
exports.complementError = complementError;
exports.deepMerge = deepMerge;
/* eslint no-console:0 */

var formatRegExp = /%[sdj%]/g;

var warning = exports.warning = function warning() {};

// don't print warning message when in production env or node runtime
if (false) {}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({ errors: results, fields: convertFieldsError(results) }) : resolve();
      }
    };
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending['catch'](function (e) {
    return e;
  });
  return pending;
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__("6dd8");

// CONCATENATED MODULE: ./src/utils/resize-event.js


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
const addResizeListener = function (el, fn) {
  if (isServer) return
  if (!el.__resizeListeners__) {
    el.__resizeListeners__ = []
    el.__ro__ = new ResizeObserver_es["a" /* default */](resizeHandler)
    el.__ro__.observe(el)
  }
  el.__resizeListeners__.push(fn)
}

/* istanbul ignore next */
const removeResizeListener = function (el, fn) {
  if (!el || !el.__resizeListeners__) return
  el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(fn), 1)
  if (!el.__resizeListeners__.length) {
    el.__ro__.disconnect()
  }
}

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// CONCATENATED MODULE: ./src/directive/ellipsis/index.js
/* harmony default export */ var ellipsis = ({
  inserted (el, binding) {
    el.innerHTML = el.innerHTML.substr(0, binding.value) + '...'
  }
});

// CONCATENATED MODULE: ./src/directive/waves/index.js
/* harmony default export */ var waves = ({
  bind (el, binding) {
    el.addEventListener('click', e => {
      const customOpts = Object.assign({}, binding.value)
      const opts = Object.assign({
        ele: el, // 波纹作用元素
        type: 'hit', // hit点击位置扩散center中心点扩展
        color: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
      }, customOpts)
      const target = opts.ele
      if (target) {
        target.style.position = 'relative'
        target.style.overflow = 'hidden'
        const rect = target.getBoundingClientRect()
        let ripple = target.querySelector('.waves-ripple')
        if (!ripple) {
          ripple = document.createElement('span')
          ripple.className = 'waves-ripple'
          ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
          target.appendChild(ripple)
        } else {
          ripple.className = 'waves-ripple'
        }
        // 获得页面向左、向上卷动的距离
        const pageScroll = {
          left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
          top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        }
        switch (opts.type) {
          case 'center':
            ripple.style.top = (rect.height / 2 - ripple.offsetHeight / 2) + 'px'
            ripple.style.left = (rect.width / 2 - ripple.offsetWidth / 2) + 'px'
            break
          default:
            ripple.style.top = (e.pageY - rect.top - ripple.offsetHeight / 2 - pageScroll.top) + 'px'
            ripple.style.left = (e.pageX - rect.left - ripple.offsetWidth / 2 - pageScroll.left) + 'px'
        }
        ripple.style.backgroundColor = opts.color
        ripple.className = 'waves-ripple z-active'
        return false
      }
    }, false)
  }
});

// CONCATENATED MODULE: ./src/utils/util.js
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
 */
util.open = function (url, target) {
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
 * 时间格式化
 * @param time
 * @param cFormat
 * @returns {*}
 */
util.parseTime = function (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
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
  // eslint-disable-next-line
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  // eslint-disable-next-line
  return time_str
}

// 这个是用来获取当前时间戳的
function _now () {
  return +new Date()
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
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      回调函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return {function}             返回客户调用函数
 */
util.throttle = function (func, wait, options = {}) {
  let context, args, result
  let timeout = null
  // 之前的时间戳
  let previous = 0
  // 如果 options 没传则设为空对象
  if (!options) options = {}
  // 定时器回调函数
  let later = function () {
    // 如果设置了 leading，就将 previous 设为 0
    // 用于下面函数的第一个 if 判断
    previous = options.leading === false ? 0 : _now()
    // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function () {
    // 获得当前时间戳
    let now = _now()
    // 首次进入前者肯定为 true
    // 如果需要第一次不执行函数
    // 就将上次时间戳设为当前的
    // 这样在接下来计算 remaining 的值时会大于0
    if (!previous && options.leading === false) previous = now
    // 计算剩余时间
    let remaining = wait - (now - previous)
    context = this
    args = arguments
    // 如果当前调用已经大于上次调用时间 + wait
    // 或者用户手动调了时间
    // 如果设置了 trailing，只会进入这个条件
    // 如果没有设置 leading，那么第一次会进入这个条件
    // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
    // 其实还是会进入的，因为定时器的延时
    // 并不是准确的时间，很可能你设置了2秒
    // 但是他需要2.2秒才触发，这时候就会进入这个条件
    if (remaining <= 0 || remaining > wait) {
      // 如果存在定时器就清理掉否则会调用二次回调
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      // 判断是否设置了定时器和 trailing
      // 没有的话就开启一个定时器
      // 并且不能不能同时设置 leading 和 trailing
      timeout = setTimeout(later, remaining)
    }
    return result
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

// 一个值是否在列表中
function oneOf (value, validList) {
  return validList.indexOf(value) > -1
}

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
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
function findComponentDownward (context, componentName) {
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
function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// Find components upward
function findComponentsUpward (context, componentName) {
  let parents = []
  const parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}

function typeOf (obj) {
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

function deepCopy (data) {
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

/* harmony default export */ var utils_util = (util);

// CONCATENATED MODULE: ./src/utils/log.js
const log = {}

/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor (type = 'default') {
  let color = ''
  switch (type) {
    case 'primary':
      color = '#2d8cf0'
      break
    case 'success':
      color = '#19be6b'
      break
    case 'info':
      color = '#909399'
      break
    case 'warning':
      color = '#ff9900'
      break
    case 'danger':
      color = '#ff4d4f'
      break
    case 'default':
      color = '#35495E'
      break
    default:
      color = type
      break
  }
  return color
}

log.print = function (text, type = 'default', back = false) {
  if (typeof text === 'object') { // 如果是对象则调用打印对象方式
    console.dir(text)
    return
  }
  if (back) { // 如果是打印带背景图的
    console.log(
      `%c ${text} `,
      `background:${typeColor(type)}; padding: 2px; border-radius: 4px;color: #fff;`
    )
  } else {
    console.log(
      `%c ${text} `,
      `color: ${typeColor(type)};`
    )
  }
}
// 漂亮的
log.pretty = function (title, text, type = 'primary') {
  console.log(
    `%c ${title} %c ${text} %c`,
    `background:${typeColor(type)};border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
    `border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${typeColor(type)};`,
    'background:transparent'
  )
}

log.primary = function (text, back = false) {
  this.print(text, 'primary', back)
}
log.success = function (text, back = false) {
  this.print(text, 'success', back)
}
log.info = function (text, back = false) {
  this.print(text, 'info', back)
}
log.warning = function (text, back = false) {
  this.print(text, 'warning', back)
}
log.danger = function (text, back = false) {
  this.print(text, 'danger', back)
}

/* harmony default export */ var utils_log = (log);

// CONCATENATED MODULE: ./src/utils/dom.js
// 去除空格
const trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

// 监听事件
const on = (function () {
  if (document.addEventListener) {
    return function (el, event, handler) {
      if (el && event && handler) {
        el.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (el, event, handler) {
      if (el && event && handler) {
        el.attachEvent('on' + event, handler)
      }
    }
  }
})()

// 移除事件
const off = (function () {
  if (document.removeEventListener) {
    return function (el, event, handler) {
      if (el && event) {
        el.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (el, event, handler) {
      if (el && event) {
        el.detachEvent('on' + event, handler)
      }
    }
  }
})()

// 监听一次事件
const once = function (el, event, fn) {
  const listener = function () {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

// 是否有class类名
function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

// 添加class
function addClass (el, cls) {
  if (!el) return
  let curClass = el.className
  let classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

// 移除一个class样式
function removeClass (el, cls) {
  if (!el || !cls) return
  let classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

// getStyle
function getStyle (element, styleName) {
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g  // eslint-disable-line
const MOZ_HACK_REGEXP = /^moz([A-Z])/ // eslint-disable-line

function camelCase (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

// scrollTop animation
function scrollTop (el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  function scroll (start, end, step) {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }

  scroll(from, to, step)
}

function firstUpperCase (str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1)
}

// CONCATENATED MODULE: ./src/plugin/core/index.js


// 指令



// 功能插件




/* harmony default export */ var core = ({
  async install (Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示 https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 全局过滤器
    Vue.filter('filterTime', function (time) {
      return utils_util.parseTime(time, '{y}-{m}-{d}')
    })
    // 全局指令
    Vue.directive('waves', waves)
    Vue.directive('ellipsis', ellipsis)

    Vue.prototype.$global = {
      zIndex: 2000
    }
    Vue.prototype.$log = utils_log
    Vue.prototype.$util = utils_util

    Vue.prototype.$open = utils_util.open
    Vue.prototype.$scrollTop = scrollTop
    Vue.prototype.$print = utils_log.print
    Vue.prototype.$resize = { addResizeListener: addResizeListener, removeResizeListener: removeResizeListener }
    // 打印UI官网
    utils_log.pretty('[bin-ui] ' + package_0.version, 'https://wangbin3162.github.io/docs/bin-ui/')
  }
});

// CONCATENATED MODULE: ./src/components/base/collapse-transition.js


const Transition = {
  beforeEnter (el) {
    addClass(el, 'collapse-transition')
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.height = '0'
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },
  enter (el) {
    el.dataset.oldOverflow = el.style.overflow
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px'
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }

    el.style.overflow = 'hidden'
  },
  afterEnter (el) {
    // for safari: remove class then reset height is necessary
    removeClass(el, 'collapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
  },
  beforeLeave (el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },
  leave (el) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      addClass(el, 'collapse-transition')
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },
  afterLeave (el) {
    removeClass(el, 'collapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  }
}

/* harmony default export */ var collapse_transition = ({
  name: 'CollapseTransition',
  functional: true,
  props: {
    appear: Boolean
  },
  render (h, { children, props }) {
    const data = {
      on: Transition,
      props: {
        appear: props.appear
      }
    }
    return h('transition', data, children)
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/icon.vue?vue&type=template&id=7a09481a&
var iconvue_type_template_id_7a09481a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:['iconfont','icon-' + _vm.name],style:(_vm.style)})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icon/icon.vue?vue&type=template&id=7a09481a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/icon.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var iconvue_type_script_lang_js_ = ({
  name: 'BIcon',
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  computed: {
    style () {
      let style = {}
      if (this.size) {
        style['font-size'] = `${this.size}px`
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  }
});

// CONCATENATED MODULE: ./src/components/icon/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icon_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/icon/icon.vue





/* normalize component */

var icon_component = normalizeComponent(
  icon_iconvue_type_script_lang_js_,
  iconvue_type_template_id_7a09481a_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: ./src/components/icon/index.js


/* istanbul ignore next */
icon.install = function (Vue) {
  Vue.component(icon.name, icon)
}

/* harmony default export */ var components_icon = (icon);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/button.vue?vue&type=template&id=55f52d20&
var buttonvue_type_template_id_55f52d20_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bin-button",class:['bin-button--' + _vm.type , 'bin-button--' + _vm.size,
    {
      'is-disabled': _vm.disabled,
      'is-loading': _vm.loading,
      'is-plain': _vm.plain,
      'is-round': _vm.round,
      'is-circle': _vm.circle
    }
  ],attrs:{"disabled":_vm.disabled || _vm.loading,"type":_vm.nativeType},on:{"click":_vm.handleClick}},[(_vm.loading)?_c('b-icon',{attrs:{"name":"loading"}}):_vm._e(),(_vm.icon && !_vm.loading)?_c('i',{class:['iconfont','icon-'+_vm.icon]}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()],1)}
var buttonvue_type_template_id_55f52d20_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/button/button.vue?vue&type=template&id=55f52d20&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'BButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
});

// CONCATENATED MODULE: ./src/components/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/button/button.vue





/* normalize component */

var button_component = normalizeComponent(
  button_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_55f52d20_render,
  buttonvue_type_template_id_55f52d20_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_button = (button_component.exports);
// CONCATENATED MODULE: ./src/components/button/index.js


/* istanbul ignore next */
button_button.install = function (Vue) {
  Vue.component(button_button.name, button_button)
}

/* harmony default export */ var components_button = (button_button);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/button-group.vue?vue&type=template&id=4f502eab&
var button_groupvue_type_template_id_4f502eab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-button-group"},[_vm._t("default")],2)}
var button_groupvue_type_template_id_4f502eab_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/button/button-group.vue?vue&type=template&id=4f502eab&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/button-group.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var button_groupvue_type_script_lang_js_ = ({
  name: 'BButtonGroup'
});

// CONCATENATED MODULE: ./src/components/button/button-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_button_groupvue_type_script_lang_js_ = (button_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/button/button-group.vue





/* normalize component */

var button_group_component = normalizeComponent(
  button_button_groupvue_type_script_lang_js_,
  button_groupvue_type_template_id_4f502eab_render,
  button_groupvue_type_template_id_4f502eab_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_group = (button_group_component.exports);
// CONCATENATED MODULE: ./src/components/button-group/index.js


/* istanbul ignore next */
button_group.install = function (Vue) {
  Vue.component(button_group.name, button_group)
}

/* harmony default export */ var components_button_group = (button_group);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/components/scrollbar/src/util.js


const BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
}

function renderThumbStyle ({ move, size, bar }) {
  const style = {}
  const translate = `translate${bar.axis}(${move}%)`

  style[bar.size] = size
  style.transform = translate
  style.msTransform = translate
  style.webkitTransform = translate

  return style
}

// 获取浏览器滚动条宽度
function util_scrollBarWidth () {
  let scrollBarWidth
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return 0
  if (scrollBarWidth !== undefined) return scrollBarWidth

  const outer = document.createElement('div')
  outer.className = 'bin-scrollbar__wrap'
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  outer.parentNode.removeChild(outer)
  scrollBarWidth = widthNoScroll - widthWithScroll

  return scrollBarWidth
}

// 数组转换成对象
function toObject (arr) {
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

function extend (to, _from) {
  for (let key in _from) {
    to[key] = _from[key]
  }
  return to
}

// CONCATENATED MODULE: ./src/components/scrollbar/src/bar.js



/* istanbul ignore next */
/* harmony default export */ var src_bar = ({
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number,
    barStyle: {},
    barWrapStyle: {}
  },

  computed: {
    bar () {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal']
    },
    wrap () {
      return this.$parent.wrap
    }
  },

  render (h) {
    const { size, move, bar } = this
    let barStyle = Object.assign({}, renderThumbStyle({ size, move, bar }), this.barStyle)
    return h('div', {
      class: ['bin-scrollbar__bar', 'is-' + bar.key],
      on: {
        mousedown: this.clickTrackHandler
      },
      style: this.barWrapStyle
    }, [
      h('div', {
        ref: 'thumb',
        class: ['bin-scrollbar__thumb'],
        on: {
          mousedown: this.clickThumbHandler
        },
        style: barStyle
      })
    ])
  },

  methods: {
    clickThumbHandler (e) {
      // 防止右键点击事件
      if (e.ctrlKey || e.button === 2) {
        return
      }
      // 开始拖拽事件
      this.startDrag(e)
      this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]))
    },
    // 点击跳转至句柄
    clickTrackHandler (e) {
      const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client])
      // 获取滚动的一半距离
      const thumbHalf = (this.$refs.thumb[this.bar.offset] / 2)
      // 计算需要跳转的位置百分比
      const thumbPositionPercentage = ((offset - thumbHalf) * 100 / this.$el[this.bar.offset])
      // 设置父级的滚动top
      this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100)
    },
    // 开始拖拽事件
    startDrag (e) {
      e.stopImmediatePropagation()
      this.cursorDown = true
      on(document, 'mousemove', this.mouseMoveDocumentHandler)
      on(document, 'mouseup', this.mouseUpDocumentHandler)
      document.onselectstart = () => false
    },
    // 鼠标拖拽模拟
    mouseMoveDocumentHandler (e) {
      if (this.cursorDown === false) return
      const prevPage = this[this.bar.axis]
      if (!prevPage) return
      const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1)
      const thumbClickPosition = (this.$refs.thumb[this.bar.offset] - prevPage)
      const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[this.bar.offset])

      this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100)
    },
    // 鼠标抬起事件
    mouseUpDocumentHandler (e) {
      this.cursorDown = false
      this[this.bar.axis] = 0
      // 移除拖拽事件
      off(document, 'mousemove', this.mouseMoveDocumentHandler)
      document.onselectstart = null
    }
  },
  destroyed () {
    off(document, 'mouseup', this.mouseUpDocumentHandler)
  }
});

// CONCATENATED MODULE: ./src/components/scrollbar/src/main.js




/* harmony default export */ var main = ({
  name: 'BScrollbar',
  components: { Bar: src_bar },
  props: {
    normal: {
      type: Boolean,
      default: false
    }, // 是否采用原生滚动（即只是隐藏掉了原生滚动条，但并没有使用自定义的滚动条）
    always: { // 是否是一直显示，不是悬停显示
      type: Boolean,
      default: false
    },
    wrapStyle: {}, // 内联方式 自定义wrap容器的样式
    wrapClass: {}, // 类名方式 自定义wrap容器的样式
    viewClass: {}, // 内联方式 自定义view容器的样式
    viewStyle: {}, // 类名方式 自定义view容器的样式
    barStyle: {}, // bar的样式
    barWrapStyle: {}, // bar容器样式
    noResize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: { // view容器用那种标签渲染，默认为div
      type: String,
      default: 'div'
    }
  },
  data () {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    }
  },
  computed: {
    wrap () {
      return this.$refs.wrap
    }
  },
  render (h) {
    // 获取浏览器滚动条宽度scrollBarWidth() // 这里先默认为17
    let gutter = 17
    let style = this.wrapStyle
    // 如果宽度获取成功
    if (gutter) {
      const gutterWith = `-${gutter}px`
      const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`
      // 设置margin隐藏原有滚动条
      if (Array.isArray(this.wrapStyle)) {
        style = toObject(this.wrapStyle)
        style.marginRight = style.marginBottom = gutterWith
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle
      } else {
        style = gutterStyle
      }
    }
    // 创建slots视图
    const view = h(this.tag, {
      class: ['bin-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default)
    // 创建容器
    const wrap = h(this.tag, {
      class: [this.wrapClass, 'bin-scrollbar__wrap', gutter ? '' : 'bin-scrollbar__wrap--hidden-default'],
      style: style,
      ref: 'wrap',
      on: {
        scroll: this.handleScroll
      }
    }, [view])

    let nodes
    // 如果不需要显示滚动条
    if (!this.normal) {
      nodes = [wrap]
      if (this.sizeWidth) {
        nodes.push(
          h('bar', {
            class: [{ 'always': this.always }],
            props: {
              move: this.moveX,
              size: this.sizeWidth,
              barStyle: this.barStyle,
              barWrapStyle: this.barWrapStyle
            }
          })
        )
      }
      if (this.sizeHeight) {
        nodes.push(
          h('bar', {
            class: [{ 'always': this.always }],
            props: {
              vertical: true,
              move: this.moveY,
              size: this.sizeHeight,
              barStyle: this.barStyle,
              barWrapStyle: this.barWrapStyle
            }
          })
        )
      }
    } else {
      nodes = [
        h(this.tag, {
          class: [this.wrapClass, 'bin-scrollbar__wrap'],
          style: style,
          ref: 'wrap'
        }, [view])
      ]
    }
    return h('div', { class: 'bin-scrollbar' }, nodes)
  },

  methods: {
    handleScroll () {
      const wrap = this.wrap
      this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight)
      this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth)
    },
    update () {
      let heightPercentage, widthPercentage
      const wrap = this.wrap
      if (!wrap) return

      // 计算thumb的百分比
      heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight)
      widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth)
      // 当容器高度小于100时不需要滚动条
      this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : ''
      this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : ''
    }
  },
  mounted () {
    if (this.normal) return
    this.$nextTick(this.update)
    !this.noResize && addResizeListener(this.$refs.resize, this.update)
  },
  beforeDestroy () {
    if (this.normal) return
    !this.noResize && removeResizeListener(this.$refs.resize, this.update)
  }
});

// CONCATENATED MODULE: ./src/components/scrollbar/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main)
}

/* harmony default export */ var scrollbar = (main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/back-top/back-top.vue?vue&type=template&id=c6fe2780&
var back_topvue_type_template_id_c6fe2780_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"back-top-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.backTop),expression:"backTop"}],class:_vm.classes,style:(_vm.styles),on:{"click":_vm.back}},[_vm._t("default",[_c('div',{class:_vm.innerClasses},[_c('b-icon',{attrs:{"name":"md-arrow-dropup","size":"24"}})],1)])],2)])}
var back_topvue_type_template_id_c6fe2780_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/back-top/back-top.vue?vue&type=template&id=c6fe2780&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/back-top/back-top.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



const prefixCls = 'bin-back-top'
/* harmony default export */ var back_topvue_type_script_lang_js_ = ({
  name: 'BBackTop',
  props: {
    height: {
      type: Number,
      default: 150
    },
    bottom: {
      type: Number,
      default: 50
    },
    right: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      backTop: false
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-show`]: this.backTop
        }
      ]
    },
    styles () {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`
      }
    },
    innerClasses () {
      return `${prefixCls}-inner`
    }
  },
  mounted () {
    // 如果父级是自定义滚动则绑定滚动为父级元素dom
    this.domEl = this.$parent.$el.className === 'bin-scrollbar' ? this.$parent.$el.querySelector('.bin-scrollbar__wrap') : window
    // 监听滚动事件
    this.throttledScrollHandler = this.$util.throttle(this.handleScroll, 300)
    on(this.domEl, 'scroll', this.throttledScrollHandler)
    on(window, 'resize', this.throttledScrollHandler)
  },
  beforeDestroy () {
    off(this.domEl, 'scroll', this.throttledScrollHandler)
    off(window, 'resize', this.throttledScrollHandler)
  },
  methods: {
    // 滚动监听事件
    handleScroll () {
      this.backTop = this.domEl.pageYOffset || this.domEl.scrollTop >= this.height
    },
    back () {
      const sTop = this.domEl !== window ? (this.domEl.pageYOffset || this.domEl.scrollTop) : (document.documentElement.scrollTop || document.body.scrollTop)
      scrollTop(this.domEl, sTop, 0, this.duration)
      this.$emit('on-click')
    }
  }
});

// CONCATENATED MODULE: ./src/components/back-top/back-top.vue?vue&type=script&lang=js&
 /* harmony default export */ var back_top_back_topvue_type_script_lang_js_ = (back_topvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/back-top/back-top.vue





/* normalize component */

var back_top_component = normalizeComponent(
  back_top_back_topvue_type_script_lang_js_,
  back_topvue_type_template_id_c6fe2780_render,
  back_topvue_type_template_id_c6fe2780_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var back_top = (back_top_component.exports);
// CONCATENATED MODULE: ./src/components/back-top/index.js


/* istanbul ignore next */
back_top.install = function (Vue) {
  Vue.component(back_top.name, back_top)
}

/* harmony default export */ var components_back_top = (back_top);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/card.vue?vue&type=template&id=78004bf1&
var cardvue_type_template_id_78004bf1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-card",class:[_vm.shadow ? 'is-' + _vm.shadow + '-shadow' : 'is-hover-shadow',
_vm.bordered ? '':'is-no-border'],style:(_vm.cardStyle)},[(_vm.$slots.header || _vm.header)?_c('div',{staticClass:"bin-card__header",class:[_vm.divider ? _vm.divider+'-divider' : 'has-divider',_vm.headTip?'has-tip':'']},[_vm._t("header",[_vm._v(_vm._s(_vm.header))])],2):_vm._e(),_c('div',{staticClass:"bin-card__body",style:(_vm.bodyStyle)},[_vm._t("default")],2)])}
var cardvue_type_template_id_78004bf1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/card/card.vue?vue&type=template&id=78004bf1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cardvue_type_script_lang_js_ = ({
  name: 'BCard',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: true
    },
    width: {
      type: String
    },
    radius: {
      type: String
    },
    bgColor: {
      type: String
    },
    divider: {
      type: String
    },
    headTip: {
      type: Boolean
    }
  },
  computed: {
    cardStyle () {
      return {
        width: this.width,
        borderRadius: this.radius,
        backgroundColor: this.bgColor
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/card/card.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_cardvue_type_script_lang_js_ = (cardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/card.vue





/* normalize component */

var card_component = normalizeComponent(
  card_cardvue_type_script_lang_js_,
  cardvue_type_template_id_78004bf1_render,
  cardvue_type_template_id_78004bf1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var card = (card_component.exports);
// CONCATENATED MODULE: ./src/components/card/index.js


/* istanbul ignore next */
card.install = function (Vue) {
  Vue.component(card.name, card)
}

/* harmony default export */ var components_card = (card);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/divider/divider.vue?vue&type=template&id=baea7640&
var dividervue_type_template_id_baea7640_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[(_vm.hasSlot)?_c('span',{class:_vm.slotClasses},[_vm._t("default")],2):_vm._e()])}
var dividervue_type_template_id_baea7640_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/divider/divider.vue?vue&type=template&id=baea7640&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/divider/divider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

const dividervue_type_script_lang_js_prefixCls = 'bin-divider'
/* harmony default export */ var dividervue_type_script_lang_js_ = ({
  name: 'BDivider',
  props: {
    type: {
      type: String,
      default: 'horizontal'// 'horizontal', 'vertical'
    },
    align: {
      type: String,
      default: 'center'// 'left', 'right', 'center'
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSlot () {
      return !!this.$slots.default
    },
    classes () {
      return [
        `${dividervue_type_script_lang_js_prefixCls}`,
        `${dividervue_type_script_lang_js_prefixCls}-${this.type}`,
        {
          [`${dividervue_type_script_lang_js_prefixCls}-with-text-${this.align}`]: this.hasSlot,
          [`${dividervue_type_script_lang_js_prefixCls}-dashed`]: !!this.dashed
        }
      ]
    },
    slotClasses () {
      return [
        `${dividervue_type_script_lang_js_prefixCls}-inner-text`
      ]
    }
  }
});

// CONCATENATED MODULE: ./src/components/divider/divider.vue?vue&type=script&lang=js&
 /* harmony default export */ var divider_dividervue_type_script_lang_js_ = (dividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/divider/divider.vue





/* normalize component */

var divider_component = normalizeComponent(
  divider_dividervue_type_script_lang_js_,
  dividervue_type_template_id_baea7640_render,
  dividervue_type_template_id_baea7640_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var divider = (divider_component.exports);
// CONCATENATED MODULE: ./src/components/divider/index.js


/* istanbul ignore next */
divider.install = function (Vue) {
  Vue.component(divider.name, divider)
}

/* harmony default export */ var components_divider = (divider);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/modal.vue?vue&type=template&id=590db19f&
var modalvue_type_template_id_590db19f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"bin-modal",attrs:{"data-transfer":_vm.appendToBody}},[_c('transition',{attrs:{"name":"fade-in-linear"}},[(_vm.showMask)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"bin-modal-mask",style:(_vm.wrapStyles),on:{"click":_vm.handleMask}}):_vm._e()]),_c('div',{class:_vm.wrapClasses,style:(_vm.wrapStyles),on:{"click":_vm.handleWrapClick}},[_c('transition',{attrs:{"name":"fade-scale-move"},on:{"after-leave":_vm.animationFinish}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],class:_vm.classes,style:(_vm.mainStyles)},[_c('div',{ref:"content",class:_vm.contentClasses,style:(_vm.contentStyles),on:{"click":_vm.handleClickModal}},[(_vm.closable)?_c('a',{class:[_vm.prefixCls + '-close'],on:{"click":_vm.close}},[_vm._t("close",[_c('b-icon',{attrs:{"name":"ios-close"}})])],2):_vm._e(),(_vm.showHead)?_c('div',{class:[_vm.prefixCls + '-header'],on:{"mousedown":_vm.handleMoveStart}},[_vm._t("header",[_c('div',{class:[_vm.prefixCls + '-header-inner']},[_vm._v(_vm._s(_vm.title))])])],2):_vm._e(),_c('div',{class:[_vm.prefixCls + '-body']},[_vm._t("default")],2),(!_vm.footerHide)?_c('div',{class:[_vm.prefixCls + '-footer']},[_vm._t("footer",[_c('b-button',{attrs:{"type":"text","size":"small"},nativeOn:{"click":function($event){return _vm.cancel($event)}}},[_vm._v(_vm._s(_vm.cancelText))]),_c('b-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","size":"small","loading":_vm.buttonLoading},nativeOn:{"click":function($event){return _vm.ok($event)}}},[_vm._v(_vm._s(_vm.okText)+"\n              ")])])],2):_vm._e()])])])],1)],1)}
var modalvue_type_template_id_590db19f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/modal/modal.vue?vue&type=template&id=590db19f&

// CONCATENATED MODULE: ./src/utils/transfer-queue.js
let transferIndex = 0

function transferIncrease () {
  transferIndex++
}



// CONCATENATED MODULE: ./src/directive/transfer-dom.js
// move-to-body
/* harmony default export */ var transfer_dom = ({
  inserted (el, { value }, vnode) {
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
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const modalvue_type_script_lang_js_prefixCls = 'bin-modal'
/* harmony default export */ var modalvue_type_script_lang_js_ = ({
  name: 'BModal',
  directives: { TransferDom: transfer_dom },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    width: {
      type: [Number, String],
      default: 520
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    loading: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object
    },
    className: {
      type: String
    },
    footerHide: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 2000
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      prefixCls: modalvue_type_script_lang_js_prefixCls,
      wrapShow: false,
      showHead: true,
      buttonLoading: false,
      visible: this.value,
      dragData: {
        x: null,
        y: null,
        dragX: null,
        dragY: null,
        dragging: false
      },
      modalIndex: this.handleGetModalIndex() // for Esc close the top modal
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${modalvue_type_script_lang_js_prefixCls}-wrap`,
        {
          [`${modalvue_type_script_lang_js_prefixCls}-hidden`]: !this.wrapShow,
          [`${this.className}`]: !!this.className,
          [`${modalvue_type_script_lang_js_prefixCls}-no-mask`]: !this.showMask
        }
      ]
    },
    wrapStyles () {
      return {
        zIndex: this.modalIndex + this.zIndex
      }
    },
    classes () {
      return [
        `${modalvue_type_script_lang_js_prefixCls}`,
        {
          [`${modalvue_type_script_lang_js_prefixCls}-fullscreen`]: this.fullscreen,
          [`${modalvue_type_script_lang_js_prefixCls}-fullscreen-no-header`]: this.fullscreen && !this.showHead,
          [`${modalvue_type_script_lang_js_prefixCls}-fullscreen-no-footer`]: this.fullscreen && this.footerHide
        }
      ]
    },
    mainStyles () {
      let style = {}
      // 主要样式配置，配置宽度
      const width = parseInt(this.width)
      const styleWidth = this.dragData.x !== null ? {
        top: 0
      } : {
        width: width <= 100 ? `${width}%` : `${width}px`
      }

      const customStyle = this.styles ? this.styles : {}

      Object.assign(style, styleWidth, customStyle)

      return style
    },
    contentClasses () {
      return [
        `${modalvue_type_script_lang_js_prefixCls}-content`,
        {
          [`${modalvue_type_script_lang_js_prefixCls}-content-no-mask`]: !this.showMask,
          [`${modalvue_type_script_lang_js_prefixCls}-content-drag`]: this.draggable,
          [`${modalvue_type_script_lang_js_prefixCls}-content-dragging`]: this.draggable && this.dragData.dragging
        }
      ]
    },
    contentStyles () {
      let style = {}
      if (this.draggable) {
        if (this.dragData.x !== null) style.left = `${this.dragData.x}px`
        if (this.dragData.y !== null) style.top = `${this.dragData.y}px`
        const width = parseInt(this.width)
        const styleWidth = {
          width: width <= 100 ? `${width}%` : `${width}px`
        }

        Object.assign(style, styleWidth)
      }
      return style
    },
    showMask () {
      return this.draggable ? false : this.mask
    }
  },
  mounted () {
    if (this.visible) {
      this.wrapShow = true
    }
    let showHead = true
    if (this.$slots.header === undefined && !this.title) {
      showHead = false
    }
    this.showHead = showHead
  },
  methods: {
    // 全局modal的索引
    handleGetModalIndex () {
      transferIncrease()
      return transferIndex
    },
    handleWrapClick (event) {
      const className = event.target.getAttribute('class')
      if (className && className.indexOf(`${modalvue_type_script_lang_js_prefixCls}-wrap`) > -1) this.handleMask()
    },
    cancel () {
      this.close()
    },
    ok () {
      if (this.loading) {
        this.buttonLoading = true
      } else {
        this.visible = false
        this.$emit('input', false)
      }
      this.$emit('on-ok')
    },
    // 点击遮罩层
    handleMask () {
      if (this.maskClosable && this.showMask) {
        this.close()
      }
    },
    handleClickModal () {
      if (this.draggable) {
        this.modalIndex = this.handleGetModalIndex()
      }
    },
    close () {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-cancel')
    },
    // 缩放动画结束
    animationFinish () {
      this.$emit('on-hidden')
    },
    // 拖拽开始
    handleMoveStart (event) {
      if (!this.draggable) return false

      const $content = this.$refs.content
      const rect = $content.getBoundingClientRect()
      this.dragData.x = rect.x || rect.left
      this.dragData.y = rect.y || rect.top

      const distance = {
        x: event.clientX,
        y: event.clientY
      }

      this.dragData.dragX = distance.x
      this.dragData.dragY = distance.y

      this.dragData.dragging = true

      on(window, 'mousemove', this.handleMoveMove)
      on(window, 'mouseup', this.handleMoveEnd)
    },
    handleMoveMove (event) {
      if (!this.dragData.dragging) return false

      const distance = {
        x: event.clientX,
        y: event.clientY
      }

      const diffDistance = {
        x: distance.x - this.dragData.dragX,
        y: distance.y - this.dragData.dragY
      }

      this.dragData.x += diffDistance.x
      this.dragData.y += diffDistance.y

      this.dragData.dragX = distance.x
      this.dragData.dragY = distance.y
    },
    handleMoveEnd () {
      this.dragData.dragging = false
      off(window, 'mousemove', this.handleMoveMove)
      off(window, 'mouseup', this.handleMoveEnd)
    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible (val) {
      if (val === false) {
        this.buttonLoading = false
        // 关闭内容显示
        this.timer = setTimeout(() => {
          this.wrapShow = false
        }, 300)
      } else {
        this.modalIndex = this.handleGetModalIndex()
        if (this.timer) clearTimeout(this.timer)
        this.wrapShow = true
      }
      this.$emit('on-visible-change', val)
    },
    loading (val) {
      if (!val) {
        this.buttonLoading = false
      }
    },
    title (val) {
      if (this.$slots.header === undefined) {
        this.showHead = !!val
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/modal/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/modal/modal.vue





/* normalize component */

var modal_component = normalizeComponent(
  modal_modalvue_type_script_lang_js_,
  modalvue_type_template_id_590db19f_render,
  modalvue_type_template_id_590db19f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var modal_modal = (modal_component.exports);
// CONCATENATED MODULE: ./src/components/modal/confirm.js




const confirm_prefixCls = 'bin-modal-confirm'

modal_modal.newInstance = properties => {
  const _props = properties || {}
  const Instance = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
    data: Object.assign({}, _props, {
      visible: false,
      width: 400,
      title: '',
      body: '',
      iconType: '',
      iconName: '',
      okText: '确定',
      cancelText: '取消',
      showCancel: false,
      loading: false,
      buttonLoading: false,
      scrollable: false
    }),
    render (h) {
      let footerVNodes = []
      if (this.showCancel) {
        footerVNodes.push(h(button_button, {
          props: {
            type: 'text',
            size: 'small'
          },
          on: {
            click: this.cancel
          }
        }, this.cancelText))
      }
      footerVNodes.push(h(button_button, {
        props: {
          type: 'primary',
          size: 'small',
          loading: this.buttonLoading
        },
        on: {
          click: this.ok
        }
      }, this.okText))

      // render content
      let body_render
      if (this.render) {
        body_render = h('div', {
          attrs: {
            class: `${confirm_prefixCls}-body ${confirm_prefixCls}-body-render`
          }
        }, [this.render(h)])
      } else {
        body_render = h('div', {
          attrs: {
            class: `${confirm_prefixCls}-body`
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
      let head_render
      if (this.title) {
        head_render = h('div', {
          attrs: {
            class: `${confirm_prefixCls}-head`
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
              class: `${confirm_prefixCls}-head-title`
            },
            domProps: {
              innerHTML: this.title
            }
          })
        ])
      }
      return h(modal_modal, {
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
          'on-cancel': this.cancel
        }
      }, [
        h('div', {
          attrs: {
            class: confirm_prefixCls
          }
        }, [
          head_render,
          body_render,
          h('div', {
            attrs: {
              class: `${confirm_prefixCls}-footer`
            }
          }, footerVNodes)
        ])
      ])
    },
    computed: {
      iconTypeCls () {
        return [
          `${confirm_prefixCls}-head-icon`,
          `${confirm_prefixCls}-head-icon-${this.iconType}`
        ]
      },
      iconNameCls () {
        return [
          'iconfont',
          `icon-${this.iconName}`
        ]
      }
    },
    methods: {
      cancel () {
        this.$children[0].visible = false
        this.buttonLoading = false
        this.onCancel()
        this.remove()
      },
      ok () {
        if (this.loading) {
          this.buttonLoading = true
        } else {
          this.$children[0].visible = false
          this.remove()
        }
        this.onOk()
      },
      remove () {
        setTimeout(() => {
          this.destroy()
        }, 300)
      },
      destroy () {
        this.$destroy()
        document.body.removeChild(this.$el)
        this.onRemove()
      },
      onOk () {
      },
      onCancel () {
      },
      onRemove () {
      }
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const modal = Instance.$children[0]

  return {
    show (props) {
      modal.$parent.showCancel = props.showCancel
      modal.$parent.iconType = props.icon

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
      if ('cancelText' in props) {
        modal.$parent.cancelText = props.cancelText
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
    remove () {
      modal.visible = false
      modal.$parent.buttonLoading = false
      modal.$parent.remove()
    },
    component: modal
  }
}

/* harmony default export */ var modal_confirm = (modal_modal);

// CONCATENATED MODULE: ./src/components/modal/index.js


let modalInstance

function getModalInstance (render = undefined) {
  modalInstance = modalInstance || modal_confirm.newInstance({
    closable: false,
    maskClosable: false,
    footerHide: true,
    render: render
  })

  return modalInstance
}

function components_modal_confirm (options) {
  const render = ('render' in options) ? options.render : undefined
  let instance = getModalInstance(render)

  options.onRemove = function () {
    modalInstance = null
  }

  instance.show(options)
}

modal_confirm.alert = function (props = {}) {
  props.icon = 'info'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return components_modal_confirm(props)
}
modal_confirm.alert.success = function (props = {}) {
  props.icon = 'success'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return components_modal_confirm(props)
}
modal_confirm.alert.warning = function (props = {}) {
  props.icon = 'warning'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return components_modal_confirm(props)
}
modal_confirm.alert.danger = function (props = {}) {
  props.icon = 'danger'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return components_modal_confirm(props)
}

modal_confirm.confirm = function (props = {}) {
  props.icon = 'confirm'
  props.showCancel = true
  return components_modal_confirm(props)
}

modal_confirm.remove = function () {
  if (!modalInstance) { // at loading status, remove after Cancel
    return false
  }

  const instance = getModalInstance()

  instance.remove()
}

/* istanbul ignore next */
modal_confirm.install = function (Vue) {
  Vue.component(modal_confirm.name, modal_confirm)
}

/* harmony default export */ var components_modal = (modal_confirm);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/drawer/drawer.vue?vue&type=template&id=6b0ed6f8&
var drawervue_type_template_id_6b0ed6f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"bin-drawer",attrs:{"data-transfer":_vm.appendToBody}},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"bin-drawer-wrapper",class:'is-'+_vm.placement,style:(_vm.mainStyle),on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.handleMaskClick($event)}}},[_c('transition',{attrs:{"name":"move"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"drawer-box",style:(_vm.boxStyle),attrs:{"flex":"dir:top"}},[_c('div',{staticClass:"header"},[_vm._t("header",[_c('div',{attrs:{"flex":"main:justify"}},[_c('div',{staticClass:"title",attrs:{"flex-box":"1"}},[_vm._v("\n                  "+_vm._s(_vm.title)+"\n                ")]),_c('div',{staticClass:"close",on:{"click":function($event){$event.stopPropagation();return _vm.close()}}},[_c('b-icon',{attrs:{"name":"ios-close","size":"22"}})],1)])])],2),_c('div',{staticClass:"body",attrs:{"flex-box":"1"}},[_c('b-scrollbar',{staticStyle:{"height":"100%"}},[_vm._t("default")],2)],1),(!_vm.footerHide)?_c('div',{staticClass:"footer"},[_vm._t("footer",[_c('b-button',{attrs:{"type":"default","size":"small","plain":""},on:{"click":function($event){return _vm.close()}}},[_vm._v(_vm._s(_vm.cancelText))]),_c('b-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"size":"small","type":"primary"},on:{"click":_vm.okClick}},[_vm._v("\n                "+_vm._s(_vm.okText)+"\n              ")])])],2):_vm._e()])])],1)])],1)}
var drawervue_type_template_id_6b0ed6f8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/drawer/drawer.vue?vue&type=template&id=6b0ed6f8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/drawer/drawer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var drawervue_type_script_lang_js_ = ({
  name: 'BDrawer',
  directives: { TransferDom: transfer_dom },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    width: {
      type: String,
      default: '300px'
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    footerHide: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  computed: {
    mainStyle () {
      return {
        backgroundColor: !this.fullscreen && this.width !== '100%' ? 'rgba(55, 55, 55, .6)' : 'none'
      }
    },
    boxStyle () {
      return {
        width: this.fullscreen ? '100%' : this.width
      }
    }
  },
  methods: {
    close () {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-cancel')
    },
    handleMaskClick () {
      if (this.maskClosable) {
        this.close()
      }
    },
    okClick () {
      this.$emit('on-ok')
    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible (val) {
      this.$emit('on-visible-change', val)
    }
  }
});

// CONCATENATED MODULE: ./src/components/drawer/drawer.vue?vue&type=script&lang=js&
 /* harmony default export */ var drawer_drawervue_type_script_lang_js_ = (drawervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/drawer/drawer.vue





/* normalize component */

var drawer_component = normalizeComponent(
  drawer_drawervue_type_script_lang_js_,
  drawervue_type_template_id_6b0ed6f8_render,
  drawervue_type_template_id_6b0ed6f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drawer = (drawer_component.exports);
// CONCATENATED MODULE: ./src/components/drawer/index.js


/* istanbul ignore next */
drawer.install = function (Vue) {
  Vue.component(drawer.name, drawer)
}

/* harmony default export */ var components_drawer = (drawer);

// CONCATENATED MODULE: ./src/components/tag/src/main.js


/* harmony default export */ var src_main = ({
  name: 'BTag',
  props: {
    closable: Boolean,
    type: String,
    dot: Boolean,
    noBorder: Boolean,
    color: String,
    tagStyle: {},
    size: String,
    fontSize: String
  },
  methods: {
    handleClose (event) {
      event.stopPropagation()
      this.$emit('on-close', event)
    },
    handleClick (event) {
      event.stopPropagation()
      this.$emit('on-click', event)
    }
  },
  computed: {
    dotColor () {
      // 获取type的颜色
      if (this.type) {
        return typeColor(this.type)
      }
      return this.color
    },
    tagStyleBind () {
      return this.tagStyle ? this.tagStyle
        : this.dot ? {
            backgroundColor: 'transparent',
            color: this.color,
            fontSize: this.fontSize
          }
          : {
            backgroundColor: this.color,
            color: this.color ? '#fff' : '',
            fontSize: this.fontSize
          }
    }
  },
  render (h) {
    let $child = []
    const dotEl = h('span', {
      class: ['bin-dot'],
      style: { backgroundColor: this.dotColor }
    })
    const closeEl = h('i', {
      class: ['iconfont', 'icon-ios-close'],
      style: this.dot ? { backgroundColor: '#fff', color: this.color } : {},
      on: {
        click: this.handleClose
      }
    })
    let $inner = []
    // 有没有dot
    this.dot && $inner.push(dotEl)
    $inner.push(this.$slots.default)
    // 有没有关闭按钮
    this.closable && $inner.push(closeEl)
    // tag标签
    const tagEl = h('span', {
      class: ['bin-tag',
        this.type ? `is-${this.type}` : '',
        this.size ? `is-${this.size}` : '',
        { 'no-border': this.noBorder }
      ],
      style: this.tagStyleBind,
      on: {
        click: this.handleClick
      }
    }, $inner)
    $child.push(tagEl)
    return h('transition', {
      attrs: {
        name: 'zoom-in-center'
      }
    }, $child)
  }
});

// CONCATENATED MODULE: ./src/components/tag/index.js


/* istanbul ignore next */
src_main.install = function (Vue) {
  Vue.component(src_main.name, src_main)
}

/* harmony default export */ var tag = (src_main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/circle/circle.vue?vue&type=template&id=7111b935&
var circlevue_type_template_id_7111b935_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapClasses,style:(_vm.circleSize)},[_c('svg',{attrs:{"viewBox":"0 0 100 100"}},[_c('path',{style:(_vm.trailStyle),attrs:{"d":_vm.pathString,"stroke":_vm.trailColor,"stroke-width":_vm.trailWidth,"fill-opacity":0}}),_c('path',{style:(_vm.pathStyle),attrs:{"d":_vm.pathString,"stroke-linecap":_vm.strokeLinecap,"stroke":_vm.strokeColor,"stroke-width":_vm.computedStrokeWidth,"fill-opacity":"0"}})]),_c('div',{class:_vm.innerClasses},[_vm._t("default")],2)])}
var circlevue_type_template_id_7111b935_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/circle/circle.vue?vue&type=template&id=7111b935&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/circle/circle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



const circlevue_type_script_lang_js_prefixCls = 'bin-circle'

/* harmony default export */ var circlevue_type_script_lang_js_ = ({
  name: 'BCircle',
  props: {
    percent: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 120
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    strokeColor: {
      type: String,
      default: '#2d8cf0'
    },
    strokeLinecap: {
      validator (value) {
        return oneOf(value, ['square', 'round'])
      },
      default: 'round'
    },
    trailWidth: {
      type: Number,
      default: 5
    },
    trailColor: {
      type: String,
      default: '#eaeef2'
    },
    dashboard: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    circleSize () {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    },
    computedStrokeWidth () {
      return this.percent === 0 && this.dashboard ? 0 : this.strokeWidth
    },
    radius () {
      return 50 - this.strokeWidth / 2
    },
    pathString () {
      if (this.dashboard) {
        return `M 50,50 m 0,${this.radius}
                  a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}
                  a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}`
      } else {
        return `M 50,50 m 0,-${this.radius}
                  a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
                  a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`
      }
    },
    len () {
      return Math.PI * 2 * this.radius
    },
    trailStyle () {
      let style = {}
      if (this.dashboard) {
        style = {
          'stroke-dasharray': `${this.len - 75}px ${this.len}px`,
          'stroke-dashoffset': `-${75 / 2}px`,
          'transition': 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        }
      }
      return style
    },
    pathStyle () {
      let style = {}
      if (this.dashboard) {
        style = {
          'stroke-dasharray': `${(this.percent / 100) * (this.len - 75)}px ${this.len}px`,
          'stroke-dashoffset': `-${75 / 2}px`,
          'transition': 'stroke-dashoffset .3s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s, stroke-width .06s ease .6s'
        }
      } else {
        style = {
          'stroke-dasharray': `${this.len}px ${this.len}px`,
          'stroke-dashoffset': `${((100 - this.percent) / 100 * this.len)}px`,
          'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        }
      }
      return style
    },
    wrapClasses () {
      return `${circlevue_type_script_lang_js_prefixCls}`
    },
    innerClasses () {
      return `${circlevue_type_script_lang_js_prefixCls}-inner`
    }
  }
});

// CONCATENATED MODULE: ./src/components/circle/circle.vue?vue&type=script&lang=js&
 /* harmony default export */ var circle_circlevue_type_script_lang_js_ = (circlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/circle/circle.vue





/* normalize component */

var circle_component = normalizeComponent(
  circle_circlevue_type_script_lang_js_,
  circlevue_type_template_id_7111b935_render,
  circlevue_type_template_id_7111b935_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var circle = (circle_component.exports);
// CONCATENATED MODULE: ./src/components/circle/index.js


/* istanbul ignore next */
circle.install = function (Vue) {
  Vue.component(circle.name, circle)
}

/* harmony default export */ var components_circle = (circle);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/progress.vue?vue&type=template&id=5e406c2c&
var progressvue_type_template_id_5e406c2c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'bin-progress',
    _vm.status ? 'progress-' + _vm.status : '',
    {
      'bin-progress-text': !_vm.showText,
      'bin-progress-text-inside': _vm.textInside,
    }
  ],attrs:{"role":"progressbar","aria-valuenow":_vm.percent,"aria-valuemin":"0","aria-valuemax":"100"}},[_c('div',{staticClass:"bin-progress-bar",class:{'is-active': _vm.active}},[_c('div',{staticClass:"bin-progress-bar__outer",style:(_vm.barOutStyle)},[_c('div',{staticClass:"bin-progress-bar__inner",style:(_vm.barStyle)},[(_vm.showText && _vm.textInside)?_c('div',{staticClass:"bin-progress-bar__innerText"},[_vm._v(_vm._s(_vm.percent)+"%")]):_vm._e()])])]),(_vm.showText && !_vm.textInside)?_c('div',{staticClass:"bin-progress__text",style:({fontSize: _vm.progressTextSize + 'px'})},[(!_vm.status)?[_vm._v(_vm._s(_vm.percent)+"%")]:[(_vm.status === 'text')?_vm._t("default"):_c('b-icon',{attrs:{"name":_vm.iconClass}})]],2):_vm._e()])}
var progressvue_type_template_id_5e406c2c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/progress/progress.vue?vue&type=template&id=5e406c2c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/progress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var progressvue_type_script_lang_js_ = ({
  name: 'BProgress',
  props: {
    percent: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    status: {
      type: String,
      validator: val => ['text', 'success', 'exception'].indexOf(val) > -1
    },
    strokeWidth: Number,
    textInside: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    radius: String,
    active: Boolean
  },
  computed: {
    barOutStyle () {
      return {
        height: this.strokeWidth + 'px',
        borderRadius: this.radius,
        backgroundColor: this.bgColor
      }
    },
    barStyle () {
      const style = {}
      style.width = this.percent + '%'
      style.backgroundColor = this.color
      style.borderRadius = this.radius
      return style
    },
    iconClass () {
      return this.status === 'success' ? 'ios-checkmark-circle' : 'ios-close-circle'
    },
    progressTextSize () {
      let size = 12 + this.strokeWidth * 0.4
      return size > 16 ? 16 : size
    }
  }
});

// CONCATENATED MODULE: ./src/components/progress/progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var progress_progressvue_type_script_lang_js_ = (progressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/progress/progress.vue





/* normalize component */

var progress_component = normalizeComponent(
  progress_progressvue_type_script_lang_js_,
  progressvue_type_template_id_5e406c2c_render,
  progressvue_type_template_id_5e406c2c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var progress = (progress_component.exports);
// CONCATENATED MODULE: ./src/components/progress/index.js


/* istanbul ignore next */
progress.install = function (Vue) {
  Vue.component(progress.name, progress)
}

/* harmony default export */ var components_progress = (progress);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/alert.vue?vue&type=template&id=376a09e4&
var alertvue_type_template_id_376a09e4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade-in"}},[(!_vm.closed)?_c('div',{class:_vm.wrapClasses},[(_vm.showIcon)?_c('span',{class:_vm.iconClasses},[_vm._t("icon",[_c('b-icon',{attrs:{"name":_vm.iconType}})])],2):_vm._e(),_c('span',{class:_vm.messageClasses},[_vm._t("default")],2),_c('span',{class:_vm.descClasses},[_vm._t("desc")],2),(_vm.closable)?_c('a',{class:_vm.closeClasses,on:{"click":_vm.close}},[_vm._t("close",[_c('b-icon',{attrs:{"name":"ios-close"}})])],2):_vm._e()]):_vm._e()])}
var alertvue_type_template_id_376a09e4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/alert/alert.vue?vue&type=template&id=376a09e4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const alertvue_type_script_lang_js_prefixCls = 'bin-alert'

/* harmony default export */ var alertvue_type_script_lang_js_ = ({
  name: 'BAlert',
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['success', 'info', 'warning', 'error'])
      },
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    banner: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      closed: false,
      desc: false
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${alertvue_type_script_lang_js_prefixCls}`,
        `${alertvue_type_script_lang_js_prefixCls}-${this.type}`,
        {
          [`${alertvue_type_script_lang_js_prefixCls}-with-icon`]: this.showIcon,
          [`${alertvue_type_script_lang_js_prefixCls}-with-desc`]: this.desc,
          [`${alertvue_type_script_lang_js_prefixCls}-with-banner`]: this.banner
        }
      ]
    },
    messageClasses () {
      return `${alertvue_type_script_lang_js_prefixCls}-message`
    },
    descClasses () {
      return `${alertvue_type_script_lang_js_prefixCls}-desc`
    },
    closeClasses () {
      return `${alertvue_type_script_lang_js_prefixCls}-close`
    },
    iconClasses () {
      return `${alertvue_type_script_lang_js_prefixCls}-icon`
    },
    iconType () {
      let type = ''
      switch (this.type) {
        case 'info':
          type = 'ios-information-circle'
          break
        case 'success':
          type = 'ios-checkmark-circle'
          break
        case 'warning':
          type = 'ios-alert'
          break
        case 'error':
          type = 'ios-close-circle'
          break
      }
      return type
    }
  },
  methods: {
    close (e) {
      this.closed = true
      this.$emit('on-close', e)
    }
  },
  mounted () {
    this.desc = this.$slots.desc !== undefined
  }
});

// CONCATENATED MODULE: ./src/components/alert/alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var alert_alertvue_type_script_lang_js_ = (alertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/alert/alert.vue





/* normalize component */

var alert_component = normalizeComponent(
  alert_alertvue_type_script_lang_js_,
  alertvue_type_template_id_376a09e4_render,
  alertvue_type_template_id_376a09e4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var alert_alert = (alert_component.exports);
// CONCATENATED MODULE: ./src/components/alert/index.js


/* istanbul ignore next */
alert_alert.install = function (Vue) {
  Vue.component(alert_alert.name, alert_alert)
}

/* harmony default export */ var components_alert = (alert_alert);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loading/loading.vue?vue&type=template&id=163c3a20&
var loadingvue_type_template_id_163c3a20_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade-in-linear"}},[_c('div',{class:_vm.classes},[_c('div',{staticClass:"bin-loading-inner"},[_vm._t("default",[(!_vm.showIcon)?_c('div',[_c('svg',{staticClass:"circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",attrs:{"cx":"50","cy":"50","r":"20","fill":"none","stroke-width":"5","stroke-miterlimit":"10"}})])]):_c('b-icon',{staticClass:"loading-icon",attrs:{"name":_vm.showIcon}}),(_vm.showText)?_c('div',{staticClass:"loading-text",style:(_vm.textStyle)},[_vm._v(_vm._s(_vm.showText))]):_vm._e()])],2)])])}
var loadingvue_type_template_id_163c3a20_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/loading/loading.vue?vue&type=template&id=163c3a20&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loading/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const loadingvue_type_script_lang_js_prefixCls = 'bin-loading'
/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  name: 'BLoading',
  props: {
    showIcon: String,
    showText: String,
    fix: {
      type: Boolean,
      default: false
    },
    size: String
  },
  computed: {
    classes () {
      return [
        `${loadingvue_type_script_lang_js_prefixCls}`,
        {
          [`${loadingvue_type_script_lang_js_prefixCls}-fix`]: this.fix,
          [`${loadingvue_type_script_lang_js_prefixCls}-show-text`]: this.showText,
          [`${loadingvue_type_script_lang_js_prefixCls}-fullscreen`]: this.fullscreen
        }
      ]
    },
    textStyle () {
      return {
        fontSize: `${this.size}px`
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/loading/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var loading_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/loading/loading.vue





/* normalize component */

var loading_component = normalizeComponent(
  loading_loadingvue_type_script_lang_js_,
  loadingvue_type_template_id_163c3a20_render,
  loadingvue_type_template_id_163c3a20_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading = (loading_component.exports);
// CONCATENATED MODULE: ./src/components/loading/index.js


/* istanbul ignore next */
loading.install = function (Vue) {
    Vue.component(loading.name, loading)
}

/* harmony default export */ var components_loading = (loading);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/collapse.vue?vue&type=template&id=1295a3e1&
var collapsevue_type_template_id_1295a3e1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_vm._t("default")],2)}
var collapsevue_type_template_id_1295a3e1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/collapse/collapse.vue?vue&type=template&id=1295a3e1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/collapse.vue?vue&type=script&lang=js&
//
//
//
//
//

const collapsevue_type_script_lang_js_prefixCls = 'bin-collapse'

/* harmony default export */ var collapsevue_type_script_lang_js_ = ({
  name: 'BCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String]
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    classes () {
      return [
        `${collapsevue_type_script_lang_js_prefixCls}`,
        {
          [`${collapsevue_type_script_lang_js_prefixCls}-simple`]: this.simple
        }
      ]
    }
  },
  mounted () {
    this.setActive()
  },
  methods: {
    setActive () {
      // 获取开启的key
      const activeKey = this.getActiveKey()
      // 循环设置
      this.$children.forEach((child, index) => {
        const name = child.name || index.toString()
        child.isActive = activeKey.indexOf(name) > -1
        child.index = index
      })
    },
    getActiveKey () {
      let activeKey = this.currentValue || []
      const accordion = this.accordion
      if (!Array.isArray(activeKey)) {
        activeKey = [activeKey]
      }
      if (accordion && activeKey.length > 1) {
        activeKey = [activeKey[0]]
      }
      for (let i = 0; i < activeKey.length; i++) {
        activeKey[i] = activeKey[i].toString()
      }
      return activeKey
    },
    toggle (data) {
      const name = data.name.toString()
      let newActiveKey = []
      if (this.accordion) {
        if (!data.isActive) {
          newActiveKey.push(name)
        }
      } else {
        let activeKey = this.getActiveKey()
        const nameIndex = activeKey.indexOf(name)

        if (data.isActive) {
          if (nameIndex > -1) {
            activeKey.splice(nameIndex, 1)
          }
        } else {
          if (nameIndex < 0) {
            activeKey.push(name)
          }
        }
        newActiveKey = activeKey
      }
      this.currentValue = newActiveKey
      this.$emit('input', newActiveKey)
      this.$emit('on-change', newActiveKey)
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue () {
      this.setActive()
    }
  }
});

// CONCATENATED MODULE: ./src/components/collapse/collapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var collapse_collapsevue_type_script_lang_js_ = (collapsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/collapse/collapse.vue





/* normalize component */

var collapse_component = normalizeComponent(
  collapse_collapsevue_type_script_lang_js_,
  collapsevue_type_template_id_1295a3e1_render,
  collapsevue_type_template_id_1295a3e1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var collapse = (collapse_component.exports);
// CONCATENATED MODULE: ./src/components/collapse/index.js


/* istanbul ignore next */
collapse.install = function (Vue) {
  Vue.component(collapse.name, collapse)
}

/* harmony default export */ var components_collapse = (collapse);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/panel.vue?vue&type=template&id=9f0dd6d4&
var panelvue_type_template_id_9f0dd6d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.itemClasses},[_c('div',{class:_vm.headerClasses,on:{"click":_vm.toggle}},[(!_vm.hideArrow)?_c('b-icon',{attrs:{"name":"ios-arrow-forward"}}):_vm._e(),_vm._t("title",[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")])],2),(_vm.mounted)?_c('collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],class:_vm.contentClasses},[_c('div',{class:_vm.boxClasses},[_vm._t("default")],2)])]):_vm._e()],1)}
var panelvue_type_template_id_9f0dd6d4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/collapse/panel.vue?vue&type=template&id=9f0dd6d4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const panelvue_type_script_lang_js_prefixCls = 'bin-collapse'

/* harmony default export */ var panelvue_type_script_lang_js_ = ({
  name: 'BCollapsePanel',
  components: {CollapseTransition: collapse_transition},
  props: {
    title: String,
    name: {
      type: String
    },
    hideArrow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      index: 0, // use index for default when name is null
      isActive: false,
      mounted: false
    }
  },
  computed: {
    itemClasses () {
      return [
        `${panelvue_type_script_lang_js_prefixCls}-item`,
        {
          [`${panelvue_type_script_lang_js_prefixCls}-item-active`]: this.isActive
        }
      ]
    },
    headerClasses () {
      return `${panelvue_type_script_lang_js_prefixCls}-header`
    },
    contentClasses () {
      return `${panelvue_type_script_lang_js_prefixCls}-content`
    },
    boxClasses () {
      return `${panelvue_type_script_lang_js_prefixCls}-content-box`
    }
  },
  methods: {
    toggle () {
      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      })
    }
  },
  mounted () {
    this.mounted = true
  }
});

// CONCATENATED MODULE: ./src/components/collapse/panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var collapse_panelvue_type_script_lang_js_ = (panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/collapse/panel.vue





/* normalize component */

var panel_component = normalizeComponent(
  collapse_panelvue_type_script_lang_js_,
  panelvue_type_template_id_9f0dd6d4_render,
  panelvue_type_template_id_9f0dd6d4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var panel = (panel_component.exports);
// CONCATENATED MODULE: ./src/components/collapse-panel/index.js


/* istanbul ignore next */
panel.install = function (Vue) {
  Vue.component(panel.name, panel)
}

/* harmony default export */ var collapse_panel = (panel);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/breadcrumb.vue?vue&type=template&id=7a853f84&
var breadcrumbvue_type_template_id_7a853f84_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-breadcrumb",attrs:{"aria-label":"Breadcrumb","role":"navigation"}},[_vm._t("default")],2)}
var breadcrumbvue_type_template_id_7a853f84_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/breadcrumb/breadcrumb.vue?vue&type=template&id=7a853f84&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var breadcrumbvue_type_script_lang_js_ = ({
  name: 'BBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorIcon: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      bBreadcrumb: this
    }
  },
  mounted () {
    const items = this.$el.querySelectorAll('.bin-breadcrumb__item')
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page')
    }
  }
});

// CONCATENATED MODULE: ./src/components/breadcrumb/breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var breadcrumb_breadcrumbvue_type_script_lang_js_ = (breadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/breadcrumb/breadcrumb.vue





/* normalize component */

var breadcrumb_component = normalizeComponent(
  breadcrumb_breadcrumbvue_type_script_lang_js_,
  breadcrumbvue_type_template_id_7a853f84_render,
  breadcrumbvue_type_template_id_7a853f84_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var breadcrumb = (breadcrumb_component.exports);
// CONCATENATED MODULE: ./src/components/breadcrumb/index.js


/* istanbul ignore next */
breadcrumb.install = function (Vue) {
  Vue.component(breadcrumb.name, breadcrumb)
}

/* harmony default export */ var components_breadcrumb = (breadcrumb);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/breadcrumb-item.vue?vue&type=template&id=e3b27056&
var breadcrumb_itemvue_type_template_id_e3b27056_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"bin-breadcrumb__item"},[_c('span',{ref:"link",class:['bin-breadcrumb__inner', _vm.to ? 'is-link' : ''],attrs:{"role":"link"}},[_vm._t("default")],2),(_vm.separatorIcon)?_c('i',{staticClass:"bin-separator icon",class:['iconfont','icon-'+_vm.separatorIcon]}):_c('span',{staticClass:"bin-separator",attrs:{"role":"presentation"}},[_vm._v(_vm._s(_vm.separator))])])}
var breadcrumb_itemvue_type_template_id_e3b27056_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/breadcrumb/breadcrumb-item.vue?vue&type=template&id=e3b27056&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/breadcrumb-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var breadcrumb_itemvue_type_script_lang_js_ = ({
  name: 'BBreadcrumbItem',
  props: {
    to: {},
    replace: Boolean
  },
  data () {
    return {
      separator: '',
      separatorIcon: ''
    }
  },
  inject: ['bBreadcrumb'],
  mounted () {
    this.separator = this.bBreadcrumb.separator
    this.separatorIcon = this.bBreadcrumb.separatorIcon
    const link = this.$refs.link
    link.setAttribute('role', 'link')
    link.addEventListener('click', () => {
      const { to, $router } = this
      if (!to || !$router) return
      this.replace ? $router.replace(to) : $router.push(to)
    })
  }
});

// CONCATENATED MODULE: ./src/components/breadcrumb/breadcrumb-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var breadcrumb_breadcrumb_itemvue_type_script_lang_js_ = (breadcrumb_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/breadcrumb/breadcrumb-item.vue





/* normalize component */

var breadcrumb_item_component = normalizeComponent(
  breadcrumb_breadcrumb_itemvue_type_script_lang_js_,
  breadcrumb_itemvue_type_template_id_e3b27056_render,
  breadcrumb_itemvue_type_template_id_e3b27056_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var breadcrumb_item = (breadcrumb_item_component.exports);
// CONCATENATED MODULE: ./src/components/breadcrumb-item/index.js


/* istanbul ignore next */
breadcrumb_item.install = function (Vue) {
  Vue.component(breadcrumb_item.name, breadcrumb_item)
}

/* harmony default export */ var components_breadcrumb_item = (breadcrumb_item);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/badge/badge.vue?vue&type=template&id=c2cbae56&
var badgevue_type_template_id_c2cbae56_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-badge"},[_vm._t("default"),_c('transition',{attrs:{"name":"zoom-in-center"}},[_c('sup',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hidden && (_vm.content || _vm.content === 0 || _vm.isDot)),expression:"!hidden && (content || content === 0 || isDot)"}],staticClass:"bin-badge__content",class:[
        'bin-badge-is-' + _vm.type,
        {
          'is-fixed': _vm.$slots.default,
          'is-dot': _vm.isDot
        }
      ],domProps:{"textContent":_vm._s(_vm.content)}})])],2)}
var badgevue_type_template_id_c2cbae56_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/badge/badge.vue?vue&type=template&id=c2cbae56&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/badge/badge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var badgevue_type_script_lang_js_ = ({
  name: 'BBadge',

  props: {
    value: {},
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator (val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
      }
    }
  },

  computed: {
    content () {
      if (this.isDot) return

      const value = this.value
      const max = this.max

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }

      return value
    }
  }
});

// CONCATENATED MODULE: ./src/components/badge/badge.vue?vue&type=script&lang=js&
 /* harmony default export */ var badge_badgevue_type_script_lang_js_ = (badgevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/badge/badge.vue





/* normalize component */

var badge_component = normalizeComponent(
  badge_badgevue_type_script_lang_js_,
  badgevue_type_template_id_c2cbae56_render,
  badgevue_type_template_id_c2cbae56_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var badge = (badge_component.exports);
// CONCATENATED MODULE: ./src/components/badge/index.js


/* istanbul ignore next */
badge.install = function (Vue) {
  Vue.component(badge.name, badge)
}

/* harmony default export */ var components_badge = (badge);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/input.vue?vue&type=template&id=15b40202&
var inputvue_type_template_id_15b40202_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapClasses},[(_vm.type !== 'textarea')?_c('label',[(_vm.prepend)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.slotReady),expression:"slotReady"}],class:[_vm.prefixCls + '-group-prepend']},[_vm._t("prepend")],2):_vm._e(),(_vm.clearable && _vm.currentValue && !_vm.disabled)?_c('i',{class:_vm.closeClasses,on:{"click":_vm.handleClear}}):(_vm.icon)?_c('i',{staticClass:"iconfont",class:['icon-' + _vm.icon, _vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal'],on:{"click":_vm.handleIconClick}}):(_vm.search)?_c('i',{staticClass:"iconfont icon-ios-search",class:[_vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal', _vm.prefixCls + '-search-icon'],on:{"click":_vm.handleSearch}}):(_vm.showSuffix)?_c('span',{staticClass:"bin-input-suffix"},[_vm._t("suffix",[(_vm.suffix)?_c('i',{staticClass:"iconfont",class:['icon-' + _vm.suffix]}):_vm._e()])],2):_vm._e(),_c('input',{ref:"input",class:_vm.inputClasses,attrs:{"id":_vm.elementId,"autocomplete":_vm.autocomplete,"type":_vm.type,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"maxlength":_vm.maxlength,"readonly":_vm.readonly,"name":_vm.name,"number":_vm.number,"autofocus":_vm.autofocus},domProps:{"value":_vm.currentValue},on:{"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)},_vm.handleKeyup],"keypress":_vm.handleKeypress,"keydown":_vm.handleKeydown,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput,"change":_vm.handleChange}}),(_vm.showPrefix)?_c('span',{staticClass:"bin-input-prefix"},[_vm._t("prefix",[(_vm.prefix)?_c('i',{staticClass:"iconfont",class:['icon-' + _vm.prefix]}):_vm._e()])],2):_vm._e()]):_c('label',[_c('textarea',{ref:"textarea",class:_vm.textareaClasses,style:(_vm.textareaStyles),attrs:{"id":_vm.elementId,"wrap":_vm.wrap,"autocomplete":_vm.autocomplete,"spellcheck":_vm.spellcheck,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"rows":_vm.rows,"maxlength":_vm.maxlength,"readonly":_vm.readonly,"name":_vm.name,"autofocus":_vm.autofocus},domProps:{"value":_vm.currentValue},on:{"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)},_vm.handleKeyup],"keypress":_vm.handleKeypress,"keydown":_vm.handleKeydown,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput}})])])}
var inputvue_type_template_id_15b40202_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/input.vue?vue&type=template&id=15b40202&

// CONCATENATED MODULE: ./src/utils/calcTextareaHeight.js
// Thanks to
// https://github.com/andreypopp/react-textarea-autosize/

// let hiddenTextarea;
//
// const HIDDEN_STYLE = `
//     height:0 !important;
//     min-height:0 !important;
//     max-height:none !important;
//     visibility:hidden !important;
//     overflow:hidden !important;
//     position:absolute !important;
//     z-index:-1000 !important;
//     top:0 !important;
//     right:0 !important
// `;
//
// const CONTEXT_STYLE = [
//     'letter-spacing',
//     'line-height',
//     'padding-top',
//     'padding-bottom',
//     'font-family',
//     'font-weight',
//     'font-size',
//     'text-rendering',
//     'text-transform',
//     'width',
//     'text-indent',
//     'padding-left',
//     'padding-right',
//     'border-width',
//     'box-sizing'
// ];
//
// function calculateNodeStyling(node) {
//     const style = window.getComputedStyle(node);
//
//     const boxSizing = style.getPropertyValue('box-sizing');
//
//     const paddingSize = (
//         parseFloat(style.getPropertyValue('padding-bottom')) +
//         parseFloat(style.getPropertyValue('padding-top'))
//     );
//
//     const borderSize = (
//         parseFloat(style.getPropertyValue('border-bottom-width')) +
//         parseFloat(style.getPropertyValue('border-top-width'))
//     );
//
//     const contextStyle = CONTEXT_STYLE
//         .map(name => `${name}:${style.getPropertyValue(name)}`)
//         .join(';');
//
//     return {contextStyle, paddingSize, borderSize, boxSizing};
// }
//
// export default function calcTextareaHeight(targetNode, minRows = null, maxRows = null) {
//     if (!hiddenTextarea) {
//         hiddenTextarea = document.createElement('textarea');
//         document.body.appendChild(hiddenTextarea);
//     }
//
//     let {
//         paddingSize,
//         borderSize,
//         boxSizing,
//         contextStyle
//     } = calculateNodeStyling(targetNode);
//
//     hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
//     hiddenTextarea.value = targetNode.value || targetNode.placeholder || '';
//
//     let height = hiddenTextarea.scrollHeight;
//     let minHeight = -Infinity;
//     let maxHeight = Infinity;
//     let overflowY;
//
//     if (boxSizing === 'border-box') {
//         height = height + borderSize;
//     } else if (boxSizing === 'content-box') {
//         height = height - paddingSize;
//     }
//
//     hiddenTextarea.value = '';
//     let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
//
//     if (minRows !== null) {
//         minHeight = singleRowHeight * minRows;
//         if (boxSizing === 'border-box') {
//             minHeight = minHeight + paddingSize + borderSize;
//         }
//         height = Math.max(minHeight, height);
//     }
//     if (maxRows !== null) {
//         maxHeight = singleRowHeight * maxRows;
//         if (boxSizing === 'border-box') {
//             maxHeight = maxHeight + paddingSize + borderSize;
//         }
//         overflowY = height > maxHeight ? '' : 'hidden';
//         height = Math.min(maxHeight, height);
//     }
//
//     if (!maxRows) {
//         overflowY = 'hidden';
//     }
//
//     return {
//         height: `${height}px`,
//         minHeight: `${minHeight}px`,
//         maxHeight: `${maxHeight}px`,
//         overflowY
//     };
// }

const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`

const SIZING_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
]

let computedStyleCache = {}
let hiddenTextarea

function calculateNodeStyling (node, useCache = false) {
  const nodeRef = (
    node.getAttribute('id') ||
    node.getAttribute('data-reactid') ||
    node.getAttribute('name'))

  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef]
  }

  const style = window.getComputedStyle(node)

  const boxSizing = (
    style.getPropertyValue('box-sizing') ||
    style.getPropertyValue('-moz-box-sizing') ||
    style.getPropertyValue('-webkit-box-sizing')
  )

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  )

  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  )

  const sizingStyle = SIZING_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';')

  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  }

  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo
  }

  return nodeInfo
}

function calcTextareaHeight (uiTextNode, minRows = null, maxRows = null, useCache = false) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea')
    document.body.appendChild(hiddenTextarea)
  }

  // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577
  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'))
  } else {
    hiddenTextarea.removeAttribute('wrap')
  }

  // Copy all CSS properties that have an impact on the height of the content in
  // the textbox
  let {
    paddingSize, borderSize,
    boxSizing, sizingStyle
  } = calculateNodeStyling(uiTextNode, useCache)

  // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content
  hiddenTextarea.setAttribute('style', `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`)
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || ''

  let minHeight = Number.MIN_SAFE_INTEGER
  let maxHeight = Number.MAX_SAFE_INTEGER
  let height = hiddenTextarea.scrollHeight
  let overflowY

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height = height - paddingSize
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' '
    let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize
      }
      height = Math.max(minHeight, height)
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize
      }
      overflowY = height > maxHeight ? '' : 'hidden'
      height = Math.min(maxHeight, height)
    }
  }
  // Remove scroll bar flash when autosize without maxRows
  if (!maxRows) {
    overflowY = 'hidden'
  }

  return {
    height: `${height}px`,
    minHeight: `${minHeight}px`,
    maxHeight: `${maxHeight}px`,
    overflowY
  }
}

// CONCATENATED MODULE: ./src/mixins/emitter.js
function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

/* harmony default export */ var emitter = ({
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const inputvue_type_script_lang_js_prefixCls = 'bin-input'
/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  mixins: [emitter],
  name: 'BInput',
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel'])
      },
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default', 'mini'])
      },
      default: 'default'
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String,
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    rows: {
      type: Number,
      default: 2
    },
    readonly: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    number: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    spellcheck: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      validator (value) {
        return oneOf(value, ['on', 'off'])
      },
      default: 'off'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    elementId: {
      type: String
    },
    wrap: {
      validator (value) {
        return oneOf(value, ['hard', 'soft'])
      },
      default: 'soft'
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    search: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      prefixCls: inputvue_type_script_lang_js_prefixCls,
      prepend: true,
      append: true,
      slotReady: false,
      textareaStyles: {},
      showPrefix: false,
      showSuffix: false,
      isOnComposition: false
    }
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    handleEnter (event) {
      this.$emit('on-enter', event)
      if (this.search) this.$emit('on-search', this.currentValue)
    },
    handleKeydown (event) {
      this.$emit('on-keydown', event)
    },
    handleKeypress (event) {
      this.$emit('on-keypress', event)
    },
    handleKeyup (event) {
      this.$emit('on-keyup', event)
    },
    handleIconClick (event) {
      this.$emit('on-click', event)
    },
    handleFocus (event) {
      this.$emit('on-focus', event)
    },
    handleBlur (event) {
      this.$emit('on-blur', event)
      // 触发校验
      if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
        this.dispatch('BFormItem', 'on-form-blur', this.currentValue)
      }
    },
    handleComposition (event) {
      if (event.type === 'compositionstart') {
        this.isOnComposition = true
      }
      if (event.type === 'compositionend') {
        this.isOnComposition = false
        this.handleInput(event)
      }
    },
    handleInput (event) {
      if (this.isOnComposition) return

      let value = event.target.value
      if (this.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value)
      this.$emit('input', value)
      this.setCurrentValue(value)
      this.$emit('on-change', event)
    },
    handleChange (event) {
      this.$emit('on-input-change', event)
    },
    setCurrentValue (value) {
      if (value === this.currentValue) return
      this.$nextTick(() => {
        this.resizeTextarea()
      })
      this.currentValue = value
      // 触发校验
      if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
        this.dispatch('BFormItem', 'on-form-change', value)
      }
    },
    resizeTextarea () {
      const autosize = this.autosize
      if (!autosize || this.type !== 'textarea') {
        return false
      }

      const minRows = autosize.minRows
      const maxRows = autosize.maxRows

      this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
    },
    focus () {
      if (this.type === 'textarea') {
        this.$refs.textarea.focus()
      } else {
        this.$refs.input.focus()
      }
    },
    blur () {
      if (this.type === 'textarea') {
        this.$refs.textarea.blur()
      } else {
        this.$refs.input.blur()
      }
    },
    handleClear () {
      const e = { target: { value: '' } }
      this.$emit('input', '')
      this.setCurrentValue('')
      this.$emit('on-change', e)
      this.$emit('on-clear')
    },
    handleSearch () {
      if (this.disabled) return false
      this.$refs.input.focus()
      this.$emit('on-search', this.currentValue)
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${inputvue_type_script_lang_js_prefixCls}-wrapper`,
        {
          [`${inputvue_type_script_lang_js_prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${inputvue_type_script_lang_js_prefixCls}-type`]: this.type,
          [`${inputvue_type_script_lang_js_prefixCls}-group-with-prepend`]: this.prepend,
          [`${inputvue_type_script_lang_js_prefixCls}-group-with-append`]: this.append || this.search,
          [`${inputvue_type_script_lang_js_prefixCls}-hide-icon`]: this.append, // #554
          [`${inputvue_type_script_lang_js_prefixCls}-with-search`]: this.search
        }
      ]
    },
    inputClasses () {
      return [
        `${inputvue_type_script_lang_js_prefixCls}`,
        {
          [`${inputvue_type_script_lang_js_prefixCls}-${this.size}`]: !!this.size,
          [`${inputvue_type_script_lang_js_prefixCls}-disabled`]: this.disabled,
          [`${inputvue_type_script_lang_js_prefixCls}-with-prefix`]: this.showPrefix,
          [`${inputvue_type_script_lang_js_prefixCls}-with-suffix`]: this.showSuffix || this.search
        }
      ]
    },
    closeClasses () {
      return ['iconfont', 'icon-ios-close-circle', inputvue_type_script_lang_js_prefixCls + '-icon', inputvue_type_script_lang_js_prefixCls + '-icon-clear', inputvue_type_script_lang_js_prefixCls + '-icon-normal']
    },
    textareaClasses () {
      return [
        `${inputvue_type_script_lang_js_prefixCls}`,
        {
          [`${inputvue_type_script_lang_js_prefixCls}-disabled`]: this.disabled
        }
      ]
    }
  },
  mounted () {
    if (this.type !== 'textarea') {
      this.prepend = this.$slots.prepend !== undefined
      this.append = this.$slots.append !== undefined
      this.showPrefix = this.prefix !== '' || this.$slots.prefix !== undefined
      this.showSuffix = this.suffix !== '' || this.$slots.suffix !== undefined
    } else {
      this.prepend = false
      this.append = false
    }
    this.slotReady = true
    this.resizeTextarea()
  }
});

// CONCATENATED MODULE: ./src/components/input/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/input/input.vue





/* normalize component */

var input_component = normalizeComponent(
  input_inputvue_type_script_lang_js_,
  inputvue_type_template_id_15b40202_render,
  inputvue_type_template_id_15b40202_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./src/components/input/index.js


/* istanbul ignore next */
input.install = function (Vue) {
  Vue.component(input.name, input)
}

/* harmony default export */ var components_input = (input);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input-number/input-number.vue?vue&type=template&id=b69a0db2&
var input_numbervue_type_template_id_b69a0db2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapClasses},[_c('div',{class:_vm.handlerClasses},[_c('a',{class:_vm.upClasses,on:{"click":_vm.up}},[_c('span',{class:_vm.innerUpClasses,on:{"click":_vm.preventDefault}})]),_c('a',{class:_vm.downClasses,on:{"click":_vm.down}},[_c('span',{class:_vm.innerDownClasses,on:{"click":_vm.preventDefault}})])]),_c('div',{class:_vm.inputWrapClasses},[_c('input',{class:_vm.inputClasses,attrs:{"id":_vm.elementId,"disabled":_vm.disabled,"autocomplete":"off","spellcheck":"false","autofocus":_vm.autofocus,"readonly":_vm.readonly || !_vm.editable,"name":_vm.name,"placeholder":_vm.placeholder},domProps:{"value":_vm.formatterValue},on:{"focus":_vm.focus,"blur":_vm.blur,"keydown":function($event){$event.stopPropagation();return _vm.keyDown($event)},"input":_vm.change,"mouseup":_vm.preventDefault,"change":_vm.change}})])])}
var input_numbervue_type_template_id_b69a0db2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input-number/input-number.vue?vue&type=template&id=b69a0db2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input-number/input-number.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const input_numbervue_type_script_lang_js_prefixCls = 'bin-input-number'

function addNum (num1, num2) {
  let sq1, sq2, m
  try {
    sq1 = num1.toString().split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = num2.toString().split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

/* harmony default export */ var input_numbervue_type_script_lang_js_ = ({
  name: 'BInputNumber',
  mixins: [emitter],
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    activeChange: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 1
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    name: {
      type: String
    },
    precision: {
      type: Number
    },
    elementId: {
      type: String
    },
    formatter: {
      type: Function
    },
    parser: {
      type: Function
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      focused: false,
      upDisabled: false,
      downDisabled: false,
      currentValue: this.value
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${input_numbervue_type_script_lang_js_prefixCls}`,
        {
          [`${input_numbervue_type_script_lang_js_prefixCls}-${this.size}`]: !!this.size,
          [`${input_numbervue_type_script_lang_js_prefixCls}-disabled`]: this.disabled,
          [`${input_numbervue_type_script_lang_js_prefixCls}-focused`]: this.focused
        }
      ]
    },
    handlerClasses () {
      return `${input_numbervue_type_script_lang_js_prefixCls}-handler-wrap`
    },
    upClasses () {
      return [
        `${input_numbervue_type_script_lang_js_prefixCls}-handler`,
        `${input_numbervue_type_script_lang_js_prefixCls}-handler-up`,
        {
          [`${input_numbervue_type_script_lang_js_prefixCls}-handler-up-disabled`]: this.upDisabled
        }
      ]
    },
    innerUpClasses () {
      return `${input_numbervue_type_script_lang_js_prefixCls}-handler-up-inner iconfont icon-ios-arrow-up`
    },
    downClasses () {
      return [
        `${input_numbervue_type_script_lang_js_prefixCls}-handler`,
        `${input_numbervue_type_script_lang_js_prefixCls}-handler-down`,
        {
          [`${input_numbervue_type_script_lang_js_prefixCls}-handler-down-disabled`]: this.downDisabled
        }
      ]
    },
    innerDownClasses () {
      return `${input_numbervue_type_script_lang_js_prefixCls}-handler-down-inner iconfont icon-ios-arrow-down`
    },
    inputWrapClasses () {
      return `${input_numbervue_type_script_lang_js_prefixCls}-input-wrap`
    },
    inputClasses () {
      return `${input_numbervue_type_script_lang_js_prefixCls}-input`
    },
    precisionValue () {
      // can not display 1.0
      if (!this.currentValue) return this.currentValue
      return this.precision ? this.currentValue.toFixed(this.precision) : this.currentValue
    },
    formatterValue () {
      if (this.formatter && this.precisionValue !== null) {
        return this.formatter(this.precisionValue)
      } else {
        return this.precisionValue
      }
    }
  },
  methods: {
    preventDefault (e) {
      e.preventDefault()
    },
    up (e) {
      const targetVal = Number(e.target.value)
      if (this.upDisabled && isNaN(targetVal)) {
        return false
      }
      this.changeStep('up', e)
    },
    down (e) {
      const targetVal = Number(e.target.value)
      if (this.downDisabled && isNaN(targetVal)) {
        return false
      }
      this.changeStep('down', e)
    },
    changeStep (type, e) {
      if (this.disabled || this.readonly) {
        return false
      }

      const targetVal = Number(e.target.value)
      let val = Number(this.currentValue)
      const step = Number(this.step)
      if (isNaN(val)) {
        return false
      }

      // input a number, and key up or down
      if (!isNaN(targetVal)) {
        if (type === 'up') {
          if (addNum(targetVal, step) <= this.max) {
            val = targetVal
          } else {
            return false
          }
        } else if (type === 'down') {
          if (addNum(targetVal, -step) >= this.min) {
            val = targetVal
          } else {
            return false
          }
        }
      }

      if (type === 'up') {
        val = addNum(val, step)
      } else if (type === 'down') {
        val = addNum(val, -step)
      }
      this.setValue(val)
    },
    setValue (val) {
      // 如果 step 是小数，且没有设置 precision，是有问题的
      if (val && !isNaN(this.precision)) val = Number(Number(val).toFixed(this.precision))

      const { min, max } = this
      if (val !== null) {
        if (val > max) {
          val = max
        } else if (val < min) {
          val = min
        }
      }

      this.$nextTick(() => {
        this.currentValue = val
        this.$emit('input', val)
        this.$emit('on-change', val)
        this.dispatch('BFormItem', 'on-form-change', val)
      })
    },
    focus (event) {
      this.focused = true
      this.$emit('on-focus', event)
    },
    blur () {
      this.focused = false
      this.$emit('on-blur')

      if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
        this.dispatch('BFormItem', 'on-form-blur', this.currentValue)
      }
    },
    keyDown (e) {
      if (e.keyCode === 38) {
        e.preventDefault()
        this.up(e)
      } else if (e.keyCode === 40) {
        e.preventDefault()
        this.down(e)
      }
    },
    change (event) {
      if (event.type === 'change') return

      if (event.type === 'input' && !this.activeChange) return
      let val = event.target.value.trim()
      if (this.parser) {
        val = this.parser(val)
      }

      const isEmptyString = val.length === 0
      if (isEmptyString) {
        this.setValue(null)
        return
      }
      if (event.type === 'input' && val.match(/^\-?\.?$|\.$/)) return // prevent fire early if decimal. If no more input the change event will fire later

      val = Number(val)

      if (!isNaN(val)) {
        this.currentValue = val
        this.setValue(val)
      } else {
        event.target.value = this.currentValue
      }
    },
    changeVal (val) {
      val = Number(val)
      if (!isNaN(val)) {
        const step = this.step

        this.upDisabled = val + step > this.max
        this.downDisabled = val - step < this.min
      } else {
        this.upDisabled = true
        this.downDisabled = true
      }
    }
  },
  mounted () {
    this.changeVal(this.currentValue)
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.changeVal(val)
    },
    min () {
      this.changeVal(this.currentValue)
    },
    max () {
      this.changeVal(this.currentValue)
    }
  }
});

// CONCATENATED MODULE: ./src/components/input-number/input-number.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_number_input_numbervue_type_script_lang_js_ = (input_numbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/input-number/input-number.vue





/* normalize component */

var input_number_component = normalizeComponent(
  input_number_input_numbervue_type_script_lang_js_,
  input_numbervue_type_template_id_b69a0db2_render,
  input_numbervue_type_template_id_b69a0db2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input_number = (input_number_component.exports);
// CONCATENATED MODULE: ./src/components/input-number/index.js


/* istanbul ignore next */
input_number.install = function (Vue) {
  Vue.component(input_number.name, input_number)
}

/* harmony default export */ var components_input_number = (input_number);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/rate/rate.vue?vue&type=template&id=299eba10&
var ratevue_type_template_id_299eba10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-rate",attrs:{"role":"slider","aria-valuenow":_vm.currentValue,"aria-valuetext":_vm.text,"aria-valuemin":"0","aria-valuemax":_vm.max,"tabindex":"0"},on:{"keydown":_vm.handleKey}},[_vm._l((_vm.max),function(item,key){return _c('span',{key:key,staticClass:"bin-rate__item",style:({ cursor: _vm.rateDisabled ? 'auto' : 'pointer' }),on:{"mousemove":function($event){return _vm.setCurrentValue(item, $event)},"mouseleave":_vm.resetCurrentValue,"click":function($event){return _vm.selectValue(item)}}},[_c('i',{staticClass:"bin-rate__icon iconfont",class:[_vm.classes[item - 1], { 'hover': _vm.hoverIndex === item }],style:(_vm.getIconStyle(item))},[(_vm.showDecimalIcon(item))?_c('i',{staticClass:"bin-rate__decimal iconfont",class:_vm.decimalIconClass,style:(_vm.decimalStyle)}):_vm._e()])])}),(_vm.showText || _vm.showScore)?_c('span',{staticClass:"bin-rate__text",style:({ color: _vm.textColor })},[_vm._v(_vm._s(_vm.text))]):_vm._e()],2)}
var ratevue_type_template_id_299eba10_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/rate/rate.vue?vue&type=template&id=299eba10&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/rate/rate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ratevue_type_script_lang_js_ = ({
  name: 'BRate',
  data () {
    return {
      pointerAtLeftHalf: true,
      currentValue: this.value,
      hoverIndex: -1
    }
  },

  props: {
    value: {
      type: Number,
      default: 0
    },
    lowThreshold: {
      type: Number,
      default: 2
    },
    highThreshold: {
      type: Number,
      default: 4
    },
    max: {
      type: Number,
      default: 5
    },
    colors: {
      type: Array,
      default () {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
      }
    },
    voidColor: {
      type: String,
      default: '#C6D1DE'
    },
    disabledVoidColor: {
      type: String,
      default: '#EFF2F7'
    },
    iconClasses: {
      type: Array,
      default () {
        return ['icon-ios-star', 'icon-ios-star', 'icon-ios-star']
      }
    },
    voidIconClass: {
      type: String,
      default: 'icon-ios-star-outline'
    },
    disabledVoidIconClass: {
      type: String,
      default: 'icon-ios-star'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: '#1f2d3d'
    },
    texts: {
      type: Array,
      default () {
        return ['极差', '失望', '一般', '满意', '惊喜']
      }
    },
    scoreTemplate: {
      type: String,
      default: '{value}'
    }
  },
  computed: {
    text () {
      let result = ''
      if (this.showScore) {
        result = this.scoreTemplate.replace(/\{\s*value\s*\}/, this.rateDisabled
          ? this.value
          : this.currentValue)
      } else if (this.showText) {
        result = this.texts[Math.ceil(this.currentValue) - 1]
      }
      return result
    },
    decimalStyle () {
      let width = ''
      if (this.rateDisabled) {
        width = `${this.valueDecimal < 50 ? 0 : 50}%`
      }
      if (this.allowHalf) {
        width = '50%'
      }
      return {
        color: this.activeColor,
        width
      }
    },
    valueDecimal () {
      return this.value * 100 - Math.floor(this.value) * 100
    },
    decimalIconClass () {
      return this.getValueFromMap(this.value, this.classMap)
    },
    voidClass () {
      return this.rateDisabled ? this.classMap.disabledVoidClass : this.classMap.voidClass
    },
    activeClass () {
      return this.getValueFromMap(this.currentValue, this.classMap)
    },
    colorMap () {
      return {
        lowColor: this.colors[0],
        mediumColor: this.colors[1],
        highColor: this.colors[2],
        voidColor: this.voidColor,
        disabledVoidColor: this.disabledVoidColor
      }
    },
    activeColor () {
      return this.getValueFromMap(this.currentValue, this.colorMap)
    },
    classes () {
      let result = []
      let i = 0
      let threshold = this.currentValue
      if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
        threshold--
      }
      for (; i < threshold; i++) {
        result.push(this.activeClass)
      }
      for (; i < this.max; i++) {
        result.push(this.voidClass)
      }
      return result
    },
    classMap () {
      return {
        lowClass: this.iconClasses[0],
        mediumClass: this.iconClasses[1],
        highClass: this.iconClasses[2],
        voidClass: this.voidIconClass,
        disabledVoidClass: this.disabledVoidIconClass
      }
    },
    rateDisabled () {
      return this.disabled
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
      this.pointerAtLeftHalf = this.value !== Math.floor(this.value)
    }
  },
  methods: {
    getMigratingConfig () {
      return {
        props: {
          'text-template': 'text-template is renamed to score-template.'
        }
      }
    },
    getValueFromMap (value, map) {
      let result = ''
      if (value <= this.lowThreshold) {
        result = map.lowColor || map.lowClass
      } else if (value >= this.highThreshold) {
        result = map.highColor || map.highClass
      } else {
        result = map.mediumColor || map.mediumClass
      }
      return result
    },
    showDecimalIcon (item) {
      let showWhenDisabled = this.rateDisabled && this.valueDecimal > 0 && item - 1 < this.value && item > this.value
      /* istanbul ignore next */
      let showWhenAllowHalf = this.allowHalf &&
        this.pointerAtLeftHalf &&
        item - 0.5 <= this.currentValue &&
        item > this.currentValue
      return showWhenDisabled || showWhenAllowHalf
    },
    getIconStyle (item) {
      const voidColor = this.rateDisabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor
      return {
        color: item <= this.currentValue ? this.activeColor : voidColor
      }
    },
    selectValue (value) {
      if (this.rateDisabled) {
        return
      }
      if (this.allowHalf && this.pointerAtLeftHalf) {
        this.$emit('input', this.currentValue)
        this.$emit('change', this.currentValue)
      } else {
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    handleKey (e) {
      if (this.rateDisabled) {
        return
      }
      let currentValue = this.currentValue
      const keyCode = e.keyCode
      if (keyCode === 38 || keyCode === 39) { // left / down
        if (this.allowHalf) {
          currentValue += 0.5
        } else {
          currentValue += 1
        }
        e.stopPropagation()
        e.preventDefault()
      } else if (keyCode === 37 || keyCode === 40) {
        if (this.allowHalf) {
          currentValue -= 0.5
        } else {
          currentValue -= 1
        }
        e.stopPropagation()
        e.preventDefault()
      }
      currentValue = currentValue < 0 ? 0 : currentValue
      currentValue = currentValue > this.max ? this.max : currentValue
      this.$emit('input', currentValue)
      this.$emit('change', currentValue)
    },
    setCurrentValue (value, event) {
      if (this.rateDisabled) {
        return
      }
      /* istanbul ignore if */
      if (this.allowHalf) {
        let target = event.target
        if (hasClass(target, 'bin-rate__item')) {
          target = target.querySelector('.bin-rate__icon')
        }
        if (hasClass(target, 'bin-rate__decimal')) {
          target = target.parentNode
        }
        this.pointerAtLeftHalf = event.offsetX * 2 <= target.clientWidth
        this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value
      } else {
        this.currentValue = value
      }
      this.hoverIndex = value
    },
    resetCurrentValue () {
      if (this.rateDisabled) {
        return
      }
      if (this.allowHalf) {
        this.pointerAtLeftHalf = this.value !== Math.floor(this.value)
      }
      this.currentValue = this.value
      this.hoverIndex = -1
    }
  },
  created () {
    if (!this.value) {
      this.$emit('input', 0)
    }
  }
});

// CONCATENATED MODULE: ./src/components/rate/rate.vue?vue&type=script&lang=js&
 /* harmony default export */ var rate_ratevue_type_script_lang_js_ = (ratevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/rate/rate.vue





/* normalize component */

var rate_component = normalizeComponent(
  rate_ratevue_type_script_lang_js_,
  ratevue_type_template_id_299eba10_render,
  ratevue_type_template_id_299eba10_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var rate = (rate_component.exports);
// CONCATENATED MODULE: ./src/components/rate/index.js


/* istanbul ignore next */
rate.install = function (Vue) {
  Vue.component(rate.name, rate)
}

/* harmony default export */ var components_rate = (rate);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/switch/switch.vue?vue&type=template&id=26778f52&
var switchvue_type_template_id_26778f52_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.wrapClasses,style:(_vm.wrapStyle),attrs:{"tabindex":"0"},on:{"click":_vm.toggle,"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }return _vm.toggle($event)}}},[_c('input',{attrs:{"type":"hidden","name":_vm.name},domProps:{"value":_vm.currentValue}}),_c('span',{class:_vm.innerClasses},[(_vm.currentValue === _vm.trueValue)?_vm._t("open"):_vm._e(),(_vm.currentValue === _vm.falseValue)?_vm._t("close"):_vm._e()],2)])}
var switchvue_type_template_id_26778f52_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/switch/switch.vue?vue&type=template&id=26778f52&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/switch/switch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const switchvue_type_script_lang_js_prefixCls = 'bin-switch'

/* harmony default export */ var switchvue_type_script_lang_js_ = ({
  name: 'BSwitch',
  mixins: [emitter],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator (value) {
        return oneOf(value, ['large', 'small', 'default', 'mini'])
      },
      default: 'default'
    },
    name: {
      type: String
    },
    activeColor: String,
    inactiveColor: String
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${switchvue_type_script_lang_js_prefixCls}`,
        {
          [`${switchvue_type_script_lang_js_prefixCls}-checked`]: this.currentValue === this.trueValue,
          [`${switchvue_type_script_lang_js_prefixCls}-disabled`]: this.disabled,
          [`${switchvue_type_script_lang_js_prefixCls}-${this.size}`]: !!this.size
        }
      ]
    },
    wrapStyle () {
      let isChecked = this.currentValue === this.trueValue
      return {
        backgroundColor: isChecked ? this.activeColor : this.inactiveColor,
        borderColor: isChecked ? this.activeColor : this.inactiveColor
      }
    },
    innerClasses () {
      return `${switchvue_type_script_lang_js_prefixCls}-inner`
    }
  },
  methods: {
    toggle (event) {
      event.preventDefault()
      if (this.disabled || this.loading) {
        return false
      }
      const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue
      this.currentValue = checked
      this.$emit('input', checked)
      this.$emit('on-change', checked)

      this.dispatch('BFormItem', 'on-form-change', checked)
    }
  },
  watch: {
    value (val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        console.log('Value should be true or false.')
      }
      this.currentValue = val
    }
  }
});

// CONCATENATED MODULE: ./src/components/switch/switch.vue?vue&type=script&lang=js&
 /* harmony default export */ var switch_switchvue_type_script_lang_js_ = (switchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/switch/switch.vue





/* normalize component */

var switch_component = normalizeComponent(
  switch_switchvue_type_script_lang_js_,
  switchvue_type_template_id_26778f52_render,
  switchvue_type_template_id_26778f52_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var switch_switch = (switch_component.exports);
// CONCATENATED MODULE: ./src/components/switch/index.js


/* istanbul ignore next */
switch_switch.install = function (Vue) {
  Vue.component(switch_switch.name, switch_switch)
}

/* harmony default export */ var components_switch = (switch_switch);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/checkbox.vue?vue&type=template&id=f17b0240&
var checkboxvue_type_template_id_f17b0240_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.wrapClasses},[_c('span',{class:_vm.checkboxClasses},[_c('span',{class:_vm.innerClasses}),(_vm.group)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],class:_vm.inputClasses,attrs:{"type":"checkbox","disabled":_vm.disabled,"name":_vm.name},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.change],"focus":_vm.onFocus,"blur":_vm.onBlur}}):_c('input',{class:_vm.inputClasses,attrs:{"type":"checkbox","disabled":_vm.disabled,"name":_vm.name},domProps:{"checked":_vm.currentValue},on:{"change":_vm.change,"focus":_vm.onFocus,"blur":_vm.onBlur}})]),_vm._t("default",[(_vm.showSlot)?_c('span',[_vm._v(_vm._s(_vm.label))]):_vm._e()])],2)}
var checkboxvue_type_template_id_f17b0240_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue?vue&type=template&id=f17b0240&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const checkboxvue_type_script_lang_js_prefixCls = 'bin-checkbox'

/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'BCheckbox',
  mixins: [emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      model: [],
      currentValue: this.value,
      group: false,
      showSlot: true,
      parent: findComponentUpward(this, 'BCheckboxGroup'),
      focusInner: false
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${checkboxvue_type_script_lang_js_prefixCls}-wrapper`,
        {
          [`${checkboxvue_type_script_lang_js_prefixCls}-group-item`]: this.group,
          [`${checkboxvue_type_script_lang_js_prefixCls}-wrapper-checked`]: this.currentValue,
          [`${checkboxvue_type_script_lang_js_prefixCls}-wrapper-disabled`]: this.disabled,
          [`${checkboxvue_type_script_lang_js_prefixCls}-${this.size}`]: !!this.size
        }
      ]
    },
    checkboxClasses () {
      return [
        `${checkboxvue_type_script_lang_js_prefixCls}`,
        {
          [`${checkboxvue_type_script_lang_js_prefixCls}-checked`]: this.currentValue,
          [`${checkboxvue_type_script_lang_js_prefixCls}-disabled`]: this.disabled,
          [`${checkboxvue_type_script_lang_js_prefixCls}-indeterminate`]: this.indeterminate
        }
      ]
    },
    innerClasses () {
      return [
        `${checkboxvue_type_script_lang_js_prefixCls}-inner`,
        {
          [`${checkboxvue_type_script_lang_js_prefixCls}-focus`]: this.focusInner
        }
      ]
    },
    inputClasses () {
      return `${checkboxvue_type_script_lang_js_prefixCls}-input`
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'BCheckboxGroup')
    if (this.parent) {
      this.group = true
    }

    if (this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
      this.showSlot = this.$slots.default !== undefined
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }

      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)

      if (this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value)
        this.dispatch('BFormItem', 'on-form-change', value)
      }
    },
    updateModel () {
      this.currentValue = this.value === this.trueValue
    },
    onBlur () {
      this.focusInner = false
    },
    onFocus () {
      this.focusInner = true
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        console.error('Value should be trueValue or falseValue.')
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkbox_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue





/* normalize component */

var checkbox_component = normalizeComponent(
  checkbox_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_f17b0240_render,
  checkboxvue_type_template_id_f17b0240_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkbox_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/checkbox-group.vue?vue&type=template&id=21bad8f8&
var checkbox_groupvue_type_template_id_21bad8f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_vm._t("default")],2)}
var checkbox_groupvue_type_template_id_21bad8f8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkbox/checkbox-group.vue?vue&type=template&id=21bad8f8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/checkbox-group.vue?vue&type=script&lang=js&
//
//
//
//
//





const checkbox_groupvue_type_script_lang_js_prefixCls = 'bin-checkbox-group'

/* harmony default export */ var checkbox_groupvue_type_script_lang_js_ = ({
  name: 'BCheckboxGroup',
  mixins: [emitter],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    }
  },
  data () {
    return {
      currentValue: this.value,
      children: []
    }
  },
  computed: {
    classes () {
      return [
        `${checkbox_groupvue_type_script_lang_js_prefixCls}`,
        {
          [`bin-checkbox-${this.size}`]: !!this.size
        }
      ]
    }
  },
  mounted () {
    this.updateModel(true)
  },
  methods: {
    updateModel (update) {
      this.children = findComponentsDownward(this, 'BCheckbox')
      if (this.children) {
        const { value } = this
        this.children.forEach(child => {
          child.model = value

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },
    change (data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('BFormItem', 'on-form-change', data)
    }
  },
  watch: {
    value () {
      this.updateModel(true)
    }
  }
});

// CONCATENATED MODULE: ./src/components/checkbox/checkbox-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkbox_checkbox_groupvue_type_script_lang_js_ = (checkbox_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/checkbox/checkbox-group.vue





/* normalize component */

var checkbox_group_component = normalizeComponent(
  checkbox_checkbox_groupvue_type_script_lang_js_,
  checkbox_groupvue_type_template_id_21bad8f8_render,
  checkbox_groupvue_type_template_id_21bad8f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkbox_group = (checkbox_group_component.exports);
// CONCATENATED MODULE: ./src/components/checkbox/index.js



checkbox_checkbox.Group = checkbox_group

/* istanbul ignore next */
checkbox_checkbox.install = function (Vue) {
  Vue.component(checkbox_checkbox.name, checkbox_checkbox)
}
/* harmony default export */ var components_checkbox = (checkbox_checkbox);

// CONCATENATED MODULE: ./src/components/checkbox-group/index.js


/* istanbul ignore next */
checkbox_group.install = function (Vue) {
  Vue.component(checkbox_group.name, checkbox_group)
}

/* harmony default export */ var components_checkbox_group = (checkbox_group);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio/radio.vue?vue&type=template&id=78fff548&
var radiovue_type_template_id_78fff548_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.wrapClasses},[_c('span',{class:_vm.radioClasses},[_c('span',{class:_vm.innerClasses}),_c('input',{class:_vm.inputClasses,attrs:{"type":"radio","disabled":_vm.disabled,"name":_vm.groupName},domProps:{"checked":_vm.currentValue},on:{"change":_vm.change,"focus":_vm.onFocus,"blur":_vm.onBlur}})]),_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)}
var radiovue_type_template_id_78fff548_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/radio/radio.vue?vue&type=template&id=78fff548&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio/radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const radiovue_type_script_lang_js_prefixCls = 'bin-radio'

/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'BRadio',
  mixins: [emitter],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      currentValue: this.value,
      group: false,
      groupName: this.name,
      parent: findComponentUpward(this, 'BRadioGroup'),
      focusWrapper: false,
      focusInner: false
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${radiovue_type_script_lang_js_prefixCls}-wrapper`,
        {
          [`${radiovue_type_script_lang_js_prefixCls}-group-item`]: this.group,
          [`${radiovue_type_script_lang_js_prefixCls}-wrapper-checked`]: this.currentValue,
          [`${radiovue_type_script_lang_js_prefixCls}-wrapper-disabled`]: this.disabled,
          [`${radiovue_type_script_lang_js_prefixCls}-${this.size}`]: !!this.size,
          [`${radiovue_type_script_lang_js_prefixCls}-focus`]: this.focusWrapper
        }
      ]
    },
    radioClasses () {
      return [
        `${radiovue_type_script_lang_js_prefixCls}`,
        {
          [`${radiovue_type_script_lang_js_prefixCls}-checked`]: this.currentValue,
          [`${radiovue_type_script_lang_js_prefixCls}-disabled`]: this.disabled
        }
      ]
    },
    innerClasses () {
      return [
        `${radiovue_type_script_lang_js_prefixCls}-inner`,
        {
          [`${radiovue_type_script_lang_js_prefixCls}-focus`]: this.focusInner
        }
      ]
    },
    inputClasses () {
      return `${radiovue_type_script_lang_js_prefixCls}-input`
    }
  },
  mounted () {
    if (this.parent) {
      this.group = true
      if (this.name && this.name !== this.parent.name) {
        /* eslint-disable no-console */
        if (console.warn) {
          console.warn('[bin-ui] Name does not match Radio Group name.')
        }
        /* eslint-enable no-console */
      } else {
        this.groupName = this.parent.name
      }
    }

    if (this.group) {
      this.parent.updateValue()
    } else {
      this.updateValue()
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }

      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)

      if (this.group) {
        if (this.label !== undefined) {
          this.parent.change({
            value: this.label,
            checked: this.value
          })
        }
      } else {
        this.$emit('on-change', value)
        this.dispatch('BFormItem', 'on-form-change', value)
      }
    },
    updateValue () {
      this.currentValue = this.value === this.trueValue
    },
    onBlur () {
      this.focusWrapper = false
      this.focusInner = false
    },
    onFocus () {
      if (this.group && this.parent.type === 'button') {
        this.focusWrapper = true
      } else {
        this.focusInner = true
      }
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateValue()
      } else {
        console.log('Value should be trueValue or falseValue.')
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/radio/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var radio_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/radio/radio.vue





/* normalize component */

var radio_component = normalizeComponent(
  radio_radiovue_type_script_lang_js_,
  radiovue_type_template_id_78fff548_render,
  radiovue_type_template_id_78fff548_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var radio_radio = (radio_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio/radio-group.vue?vue&type=template&id=2720d0f2&
var radio_groupvue_type_template_id_2720d0f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,attrs:{"name":_vm.name}},[_vm._t("default")],2)}
var radio_groupvue_type_template_id_2720d0f2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/radio/radio-group.vue?vue&type=template&id=2720d0f2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio/radio-group.vue?vue&type=script&lang=js&
//
//
//
//
//




const radio_groupvue_type_script_lang_js_prefixCls = 'bin-radio-group'

let seed = 0
const now = Date.now()
const getUuid = () => `binRadioGroup_${now}_${seed++}`

/* harmony default export */ var radio_groupvue_type_script_lang_js_ = ({
  name: 'BRadioGroup',
  mixins: [emitter],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    name: {
      type: String,
      default: getUuid
    }
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  computed: {
    classes () {
      return [
        `${radio_groupvue_type_script_lang_js_prefixCls}`,
        {
          [`${radio_groupvue_type_script_lang_js_prefixCls}-${this.size}`]: !!this.size,
          [`bin-radio-${this.size}`]: !!this.size
        }
      ]
    }
  },
  mounted () {
    this.updateValue()
  },
  methods: {
    updateValue () {
      this.childrens = findComponentsDownward(this, 'BRadio')
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.currentValue = this.currentValue === child.label
          child.group = true
        })
      }
    },
    change (data) {
      this.currentValue = data.value
      this.updateValue()
      this.$emit('input', data.value)
      this.$emit('on-change', data.value)
      this.dispatch('BFormItem', 'on-form-change', data.value)
    }
  },
  watch: {
    value () {
      if (this.currentValue !== this.value) {
        this.currentValue = this.value
        this.$nextTick(() => {
          this.updateValue()
        })
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/radio/radio-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var radio_radio_groupvue_type_script_lang_js_ = (radio_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/radio/radio-group.vue





/* normalize component */

var radio_group_component = normalizeComponent(
  radio_radio_groupvue_type_script_lang_js_,
  radio_groupvue_type_template_id_2720d0f2_render,
  radio_groupvue_type_template_id_2720d0f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var radio_group = (radio_group_component.exports);
// CONCATENATED MODULE: ./src/components/radio/index.js



radio_radio.Group = radio_group

/* istanbul ignore next */
radio_radio.install = function (Vue) {
  Vue.component(radio_radio.name, radio_radio)
}

/* harmony default export */ var components_radio = (radio_radio);

// CONCATENATED MODULE: ./src/components/radio-group/index.js


/* istanbul ignore next */
radio_group.install = function (Vue) {
  Vue.component(radio_group.name, radio_group)
}

/* harmony default export */ var components_radio_group = (radio_group);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tooltip/tooltip.vue?vue&type=template&id=88970564&
var tooltipvue_type_template_id_88970564_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.prefixCls],on:{"mouseenter":_vm.handleShowPopper,"mouseleave":_vm.handleClosePopper}},[_c('div',{ref:"reference",class:[_vm.prefixCls + '-rel']},[_vm._t("default")],2),_c('transition',{attrs:{"name":"fade-in"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled && (_vm.visible || _vm.always)),expression:"!disabled && (visible || always)"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"popper",class:[_vm.prefixCls + '-popper', _vm.prefixCls + '-' + _vm.theme],style:(_vm.dropStyles),attrs:{"data-transfer":_vm.transfer},on:{"mouseenter":_vm.handleShowPopper,"mouseleave":_vm.handleClosePopper}},[_c('div',{class:[_vm.prefixCls + '-content']},[_c('div',{class:[_vm.prefixCls + '-arrow']}),_c('div',{class:_vm.innerClasses,style:(_vm.innerStyles)},[_vm._t("content",[_vm._v(_vm._s(_vm.content))])],2)])])])],1)}
var tooltipvue_type_template_id_88970564_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tooltip/tooltip.vue?vue&type=template&id=88970564&

// CONCATENATED MODULE: ./src/components/base/popper.js
/**
 * https://github.com/freeze-component/vue-popper
 * */
const Popper = __webpack_require__("d2e4")  // eslint-disable-line

/* harmony default export */ var popper = ({
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: Object,
    popper: Object,
    offset: {
      default: 0
    },
    value: {
      type: Boolean,
      default: false
    },
    transition: String,
    options: {
      type: Object,
      default () {
        return {
          modifiers: {
            computeStyle: {
              gpuAcceleration: false
            },
            preventOverflow: {
              boundariesElement: 'window'
            }
          }
        }
      }
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.visible = val
        this.$emit('input', val)
      }
    },
    visible (val) {
      if (val) {
        if (this.handleIndexIncrease) this.handleIndexIncrease() // just use for PopTip
        this.updatePopper()
        this.$emit('on-popper-show')
      } else {
        this.$emit('on-popper-hide')
      }
      this.$emit('input', val)
    }
  },
  methods: {
    createPopper () {
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
        return
      }

      const options = this.options
      const popper = this.popper || this.$refs.popper
      const reference = this.reference || this.$refs.reference

      if (!popper || !reference) return

      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy()
      }

      options.placement = this.placement

      if (!options.modifiers.offset) {
        options.modifiers.offset = {}
      }
      options.modifiers.offset.offset = this.offset
      options.onCreate = () => {
        this.$nextTick(this.updatePopper)
        this.$emit('created', this)
      }
      this.popperJS = new Popper(reference, popper, options)
    },
    updatePopper () {
      this.popperJS ? this.popperJS.update() : this.createPopper()
    },
    doDestroy () {
      if (this.visible) return
      this.popperJS.destroy()
      this.popperJS = null
    }
  },
  updated () {
    this.$nextTick(() => this.updatePopper())
  },
  beforeDestroy () {
    if (this.popperJS) {
      this.popperJS.destroy()
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tooltip/tooltip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const tooltipvue_type_script_lang_js_prefixCls = 'bin-tooltip'

/* harmony default export */ var tooltipvue_type_script_lang_js_ = ({
  name: 'BTooltip',
  directives: { TransferDom: transfer_dom },
  mixins: [popper],
  props: {
    placement: {
      validator (value) {
        return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
      },
      default: 'top'
    },
    content: {
      type: [String, Number],
      default: ''
    },
    delay: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    controlled: { // under this prop,Tooltip will not close when mouseleave
      type: Boolean,
      default: false
    },
    always: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default: false
    },
    theme: {
      validator (value) {
        return oneOf(value, ['dark', 'light'])
      },
      default: 'light'
    },
    maxWidth: {
      type: [String, Number]
    }
  },
  data () {
    return {
      prefixCls: tooltipvue_type_script_lang_js_prefixCls,
      tIndex: this.handleGetIndex()
    }
  },
  computed: {
    innerStyles () {
      const styles = {}
      if (this.maxWidth) styles['max-width'] = `${this.maxWidth}px`
      return styles
    },
    innerClasses () {
      return [
        `${tooltipvue_type_script_lang_js_prefixCls}-inner`,
        {
          [`${tooltipvue_type_script_lang_js_prefixCls}-inner-with-width`]: !!this.maxWidth
        }
      ]
    },
    dropStyles () {
      let styles = {}
      if (this.transfer) styles['z-index'] = 1060 + this.tIndex

      return styles
    }
  },
  watch: {
    content () {
      this.updatePopper()
    }
  },
  methods: {
    handleShowPopper () {
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.visible = true
      }, this.delay)
      this.tIndex = this.handleGetIndex()
    },
    handleClosePopper () {
      if (this.timeout) {
        clearTimeout(this.timeout)
        if (!this.controlled) {
          this.timeout = setTimeout(() => {
            this.visible = false
          }, 100)
        }
      }
    },
    handleGetIndex () {
      transferIncrease()
      return transferIndex
    }
  },
  mounted () {
    if (this.always) {
      this.updatePopper()
    }
  }
});

// CONCATENATED MODULE: ./src/components/tooltip/tooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var tooltip_tooltipvue_type_script_lang_js_ = (tooltipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tooltip/tooltip.vue





/* normalize component */

var tooltip_component = normalizeComponent(
  tooltip_tooltipvue_type_script_lang_js_,
  tooltipvue_type_template_id_88970564_render,
  tooltipvue_type_template_id_88970564_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tooltip = (tooltip_component.exports);
// CONCATENATED MODULE: ./src/components/tooltip/index.js


/* istanbul ignore next */
tooltip.install = function (Vue) {
  Vue.component(tooltip.name, tooltip)
}

/* harmony default export */ var components_tooltip = (tooltip);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/form.vue?vue&type=template&id=150379ee&
var formvue_type_template_id_150379ee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{class:_vm.classes,attrs:{"autocomplete":_vm.autocomplete}},[_vm._t("default")],2)}
var formvue_type_template_id_150379ee_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/form.vue?vue&type=template&id=150379ee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/form.vue?vue&type=script&lang=js&
//
//
//
//
//



const formvue_type_script_lang_js_prefixCls = 'bin-form'

/* harmony default export */ var formvue_type_script_lang_js_ = ({
  name: 'BForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    },
    labelWidth: {
      type: Number
    },
    labelPosition: {
      validator (value) {
        return oneOf(value, ['left', 'right', 'top'])
      },
      default: 'right'
    },
    inline: {
      type: Boolean,
      default: false
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    autocomplete: {
      validator (value) {
        return oneOf(value, ['on', 'off'])
      },
      default: 'off'
    }
  },
  provide () {
    return { form: this }
  },
  data () {
    return {
      fields: []
    }
  },
  computed: {
    classes () {
      return [
        `${formvue_type_script_lang_js_prefixCls}`,
        `${formvue_type_script_lang_js_prefixCls}-label-${this.labelPosition}`,
        {
          [`${formvue_type_script_lang_js_prefixCls}-inline`]: this.inline
        }
      ]
    }
  },
  methods: {
    resetFields () {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    validate (callback) {
      return new Promise(resolve => {
        let valid = true
        let count = 0
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (++count === this.fields.length) {
              // all finish
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    },
    validateField (prop, cb) {
      const field = this.fields.filter(field => field.prop === prop)[0]
      if (!field) {
        throw new Error('[bin-ui warn]: 必须使用有效的 props 字符串调用 validateField !')
      }
      field.validate('', cb)
    }
  },
  watch: {
    rules () {
      this.validate()
    }
  },
  created () {
    this.$on('on-form-item-add', (field) => {
      if (field) this.fields.push(field)
      return false
    })
    this.$on('on-form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1)
      return false
    })
  }
});

// CONCATENATED MODULE: ./src/components/form/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/form.vue





/* normalize component */

var form_component = normalizeComponent(
  form_formvue_type_script_lang_js_,
  formvue_type_template_id_150379ee_render,
  formvue_type_template_id_150379ee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_form = (form_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/form-item.vue?vue&type=template&id=18fb2c00&
var form_itemvue_type_template_id_18fb2c00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[(_vm.label || _vm.$slots.label)?_c('label',{class:[_vm.prefixCls + '-label'],style:(_vm.labelStyles),attrs:{"for":_vm.labelFor}},[_vm._t("label",[_vm._v(_vm._s(_vm.label))])],2):_vm._e(),_c('div',{class:[_vm.prefixCls + '-content'],style:(_vm.contentStyles)},[_vm._t("default"),_c('transition',{attrs:{"name":"fade-in"}},[(_vm.validateState === 'error' && _vm.showMessage && _vm.form.showMessage)?_c('div',{class:[_vm.prefixCls + '-error-tip']},[_vm._v(_vm._s(_vm.validateMessage)+"\n      ")]):_vm._e()])],2)])}
var form_itemvue_type_template_id_18fb2c00_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/form-item.vue?vue&type=template&id=18fb2c00&

// EXTERNAL MODULE: ./node_modules/async-validator/es/index.js
var es = __webpack_require__("a15e");
var es_default = /*#__PURE__*/__webpack_require__.n(es);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/form-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const form_itemvue_type_script_lang_js_prefixCls = 'bin-form-item'

function getPropByPath (obj, path) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  let keyArr = path.split('.')
  let i = 0

  for (let len = keyArr.length; i < len - 1; ++i) {
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      throw new Error('[bin-ui warn]: please transfer a valid prop path to form item!')
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj[keyArr[i]]
  }
}

/* harmony default export */ var form_itemvue_type_script_lang_js_ = ({
  name: 'BFormItem',
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: Number
    },
    prop: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    rules: {
      type: [Object, Array]
    },
    error: {
      type: String
    },
    validateStatus: {
      type: Boolean
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    labelFor: {
      type: String
    }
  },
  data () {
    return {
      prefixCls: form_itemvue_type_script_lang_js_prefixCls,
      isRequired: false,
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {}
    }
  },
  watch: {
    error: {
      handler (val) {
        this.validateMessage = val
        this.validateState = val ? 'error' : ''
      },
      immediate: true
    },
    validateStatus (val) {
      this.validateState = val
    },
    rules () {
      this.setRules()
    }
  },
  inject: ['form'],
  computed: {
    classes () {
      return [
        `${form_itemvue_type_script_lang_js_prefixCls}`,
        {
          [`${form_itemvue_type_script_lang_js_prefixCls}-required`]: this.required || this.isRequired,
          [`${form_itemvue_type_script_lang_js_prefixCls}-error`]: this.validateState === 'error',
          [`${form_itemvue_type_script_lang_js_prefixCls}-validating`]: this.validateState === 'validating'
        }
      ]
    },
    fieldValue () {
      const model = this.form.model
      if (!model || !this.prop) {
        return
      }

      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path).v
    },
    labelStyles () {
      let style = {}
      const labelWidth = this.labelWidth === 0 || this.labelWidth ? this.labelWidth : this.form.labelWidth

      if (labelWidth || labelWidth === 0) {
        style.width = `${labelWidth}px`
      }
      return style
    },
    contentStyles () {
      let style = {}
      const labelWidth = this.labelWidth === 0 || this.labelWidth ? this.labelWidth : this.form.labelWidth

      if (labelWidth || labelWidth === 0) {
        style.marginLeft = `${labelWidth}px`
      }
      return style
    }
  },
  methods: {
    setRules () {
      let rules = this.getRules()
      if (rules.length && this.required) {
        return
      } else if (rules.length) {
        rules.every((rule) => {
          this.isRequired = rule.required
        })
      } else if (this.required) {
        this.isRequired = this.required
      }
      this.$off('on-form-blur', this.onFieldBlur)
      this.$off('on-form-change', this.onFieldChange)
      this.$on('on-form-blur', this.onFieldBlur)
      this.$on('on-form-change', this.onFieldChange)
    },
    getRules () {
      let formRules = this.form.rules
      const selfRules = this.rules

      formRules = formRules ? formRules[this.prop] : []

      return [].concat(selfRules || formRules || [])
    },
    getFilteredRule (trigger) {
      const rules = this.getRules()

      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    validate (trigger, callback = function () {
    }) {
      let rules = this.getFilteredRule(trigger)
      if (!rules || rules.length === 0) {
        if (!this.required) {
          callback()
          return true
        } else {
          rules = [{ required: true }]
        }
      }

      this.validateState = 'validating'

      let descriptor = {}
      descriptor[this.prop] = rules

      const validator = new es_default.a(descriptor)
      let model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage)
      })
      this.validateDisabled = false
    },
    resetField () {
      this.validateState = ''
      this.validateMessage = ''

      let model = this.form.model
      let value = this.fieldValue
      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      let prop = getPropByPath(model, path)

      if (Array.isArray(value)) {
        this.validateDisabled = true
        prop.o[prop.k] = [].concat(this.initialValue)
      } else {
        this.validateDisabled = true
        prop.o[prop.k] = this.initialValue
      }
    },
    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      if (this.validateDisabled) {
        this.validateDisabled = false
        return
      }

      this.validate('change')
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('BForm', 'on-form-item-add', this)

      Object.defineProperty(this, 'initialValue', {
        value: this.fieldValue
      })

      this.setRules()
    }
  },
  beforeDestroy () {
    this.dispatch('BForm', 'on-form-item-remove', this)
  }
});

// CONCATENATED MODULE: ./src/components/form/form-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_form_itemvue_type_script_lang_js_ = (form_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/form-item.vue





/* normalize component */

var form_item_component = normalizeComponent(
  form_form_itemvue_type_script_lang_js_,
  form_itemvue_type_template_id_18fb2c00_render,
  form_itemvue_type_template_id_18fb2c00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_item = (form_item_component.exports);
// CONCATENATED MODULE: ./src/components/form/index.js



form_form.Item = form_item

/* istanbul ignore next */
form_form.install = function (Vue) {
  Vue.component(form_form.name, form_form)
}
/* harmony default export */ var components_form = (form_form);

// CONCATENATED MODULE: ./src/components/form-item/index.js


/* istanbul ignore next */
form_item.install = function (Vue) {
  Vue.component(form_item.name, form_item)
}

/* harmony default export */ var components_form_item = (form_item);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/container/container.vue?vue&type=template&id=b0cc9398&
var containervue_type_template_id_b0cc9398_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-container",style:(_vm.wrapStyleBind)},[(_vm.$slots.header && _vm.headerFixed)?_c('div',{staticClass:"bin-container-header",staticStyle:{"position":"absolute"}},[_vm._t("header",[_vm._v("header")])],2):_vm._e(),(_vm.$slots.footer && _vm.footerFixed)?_c('div',{staticClass:"bin-container-footer",staticStyle:{"position":"absolute"}},[_vm._t("footer",[_vm._v("footer")])],2):_vm._e(),_c('div',{staticClass:"wrap",style:(_vm.scrollStyle)},[_c('b-scrollbar',{ref:"scroll",staticStyle:{"height":"100%"}},[(_vm.$slots.header && !_vm.headerFixed)?_c('div',{staticClass:"bin-container-header"},[_vm._t("header",[_vm._v("header")])],2):_vm._e(),_vm._t("default"),(_vm.$slots.footer && !_vm.footerFixed)?_c('div',{staticClass:"bin-container-footer"},[_vm._t("footer",[_vm._v("footer")])],2):_vm._e(),_vm._t("backTop",[(_vm.showBackTop)?_c('b-back-top'):_vm._e()])],2)],1)])}
var containervue_type_template_id_b0cc9398_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/container/container.vue?vue&type=template&id=b0cc9398&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/container/container.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var containervue_type_script_lang_js_ = ({
  name: 'BContainer',
  props: {
    bgColor: {
      type: String,
      default: '#fff'
    },
    showBackTop: {
      type: Boolean,
      default: true
    },
    headerFixed: Boolean,
    footerFixed: Boolean,
    fixedHeaderHeight: {
      type: String,
      default: '50px'
    },
    fixedFooterHeight: {
      type: String,
      default: '50px'
    },
    wrapStyle: {}
  },
  data () {
    return {}
  },
  methods: {
    scrollTo: function (to) {
      // 如果父级是自定义滚动则绑定滚动为父级元素dom
      if (!this.domEl) {
        this.domEl = this.$refs.scroll.$el.querySelector('.bin-scrollbar__wrap')
      }
      let sTop = this.domEl.pageYOffset || this.domEl.scrollTop
      this.$scrollTop(this.domEl, sTop, to, 1000)
    }
  },
  computed: {
    wrapStyleBind () {
      return Object.assign({}, {
        backgroundColor: this.bgColor
      }, this.wrapStyle)
    },
    scrollStyle () {
      let top = this.$slots.header && this.headerFixed ? this.fixedHeaderHeight : null
      let bottom = this.$slots.footer && this.footerFixed ? this.fixedFooterHeight : null
      return {
        height: '100%',
        paddingTop: top,
        paddingBottom: bottom
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/container/container.vue?vue&type=script&lang=js&
 /* harmony default export */ var container_containervue_type_script_lang_js_ = (containervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/container/container.vue





/* normalize component */

var container_component = normalizeComponent(
  container_containervue_type_script_lang_js_,
  containervue_type_template_id_b0cc9398_render,
  containervue_type_template_id_b0cc9398_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var container = (container_component.exports);
// CONCATENATED MODULE: ./src/components/container/index.js


/* istanbul ignore next */
container.install = function (Vue) {
  Vue.component(container.name, container)
}

/* harmony default export */ var components_container = (container);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdown.vue?vue&type=template&id=ea47bb12&
var dropdownvue_type_template_id_ea47bb12_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onClickOutside),expression:"onClickOutside"}],class:[_vm.prefixCls],on:{"mouseenter":_vm.handleMouseenter,"mouseleave":_vm.handleMouseleave}},[_c('div',{ref:"reference",class:_vm.relClasses,on:{"click":_vm.handleClick,"contextmenu":function($event){$event.preventDefault();return _vm.handleRightClick($event)}}},[_vm._t("default")],2),_c('transition',{attrs:{"name":"zoom-in-top"}},[_c('drop',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentVisible),expression:"currentVisible"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"drop",class:_vm.dropdownCls,attrs:{"placement":_vm.placement,"data-transfer":_vm.transfer,"transfer":_vm.transfer},nativeOn:{"mouseenter":function($event){return _vm.handleMouseenter($event)},"mouseleave":function($event){return _vm.handleMouseleave($event)}}},[_vm._t("list")],2)],1)],1)}
var dropdownvue_type_template_id_ea47bb12_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/dropdown.vue?vue&type=template&id=ea47bb12&

// CONCATENATED MODULE: ./src/directive/clickoutside.js


const nodeList = []
const ctx = '@@clickoutsideContext'

let startClick
let clickoutside_seed = 0

on(document, 'mousedown', e => (startClick = e))

on(document, 'mouseup', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick))
})

function createDocumentHandler (el, binding, vnode) {
  return function (mouseup = {}, mousedown = {}) {
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &&
        (vnode.context.popperElm.contains(mouseup.target) ||
          vnode.context.popperElm.contains(mousedown.target)))) return

    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]()
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn()
    }
  }
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
/* harmony default export */ var clickoutside = ({
  bind (el, binding, vnode) {
    nodeList.push(el)
    const id = clickoutside_seed++
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    }
  },

  update (el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode)
    el[ctx].methodName = binding.expression
    el[ctx].bindingFn = binding.value
  },

  unbind (el) {
    let len = nodeList.length

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1)
        break
      }
    }
    delete el[ctx]
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/drop.vue?vue&type=template&id=d894db0a&
var dropvue_type_template_id_d894db0a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-select-dropdown",class:_vm.className,style:(_vm.styles)},[_vm._t("default")],2)}
var dropvue_type_template_id_d894db0a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/select/drop.vue?vue&type=template&id=d894db0a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/drop.vue?vue&type=script&lang=js&
//
//
//
//
//
//




const dropvue_type_script_lang_js_Popper = __webpack_require__("d2e4")  // eslint-disable-line

/* harmony default export */ var dropvue_type_script_lang_js_ = ({
  name: 'Drop',
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    className: {
      type: String
    },
    transfer: {
      type: Boolean
    }
  },
  data () {
    return {
      popper: null,
      width: '',
      popperStatus: false,
      tIndex: this.handleGetIndex()
    }
  },
  computed: {
    styles () {
      let style = {}
      if (this.width) style.minWidth = `${this.width}px`

      if (this.transfer) style['z-index'] = 1060 + this.tIndex

      return style
    }
  },
  methods: {
    update () {
      if (this.popper) {
        this.$nextTick(() => {
          this.popper.update()
          this.popperStatus = true
        })
      } else {
        this.$nextTick(() => {
          this.popper = new dropvue_type_script_lang_js_Popper(this.$parent.$refs.reference, this.$el, {
            placement: this.placement,
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              },
              preventOverflow: {
                boundariesElement: 'window'
              }
            },
            onCreate: () => {
              this.resetTransformOrigin()
              this.$nextTick(this.popper.update())
            },
            onUpdate: () => {
              this.resetTransformOrigin()
            }
          })
        })
      }
      // set a height for parent is Modal and Select's width is 100%
      // 为parent设置一个height为Modal, Select的宽度为100%
      if (this.$parent.$options.name === 'BSelect') {
        this.width = parseInt(getStyle(this.$parent.$el, 'width'))
      }
      this.tIndex = this.handleGetIndex()
    },
    destroy () {
      if (this.popper) {
        setTimeout(() => {
          if (this.popper && !this.popperStatus) {
            this.popper.destroy()
            this.popper = null
          }
          this.popperStatus = false
        }, 300)
      }
    },
    resetTransformOrigin () {
      // 不判断，Select 会报错，不知道为什么
      if (!this.popper) return

      let xPlacement = this.popper.popper.getAttribute('x-placement')
      let placementStart = xPlacement.split('-')[0]
      let placementEnd = xPlacement.split('-')[1]
      const leftOrRight = xPlacement === 'left' || xPlacement === 'right'
      if (!leftOrRight) {
        this.popper.popper.style.transformOrigin = placementStart === 'bottom' ||
        (placementStart !== 'top' && placementEnd === 'start') ? 'center top' : 'center bottom'
      }
    },
    handleGetIndex () {
      transferIncrease()
      return transferIndex
    }
  },
  created () {
    this.$on('on-update-popper', this.update)
    this.$on('on-destroy-popper', this.destroy)
  },
  beforeDestroy () {
    if (this.popper) {
      this.popper.destroy()
    }
  }
});

// CONCATENATED MODULE: ./src/components/select/drop.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_dropvue_type_script_lang_js_ = (dropvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/select/drop.vue





/* normalize component */

var drop_component = normalizeComponent(
  select_dropvue_type_script_lang_js_,
  dropvue_type_template_id_d894db0a_render,
  dropvue_type_template_id_d894db0a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drop = (drop_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const dropdownvue_type_script_lang_js_prefixCls = 'bin-dropdown'
/* harmony default export */ var dropdownvue_type_script_lang_js_ = ({
  name: 'BDropdown',
  directives: { ClickOutside: clickoutside, TransferDom: transfer_dom },
  components: { Drop: drop },
  props: {
    trigger: {
      validator (value) {
        return oneOf(value, ['click', 'hover', 'custom', 'contextMenu'])
      },
      default: 'hover'
    },
    placement: {
      validator (value) {
        return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
      },
      default: 'bottom'
    },
    visible: {
      type: Boolean,
      default: false
    },
    transfer: Boolean, // 是否移动至body
    transferClassName: { // 包裹的样式名
      type: String
    },
    stopPropagation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls: dropdownvue_type_script_lang_js_prefixCls,
      currentVisible: this.visible
    }
  },
  watch: {
    visible (val) {
      this.currentVisible = val
    },
    currentVisible (val) {
      if (val) {
        this.$refs.drop.update()
      } else {
        this.$refs.drop.destroy()
      }
      this.$emit('on-visible-change', val)
    }
  },
  methods: {
    handleClick () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'click') {
        return false
      }
      this.currentVisible = !this.currentVisible
    },
    handleRightClick () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'contextMenu') {
        return false
      }
      this.currentVisible = !this.currentVisible
    },
    handleMouseenter () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'hover') {
        return false
      }
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.currentVisible = true
      }, 250)
    },
    handleMouseleave () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'hover') {
        return false
      }
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.currentVisible = false
        }, 150)
      }
    },
    onClickOutside (e) {
      this.handleClose()
      this.handleRightClose()
      if (this.currentVisible) this.$emit('on-click-outside', e)
    },
    handleClose () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'click') {
        return false
      }
      this.currentVisible = false
    },
    handleRightClose () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'contextMenu') {
        return false
      }
      this.currentVisible = false
    },
    hasParent () {
      const $parent = findComponentUpward(this, 'BDropdown')
      if ($parent) {
        return $parent
      } else {
        return false
      }
    }
  },
  mounted () {
    this.$on('on-click', (key) => {
      if (this.stopPropagation) return
      const $parent = this.hasParent()
      if ($parent) $parent.$emit('on-click', key)
    })
    this.$on('on-hover-click', () => {
      const $parent = this.hasParent()
      if ($parent) {
        this.$nextTick(() => {
          if (this.trigger === 'custom') return false
          this.currentVisible = false
        })
        $parent.$emit('on-hover-click')
      } else {
        this.$nextTick(() => {
          if (this.trigger === 'custom') return false
          this.currentVisible = false
        })
      }
    })
    this.$on('on-haschild-click', () => {
      this.$nextTick(() => {
        if (this.trigger === 'custom') return false
        this.currentVisible = true
      })
      const $parent = this.hasParent()
      if ($parent) $parent.$emit('on-haschild-click')
    })
  },
  computed: {
    transition () {
      return ['bottom-start', 'bottom', 'bottom-end'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade'
    },
    dropdownCls () {
      return {
        [dropdownvue_type_script_lang_js_prefixCls + '-transfer']: this.transfer,
        [this.transferClassName]: this.transferClassName
      }
    },
    relClasses () {
      return [
        `${dropdownvue_type_script_lang_js_prefixCls}-rel`,
        {
          [`${dropdownvue_type_script_lang_js_prefixCls}-rel-user-select-none`]: this.trigger === 'contextMenu'
        }
      ]
    }
  }
});

// CONCATENATED MODULE: ./src/components/dropdown/dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_dropdownvue_type_script_lang_js_ = (dropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/dropdown/dropdown.vue





/* normalize component */

var dropdown_component = normalizeComponent(
  dropdown_dropdownvue_type_script_lang_js_,
  dropdownvue_type_template_id_ea47bb12_render,
  dropdownvue_type_template_id_ea47bb12_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdown = (dropdown_component.exports);
// CONCATENATED MODULE: ./src/components/dropdown/index.js


/* istanbul ignore next */
dropdown.install = function (Vue) {
  Vue.component(dropdown.name, dropdown)
}

/* harmony default export */ var components_dropdown = (dropdown);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdown-item.vue?vue&type=template&id=5aad7e40&
var dropdown_itemvue_type_template_id_5aad7e40_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.classes,on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var dropdown_itemvue_type_template_id_5aad7e40_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/dropdown-item.vue?vue&type=template&id=5aad7e40&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdown-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//


const dropdown_itemvue_type_script_lang_js_prefixCls = 'bin-dropdown-item'

/* harmony default export */ var dropdown_itemvue_type_script_lang_js_ = ({
  name: 'BDropdownItem',
  props: {
    name: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    divided: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `${dropdown_itemvue_type_script_lang_js_prefixCls}`,
        {
          [`${dropdown_itemvue_type_script_lang_js_prefixCls}-disabled`]: this.disabled,
          [`${dropdown_itemvue_type_script_lang_js_prefixCls}-selected`]: this.selected,
          [`${dropdown_itemvue_type_script_lang_js_prefixCls}-divided`]: this.divided
        }
      ]
    }
  },
  methods: {
    handleClick () {
      const $parent = findComponentUpward(this, 'BDropdown')
      const hasChildren = this.$parent && this.$parent.$options.name === 'BDropdown'
      if (this.disabled) {
        this.$nextTick(() => {
          $parent.currentVisible = true
        })
      } else if (hasChildren) {
        this.$parent.$emit('on-haschild-click')
      } else {
        if ($parent && $parent.$options.name === 'BDropdown') {
          $parent.$emit('on-hover-click')
        }
      }
      $parent.$emit('on-click', this.name)
    }
  }
});

// CONCATENATED MODULE: ./src/components/dropdown/dropdown-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_dropdown_itemvue_type_script_lang_js_ = (dropdown_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/dropdown/dropdown-item.vue





/* normalize component */

var dropdown_item_component = normalizeComponent(
  dropdown_dropdown_itemvue_type_script_lang_js_,
  dropdown_itemvue_type_template_id_5aad7e40_render,
  dropdown_itemvue_type_template_id_5aad7e40_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdown_item = (dropdown_item_component.exports);
// CONCATENATED MODULE: ./src/components/dropdown-item/index.js


/* istanbul ignore next */
dropdown_item.install = function (Vue) {
  Vue.component(dropdown_item.name, dropdown_item)
}

/* harmony default export */ var components_dropdown_item = (dropdown_item);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdown-menu.vue?vue&type=template&id=d05e649e&
var dropdown_menuvue_type_template_id_d05e649e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"bin-dropdown-menu"},[_vm._t("default")],2)}
var dropdown_menuvue_type_template_id_d05e649e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/dropdown-menu.vue?vue&type=template&id=d05e649e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdown-menu.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var dropdown_menuvue_type_script_lang_js_ = ({
  name: 'BDropdownMenu'
});

// CONCATENATED MODULE: ./src/components/dropdown/dropdown-menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_dropdown_menuvue_type_script_lang_js_ = (dropdown_menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/dropdown/dropdown-menu.vue





/* normalize component */

var dropdown_menu_component = normalizeComponent(
  dropdown_dropdown_menuvue_type_script_lang_js_,
  dropdown_menuvue_type_template_id_d05e649e_render,
  dropdown_menuvue_type_template_id_d05e649e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdown_menu = (dropdown_menu_component.exports);
// CONCATENATED MODULE: ./src/components/dropdown-menu/index.js


/* istanbul ignore next */
dropdown_menu.install = function (Vue) {
  Vue.component(dropdown_menu.name, dropdown_menu)
}

/* harmony default export */ var components_dropdown_menu = (dropdown_menu);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/select.vue?vue&type=template&id=3e2d3628&
var selectvue_type_template_id_3e2d3628_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onClickOutside),expression:"onClickOutside"}],class:_vm.classes},[_c('div',{ref:"reference",class:_vm.selectionCls,attrs:{"tabindex":_vm.selectTabindex},on:{"blur":_vm.toggleHeaderFocus,"focus":_vm.toggleHeaderFocus,"click":_vm.toggleMenu,"mouseenter":function($event){_vm.hasMouseHoverHead = true},"mouseleave":function($event){_vm.hasMouseHoverHead = false}}},[_vm._t("input",[_c('input',{attrs:{"type":"hidden","name":_vm.name},domProps:{"value":_vm.publicValue}}),_c('select-head',{attrs:{"filterable":_vm.filterable,"multiple":_vm.multiple,"values":_vm.values,"clearable":_vm.canBeCleared,"prefix":_vm.prefix,"disabled":_vm.disabled,"remote":_vm.remote,"input-element-id":_vm.elementId,"initial-label":_vm.initialLabel,"placeholder":_vm.placeholder,"query-prop":_vm.query,"max-tag-count":_vm.maxTagCount,"max-tag-placeholder":_vm.maxTagPlaceholder},on:{"on-query-change":_vm.onQueryChange,"on-input-focus":function($event){_vm.isFocused = true},"on-input-blur":function($event){_vm.isFocused = false},"on-clear":_vm.clearSingleSelect}},[_vm._t("prefix",null,{"slot":"prefix"})],2)])],2),_c('transition',{attrs:{"name":"zoom-in-top"}},[_c('drop',{directives:[{name:"show",rawName:"v-show",value:(_vm.dropVisible),expression:"dropVisible"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"dropdown",class:_vm.dropdownCls,attrs:{"placement":_vm.placement,"data-transfer":_vm.transfer,"transfer":_vm.transfer}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNotFoundLabel),expression:"showNotFoundLabel"}],class:[_vm.prefixCls + '-not-found']},[_c('li',[_vm._v(_vm._s(_vm.notFoundText))])]),_c('ul',{class:_vm.prefixCls + '-dropdown-list'},[((!_vm.remote) || (_vm.remote && !_vm.loading))?_c('functional-options',{attrs:{"options":_vm.selectOptions,"slot-update-hook":_vm.updateSlotOptions,"slot-options":_vm.slotOptions}}):_vm._e()],1),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],class:[_vm.prefixCls + '-loading']},[_vm._v("loading...")])])],1)],1)}
var selectvue_type_template_id_3e2d3628_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/select/select.vue?vue&type=template&id=3e2d3628&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/select-head.vue?vue&type=template&id=436fed88&
var select_headvue_type_template_id_436fed88_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.headCls,on:{"click":_vm.onHeaderClick}},[(_vm.$slots.prefix || _vm.prefix)?_c('span',{class:[_vm.prefixCls + '-prefix']},[_vm._t("prefix",[(_vm.prefix)?_c('b-icon',{attrs:{"name":_vm.prefix}}):_vm._e()])],2):_vm._e(),_vm._l((_vm.selectedMultiple),function(item,index){return [(_vm.maxTagCount === undefined || index < _vm.maxTagCount)?_c('div',{key:index,staticClass:"bin-tag bin-tag-checked"},[_c('span',{staticClass:"bin-tag-text"},[_vm._v(_vm._s(item.label))]),_c('b-icon',{attrs:{"name":"ios-close"},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.removeTag(item)}}})],1):_vm._e()]}),(_vm.maxTagCount !== undefined && _vm.selectedMultiple.length > _vm.maxTagCount)?_c('div',{staticClass:"bin-tag bin-tag-checked"},[_c('span',{staticClass:"bin-tag-text bin-select-max-tag"},[(_vm.maxTagPlaceholder)?[_vm._v(_vm._s(_vm.maxTagPlaceholder(_vm.selectedMultiple.length - _vm.maxTagCount)))]:[_vm._v("+ "+_vm._s(_vm.selectedMultiple.length - _vm.maxTagCount)+"...")]],2)]):_vm._e(),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.singleDisplayValue),expression:"singleDisplayValue"}],class:_vm.singleDisplayClasses},[_vm._v(_vm._s(_vm.singleDisplayValue))]),_c('label',[(_vm.filterable)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.query),expression:"query"}],ref:"input",class:[_vm.prefixCls + '-input'],style:(_vm.inputStyle),attrs:{"id":_vm.inputElementId,"type":"text","disabled":_vm.disabled,"placeholder":_vm.showPlaceholder ? _vm.placeholder : '',"autocomplete":"off","spellcheck":"false"},domProps:{"value":(_vm.query)},on:{"keydown":[_vm.resetInputState,function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){ return null; }return _vm.handleInputDelete($event)}],"focus":_vm.onInputFocus,"blur":_vm.onInputBlur,"input":function($event){if($event.target.composing){ return; }_vm.query=$event.target.value}}}):_vm._e()]),(_vm.resetSelect)?_c('b-icon',{class:[_vm.prefixCls + '-arrow'],attrs:{"name":"ios-close-circle"},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.onClear($event)}}}):_vm._e(),(!_vm.resetSelect && !_vm.remote)?_c('b-icon',{class:[_vm.prefixCls + '-arrow'],attrs:{"name":"ios-arrow-down"}}):_vm._e()],2)}
var select_headvue_type_template_id_436fed88_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/select/select-head.vue?vue&type=template&id=436fed88&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/select-head.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const select_headvue_type_script_lang_js_prefixCls = 'bin-select'

/* harmony default export */ var select_headvue_type_script_lang_js_ = ({
  name: 'BSelectHead',
  mixins: [emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    initialLabel: {
      type: [String, Number, Array]
    },
    values: {
      type: Array,
      default: () => []
    },
    clearable: {
      type: [Function, Boolean],
      default: false
    },
    inputElementId: {
      type: String
    },
    placeholder: {
      type: String
    },
    queryProp: {
      type: String,
      default: ''
    },
    prefix: {
      type: String
    },
    maxTagCount: {
      type: Number
    },
    maxTagPlaceholder: {
      type: Function
    }
  },
  data () {
    return {
      prefixCls: select_headvue_type_script_lang_js_prefixCls,
      query: '',
      inputLength: 20,
      remoteInitialLabel: this.initialLabel,
      preventRemoteCall: false
    }
  },
  computed: {
    singleDisplayClasses () {
      const { filterable, multiple, showPlaceholder } = this
      return [{
        [select_headvue_type_script_lang_js_prefixCls + '-head-with-prefix']: this.$slots.prefix || this.prefix,
        [select_headvue_type_script_lang_js_prefixCls + '-placeholder']: showPlaceholder && !filterable,
        [select_headvue_type_script_lang_js_prefixCls + '-selected-value']: !showPlaceholder && !multiple && !filterable
      }]
    },
    singleDisplayValue () {
      if ((this.multiple && this.values.length > 0) || this.filterable) return ''
      return `${this.selectedSingle}` || this.placeholder
    },
    showPlaceholder () {
      let status = false
      if (!this.multiple) {
        const value = this.values[0]
        if (typeof value === 'undefined' || String(value).trim() === '') {
          status = !this.remoteInitialLabel
        }
      } else {
        if (!this.values.length > 0) {
          status = true
        }
      }
      return status
    },
    resetSelect () {
      return !this.showPlaceholder && this.clearable
    },
    inputStyle () {
      let style = {}

      if (this.multiple) {
        if (this.showPlaceholder) {
          style.width = '100%'
        } else {
          style.width = `${this.inputLength}px`
        }
      }

      return style
    },
    selectedSingle () {
      const selected = this.values[0]
      return selected ? selected.label : (this.remoteInitialLabel || '')
    },
    selectedMultiple () {
      return this.multiple ? this.values : []
    },
    // 使用 prefix 时，在 filterable
    headCls () {
      return {
        [`${select_headvue_type_script_lang_js_prefixCls}-head-flex`]: this.filterable && (this.$slots.prefix || this.prefix)
      }
    }
  },
  methods: {
    onInputFocus () {
      this.$emit('on-input-focus')
    },
    onInputBlur () {
      if (!this.values.length) this.query = '' // #5155
      this.$emit('on-input-blur')
    },
    removeTag (value) {
      if (this.disabled) return false
      this.dispatch('BSelect', 'on-select-selected', value)
    },
    resetInputState () {
      this.inputLength = this.$refs.input.value.length * 12 + 20
      this.$emit('on-keydown')
    },
    handleInputDelete () {
      if (this.multiple && this.selectedMultiple.length && this.query === '') {
        this.removeTag(this.selectedMultiple[this.selectedMultiple.length - 1])
      }
    },
    onHeaderClick (e) {
      if (this.filterable && e.target === this.$el) {
        this.$refs.input.focus()
      }
    },
    onClear () {
      this.$emit('on-clear')
    }
  },
  watch: {
    values ([value]) {
      if (!this.filterable) return
      this.preventRemoteCall = true
      if (this.multiple) {
        this.query = ''
        this.preventRemoteCall = false // this should be after the query change setter above
        return
      }
      // #982
      if (typeof value === 'undefined' || value === '' || value === null) this.query = ''
      else this.query = value.label
      this.$nextTick(() => {
        this.preventRemoteCall = false
      }) // this should be after the query change setter above
    },
    query (val) {
      if (this.preventRemoteCall) {
        this.preventRemoteCall = false
        return
      }

      this.$emit('on-query-change', val)
    },
    queryProp (query) {
      if (query !== this.query) this.query = query
    }
  }
});

// CONCATENATED MODULE: ./src/components/select/select-head.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_select_headvue_type_script_lang_js_ = (select_headvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/select/select-head.vue





/* normalize component */

var select_head_component = normalizeComponent(
  select_select_headvue_type_script_lang_js_,
  select_headvue_type_template_id_436fed88_render,
  select_headvue_type_template_id_436fed88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var select_head = (select_head_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/functional-options.vue?vue&type=script&lang=js&

const returnArrayFn = () => []

/* harmony default export */ var functional_optionsvue_type_script_lang_js_ = ({
  props: {
    options: {
      type: Array,
      default: returnArrayFn
    },
    slotOptions: {
      type: Array,
      default: returnArrayFn
    },
    slotUpdateHook: {
      type: Function,
      default: () => {
      }
    }
  },
  functional: true,
  render (h, { props, parent }) {
    // 为了检测$slot子/选项中的变化，我们做了这个修改
    // 因此，我们可以触发父计算属性，并使所有内容都处于响应状态
    // 尽管$slot.default不是
    if (props.slotOptions !== parent.$slots.default) props.slotUpdateHook()
    return props.options
  }
});

// CONCATENATED MODULE: ./src/components/select/functional-options.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_functional_optionsvue_type_script_lang_js_ = (functional_optionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/select/functional-options.vue
var functional_options_render, functional_options_staticRenderFns




/* normalize component */

var functional_options_component = normalizeComponent(
  select_functional_optionsvue_type_script_lang_js_,
  functional_options_render,
  functional_options_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var functional_options = (functional_options_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









const selectvue_type_script_lang_js_prefixCls = 'bin-select'
const optionRegexp = /^b-option$/i
const optionGroupRegexp = /b-option-?group/i

const findChild = (instance, checkFn) => {
  let match = checkFn(instance)
  if (match) return instance
  for (let i = 0, l = instance.$children.length; i < l; i++) {
    const child = instance.$children[i]
    match = findChild(child, checkFn)
    if (match) return match
  }
}

const findOptionsInVNode = (node) => {
  const opts = node.componentOptions
  if (opts && opts.tag.match(optionRegexp)) return [node]
  if (!node.children && (!opts || !opts.children)) return []
  const children = [...(node.children || []), ...((opts && opts.children) || [])]
  const options = children.reduce(
    (arr, el) => [...arr, ...findOptionsInVNode(el)], []
  ).filter(Boolean)
  return options.length > 0 ? options : []
}

const extractOptions = (options) => options.reduce((options, slotEntry) => {
  return options.concat(findOptionsInVNode(slotEntry))
}, [])

const applyProp = (node, propName, value) => {
  return {
    ...node,
    componentOptions: {
      ...node.componentOptions,
      propsData: {
        ...node.componentOptions.propsData,
        [propName]: value
      }
    }
  }
}

const getNestedProperty = (obj, path) => {
  const keys = path.split('.')
  return keys.reduce((o, key) => (o && o[key]) || null, obj)
}

const getOptionLabel = option => {
  if (option.componentOptions.propsData.label) return option.componentOptions.propsData.label
  const textContent = (option.componentOptions.children || []).reduce((str, child) => str + (child.text || ''), '')
  const innerHTML = getNestedProperty(option, 'data.domProps.innerHTML')
  return textContent || (typeof innerHTML === 'string' ? innerHTML : '')
}

const checkValuesNotEqual = (value, publicValue, values) => {
  const strValue = JSON.stringify(value)
  const strPublic = JSON.stringify(publicValue)
  const strValues = JSON.stringify(values.map(item => {
    return item.value
  }))
  return strValue !== strPublic || strValue !== strValues || strValues !== strPublic
}

const ANIMATION_TIMEOUT = 300

/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: 'BSelect',
  mixins: [emitter],
  components: { FunctionalOptions: functional_options, Drop: drop, SelectHead: select_head },
  directives: { ClickOutside: clickoutside, TransferDom: transfer_dom },
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    // 使用时，也得设置 value 才行
    label: {
      type: [String, Number, Array],
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    filterable: {
      type: Boolean,
      default: false
    },
    filterMethod: {
      type: Function
    },
    remoteMethod: {
      type: Function
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    notFoundText: {
      type: String,
      default: '没有数据'
    },
    placement: {
      validator (value) {
        return oneOf(value, ['top', 'bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end'])
      },
      default: 'bottom-start'
    },
    transfer: Boolean,
    // Use for AutoComplete
    autoComplete: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    },
    transferClassName: {
      type: String
    },
    prefix: {
      type: String
    },
    maxTagCount: {
      type: Number
    },
    maxTagPlaceholder: {
      type: Function
    }
  },
  mounted () {
    this.$on('on-select-selected', this.onOptionClick)

    // set the initial values if there are any
    if (!this.remote && this.selectOptions.length > 0) {
      this.values = this.getInitialValue().map(value => {
        if (typeof value !== 'number' && !value) return null
        return this.getOptionData(value)
      }).filter(Boolean)
    }

    this.checkUpdateStatus()
  },
  data () {
    return {
      prefixCls: selectvue_type_script_lang_js_prefixCls,
      values: [],
      dropDownWidth: 0,
      visible: false,
      focusIndex: -1,
      isFocused: false,
      query: '',
      initialLabel: this.label,
      hasMouseHoverHead: false,
      slotOptions: this.$slots.default,
      caretPosition: -1,
      lastRemoteQuery: '',
      unchangedQuery: true,
      hasExpectedValue: false,
      preventRemoteCall: false,
      filterQueryChange: false
    }
  },
  computed: {
    classes () {
      return [
        `${selectvue_type_script_lang_js_prefixCls}`,
        {
          [`${selectvue_type_script_lang_js_prefixCls}-visible`]: this.visible,
          [`${selectvue_type_script_lang_js_prefixCls}-disabled`]: this.disabled,
          [`${selectvue_type_script_lang_js_prefixCls}-multiple`]: this.multiple,
          [`${selectvue_type_script_lang_js_prefixCls}-single`]: !this.multiple,
          [`${selectvue_type_script_lang_js_prefixCls}-show-clear`]: this.showCloseIcon,
          [`${selectvue_type_script_lang_js_prefixCls}-${this.size}`]: !!this.size
        }
      ]
    },
    dropdownCls () {
      return {
        [selectvue_type_script_lang_js_prefixCls + '-dropdown-transfer']: this.transfer,
        [selectvue_type_script_lang_js_prefixCls + '-multiple']: this.multiple && this.transfer,
        'bin-auto-complete': this.autoComplete,
        [this.transferClassName]: this.transferClassName
      }
    },
    selectionCls () {
      return {
        [`${selectvue_type_script_lang_js_prefixCls}-selection`]: !this.autoComplete,
        [`${selectvue_type_script_lang_js_prefixCls}-selection-focused`]: this.isFocused
      }
    },
    transitionName () {
      return this.placement === 'bottom' ? 'slide-up' : 'slide-down'
    },
    dropVisible () {
      let status = true
      const noOptions = !this.selectOptions || this.selectOptions.length === 0
      if (!this.loading && this.remote && this.query === '' && noOptions) status = false

      if (this.autoComplete && noOptions) status = false

      return this.visible && status
    },
    showNotFoundLabel () {
      const { loading, remote, selectOptions } = this
      return selectOptions && selectOptions.length === 0 && (!remote || (remote && !loading))
    },
    publicValue () {
      if (this.labelInValue) {
        return this.multiple ? this.values : this.values[0]
      } else {
        return this.multiple ? this.values.map(option => option.value) : (this.values[0] || {}).value
      }
    },
    canBeCleared () {
      const uiStateMatch = this.hasMouseHoverHead || this.active
      const qualifiesForClear = !this.multiple && !this.disabled && this.clearable
      return uiStateMatch && qualifiesForClear && this.reset // we return a function
    },
    selectOptions () {
      const selectOptions = []
      const slotOptions = (this.slotOptions || [])
      let optionCounter = -1
      const currentIndex = this.focusIndex
      const selectedValues = this.values.filter(Boolean).map(({ value }) => value)
      if (this.autoComplete) {
        const copyChildren = (node, fn) => {
          return {
            ...node,
            children: (node.children || []).map(fn).map(child => copyChildren(child, fn))
          }
        }
        const autoCompleteOptions = extractOptions(slotOptions)
        const selectedSlotOption = autoCompleteOptions[currentIndex]

        return slotOptions.map(node => {
          if (node === selectedSlotOption || getNestedProperty(node, 'componentOptions.propsData.value') === this.value) return applyProp(node, 'isFocused', true)
          return copyChildren(node, (child) => {
            if (child !== selectedSlotOption) return child
            return applyProp(child, 'isFocused', true)
          })
        })
      }
      for (let option of slotOptions) {
        const cOptions = option.componentOptions
        if (!cOptions) continue
        if (cOptions.tag.match(optionGroupRegexp)) {
          let children = cOptions.children
          if (this.filterable) {
            children = children.filter(
              ({ componentOptions }) => this.validateOption(componentOptions)
            )
          }
          children = children.map(opt => {
            optionCounter = optionCounter + 1
            return this.processOption(opt, selectedValues, optionCounter === currentIndex)
          })
          // keep the group if it still has children
          if (children.length > 0) {
            selectOptions.push({
              ...option,
              componentOptions: { ...cOptions, children: children }
            })
          }
        } else {
          if (this.filterQueryChange) {
            const optionPassesFilter = this.filterable ? this.validateOption(cOptions) : option
            if (!optionPassesFilter) continue
          }
          optionCounter = optionCounter + 1
          selectOptions.push(this.processOption(option, selectedValues, optionCounter === currentIndex))
        }
      }
      return selectOptions
    },
    flatOptions () {
      return extractOptions(this.selectOptions)
    },
    selectTabindex () {
      return this.disabled || this.filterable ? -1 : 0
    },
    remote () {
      return typeof this.remoteMethod === 'function'
    }
  },
  methods: {
    setQuery (query) { // PUBLIC API
      if (query) {
        this.onQueryChange(query)
        return
      }
      if (query === null) {
        this.onQueryChange('')
        this.values = []
      }
    },
    clearSingleSelect () { // PUBLIC API
      this.$emit('on-clear')
      this.hideMenu()
      if (this.clearable) this.reset()
    },
    getOptionData (value) {
      const option = this.flatOptions.find(({ componentOptions }) => componentOptions.propsData.value === value)
      if (!option) return null
      const label = getOptionLabel(option)
      return {
        value: value,
        label: label
      }
    },
    getInitialValue () {
      const { multiple, remote, value } = this
      let initialValue = Array.isArray(value) ? value : [value]
      if (!multiple && (typeof initialValue[0] === 'undefined' || (String(initialValue[0]).trim() === '' && !Number.isFinite(initialValue[0])))) initialValue = []
      if (remote && !multiple && value) {
        const data = this.getOptionData(value)
        this.query = data ? data.label : String(value)
      }
      return initialValue.filter((item) => {
        return Boolean(item) || item === 0
      })
    },
    processOption (option, values, isFocused) {
      if (!option.componentOptions) return option
      const optionValue = option.componentOptions.propsData.value
      const disabled = option.componentOptions.propsData.disabled
      const isSelected = values.includes(optionValue)

      const propsData = {
        ...option.componentOptions.propsData,
        selected: isSelected,
        isFocused: isFocused,
        disabled: typeof disabled === 'undefined' ? false : disabled !== false
      }
      return {
        ...option,
        componentOptions: {
          ...option.componentOptions,
          propsData: propsData
        }
      }
    },
    validateOption ({ children, elm, propsData }) {
      const value = propsData.value
      const label = propsData.label || ''
      const textContent = (elm && elm.textContent) || (children || []).reduce((str, node) => {
        const nodeText = node.elm ? node.elm.textContent : node.text
        return `${str} ${nodeText}`
      }, '') || ''
      const stringValues = JSON.stringify([value, label, textContent])
      const query = this.query.toLowerCase().trim()
      return stringValues.toLowerCase().includes(query)
    },
    toggleMenu (e, force) {
      if (this.disabled) {
        return false
      }

      this.visible = typeof force !== 'undefined' ? force : !this.visible
      if (this.visible) {
        this.dropDownWidth = this.$el.getBoundingClientRect().width
        this.broadcast('Drop', 'on-update-popper')
      }
    },
    hideMenu () {
      this.toggleMenu(null, false)
      setTimeout(() => {
        this.unchangedQuery = true
      }, ANIMATION_TIMEOUT)
    },
    onClickOutside () {
      if (this.visible) {
        if (this.transfer) {
          const { $el } = this.$refs.dropdown
          if ($el === event.target || $el.contains(event.target)) {
            return
          }
        }
        if (this.filterable) {
          const input = this.$el.querySelector('input[type="text"]')
          this.caretPosition = input.selectionStart
          this.$nextTick(() => {
            const caretPosition = this.caretPosition === -1 ? input.value.length : this.caretPosition
            input.setSelectionRange(caretPosition, caretPosition)
          })
        }
        this.hideMenu()
        this.isFocused = true
      } else {
        this.caretPosition = -1
        this.isFocused = false
      }
    },
    reset () {
      this.query = ''
      this.focusIndex = -1
      this.unchangedQuery = true
      this.values = []
      this.filterQueryChange = false
    },
    onOptionClick (option) {
      if (this.multiple) {
        // keep the query for remote select
        if (this.remote) this.lastRemoteQuery = this.lastRemoteQuery || this.query
        else this.lastRemoteQuery = ''

        const valueIsSelected = this.values.find(({ value }) => value === option.value)
        if (valueIsSelected) {
          this.values = this.values.filter(({ value }) => value !== option.value)
        } else {
          this.values = this.values.concat(option)
        }

        this.isFocused = true // so we put back focus after clicking with mouse on option elements
      } else {
        this.query = String(option.label).trim()
        this.values = [option]
        this.lastRemoteQuery = ''
        this.hideMenu()
      }
      this.focusIndex = this.flatOptions.findIndex((opt) => {
        if (!opt || !opt.componentOptions) return false
        return opt.componentOptions.propsData.value === option.value
      })
      if (this.filterable) {
        const inputField = this.$el.querySelector('input[type="text"]')
        if (!this.autoComplete) this.$nextTick(() => inputField.focus())
      }
      this.broadcast('Drop', 'on-update-popper')
      setTimeout(() => {
        this.filterQueryChange = false
      }, ANIMATION_TIMEOUT)
    },
    onQueryChange (query) {
      if (query.length > 0 && query !== this.query) {
        // in 'AutoComplete', when set an initial value asynchronously,
        // the 'dropdown list' should be stay hidden.
        // [issue #5150]
        if (this.autoComplete) {
          this.visible = document.hasFocus &&
            document.hasFocus() &&
            document.activeElement === this.$el.querySelector('input')
        } else {
          this.visible = true
        }
      }

      this.query = query
      this.unchangedQuery = this.visible
      this.filterQueryChange = true
    },
    toggleHeaderFocus ({ type }) {
      if (this.disabled) {
        return
      }
      this.isFocused = type === 'focus'
    },
    updateSlotOptions () {
      this.slotOptions = this.$slots.default
    },
    checkUpdateStatus () {
      if (this.getInitialValue().length > 0 && this.selectOptions.length === 0) {
        this.hasExpectedValue = true
      }
    }
  },
  watch: {
    value (value) {
      const { getInitialValue, getOptionData, publicValue, values } = this

      this.checkUpdateStatus()

      if (value === '') this.values = []
      else if (checkValuesNotEqual(value, publicValue, values)) {
        this.$nextTick(() => {
          this.values = getInitialValue().map(getOptionData).filter(Boolean)
        })
        this.dispatch('BFormItem', 'on-form-change', this.publicValue)
      }
    },
    values (now, before) {
      const newValue = JSON.stringify(now)
      const oldValue = JSON.stringify(before)
      // v-model is always just the value, event with labelInValue === true
      const vModelValue = (this.publicValue && this.labelInValue)
        ? (this.multiple ? this.publicValue.map(({ value }) => value) : this.publicValue.value)
        : this.publicValue
      const shouldEmitInput = newValue !== oldValue && vModelValue !== this.value
      if (shouldEmitInput) {
        this.$emit('input', vModelValue) // to update v-model
        this.$emit('on-change', this.publicValue)
        this.dispatch('BFormItem', 'on-form-change', this.publicValue)
      }
    },
    query (query) {
      this.$emit('on-query-change', query)
      const { remoteMethod, lastRemoteQuery } = this
      const hasValidQuery = query !== '' && (query !== lastRemoteQuery || !lastRemoteQuery)
      const shouldCallRemoteMethod = remoteMethod && hasValidQuery && !this.preventRemoteCall
      this.preventRemoteCall = false // remove the flag

      if (shouldCallRemoteMethod) {
        this.focusIndex = -1
        const promise = this.remoteMethod(query)
        this.initialLabel = ''
        if (promise && promise.then) {
          promise.then(options => {
            if (options) this.options = options
          })
        }
      }
      if (query !== '' && this.remote) this.lastRemoteQuery = query
    },
    loading (state) {
      if (state === false) {
        this.updateSlotOptions()
      }
    },
    isFocused (focused) {
      const el = this.filterable ? this.$el.querySelector('input[type="text"]') : this.$el
      el[this.isFocused ? 'focus' : 'blur']()

      // restore query value in filterable single selects
      const [selectedOption] = this.values
      if (selectedOption && this.filterable && !this.multiple && !focused) {
        const selectedLabel = String(selectedOption.label || selectedOption.value).trim()
        if (selectedLabel && this.query !== selectedLabel) {
          this.preventRemoteCall = true
          this.query = selectedLabel
        }
      }
    },
    focusIndex (index) {
      if (index < 0 || this.autoComplete) return
      // update scroll
      const optionValue = this.flatOptions[index].componentOptions.propsData.value
      const optionInstance = findChild(this, ({ $options }) => {
        return $options.componentName === 'select-item' && $options.propsData.value === optionValue
      })

      let bottomOverflowDistance = optionInstance.$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom
      let topOverflowDistance = optionInstance.$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top
      if (bottomOverflowDistance > 0) {
        this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance
      }
      if (topOverflowDistance < 0) {
        this.$refs.dropdown.$el.scrollTop += topOverflowDistance
      }
    },
    dropVisible (open) {
      this.broadcast('Drop', open ? 'on-update-popper' : 'on-destroy-popper')
    },
    selectOptions () {
      if (this.hasExpectedValue && this.selectOptions.length > 0) {
        if (this.values.length === 0) {
          this.values = this.getInitialValue()
        }
        this.values = this.values.map(this.getOptionData).filter(Boolean)
        this.hasExpectedValue = false
      }

      if (this.slotOptions && this.slotOptions.length === 0) {
        this.query = ''
      }

      // 当 dropdown 一开始在控件下部显示，而滚动页面后变成在上部显示，如果选项列表的长度由内部动态变更了(搜索情况)
      // dropdown 的位置不会重新计算，需要重新计算
      this.broadcast('Drop', 'on-update-popper')
    },
    visible (state) {
      this.$emit('on-open-change', state)
    },
    slotOptions (options, old) {
      // #4626，当 Options 的 label 更新时，v-model 的值未更新
      // remote 下，调用 getInitialValue 有 bug
      if (!this.remote) {
        const values = this.getInitialValue()
        if (this.flatOptions && this.flatOptions.length && values.length && !this.multiple) {
          this.values = values.map(this.getOptionData).filter(Boolean)
        }
      }

      // 当 dropdown 在控件上部显示时，如果选项列表的长度由外部动态变更了，
      // dropdown 的位置会有点问题，需要重新计算
      if (options && old && options.length !== old.length) {
        this.broadcast('Drop', 'on-update-popper')
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/select/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/select/select.vue





/* normalize component */

var select_component = normalizeComponent(
  select_selectvue_type_script_lang_js_,
  selectvue_type_template_id_3e2d3628_render,
  selectvue_type_template_id_3e2d3628_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var select_select = (select_component.exports);
// CONCATENATED MODULE: ./src/components/select/index.js


/* istanbul ignore next */
select_select.install = function (Vue) {
  Vue.component(select_select.name, select_select)
}

/* harmony default export */ var components_select = (select_select);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/option.vue?vue&type=template&id=4f34ce68&
var optionvue_type_template_id_4f34ce68_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.classes,on:{"click":function($event){$event.stopPropagation();return _vm.select($event)},"mousedown":function($event){$event.preventDefault();}}},[_vm._t("default",[_vm._v(_vm._s(_vm.showLabel))])],2)}
var optionvue_type_template_id_4f34ce68_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/select/option.vue?vue&type=template&id=4f34ce68&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/option.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//




const optionvue_type_script_lang_js_prefixCls = 'bin-select-item'

/* harmony default export */ var optionvue_type_script_lang_js_ = ({
  name: 'BOption',
  componentName: 'select-item',
  mixins: [emitter],
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    isFocused: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchLabel: '', // the slot value (textContent)
      autoComplete: false
    }
  },
  computed: {
    classes () {
      return [
        `${optionvue_type_script_lang_js_prefixCls}`,
        {
          [`${optionvue_type_script_lang_js_prefixCls}-disabled`]: this.disabled,
          [`${optionvue_type_script_lang_js_prefixCls}-selected`]: this.selected && !this.autoComplete,
          [`${optionvue_type_script_lang_js_prefixCls}-focus`]: this.isFocused
        }
      ]
    },
    showLabel () {
      return (this.label) ? this.label : this.value
    },
    optionLabel () {
      return this.label || (this.$el && this.$el.textContent)
    }
  },
  methods: {
    select () {
      if (this.disabled) return false

      this.dispatch('BSelect', 'on-select-selected', {
        value: this.value,
        label: this.optionLabel
      })
      this.$emit('on-select-selected', {
        value: this.value,
        label: this.optionLabel
      })
    }
  },
  mounted () {
    const Select = findComponentUpward(this, 'BSelect')
    if (Select) this.autoComplete = Select.autoComplete
  }
});

// CONCATENATED MODULE: ./src/components/select/option.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_optionvue_type_script_lang_js_ = (optionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/select/option.vue





/* normalize component */

var option_component = normalizeComponent(
  select_optionvue_type_script_lang_js_,
  optionvue_type_template_id_4f34ce68_render,
  optionvue_type_template_id_4f34ce68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var select_option = (option_component.exports);
// CONCATENATED MODULE: ./src/components/select-option/index.js


/* istanbul ignore next */
select_option.install = function (Vue) {
  Vue.component(select_option.name, select_option)
}

/* harmony default export */ var components_select_option = (select_option);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/option-group.vue?vue&type=template&id=37901a05&
var option_groupvue_type_template_id_37901a05_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hidden),expression:"!hidden"}],class:[_vm.prefixCls + '-wrap']},[_c('div',{class:[_vm.prefixCls + '-title']},[_vm._v(_vm._s(_vm.label))]),_c('ul',[_c('li',{ref:"options",class:[_vm.prefixCls]},[_vm._t("default")],2)])])}
var option_groupvue_type_template_id_37901a05_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/select/option-group.vue?vue&type=template&id=37901a05&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/option-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

const option_groupvue_type_script_lang_js_prefixCls = 'bin-select-group'

/* harmony default export */ var option_groupvue_type_script_lang_js_ = ({
  name: 'BOptionGroup',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      prefixCls: option_groupvue_type_script_lang_js_prefixCls,
      hidden: false // for search
    }
  },
  methods: {
    queryChange () {
      this.$nextTick(() => {
        const options = this.$refs.options.querySelectorAll('.bin-select-item')
        let hasVisibleOption = false
        for (let i = 0; i < options.length; i++) {
          if (options[i].style.display !== 'none') {
            hasVisibleOption = true
            break
          }
        }
        this.hidden = !hasVisibleOption
      })
    }
  },
  mounted () {
    this.$on('on-query-change', () => {
      this.queryChange()
      return true
    })
  }
});

// CONCATENATED MODULE: ./src/components/select/option-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_option_groupvue_type_script_lang_js_ = (option_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/select/option-group.vue





/* normalize component */

var option_group_component = normalizeComponent(
  select_option_groupvue_type_script_lang_js_,
  option_groupvue_type_template_id_37901a05_render,
  option_groupvue_type_template_id_37901a05_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var option_group = (option_group_component.exports);
// CONCATENATED MODULE: ./src/components/select-option-group/index.js


/* istanbul ignore next */
option_group.install = function (Vue) {
  Vue.component(option_group.name, option_group)
}

/* harmony default export */ var select_option_group = (option_group);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cascade/cascade.vue?vue&type=template&id=699697ec&
var cascadevue_type_template_id_699697ec_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.handleClose),expression:"handleClose"}],class:_vm.classes},[_c('div',{ref:"reference",class:[_vm.prefixCls + '-rel'],on:{"click":_vm.toggleOpen}},[_c('input',{attrs:{"type":"hidden","name":_vm.name},domProps:{"value":_vm.currentValue}}),_vm._t("default",[_c('b-input',{ref:"input",attrs:{"element-id":_vm.elementId,"readonly":!_vm.filterable,"disabled":_vm.disabled,"value":_vm.displayInputRender,"size":_vm.size,"placeholder":_vm.inputPlaceholder},on:{"on-change":_vm.handleInput}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.filterable && _vm.query === ''),expression:"filterable && query === ''"}],class:[_vm.prefixCls + '-label'],on:{"click":_vm.handleFocus}},[_vm._v("\n        "+_vm._s(_vm.displayRender)+"\n      ")]),_c('b-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCloseIcon),expression:"showCloseIcon"}],class:[_vm.prefixCls + '-arrow'],attrs:{"name":"ios-close-circle"},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.clearSelect($event)}}}),_c('b-icon',{class:[_vm.prefixCls + '-arrow'],attrs:{"name":"ios-arrow-down"}})])],2),_c('transition',{attrs:{"name":"zoom-in-top"}},[_c('drop',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"drop",class:( _obj = {}, _obj[_vm.prefixCls + '-transfer'] = _vm.transfer, _obj ),attrs:{"data-transfer":_vm.transfer,"transfer":_vm.transfer}},[_c('div',[_c('cas-panel',{directives:[{name:"show",rawName:"v-show",value:(!_vm.filterable || (_vm.filterable && _vm.query === '')),expression:"!filterable || (filterable && query === '')"}],ref:"caspanel",attrs:{"prefix-cls":_vm.prefixCls,"data":_vm.data,"disabled":_vm.disabled,"change-on-select":_vm.changeOnSelect,"trigger":_vm.trigger}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.filterable && _vm.query !== '' && _vm.querySelections.length),expression:"filterable && query !== '' && querySelections.length"}],class:[_vm.prefixCls + '-dropdown']},[_c('ul',{class:[_vm.selectPrefixCls + '-dropdown-list']},_vm._l((_vm.querySelections),function(item,index){
var _obj;
return _c('li',{key:index,class:[_vm.selectPrefixCls + '-item', ( _obj = {}, _obj[_vm.selectPrefixCls + '-item-disabled'] = item.disabled, _obj )],domProps:{"innerHTML":_vm._s(item.display)},on:{"click":function($event){return _vm.handleSelectItem(index)}}})}),0)]),_c('ul',{directives:[{name:"show",rawName:"v-show",value:((_vm.filterable && _vm.query !== '' && !_vm.querySelections.length) || !_vm.data.length),expression:"(filterable && query !== '' && !querySelections.length) || !data.length"}],class:[_vm.prefixCls + '-not-found-tip']},[_c('li',[_vm._v(_vm._s(_vm.notFoundText))])])],1)])],1)],1)}
var cascadevue_type_template_id_699697ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cascade/cascade.vue?vue&type=template&id=699697ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cascade/cas-panel.vue?vue&type=template&id=6ff3c981&
var cas_panelvue_type_template_id_6ff3c981_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"inline-block"}},[(_vm.data && _vm.data.length)?_c('ul',{class:[_vm.prefixCls + '-menu']},_vm._l((_vm.data),function(item,index){return _c('cas-item',{key:index,attrs:{"prefix-cls":_vm.prefixCls,"data":item,"tmp-item":_vm.tmpItem},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.handleClickItem(item)},"mouseenter":function($event){$event.stopPropagation();return _vm.handleHoverItem(item)}}})}),1):_vm._e(),(_vm.sublist && _vm.sublist.length)?_c('cas-panel',{attrs:{"prefix-cls":_vm.prefixCls,"data":_vm.sublist,"disabled":_vm.disabled,"trigger":_vm.trigger,"change-on-select":_vm.changeOnSelect}}):_vm._e()],1)}
var cas_panelvue_type_template_id_6ff3c981_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cascade/cas-panel.vue?vue&type=template&id=6ff3c981&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cascade/cas-item.vue?vue&type=template&id=d8dee040&
var cas_itemvue_type_template_id_d8dee040_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.classes},[_vm._v("\n  "+_vm._s(_vm.data.label)+"\n  "),(_vm.showArrow)?_c('b-icon',{attrs:{"name":"ios-arrow-forward"}}):_vm._e(),(_vm.showLoading)?_c('b-icon',{staticClass:"bin-cascade-menu-item-loading",attrs:{"name":"loading"}}):_vm._e()],1)}
var cas_itemvue_type_template_id_d8dee040_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cascade/cas-item.vue?vue&type=template&id=d8dee040&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cascade/cas-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var cas_itemvue_type_script_lang_js_ = ({
  name: 'CasItem',
  props: {
    data: Object,
    prefixCls: String,
    tmpItem: Object
  },
  computed: {
    classes () {
      return [
        `${this.prefixCls}-menu-item`,
        {
          [`${this.prefixCls}-menu-item-active`]: this.tmpItem.value === this.data.value,
          [`${this.prefixCls}-menu-item-disabled`]: this.data.disabled
        }
      ]
    },
    showArrow () {
      return (this.data.children && this.data.children.length) || ('loading' in this.data && !this.data.loading)
    },
    showLoading () {
      return 'loading' in this.data && this.data.loading
    }
  }
});

// CONCATENATED MODULE: ./src/components/cascade/cas-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var cascade_cas_itemvue_type_script_lang_js_ = (cas_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/cascade/cas-item.vue





/* normalize component */

var cas_item_component = normalizeComponent(
  cascade_cas_itemvue_type_script_lang_js_,
  cas_itemvue_type_template_id_d8dee040_render,
  cas_itemvue_type_template_id_d8dee040_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cas_item = (cas_item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cascade/cas-panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var cas_panelvue_type_script_lang_js_ = ({
  name: 'CasPanel',
  mixins: [emitter],
  components: { CasItem: cas_item },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: Boolean,
    changeOnSelect: Boolean,
    trigger: String,
    prefixCls: String
  },
  data () {
    return {
      tmpItem: {},
      result: [],
      sublist: []
    }
  },
  watch: {
    data () {
      this.sublist = []
    }
  },
  methods: {
    handleClickItem (item) {
      if (this.trigger !== 'click' && item.children && item.children.length) return
      this.handleTriggerItem(item, false, true)
    },
    handleHoverItem (item) {
      if (this.trigger !== 'hover' || !item.children || !item.children.length) return
      this.handleTriggerItem(item, false, true)
    },
    handleTriggerItem (item, fromInit = false, fromUser = false) {
      if (item.disabled) return

      const cascade = findComponentUpward(this, 'BCascade')
      if (item.loading !== undefined && !item.children.length) {
        if (cascade && cascade.loadData) {
          cascade.loadData(item, () => {
            // todo
            if (fromUser) {
              cascade.isLoadedChildren = true
            }
            if (item.children.length) {
              this.handleTriggerItem(item)
            }
          })
          return
        }
      }

      // return value back recursion  // 向上递归，设置临时选中值（并非真实选中）
      const backItem = this.getBaseItem(item)
      // #5021 for this.changeOnSelect，加 if 是因为 #4472
      if (
        this.changeOnSelect ||
        (backItem.label !== this.tmpItem.label || backItem.value !== this.tmpItem.value) ||
        (backItem.label === this.tmpItem.label && backItem.value === this.tmpItem.value)
      ) {
        this.tmpItem = backItem
        this.emitUpdate([backItem])
      }

      if (item.children && item.children.length) {
        this.sublist = item.children
        this.dispatch('BCascade', 'on-result-change', {
          lastValue: false,
          changeOnSelect: this.changeOnSelect,
          fromInit: fromInit
        })

        // #1553
        if (this.changeOnSelect) {
          const CasPanel = findComponentDownward(this, 'CasPanel')
          if (CasPanel) {
            CasPanel.$emit('on-clear', true)
          }
        }
      } else {
        this.sublist = []
        this.dispatch('BCascade', 'on-result-change', {
          lastValue: true,
          changeOnSelect: this.changeOnSelect,
          fromInit: fromInit
        })
      }

      if (cascade) {
        cascade.$refs.drop.update()
      }
    },
    updateResult (item) {
      this.result = [this.tmpItem].concat(item)
      this.emitUpdate(this.result)
    },
    getBaseItem (item) {
      let backItem = Object.assign({}, item)
      if (backItem.children) {
        delete backItem.children
      }

      return backItem
    },
    emitUpdate (result) {
      if (this.$parent.$options.name === 'CasPanel') {
        this.$parent.updateResult(result)
      } else {
        this.$parent.$parent.updateResult(result)
      }
    }
  },
  mounted () {
    this.$on('on-find-selected', (params) => {
      const val = params.value
      let value = [...val]
      for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          if (value[i] === this.data[j].value) {
            this.handleTriggerItem(this.data[j], true)
            value.splice(0, 1)
            this.$nextTick(() => {
              this.broadcast('CasPanel', 'on-find-selected', {
                value: value
              })
            })
            return false
          }
        }
      }
    })
    // deep for #1553
    this.$on('on-clear', (deep = false) => {
      this.sublist = []
      this.tmpItem = {}
      if (deep) {
        const CasPanel = findComponentDownward(this, 'CasPanel')
        if (CasPanel) {
          CasPanel.$emit('on-clear', true)
        }
      }
    })
  }
});

// CONCATENATED MODULE: ./src/components/cascade/cas-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var cascade_cas_panelvue_type_script_lang_js_ = (cas_panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/cascade/cas-panel.vue





/* normalize component */

var cas_panel_component = normalizeComponent(
  cascade_cas_panelvue_type_script_lang_js_,
  cas_panelvue_type_template_id_6ff3c981_render,
  cas_panelvue_type_template_id_6ff3c981_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cas_panel = (cas_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cascade/cascade.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








const cascadevue_type_script_lang_js_prefixCls = 'bin-cascade'
const selectPrefixCls = 'bin-select'

/* harmony default export */ var cascadevue_type_script_lang_js_ = ({
  name: 'BCascade',
  mixins: [emitter],
  components: { Drop: drop, CasPanel: cas_panel },
  directives: { ClickOutside: clickoutside, TransferDom: transfer_dom },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    trigger: {
      validator (value) {
        return oneOf(value, ['click', 'hover'])
      },
      default: 'click'
    },
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    renderFormat: {
      type: Function,
      default (label) {
        return label.join(' / ')
      }
    },
    loadData: {
      type: Function
    },
    filterable: {
      type: Boolean,
      default: false
    },
    notFoundText: {
      type: String,
      default: '暂无匹配数据'
    },
    transfer: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    }
  },
  data () {
    return {
      prefixCls: cascadevue_type_script_lang_js_prefixCls,
      selectPrefixCls: selectPrefixCls,
      visible: false,
      selected: [],
      tmpSelected: [],
      updatingValue: false, // to fix set value in changeOnSelect type
      currentValue: this.value,
      query: '',
      validDataStr: '',
      isLoadedChildren: false
    }
  },
  computed: {
    classes () {
      return [
        `${cascadevue_type_script_lang_js_prefixCls}`,
        {
          [`${cascadevue_type_script_lang_js_prefixCls}-show-clear`]: this.showCloseIcon,
          [`${cascadevue_type_script_lang_js_prefixCls}-size-${this.size}`]: !!this.size,
          [`${cascadevue_type_script_lang_js_prefixCls}-visible`]: this.visible,
          [`${cascadevue_type_script_lang_js_prefixCls}-disabled`]: this.disabled,
          [`${cascadevue_type_script_lang_js_prefixCls}-not-found`]: this.filterable && this.query !== '' && !this.querySelections.length
        }
      ]
    },
    showCloseIcon () {
      return this.currentValue && this.currentValue.length && this.clearable && !this.disabled
    },
    displayRender () {
      let label = []
      for (let i = 0; i < this.selected.length; i++) {
        label.push(this.selected[i].label)
      }

      return this.renderFormat(label, this.selected)
    },
    displayInputRender () {
      return this.filterable ? '' : this.displayRender
    },
    inputPlaceholder () {
      return this.filterable && this.currentValue.length ? null : this.placeholder
    },
    querySelections () {
      let selections = []

      function getSelections (arr, label, value) {
        for (let i = 0; i < arr.length; i++) {
          let item = arr[i]
          item.__label = label ? label + ' / ' + item.label : item.label
          item.__value = value ? value + ',' + item.value : item.value

          if (item.children && item.children.length) {
            getSelections(item.children, item.__label, item.__value)
            delete item.__label
            delete item.__value
          } else {
            selections.push({
              label: item.__label,
              value: item.__value,
              display: item.__label,
              item: item,
              disabled: !!item.disabled
            })
          }
        }
      }

      getSelections(this.data)
      selections = selections.filter(item => {
        return item.label ? item.label.indexOf(this.query) > -1 : false
      }).map(item => {
        item.display = item.display.replace(new RegExp(this.query, 'g'), `<span>${this.query}</span>`)
        return item
      })
      return selections
    }
  },
  methods: {
    clearSelect () {
      if (this.disabled) return false
      const oldVal = JSON.stringify(this.currentValue)
      this.currentValue = this.selected = this.tmpSelected = []
      this.handleClose()
      this.emitValue(this.currentValue, oldVal)
      this.broadcast('CasPanel', 'on-clear')
    },
    handleClose () {
      this.visible = false
    },
    toggleOpen () {
      if (this.disabled) return false
      if (this.visible) {
        if (!this.filterable) this.handleClose()
      } else {
        this.onFocus()
      }
    },
    onFocus () {
      this.visible = true
      if (!this.currentValue.length) {
        this.broadcast('CasPanel', 'on-clear')
      }
    },
    updateResult (result) {
      this.tmpSelected = result
    },
    updateSelected (init = false, changeOnSelectDataChange = false) {
      // #2793 当数据更改并设置值时，changeOnSelectDataChange用于changeOnSelect
      if (!this.changeOnSelect || init || changeOnSelectDataChange) {
        this.broadcast('CasPanel', 'on-find-selected', {
          value: this.currentValue
        })
      }
    },
    emitValue (val, oldVal) {
      if (JSON.stringify(val) !== oldVal) {
        this.$emit('on-change', this.currentValue, JSON.parse(JSON.stringify(this.selected)))
        this.$nextTick(() => {
          this.dispatch('BFormItem', 'on-form-change', {
            value: this.currentValue,
            selected: JSON.parse(JSON.stringify(this.selected))
          })
        })
      }
    },
    handleInput (event) {
      this.query = event.target.value
    },
    handleSelectItem (index) {
      const item = this.querySelections[index]

      if (item.item.disabled) return false
      this.query = ''
      this.$refs.input.currentValue = ''
      const oldVal = JSON.stringify(this.currentValue)
      this.currentValue = item.value.split(',')
      // use setTimeout for #4786, can not use nextTick, because @on-find-selected use nextTick
      setTimeout(() => {
        this.emitValue(this.currentValue, oldVal)
        this.handleClose()
      }, 0)
    },
    handleFocus () {
      this.$refs.input.focus()
    },
    // 排除 loading 后的 data，避免重复触发 updateSelect
    getValidData (data) {
      function deleteData (item) {
        const newItem = Object.assign({}, item)
        if ('loading' in newItem) {
          delete newItem.loading
        }
        if ('__value' in newItem) {
          delete newItem.__value
        }
        if ('__label' in newItem) {
          delete newItem.__label
        }
        if ('children' in newItem && newItem.children.length) {
          newItem.children = newItem.children.map(i => deleteData(i))
        }
        return newItem
      }

      return data.map(item => deleteData(item))
    }
  },
  created () {
    this.validDataStr = JSON.stringify(this.getValidData(this.data))
    this.$on('on-result-change', (params) => {
      // lastValue: is click the final val
      // fromInit: is this emit from update value
      const lastValue = params.lastValue
      const changeOnSelect = params.changeOnSelect
      const fromInit = params.fromInit

      if (lastValue || changeOnSelect) {
        const oldVal = JSON.stringify(this.currentValue)
        this.selected = this.tmpSelected

        let newVal = []
        this.selected.forEach((item) => {
          newVal.push(item.value)
        })

        if (!fromInit) {
          this.updatingValue = true
          this.currentValue = newVal
          this.emitValue(this.currentValue, oldVal)
        }
      }
      if (lastValue && !fromInit) {
        this.handleClose()
      }
    })
  },
  mounted () {
    this.updateSelected(true)
  },
  watch: {
    visible (val) {
      if (val) {
        if (this.currentValue.length) {
          this.updateSelected()
        }
        if (this.transfer) {
          this.$refs.drop.update()
        }
        this.broadcast('Drop', 'on-update-popper')
      } else {
        if (this.filterable) {
          this.query = ''
          this.$refs.input.currentValue = ''
        }
        if (this.transfer) {
          this.$refs.drop.destroy()
        }
        this.broadcast('Drop', 'on-destroy-popper')
      }
      this.$emit('on-visible-change', val)
    },
    value (val) {
      this.currentValue = val
      if (!val.length) this.selected = []
    },
    currentValue () {
      this.$emit('input', this.currentValue)
      if (this.updatingValue) {
        this.updatingValue = false
        return
      }
      this.updateSelected(true)
    },
    data: {
      deep: true,
      handler () {
        const validDataStr = JSON.stringify(this.getValidData(this.data))
        if (validDataStr !== this.validDataStr) {
          this.validDataStr = validDataStr
          if (!this.isLoadedChildren) {
            this.$nextTick(() => this.updateSelected(false, this.changeOnSelect))
          }
          this.isLoadedChildren = false
        }
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/cascade/cascade.vue?vue&type=script&lang=js&
 /* harmony default export */ var cascade_cascadevue_type_script_lang_js_ = (cascadevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/cascade/cascade.vue





/* normalize component */

var cascade_component = normalizeComponent(
  cascade_cascadevue_type_script_lang_js_,
  cascadevue_type_template_id_699697ec_render,
  cascadevue_type_template_id_699697ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cascade_cascade = (cascade_component.exports);
// CONCATENATED MODULE: ./src/components/cascade/index.js


/* istanbul ignore next */
cascade_cascade.install = function (Vue) {
  Vue.component(cascade_cascade.name, cascade_cascade)
}

/* harmony default export */ var components_cascade = (cascade_cascade);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table.vue?vue&type=template&id=7b471c32&
var tablevue_type_template_id_7b471c32_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapClasses,style:(_vm.styles)},[_c('div',{class:_vm.classes},[(_vm.showSlotHeader)?_c('div',{ref:"title",class:[_vm.prefixCls + '-title']},[_vm._t("header")],2):_vm._e(),(_vm.showHeader)?_c('div',{ref:"header",class:[_vm.prefixCls + '-header'],on:{"mousewheel":_vm.handleMouseWheel}},[_c('table-head',{attrs:{"prefix-cls":_vm.prefixCls,"styleObject":_vm.tableHeaderStyle,"columns":_vm.cloneColumns,"column-rows":_vm.columnRows,"obj-data":_vm.objData,"columns-width":_vm.columnsWidth,"data":_vm.rebuildData}})],1):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!(!!_vm.noDataText && (!_vm.data || _vm.data.length === 0))),expression:"!(!!noDataText && (!data || data.length === 0))"}],ref:"body",class:[_vm.prefixCls + '-body'],style:(_vm.bodyStyle),on:{"scroll":_vm.handleBodyScroll}},[_c('table-body',{ref:"tbody",attrs:{"draggable":_vm.draggable,"prefix-cls":_vm.prefixCls,"styleObject":_vm.tableStyle,"columns":_vm.cloneColumns,"data":_vm.rebuildData,"row-key":_vm.rowKey,"columns-width":_vm.columnsWidth,"obj-data":_vm.objData}})],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!!_vm.noDataText && (!_vm.data || _vm.data.length === 0)),expression:"!!noDataText && (!data || data.length === 0)"}],class:[_vm.prefixCls + '-tip'],style:(_vm.bodyStyle),on:{"scroll":_vm.handleBodyScroll}},[_c('table',{attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('tbody',[_c('tr',[_c('td',{style:({'height':_vm.bodyStyle.height,'width':((this.headerWidth) + "px")})},[(!_vm.data || _vm.data.length === 0)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.noDataText)}}):_vm._e()])])])])]),(_vm.isLeftFixed)?_c('div',{class:[_vm.prefixCls + '-fixed'],style:(_vm.fixedTableStyle)},[(_vm.showHeader)?_c('div',{class:_vm.fixedHeaderClasses},[_c('table-head',{attrs:{"fixed":"left","prefix-cls":_vm.prefixCls,"styleObject":_vm.fixedTableStyle,"columns":_vm.leftFixedColumns,"column-rows":_vm.columnRows,"fixed-column-rows":_vm.leftFixedColumnRows,"obj-data":_vm.objData,"columns-width":_vm.columnsWidth,"data":_vm.rebuildData}})],1):_vm._e(),_c('div',{ref:"fixedBody",class:[_vm.prefixCls + '-fixed-body'],style:(_vm.fixedBodyStyle),on:{"mousewheel":_vm.handleFixedMousewheel,"DOMMouseScroll":_vm.handleFixedMousewheel}},[_c('table-body',{attrs:{"fixed":"left","draggable":_vm.draggable,"prefix-cls":_vm.prefixCls,"styleObject":_vm.fixedTableStyle,"columns":_vm.leftFixedColumns,"data":_vm.rebuildData,"row-key":_vm.rowKey,"columns-width":_vm.columnsWidth,"obj-data":_vm.objData}})],1)]):_vm._e(),(_vm.isRightFixed)?_c('div',{class:[_vm.prefixCls + '-fixed-right'],style:(_vm.fixedRightTableStyle)},[(_vm.showHeader)?_c('div',{class:_vm.fixedHeaderClasses},[_c('table-head',{attrs:{"fixed":"right","prefix-cls":_vm.prefixCls,"styleObject":_vm.fixedRightTableStyle,"columns":_vm.rightFixedColumns,"column-rows":_vm.columnRows,"fixed-column-rows":_vm.rightFixedColumnRows,"obj-data":_vm.objData,"columns-width":_vm.columnsWidth,"data":_vm.rebuildData}})],1):_vm._e(),_c('div',{ref:"fixedRightBody",class:[_vm.prefixCls + '-fixed-body'],style:(_vm.fixedBodyStyle),on:{"mousewheel":_vm.handleFixedMousewheel,"DOMMouseScroll":_vm.handleFixedMousewheel}},[_c('table-body',{attrs:{"fixed":"right","draggable":_vm.draggable,"prefix-cls":_vm.prefixCls,"styleObject":_vm.fixedRightTableStyle,"columns":_vm.rightFixedColumns,"data":_vm.rebuildData,"row-key":_vm.rowKey,"columns-width":_vm.columnsWidth,"obj-data":_vm.objData}})],1)]):_vm._e(),(_vm.isRightFixed)?_c('div',{class:[_vm.prefixCls + '-fixed-right-header'],style:(_vm.fixedRightHeaderStyle)}):_vm._e(),(_vm.showSlotFooter)?_c('div',{ref:"footer",class:[_vm.prefixCls + '-footer']},[_vm._t("footer")],2):_vm._e()]),(_vm.loading)?_c('b-loading',{attrs:{"fix":"","size":"large"}},[_vm._t("loading")],2):_vm._e()],1)}
var tablevue_type_template_id_7b471c32_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/table/table.vue?vue&type=template&id=7b471c32&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table-head.vue?vue&type=template&id=0fd2cf22&
var table_headvue_type_template_id_0fd2cf22_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{style:(_vm.styles),attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('colgroup',[_vm._l((_vm.columns),function(column,index){return _c('col',{key:index,attrs:{"width":_vm.setCellWidth(column)}})}),(_vm.$parent.showVerticalScrollBar)?_c('col',{attrs:{"width":_vm.$parent.scrollBarWidth}}):_vm._e()],2),_c('thead',_vm._l((_vm.headRows),function(cols,rowIndex){return _c('tr',{key:rowIndex},[_vm._l((cols),function(column,index){
var _obj;
return _c('th',{key:index,class:_vm.alignCls(column),attrs:{"colspan":column.colSpan,"rowspan":column.rowSpan}},[_c('div',{class:_vm.cellClasses(column)},[(column.type === 'expand')?[(!column.renderHeader)?_c('span',[_vm._v(_vm._s(column.title || ''))]):_c('render-header',{attrs:{"render":column.renderHeader,"column":column,"index":index}})]:(column.type === 'selection')?[_c('b-checkbox',{attrs:{"value":_vm.isSelectAll,"disabled":!_vm.data.length},on:{"on-change":_vm.selectAll}})]:[(!column.renderHeader)?_c('span',{class:( _obj = {}, _obj[_vm.prefixCls + '-cell-sort'] = column.sortable, _obj ),on:{"click":function($event){_vm.handleSortByHead(_vm.getColumn(rowIndex, index)._index)}}},[_vm._v(_vm._s(column.title || '#'))]):_c('render-header',{attrs:{"render":column.renderHeader,"column":column,"index":index}}),(column.sortable)?_c('span',{class:[_vm.prefixCls + '-sort']},[_c('i',{staticClass:"iconfont icon-md-arrow-dropup",class:{on: _vm.getColumn(rowIndex, index)._sortType === 'asc'},on:{"click":function($event){_vm.handleSort(_vm.getColumn(rowIndex, index)._index, 'asc')}}}),_c('i',{staticClass:"iconfont icon-md-arrow-dropdown",class:{on: _vm.getColumn(rowIndex, index)._sortType === 'desc'},on:{"click":function($event){_vm.handleSort(_vm.getColumn(rowIndex, index)._index, 'desc')}}})]):_vm._e()]],2)])}),(_vm.$parent.showVerticalScrollBar && rowIndex===0)?_c('th',{class:_vm.scrollBarCellClass(),attrs:{"rowspan":_vm.headRows.length}}):_vm._e()],2)}),0)])}
var table_headvue_type_template_id_0fd2cf22_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/table/table-head.vue?vue&type=template&id=0fd2cf22&

// CONCATENATED MODULE: ./src/components/table/main/header.js
/* harmony default export */ var header = ({
  name: 'TableRenderHeader',
  functional: true,
  props: {
    render: Function,
    column: Object,
    index: Number
  },
  render: (h, ctx) => {
    const params = {
      column: ctx.props.column,
      index: ctx.props.index
    }
    return ctx.props.render(h, params)
  }
});

// CONCATENATED MODULE: ./src/components/table/main/mixin.js
/* harmony default export */ var mixin = ({
  methods: {
    alignCls (column, row = {}) {
      let cellClassName = ''
      if (row.cellClassName && column.key && row.cellClassName[column.key]) {
        cellClassName = row.cellClassName[column.key]
      }
      return [
        {
          [`${cellClassName}`]: cellClassName, // cell className
          [`${column.className}`]: column.className, // column className
          [`${this.prefixCls}-column-${column.align}`]: column.align,
          [`${this.prefixCls}-hidden`]: (this.fixed === 'left' && column.fixed !== 'left') ||
          (this.fixed === 'right' && column.fixed !== 'right') ||
          (!this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right'))
        }
      ]
    },
    isPopperShow (column) {
      return column.filters && ((!this.fixed && !column.fixed) || (this.fixed === 'left' && column.fixed === 'left') || (this.fixed === 'right' && column.fixed === 'right'))
    },
    setCellWidth (column) {
      let width = ''
      if (column.width) {
        width = column.width
      } else if (this.columnsWidth[column._index]) {
        width = this.columnsWidth[column._index].width
      }
      if (width === '0') width = ''
      return width
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table-head.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var table_headvue_type_script_lang_js_ = ({
  name: 'TableHead',
  mixins: [mixin],
  components: { renderHeader: header },
  props: {
    prefixCls: String,
    styleObject: Object,
    columns: Array,
    objData: Object,
    data: Array, // rebuildData
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    columnRows: Array,
    fixedColumnRows: Array
  },
  computed: {
    styles () {
      const style = Object.assign({}, this.styleObject)
      const width = parseInt(this.styleObject.width)
      style.width = `${width}px`
      return style
    },
    isSelectAll () {
      let isSelectAll = true
      if (!this.data.length) isSelectAll = false
      if (!this.data.find(item => !item._disabled)) isSelectAll = false // #1751
      for (let i = 0; i < this.data.length; i++) {
        if (!this.objData[this.data[i]._index]._isChecked && !this.objData[this.data[i]._index]._isDisabled) {
          isSelectAll = false
          break
        }
      }

      return isSelectAll
    },
    headRows () {
      const isGroup = this.columnRows.length > 1
      if (isGroup) {
        return this.fixed ? this.fixedColumnRows : this.columnRows
      } else {
        return [this.columns]
      }
    }
  },
  methods: {
    cellClasses (column) {
      return [
        `${this.prefixCls}-cell`,
        {
          [`${this.prefixCls}-hidden`]: !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right'),
          [`${this.prefixCls}-cell-with-selection`]: column.type === 'selection'
        }
      ]
    },
    scrollBarCellClass () {
      let hasRightFixed = false
      for (let i in this.headRows) {
        for (let j in this.headRows[i]) {
          if (this.headRows[i][j].fixed === 'right') {
            hasRightFixed = true
            break
          }
          if (hasRightFixed) break
        }
      }
      return [
        {
          [`${this.prefixCls}-hidden`]: hasRightFixed
        }
      ]
    },
    itemClasses (column, item) {
      return [
        `${this.prefixCls}-filter-select-item`,
        {
          [`${this.prefixCls}-filter-select-item-selected`]: column._filterChecked[0] === item.value
        }
      ]
    },
    selectAll () {
      const status = !this.isSelectAll
      this.$parent.selectAll(status)
    },
    handleSort (index, type) {
      // 在固定列时，寻找正确的 index #5580
      const column = this.columns.find(item => item._index === index)
      const _index = column._index

      if (column._sortType === type) {
        type = 'normal'
      }
      this.$parent.handleSort(_index, type)
    },
    handleSortByHead (index) {
      // 在固定列时，寻找正确的 index #5580
      const column = this.columns.find(item => item._index === index)
      if (column.sortable) {
        const type = column._sortType
        if (type === 'normal') {
          this.handleSort(index, 'asc')
        } else if (type === 'asc') {
          this.handleSort(index, 'desc')
        } else {
          this.handleSort(index, 'normal')
        }
      }
    },
    handleSelect (index, value) {
      this.$parent.handleFilterSelect(index, value)
    },
    // 因为表头嵌套不是深拷贝，所以没有 _ 开头的方法，在 isGroup 下用此列
    getColumn (rowIndex, index) {
      const isGroup = this.columnRows.length > 1

      if (isGroup) {
        const id = this.headRows[rowIndex][index].__id
        return this.columns.filter(item => item.__id === id)[0]
      } else {
        return this.headRows[rowIndex][index]
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/table/table-head.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_table_headvue_type_script_lang_js_ = (table_headvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/table/table-head.vue





/* normalize component */

var table_head_component = normalizeComponent(
  table_table_headvue_type_script_lang_js_,
  table_headvue_type_template_id_0fd2cf22_render,
  table_headvue_type_template_id_0fd2cf22_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table_head = (table_head_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table-body.vue?vue&type=template&id=5f3bca5b&
var table_bodyvue_type_template_id_5f3bca5b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{style:(_vm.styleObject),attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('colgroup',_vm._l((_vm.columns),function(column,index){return _c('col',{key:index,attrs:{"width":_vm.setCellWidth(column)}})}),0),_c('tbody',{class:[_vm.prefixCls + '-tbody']},[_vm._l((_vm.data),function(row,index){
var _obj;
return [_c('table-tr',{key:_vm.rowKey ? row._rowKey : index,attrs:{"draggable":_vm.draggable,"row":row,"prefix-cls":_vm.prefixCls},nativeOn:{"mouseenter":function($event){$event.stopPropagation();return _vm.handleMouseIn(row._index)},"mouseleave":function($event){$event.stopPropagation();return _vm.handleMouseOut(row._index)},"click":function($event){return _vm.clickCurrentRow(row._index)},"dblclick":function($event){$event.stopPropagation();return _vm.dblclickCurrentRow(row._index)}}},_vm._l((_vm.columns),function(column){return _c('td',{key:column._columnKey,class:_vm.alignCls(column, row)},[_c('table-cell',{key:column._columnKey,attrs:{"fixed":_vm.fixed,"prefix-cls":_vm.prefixCls,"row":row,"column":column,"natural-index":index,"index":row._index,"checked":_vm.rowChecked(row._index),"disabled":_vm.rowDisabled(row._index),"expanded":_vm.rowExpanded(row._index)}})],1)}),0),(_vm.rowExpanded(row._index))?_c('tr',{key:row._index,class:( _obj = {}, _obj[_vm.prefixCls + '-expanded-hidden'] = _vm.fixed, _obj )},[_c('td',{class:_vm.prefixCls + '-expanded-cell',attrs:{"colspan":_vm.columns.length}},[_c('expand',{key:_vm.rowKey ? row._rowKey : index,attrs:{"row":row,"render":_vm.expandRender,"index":row._index}})],1)]):_vm._e()]})],2)])}
var table_bodyvue_type_template_id_5f3bca5b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/table/table-body.vue?vue&type=template&id=5f3bca5b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table-tr.vue?vue&type=template&id=67ac2c9b&
var table_trvue_type_template_id_67ac2c9b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.draggable)?_c('tr',{class:_vm.rowClasses(_vm.row._index),attrs:{"draggable":_vm.draggable},on:{"dragstart":function($event){return _vm.onDrag($event,_vm.row._index)},"drop":function($event){return _vm.onDrop($event,_vm.row._index)},"dragover":function($event){return _vm.allowDrop($event)}}},[_vm._t("default")],2):_c('tr',{class:_vm.rowClasses(_vm.row._index)},[_vm._t("default")],2)}
var table_trvue_type_template_id_67ac2c9b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/table/table-tr.vue?vue&type=template&id=67ac2c9b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table-tr.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var table_trvue_type_script_lang_js_ = ({
  props: {
    row: Object,
    prefixCls: String,
    draggable: Boolean
  },
  computed: {
    objData () {
      return this.$parent.objData
    }
  },
  methods: {
    onDrag (e, index) {
      e.dataTransfer.setData('index', index)
    },
    onDrop (e, index) {
      const dragIndex = e.dataTransfer.getData('index')
      this.$parent.$parent.dragAndDrop(dragIndex, index)
      e.preventDefault()
    },
    allowDrop (e) {
      e.preventDefault()
    },
    rowClasses (_index) {
      return [
        `${this.prefixCls}-row`,
        this.rowClsName(_index),
        {
          [`${this.prefixCls}-row-highlight`]: this.objData[_index] && this.objData[_index]._isHighlight,
          [`${this.prefixCls}-row-hover`]: this.objData[_index] && this.objData[_index]._isHover
        }
      ]
    },
    rowClsName (_index) {
      return this.$parent.$parent.rowClassName(this.objData[_index], _index)
    }
  }
});

// CONCATENATED MODULE: ./src/components/table/table-tr.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_table_trvue_type_script_lang_js_ = (table_trvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/table/table-tr.vue





/* normalize component */

var table_tr_component = normalizeComponent(
  table_table_trvue_type_script_lang_js_,
  table_trvue_type_template_id_67ac2c9b_render,
  table_trvue_type_template_id_67ac2c9b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table_tr = (table_tr_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/cell.vue?vue&type=template&id=de3ac72e&
var cellvue_type_template_id_de3ac72e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"cell",class:_vm.classes},[(_vm.renderType === 'index')?[_c('span',[_vm._v(_vm._s(_vm.column.indexMethod ? _vm.column.indexMethod(_vm.row) : (_vm.naturalIndex + 1)))])]:_vm._e(),(_vm.renderType === 'selection')?[_c('b-checkbox',{attrs:{"value":_vm.checked,"disabled":_vm.disabled},on:{"on-change":_vm.toggleSelect},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}})]:_vm._e(),(_vm.renderType === 'html')?[_c('span',{domProps:{"innerHTML":_vm._s(_vm.row[_vm.column.key])}})]:_vm._e(),(_vm.renderType === 'normal')?[(_vm.column.tooltip)?[_c('b-tooltip',{staticClass:"bin-table-cell-tooltip",attrs:{"transfer":"","content":_vm.row[_vm.column.key],"theme":_vm.tableRoot.tooltipTheme,"disabled":!_vm.showTooltip,"max-width":300}},[_c('span',{ref:"content",staticClass:"bin-table-cell-tooltip-content",on:{"mouseenter":_vm.handleTooltipIn,"mouseleave":_vm.handleTooltipOut}},[_vm._v(_vm._s(_vm.row[_vm.column.key]))])])]:_c('span',[_vm._v(_vm._s(_vm.row[_vm.column.key]))])]:_vm._e(),(_vm.renderType === 'expand' && !_vm.row._disableExpand)?[_c('div',{class:_vm.expandCls,on:{"click":_vm.toggleExpand}},[_c('b-icon',{attrs:{"name":"ios-arrow-forward"}})],1)]:_vm._e(),(_vm.renderType === 'render')?_c('table-expand',{attrs:{"row":_vm.row,"column":_vm.column,"index":_vm.index,"render":_vm.column.render}}):_vm._e(),(_vm.renderType === 'slot')?_c('table-slot',{attrs:{"row":_vm.row,"column":_vm.column,"index":_vm.index}}):_vm._e()],2)}
var cellvue_type_template_id_de3ac72e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/table/cell.vue?vue&type=template&id=de3ac72e&

// CONCATENATED MODULE: ./src/components/table/main/expand.js
/* harmony default export */ var expand = ({
  name: 'TableExpand',
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      index: ctx.props.index
    }
    if (ctx.props.column) params.column = ctx.props.column
    return ctx.props.render(h, params)
  }
});

// CONCATENATED MODULE: ./src/components/table/main/slot.js
/* harmony default export */ var slot = ({
  name: 'TableSlot',
  functional: true,
  inject: ['tableRoot'],
  props: {
    row: Object,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, ctx) => {
    return h('div', ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index
    }))
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/cell.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var cellvue_type_script_lang_js_ = ({
  name: 'TableCell',
  components: { TableExpand: expand, TableSlot: slot },
  inject: ['tableRoot'],
  props: {
    prefixCls: String,
    row: Object,
    column: Object,
    naturalIndex: Number, // 重建数据索引
    index: Number, // _index of data
    checked: Boolean,
    disabled: Boolean,
    expanded: Boolean,
    fixed: {
      type: [Boolean, String],
      default: false
    }
  },
  data () {
    return {
      renderType: '',
      uid: -1,
      context: this.$parent.$parent.$parent.currentContext,
      showTooltip: false // 鼠标滑过overflow文本时，再检查是否需要显示
    }
  },
  computed: {
    classes () {
      return [
        `${this.prefixCls}-cell`,
        {
          [`${this.prefixCls}-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right'),
          [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false,
          [`${this.prefixCls}-cell-with-expand`]: this.renderType === 'expand',
          [`${this.prefixCls}-cell-with-selection`]: this.renderType === 'selection'
        }
      ]
    },
    expandCls () {
      return [
        `${this.prefixCls}-cell-expand`,
        {
          [`${this.prefixCls}-cell-expand-expanded`]: this.expanded
        }
      ]
    }
  },
  methods: {
    toggleSelect () {
      this.$parent.$parent.$parent.toggleSelect(this.index)
    },
    toggleExpand () {
      this.$parent.$parent.$parent.toggleExpand(this.index)
    },
    handleClick () {
      // 放置 Checkbox 冒泡
    },
    handleTooltipIn () {
      const $content = this.$refs.content
      this.showTooltip = $content.scrollWidth > $content.offsetWidth
    },
    handleTooltipOut () {
      this.showTooltip = false
    }
  },
  created () {
    if (this.column.type === 'index') {
      this.renderType = 'index'
    } else if (this.column.type === 'selection') {
      this.renderType = 'selection'
    } else if (this.column.type === 'html') {
      this.renderType = 'html'
    } else if (this.column.type === 'expand') {
      this.renderType = 'expand'
    } else if (this.column.render) {
      this.renderType = 'render'
    } else if (this.column.slot) {
      this.renderType = 'slot'
    } else {
      this.renderType = 'normal'
    }
  }
});

// CONCATENATED MODULE: ./src/components/table/cell.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_cellvue_type_script_lang_js_ = (cellvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/table/cell.vue





/* normalize component */

var cell_component = normalizeComponent(
  table_cellvue_type_script_lang_js_,
  cellvue_type_template_id_de3ac72e_render,
  cellvue_type_template_id_de3ac72e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table_cell = (cell_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table-body.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var table_bodyvue_type_script_lang_js_ = ({
  name: 'TableBody',
  mixins: [mixin],
  components: { TableCell: table_cell, Expand: expand, TableTr: table_tr },
  props: {
    prefixCls: String,
    styleObject: Object,
    columns: Array,
    data: Array, // rebuildData
    objData: Object,
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    expandRender () {
      let render = function () {
        return ''
      }
      for (let i = 0; i < this.columns.length; i++) {
        const column = this.columns[i]
        if (column.type && column.type === 'expand') {
          if (column.render) render = column.render
        }
      }
      return render
    }
  },
  methods: {
    rowChecked (_index) {
      return this.objData[_index] && this.objData[_index]._isChecked
    },
    rowDisabled (_index) {
      return this.objData[_index] && this.objData[_index]._isDisabled
    },
    rowExpanded (_index) {
      return this.objData[_index] && this.objData[_index]._isExpanded
    },
    handleMouseIn (_index) {
      this.$parent.handleMouseIn(_index)
    },
    handleMouseOut (_index) {
      this.$parent.handleMouseOut(_index)
    },
    clickCurrentRow (_index) {
      this.$parent.clickCurrentRow(_index)
    },
    dblclickCurrentRow (_index) {
      this.$parent.dblclickCurrentRow(_index)
    }
  }
});

// CONCATENATED MODULE: ./src/components/table/table-body.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_table_bodyvue_type_script_lang_js_ = (table_bodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/table/table-body.vue





/* normalize component */

var table_body_component = normalizeComponent(
  table_table_bodyvue_type_script_lang_js_,
  table_bodyvue_type_template_id_5f3bca5b_render,
  table_bodyvue_type_template_id_5f3bca5b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table_body = (table_body_component.exports);
// CONCATENATED MODULE: ./src/components/table/main/csv.js
/*
  inspired by https://www.npmjs.com/package/react-csv-downloader
  now removed from Github
*/

const newLine = '\r\n'
const appendLine = (content, row, { separator, quoted }) => {
  const line = row.map(data => {
    if (!quoted) return data
    // quote data
    data = typeof data === 'string' ? data.replace(/"/g, '"') : data
    return `"${data}"`
  })
  content.push(line.join(separator))
}

const defaults = {
  separator: ',',
  quoted: false
}

function csv (columns, datas, options, noHeader = false) {
  options = Object.assign({}, defaults, options)
  let columnOrder
  const content = []
  const column = []

  if (columns) {
    columnOrder = columns.map(v => {
      if (typeof v === 'string') return v
      if (!noHeader) {
        column.push(typeof v.title !== 'undefined' ? v.title : v.key)
      }
      return v.key
    })
    if (column.length > 0) appendLine(content, column, options)
  } else {
    columnOrder = []
    datas.forEach(v => {
      if (!Array.isArray(v)) {
        columnOrder = columnOrder.concat(Object.keys(v))
      }
    })
    if (columnOrder.length > 0) {
      columnOrder = columnOrder.filter((value, index, self) => self.indexOf(value) === index)
      if (!noHeader) appendLine(content, columnOrder, options)
    }
  }

  if (Array.isArray(datas)) {
    datas.forEach(row => {
      if (!Array.isArray(row)) {
        row = columnOrder.map(k => (typeof row[k] !== 'undefined' ? row[k] : ''))
      }
      appendLine(content, row, options)
    })
  }
  return content.join(newLine)
}

// CONCATENATED MODULE: ./src/components/table/main/export-csv.js
function has (browser) {
  const ua = navigator.userAgent
  if (browser === 'ie') {
    const isIE = ua.indexOf('compatible') > -1 && ua.indexOf('MSIE') > -1
    if (isIE) {
      const reIE = new RegExp('MSIE (\\d+\\.\\d+);')
      reIE.test(ua)
      return parseFloat(RegExp['$1'])
    } else {
      return false
    }
  } else {
    return ua.indexOf(browser) > -1
  }
}

const export_csv_csv = {
  _isIE11 () {
    let iev = 0
    const ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent))
    const trident = !!navigator.userAgent.match(/Trident\/7.0/)
    const rv = navigator.userAgent.indexOf('rv:11.0')

    if (ieold) {
      iev = Number(RegExp.$1)
    }
    if (navigator.appVersion.indexOf('MSIE 10') !== -1) {
      iev = 10
    }
    if (trident && rv !== -1) {
      iev = 11
    }

    return iev === 11
  },

  _isEdge () {
    return /Edge/.test(navigator.userAgent)
  },

  _getDownloadUrl (text) {
    const BOM = '\uFEFF'
    // Add BOM to text for open in excel correctly
    if (window.Blob && window.URL && window.URL.createObjectURL) {
      const csvData = new Blob([BOM + text], { type: 'text/csv' })
      return URL.createObjectURL(csvData)
    } else {
      return 'data:attachment/csv;charset=utf-8,' + BOM + encodeURIComponent(text)
    }
  },

  download (filename, text) {
    if (has('ie') && has('ie') < 10) {
      // has module unable identify ie11 and Edge
      const oWin = window.top.open('about:blank', '_blank')
      oWin.document.charset = 'utf-8'
      oWin.document.write(text)
      oWin.document.close()
      oWin.document.execCommand('SaveAs', filename)
      oWin.close()
    } else if (has('ie') === 10 || this._isIE11() || this._isEdge()) {
      const BOM = '\uFEFF'
      const csvData = new Blob([BOM + text], { type: 'text/csv' })
      navigator.msSaveBlob(csvData, filename)
    } else {
      const link = document.createElement('a')
      link.download = filename
      link.href = this._getDownloadUrl(text)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}

/* harmony default export */ var export_csv = (export_csv_csv);

// CONCATENATED MODULE: ./src/components/table/main/util.js


const convertColumnOrder = (columns, fixedType) => {
  let list = []
  let other = []
  columns.forEach((col) => {
    if (col.fixed && col.fixed === fixedType) {
      list.push(col)
    } else {
      other.push(col)
    }
  })
  return list.concat(other)
}



// 转换时将tablehead设置为true，正常情况下为false，如table.vue
const getAllColumns = (cols, forTableHead = false) => {
  const columns = deepCopy(cols)
  const result = []
  columns.forEach((column) => {
    if (column.children) {
      if (forTableHead) result.push(column)
      result.push.apply(result, getAllColumns(column.children, forTableHead))
    } else {
      result.push(column)
    }
  })
  return result
}



const convertToRows = (columns, fixedType = false) => {
  const originColumns = fixedType ? fixedType === 'left' ? deepCopy(convertColumnOrder(columns, 'left')) : deepCopy(convertColumnOrder(columns, 'right')) : deepCopy(columns)
  let maxLevel = 1
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1
      if (maxLevel < column.level) {
        maxLevel = column.level
      }
    }
    if (column.children) {
      let colSpan = 0
      column.children.forEach((subColumn) => {
        traverse(subColumn, column)
        colSpan += subColumn.colSpan
      })
      column.colSpan = colSpan
    } else {
      column.colSpan = 1
    }
  }

  originColumns.forEach((column) => {
    column.level = 1
    traverse(column)
  })

  const rows = []
  for (let i = 0; i < maxLevel; i++) {
    rows.push([])
  }

  const allColumns = getAllColumns(originColumns, true)

  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1
    } else {
      column.rowSpan = 1
    }
    rows[column.level - 1].push(column)
  })

  return rows
}



const getRandomStr = function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $chars.length
  let str = ''
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str
}



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  
  
  
  
  
  
  

  const tablevue_type_script_lang_js_prefixCls = 'bin-table'

  let rowKey = 1
  let columnKey = 1

  /* harmony default export */ var tablevue_type_script_lang_js_ = ({
    name: 'BTable',
    components: { tableHead: table_head, tableBody: table_body },
    provide () {
      return {
        tableRoot: this
      }
    },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default'])
        },
        default: 'default'
      },
      width: {
        type: [Number, String]
      },
      height: {
        type: [Number, String]
      },
      // 3.4.0
      maxHeight: {
        type: [Number, String]
      },
      stripe: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      highlightRow: {
        type: Boolean,
        default: false
      },
      rowClassName: {
        type: Function,
        default () {
          return ''
        }
      },
      context: {
        type: Object
      },
      noDataText: {
        type: String,
        default: '暂无数据'
      },
      disabledHover: {
        type: Boolean
      },
      loading: {
        type: Boolean,
        default: false
      },
      draggable: {
        type: Boolean,
        default: false
      },
      tooltipTheme: {
        validator (value) {
          return oneOf(value, ['dark', 'light'])
        },
        default: 'dark'
      },
      // #5380 开启后，:key 强制更新，否则使用 index
      rowKey: {
        type: Boolean,
        default: false
      }
    },
    data () {
      const colsWithId = this.makeColumnsId(this.columns)
      return {
        ready: false,
        tableWidth: 0,
        columnsWidth: {},
        prefixCls: tablevue_type_script_lang_js_prefixCls,
        compiledUids: [],
        objData: this.makeObjData(), // checkbox or highlight-row
        rebuildData: [], // for sort
        cloneColumns: this.makeColumns(colsWithId),
        columnRows: this.makeColumnRows(false, colsWithId),
        leftFixedColumnRows: this.makeColumnRows('left', colsWithId),
        rightFixedColumnRows: this.makeColumnRows('right', colsWithId),
        allColumns: getAllColumns(colsWithId), // for multiple table-head, get columns that have no children
        showSlotHeader: true,
        showSlotFooter: true,
        bodyHeight: 0,
        scrollBarWidth: 17,
        currentContext: this.context,
        cloneData: deepCopy(this.data), // when Cell has a button to delete row data, clickCurrentRow will throw an error, so clone a data
        showVerticalScrollBar: false,
        showHorizontalScrollBar: false,
        headerWidth: 0,
        headerHeight: 0
      }
    },
    computed: {
      wrapClasses () {
        return [
          `${tablevue_type_script_lang_js_prefixCls}-wrapper`,
          {
            [`${tablevue_type_script_lang_js_prefixCls}-hide`]: !this.ready,
            [`${tablevue_type_script_lang_js_prefixCls}-with-header`]: this.showSlotHeader,
            [`${tablevue_type_script_lang_js_prefixCls}-with-footer`]: this.showSlotFooter
          }
        ]
      },
      classes () {
        return [
          `${tablevue_type_script_lang_js_prefixCls}`,
          {
            [`${tablevue_type_script_lang_js_prefixCls}-${this.size}`]: !!this.size,
            [`${tablevue_type_script_lang_js_prefixCls}-border`]: this.border,
            [`${tablevue_type_script_lang_js_prefixCls}-stripe`]: this.stripe,
            [`${tablevue_type_script_lang_js_prefixCls}-with-fixed-top`]: !!this.height
          }
        ]
      },
      fixedHeaderClasses () {
        return [
          `${tablevue_type_script_lang_js_prefixCls}-fixed-header`,
          {
            [`${tablevue_type_script_lang_js_prefixCls}-fixed-header-with-empty`]: !this.rebuildData.length
          }
        ]
      },
      styles () {
        let style = {}
        if (this.height) {
          const height = parseInt(this.height)
          style.height = `${height}px`
        }
        if (this.maxHeight) {
          const maxHeight = parseInt(this.maxHeight)
          style.maxHeight = `${maxHeight}px`
        }
        if (this.width) style.width = `${this.width}px`
        return style
      },
      tableStyle () {
        let style = {}
        if (this.tableWidth !== 0) {
          let width = ''
          if (this.bodyHeight === 0) {
            width = this.tableWidth
          } else {
            width = this.tableWidth - (this.showVerticalScrollBar ? this.scrollBarWidth : 0)
          }
//                    const width = this.bodyHeight === 0 ? this.tableWidth : this.tableWidth - this.scrollBarWidth;
          style.width = `${width}px`
        }
        return style
      },
      tableHeaderStyle () {
        let style = {}
        if (this.tableWidth !== 0) {
          let width = ''
          width = this.tableWidth
          style.width = `${width}px`
        }
        return style
      },
      fixedTableStyle () {
        let style = {}
        let width = 0
        this.leftFixedColumns.forEach((col) => {
          if (col.fixed && col.fixed === 'left') width += col._width
        })
        style.width = `${width}px`
        return style
      },
      fixedRightTableStyle () {
        let style = {}
        let width = 0
        this.rightFixedColumns.forEach((col) => {
          if (col.fixed && col.fixed === 'right') width += col._width
        })
        // width += this.scrollBarWidth;
        style.width = `${width}px`
        style.right = `${this.showVerticalScrollBar ? this.scrollBarWidth : 0}px`
        return style
      },
      fixedRightHeaderStyle () {
        let style = {}
        let width = 0
        let height = this.headerHeight + 1
        if (this.showVerticalScrollBar) {
          width = this.scrollBarWidth
        }
        style.width = `${width}px`
        style.height = `${height}px`
        return style
      },
      bodyStyle () {
        let style = {}
        if (this.bodyHeight !== 0) {
          const height = this.bodyHeight
          if (this.height) {
            style.height = `${height}px`
          } else if (this.maxHeight) {
            style.maxHeight = `${height}px`
          }
        }
        return style
      },
      fixedBodyStyle () {
        let style = {}
        if (this.bodyHeight !== 0) {
          let height = this.bodyHeight - (this.showHorizontalScrollBar ? this.scrollBarWidth : 0)
          style.height = this.showHorizontalScrollBar ? `${height}px` : `${height - 1}px`
        }
        return style
      },
      leftFixedColumns () {
        return convertColumnOrder(this.cloneColumns, 'left')
      },
      rightFixedColumns () {
        return convertColumnOrder(this.cloneColumns, 'right')
      },
      isLeftFixed () {
        return this.columns.some(col => col.fixed && col.fixed === 'left')
      },
      isRightFixed () {
        return this.columns.some(col => col.fixed && col.fixed === 'right')
      }
    },
    methods: {
      rowClsName (index) {
        return this.rowClassName(this.data[index], index)
      },
      handleResize () {
        // let tableWidth = parseInt(getStyle(this.$el, 'width')) - 1;
        let tableWidth = this.$el.offsetWidth - 1
        let columnsWidth = {}
        let sumMinWidth = 0
        let hasWidthColumns = []
        let noWidthColumns = []
        let maxWidthColumns = []
        let noMaxWidthColumns = []
        this.cloneColumns.forEach((col) => {
          if (col.width) {
            hasWidthColumns.push(col)
          } else {
            noWidthColumns.push(col)
            if (col.minWidth) {
              sumMinWidth += col.minWidth
            }
            if (col.maxWidth) {
              maxWidthColumns.push(col)
            } else {
              noMaxWidthColumns.push(col)
            }
          }
          col._width = null
        })
        let unUsableWidth = hasWidthColumns.map(cell => cell.width).reduce((a, b) => a + b, 0)
        let usableWidth = tableWidth - unUsableWidth - sumMinWidth - (this.showVerticalScrollBar ? this.scrollBarWidth : 0) - 1
        let usableLength = noWidthColumns.length
        let columnWidth = 0
        if (usableWidth > 0 && usableLength > 0) {
          columnWidth = parseInt(usableWidth / usableLength)
        }
        for (let i = 0; i < this.cloneColumns.length; i++) {
          const column = this.cloneColumns[i]
          let width = columnWidth + (column.minWidth ? column.minWidth : 0)
          if (column.width) {
            width = column.width
          } else {
            if (column._width) {
              width = column._width
            } else {
              if (column.minWidth > width) {
                width = column.minWidth
              } else if (column.maxWidth < width) {
                width = column.maxWidth
              }

              if (usableWidth > 0) {
                usableWidth -= width - (column.minWidth ? column.minWidth : 0)
                usableLength--
                if (usableLength > 0) {
                  columnWidth = parseInt(usableWidth / usableLength)
                } else {
                  columnWidth = 0
                }
              } else {
                columnWidth = 0
              }
            }
          }

          column._width = width

          columnsWidth[column._index] = {
            width: width
          }
        }
        if (usableWidth > 0) {
          usableLength = noMaxWidthColumns.length
          columnWidth = parseInt(usableWidth / usableLength)
          for (let i = 0; i < noMaxWidthColumns.length; i++) {
            const column = noMaxWidthColumns[i]
            let width = column._width + columnWidth
            if (usableLength > 1) {
              usableLength--
              usableWidth -= columnWidth
              columnWidth = parseInt(usableWidth / usableLength)
            } else {
              columnWidth = 0
            }

            column._width = width

            columnsWidth[column._index] = {
              width: width
            }
          }
        }
        this.tableWidth = this.cloneColumns.map(cell => cell._width).reduce((a, b) => a + b, 0) + (this.showVerticalScrollBar ? this.scrollBarWidth : 0) + 1
        this.columnsWidth = columnsWidth
        this.fixedHeader()
      },
      handleMouseIn (_index) {
        if (this.disabledHover) return
        if (this.objData[_index]._isHover) return
        this.objData[_index]._isHover = true
      },
      handleMouseOut (_index) {
        if (this.disabledHover) return
        this.objData[_index]._isHover = false
      },
      // 通用处理 highlightCurrentRow 和 clearCurrentRow
      handleCurrentRow (type, _index) {
        let oldIndex = -1
        for (let i in this.objData) {
          if (this.objData[i]._isHighlight) {
            oldIndex = parseInt(i)
            this.objData[i]._isHighlight = false
          }
        }
        if (type === 'highlight') this.objData[_index]._isHighlight = true
        const oldData = oldIndex < 0 ? null : JSON.parse(JSON.stringify(this.cloneData[oldIndex]))
        const newData = type === 'highlight' ? JSON.parse(JSON.stringify(this.cloneData[_index])) : null
        this.$emit('on-current-change', newData, oldData)
      },
      highlightCurrentRow (_index) {
        if (!this.highlightRow || this.objData[_index]._isHighlight) return
        this.handleCurrentRow('highlight', _index)
      },
      clearCurrentRow () {
        if (!this.highlightRow) return
        this.handleCurrentRow('clear')
      },
      clickCurrentRow (_index) {
        this.highlightCurrentRow(_index)
        this.$emit('on-row-click', JSON.parse(JSON.stringify(this.cloneData[_index])), _index)
      },
      dblclickCurrentRow (_index) {
        this.highlightCurrentRow(_index)
        this.$emit('on-row-dblclick', JSON.parse(JSON.stringify(this.cloneData[_index])), _index)
      },
      getSelection () {
        let selectionIndexes = []
        for (let i in this.objData) {
          if (this.objData[i]._isChecked) selectionIndexes.push(parseInt(i))
        }
        return JSON.parse(JSON.stringify(this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1)))
      },
      toggleSelect (_index) {
        let data = {}

        for (let i in this.objData) {
          if (parseInt(i) === _index) {
            data = this.objData[i]
            break
          }
        }
        const status = !data._isChecked

        this.objData[_index]._isChecked = status

        const selection = this.getSelection()
        this.$emit(status ? 'on-select' : 'on-select-cancel', selection, JSON.parse(JSON.stringify(this.data[_index])))
        this.$emit('on-selection-change', selection)
      },
      toggleExpand (_index) {
        let data = {}

        for (let i in this.objData) {
          if (parseInt(i) === _index) {
            data = this.objData[i]
            break
          }
        }
        const status = !data._isExpanded
        this.objData[_index]._isExpanded = status
        this.$emit('on-expand', JSON.parse(JSON.stringify(this.cloneData[_index])), status)

        if (this.height || this.maxHeight) {
          this.$nextTick(() => this.fixedBody())
        }
      },
      selectAll (status) {
        for (const data of this.rebuildData) {
          if (this.objData[data._index]._isDisabled) {
            continue
          }
          this.objData[data._index]._isChecked = status
        }
        const selection = this.getSelection()
        if (status) {
          this.$emit('on-select-all', selection)
        } else {
          this.$emit('on-select-all-cancel', selection)
        }
        this.$emit('on-selection-change', selection)
      },

      fixedHeader () {
        if (this.height || this.maxHeight) {
          this.$nextTick(() => {
            const titleHeight = parseInt(getStyle(this.$refs.title, 'height')) || 0
            const headerHeight = parseInt(getStyle(this.$refs.header, 'height')) || 0
            const footerHeight = parseInt(getStyle(this.$refs.footer, 'height')) || 0
            if (this.height) {
              this.bodyHeight = this.height - titleHeight - headerHeight - footerHeight
            } else if (this.maxHeight) {
              this.bodyHeight = this.maxHeight - titleHeight - headerHeight - footerHeight
            }
            this.$nextTick(() => this.fixedBody())
          })
        } else {
          this.bodyHeight = 0
          this.$nextTick(() => this.fixedBody())
        }
      },
      fixedBody () {
        if (this.$refs.header) {
          this.headerWidth = this.$refs.header.children[0].offsetWidth
          this.headerHeight = this.$refs.header.children[0].offsetHeight
          // this.showHorizontalScrollBar = this.headerWidth>this.$refs.header.offsetWidth;
        }

        if (!this.$refs.tbody || !this.data || this.data.length === 0) {
          this.showVerticalScrollBar = false
        } else {
          let bodyContentEl = this.$refs.tbody.$el
          let bodyEl = bodyContentEl.parentElement
          let bodyContentHeight = bodyContentEl.offsetHeight
          let bodyHeight = bodyEl.offsetHeight

          this.showHorizontalScrollBar = bodyEl.offsetWidth < bodyContentEl.offsetWidth + (this.showVerticalScrollBar ? this.scrollBarWidth : 0)
          this.showVerticalScrollBar = this.bodyHeight ? bodyHeight - (this.showHorizontalScrollBar ? this.scrollBarWidth : 0) < bodyContentHeight : false

          if (this.showVerticalScrollBar) {
            bodyEl.classList.add(this.prefixCls + '-overflowY')
          } else {
            bodyEl.classList.remove(this.prefixCls + '-overflowY')
          }
          if (this.showHorizontalScrollBar) {
            bodyEl.classList.add(this.prefixCls + '-overflowX')
          } else {
            bodyEl.classList.remove(this.prefixCls + '-overflowX')
          }
        }
      },

      handleBodyScroll (event) {
        if (this.showHeader) this.$refs.header.scrollLeft = event.target.scrollLeft
        if (this.isLeftFixed) this.$refs.fixedBody.scrollTop = event.target.scrollTop
        if (this.isRightFixed) this.$refs.fixedRightBody.scrollTop = event.target.scrollTop
      },
      handleFixedMousewheel (event) {
        let deltaY = event.deltaY
        if (!deltaY && event.detail) {
          deltaY = event.detail * 40
        }
        if (!deltaY && event.wheelDeltaY) {
          deltaY = -event.wheelDeltaY
        }
        if (!deltaY && event.wheelDelta) {
          deltaY = -event.wheelDelta
        }
        if (!deltaY) return
        const body = this.$refs.body
        const currentScrollTop = body.scrollTop
        if (deltaY < 0 && currentScrollTop !== 0) {
          event.preventDefault()
        }
        if (deltaY > 0 && body.scrollHeight - body.clientHeight > currentScrollTop) {
          event.preventDefault()
        }
        // body.scrollTop += deltaY;
        let step = 0
        let timeId = setInterval(() => {
          step += 5
          if (deltaY > 0) {
            body.scrollTop += 2
          } else {
            body.scrollTop -= 2
          }
          if (step >= Math.abs(deltaY)) {
            clearInterval(timeId)
          }
        }, 5)
      },
      handleMouseWheel (event) {
        const deltaX = event.deltaX
        const $body = this.$refs.body

        if (deltaX > 0) {
          $body.scrollLeft = $body.scrollLeft + 10
        } else {
          $body.scrollLeft = $body.scrollLeft - 10
        }
      },
      sortData (data, type, index) {
        const key = this.cloneColumns[index].key
        data.sort((a, b) => {
          if (this.cloneColumns[index].sortMethod) {
            return this.cloneColumns[index].sortMethod(a[key], b[key], type)
          } else {
            if (type === 'asc') {
              return a[key] > b[key] ? 1 : -1
            } else if (type === 'desc') {
              return a[key] < b[key] ? 1 : -1
            }
          }
        })
        return data
      },
      handleSort (_index, type) {
        const index = this.GetOriginalIndex(_index)
        this.cloneColumns.forEach((col) => {
          col._sortType = 'normal'
        })

        const key = this.cloneColumns[index].key
        if (this.cloneColumns[index].sortable !== 'custom') { // custom is for remote sort
          if (type === 'normal') {
            this.rebuildData = this.makeDataWithSort()
          } else {
            this.rebuildData = this.sortData(this.rebuildData, type, index)
          }
        }
        this.cloneColumns[index]._sortType = type

        this.$emit('on-sort-change', {
          column: JSON.parse(JSON.stringify(this.allColumns[this.cloneColumns[index]._index])),
          key: key,
          order: type
        })
      },
      /**
       * #2832
       * 应该区分当前表头的 column 是左固定还是右固定
       * 否则执行到 $parent 时，方法的 index 与 cloneColumns 的 index 是不对应的
       * 左固定和右固定，要区分对待
       * 所以，此方法用来获取正确的 index
       * */
      GetOriginalIndex (_index) {
        return this.cloneColumns.findIndex(item => item._index === _index)
      },
      makeData () {
        let data = deepCopy(this.data)
        data.forEach((row, index) => {
          row._index = index
          row._rowKey = rowKey++
        })
        return data
      },
      makeDataWithSort () {
        let data = this.makeData()
        let sortType = 'normal'
        let sortIndex = -1
        let isCustom = false

        for (let i = 0; i < this.cloneColumns.length; i++) {
          if (this.cloneColumns[i]._sortType !== 'normal') {
            sortType = this.cloneColumns[i]._sortType
            sortIndex = i
            isCustom = this.cloneColumns[i].sortable === 'custom'
            break
          }
        }
        if (sortType !== 'normal' && !isCustom) data = this.sortData(data, sortType, sortIndex)
        return data
      },
      makeObjData () {
        let data = {}
        this.data.forEach((row, index) => {
          const newRow = deepCopy(row)// todo 直接替换
          newRow._isHover = false
          if (newRow._disabled) {
            newRow._isDisabled = newRow._disabled
          } else {
            newRow._isDisabled = false
          }
          if (newRow._checked) {
            newRow._isChecked = newRow._checked
          } else {
            newRow._isChecked = false
          }
          if (newRow._expanded) {
            newRow._isExpanded = newRow._expanded
          } else {
            newRow._isExpanded = false
          }
          if (newRow._highlight) {
            newRow._isHighlight = newRow._highlight
          } else {
            newRow._isHighlight = false
          }
          data[index] = newRow
        })
        return data
      },
      // 修改列，设置一个隐藏的 id，便于后面的多级表头寻找对应的列，否则找不到
      makeColumnsId (columns) {
        return columns.map(item => {
          if ('children' in item) this.makeColumnsId(item.children)
          item.__id = getRandomStr(6)
          return item
        })
      },
      makeColumns (cols) {
        // 在 data 时，this.allColumns 暂时为 undefined
        let columns = deepCopy(getAllColumns(cols))
        let left = []
        let right = []
        let center = []

        columns.forEach((column, index) => {
          column._index = index
          column._columnKey = columnKey++
          column.width = parseInt(column.width)
          column._width = column.width ? column.width : '' // update in handleResize()
          column._sortType = 'normal'

          if ('sortType' in column) {
            column._sortType = column.sortType
          }

          if (column.fixed && column.fixed === 'left') {
            left.push(column)
          } else if (column.fixed && column.fixed === 'right') {
            right.push(column)
          } else {
            center.push(column)
          }
        })
        return left.concat(center).concat(right)
      },
      // create a multiple table-head
      makeColumnRows (fixedType, cols) {
        return convertToRows(cols, fixedType)
      },
      exportCsv (params) {
        if (params.filename) {
          if (params.filename.indexOf('.csv') === -1) {
            params.filename += '.csv'
          }
        } else {
          params.filename = 'table.csv'
        }

        let columns = []
        let datas = []
        if (params.columns && params.data) {
          columns = params.columns
          datas = params.data
        } else {
          columns = this.allColumns
          if (!('original' in params)) params.original = true
          datas = params.original ? this.data : this.rebuildData
        }

        let noHeader = false
        if ('noHeader' in params) noHeader = params.noHeader

        const data = csv(columns, datas, params, noHeader)
        if (params.callback) params.callback(data)
        else export_csv.download(params.filename, data)
      },
      dragAndDrop (a, b) {
        this.$emit('on-drag-drop', a, b)
      }
    },
    created () {
      if (!this.context) this.currentContext = this.$parent
      this.showSlotHeader = this.$slots.header !== undefined
      this.showSlotFooter = this.$slots.footer !== undefined
      this.rebuildData = this.makeDataWithSort()
    },
    mounted () {
      this.handleResize()
      this.$nextTick(() => {
        this.ready = true
      })

      on(window, 'resize', this.handleResize)

      this.$on('on-visible-change', (val) => {
        if (val) {
          this.handleResize()
        }
      })
    },
    beforeDestroy () {
      off(window, 'resize', this.handleResize)
    },
    watch: {
      data: {
        handler () {
          const oldDataLen = this.rebuildData.length
          this.objData = this.makeObjData()
          this.rebuildData = this.makeDataWithSort()
          this.handleResize()
          if (!oldDataLen) {
            this.fixedHeader()
          }
          // here will trigger before clickCurrentRow, so use async
          setTimeout(() => {
            this.cloneData = deepCopy(this.data)
          }, 0)
        },
        deep: true
      },
      columns: {
        handler () {
          // todo 这里有性能问题，可能是左右固定计算属性影响的
          const colsWithId = this.makeColumnsId(this.columns)
          this.allColumns = getAllColumns(colsWithId)
          this.cloneColumns = this.makeColumns(colsWithId)

          this.columnRows = this.makeColumnRows(false, colsWithId)
          this.leftFixedColumnRows = this.makeColumnRows('left', colsWithId)
          this.rightFixedColumnRows = this.makeColumnRows('right', colsWithId)
          this.rebuildData = this.makeDataWithSort()
          this.handleResize()
        },
        deep: true
      },
      height () {
        this.handleResize()
      },
      maxHeight () {
        this.handleResize()
      },
      showHorizontalScrollBar () {
        this.handleResize()
      },
      showVerticalScrollBar () {
        this.handleResize()
      }
    }
  });

// CONCATENATED MODULE: ./src/components/table/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/table/table.vue





/* normalize component */

var table_component = normalizeComponent(
  table_tablevue_type_script_lang_js_,
  tablevue_type_template_id_7b471c32_render,
  tablevue_type_template_id_7b471c32_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table = (table_component.exports);
// CONCATENATED MODULE: ./src/components/table/index.js


/* istanbul ignore next */
table.install = function (Vue) {
  Vue.component(table.name, table)
}

/* harmony default export */ var components_table = (table);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/page/page.vue?vue&type=template&id=3a241b78&
var pagevue_type_template_id_3a241b78_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.simple)?_c('ul',{class:_vm.simpleWrapClasses,style:(_vm.styles)},[_c('li',{class:_vm.prevClasses,attrs:{"title":"上一页"},on:{"click":_vm.prev}},[_vm._m(0)]),_c('li',{class:_vm.simplePagerClasses,attrs:{"title":_vm.currentPage + '/' + _vm.allPages}},[_c('label',[_c('input',{attrs:{"type":"text","autocomplete":"off","spellcheck":"false"},domProps:{"value":_vm.currentPage},on:{"keydown":_vm.keyDown,"keyup":_vm.keyUp,"change":_vm.keyUp}})]),_c('span',[_vm._v("/")]),_vm._v("\n    "+_vm._s(_vm.allPages)+"\n  ")]),_c('li',{class:_vm.nextClasses,attrs:{"title":"下一页"},on:{"click":_vm.next}},[_vm._m(1)])]):_c('ul',{class:_vm.wrapClasses,style:(_vm.styles)},[(_vm.showTotal)?_c('li',{class:[_vm.prefixCls + '-total']},[_c('span',[_vm._t("default",[_vm._v("共 "+_vm._s(_vm.total)+" 条")])],2)]):_vm._e(),_c('li',{class:_vm.prevClasses,attrs:{"title":"上一页"},on:{"click":_vm.prev}},[_c('a',[(_vm.prevText !== '')?[_vm._v(_vm._s(_vm.prevText))]:_c('i',{staticClass:"iconfont icon-ios-arrow-back"})],2)]),_c('li',{class:_vm.firstPageClasses,attrs:{"title":"1"},on:{"click":function($event){return _vm.changePage(1)}}},[_c('a',[_vm._v("1")])]),(_vm.currentPage > 5)?_c('li',{class:[_vm.prefixCls + '-item-jump-prev'],attrs:{"title":"向前5页"},on:{"click":_vm.fastPrev}},[_vm._m(2)]):_vm._e(),(_vm.currentPage === 5)?_c('li',{class:[_vm.prefixCls + '-item'],attrs:{"title":_vm.currentPage - 3},on:{"click":function($event){return _vm.changePage(_vm.currentPage - 3)}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage - 3))])]):_vm._e(),(_vm.currentPage - 2 > 1)?_c('li',{class:[_vm.prefixCls + '-item'],attrs:{"title":_vm.currentPage - 2},on:{"click":function($event){return _vm.changePage(_vm.currentPage - 2)}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage - 2))])]):_vm._e(),(_vm.currentPage - 1 > 1)?_c('li',{class:[_vm.prefixCls + '-item'],attrs:{"title":_vm.currentPage - 1},on:{"click":function($event){return _vm.changePage(_vm.currentPage - 1)}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage - 1))])]):_vm._e(),(_vm.currentPage !== 1 && _vm.currentPage !== _vm.allPages)?_c('li',{class:[_vm.prefixCls + '-item',_vm.prefixCls + '-item-active'],attrs:{"title":_vm.currentPage}},[_c('a',[_vm._v(_vm._s(_vm.currentPage))])]):_vm._e(),(_vm.currentPage + 1 < _vm.allPages)?_c('li',{class:[_vm.prefixCls + '-item'],attrs:{"title":_vm.currentPage + 1},on:{"click":function($event){return _vm.changePage(_vm.currentPage + 1)}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage + 1))])]):_vm._e(),(_vm.currentPage + 2 < _vm.allPages)?_c('li',{class:[_vm.prefixCls + '-item'],attrs:{"title":_vm.currentPage + 2},on:{"click":function($event){return _vm.changePage(_vm.currentPage + 2)}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage + 2))])]):_vm._e(),(_vm.allPages - _vm.currentPage === 4)?_c('li',{class:[_vm.prefixCls + '-item'],attrs:{"title":_vm.currentPage + 3},on:{"click":function($event){return _vm.changePage(_vm.currentPage + 3)}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage + 3))])]):_vm._e(),(_vm.allPages - _vm.currentPage >= 5)?_c('li',{class:[_vm.prefixCls + '-item-jump-next'],attrs:{"title":"向后5页"},on:{"click":_vm.fastNext}},[_vm._m(3)]):_vm._e(),(_vm.allPages > 1)?_c('li',{class:_vm.lastPageClasses,attrs:{"title":_vm.allPages},on:{"click":function($event){return _vm.changePage(_vm.allPages)}}},[_c('a',[_vm._v(_vm._s(_vm.allPages))])]):_vm._e(),_c('li',{class:_vm.nextClasses,attrs:{"title":"下一页"},on:{"click":_vm.next}},[_c('a',[(_vm.nextText !== '')?[_vm._v(_vm._s(_vm.nextText))]:_c('i',{staticClass:"iconfont icon-ios-arrow-forward"})],2)]),_c('options',{attrs:{"show-sizer":_vm.showSizer,"page-size":_vm.currentPageSize,"page-size-opts":_vm.pageSizeOpts,"placement":_vm.placement,"transfer":_vm.transfer,"show-elevator":_vm.showElevator,"current":_vm.currentPage,"all-pages":_vm.allPages,"is-small":_vm.isSmall},on:{"on-size":_vm.onSize,"on-page":_vm.onPage}})],1)}
var pagevue_type_template_id_3a241b78_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',[_c('i',{staticClass:"iconfont icon-ios-arrow-back"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',[_c('i',{staticClass:"iconfont icon-ios-arrow-forward"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',[_c('i',{staticClass:"iconfont icon-doubleleft"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',[_c('i',{staticClass:"iconfont icon-doubleright"})])}]


// CONCATENATED MODULE: ./src/components/page/page.vue?vue&type=template&id=3a241b78&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/page/options.vue?vue&type=template&id=0abfd0c3&
var optionsvue_type_template_id_0abfd0c3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showSizer || _vm.showElevator)?_c('div',{class:_vm.optsClasses},[(_vm.showSizer)?_c('div',{class:_vm.sizerClasses},[_c('b-select',{attrs:{"size":_vm.size,"placement":_vm.placement,"transfer":_vm.transfer},on:{"on-change":_vm.changeSize},model:{value:(_vm.currentPageSize),callback:function ($$v) {_vm.currentPageSize=$$v},expression:"currentPageSize"}},_vm._l((_vm.pageSizeOpts),function(item){return _c('b-option',{key:item,staticStyle:{"text-align":"center"},attrs:{"value":item}},[_vm._v("\n        "+_vm._s(item)+" 条/页\n      ")])}),1)],1):_vm._e(),(_vm.showElevator)?_c('div',{class:_vm.ElevatorClasses},[_vm._v("\n    跳至\n    "),_c('label',[_c('input',{attrs:{"type":"text","autocomplete":"off","spellcheck":"false"},domProps:{"value":_vm.currentTo},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.changePage($event)}}})]),_vm._v("\n    页\n  ")]):_vm._e()]):_vm._e()}
var optionsvue_type_template_id_0abfd0c3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/page/options.vue?vue&type=template&id=0abfd0c3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/page/options.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const optionsvue_type_script_lang_js_prefixCls = 'bin-page'

function isValueNumber (value) {
  return (/^[1-9][0-9]*$/).test(value + '')
}

/* harmony default export */ var optionsvue_type_script_lang_js_ = ({
  name: 'PageOption',
  props: {
    pageSizeOpts: Array,
    showSizer: Boolean,
    showElevator: Boolean,
    current: Number,
    currentTo: Number,
    pageSize: Number,
    allPages: Number,
    isSmall: Boolean,
    placement: String,
    transfer: Boolean
  },
  data () {
    return {
      currentPageSize: this.pageSize
    }
  },
  watch: {
    pageSize (val) {
      this.currentPageSize = val
    }
  },
  computed: {
    size () {
      return this.isSmall ? 'small' : 'default'
    },
    optsClasses () {
      return [
        `${optionsvue_type_script_lang_js_prefixCls}-options`
      ]
    },
    sizerClasses () {
      return [
        `${optionsvue_type_script_lang_js_prefixCls}-options-sizer`
      ]
    },
    ElevatorClasses () {
      return [
        `${optionsvue_type_script_lang_js_prefixCls}-options-elevator`
      ]
    }
  },
  methods: {
    changeSize () {
      this.$emit('on-size', this.currentPageSize)
    },
    changePage (event) {
      let val = event.target.value.trim()
      let page = 0

      if (isValueNumber(val)) {
        val = Number(val)
        if (val !== this.current) {
          const allPages = this.allPages

          if (val > allPages) {
            page = allPages
          } else {
            page = val
          }
        }
      } else {
        page = 1
      }

      if (page) {
        this.$emit('on-page', page)
        event.target.value = page
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/page/options.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_optionsvue_type_script_lang_js_ = (optionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/page/options.vue





/* normalize component */

var options_component = normalizeComponent(
  page_optionsvue_type_script_lang_js_,
  optionsvue_type_template_id_0abfd0c3_render,
  optionsvue_type_template_id_0abfd0c3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var page_options = (options_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/page/page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const pagevue_type_script_lang_js_prefixCls = 'bin-page'

/* harmony default export */ var pagevue_type_script_lang_js_ = ({
  name: 'BPage',
  components: { Options: page_options },
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOpts: {
      type: Array,
      default () {
        return [10, 20, 30, 40]
      }
    },
    placement: {
      validator (value) {
        return oneOf(value, ['top', 'bottom'])
      },
      default: 'bottom'
    },
    transfer: Boolean,
    size: {
      validator (value) {
        return oneOf(value, ['small'])
      }
    },
    simple: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    showElevator: {
      type: Boolean,
      default: false
    },
    showSizer: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    },
    styles: {
      type: Object
    },
    prevText: {
      type: String,
      default: ''
    },
    nextText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      prefixCls: pagevue_type_script_lang_js_prefixCls,
      currentPage: this.current,
      currentPageSize: this.pageSize
    }
  },
  watch: {
    total (val) {
      let maxPage = Math.ceil(val / this.currentPageSize)
      if (maxPage < this.currentPage) {
        this.currentPage = (maxPage === 0 ? 1 : maxPage)
      }
    },
    current (val) {
      this.currentPage = val
    },
    pageSize (val) {
      this.currentPageSize = val
    }
  },
  computed: {
    isSmall () {
      return !!this.size
    },
    allPages () {
      const allPage = Math.ceil(this.total / this.currentPageSize)
      return (allPage === 0) ? 1 : allPage
    },
    simpleWrapClasses () {
      return [
        `${pagevue_type_script_lang_js_prefixCls}`,
        `${pagevue_type_script_lang_js_prefixCls}-simple`,
        {
          [`${this.className}`]: !!this.className
        }
      ]
    },
    simplePagerClasses () {
      return `${pagevue_type_script_lang_js_prefixCls}-simple-pager`
    },
    wrapClasses () {
      return [
        `${pagevue_type_script_lang_js_prefixCls}`,
        {
          [`${this.className}`]: !!this.className,
          'mini': !!this.size
        }
      ]
    },
    prevClasses () {
      return [
        `${pagevue_type_script_lang_js_prefixCls}-prev`,
        {
          [`${pagevue_type_script_lang_js_prefixCls}-disabled`]: this.currentPage === 1,
          [`${pagevue_type_script_lang_js_prefixCls}-custom-text`]: this.prevText !== ''
        }
      ]
    },
    nextClasses () {
      return [
        `${pagevue_type_script_lang_js_prefixCls}-next`,
        {
          [`${pagevue_type_script_lang_js_prefixCls}-disabled`]: this.currentPage === this.allPages,
          [`${pagevue_type_script_lang_js_prefixCls}-custom-text`]: this.nextText !== ''
        }
      ]
    },
    firstPageClasses () {
      return [
        `${pagevue_type_script_lang_js_prefixCls}-item`,
        {
          [`${pagevue_type_script_lang_js_prefixCls}-item-active`]: this.currentPage === 1
        }
      ]
    },
    lastPageClasses () {
      return [
        `${pagevue_type_script_lang_js_prefixCls}-item`,
        {
          [`${pagevue_type_script_lang_js_prefixCls}-item-active`]: this.currentPage === this.allPages
        }
      ]
    }
  },
  methods: {
    changePage (page) {
      if (this.currentPage !== page) {
        this.currentPage = page
        this.$emit('update:current', page)
        this.$emit('on-change', page)
      }
    },
    prev () {
      const current = this.currentPage
      if (current <= 1) {
        return false
      }
      this.changePage(current - 1)
    },
    next () {
      const current = this.currentPage
      if (current >= this.allPages) {
        return false
      }
      this.changePage(current + 1)
    },
    fastPrev () {
      const page = this.currentPage - 5
      if (page > 0) {
        this.changePage(page)
      } else {
        this.changePage(1)
      }
    },
    fastNext () {
      const page = this.currentPage + 5
      if (page > this.allPages) {
        this.changePage(this.allPages)
      } else {
        this.changePage(page)
      }
    },
    onSize (pageSize) {
      this.currentPageSize = pageSize
      this.$emit('on-page-size-change', pageSize)
      this.changePage(1)
    },
    onPage (page) {
      this.changePage(page)
    },
    keyDown (e) {
      const key = e.keyCode
      const condition = (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key === 8 || key === 37 || key === 39

      if (!condition) {
        e.preventDefault()
      }
    },
    keyUp (e) {
      const key = e.keyCode
      const val = parseInt(e.target.value)

      if (key === 38) {
        this.prev()
      } else if (key === 40) {
        this.next()
      } else if (key === 13) {
        let page = 1

        if (val > this.allPages) {
          page = this.allPages
        } else if (val <= 0 || !val) {
          page = 1
        } else {
          page = val
        }

        e.target.value = page
        this.changePage(page)
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/page/page.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_pagevue_type_script_lang_js_ = (pagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/page/page.vue





/* normalize component */

var page_component = normalizeComponent(
  page_pagevue_type_script_lang_js_,
  pagevue_type_template_id_3a241b78_render,
  pagevue_type_template_id_3a241b78_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var page = (page_component.exports);
// CONCATENATED MODULE: ./src/components/page/index.js


/* istanbul ignore next */
page.install = function (Vue) {
  Vue.component(page.name, page)
}

/* harmony default export */ var components_page = (page);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/tree.vue?vue&type=template&id=64c91982&
var treevue_type_template_id_64c91982_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.prefixCls},[_vm._l((_vm.stateTree),function(item,i){return _c('tree-node',{key:i,attrs:{"data":item,"visible":"","multiple":_vm.multiple,"show-checkbox":_vm.showCheckbox,"children-key":_vm.childrenKey}})}),(!_vm.stateTree.length)?_c('div',{class:[_vm.prefixCls + '-empty']},[_vm._v(_vm._s(_vm.emptyText))]):_vm._e()],2)}
var treevue_type_template_id_64c91982_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tree/tree.vue?vue&type=template&id=64c91982&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/node.vue?vue&type=template&id=253f929a&
var nodevue_type_template_id_253f929a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('collapse-transition',{attrs:{"appear":_vm.appear}},[_c('ul',{class:_vm.classes},[_c('li',[_c('span',{class:_vm.arrowClasses,on:{"click":_vm.handleExpand}},[(_vm.showArrow)?_c('b-icon',{attrs:{"name":"ios-arrow-forward"}}):_vm._e(),(_vm.showLoading)?_c('b-icon',{staticClass:"bin-load-loop",attrs:{"name":"loading"}}):_vm._e()],1),(_vm.showCheckbox)?_c('b-checkbox',{attrs:{"value":_vm.data.checked,"indeterminate":_vm.data.indeterminate,"disabled":_vm.data.disabled || _vm.data.disableCheckbox},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleCheck($event)}}}):_vm._e(),(_vm.data.render)?_c('render',{attrs:{"render":_vm.data.render,"data":_vm.data,"node":_vm.node}}):(_vm.isParentRender)?_c('render',{attrs:{"render":_vm.parentRender,"data":_vm.data,"node":_vm.node}}):_c('span',{class:_vm.titleClasses,on:{"click":_vm.handleSelect}},[_vm._v(_vm._s(_vm.data.title))]),(_vm.data.expand)?_vm._l((_vm.children),function(item,i){return _c('tree-node',{key:i,attrs:{"appear":_vm.appearByClickArrow,"data":item,"multiple":_vm.multiple,"show-checkbox":_vm.showCheckbox,"children-key":_vm.childrenKey}})}):_vm._e()],2)])])}
var nodevue_type_template_id_253f929a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tree/node.vue?vue&type=template&id=253f929a&

// CONCATENATED MODULE: ./src/components/tree/render.js
/* harmony default export */ var tree_render = ({
  name: 'RenderCell',
  functional: true,
  props: {
    render: Function,
    data: Object,
    node: Array
  },
  render: (h, ctx) => {
    const params = {
      root: ctx.props.node[0],
      node: ctx.props.node[1],
      data: ctx.props.data
    }
    return ctx.props.render(h, params)
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/node.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const nodevue_type_script_lang_js_prefixCls = 'bin-tree'

/* harmony default export */ var nodevue_type_script_lang_js_ = ({
  name: 'TreeNode',
  mixins: [emitter],
  inject: ['TreeInstance'],
  components: { CollapseTransition: collapse_transition, Render: tree_render },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls: nodevue_type_script_lang_js_prefixCls,
      appearByClickArrow: false
    }
  },
  computed: {
    classes () {
      return [
        `${nodevue_type_script_lang_js_prefixCls}-children`
      ]
    },
    arrowClasses () {
      return [
        `${nodevue_type_script_lang_js_prefixCls}-arrow`,
        {
          [`${nodevue_type_script_lang_js_prefixCls}-arrow-disabled`]: this.data.disabled,
          [`${nodevue_type_script_lang_js_prefixCls}-arrow-open`]: this.data.expand
        }
      ]
    },
    titleClasses () {
      return [
        `${nodevue_type_script_lang_js_prefixCls}-title`,
        {
          [`${nodevue_type_script_lang_js_prefixCls}-title-selected`]: this.data.selected
        }
      ]
    },
    showArrow () {
      return (this.data[this.childrenKey] && this.data[this.childrenKey].length) || ('loading' in this.data && !this.data.loading)
    },
    showLoading () {
      return 'loading' in this.data && this.data.loading
    },
    isParentRender () {
      const Tree = findComponentUpward(this, 'BTree')
      return Tree && Tree.render
    },
    parentRender () {
      const Tree = findComponentUpward(this, 'BTree')
      if (Tree && Tree.render) {
        return Tree.render
      } else {
        return null
      }
    },
    node () {
      const Tree = findComponentUpward(this, 'BTree')
      if (Tree) {
        // 将所有的 node（即flatState）和当前 node 都传递
        return [Tree.flatState, Tree.flatState.find(item => item.nodeKey === this.data.nodeKey)]
      } else {
        return []
      }
    },
    children () {
      return this.data[this.childrenKey]
    }
  },
  methods: {
    handleExpand () {
      const item = this.data
      if (item.disabled) return

      // Vue.js 2.6.9 对 transition 的 appear 进行了调整，加此方法来判断通过点击箭头展开时，加 appear，否则初始渲染时 appear 为 false
      this.appearByClickArrow = true

      // async loading
      if (item[this.childrenKey].length === 0) {
        const tree = findComponentUpward(this, 'BTree')
        if (tree && tree.loadData) {
          this.$set(this.data, 'loading', true)
          tree.loadData(item, children => {
            this.$set(this.data, 'loading', false)
            if (children.length) {
              this.$set(this.data, this.childrenKey, children)
              this.$nextTick(() => this.handleExpand())
            }
          })
          return
        }
      }

      if (item[this.childrenKey] && item[this.childrenKey].length) {
        this.$set(this.data, 'expand', !this.data.expand)
        this.dispatch('BTree', 'toggle-expand', this.data)
      }
    },
    handleSelect () {
      if (this.data.disabled) return
      if (this.TreeInstance.showCheckbox && this.TreeInstance.checkDirectly) {
        this.handleCheck()
      } else {
        this.dispatch('BTree', 'on-selected', this.data.nodeKey)
      }
    },
    handleCheck () {
      if (this.data.disabled) return
      const changes = {
        checked: !this.data.checked && !this.data.indeterminate,
        nodeKey: this.data.nodeKey
      }
      this.dispatch('BTree', 'on-check', changes)
    }
  }
});

// CONCATENATED MODULE: ./src/components/tree/node.vue?vue&type=script&lang=js&
 /* harmony default export */ var tree_nodevue_type_script_lang_js_ = (nodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tree/node.vue





/* normalize component */

var node_component = normalizeComponent(
  tree_nodevue_type_script_lang_js_,
  nodevue_type_template_id_253f929a_render,
  nodevue_type_template_id_253f929a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var node = (node_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/tree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const treevue_type_script_lang_js_prefixCls = 'bin-tree'

/* harmony default export */ var treevue_type_script_lang_js_ = ({
  name: 'BTree',
  mixins: [emitter],
  components: { TreeNode: node },
  provide () {
    return { TreeInstance: this }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    checkStrictly: {
      type: Boolean,
      default: false
    },
    // 当开启 showCheckbox 时，如果开启 checkDirectly，select 将强制转为 check 事件
    checkDirectly: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    loadData: {
      type: Function
    },
    render: {
      type: Function
    },
    lockSelect: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls: treevue_type_script_lang_js_prefixCls,
      stateTree: this.data,
      flatState: []
    }
  },
  watch: {
    data: {
      deep: true,
      handler () {
        this.stateTree = this.data
        this.flatState = this.compileFlatState()
        this.rebuildTree()
      }
    }
  },
  methods: {
    compileFlatState () { // 每个结点都有一个关系父结点/子结点
      let keyCounter = 0
      let childrenKey = this.childrenKey
      const flatTree = []

      function flattenChildren (node, parent) {
        node.nodeKey = keyCounter++
        flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey }
        if (typeof parent !== 'undefined') {
          flatTree[node.nodeKey].parent = parent.nodeKey
          flatTree[parent.nodeKey][childrenKey].push(node.nodeKey)
        }

        if (node[childrenKey]) {
          flatTree[node.nodeKey][childrenKey] = []
          node[childrenKey].forEach(child => flattenChildren(child, node))
        }
      }

      this.stateTree.forEach(rootNode => {
        flattenChildren(rootNode)
      })
      return flatTree
    },
    updateTreeUp (nodeKey) {
      const parentKey = this.flatState[nodeKey].parent
      if (typeof parentKey === 'undefined' || this.checkStrictly) return

      const node = this.flatState[nodeKey].node
      const parent = this.flatState[parentKey].node
      if (node.checked === parent.checked && node.indeterminate === parent.indeterminate) return // no need to update upwards

      if (node.checked === true) {
        this.$set(parent, 'checked', parent[this.childrenKey].every(node => node.checked))
        this.$set(parent, 'indeterminate', !parent.checked)
      } else {
        this.$set(parent, 'checked', false)
        this.$set(parent, 'indeterminate', parent[this.childrenKey].some(node => node.checked || node.indeterminate))
      }
      this.updateTreeUp(parentKey)
    },
    rebuildTree () { // only called when `data` prop changes
      const checkedNodes = this.getCheckedNodes()
      checkedNodes.forEach(node => {
        this.updateTreeDown(node, { checked: true })
        // propagate upwards
        const parentKey = this.flatState[node.nodeKey].parent
        if (!parentKey && parentKey !== 0) return
        const parent = this.flatState[parentKey].node
        const childHasCheckSetter = typeof node.checked !== 'undefined' && node.checked
        if (childHasCheckSetter && parent.checked !== node.checked) {
          this.updateTreeUp(node.nodeKey) // update tree upwards
        }
      })
    },
    /* public API */
    getSelectedNodes () {
      return this.flatState.filter(obj => obj.node.selected).map(obj => obj.node)
    },
    /* public API */
    getCheckedNodes () {
      return this.flatState.filter(obj => obj.node.checked).map(obj => obj.node)
    },
    /* public API */
    getCheckedAndIndeterminateNodes () {
      return this.flatState.filter(obj => (obj.node.checked || obj.node.indeterminate)).map(obj => obj.node)
    },
    updateTreeDown (node, changes = {}) {
      if (this.checkStrictly) return

      for (let key in changes) {
        this.$set(node, key, changes[key])
      }
      if (node[this.childrenKey]) {
        node[this.childrenKey].forEach(child => {
          this.updateTreeDown(child, changes)
        })
      }
    },
    handleSelect (nodeKey) {
      if (this.lockSelect) { // 如果锁定选择，则不触发选中事件
        return
      }
      const node = this.flatState[nodeKey].node
      if (!this.multiple) { // reset previously selected node
        const currentSelectedKey = this.flatState.findIndex(obj => obj.node.selected)
        if (currentSelectedKey >= 0 && currentSelectedKey !== nodeKey) this.$set(this.flatState[currentSelectedKey].node, 'selected', false)
      }
      this.$set(node, 'selected', !node.selected)

      this.$emit('on-select-change', this.getSelectedNodes(), node)
    },
    handleCheck ({ checked, nodeKey }) {
      const node = this.flatState[nodeKey].node
      this.$set(node, 'checked', checked)
      this.$set(node, 'indeterminate', false)

      this.updateTreeUp(nodeKey) // propagate up
      this.updateTreeDown(node, { checked, indeterminate: false }) // reset `indeterminate` when going down

      this.$emit('on-check-change', this.getCheckedNodes(), node)
    }
  },
  created () {
    this.flatState = this.compileFlatState()
    this.rebuildTree()
  },
  mounted () {
    this.$on('on-check', this.handleCheck)
    this.$on('on-selected', this.handleSelect)
    this.$on('toggle-expand', node => this.$emit('on-toggle-expand', node))
  }
});

// CONCATENATED MODULE: ./src/components/tree/tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var tree_treevue_type_script_lang_js_ = (treevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tree/tree.vue





/* normalize component */

var tree_component = normalizeComponent(
  tree_treevue_type_script_lang_js_,
  treevue_type_template_id_64c91982_render,
  treevue_type_template_id_64c91982_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tree_tree = (tree_component.exports);
// CONCATENATED MODULE: ./src/components/tree/index.js


/* istanbul ignore next */
tree_tree.install = function (Vue) {
  Vue.component(tree_tree.name, tree_tree)
}

/* harmony default export */ var components_tree = (tree_tree);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/menu.vue?vue&type=template&id=00d14075&
var menuvue_type_template_id_00d14075_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.classes,style:(_vm.styles)},[_vm._t("default")],2)}
var menuvue_type_template_id_00d14075_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/menu/menu.vue?vue&type=template&id=00d14075&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/menu.vue?vue&type=script&lang=js&
//
//
//
//
//




const menuvue_type_script_lang_js_prefixCls = 'bin-menu'

/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  name: 'BMenu',
  mixins: [emitter],
  provide () {
    return {
      rootMenu: this
    }
  },
  props: {
    mode: {
      validator (value) {
        return oneOf(value, ['horizontal', 'vertical'])
      },
      default: 'vertical'
    },
    theme: {
      validator (value) {
        return oneOf(value, ['light', 'dark'])
      },
      default: 'light'
    },
    activeName: {
      type: [String, Number]
    },
    openNames: {
      type: Array,
      default () {
        return []
      }
    },
    accordion: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '240px'
    }
  },
  data () {
    return {
      currentActiveName: this.activeName,
      openedNames: []
    }
  },
  computed: {
    classes () {
      let theme = this.theme
      return [
        `${menuvue_type_script_lang_js_prefixCls}`,
        `${menuvue_type_script_lang_js_prefixCls}-${theme}`,
        {
          [`${menuvue_type_script_lang_js_prefixCls}-${this.mode}`]: this.mode
        }
      ]
    },
    styles () {
      let style = {}
      if (this.mode === 'vertical') style.width = this.width
      return style
    }
  },
  methods: {
    updateActiveName () {
      if (this.currentActiveName === undefined) {
        this.currentActiveName = -1
      }
      this.broadcast('BSubmenu', 'on-update-active-name', false)
      this.broadcast('BMenuItem', 'on-update-active-name', this.currentActiveName)
    },
    updateOpenKeys (name) {
      let names = [...this.openedNames]
      const index = names.indexOf(name)
      if (this.accordion) {
        findComponentsDownward(this, 'BSubmenu').forEach(item => {
          item.opened = false
        })
      }
      if (index >= 0) {
        let currentSubmenu = null
        findComponentsDownward(this, 'BSubmenu').forEach(item => {
          if (item.name === name) {
            currentSubmenu = item
            item.opened = false
          }
        })
        findComponentsUpward(currentSubmenu, 'BSubmenu').forEach(item => {
          item.opened = true
        })
        findComponentsDownward(currentSubmenu, 'BSubmenu').forEach(item => {
          item.opened = false
        })
      } else {
        if (this.accordion) {
          let currentSubmenu = null
          findComponentsDownward(this, 'BSubmenu').forEach(item => {
            if (item.name === name) {
              currentSubmenu = item
              item.opened = true
            }
          })
          findComponentsUpward(currentSubmenu, 'BSubmenu').forEach(item => {
            item.opened = true
          })
        } else {
          findComponentsDownward(this, 'BSubmenu').forEach(item => {
            if (item.name === name) item.opened = true
          })
        }
      }
      let openedNames = findComponentsDownward(this, 'BSubmenu').filter(item => item.opened).map(item => item.name)
      this.openedNames = [...openedNames]
      this.$emit('on-open-change', openedNames)
    },
    updateOpened () {
      const items = findComponentsDownward(this, 'BSubmenu')

      if (items.length) {
        items.forEach(item => {
          item.opened = this.openedNames.indexOf(item.name) > -1
        })
      }
    },
    handleEmitSelectEvent (name) {
      this.$emit('on-select', name)
    }
  },
  mounted () {
    this.openedNames = [...this.openNames]
    this.updateOpened()
    this.$nextTick(() => this.updateActiveName())
    this.$on('on-menu-item-select', (name) => {
      this.currentActiveName = name
      this.$emit('on-select', name)
    })
  },
  watch: {
    openNames (names) {
      this.openedNames = names
    },
    activeName (val) {
      this.currentActiveName = val
    },
    currentActiveName () {
      this.updateActiveName()
    }
  }
});

// CONCATENATED MODULE: ./src/components/menu/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/menu/menu.vue





/* normalize component */

var menu_component = normalizeComponent(
  menu_menuvue_type_script_lang_js_,
  menuvue_type_template_id_00d14075_render,
  menuvue_type_template_id_00d14075_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var menu = (menu_component.exports);
// CONCATENATED MODULE: ./src/components/menu/index.js


/* istanbul ignore next */
menu.install = function (Vue) {
  Vue.component(menu.name, menu)
}

/* harmony default export */ var components_menu = (menu);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/submenu.vue?vue&type=template&id=3c68c7bb&
var submenuvue_type_template_id_3c68c7bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.classes,on:{"mouseenter":_vm.handleMouseenter,"mouseleave":_vm.handleMouseleave}},[_c('div',{ref:"reference",class:[_vm.prefixCls + '-submenu-title'],style:(_vm.titleStyle),on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[_vm._t("title"),_c('b-icon',{class:[_vm.prefixCls + '-submenu-title-icon'],attrs:{"name":_vm.arrowName}})],2),(_vm.mode === 'vertical')?_c('collapse-transition',[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.opened),expression:"opened"}],class:[_vm.prefixCls]},[_vm._t("default")],2)]):_c('transition',{attrs:{"name":"zoom-in-top"}},[_c('drop',{directives:[{name:"show",rawName:"v-show",value:(_vm.opened),expression:"opened"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"drop",style:(_vm.dropStyle),attrs:{"placement":_vm.placement,"data-transfer":_vm.transfer,"transfer":_vm.transfer}},[_c('ul',{class:[_vm.prefixCls + '-drop-list']},[_vm._t("default")],2)])],1)],1)}
var submenuvue_type_template_id_3c68c7bb_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/menu/submenu.vue?vue&type=template&id=3c68c7bb&

// CONCATENATED MODULE: ./src/components/menu/mixin.js


/* harmony default export */ var menu_mixin = ({
  data () {
    return {
      menu: findComponentUpward(this, 'BMenu')
    }
  },
  computed: {
    hasParentSubmenu () {
      return !!findComponentUpward(this, 'BSubmenu')
    },
    parentSubmenuNum () {
      return findComponentsUpward(this, 'BSubmenu').length
    },
    mode () {
      return this.menu.mode
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/submenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









const submenuvue_type_script_lang_js_prefixCls = 'bin-menu'

/* harmony default export */ var submenuvue_type_script_lang_js_ = ({
  name: 'BSubmenu',
  mixins: [emitter, menu_mixin],
  inject: ['rootMenu'],
  directives: { TransferDom: transfer_dom },
  components: { Drop: drop, CollapseTransition: collapse_transition },
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    transfer: Boolean // 是否移动至body
  },
  data () {
    return {
      prefixCls: submenuvue_type_script_lang_js_prefixCls,
      active: false,
      opened: false,
      dropWidth: parseFloat(getStyle(this.$el, 'width')),
      placement: 'bottom',
      arrowName: 'ios-arrow-down'
    }
  },
  computed: {
    classes () {
      return [
        `${submenuvue_type_script_lang_js_prefixCls}-submenu`,
        {
          [`${submenuvue_type_script_lang_js_prefixCls}-item-active`]: this.active && !this.hasParentSubmenu,
          [`${submenuvue_type_script_lang_js_prefixCls}-opened`]: this.opened,
          [`${submenuvue_type_script_lang_js_prefixCls}-submenu-disabled`]: this.disabled,
          [`${submenuvue_type_script_lang_js_prefixCls}-submenu-has-parent-submenu`]: this.hasParentSubmenu,
          [`${submenuvue_type_script_lang_js_prefixCls}-child-item-active`]: this.active
        }
      ]
    },
    accordion () {
      return this.menu.accordion
    },
    dropStyle () {
      let style = {}

      if (this.dropWidth) style.minWidth = `${this.dropWidth}px`
      return style
    },
    titleStyle () {
      return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
        paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
      } : {}
    }
  },
  methods: {
    handleMouseenter () {
      if (this.disabled) return
      if (this.mode === 'vertical') return

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.menu.updateOpenKeys(this.name)
        this.opened = true
      }, 250)
    },
    handleMouseleave () {
      if (this.disabled) return
      if (this.mode === 'vertical') return

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.menu.updateOpenKeys(this.name)
        this.opened = false
      }, 150)
    },
    handleClick () {
      if (this.disabled) return
      if (this.mode === 'horizontal') return
      const opened = this.opened
      if (this.accordion) {
        this.$parent.$children.forEach(item => {
          if (item.$options.name === 'BSubmenu') item.opened = false
        })
      }
      this.opened = !opened
      this.menu.updateOpenKeys(this.name)
    }
  },
  watch: {
    mode (val) {
      if (val === 'horizontal') {
        this.$refs.drop.update()
      }
    },
    opened (val) {
      if (this.mode === 'vertical') return
      if (val) {
        // set drop a width to fixed when menu has fixed position
        this.dropWidth = parseFloat(getStyle(this.$el, 'width'))
        this.$refs.drop.update()
      } else {
        this.$refs.drop.destroy()
      }
    }
  },
  mounted () {
    this.$on('on-menu-item-select', (name) => {
      if (this.mode === 'horizontal') this.opened = false
      this.dispatch('BMenu', 'on-menu-item-select', name)
      return true
    })
    this.$on('on-update-active-name', (status) => {
      if (findComponentUpward(this, 'BSubmenu')) {
        this.dispatch('BSubmenu', 'on-update-active-name', status)
      }
      if (findComponentsDownward(this, 'BSubmenu')) {
        findComponentsDownward(this, 'BSubmenu').forEach(item => {
          item.active = false
        })
      }
      this.active = status
    })
    if (this.hasParentSubmenu && this.mode === 'horizontal') {
      this.placement = 'right-start'
      this.arrowName = 'ios-arrow-forward'
    }
  }
});

// CONCATENATED MODULE: ./src/components/menu/submenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_submenuvue_type_script_lang_js_ = (submenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/menu/submenu.vue





/* normalize component */

var submenu_component = normalizeComponent(
  menu_submenuvue_type_script_lang_js_,
  submenuvue_type_template_id_3c68c7bb_render,
  submenuvue_type_template_id_3c68c7bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var submenu = (submenu_component.exports);
// CONCATENATED MODULE: ./src/components/submenu/index.js


/* istanbul ignore next */
submenu.install = function (Vue) {
  Vue.component(submenu.name, submenu)
}

/* harmony default export */ var components_submenu = (submenu);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/menu-item.vue?vue&type=template&id=08bf713c&
var menu_itemvue_type_template_id_08bf713c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.to)?_c('a',{class:_vm.classes,style:(_vm.itemStyle),attrs:{"href":_vm.linkUrl,"target":_vm.target},on:{"click":[function($event){if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.handleClickItem($event, false)},function($event){if(!$event.ctrlKey){ return null; }return _vm.handleClickItem($event, true)},function($event){if(!$event.metaKey){ return null; }return _vm.handleClickItem($event, true)}]}},[_vm._t("default")],2):_c('li',{class:_vm.classes,style:(_vm.itemStyle),on:{"click":function($event){$event.stopPropagation();return _vm.handleClickItem($event)}}},[_vm._t("default")],2)}
var menu_itemvue_type_template_id_08bf713c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/menu/menu-item.vue?vue&type=template&id=08bf713c&

// CONCATENATED MODULE: ./src/mixins/link.js


/* harmony default export */ var mixins_link = ({
  props: {
    to: {
      type: [Object, String]
    },
    replace: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      validator (value) {
        return oneOf(value, ['_blank', '_self', '_parent', '_top'])
      },
      default: '_self'
    },
    append: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    linkUrl () {
      const type = typeof this.to
      if (type !== 'string') {
        return null
      }
      if (this.to.includes('//')) {
        /* Absolute URL, we do not need to route this */
        return this.to
      }
      const router = this.$router
      if (router) {
        const current = this.$route
        const route = router.resolve(this.to, current, this.append)
        return route ? route.href : this.to
      }
      return this.to
    }
  },
  methods: {
    handleClick (newWindow = false) {
      const router = this.$router
      if (newWindow) {
        let to = this.to
        if (router) {
          const current = this.$route
          const route = router.resolve(this.to, current, this.append)
          to = route ? route.href : this.to
        }
        window.open(to)
      } else {
        if (router) {
          this.replace ? this.$router.replace(this.to) : this.$router.push(this.to)
        } else {
          window.location.href = this.to
        }
      }
    },
    handleCheckClick (event, new_window = false) {
      if (this.to) {
        if (this.target === '_blank') {
          return false
        } else {
          event.preventDefault()
          this.handleClick(new_window)
        }
      }
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/menu-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const menu_itemvue_type_script_lang_js_prefixCls = 'bin-menu'

/* harmony default export */ var menu_itemvue_type_script_lang_js_ = ({
  name: 'BMenuItem',
  mixins: [emitter, menu_mixin, mixins_link],
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return [
        `${menu_itemvue_type_script_lang_js_prefixCls}-item`,
        {
          [`${menu_itemvue_type_script_lang_js_prefixCls}-item-active`]: this.active,
          [`${menu_itemvue_type_script_lang_js_prefixCls}-item-selected`]: this.active,
          [`${menu_itemvue_type_script_lang_js_prefixCls}-item-disabled`]: this.disabled
        }
      ]
    },
    itemStyle () {
      return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
        paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
      } : {}
    }
  },
  methods: {
    handleClickItem (event, newWindow = false) {
      if (this.disabled) return

      if (newWindow || this.target === '_blank') {
        // 如果是 new_window，直接新开窗口就行，无需发送状态
        this.handleCheckClick(event, newWindow)
        let parentMenu = findComponentUpward(this, 'BMenu')
        if (parentMenu) {
          parentMenu.handleEmitSelectEvent(this.name)
        }
      } else {
        let parent = findComponentUpward(this, 'BSubmenu')

        if (parent) {
          this.dispatch('BSubmenu', 'on-menu-item-select', this.name)
        } else {
          this.dispatch('BMenu', 'on-menu-item-select', this.name)
        }

        this.handleCheckClick(event, newWindow)
      }
    }
  },
  mounted () {
    this.$on('on-update-active-name', (name) => {
      if (this.name === name) {
        this.active = true
        this.dispatch('BSubmenu', 'on-update-active-name', name)
      } else {
        this.active = false
      }
    })
  }
});

// CONCATENATED MODULE: ./src/components/menu/menu-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_menu_itemvue_type_script_lang_js_ = (menu_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/menu/menu-item.vue





/* normalize component */

var menu_item_component = normalizeComponent(
  menu_menu_itemvue_type_script_lang_js_,
  menu_itemvue_type_template_id_08bf713c_render,
  menu_itemvue_type_template_id_08bf713c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var menu_item = (menu_item_component.exports);
// CONCATENATED MODULE: ./src/components/menu-item/index.js


/* istanbul ignore next */
menu_item.install = function (Vue) {
  Vue.component(menu_item.name, menu_item)
}

/* harmony default export */ var components_menu_item = (menu_item);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/menu-group.vue?vue&type=template&id=5dae751e&
var menu_groupvue_type_template_id_5dae751e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:[_vm.prefixCls + '-item-group']},[_c('div',{class:[_vm.prefixCls + '-item-group-title'],style:(_vm.groupStyle)},[_vm._v(_vm._s(_vm.title))]),_c('ul',[_vm._t("default")],2)])}
var menu_groupvue_type_template_id_5dae751e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/menu/menu-group.vue?vue&type=template&id=5dae751e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/menu-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



const menu_groupvue_type_script_lang_js_prefixCls = 'bin-menu'

/* harmony default export */ var menu_groupvue_type_script_lang_js_ = ({
  name: 'BMenuGroup',
  mixins: [menu_mixin],
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      prefixCls: menu_groupvue_type_script_lang_js_prefixCls
    }
  },
  computed: {
    groupStyle () {
      return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
        paddingLeft: 43 + (this.parentSubmenuNum - 1) * 28 + 'px'
      } : {}
    }
  }
});

// CONCATENATED MODULE: ./src/components/menu/menu-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_menu_groupvue_type_script_lang_js_ = (menu_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/menu/menu-group.vue





/* normalize component */

var menu_group_component = normalizeComponent(
  menu_menu_groupvue_type_script_lang_js_,
  menu_groupvue_type_template_id_5dae751e_render,
  menu_groupvue_type_template_id_5dae751e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var menu_group = (menu_group_component.exports);
// CONCATENATED MODULE: ./src/components/menu-group/index.js


/* istanbul ignore next */
menu_group.install = function (Vue) {
  Vue.component(menu_group.name, menu_group)
}

/* harmony default export */ var components_menu_group = (menu_group);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/upload/upload.vue?vue&type=template&id=e6470e58&
var uploadvue_type_template_id_e6470e58_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.prefixCls]},[_c('div',{class:_vm.classes,on:{"click":_vm.handleClick,"drop":function($event){$event.preventDefault();return _vm.onDrop($event)},"paste":_vm.handlePaste,"dragover":function($event){$event.preventDefault();_vm.dragOver = true},"dragleave":function($event){$event.preventDefault();_vm.dragOver = false}}},[_c('input',{ref:"input",class:[_vm.prefixCls + '-input'],attrs:{"type":"file","multiple":_vm.multiple,"accept":_vm.accept},on:{"change":_vm.handleChange}}),_vm._t("default",[_c('b-button',{attrs:{"icon":"ios-cloud-upload"}},[_vm._v(" 点击上传")])])],2),_vm._t("tip"),(_vm.showUploadList)?_c('upload-list',{attrs:{"files":_vm.fileList},on:{"on-file-remove":_vm.handleRemove,"on-file-preview":_vm.handlePreview}}):_vm._e()],2)}
var uploadvue_type_template_id_e6470e58_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/upload/upload.vue?vue&type=template&id=e6470e58&

// CONCATENATED MODULE: ./src/components/upload/ajax.js
// https://github.com/ElemeFE/element/blob/dev/packages/upload/src/ajax.js

function getError (action, option, xhr) {
  const msg = `fail to post ${action} ${xhr.status}`
  const err = new Error(msg)
  err.status = xhr.status
  err.method = 'post'
  err.url = action
  return err
}

function getBody (xhr) {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }

  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

function upload (option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return
  }

  const xhr = new XMLHttpRequest()
  const action = option.action

  if (xhr.upload) {
    xhr.upload.onprogress = function progress (e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100
      }
      option.onProgress(e)
    }
  }

  const formData = new FormData()

  if (option.data) {
    Object.keys(option.data).map(key => {
      formData.append(key, option.data[key])
    })
  }

  formData.append(option.filename, option.file)

  xhr.onerror = function error (e) {
    option.onError(e)
  }

  xhr.onload = function onload () {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr), getBody(xhr))
    }

    option.onSuccess(getBody(xhr))
  }

  xhr.open('post', action, true)

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true
  }

  const headers = option.headers || {}

  // if (headers['X-Requested-With'] !== null) {
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  // }

  for (let item in headers) {
    if (headers.hasOwnProperty(item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item])
    }
  }
  xhr.send(formData)
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/upload/upload-list.vue?vue&type=template&id=4c049b5e&
var upload_listvue_type_template_id_4c049b5e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:[_vm.prefixCls + '-list']},_vm._l((_vm.files),function(file,index){return _c('li',{key:index,class:_vm.fileCls(file),on:{"click":function($event){return _vm.handleClick(file)}}},[_c('span',{on:{"click":function($event){return _vm.handlePreview(file)}}},[_c('b-icon',{attrs:{"name":_vm.format(file)}}),_vm._v(" "+_vm._s(file.name)+"\n    ")],1),_c('b-icon',{directives:[{name:"show",rawName:"v-show",value:(file.status === 'finished'),expression:"file.status === 'finished'"}],class:[_vm.prefixCls + '-list-remove'],attrs:{"name":"ios-close"},nativeOn:{"click":function($event){return _vm.handleRemove(file)}}}),_c('transition',{attrs:{"name":"fade"}},[(file.showProgress)?_c('b-progress',{attrs:{"stroke-width":2,"percent":_vm.parsePercentage(file.percentage),"status":file.status === 'finished' && file.showProgress ? 'success' : null}}):_vm._e()],1)],1)}),0)}
var upload_listvue_type_template_id_4c049b5e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/upload/upload-list.vue?vue&type=template&id=4c049b5e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/upload/upload-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const upload_listvue_type_script_lang_js_prefixCls = 'bin-upload'

/* harmony default export */ var upload_listvue_type_script_lang_js_ = ({
  name: 'UploadList',
  components: { BProgress: progress },
  props: {
    files: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      prefixCls: upload_listvue_type_script_lang_js_prefixCls
    }
  },
  methods: {
    fileCls (file) {
      return [
        `${upload_listvue_type_script_lang_js_prefixCls}-list-file`,
        {
          [`${upload_listvue_type_script_lang_js_prefixCls}-list-file-finish`]: file.status === 'finished'
        }
      ]
    },
    handleClick (file) {
      this.$emit('on-file-click', file)
    },
    handlePreview (file) {
      this.$emit('on-file-preview', file)
    },
    handleRemove (file) {
      this.$emit('on-file-remove', file)
    },
    format (file) {
      const format = file.name.split('.').pop().toLocaleLowerCase() || ''
      let type = 'ios-document-outline'

      if (['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'].indexOf(format) > -1) {
        type = 'ios-image'
      }
      if (['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'].indexOf(format) > -1) {
        type = 'ios-film'
      }
      if (['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'].indexOf(format) > -1) {
        type = 'ios-musical-notes'
      }
      if (['doc', 'txt', 'docx', 'pages', 'epub', 'pdf'].indexOf(format) > -1) {
        type = 'ios-document'
      }
      if (['numbers', 'csv', 'xls', 'xlsx'].indexOf(format) > -1) {
        type = 'ios-stats'
      }
      if (['keynote', 'ppt', 'pptx'].indexOf(format) > -1) {
        type = 'ios-videocam'
      }

      return type
    },
    parsePercentage (val) {
      return parseInt(val, 10)
    }
  }
});

// CONCATENATED MODULE: ./src/components/upload/upload-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var upload_upload_listvue_type_script_lang_js_ = (upload_listvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/upload/upload-list.vue





/* normalize component */

var upload_list_component = normalizeComponent(
  upload_upload_listvue_type_script_lang_js_,
  upload_listvue_type_template_id_4c049b5e_render,
  upload_listvue_type_template_id_4c049b5e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var upload_list = (upload_list_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/upload/upload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const uploadvue_type_script_lang_js_prefixCls = 'bin-upload'
/* harmony default export */ var uploadvue_type_script_lang_js_ = ({
  name: 'BUpload',
  mixins: [emitter],
  components: { UploadList: upload_list },
  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default () {
        return {}
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    },
    name: {
      type: String,
      default: 'file'
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    showUploadList: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['select', 'drag'])
      },
      default: 'select'
    },
    format: {
      type: Array,
      default () {
        return []
      }
    },
    accept: {
      type: String
    },
    maxSize: {
      type: Number
    },
    beforeUpload: Function,
    onProgress: {
      type: Function,
      default () {
        return {}
      }
    },
    onSuccess: {
      type: Function,
      default () {
        return {}
      }
    },
    onError: {
      type: Function,
      default () {
        return {}
      }
    },
    onRemove: {
      type: Function,
      default () {
        return {}
      }
    },
    onPreview: {
      type: Function,
      default () {
        return {}
      }
    },
    onExceededSize: {
      type: Function,
      default () {
        return {}
      }
    },
    onFormatError: {
      type: Function,
      default () {
        return {}
      }
    },
    defaultFileList: {
      type: Array,
      default () {
        return []
      }
    },
    paste: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls: uploadvue_type_script_lang_js_prefixCls,
      dragOver: false,
      fileList: [],
      tempIndex: 1
    }
  },
  computed: {
    classes () {
      return [
        `${uploadvue_type_script_lang_js_prefixCls}`,
        {
          [`${uploadvue_type_script_lang_js_prefixCls}-select`]: this.type === 'select',
          [`${uploadvue_type_script_lang_js_prefixCls}-drag`]: this.type === 'drag',
          [`${uploadvue_type_script_lang_js_prefixCls}-dragOver`]: this.type === 'drag' && this.dragOver
        }
      ]
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.$refs.input.click()
    },
    handleChange (e) {
      const files = e.target.files

      if (!files) {
        return
      }
      this.uploadFiles(files)
      this.$refs.input.value = null
    },
    onDrop (e) {
      this.dragOver = false
      if (this.disabled) return
      this.uploadFiles(e.dataTransfer.files)
    },
    handlePaste (e) {
      if (this.disabled) return
      if (this.paste) {
        this.uploadFiles(e.clipboardData.files)
      }
    },
    uploadFiles (files) {
      let postFiles = Array.prototype.slice.call(files)
      if (!this.multiple) postFiles = postFiles.slice(0, 1)

      if (postFiles.length === 0) return

      postFiles.forEach(file => {
        this.upload(file)
      })
    },
    upload (file) {
      if (!this.beforeUpload) {
        return this.post(file)
      }

      const before = this.beforeUpload(file)
      if (before && before.then) {
        before.then(processedFile => {
          if (Object.prototype.toString.call(processedFile) === '[object File]') {
            this.post(processedFile)
          } else {
            this.post(file)
          }
        }, () => {
          // this.$emit('cancel', file);
        })
      } else if (before !== false) {
        this.post(file)
      } else {
        // this.$emit('cancel', file);
      }
    },
    post (file) {
      // check format
      if (this.format.length) {
        const fileFormat = file.name.split('.').pop().toLocaleLowerCase()
        const checked = this.format.some(item => item.toLocaleLowerCase() === fileFormat)
        if (!checked) {
          this.onFormatError(file, this.fileList)
          return false
        }
      }

      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.onExceededSize(file, this.fileList)
          return false
        }
      }

      this.handleStart(file)
      let formData = new FormData()
      formData.append(this.name, file)

      upload({
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: file,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.handleProgress(e, file)
        },
        onSuccess: res => {
          this.handleSuccess(res, file)
        },
        onError: (err, response) => {
          this.handleError(err, response, file)
        }
      })
    },
    handleStart (file) {
      file.uid = Date.now() + this.tempIndex++
      const _file = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true
      }

      this.fileList.push(_file)
    },
    getFile (file) {
      const fileList = this.fileList
      let target
      fileList.every(item => {
        target = file.uid === item.uid ? item : null
        return !target
      })
      return target
    },
    handleProgress (e, file) {
      const _file = this.getFile(file)
      this.onProgress(e, _file, this.fileList)
      _file.percentage = e.percent || 0
    },
    handleSuccess (res, file) {
      const _file = this.getFile(file)

      if (_file) {
        _file.status = 'finished'
        _file.response = res

        this.onSuccess(res, _file, this.fileList)
        this.dispatch('BFormItem', 'on-form-change', _file)

        setTimeout(() => {
          _file.showProgress = false
        }, 1000)
      }
    },
    handleError (err, response, file) {
      const _file = this.getFile(file)
      const fileList = this.fileList

      _file.status = 'fail'

      fileList.splice(fileList.indexOf(_file), 1)

      this.onError(err, response, file)
    },
    handleRemove (file) {
      const fileList = this.fileList
      fileList.splice(fileList.indexOf(file), 1)
      this.onRemove(file, fileList)
    },
    handlePreview (file) {
      if (file.status === 'finished') {
        this.onPreview(file)
      }
    },
    clearFiles () {
      this.fileList = []
    }
  },
  watch: {
    defaultFileList: {
      immediate: true,
      handler (fileList) {
        this.fileList = fileList.map(item => {
          item.status = 'finished'
          item.percentage = 100
          item.uid = Date.now() + this.tempIndex++
          return item
        })
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/upload/upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var upload_uploadvue_type_script_lang_js_ = (uploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/upload/upload.vue





/* normalize component */

var upload_component = normalizeComponent(
  upload_uploadvue_type_script_lang_js_,
  uploadvue_type_template_id_e6470e58_render,
  uploadvue_type_template_id_e6470e58_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var upload_upload = (upload_component.exports);
// CONCATENATED MODULE: ./src/components/upload/index.js


/* istanbul ignore next */
upload_upload.install = function (Vue) {
  Vue.component(upload_upload.name, upload_upload)
}

/* harmony default export */ var components_upload = (upload_upload);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/picker.vue?vue&type=template&id=4aa26f11&
var pickervue_type_template_id_4aa26f11_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.handleClose),expression:"handleClose"}],class:_vm.wrapperClasses},[_c('div',{ref:"reference",class:[_vm.prefixCls + '-rel']},[_vm._t("default",[_c('b-input',{key:_vm.forceInputRerender,ref:"input",class:[_vm.prefixCls + '-editor'],attrs:{"element-id":_vm.elementId,"readonly":!_vm.editable || _vm.readonly,"disabled":_vm.disabled,"size":_vm.size,"placeholder":_vm.placeholder,"value":_vm.visualValue,"name":_vm.name},on:{"on-input-change":_vm.handleInputChange,"on-focus":_vm.handleFocus,"on-blur":_vm.handleBlur},nativeOn:{"click":function($event){return _vm.handleFocus($event)},"keydown":function($event){return _vm.handleKeydown($event)},"mouseenter":function($event){return _vm.handleInputMouseenter($event)},"mouseleave":function($event){return _vm.handleInputMouseleave($event)}}},[_c('b-icon',{attrs:{"slot":"suffix","name":_vm.arrowType},nativeOn:{"click":function($event){return _vm.handleIconClick($event)}},slot:"suffix"})],1)])],2),_c('transition',{attrs:{"name":"zoom-in-top"}},[_c('drop',{directives:[{name:"show",rawName:"v-show",value:(_vm.opened),expression:"opened"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"drop",class:( _obj = {}, _obj[_vm.prefixCls + '-transfer'] = _vm.transfer, _obj ),attrs:{"placement":_vm.placement,"data-transfer":_vm.transfer,"transfer":_vm.transfer},nativeOn:{"click":function($event){return _vm.handleTransferClick($event)}}},[_c('div',[_c(_vm.panel,_vm._b({ref:"pickerPanel",tag:"component",attrs:{"visible":_vm.visible,"showTime":_vm.type === 'datetime' || _vm.type === 'datetimerange',"confirm":_vm.isConfirm,"selectionMode":_vm.selectionMode,"steps":_vm.steps,"format":_vm.format,"value":_vm.internalValue,"start-date":_vm.startDate,"split-panels":_vm.splitPanels,"show-week-numbers":_vm.showWeekNumbers,"picker-type":_vm.type,"multiple":_vm.multiple,"focused-date":_vm.focusedDate,"time-picker-options":_vm.timePickerOptions},on:{"on-pick":_vm.onPick,"on-pick-clear":_vm.handleClear,"on-pick-success":_vm.onPickSuccess,"on-pick-click":function($event){_vm.disableClickOutSide = true},"on-selection-mode-change":_vm.onSelectionModeChange}},'component',_vm.ownPickerProps,false))],1)])],1)],1)}
var pickervue_type_template_id_4aa26f11_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/picker.vue?vue&type=template&id=4aa26f11&

// EXTERNAL MODULE: ./src/components/date-picker/util/date.js
var util_date = __webpack_require__("d7d3");
var date_default = /*#__PURE__*/__webpack_require__.n(util_date);

// CONCATENATED MODULE: ./src/components/date-picker/util/util.js


const toDate = function (date) {
  let _date = new Date(date)
  // IE patch start (#1422)
  if (isNaN(_date.getTime()) && typeof date === 'string') {
    _date = date.split('-').map(Number)
    _date[1] += 1
    _date = new Date(..._date)
  }
  // IE patch end

  if (isNaN(_date.getTime())) return null
  return _date
}

const clearHours = function (time) {
  const cloneDate = new Date(time)
  cloneDate.setHours(0, 0, 0, 0)
  return cloneDate.getTime()
}

const isInRange = (time, a, b) => {
  if (!a || !b) return false
  const [start, end] = [a, b].sort()
  return time >= start && time <= end
}

const formatDate = function (date, format) {
  date = toDate(date)
  if (!date) return ''
  return date_default.a.format(date, format || 'yyyy-MM-dd')
}

const parseDate = function (string, format) {
  return date_default.a.parse(string, format || 'yyyy-MM-dd')
}

const getDayCountOfMonth = function (year, month) {
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = function (date) {
  const temp = new Date(date.getTime())
  temp.setDate(1)
  return temp.getDay()
}

const siblingMonth = function (src, diff) {
  const temp = new Date(src) // lets copy it so we don't change the original
  const newMonth = temp.getMonth() + diff
  const newMonthDayCount = getDayCountOfMonth(temp.getFullYear(), newMonth)
  if (newMonthDayCount < temp.getDate()) {
    temp.setDate(newMonthDayCount)
  }
  temp.setMonth(newMonth)

  return temp
}

const prevMonth = function (src) {
  return siblingMonth(src, -1)
}

const nextMonth = function (src) {
  return siblingMonth(src, 1)
}

const initTimeDate = function () {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  return date
}

const formatDateLabels = (function () {
  /*
    Formats:
    yyyy - 4 digit year
    m - month, numeric, 1 - 12
    mm - month, numeric, 01 - 12
    mmm - month, 3 letters, as in `toLocaleDateString`
    Mmm - month, 3 letters, capitalize the return from `toLocaleDateString`
    mmmm - month, full name, as in `toLocaleDateString`
    Mmmm - month, full name, capitalize the return from `toLocaleDateString`
  */

  const formats = {
    yyyy: date => date.getFullYear(),
    m: date => date.getMonth() + 1,
    mm: date => ('0' + (date.getMonth() + 1)).slice(-2),
    mmm: (date, locale) => {
      const monthName = date.toLocaleDateString(locale, {
        month: 'long'
      })
      return monthName.slice(0, 3)
    },
    Mmm: (date, locale) => {
      const monthName = date.toLocaleDateString(locale, {
        month: 'long'
      })
      return (monthName[0].toUpperCase() + monthName.slice(1).toLowerCase()).slice(0, 3)
    },
    mmmm: (date, locale) =>
      date.toLocaleDateString(locale, {
        month: 'long'
      }),
    Mmmm: (date, locale) => {
      const monthName = date.toLocaleDateString(locale, {
        month: 'long'
      })
      return monthName[0].toUpperCase() + monthName.slice(1).toLowerCase()
    }
  }
  const formatRegex = new RegExp(['yyyy', 'Mmmm', 'mmmm', 'Mmm', 'mmm', 'mm', 'm'].join('|'), 'g')

  return function (locale, format, date) {
    const componetsRegex = /(\[[^\]]+\])([^\[\]]+)(\[[^\]]+\])/
    const components = format.match(componetsRegex).slice(1)
    const separator = components[1]
    const labels = [components[0], components[2]].map(component => {
      const label = component.replace(/\[[^\]]+\]/, str => {
        return str.slice(1, -1).replace(formatRegex, match => formats[match](date, locale))
      })
      return {
        label: label,
        type: component.indexOf('yy') !== -1 ? 'year' : 'month'
      }
    })
    return {
      separator: separator,
      labels: labels
    }
  }
})()

// Parsers and Formaters
const DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  year: 'yyyy',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  datetimerange: 'yyyy-MM-dd HH:mm:ss'
}

// export const RANGE_SEPARATOR = ' - ';  // use picker.vue prop separator

const DATE_FORMATTER = function (value, format) {
  return formatDate(value, format)
}
const DATE_PARSER = function (text, format) {
  return parseDate(text, format)
}
/**
 * @return {string}
 */
const RANGE_FORMATTER = function (value, format, RANGE_SEPARATOR) {
  if (Array.isArray(value) && value.length === 2) {
    const start = value[0]
    const end = value[1]

    if (start && end) {
      return formatDate(start, format) + RANGE_SEPARATOR + formatDate(end, format)
    }
  } else if (!Array.isArray(value) && value instanceof Date) {
    return formatDate(value, format)
  }
  return ''
}
const RANGE_PARSER = function (text, format, RANGE_SEPARATOR) {
  const array = Array.isArray(text) ? text : text.split(RANGE_SEPARATOR)
  if (array.length === 2) {
    const range1 = array[0]
    const range2 = array[1]

    return [
      range1 instanceof Date ? range1 : parseDate(range1, format),
      range2 instanceof Date ? range2 : parseDate(range2, format)
    ]
  }
  return []
}

const TYPE_VALUE_RESOLVER_MAP = {
  default: {
    formatter (value) {
      if (!value) return ''
      return '' + value
    },
    parser (text) {
      if (text === undefined || text === '') return null
      return text
    }
  },
  date: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  datetime: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  daterange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  datetimerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  timerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  time: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  month: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  year: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  multiple: {
    formatter: (value, format) => {
      return value.filter(Boolean).map(date => formatDate(date, format)).join(',')
    },
    parser: (value, format) => {
      const values = typeof value === 'string' ? value.split(',') : value
      return values.map(value => {
        if (value instanceof Date) return value
        if (typeof value === 'string') value = value.trim()
        else if (typeof value !== 'number' && !value) value = ''
        return parseDate(value, format)
      })
    }
  },
  number: {
    formatter (value) {
      if (!value) return ''
      return '' + value
    },
    parser (text) {
      let result = Number(text)

      if (!isNaN(text)) {
        return result
      } else {
        return null
      }
    }
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/picker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










const pickervue_type_script_lang_js_prefixCls = 'bin-date-picker'
const pickerPrefixCls = 'bin-picker'

const isEmptyArray = val => val.reduce((isEmpty, str) => (isEmpty && !str) || (typeof str === 'string' && str.trim() === ''), true)
const keyValueMapper = {
  40: 'up',
  39: 'right',
  38: 'down',
  37: 'left'
}

const mapPossibleValues = (key, horizontal, vertical) => {
  if (key === 'left') return horizontal * -1
  if (key === 'right') return horizontal * 1
  if (key === 'up') return vertical * 1
  if (key === 'down') return vertical * -1
}

const pulseElement = (el) => {
  const pulseClass = 'bin-date-picker-btn-pulse'
  el.classList.add(pulseClass)
  setTimeout(() => el.classList.remove(pulseClass), 200)
}

const extractTime = date => {
  if (!date) return [0, 0, 0]
  return [
    date.getHours(), date.getMinutes(), date.getSeconds()
  ]
}

/* harmony default export */ var pickervue_type_script_lang_js_ = ({
  mixins: [emitter],
  components: { BInput: input, Drop: drop, BIcon: icon },
  directives: { ClickOutside: clickoutside, TransferDom: transfer_dom },
  props: {
    format: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    timePickerOptions: {
      default: () => ({}),
      type: Object
    },
    splitPanels: {
      type: Boolean,
      default: false
    },
    showWeekNumbers: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: Date
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    placeholder: {
      type: String,
      default: ''
    },
    placement: {
      validator (value) {
        return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'])
      },
      default: 'bottom-start'
    },
    transfer: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    },
    steps: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Date, String, Array]
    },
    options: {
      type: Object,
      default: () => ({})
    },
    separator: {
      type: String,
      default: ' - '
    }
  },
  data () {
    const isRange = this.type.includes('range')
    const emptyArray = isRange ? [null, null] : [null]
    const initialValue = isEmptyArray((isRange ? this.value : [this.value]) || []) ? emptyArray : this.parseDate(this.value)
    const focusedTime = initialValue.map(extractTime)

    return {
      prefixCls: pickervue_type_script_lang_js_prefixCls,
      showClose: false,
      visible: false,
      internalValue: initialValue,
      disableClickOutSide: false, // fixed when click a date,trigger clickoutside to close picker
      disableCloseUnderTransfer: false, // transfer 模式下，点击Drop也会触发关闭,
      selectionMode: this.onSelectionModeChange(this.type),
      forceInputRerender: 1,
      isFocused: false,
      focusedDate: initialValue[0] || this.startDate || new Date(),
      focusedTime: {
        column: 0, // which column inside the picker
        picker: 0, // which picker
        time: focusedTime, // the values array into [hh, mm, ss],
        active: false
      },
      internalFocus: false
    }
  },
  computed: {
    wrapperClasses () {
      return [pickervue_type_script_lang_js_prefixCls, {
        [pickervue_type_script_lang_js_prefixCls + '-focused']: this.isFocused
      }]
    },
    publicVModelValue () {
      if (this.multiple) {
        return this.internalValue.slice()
      } else {
        const isRange = this.type.includes('range')
        let val = this.internalValue.map(date => date instanceof Date ? new Date(date) : (date || ''))

        if (this.type.match(/^time/)) val = val.map(this.formatDate)
        return (isRange || this.multiple) ? val : val[0]
      }
    },
    publicStringValue () {
      const { formatDate, publicVModelValue, type } = this
      if (type.match(/^time/)) return publicVModelValue
      if (this.multiple) return formatDate(publicVModelValue)
      return Array.isArray(publicVModelValue) ? publicVModelValue.map(formatDate) : formatDate(publicVModelValue)
    },
    opened () {
      return this.open === null ? this.visible : this.open
    },
    transition () {
      const bottomPlaced = this.placement.match(/^bottom/)
      return bottomPlaced ? 'slide-up' : 'slide-down'
    },
    visualValue () {
      return this.formatDate(this.internalValue)
    },
    isConfirm () {
      return this.confirm || this.type === 'datetime' || this.type === 'datetimerange' || this.multiple
    },
    arrowType () {
      let type = ''
      if (this.type === 'time' || this.type === 'timerange') {
        type = 'ios-timer'
      } else {
        type = 'ios-calendar'
      }
      if (this.showClose) type = 'ios-close-circle'
      return type
    }
  },
  methods: {
    onSelectionModeChange (type) {
      if (type.match(/^date/)) type = 'date'
      this.selectionMode = oneOf(type, ['year', 'month', 'date', 'time']) && type
      return this.selectionMode
    },
    // 开启 transfer 时，点击 Drop 即会关闭，这里不让其关闭
    handleTransferClick () {
      if (this.transfer) this.disableCloseUnderTransfer = true
    },
    handleClose (e) {
      if (this.disableCloseUnderTransfer) {
        this.disableCloseUnderTransfer = false
        return false
      }

      if (e && e.type === 'mousedown' && this.visible) {
        e.preventDefault()
        e.stopPropagation()
        return
      }

      if (this.visible) {
        const pickerPanel = this.$refs.pickerPanel && this.$refs.pickerPanel.$el
        if (e && pickerPanel && pickerPanel.contains(e.target)) return // its a click inside own component, lets ignore it.

        this.visible = false
        e && e.preventDefault()
        e && e.stopPropagation()
        this.$emit('on-clickoutside', e)
        return
      }

      this.isFocused = false
      this.disableClickOutSide = false
    },
    handleFocus (e) {
      if (this.readonly) return
      this.isFocused = true
      if (e && e.type === 'focus') return // just focus, don't open yet
      if (!this.disabled) {
        this.visible = true
      }
    },
    handleBlur (e) {
      if (this.internalFocus) {
        this.internalFocus = false
        return
      }
      if (this.visible) {
        e.preventDefault()
        return
      }

      this.isFocused = false
      this.onSelectionModeChange(this.type)
      this.internalValue = this.internalValue.slice() // trigger panel watchers to reset views
      this.reset()
      this.$refs.pickerPanel.onToggleVisibility(false)
    },
    handleKeydown (e) {
      const keyCode = e.keyCode

      // handle "tab" key
      if (keyCode === 9) {
        if (this.visible) {
          e.stopPropagation()
          e.preventDefault()

          if (this.isConfirm) {
            const selector = `.${pickerPrefixCls}-confirm > *`
            const tabbable = this.$refs.drop.$el.querySelectorAll(selector)
            this.internalFocus = true
            const element = [...tabbable][e.shiftKey ? 'pop' : 'shift']()
            element.focus()
          } else {
            this.handleClose()
          }
        } else {
          this.focused = false
        }
      }

      // open the panel
      const arrows = [37, 38, 39, 40]
      if (!this.visible && arrows.includes(keyCode)) {
        this.visible = true
        return
      }

      // close on "esc" key
      if (keyCode === 27) {
        if (this.visible) {
          e.stopPropagation()
          this.handleClose()
        }
      }

      // select date, "Enter" key
      if (keyCode === 13) {
        const timePickers = findComponentsDownward(this, 'TimeSpinner')
        if (timePickers.length > 0) {
          const columnsPerPicker = timePickers[0].showSeconds ? 3 : 2
          const pickerIndex = Math.floor(this.focusedTime.column / columnsPerPicker)
          const value = this.focusedTime.time[pickerIndex]

          timePickers[pickerIndex].chooseValue(value)
          return
        }

        if (this.type.match(/range/)) {
          this.$refs.pickerPanel.handleRangePick(this.focusedDate, 'date')
        } else {
          const panels = findComponentsDownward(this, 'PanelTable')
          const compareDate = (d) => {
            const sliceIndex = ['year', 'month', 'date'].indexOf((this.type)) + 1
            return [d.getFullYear(), d.getMonth(), d.getDate()].slice(0, sliceIndex).join('-')
          }
          const dateIsValid = panels.find(({ cells }) => {
            return cells.find(({ date, disabled }) => compareDate(date) === compareDate(this.focusedDate) && !disabled)
          })
          if (dateIsValid) this.onPick(this.focusedDate, false, 'date')
        }
      }

      if (!arrows.includes(keyCode)) return // ignore rest of keys

      // navigate times and dates
      if (this.focusedTime.active) e.preventDefault() // to prevent cursor from moving
      this.navigateDatePanel(keyValueMapper[keyCode], e.shiftKey)
    },
    reset () {
      this.$refs.pickerPanel.reset && this.$refs.pickerPanel.reset()
    },
    navigateTimePanel (direction) {
      this.focusedTime.active = true
      const horizontal = direction.match(/left|right/)
      const vertical = direction.match(/up|down/)
      const timePickers = findComponentsDownward(this, 'TimeSpinner')

      const maxNrOfColumns = (timePickers[0].showSeconds ? 3 : 2) * timePickers.length
      const column = (currentColumn => {
        const incremented = currentColumn + (horizontal ? (direction === 'left' ? -1 : 1) : 0)
        return (incremented + maxNrOfColumns) % maxNrOfColumns
      })(this.focusedTime.column)

      const columnsPerPicker = maxNrOfColumns / timePickers.length
      const pickerIndex = Math.floor(column / columnsPerPicker)
      const col = column % columnsPerPicker
      if (horizontal) {
        const time = this.internalValue.map(extractTime)
        this.focusedTime = {
          ...this.focusedTime,
          column: column,
          time: time
        }
        timePickers.forEach((instance, i) => {
          if (i === pickerIndex) instance.updateFocusedTime(col, time[pickerIndex])
          else instance.updateFocusedTime(-1, instance.focusedTime)
        })
      }
      if (vertical) {
        const increment = direction === 'up' ? 1 : -1
        const timeParts = ['hours', 'minutes', 'seconds']

        const pickerPossibleValues = timePickers[pickerIndex][`${timeParts[col]}List`]
        const nextIndex = pickerPossibleValues.findIndex(({ text }) => this.focusedTime.time[pickerIndex][col] === text) + increment
        const nextValue = pickerPossibleValues[nextIndex % pickerPossibleValues.length].text
        const times = this.focusedTime.time.map((time, i) => {
          if (i !== pickerIndex) return time
          time[col] = nextValue
          return time
        })
        this.focusedTime = {
          ...this.focusedTime,
          time: times
        }

        timePickers.forEach((instance, i) => {
          if (i === pickerIndex) instance.updateFocusedTime(col, times[i])
          else instance.updateFocusedTime(-1, instance.focusedTime)
        })
      }
    },
    navigateDatePanel (direction, shift) {
      const timePickers = findComponentsDownward(this, 'TimeSpinner')
      if (timePickers.length > 0) {
        // we are in TimePicker mode
        this.navigateTimePanel(direction, shift, timePickers)
        return
      }

      if (shift) {
        if (this.type === 'year') {
          this.focusedDate = new Date(
            this.focusedDate.getFullYear() + mapPossibleValues(direction, 0, 10),
            this.focusedDate.getMonth(),
            this.focusedDate.getDate()
          )
        } else {
          this.focusedDate = new Date(
            this.focusedDate.getFullYear() + mapPossibleValues(direction, 0, 1),
            this.focusedDate.getMonth() + mapPossibleValues(direction, 1, 0),
            this.focusedDate.getDate()
          )
        }

        const position = direction.match(/left|down/) ? 'prev' : 'next'
        const double = direction.match(/up|down/) ? '-double' : ''

        // pulse button
        const button = this.$refs.drop.$el.querySelector(`.bin-date-picker-${position}-btn-arrow${double}`)
        if (button) pulseElement(button)
        return
      }

      const initialDate = this.focusedDate || (this.internalValue && this.internalValue[0]) || new Date()
      const focusedDate = new Date(initialDate)

      if (this.type.match(/^date/)) {
        const lastOfMonth = getDayCountOfMonth(initialDate.getFullYear(), initialDate.getMonth())
        const startDay = initialDate.getDate()
        const nextDay = focusedDate.getDate() + mapPossibleValues(direction, 1, 7)
        if (nextDay < 1) {
          if (direction.match(/left|right/)) {
            focusedDate.setMonth(focusedDate.getMonth() + 1)
            focusedDate.setDate(nextDay)
          } else {
            focusedDate.setDate(startDay + Math.floor((lastOfMonth - startDay) / 7) * 7)
          }
        } else if (nextDay > lastOfMonth) {
          if (direction.match(/left|right/)) {
            focusedDate.setMonth(focusedDate.getMonth() - 1)
            focusedDate.setDate(nextDay)
          } else {
            focusedDate.setDate(startDay % 7)
          }
        } else {
          focusedDate.setDate(nextDay)
        }
      }
      if (this.type.match(/^month/)) {
        focusedDate.setMonth(focusedDate.getMonth() + mapPossibleValues(direction, 1, 3))
      }
      if (this.type.match(/^year/)) {
        focusedDate.setFullYear(focusedDate.getFullYear() + mapPossibleValues(direction, 1, 3))
      }
      this.focusedDate = focusedDate
    },
    handleInputChange (event) {
      const isArrayValue = this.type.includes('range') || this.multiple
      const oldValue = this.visualValue
      const newValue = event.target.value
      const newDate = this.parseDate(newValue)
      const disabledDateFn =
        this.options &&
        typeof this.options.disabledDate === 'function' &&
        this.options.disabledDate
      const valueToTest = isArrayValue ? newDate : newDate[0]
      const isDisabled = disabledDateFn && disabledDateFn(valueToTest)
      const isValidDate = newDate.reduce((valid, date) => valid && date instanceof Date, true)

      if (newValue !== oldValue && !isDisabled && isValidDate) {
        this.emitChange(this.type)
        this.internalValue = newDate
      } else {
        this.forceInputRerender++
      }
    },
    handleInputMouseenter () {
      if (this.readonly || this.disabled) return
      if (this.visualValue && this.clearable) {
        this.showClose = true
      }
    },
    handleInputMouseleave () {
      this.showClose = false
    },
    handleIconClick (e) {
      if (this.showClose) {
        if (e) e.stopPropagation()
        this.handleClear()
      } else if (!this.disabled) {
        this.handleFocus()
      }
    },
    handleClear () {
      this.visible = false
      this.internalValue = this.internalValue.map(() => null)
      this.$emit('on-clear')
      this.dispatch('BFormItem', 'on-form-change', '')
      this.emitChange(this.type)
      this.reset()

      setTimeout(
        () => this.onSelectionModeChange(this.type),
        500 // delay to improve dropdown close visual effect
      )
    },
    emitChange (type) {
      this.$nextTick(() => {
        this.$emit('on-change', this.publicStringValue, type)
        this.dispatch('BFormItem', 'on-form-change', this.publicStringValue)
      })
    },
    parseDate (val) {
      const isRange = this.type.includes('range')
      const type = this.type
      const parser = (
        TYPE_VALUE_RESOLVER_MAP[type] ||
        TYPE_VALUE_RESOLVER_MAP['default']
      ).parser
      const format = this.format || DEFAULT_FORMATS[type]
      const multipleParser = TYPE_VALUE_RESOLVER_MAP['multiple'].parser

      if (val && type === 'time' && !(val instanceof Date)) {
        val = parser(val, format, this.separator)
      } else if (this.multiple && val) {
        val = multipleParser(val, format, this.separator)
      } else if (isRange) {
        if (!val) {
          val = [null, null]
        } else {
          if (typeof val === 'string') {
            val = parser(val, format, this.separator)
          } else if (type === 'timerange') {
            val = parser(val, format, this.separator).map(v => v || '')
          } else {
            const [start, end] = val
            if (start instanceof Date && end instanceof Date) {
              val = val.map(date => new Date(date))
            } else if (typeof start === 'string' && typeof end === 'string') {
              val = parser(val.join(this.separator), format, this.separator)
            } else if (!start || !end) {
              val = [null, null]
            }
          }
        }
      } else if (typeof val === 'string' && type.indexOf('time') !== 0) {
        val = parser(val, format) || null
      }

      return (isRange || this.multiple) ? (val || []) : [val]
    },
    formatDate (value) {
      const format = DEFAULT_FORMATS[this.type]

      if (this.multiple) {
        const formatter = TYPE_VALUE_RESOLVER_MAP.multiple.formatter
        return formatter(value, this.format || format, this.separator)
      } else {
        const { formatter } = (
          TYPE_VALUE_RESOLVER_MAP[this.type] ||
          TYPE_VALUE_RESOLVER_MAP['default']
        )
        return formatter(value, this.format || format, this.separator)
      }
    },
    onPick (dates, visible = false, type) {
      if (this.multiple) {
        const pickedTimeStamp = dates.getTime()
        const indexOfPickedDate = this.internalValue.findIndex(date => date && date.getTime() === pickedTimeStamp)
        const allDates = [...this.internalValue, dates].filter(Boolean)
        const timeStamps = allDates.map(date => date.getTime()).filter((ts, i, arr) => arr.indexOf(ts) === i && i !== indexOfPickedDate) // filter away duplicates
        this.internalValue = timeStamps.map(ts => new Date(ts))
      } else {
        dates = this.parseDate(dates)
        this.internalValue = Array.isArray(dates) ? dates : [dates]
      }

      if (this.internalValue[0]) this.focusedDate = this.internalValue[0]
      this.focusedTime = {
        ...this.focusedTime,
        time: this.internalValue.map(extractTime)
      }

      if (!this.isConfirm) this.onSelectionModeChange(this.type) // reset the selectionMode
      if (!this.isConfirm) this.visible = visible
      this.emitChange(type)
    },
    onPickSuccess () {
      this.visible = false
      this.$emit('on-ok')
      this.focus()
      this.reset()
    },
    focus () {
      this.$refs.input && this.$refs.input.focus()
    },
    updatePopper () {
      this.$refs.drop.update()
    }
  },
  watch: {
    visible (state) {
      if (state === false) {
        this.$refs.drop.destroy()
      }
      this.$refs.drop.update()
      this.$emit('on-open-change', state)
    },
    value (val) {
      this.internalValue = this.parseDate(val)
    },
    open (val) {
      this.visible = val === true
    },
    type (type) {
      this.onSelectionModeChange(type)
    },
    publicVModelValue (now, before) {
      const newValue = JSON.stringify(now)
      const oldValue = JSON.stringify(before)
      const shouldEmitInput = newValue !== oldValue || typeof now !== typeof before
      if (shouldEmitInput) this.$emit('input', now) // to update v-model
    }
  },
  mounted () {
    const initialValue = this.value
    const parsedValue = this.publicVModelValue
    if (typeof initialValue !== typeof parsedValue || JSON.stringify(initialValue) !== JSON.stringify(parsedValue)) {
      this.$emit('input', this.publicVModelValue) // to update v-model
    }
    if (this.open !== null) this.visible = this.open

    // to handle focus from confirm buttons
    this.$on('focus-input', () => this.focus())
    this.$on('update-popper', () => this.updatePopper())
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var date_picker_pickervue_type_script_lang_js_ = (pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/picker.vue





/* normalize component */

var picker_component = normalizeComponent(
  date_picker_pickervue_type_script_lang_js_,
  pickervue_type_template_id_4aa26f11_render,
  pickervue_type_template_id_4aa26f11_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var picker = (picker_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Date/date.vue?vue&type=template&id=16625d44&
var datevue_type_template_id_16625d44_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,on:{"mousedown":function($event){$event.preventDefault();}}},[(_vm.shortcuts.length)?_c('div',{class:[_vm.prefixCls + '-sidebar']},_vm._l((_vm.shortcuts),function(shortcut,index){return _c('div',{key:index,class:[_vm.prefixCls + '-shortcut'],on:{"click":function($event){return _vm.handleShortcutClick(shortcut)}}},[_vm._v(_vm._s(shortcut.text)+"\n    ")])}),0):_vm._e(),_c('div',{class:[_vm.prefixCls + '-body']},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView !== 'time'),expression:"currentView !== 'time'"}],class:[_vm.datePrefixCls + '-header']},[_c('span',{class:_vm.iconBtnCls('prev', '-double'),on:{"click":function($event){return _vm.changeYear(-1)}}},[_c('b-icon',{attrs:{"name":"ios-arrow-back"}})],1),(_vm.pickerTable === 'date-table')?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],class:_vm.iconBtnCls('prev'),on:{"click":function($event){return _vm.changeMonth(-1)}}},[_c('b-icon',{attrs:{"name":"ios-arrow-back"}})],1):_vm._e(),_c('date-panel-label',{attrs:{"date-panel-label":_vm.datePanelLabel,"current-view":_vm.pickerTable.split('-').shift(),"date-prefix-cls":_vm.datePrefixCls}}),_c('span',{class:_vm.iconBtnCls('next', '-double'),on:{"click":function($event){return _vm.changeYear(+1)}}},[_c('b-icon',{attrs:{"name":"ios-arrow-forward"}})],1),(_vm.pickerTable === 'date-table')?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],class:_vm.iconBtnCls('next'),on:{"click":function($event){return _vm.changeMonth(+1)}}},[_c('b-icon',{attrs:{"name":"ios-arrow-forward"}})],1):_vm._e()],1),_c('div',{class:[_vm.prefixCls + '-content']},[(_vm.currentView !== 'time')?_c(_vm.pickerTable,{ref:"pickerTable",tag:"component",attrs:{"table-date":_vm.panelDate,"show-week-numbers":_vm.showWeekNumbers,"value":_vm.dates,"selection-mode":_vm.selectionMode,"disabled-date":_vm.disabledDate,"focused-date":_vm.focusedDate},on:{"on-pick":_vm.panelPickerHandlers,"on-pick-click":_vm.handlePickClick}}):_vm._e()],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isTime),expression:"isTime"}],class:[_vm.prefixCls + '-content']},[(_vm.currentView === 'time')?_c('time-picker',_vm._b({ref:"timePicker",attrs:{"value":_vm.dates,"format":_vm.format,"time-disabled":_vm.timeDisabled,"disabled-date":_vm.disabledDate,"focused-date":_vm.focusedDate},on:{"on-pick":_vm.handlePick,"on-pick-click":_vm.handlePickClick,"on-pick-clear":_vm.handlePickClear,"on-pick-success":_vm.handlePickSuccess,"on-pick-toggle-time":_vm.handleToggleTime}},'time-picker',_vm.timePickerOptions,false)):_vm._e()],1),(_vm.confirm)?_c('confirm',{attrs:{"show-time":_vm.showTime,"is-time":_vm.isTime},on:{"on-pick-toggle-time":_vm.handleToggleTime,"on-pick-clear":_vm.handlePickClear,"on-pick-success":_vm.handlePickSuccess}}):_vm._e()],1)])}
var datevue_type_template_id_16625d44_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date.vue?vue&type=template&id=16625d44&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/date-table.vue?vue&type=template&id=490119ec&
var date_tablevue_type_template_id_490119ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_c('div',{class:[_vm.prefixCls + '-header']},_vm._l((_vm.headerDays),function(day){return _c('span',{key:day},[_vm._v("\n          "+_vm._s(day)+"\n      ")])}),0),_vm._l((_vm.cells),function(cell,i){return _c('span',{key:String(cell.date) + i,class:_vm.getCellCls(cell),on:{"click":function($event){return _vm.handleClick(cell, $event)},"mouseenter":function($event){return _vm.handleMouseMove(cell)}}},[_c('em',[_vm._v(_vm._s(cell.desc))])])})],2)}
var date_tablevue_type_template_id_490119ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/base/date-table.vue?vue&type=template&id=490119ec&

// EXTERNAL MODULE: ./node_modules/js-calendar/index.js
var js_calendar = __webpack_require__("571b");
var js_calendar_default = /*#__PURE__*/__webpack_require__.n(js_calendar);

// CONCATENATED MODULE: ./src/components/date-picker/base/mixin.js


/* harmony default export */ var base_mixin = ({
  name: 'PanelTable',
  props: {
    tableDate: {
      type: Date,
      required: true
    },
    disabledDate: {
      type: Function
    },
    selectionMode: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      required: true
    },
    rangeState: {
      type: Object,
      default: () => ({
        from: null,
        to: null,
        selecting: false
      })
    },
    focusedDate: {
      type: Date,
      required: true
    }
  },
  computed: {
    dates () {
      const { selectionMode, value, rangeState } = this
      const rangeSelecting = selectionMode === 'range' && rangeState.selecting
      return rangeSelecting ? [rangeState.from] : value
    }
  },
  methods: {
    handleClick (cell) {
      if (cell.disabled || cell.type === 'weekLabel') return
      const newDate = new Date(clearHours(cell.date))

      this.$emit('on-pick', newDate)
      this.$emit('on-pick-click')
    },
    handleMouseMove (cell) {
      if (!this.rangeState.selecting) return
      if (cell.disabled) return
      const newDate = cell.date
      this.$emit('on-change-range', newDate)
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/date-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const date_tablevue_type_script_lang_js_prefixCls = 'bin-date-picker-cells'

/* harmony default export */ var date_tablevue_type_script_lang_js_ = ({
  mixins: [base_mixin],
  props: {
    /* more props in mixin */
    showWeekNumbers: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls: date_tablevue_type_script_lang_js_prefixCls
    }
  },
  computed: {
    classes () {
      return [
        `${date_tablevue_type_script_lang_js_prefixCls}`,
        {
          [`${date_tablevue_type_script_lang_js_prefixCls}-show-week-numbers`]: this.showWeekNumbers
        }
      ]
    },
    calendar () {
      const weekStartDay = 0
      return new js_calendar_default.a.Generator({ onlyDays: !this.showWeekNumbers, weekStart: weekStartDay })
    },
    headerDays () {
      const weekStartDay = 0
      const weeks = {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      }
      const translatedDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(item => {
        return weeks[item]
      })
      const weekDays = translatedDays.splice(weekStartDay, 7 - weekStartDay).concat(translatedDays.splice(0, weekStartDay))
      return this.showWeekNumbers ? [''].concat(weekDays) : weekDays
    },
    cells () {
      const tableYear = this.tableDate.getFullYear()
      const tableMonth = this.tableDate.getMonth()
      const today = clearHours(new Date()) // timestamp of today
      const selectedDays = this.dates.filter(Boolean).map(clearHours) // timestamp of selected days
      const [minDay, maxDay] = this.dates.map(clearHours)
      const rangeStart = this.rangeState.from && clearHours(this.rangeState.from)
      const rangeEnd = this.rangeState.to && clearHours(this.rangeState.to)

      const isRange = this.selectionMode === 'range'
      const disabledTestFn = typeof this.disabledDate === 'function' && this.disabledDate

      return this.calendar(tableYear, tableMonth, (cell) => {
        // normalize date offset from the dates provided by jsCalendar
        if (cell.date instanceof Date) cell.date.setTime(cell.date.getTime() + cell.date.getTimezoneOffset() * 60000)

        const time = cell.date && clearHours(cell.date)
        const dateIsInCurrentMonth = cell.date && tableMonth === cell.date.getMonth()
        return {
          ...cell,
          type: time === today ? 'today' : cell.type,
          selected: dateIsInCurrentMonth && selectedDays.includes(time),
          disabled: (cell.date && disabledTestFn) && disabledTestFn(new Date(time)),
          range: dateIsInCurrentMonth && isRange && isInRange(time, rangeStart, rangeEnd),
          start: dateIsInCurrentMonth && isRange && time === minDay,
          end: dateIsInCurrentMonth && isRange && time === maxDay
        }
      }).cells.slice(this.showWeekNumbers ? 8 : 0)
    }
  },
  methods: {
    getCellCls (cell) {
      return [
        `${date_tablevue_type_script_lang_js_prefixCls}-cell`,
        {
          [`${date_tablevue_type_script_lang_js_prefixCls}-cell-selected`]: cell.selected || cell.start || cell.end,
          [`${date_tablevue_type_script_lang_js_prefixCls}-cell-disabled`]: cell.disabled,
          [`${date_tablevue_type_script_lang_js_prefixCls}-cell-today`]: cell.type === 'today',
          [`${date_tablevue_type_script_lang_js_prefixCls}-cell-prev-month`]: cell.type === 'prevMonth',
          [`${date_tablevue_type_script_lang_js_prefixCls}-cell-next-month`]: cell.type === 'nextMonth',
          [`${date_tablevue_type_script_lang_js_prefixCls}-cell-week-label`]: cell.type === 'weekLabel',
          [`${date_tablevue_type_script_lang_js_prefixCls}-cell-range`]: cell.range && !cell.start && !cell.end,
          [`${date_tablevue_type_script_lang_js_prefixCls}-focused`]: clearHours(cell.date) === clearHours(this.focusedDate)
        }
      ]
    }
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/base/date-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_date_tablevue_type_script_lang_js_ = (date_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/base/date-table.vue





/* normalize component */

var date_table_component = normalizeComponent(
  base_date_tablevue_type_script_lang_js_,
  date_tablevue_type_template_id_490119ec_render,
  date_tablevue_type_template_id_490119ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var date_table = (date_table_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/year-table.vue?vue&type=template&id=363aca8a&
var year_tablevue_type_template_id_363aca8a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},_vm._l((_vm.cells),function(cell,index){return _c('span',{key:index,class:_vm.getCellCls(cell),on:{"click":function($event){return _vm.handleClick(cell)},"mouseenter":function($event){return _vm.handleMouseMove(cell)}}},[_c('em',[_vm._v(_vm._s(cell.date.getFullYear()))])])}),0)}
var year_tablevue_type_template_id_363aca8a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/base/year-table.vue?vue&type=template&id=363aca8a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/year-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//





const year_tablevue_type_script_lang_js_prefixCls = 'bin-date-picker-cells'

/* harmony default export */ var year_tablevue_type_script_lang_js_ = ({
  mixins: [base_mixin],
  computed: {
    classes () {
      return [
        `${year_tablevue_type_script_lang_js_prefixCls}`,
        `${year_tablevue_type_script_lang_js_prefixCls}-year`
      ]
    },
    startYear () {
      return Math.floor(this.tableDate.getFullYear() / 10) * 10
    },
    cells () {
      let cells = []
      const cellTmpl = {
        text: '',
        selected: false,
        disabled: false
      }

      const selectedDays = this.dates.filter(Boolean).map(date => clearHours(new Date(date.getFullYear(), 0, 1)))
      const focusedDate = clearHours(new Date(this.focusedDate.getFullYear(), 0, 1))

      for (let i = 0; i < 10; i++) {
        const cell = deepCopy(cellTmpl)
        cell.date = new Date(this.startYear + i, 0, 1)
        cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(cell.date) && this.selectionMode === 'year'
        const day = clearHours(cell.date)
        cell.selected = selectedDays.includes(day)
        cell.focused = day === focusedDate
        cells.push(cell)
      }

      return cells
    }
  },
  methods: {
    getCellCls (cell) {
      return [
        `${year_tablevue_type_script_lang_js_prefixCls}-cell`,
        {
          [`${year_tablevue_type_script_lang_js_prefixCls}-cell-selected`]: cell.selected,
          [`${year_tablevue_type_script_lang_js_prefixCls}-cell-disabled`]: cell.disabled,
          [`${year_tablevue_type_script_lang_js_prefixCls}-cell-focused`]: cell.focused,
          [`${year_tablevue_type_script_lang_js_prefixCls}-cell-range`]: cell.range && !cell.start && !cell.end
        }
      ]
    }
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/base/year-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_year_tablevue_type_script_lang_js_ = (year_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/base/year-table.vue





/* normalize component */

var year_table_component = normalizeComponent(
  base_year_tablevue_type_script_lang_js_,
  year_tablevue_type_template_id_363aca8a_render,
  year_tablevue_type_template_id_363aca8a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var year_table = (year_table_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/month-table.vue?vue&type=template&id=e4700a08&
var month_tablevue_type_template_id_e4700a08_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},_vm._l((_vm.cells),function(cell,index){return _c('span',{key:index,class:_vm.getCellCls(cell),on:{"click":function($event){return _vm.handleClick(cell)},"mouseenter":function($event){return _vm.handleMouseMove(cell)}}},[_c('em',[_vm._v(_vm._s(cell.text))])])}),0)}
var month_tablevue_type_template_id_e4700a08_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/base/month-table.vue?vue&type=template&id=e4700a08&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/month-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//





const month_tablevue_type_script_lang_js_prefixCls = 'bin-date-picker-cells'

/* harmony default export */ var month_tablevue_type_script_lang_js_ = ({
  mixins: [base_mixin],
  computed: {
    classes () {
      return [
        `${month_tablevue_type_script_lang_js_prefixCls}`,
        `${month_tablevue_type_script_lang_js_prefixCls}-month`
      ]
    },
    cells () {
      let cells = []
      const cellTmpl = {
        text: '',
        selected: false,
        disabled: false
      }

      const tableYear = this.tableDate.getFullYear()
      const selectedDays = this.dates.filter(Boolean).map(date => clearHours(new Date(date.getFullYear(), date.getMonth(), 1)))
      const focusedDate = clearHours(new Date(this.focusedDate.getFullYear(), this.focusedDate.getMonth(), 1))

      for (let i = 0; i < 12; i++) {
        const cell = deepCopy(cellTmpl)
        cell.date = new Date(tableYear, i, 1)
        cell.text = this.tCell(i + 1)
        const day = clearHours(cell.date)
        cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(cell.date) && this.selectionMode === 'month'
        cell.selected = selectedDays.includes(day)
        cell.focused = day === focusedDate
        cells.push(cell)
      }

      return cells
    }
  },
  methods: {
    getCellCls (cell) {
      return [
        `${month_tablevue_type_script_lang_js_prefixCls}-cell`,
        {
          [`${month_tablevue_type_script_lang_js_prefixCls}-cell-selected`]: cell.selected,
          [`${month_tablevue_type_script_lang_js_prefixCls}-cell-disabled`]: cell.disabled,
          [`${month_tablevue_type_script_lang_js_prefixCls}-cell-focused`]: cell.focused,
          [`${month_tablevue_type_script_lang_js_prefixCls}-cell-range`]: cell.range && !cell.start && !cell.end
        }
      ]
    },
    tCell (nr) {
      return `${nr}月`
    }
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/base/month-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_month_tablevue_type_script_lang_js_ = (month_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/base/month-table.vue





/* normalize component */

var month_table_component = normalizeComponent(
  base_month_tablevue_type_script_lang_js_,
  month_tablevue_type_template_id_e4700a08_render,
  month_tablevue_type_template_id_e4700a08_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var month_table = (month_table_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Time/time.vue?vue&type=template&id=a7f9ebdc&
var timevue_type_template_id_a7f9ebdc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.prefixCls + '-body-wrapper'],on:{"mousedown":function($event){$event.preventDefault();}}},[_c('div',{class:[_vm.prefixCls + '-body']},[(_vm.showDate)?_c('div',{class:[_vm.timePrefixCls + '-header']},[_vm._v(_vm._s(_vm.visibleDate))]):_vm._e(),_c('div',{class:[_vm.prefixCls + '-content']},[_c('time-spinner',{ref:"timeSpinner",attrs:{"show-seconds":_vm.showSeconds,"steps":_vm.steps,"hours":_vm.timeSlots[0],"minutes":_vm.timeSlots[1],"seconds":_vm.timeSlots[2],"disabled-hours":_vm.disabledHMS.disabledHours,"disabled-minutes":_vm.disabledHMS.disabledMinutes,"disabled-seconds":_vm.disabledHMS.disabledSeconds,"hide-disabled-options":_vm.hideDisabledOptions},on:{"on-change":_vm.handleChange,"on-pick-click":_vm.handlePickClick}})],1),(_vm.confirm)?_c('confirm',{on:{"on-pick-clear":_vm.handlePickClear,"on-pick-success":_vm.handlePickSuccess}}):_vm._e()],1)])}
var timevue_type_template_id_a7f9ebdc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/panel/Time/time.vue?vue&type=template&id=a7f9ebdc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/time-spinner.vue?vue&type=template&id=10e8de4c&
var time_spinnervue_type_template_id_10e8de4c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_c('div',{ref:"hours",class:[_vm.prefixCls+ '-list']},[_c('ul',{class:[_vm.prefixCls + '-ul']},_vm._l((_vm.hoursList),function(item,index){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!item.hide),expression:"!item.hide"}],key:index,class:_vm.getCellCls(item),on:{"click":function($event){return _vm.handleClick('hours', item)}}},[_vm._v("\n        "+_vm._s(_vm.formatTime(item.text))+"\n      ")])}),0)]),_c('div',{ref:"minutes",class:[_vm.prefixCls+ '-list']},[_c('ul',{class:[_vm.prefixCls + '-ul']},_vm._l((_vm.minutesList),function(item,index){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!item.hide),expression:"!item.hide"}],key:index,class:_vm.getCellCls(item),on:{"click":function($event){return _vm.handleClick('minutes', item)}}},[_vm._v(_vm._s(_vm.formatTime(item.text))+"\n      ")])}),0)]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSeconds),expression:"showSeconds"}],ref:"seconds",class:[_vm.prefixCls+ '-list']},[_c('ul',{class:[_vm.prefixCls + '-ul']},_vm._l((_vm.secondsList),function(item,index){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!item.hide),expression:"!item.hide"}],key:index,class:_vm.getCellCls(item),on:{"click":function($event){return _vm.handleClick('seconds', item)}}},[_vm._v(_vm._s(_vm.formatTime(item.text))+"\n      ")])}),0)])])}
var time_spinnervue_type_template_id_10e8de4c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/base/time-spinner.vue?vue&type=template&id=10e8de4c&

// CONCATENATED MODULE: ./src/components/date-picker/util/time-mixins.js
/* harmony default export */ var time_mixins = ({
  props: {
    disabledHours: {
      type: Array,
      default () {
        return []
      }
    },
    disabledMinutes: {
      type: Array,
      default () {
        return []
      }
    },
    disabledSeconds: {
      type: Array,
      default () {
        return []
      }
    },
    hideDisabledOptions: {
      type: Boolean,
      default: false
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/time-spinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const time_spinnervue_type_script_lang_js_prefixCls = 'bin-time-picker-cells'
const timeParts = ['hours', 'minutes', 'seconds']

/* harmony default export */ var time_spinnervue_type_script_lang_js_ = ({
  name: 'TimeSpinner',
  mixins: [time_mixins],
  props: {
    hours: {
      type: [Number, String],
      default: NaN
    },
    minutes: {
      type: [Number, String],
      default: NaN
    },
    seconds: {
      type: [Number, String],
      default: NaN
    },
    showSeconds: {
      type: Boolean,
      default: true
    },
    steps: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      spinerSteps: [1, 1, 1].map((one, i) => Math.abs(this.steps[i]) || one),
      prefixCls: time_spinnervue_type_script_lang_js_prefixCls,
      compiled: false,
      focusedColumn: -1, // which column inside the picker
      focusedTime: [0, 0, 0] // the values array into [hh, mm, ss]
    }
  },
  computed: {
    classes () {
      return [
        `${time_spinnervue_type_script_lang_js_prefixCls}`,
        {
          [`${time_spinnervue_type_script_lang_js_prefixCls}-with-seconds`]: this.showSeconds
        }
      ]
    },
    hoursList () {
      let hours = []
      const step = this.spinerSteps[0]
      const focusedHour = this.focusedColumn === 0 && this.focusedTime[0]
      const hourTmpl = {
        text: 0,
        selected: false,
        disabled: false,
        hide: false
      }

      for (let i = 0; i < 24; i += step) {
        const hour = deepCopy(hourTmpl)
        hour.text = i
        hour.focused = i === focusedHour

        if (this.disabledHours.length && this.disabledHours.indexOf(i) > -1) {
          hour.disabled = true
          if (this.hideDisabledOptions) hour.hide = true
        }
        if (this.hours === i) hour.selected = true
        hours.push(hour)
      }

      return hours
    },
    minutesList () {
      let minutes = []
      const step = this.spinerSteps[1]
      const focusedMinute = this.focusedColumn === 1 && this.focusedTime[1]
      const minuteTmpl = {
        text: 0,
        selected: false,
        disabled: false,
        hide: false
      }

      for (let i = 0; i < 60; i += step) {
        const minute = deepCopy(minuteTmpl)
        minute.text = i
        minute.focused = i === focusedMinute

        if (this.disabledMinutes.length && this.disabledMinutes.indexOf(i) > -1) {
          minute.disabled = true
          if (this.hideDisabledOptions) minute.hide = true
        }
        if (this.minutes === i) minute.selected = true
        minutes.push(minute)
      }
      return minutes
    },
    secondsList () {
      let seconds = []
      const step = this.spinerSteps[2]
      const focusedMinute = this.focusedColumn === 2 && this.focusedTime[2]
      const secondTmpl = {
        text: 0,
        selected: false,
        disabled: false,
        hide: false
      }

      for (let i = 0; i < 60; i += step) {
        const second = deepCopy(secondTmpl)
        second.text = i
        second.focused = i === focusedMinute

        if (this.disabledSeconds.length && this.disabledSeconds.indexOf(i) > -1) {
          second.disabled = true
          if (this.hideDisabledOptions) second.hide = true
        }
        if (this.seconds === i) second.selected = true
        seconds.push(second)
      }

      return seconds
    }
  },
  methods: {
    getCellCls (cell) {
      return [
        `${time_spinnervue_type_script_lang_js_prefixCls}-cell`,
        {
          [`${time_spinnervue_type_script_lang_js_prefixCls}-cell-selected`]: cell.selected,
          [`${time_spinnervue_type_script_lang_js_prefixCls}-cell-focused`]: cell.focused,
          [`${time_spinnervue_type_script_lang_js_prefixCls}-cell-disabled`]: cell.disabled

        }
      ]
    },
    chooseValue (values) {
      const changes = timeParts.reduce((obj, part, i) => {
        const value = values[i]
        if (this[part] === value) return obj
        return {
          ...obj,
          [part]: value
        }
      }, {})
      if (Object.keys(changes).length > 0) {
        this.emitChange(changes)
      }
    },
    handleClick (type, cell) {
      if (cell.disabled) return
      const data = { [type]: cell.text }
      this.emitChange(data)
    },
    emitChange (changes) {
      this.$emit('on-change', changes)
      this.$emit('on-pick-click')
    },
    scroll (type, index) {
      const from = this.$refs[type].scrollTop
      const to = 24 * this.getScrollIndex(type, index)
      scrollTop(this.$refs[type], from, to, 500)
    },
    getScrollIndex (type, index) {
      const Type = firstUpperCase(type)
      const disabled = this[`disabled${Type}`]
      if (disabled.length && this.hideDisabledOptions) {
        let _count = 0
        disabled.forEach(item => item <= index ? _count++ : '')
        index -= _count
      }
      return index
    },
    updateScroll () {
      this.$nextTick(() => {
        timeParts.forEach(type => {
          this.$refs[type].scrollTop = 24 * this[`${type}List`].findIndex(obj => obj.text === this[type])
        })
      })
    },
    formatTime (text) {
      return text < 10 ? '0' + text : text
    },
    updateFocusedTime (col, time) {
      this.focusedColumn = col
      this.focusedTime = time.slice()
    }
  },
  watch: {
    hours (val) {
      if (!this.compiled) return
      this.scroll('hours', this.hoursList.findIndex(obj => obj.text === val))
    },
    minutes (val) {
      if (!this.compiled) return
      this.scroll('minutes', this.minutesList.findIndex(obj => obj.text === val))
    },
    seconds (val) {
      if (!this.compiled) return
      this.scroll('seconds', this.secondsList.findIndex(obj => obj.text === val))
    },
    focusedTime (updated, old) {
      timeParts.forEach((part, i) => {
        if (updated[i] === old[i] || typeof updated[i] === 'undefined') return
        const valueIndex = this[`${part}List`].findIndex(obj => obj.text === updated[i])
        this.scroll(part, valueIndex)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.compiled = true
    })
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/base/time-spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_time_spinnervue_type_script_lang_js_ = (time_spinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/base/time-spinner.vue





/* normalize component */

var time_spinner_component = normalizeComponent(
  base_time_spinnervue_type_script_lang_js_,
  time_spinnervue_type_template_id_10e8de4c_render,
  time_spinnervue_type_template_id_10e8de4c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var time_spinner = (time_spinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/confirm.vue?vue&type=template&id=7fcb6772&
var confirmvue_type_template_id_7fcb6772_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.prefixCls + '-confirm'],on:{"!keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.handleTab($event)}}},[(_vm.showTime)?_c('b-button',{class:_vm.timeClasses,attrs:{"size":"mini","type":"text","disabled":_vm.timeDisabled},on:{"click":_vm.handleToggleTime}},[_vm._v("\n    "+_vm._s(this.isTime ? '选择日期' : '选择时间')+"\n  ")]):_vm._e(),_c('b-button',{attrs:{"size":"mini"},on:{"click":_vm.handleClear},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleClear($event)}}},[_vm._v("\n    清空\n  ")]),_c('b-button',{attrs:{"size":"mini","type":"primary"},on:{"click":_vm.handleSuccess},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleSuccess($event)}}},[_vm._v("\n    确定\n  ")])],1)}
var confirmvue_type_template_id_7fcb6772_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/base/confirm.vue?vue&type=template&id=7fcb6772&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/base/confirm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const confirmvue_type_script_lang_js_prefixCls = 'bin-picker'

/* harmony default export */ var confirmvue_type_script_lang_js_ = ({
  mixins: [emitter],
  components: { BButton: button_button },
  props: {
    showTime: Boolean,
    isTime: Boolean,
    timeDisabled: Boolean
  },
  data () {
    return {
      prefixCls: confirmvue_type_script_lang_js_prefixCls
    }
  },
  computed: {
    timeClasses () {
      return `${confirmvue_type_script_lang_js_prefixCls}-confirm-time`
    }
  },
  methods: {
    handleClear () {
      this.$emit('on-pick-clear')
    },
    handleSuccess () {
      this.$emit('on-pick-success')
    },
    handleToggleTime () {
      if (this.timeDisabled) return
      this.$emit('on-pick-toggle-time')
      this.dispatch('BDatePicker', 'focus-input')
      this.dispatch('BDatePicker', 'update-popper')
    },
    handleTab (e) {
      const tabbables = [...this.$el.children]
      const expectedFocus = tabbables[e.shiftKey ? 'shift' : 'pop']()

      if (document.activeElement === expectedFocus) {
        e.preventDefault()
        e.stopPropagation()
        this.dispatch('BDatePicker', 'focus-input')
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/base/confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_confirmvue_type_script_lang_js_ = (confirmvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/base/confirm.vue





/* normalize component */

var confirm_component = normalizeComponent(
  base_confirmvue_type_script_lang_js_,
  confirmvue_type_template_id_7fcb6772_render,
  confirmvue_type_template_id_7fcb6772_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var base_confirm = (confirm_component.exports);
// CONCATENATED MODULE: ./src/components/date-picker/panel/panel-mixin.js
const panel_mixin_prefixCls = 'bin-picker-panel'
const datePrefixCls = 'bin-date-picker'

/* harmony default export */ var panel_mixin = ({
  props: {
    confirm: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    iconBtnCls (direction, type = '') {
      return [
        `${panel_mixin_prefixCls}-icon-btn`,
        `${datePrefixCls}-${direction}-btn`,
        `${datePrefixCls}-${direction}-btn-arrow${type}`
      ]
    },
    handleShortcutClick (shortcut) {
      if (shortcut.value) this.$emit('on-pick', shortcut.value())
      if (shortcut.onClick) shortcut.onClick(this)
    },
    handlePickClear () {
      this.resetView()
      this.$emit('on-pick-clear')
    },
    handlePickSuccess () {
      this.resetView()
      this.$emit('on-pick-success')
    },
    handlePickClick () {
      this.$emit('on-pick-click')
    },
    resetView () {
      setTimeout(() => {
        this.currentView = this.selectionMode
      }, 500) // 500ms so the dropdown can close before changing
    },
    handleClear () {
      this.dates = this.dates.map(() => null)
      this.rangeState = {}
      this.$emit('on-pick', this.dates)
      this.handleConfirm()
    },
    handleConfirm (visible, type) {
      this.$emit('on-pick', this.dates, visible, type || this.type)
    },
    onToggleVisibility (open) {
      const { timeSpinner, timeSpinnerEnd } = this.$refs
      if (open && timeSpinner) timeSpinner.updateScroll()
      if (open && timeSpinnerEnd) timeSpinnerEnd.updateScroll()
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Time/time.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









const timevue_type_script_lang_js_prefixCls = 'bin-picker-panel'
const timePrefixCls = 'bin-time-picker'

const capitalize = (str) => str[0].toUpperCase() + str.slice(1)
const mergeDateHMS = (date, hours, minutes, seconds) => {
  const newDate = new Date(date.getTime())
  newDate.setHours(hours)
  newDate.setMinutes(minutes)
  newDate.setSeconds(seconds)
  return newDate
}
const unique = (el, i, arr) => arr.indexOf(el) === i
const returnFalse = () => false

/* harmony default export */ var timevue_type_script_lang_js_ = ({
  name: 'TimePickerPanel',
  mixins: [panel_mixin, time_mixins],
  components: { TimeSpinner: time_spinner, Confirm: base_confirm },
  props: {
    disabledDate: {
      type: Function,
      default: returnFalse
    },
    steps: {
      type: Array,
      default: () => []
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    value: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      prefixCls: timevue_type_script_lang_js_prefixCls,
      timePrefixCls: timePrefixCls,
      date: this.value[0] || initTimeDate(),
      showDate: false
    }
  },
  computed: {
    showSeconds () {
      return !(this.format || '').match(/mm$/)
    },
    visibleDate () { // TODO
      const date = this.date
      const month = date.getMonth() + 1
      const tMonth = `${month} 月`
      return `${date.getFullYear()}年 ${tMonth}`
    },
    timeSlots () {
      if (!this.value[0]) return []
      return ['getHours', 'getMinutes', 'getSeconds'].map(slot => this.date[slot]())
    },
    disabledHMS () {
      const disabledTypes = ['disabledHours', 'disabledMinutes', 'disabledSeconds']
      if (this.disabledDate === returnFalse || !this.value[0]) {
        const disabled = disabledTypes.reduce((obj, type) => (obj[type] = this[type], obj), {})
        return disabled
      } else {
        const slots = [24, 60, 60]
        const disabled = ['Hours', 'Minutes', 'Seconds'].map(type => this[`disabled${type}`])
        const disabledHMS = disabled.map((preDisabled, j) => {
          const slot = slots[j]
          const toDisable = preDisabled
          for (let i = 0; i < slot; i += (this.steps[j] || 1)) {
            const hms = this.timeSlots.map((slot, x) => x === j ? i : slot)
            const testDateTime = mergeDateHMS(this.date, ...hms)
            if (this.disabledDate(testDateTime, true)) toDisable.push(i)
          }
          return toDisable.filter(unique)
        })
        return disabledTypes.reduce((obj, type, i) => (obj[type] = disabledHMS[i], obj), {})
      }
    }
  },
  watch: {
    value (dates) {
      let newVal = dates[0] || initTimeDate()
      newVal = new Date(newVal)
      this.date = newVal
    }
  },
  methods: {
    handleChange (date, emit = true) {
      const newDate = new Date(this.date)
      Object.keys(date).forEach(
        type => newDate[`set${capitalize(type)}`](date[type])
      )
      if (emit) this.$emit('on-pick', newDate, 'time')
    }
  },
  mounted () {
    if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/panel/Time/time.vue?vue&type=script&lang=js&
 /* harmony default export */ var Time_timevue_type_script_lang_js_ = (timevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/panel/Time/time.vue





/* normalize component */

var time_component = normalizeComponent(
  Time_timevue_type_script_lang_js_,
  timevue_type_template_id_a7f9ebdc_render,
  timevue_type_template_id_a7f9ebdc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Time_time = (time_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Date/date-panel-label.vue?vue&type=template&id=1c719bb4&
var date_panel_labelvue_type_template_id_1c719bb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[(_vm.datePanelLabel)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.datePanelLabel.labels[0].type === 'year' || _vm.currentView === 'date'),expression:"datePanelLabel.labels[0].type === 'year' || currentView === 'date'"}],class:[_vm.datePrefixCls + '-header-label'],on:{"click":_vm.datePanelLabel.labels[0].handler}},[_vm._v(_vm._s(_vm.datePanelLabel.labels[0].label))]):_vm._e(),(_vm.datePanelLabel && _vm.currentView === 'date')?[_vm._v(_vm._s(_vm.datePanelLabel.separator))]:_vm._e(),(_vm.datePanelLabel)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.datePanelLabel.labels[1].type === 'year' || _vm.currentView === 'date'),expression:"datePanelLabel.labels[1].type === 'year' || currentView === 'date'"}],class:[_vm.datePrefixCls + '-header-label'],on:{"click":_vm.datePanelLabel.labels[1].handler}},[_vm._v(_vm._s(_vm.datePanelLabel.labels[1].label))]):_vm._e()],2)}
var date_panel_labelvue_type_template_id_1c719bb4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date-panel-label.vue?vue&type=template&id=1c719bb4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Date/date-panel-label.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var date_panel_labelvue_type_script_lang_js_ = ({
  props: {
    datePanelLabel: Object,
    currentView: String,
    datePrefixCls: String
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date-panel-label.vue?vue&type=script&lang=js&
 /* harmony default export */ var Date_date_panel_labelvue_type_script_lang_js_ = (date_panel_labelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date-panel-label.vue





/* normalize component */

var date_panel_label_component = normalizeComponent(
  Date_date_panel_labelvue_type_script_lang_js_,
  date_panel_labelvue_type_template_id_1c719bb4_render,
  date_panel_labelvue_type_template_id_1c719bb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var date_panel_label = (date_panel_label_component.exports);
// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date-panel-mixin.js



/* harmony default export */ var date_panel_mixin = ({
  props: {
    showTime: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    selectionMode: {
      type: String,
      validator (value) {
        return oneOf(value, ['year', 'month', 'date', 'time'])
      },
      default: 'date'
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    disabledDate: {
      type: Function,
      default: () => false
    },
    value: {
      type: Array,
      default: () => [initTimeDate(), initTimeDate()]
    },
    timePickerOptions: {
      default: () => ({}),
      type: Object
    },
    showWeekNumbers: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: Date
    },
    pickerType: {
      type: String,
      require: true
    },
    focusedDate: {
      type: Date,
      required: true
    }
  },
  computed: {
    isTime () {
      return this.currentView === 'time'
    }
  },
  methods: {
    handleToggleTime () {
      this.currentView = this.currentView === 'time' ? 'date' : 'time'
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Date/date.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














const datevue_type_script_lang_js_prefixCls = 'bin-picker-panel'
const datevue_type_script_lang_js_datePrefixCls = 'bin-date-picker'

/* harmony default export */ var datevue_type_script_lang_js_ = ({
  name: 'DatePickerPanel',
  mixins: [panel_mixin, date_panel_mixin],
  components: { BIcon: icon, DateTable: date_table, YearTable: year_table, MonthTable: month_table, TimePicker: Time_time, Confirm: base_confirm, datePanelLabel: date_panel_label },
  props: {
    // more props in the mixin
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const { selectionMode, value } = this

    const dates = value.slice().sort()
    return {
      prefixCls: datevue_type_script_lang_js_prefixCls,
      datePrefixCls: datevue_type_script_lang_js_datePrefixCls,
      currentView: selectionMode || 'date',
      pickerTable: this.getTableType(selectionMode),
      dates: dates,
      panelDate: this.startDate || dates[0] || new Date()
    }
  },
  computed: {
    classes () {
      return [
        `${datevue_type_script_lang_js_prefixCls}-body-wrapper`,
        {
          [`${datevue_type_script_lang_js_prefixCls}-with-sidebar`]: this.shortcuts.length
        }
      ]
    },
    panelPickerHandlers () {
      return this.pickerTable === `${this.currentView}-table` ? this.handlePick : this.handlePreSelection
    },
    datePanelLabel () {
      const date = this.panelDate
      const { labels, separator } = formatDateLabels('zh-CN', '[yyyy年] [m月]', date)
      const handler = type => {
        return () => this.pickerTable = this.getTableType(type)
      }
      return {
        separator: separator,
        labels: labels.map(obj => ((obj.handler = handler(obj.type)), obj))
      }
    },
    timeDisabled () {
      return !this.dates[0]
    }
  },
  watch: {
    value (newVal) {
      this.dates = newVal
      const panelDate = this.multiple ? this.dates[this.dates.length - 1] : (this.startDate || this.dates[0])
      this.panelDate = panelDate || new Date()
    },
    currentView (currentView) {
      this.$emit('on-selection-mode-change', currentView)

      if (this.currentView === 'time') {
        this.$nextTick(() => {
          const spinner = this.$refs.timePicker.$refs.timeSpinner
          spinner.updateScroll()
        })
      }
    },
    selectionMode (type) {
      this.currentView = type
      this.pickerTable = this.getTableType(type)
    },
    focusedDate (date) {
      const isDifferentYear = date.getFullYear() !== this.panelDate.getFullYear()
      const isDifferentMonth = isDifferentYear || date.getMonth() !== this.panelDate.getMonth()
      if (isDifferentYear || isDifferentMonth) {
        if (!this.multiple) this.panelDate = date
      }
    }
  },
  methods: {
    reset () {
      this.currentView = this.selectionMode
      this.pickerTable = this.getTableType(this.currentView)
    },
    changeYear (dir) {
      if (this.selectionMode === 'year' || this.pickerTable === 'year-table') {
        this.panelDate = new Date(this.panelDate.getFullYear() + dir * 10, 0, 1)
      } else {
        this.panelDate = siblingMonth(this.panelDate, dir * 12)
      }
    },
    getTableType (currentView) {
      return currentView.match(/^time/) ? 'time-picker' : `${currentView}-table`
    },
    changeMonth (dir) {
      this.panelDate = siblingMonth(this.panelDate, dir)
    },
    handlePreSelection (value) {
      this.panelDate = value
      if (this.pickerTable === 'year-table') this.pickerTable = 'month-table'
      else this.pickerTable = this.getTableType(this.currentView)
    },
    handlePick (value, type) {
      const { selectionMode, panelDate } = this
      if (selectionMode === 'year') value = new Date(value.getFullYear(), 0, 1)
      else if (selectionMode === 'month') value = new Date(panelDate.getFullYear(), value.getMonth(), 1)
      else value = new Date(value)

      this.dates = [value]
      this.$emit('on-pick', value, false, type || selectionMode)
    }
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date.vue?vue&type=script&lang=js&
 /* harmony default export */ var Date_datevue_type_script_lang_js_ = (datevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date.vue





/* normalize component */

var date_component = normalizeComponent(
  Date_datevue_type_script_lang_js_,
  datevue_type_template_id_16625d44_render,
  datevue_type_template_id_16625d44_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Date_date = (date_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Date/date-range.vue?vue&type=template&id=2c6d1382&
var date_rangevue_type_template_id_2c6d1382_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,on:{"mousedown":function($event){$event.preventDefault();}}},[(_vm.shortcuts.length)?_c('div',{class:[_vm.prefixCls + '-sidebar']},_vm._l((_vm.shortcuts),function(shortcut,index){return _c('div',{key:index,class:[_vm.prefixCls + '-shortcut'],on:{"click":function($event){return _vm.handleShortcutClick(shortcut)}}},[_vm._v(_vm._s(shortcut.text)+"\n    ")])}),0):_vm._e(),_c('div',{class:_vm.panelBodyClasses},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isTime),expression:"!isTime"}],class:[_vm.prefixCls + '-content', _vm.prefixCls + '-content-left']},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView !== 'time'),expression:"currentView !== 'time'"}],class:[_vm.datePrefixCls + '-header']},[_c('span',{class:_vm.iconBtnCls('prev', '-double'),on:{"click":function($event){return _vm.prevYear('left')}}},[_c('b-icon',{attrs:{"name":"ios-arrow-back"}})],1),(_vm.leftPickerTable === 'date-table')?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],class:_vm.iconBtnCls('prev'),on:{"click":function($event){return _vm.prevMonth('left')}}},[_c('b-icon',{attrs:{"name":"ios-arrow-back"}})],1):_vm._e(),_c('date-panel-label',{attrs:{"date-panel-label":_vm.leftDatePanelLabel,"current-view":_vm.leftDatePanelView,"date-prefix-cls":_vm.datePrefixCls}}),(_vm.splitPanels || _vm.leftPickerTable !== 'date-table')?_c('span',{class:_vm.iconBtnCls('next', '-double'),on:{"click":function($event){return _vm.nextYear('left')}}},[_c('b-icon',{attrs:{"name":"ios-arrow-forward"}})],1):_vm._e(),(_vm.splitPanels && _vm.leftPickerTable === 'date-table')?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],class:_vm.iconBtnCls('next'),on:{"click":function($event){return _vm.nextMonth('left')}}},[_c('b-icon',{attrs:{"name":"ios-arrow-forward"}})],1):_vm._e()],1),(_vm.currentView !== 'time')?_c(_vm.leftPickerTable,{ref:"leftYearTable",tag:"component",attrs:{"table-date":_vm.leftPanelDate,"selection-mode":"range","disabled-date":_vm.disabledDate,"range-state":_vm.rangeState,"show-week-numbers":_vm.showWeekNumbers,"value":_vm.preSelecting.left ? [_vm.dates[0]] : _vm.dates,"focused-date":_vm.focusedDate},on:{"on-change-range":_vm.handleChangeRange,"on-pick":_vm.panelPickerHandlers.left,"on-pick-click":_vm.handlePickClick}}):_vm._e()],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isTime),expression:"!isTime"}],class:[_vm.prefixCls + '-content', _vm.prefixCls + '-content-right']},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView !== 'time'),expression:"currentView !== 'time'"}],class:[_vm.datePrefixCls + '-header']},[(_vm.splitPanels || _vm.rightPickerTable !== 'date-table')?_c('span',{class:_vm.iconBtnCls('prev', '-double'),on:{"click":function($event){return _vm.prevYear('right')}}},[_c('b-icon',{attrs:{"name":"ios-arrow-back"}})],1):_vm._e(),(_vm.splitPanels && _vm.rightPickerTable === 'date-table')?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],class:_vm.iconBtnCls('prev'),on:{"click":function($event){return _vm.prevMonth('right')}}},[_c('b-icon',{attrs:{"name":"ios-arrow-back"}})],1):_vm._e(),_c('date-panel-label',{attrs:{"date-panel-label":_vm.rightDatePanelLabel,"current-view":_vm.rightDatePanelView,"date-prefix-cls":_vm.datePrefixCls}}),_c('span',{class:_vm.iconBtnCls('next', '-double'),on:{"click":function($event){return _vm.nextYear('right')}}},[_c('b-icon',{attrs:{"name":"ios-arrow-forward"}})],1),(_vm.rightPickerTable === 'date-table')?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],class:_vm.iconBtnCls('next'),on:{"click":function($event){return _vm.nextMonth('right')}}},[_c('b-icon',{attrs:{"name":"ios-arrow-forward"}})],1):_vm._e()],1),(_vm.currentView !== 'time')?_c(_vm.rightPickerTable,{ref:"rightYearTable",tag:"component",attrs:{"table-date":_vm.rightPanelDate,"selection-mode":"range","range-state":_vm.rangeState,"disabled-date":_vm.disabledDate,"show-week-numbers":_vm.showWeekNumbers,"value":_vm.preSelecting.right ? [_vm.dates[_vm.dates.length - 1]] : _vm.dates,"focused-date":_vm.focusedDate},on:{"on-change-range":_vm.handleChangeRange,"on-pick":_vm.panelPickerHandlers.right,"on-pick-click":_vm.handlePickClick}}):_vm._e()],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isTime),expression:"isTime"}],class:[_vm.prefixCls + '-content']},[(_vm.currentView === 'time')?_c('time-picker',_vm._b({ref:"timePicker",attrs:{"value":_vm.dates,"format":_vm.format,"time-disabled":_vm.timeDisabled},on:{"on-pick":_vm.handleRangePick,"on-pick-click":_vm.handlePickClick,"on-pick-clear":_vm.handlePickClear,"on-pick-success":_vm.handlePickSuccess,"on-pick-toggle-time":_vm.handleToggleTime}},'time-picker',_vm.timePickerOptions,false)):_vm._e()],1),(_vm.confirm)?_c('confirm',{attrs:{"show-time":_vm.showTime,"is-time":_vm.isTime,"time-disabled":_vm.timeDisabled},on:{"on-pick-toggle-time":_vm.handleToggleTime,"on-pick-clear":_vm.handlePickClear,"on-pick-success":_vm.handlePickSuccess}}):_vm._e()],1)])}
var date_rangevue_type_template_id_2c6d1382_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date-range.vue?vue&type=template&id=2c6d1382&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Time/time-range.vue?vue&type=template&id=9f65dee2&
var time_rangevue_type_template_id_9f65dee2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,on:{"mousedown":function($event){$event.preventDefault();}}},[_c('div',{class:[_vm.prefixCls + '-body']},[_c('div',{class:[_vm.prefixCls + '-content', _vm.prefixCls + '-content-left']},[_c('div',{class:[_vm.timePrefixCls + '-header']},[(_vm.showDate)?[_vm._v(_vm._s(_vm.leftDatePanelLabel))]:[_vm._v("开始时间")]],2),_c('time-spinner',{ref:"timeSpinner",attrs:{"steps":_vm.steps,"show-seconds":_vm.showSeconds,"hours":_vm.value[0] && _vm.dateStart.getHours(),"minutes":_vm.value[0] && _vm.dateStart.getMinutes(),"seconds":_vm.value[0] && _vm.dateStart.getSeconds(),"disabled-hours":_vm.disabledHours,"disabled-minutes":_vm.disabledMinutes,"disabled-seconds":_vm.disabledSeconds,"hide-disabled-options":_vm.hideDisabledOptions},on:{"on-change":_vm.handleStartChange,"on-pick-click":_vm.handlePickClick}})],1),_c('div',{class:[_vm.prefixCls + '-content', _vm.prefixCls + '-content-right']},[_c('div',{class:[_vm.timePrefixCls + '-header']},[(_vm.showDate)?[_vm._v(_vm._s(_vm.rightDatePanelLabel))]:[_vm._v("结束时间")]],2),_c('time-spinner',{ref:"timeSpinnerEnd",attrs:{"steps":_vm.steps,"show-seconds":_vm.showSeconds,"hours":_vm.value[1] && _vm.dateEnd.getHours(),"minutes":_vm.value[1] && _vm.dateEnd.getMinutes(),"seconds":_vm.value[1] && _vm.dateEnd.getSeconds(),"disabled-hours":_vm.disabledHours,"disabled-minutes":_vm.disabledMinutes,"disabled-seconds":_vm.disabledSeconds,"hide-disabled-options":_vm.hideDisabledOptions},on:{"on-change":_vm.handleEndChange,"on-pick-click":_vm.handlePickClick}})],1),(_vm.confirm)?_c('Confirm',{on:{"on-pick-clear":_vm.handlePickClear,"on-pick-success":_vm.handlePickSuccess}}):_vm._e()],1)])}
var time_rangevue_type_template_id_9f65dee2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/date-picker/panel/Time/time-range.vue?vue&type=template&id=9f65dee2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Time/time-range.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









const time_rangevue_type_script_lang_js_prefixCls = 'bin-picker-panel'
const time_rangevue_type_script_lang_js_timePrefixCls = 'bin-time-picker'

const time_rangevue_type_script_lang_js_capitalize = (str) => str[0].toUpperCase() + str.slice(1)

/* harmony default export */ var time_rangevue_type_script_lang_js_ = ({
  name: 'RangeTimePickerPanel',
  mixins: [panel_mixin, time_mixins],
  components: { TimeSpinner: time_spinner, Confirm: base_confirm },
  props: {
    steps: {
      type: Array,
      default: () => []
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    value: {
      type: Array,
      required: true
    }
  },
  data () {
    const [dateStart, dateEnd] = this.value.slice()
    return {
      prefixCls: time_rangevue_type_script_lang_js_prefixCls,
      timePrefixCls: time_rangevue_type_script_lang_js_timePrefixCls,
      showDate: false,
      dateStart: dateStart || initTimeDate(),
      dateEnd: dateEnd || initTimeDate()
    }
  },
  computed: {
    classes () {
      return [
        `${time_rangevue_type_script_lang_js_prefixCls}-body-wrapper`,
        `${time_rangevue_type_script_lang_js_timePrefixCls}-with-range`,
        {
          [`${time_rangevue_type_script_lang_js_timePrefixCls}-with-seconds`]: this.showSeconds
        }
      ]
    },
    showSeconds () {
      return !(this.format || '').match(/mm$/)
    },
    leftDatePanelLabel () {
      return this.panelLabelConfig(this.date)
    },
    rightDatePanelLabel () {
      return this.panelLabelConfig(this.dateEnd)
    }
  },
  watch: {
    value (dates) {
      const [dateStart, dateEnd] = dates.slice()
      this.dateStart = dateStart || initTimeDate()
      this.dateEnd = dateEnd || initTimeDate()
    }
  },
  methods: {
    panelLabelConfig (date) {
      const locale = 'zh-CN'
      const datePanelLabel = '[yyyy年] [m月]'
      const { labels, separator } = formatDateLabels(locale, datePanelLabel, date || initTimeDate())
      return [labels[0].label, separator, labels[1].label].join('')
    },
    handleChange (start, end, emit = true) {
      const dateStart = new Date(this.dateStart)
      let dateEnd = new Date(this.dateEnd)

      // set dateStart
      Object.keys(start).forEach(type => {
        dateStart[`set${time_rangevue_type_script_lang_js_capitalize(type)}`](start[type])
      })

      // set dateEnd
      Object.keys(end).forEach(type => {
        dateEnd[`set${time_rangevue_type_script_lang_js_capitalize(type)}`](end[type])
      })

      // judge endTime > startTime?
      if (dateEnd < dateStart) dateEnd = dateStart

      if (emit) this.$emit('on-pick', [dateStart, dateEnd], 'time')
    },
    handleStartChange (date) {
      this.handleChange(date, {})
    },
    handleEndChange (date) {
      this.handleChange({}, date)
    },
    updateScroll () {
      this.$refs.timeSpinner.updateScroll()
      this.$refs.timeSpinnerEnd.updateScroll()
    }
  },
  mounted () {
    if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/panel/Time/time-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var Time_time_rangevue_type_script_lang_js_ = (time_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/panel/Time/time-range.vue





/* normalize component */

var time_range_component = normalizeComponent(
  Time_time_rangevue_type_script_lang_js_,
  time_rangevue_type_template_id_9f65dee2_render,
  time_rangevue_type_template_id_9f65dee2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var time_range = (time_range_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/panel/Date/date-range.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














const date_rangevue_type_script_lang_js_prefixCls = 'bin-picker-panel'
const date_rangevue_type_script_lang_js_datePrefixCls = 'bin-date-picker'

const dateSorter = (a, b) => {
  if (!a || !b) return 0
  return a.getTime() - b.getTime()
}

/* harmony default export */ var date_rangevue_type_script_lang_js_ = ({
  name: 'RangeDatePickerPanel',
  mixins: [panel_mixin, date_panel_mixin],
  components: { BIcon: icon, DateTable: date_table, YearTable: year_table, MonthTable: month_table, TimePicker: time_range, Confirm: base_confirm, datePanelLabel: date_panel_label },
  props: {
    // more props in the mixin
    splitPanels: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const [minDate, maxDate] = this.value.map(date => date || initTimeDate())
    const leftPanelDate = this.startDate ? this.startDate : minDate

    return {
      prefixCls: date_rangevue_type_script_lang_js_prefixCls,
      datePrefixCls: date_rangevue_type_script_lang_js_datePrefixCls,
      dates: this.value,
      rangeState: { from: this.value[0], to: this.value[1], selecting: minDate && !maxDate },
      currentView: this.selectionMode || 'range',
      leftPickerTable: `${this.selectionMode}-table`,
      rightPickerTable: `${this.selectionMode}-table`,
      leftPanelDate: leftPanelDate,
      rightPanelDate: new Date(leftPanelDate.getFullYear(), leftPanelDate.getMonth() + 1, 1)
    }
  },
  computed: {
    classes () {
      return [
        `${date_rangevue_type_script_lang_js_prefixCls}-body-wrapper`,
        `${date_rangevue_type_script_lang_js_datePrefixCls}-with-range`,
        {
          [`${date_rangevue_type_script_lang_js_prefixCls}-with-sidebar`]: this.shortcuts.length,
          [`${date_rangevue_type_script_lang_js_datePrefixCls}-with-week-numbers`]: this.showWeekNumbers
        }
      ]
    },
    panelBodyClasses () {
      return [
        date_rangevue_type_script_lang_js_prefixCls + '-body',
        {
          [date_rangevue_type_script_lang_js_prefixCls + '-body-time']: this.showTime,
          [date_rangevue_type_script_lang_js_prefixCls + '-body-date']: !this.showTime
        }
      ]
    },
    leftDatePanelLabel () {
      return this.panelLabelConfig('left')
    },
    rightDatePanelLabel () {
      return this.panelLabelConfig('right')
    },
    leftDatePanelView () {
      return this.leftPickerTable.split('-').shift()
    },
    rightDatePanelView () {
      return this.rightPickerTable.split('-').shift()
    },
    timeDisabled () {
      return !(this.dates[0] && this.dates[1])
    },
    preSelecting () {
      const tableType = `${this.currentView}-table`

      return {
        left: this.leftPickerTable !== tableType,
        right: this.rightPickerTable !== tableType
      }
    },
    panelPickerHandlers () {
      return {
        left: this.preSelecting.left ? this.handlePreSelection.bind(this, 'left') : this.handleRangePick,
        right: this.preSelecting.right ? this.handlePreSelection.bind(this, 'right') : this.handleRangePick
      }
    }
  },
  watch: {
    value (newVal) {
      const minDate = newVal[0] ? toDate(newVal[0]) : null
      const maxDate = newVal[1] ? toDate(newVal[1]) : null
      this.dates = [minDate, maxDate].sort(dateSorter)

      this.rangeState = {
        from: this.dates[0],
        to: this.dates[1],
        selecting: false
      }
      // set panels positioning
      this.setPanelDates(this.startDate || this.dates[0] || new Date())
    },
    currentView (currentView) {
      const leftMonth = this.leftPanelDate.getMonth()
      const rightMonth = this.rightPanelDate.getMonth()
      const isSameYear = this.leftPanelDate.getFullYear() === this.rightPanelDate.getFullYear()

      if (currentView === 'date' && isSameYear && leftMonth === rightMonth) {
        this.changePanelDate('right', 'Month', 1)
      }
      if (currentView === 'month' && isSameYear) {
        this.changePanelDate('right', 'FullYear', 1)
      }
      if (currentView === 'year' && isSameYear) {
        this.changePanelDate('right', 'FullYear', 10)
      }
    },
    selectionMode (type) {
      this.currentView = type || 'range'
    },
    focusedDate (date) {
      this.setPanelDates(date || new Date())
    }
  },
  methods: {
    reset () {
      this.currentView = this.selectionMode
      this.leftPickerTable = `${this.currentView}-table`
      this.rightPickerTable = `${this.currentView}-table`
    },
    setPanelDates (leftPanelDate) {
      this.leftPanelDate = leftPanelDate
      const rightPanelDate = new Date(leftPanelDate.getFullYear(), leftPanelDate.getMonth() + 1, 1)
      const splitRightPanelDate = this.dates[1] ? this.dates[1].getTime() : this.dates[1]
      this.rightPanelDate = this.splitPanels ? new Date(Math.max(splitRightPanelDate, rightPanelDate.getTime())) : rightPanelDate
    },
    panelLabelConfig (direction) {
      const handler = type => {
        const fn = type === 'month' ? this.showMonthPicker : this.showYearPicker
        return () => fn(direction)
      }

      const date = this[`${direction}PanelDate`]
      const { labels, separator } = formatDateLabels('zh-CN', '[yyyy年] [m月]', date)

      return {
        separator: separator,
        labels: labels.map(obj => ((obj.handler = handler(obj.type)), obj))
      }
    },
    prevYear (panel) {
      const increment = this.currentView === 'year' ? -10 : -1
      this.changePanelDate(panel, 'FullYear', increment)
    },
    nextYear (panel) {
      const increment = this.currentView === 'year' ? 10 : 1
      this.changePanelDate(panel, 'FullYear', increment)
    },
    prevMonth (panel) {
      this.changePanelDate(panel, 'Month', -1)
    },
    nextMonth (panel) {
      this.changePanelDate(panel, 'Month', 1)
    },
    changePanelDate (panel, type, increment, updateOtherPanel = true) {
      const current = new Date(this[`${panel}PanelDate`])
      current[`set${type}`](current[`get${type}`]() + increment)
      this[`${panel}PanelDate`] = current

      if (!updateOtherPanel) return

      if (this.splitPanels) {
        // change other panel if dates overlap
        const otherPanel = panel === 'left' ? 'right' : 'left'
        if (panel === 'left' && this.leftPanelDate >= this.rightPanelDate) {
          this.changePanelDate(otherPanel, type, 1)
        }
        if (panel === 'right' && this.rightPanelDate <= this.leftPanelDate) {
          this.changePanelDate(otherPanel, type, -1)
        }
      } else {
        // keep the panels together
        const otherPanel = panel === 'left' ? 'right' : 'left'
        const currentDate = this[`${otherPanel}PanelDate`]
        const temp = new Date(currentDate)

        if (type === 'Month') {
          const nextMonthLastDate = new Date(
            temp.getFullYear(), temp.getMonth() + increment + 1, 0
          ).getDate()
          temp.setDate(Math.min(nextMonthLastDate, temp.getDate()))
        }

        temp[`set${type}`](temp[`get${type}`]() + increment)
        this[`${otherPanel}PanelDate`] = temp
      }
    },
    showYearPicker (panel) {
      this[`${panel}PickerTable`] = 'year-table'
    },
    showMonthPicker (panel) {
      this[`${panel}PickerTable`] = 'month-table'
    },
    handlePreSelection (panel, value) {
      this[`${panel}PanelDate`] = value
      const currentViewType = this[`${panel}PickerTable`]
      if (currentViewType === 'year-table') this[`${panel}PickerTable`] = 'month-table'
      else this[`${panel}PickerTable`] = `${this.currentView}-table`

      if (!this.splitPanels) {
        const otherPanel = panel === 'left' ? 'right' : 'left'
        this[`${otherPanel}PanelDate`] = value

        const increment = otherPanel === 'left' ? -1 : 1 // #3973

        this.changePanelDate(otherPanel, 'Month', increment, false)
      }
    },
    handleRangePick (val, type) {
      if (this.rangeState.selecting || this.currentView === 'time') {
        if (this.currentView === 'time') {
          this.dates = val
        } else {
          const [minDate, maxDate] = [this.rangeState.from, val].sort(dateSorter)
          this.dates = [minDate, maxDate]
          this.rangeState = {
            from: minDate,
            to: maxDate,
            selecting: false
          }
        }
        this.handleConfirm(false, type || 'date')
      } else {
        this.rangeState = {
          from: val,
          to: null,
          selecting: true
        }
      }
    },
    handleChangeRange (val) {
      this.rangeState.to = val
    }
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var Date_date_rangevue_type_script_lang_js_ = (date_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/date-picker/panel/Date/date-range.vue





/* normalize component */

var date_range_component = normalizeComponent(
  Date_date_rangevue_type_script_lang_js_,
  date_rangevue_type_template_id_2c6d1382_render,
  date_rangevue_type_template_id_2c6d1382_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var date_range = (date_range_component.exports);
// CONCATENATED MODULE: ./src/components/date-picker/picker/date-picker.js






/* harmony default export */ var date_picker = ({
  name: 'BDatePicker',
  mixins: [picker],
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange'])
      },
      default: 'date'
    }
  },
  components: { DatePickerPanel: Date_date, RangeDatePickerPanel: date_range },
  computed: {
    panel () {
      const isRange = this.type === 'daterange' || this.type === 'datetimerange'
      return isRange ? 'RangeDatePickerPanel' : 'DatePickerPanel'
    },
    ownPickerProps () {
      return this.options
    }
  }
});

// CONCATENATED MODULE: ./src/components/date-picker/index.js


/* istanbul ignore next */
date_picker.install = function (Vue) {
  Vue.component(date_picker.name, date_picker)
}

/* harmony default export */ var components_date_picker = (date_picker);

// CONCATENATED MODULE: ./src/components/date-picker/picker/time-picker.js







/* harmony default export */ var time_picker = ({
  name: 'BTimePicker',
  mixins: [picker, time_mixins],
  components: { TimePickerPanel: Time_time, RangeTimePickerPanel: time_range },
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['time', 'timerange'])
      },
      default: 'time'
    }
  },
  computed: {
    panel () {
      const isRange = this.type === 'timerange'
      return isRange ? 'RangeTimePickerPanel' : 'TimePickerPanel'
    },
    ownPickerProps () {
      return {
        disabledHours: this.disabledHours,
        disabledMinutes: this.disabledMinutes,
        disabledSeconds: this.disabledSeconds,
        hideDisabledOptions: this.hideDisabledOptions
      }
    }
  },
  watch: {
    visible (visible) {
      if (visible) {
        this.$nextTick(() => {
          const spinners = findComponentsDownward(this, 'TimeSpinner')
          spinners.forEach(instance => instance.updateScroll())
        })
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/time-picker/index.js


/* istanbul ignore next */
time_picker.install = function (Vue) {
  Vue.component(time_picker.name, time_picker)
}

/* harmony default export */ var components_time_picker = (time_picker);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/timeline/timeline.vue?vue&type=template&id=4fbfcc74&
var timelinevue_type_template_id_4fbfcc74_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.classes},[_vm._t("default")],2)}
var timelinevue_type_template_id_4fbfcc74_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/timeline/timeline.vue?vue&type=template&id=4fbfcc74&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/timeline/timeline.vue?vue&type=script&lang=js&
//
//
//
//
//

const timelinevue_type_script_lang_js_prefixCls = 'bin-timeline'

/* harmony default export */ var timelinevue_type_script_lang_js_ = ({
  name: 'BTimeline',
  props: {
    pending: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `${timelinevue_type_script_lang_js_prefixCls}`,
        {
          [`${timelinevue_type_script_lang_js_prefixCls}-pending`]: this.pending
        }
      ]
    }
  }
});

// CONCATENATED MODULE: ./src/components/timeline/timeline.vue?vue&type=script&lang=js&
 /* harmony default export */ var timeline_timelinevue_type_script_lang_js_ = (timelinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/timeline/timeline.vue





/* normalize component */

var timeline_component = normalizeComponent(
  timeline_timelinevue_type_script_lang_js_,
  timelinevue_type_template_id_4fbfcc74_render,
  timelinevue_type_template_id_4fbfcc74_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var timeline = (timeline_component.exports);
// CONCATENATED MODULE: ./src/components/timeline/index.js


/* istanbul ignore next */
timeline.install = function (Vue) {
  Vue.component(timeline.name, timeline)
}

/* harmony default export */ var components_timeline = (timeline);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/timeline/timeline-item.vue?vue&type=template&id=2e40d03f&
var timeline_itemvue_type_template_id_2e40d03f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.itemClasses},[_c('div',{class:_vm.tailClasses}),_c('div',{ref:"dot",class:_vm.headClasses,style:(_vm.customColor)},[_vm._t("dot")],2),_c('div',{class:_vm.contentClasses},[_vm._t("default")],2)])}
var timeline_itemvue_type_template_id_2e40d03f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/timeline/timeline-item.vue?vue&type=template&id=2e40d03f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/timeline/timeline-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



const timeline_itemvue_type_script_lang_js_prefixCls = 'bin-timeline'

/* harmony default export */ var timeline_itemvue_type_script_lang_js_ = ({
  name: 'BTimelineItem',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      dot: false
    }
  },
  mounted () {
    this.dot = !!this.$refs.dot.innerHTML.length
  },
  computed: {
    itemClasses () {
      return `${timeline_itemvue_type_script_lang_js_prefixCls}-item`
    },
    tailClasses () {
      return `${timeline_itemvue_type_script_lang_js_prefixCls}-item-tail`
    },
    headClasses () {
      return [
        `${timeline_itemvue_type_script_lang_js_prefixCls}-item-head`,
        {
          [`${timeline_itemvue_type_script_lang_js_prefixCls}-item-head-custom`]: this.dot,
          [`${timeline_itemvue_type_script_lang_js_prefixCls}-item-head-${this.color}`]: this.headColorShow
        }
      ]
    },
    headColorShow () {
      return oneOf(this.color, ['primary', 'success', 'info', 'warning', 'danger'])
    },
    customColor () {
      let style = {}
      if (this.color) {
        if (!this.headColorShow) {
          style = {
            'color': this.color,
            'border-color': this.color
          }
        }
      }

      return style
    },
    contentClasses () {
      return `${timeline_itemvue_type_script_lang_js_prefixCls}-item-content`
    }
  }
});

// CONCATENATED MODULE: ./src/components/timeline/timeline-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var timeline_timeline_itemvue_type_script_lang_js_ = (timeline_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/timeline/timeline-item.vue





/* normalize component */

var timeline_item_component = normalizeComponent(
  timeline_timeline_itemvue_type_script_lang_js_,
  timeline_itemvue_type_template_id_2e40d03f_render,
  timeline_itemvue_type_template_id_2e40d03f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var timeline_item = (timeline_item_component.exports);
// CONCATENATED MODULE: ./src/components/timeline-item/index.js


/* istanbul ignore next */
timeline_item.install = function (Vue) {
  Vue.component(timeline_item.name, timeline_item)
}

/* harmony default export */ var components_timeline_item = (timeline_item);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loadingbar/loading-bar.vue?vue&type=template&id=2236c91e&
var loading_barvue_type_template_id_2236c91e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade-in"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],class:_vm.classes,style:(_vm.outerStyles)},[_c('div',{class:_vm.innerClasses,style:(_vm.styles)})])])}
var loading_barvue_type_template_id_2236c91e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/loadingbar/loading-bar.vue?vue&type=template&id=2236c91e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loadingbar/loading-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

const loading_barvue_type_script_lang_js_prefixCls = 'bin-loading-bar'

/* harmony default export */ var loading_barvue_type_script_lang_js_ = ({
  name: 'BLoadingBar',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    failedColor: {
      type: String,
      default: 'error'
    },
    height: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {
      percent: 0,
      status: 'success',
      show: false
    }
  },
  computed: {
    classes () {
      return `${loading_barvue_type_script_lang_js_prefixCls}`
    },
    innerClasses () {
      return [
        `${loading_barvue_type_script_lang_js_prefixCls}-inner`,
        {
          [`${loading_barvue_type_script_lang_js_prefixCls}-inner-color-primary`]: this.color === 'primary' && this.status === 'success',
          [`${loading_barvue_type_script_lang_js_prefixCls}-inner-failed-color-error`]: this.failedColor === 'error' && this.status === 'error'
        }
      ]
    },
    outerStyles () {
      return {
        height: `${this.height}px`
      }
    },
    styles () {
      let style = {
        width: `${this.percent}%`,
        height: `${this.height}px`
      }

      if (this.color !== 'primary' && this.status === 'success') {
        style.backgroundColor = this.color
      }

      if (this.failedColor !== 'error' && this.status === 'error') {
        style.backgroundColor = this.failedColor
      }

      return style
    }
  }
});

// CONCATENATED MODULE: ./src/components/loadingbar/loading-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var loadingbar_loading_barvue_type_script_lang_js_ = (loading_barvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/loadingbar/loading-bar.vue





/* normalize component */

var loading_bar_component = normalizeComponent(
  loadingbar_loading_barvue_type_script_lang_js_,
  loading_barvue_type_template_id_2236c91e_render,
  loading_barvue_type_template_id_2236c91e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading_bar = (loading_bar_component.exports);
// CONCATENATED MODULE: ./src/components/loadingbar/loading-bar.js



loading_bar.newInstance = properties => {
  const _props = properties || {}
  // 创建一个实例
  const Instance = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
    data: _props,
    render (h) {
      return h(loading_bar, {
        props: _props
      })
    }
  })
  // 绑定组件实例
  const component = Instance.$mount()
  // 添加到dom
  document.body.appendChild(component.$el)
  // 这个loading_bar即是返回的Vnode
  const loadingBar = Instance.$children[0]
  // 返回一个vnode对象
  return {
    update (options) {
      if ('percent' in options) {
        loadingBar.percent = options.percent
      }
      if (options.status) {
        loadingBar.status = options.status
      }
      if ('show' in options) {
        loadingBar.show = options.show
      }
    },
    component: loadingBar,
    destroy () {
      document.body.removeChild(document.getElementsByClassName('bin-loading-bar')[0])
    }
  }
}

/* harmony default export */ var loadingbar_loading_bar = (loading_bar);

// CONCATENATED MODULE: ./src/components/loadingbar/index.js


let loadingBarInstance
let color = 'primary'
let duration = 800
let failedColor = 'error'
let height = 2
let timer

// 获取loadingBar的实例
function getLoadingBarInstance () {
  //初始化实例
  loadingBarInstance = loadingBarInstance || loadingbar_loading_bar.newInstance({
    color: color,
    failedColor: failedColor,
    height: height
  })
  return loadingBarInstance
}

//更新进度并传入配置
function loadingbar_update (options) {
  let instance = getLoadingBarInstance()
  instance.update(options)
}

// 隐藏加载进度
function hide () {
  setTimeout(() => {
    loadingbar_update({
      show: false
    })
    setTimeout(() => {
      loadingbar_update({
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

/* harmony default export */ var loadingbar = ({
  start () {
    if (timer) return
    let percent = 0
    loadingbar_update({
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
      loadingbar_update({
        percent: percent,
        status: 'success',
        show: true
      })
    }, 200)
  },
  update (percent) {
    clearTimer()
    loadingbar_update({
      percent: percent,
      status: 'success',
      show: true
    })
  },
  done () {
    clearTimer()
    loadingbar_update({
      percent: 100,
      status: 'success',
      show: true
    })
    hide()
  },
  error () {
    clearTimer()
    loadingbar_update({
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
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/message/message.vue?vue&type=template&id=65ea3196&
var messagevue_type_template_id_65ea3196_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-message",style:(_vm.wrapStyles)},_vm._l((_vm.notices),function(notice){return _c('notice',{key:notice.name,attrs:{"type":notice.type,"render":notice.render,"content":notice.content,"closable":notice.closable,"transition-name":notice.transitionName,"duration":notice.duration,"name":notice.name,"on-close":notice.onClose}})}),1)}
var messagevue_type_template_id_65ea3196_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/message/message.vue?vue&type=template&id=65ea3196&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53850efa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/base/notice/notice.vue?vue&type=template&id=7ca53f5a&
var noticevue_type_template_id_7ca53f5a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transitionName,"appear":""},on:{"enter":_vm.handleEnter,"leave":_vm.handleLeave}},[_c('div',{class:_vm.classes},[_c('div',{staticClass:"bg-wrap"},[_c('div',{ref:"content",class:[_vm.baseClass + '-content',(_vm.baseClass + "-" + _vm.type)]},[(_vm.content)?_c('div',{class:[_vm.baseClass + '-content-text']},[_c('b-icon',{attrs:{"name":_vm.iconTypes}}),_c('span',[_vm._v(_vm._s(_vm.content))])],1):_vm._e(),_c('div',{class:[_vm.baseClass + '-content-text']},[_c('render-cell',{attrs:{"render":_vm.renderFunc}})],1),(_vm.closable)?_c('a',{class:[_vm.baseClass + '-close'],on:{"click":_vm.close}},[_c('i',{staticClass:"iconfont icon-ios-close"})]):_vm._e()])])])])}
var noticevue_type_template_id_7ca53f5a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/base/notice/notice.vue?vue&type=template&id=7ca53f5a&

// CONCATENATED MODULE: ./src/components/base/render.js
/* harmony default export */ var base_render = ({
  name: 'RenderCell',
  functional: true,
  props: {
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render(h)
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/base/notice/notice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const noticevue_type_script_lang_js_prefixCls = 'bin-message'
/* harmony default export */ var noticevue_type_script_lang_js_ = ({
  components: {
    RenderCell: base_render
  },
  props: {
    duration: {
      type: Number,
      default: 3
    },
    type: {
      type: String
    },
    content: {
      type: String,
      default: ''
    },
    render: {
      type: Function
    },
    closable: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    onClose: {
      type: Function
    },
    transitionName: {
      type: String
    }
  },
  computed: {
    classes () {
      return [
        this.baseClass,
        {
          [`${this.className}`]: !!this.className,
          [`${this.baseClass}-closable`]: this.closable
        }
      ]
    },
    baseClass () {
      return `${noticevue_type_script_lang_js_prefixCls}-notice`
    },
    renderFunc () {
      return this.render || function () {
      }
    },
    iconTypes () {
      const iconMap = {
        'info': 'ios-information-circle',
        'primary': 'ios-information-circle',
        'success': 'ios-checkmark-circle',
        'warning': 'ios-alert',
        'danger': 'ios-close-circle'
      }
      return iconMap[this.type]
    }
  },
  methods: {
    clearCloseTimer () {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
        this.closeTimer = null
      }
    },
    close () {
      this.clearCloseTimer()
      this.onClose()
      this.$parent.close(this.name)
    },
    handleEnter (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    handleLeave (el) {
      // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
      if (document.getElementsByClassName('bin-message-notice').length !== 1) {
        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      }
    }
  },
  mounted () {
    this.clearCloseTimer()
    if (this.duration !== 0) {
      this.closeTimer = setTimeout(() => {
        this.close()
      }, this.duration * 1000)
    }
  },
  beforeDestroy () {
    this.clearCloseTimer()
  }
});

// CONCATENATED MODULE: ./src/components/base/notice/notice.vue?vue&type=script&lang=js&
 /* harmony default export */ var notice_noticevue_type_script_lang_js_ = (noticevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/base/notice/notice.vue





/* normalize component */

var notice_component = normalizeComponent(
  notice_noticevue_type_script_lang_js_,
  noticevue_type_template_id_7ca53f5a_render,
  noticevue_type_template_id_7ca53f5a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var notice = (notice_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/message/message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//




let messagevue_type_script_lang_js_seed = 0
const messagevue_type_script_lang_js_now = Date.now()

// 用时间戳设置为uuid
function messagevue_type_script_lang_js_getUuid () {
  return 'binMessage_' + messagevue_type_script_lang_js_now + '_' + (messagevue_type_script_lang_js_seed++)
}

/* harmony default export */ var messagevue_type_script_lang_js_ = ({
  components: { Notice: notice },
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          top: '65px',
          left: '50%'
        }
      }
    }
  },
  data () {
    return {
      notices: [],
      tIndex: this.handleGetIndex()
    }
  },
  computed: {
    wrapStyles () {
      let styles = Object.assign({}, this.styles)
      styles['z-index'] = 1010 + this.tIndex
      return styles
    }
  },
  methods: {
    add (notice) {
      const name = notice.name || messagevue_type_script_lang_js_getUuid()
      let _notice = Object.assign({
        styles: {
          right: '50%'
        },
        name: name
      }, notice)
      this.notices.push(_notice)
      this.tIndex = this.handleGetIndex()
    },
    close (name) {
      const notices = this.notices
      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1)
          break
        }
      }
    },
    closeAll () {
      this.notices = []
    },
    handleGetIndex () {
      transferIncrease()
      return transferIndex
    }
  }
});

// CONCATENATED MODULE: ./src/components/message/message.vue?vue&type=script&lang=js&
 /* harmony default export */ var message_messagevue_type_script_lang_js_ = (messagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/message/message.vue





/* normalize component */

var message_component = normalizeComponent(
  message_messagevue_type_script_lang_js_,
  messagevue_type_template_id_65ea3196_render,
  messagevue_type_template_id_65ea3196_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var message_message = (message_component.exports);
// CONCATENATED MODULE: ./src/components/message/message.js



message_message.newInstance = properties => {
  const _props = properties || {}
  // 创建一个实例
  const Instance = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
    render (h) {
      return h(message_message, {
        props: _props
      })
    }
  })
  // 绑定组件实例
  const component = Instance.$mount()
  // 添加到dom
  document.body.appendChild(component.$el)
  // 这个notification即是返回的Vnode
  const message = Instance.$children[0]
  // 返回一个vnode对象
  return {
    notice (noticeProps) {
      message.add(noticeProps)
    },
    remove (name) {
      message.close(name)
    },
    component: message,
    destroy (element) {
      message.closeAll()
      setTimeout(function () {
        document.body.removeChild(document.getElementsByClassName(element)[0])
      }, 500)
    }
  }
}

/* harmony default export */ var components_message_message = (message_message);

// CONCATENATED MODULE: ./src/components/message/index.js


const prefixKey = 'bin_message_key_'
let messageInstance
let message_name = 1

// 获取一个实例
function getMessageInstance () {
  messageInstance = messageInstance || components_message_message.newInstance({
    styles: {
      top: '24px'
    }
  })
  return messageInstance
}

// 提示方法
function message_notice (options) {
  let instance = getMessageInstance()
  let _notice = Object.assign({ name: `${prefixKey}${message_name}` }, options)
  // 实例弹出提示
  instance.notice(_notice)
  // 用于手动消除
  return (function () {
    let target = message_name++

    return function () {
      instance.remove(`${prefixKey}${target}`)
    }
  })()
}

let defaultOption = {
  transitionName: 'move-up',
  type: 'info',
  content: '',
  duration: 3,
  closable: false,
  render: function () {
  },
  onClose: function () {
  }
}
/* harmony default export */ var components_message = ({
  name: 'Message',
  message (options) {
    // 如果第一个是默认字符
    let _option = {}
    if (typeof options === 'string') {
      _option = Object.assign({}, defaultOption, { content: options })
      return message_notice(_option)
    }
    _option = Object.assign({}, defaultOption, options)
    return message_notice(_option)
  },
  destroy () {
    let instance = getMessageInstance()
    messageInstance = null
    instance.destroy('bin-message')
  }
});

// CONCATENATED MODULE: ./src/index.js
// 核心插件

// 组件



















































// 全局注册的实例不需要放入components下



const components = [
  components_icon, components_button, components_button_group, scrollbar,
  components_back_top, components_card, components_divider, components_modal, components_drawer,
  tag, components_progress, components_circle, components_alert, components_loading,
  collapse_transition, components_collapse, collapse_panel, components_badge, components_breadcrumb, components_breadcrumb_item,
  components_input, components_input_number, components_rate, components_switch, components_checkbox, components_checkbox_group, components_radio, components_radio_group, components_tooltip,
  components_form, components_form_item,
  components_container, components_dropdown, components_dropdown_item, components_dropdown_menu,
  components_select, components_select_option, select_option_group, components_table, components_page, components_tree, components_cascade,
  components_menu, components_submenu, components_menu_item, components_menu_group, components_upload, components_date_picker, components_time_picker,
  components_timeline, components_timeline_item
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  // 注册全局的组件实例
  Vue.prototype.$loading = loadingbar
  Vue.prototype.$message = components_message.message
  // 模态框实例及快捷方法
  Vue.prototype.$modal = components_modal
  Vue.prototype.$alert = components_modal.alert
  Vue.prototype.$confirm = components_modal.confirm

  Vue.use(core)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var src = ({
  install,
  Icon: components_icon,
  Button: components_button,
  ButtonGroup: components_button_group,
  ScrollBar: scrollbar,
  BackTop: components_back_top,
  Card: components_card,
  Divider: components_divider,
  Modal: components_modal,
  Drawer: components_drawer,
  Tag: tag,
  Progress: components_progress,
  Circle: components_circle,
  Alert: components_alert,
  Loading: components_loading,
  CollapseTransition: collapse_transition,
  Collapse: components_collapse,
  CollapsePanel: collapse_panel,
  Breadcrumb: components_breadcrumb,
  breadcrumbItem: components_breadcrumb_item,
  LoadingBar: loadingbar,
  Message: components_message,
  Badge: components_badge,
  Input: components_input,
  InputNumber: components_input_number,
  Rate: components_rate,
  Switch: components_switch,
  Checkbox: components_checkbox,
  CheckboxGroup: components_checkbox_group,
  Radio: components_radio,
  RadioGroup: components_radio_group,
  Tooltip: components_tooltip,
  Form: components_form,
  FormItem: components_form_item,
  Container: components_container,
  Dropdown: components_dropdown,
  DropdownItem: components_dropdown_item,
  DropdownMenu: components_dropdown_menu,
  Select: components_select,
  Option: components_select_option,
  OptionGroup: select_option_group,
  Cascade: components_cascade,
  Table: components_table,
  Page: components_page,
  Tree: components_tree,
  Menu: components_menu,
  SubMenu: components_submenu,
  MenuItem: components_menu_item,
  MenuItemGroup: components_menu_group,
  Upload: components_upload,
  DatePicker: components_date_picker,
  TimePicker: components_time_picker,
  Timeline: components_timeline,
  TimelineItem: components_timeline_item
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });