(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bin-ui"] = factory(require("vue"));
	else
		root["bin-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "03d6":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("9c0e");
var toIObject = __webpack_require__("6ca1");
var arrayIndexOf = __webpack_require__("39ad")(false);
var IE_PROTO = __webpack_require__("5a94")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "051b":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("1a14");
var createDesc = __webpack_require__("10db");
module.exports = __webpack_require__("0bad") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "05f5":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7a41");
var document = __webpack_require__("ef08").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "072d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("9876");
var gOPS = __webpack_require__("fed5");
var pIE = __webpack_require__("1917");
var toObject = __webpack_require__("0983");
var IObject = __webpack_require__("9fbb");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("4b8b")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "0983":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("c901");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "0ae2":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("9876");
var gOPS = __webpack_require__("fed5");
var pIE = __webpack_require__("1917");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "0b99":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("19fa")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("393a")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "0bad":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("4b8b")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "1098":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("17ed");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("f893");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "10db":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


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

/***/ "1609":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "17ed":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("511f"), __esModule: true };

/***/ }),

/***/ "1836":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("6ca1");
var gOPN = __webpack_require__("6438").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "1907":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("d46b"), __esModule: true };

/***/ }),

/***/ "1917":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


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

/***/ "19fa":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("fc5e");
var defined = __webpack_require__("c901");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "1a14":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77e9");
var IE8_DOM_DEFINE = __webpack_require__("faf5");
var toPrimitive = __webpack_require__("3397");
var dP = Object.defineProperty;

exports.f = __webpack_require__("0bad") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


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

/***/ "22bf":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("dfe5");
__webpack_require__("0b99");
__webpack_require__("658f");
__webpack_require__("c579");
__webpack_require__("365c");
__webpack_require__("5cb7");
module.exports = __webpack_require__("5524").Promise;


/***/ }),

/***/ "23dd":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("6aa8");
var ITERATOR = __webpack_require__("cc15")('iterator');
var Iterators = __webpack_require__("8a0d");
module.exports = __webpack_require__("5524").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "24a2":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77e9");
var isObject = __webpack_require__("7a41");
var newPromiseCapability = __webpack_require__("f2c2");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "26dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("6f4f");
var descriptor = __webpack_require__("10db");
var setToStringTag = __webpack_require__("92f0");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("051b")(IteratorPrototype, __webpack_require__("cc15")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


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

/***/ "2f9a":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "301c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("e198")('asyncIterator');


/***/ }),

/***/ "3397":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("7a41");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "365c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("512c");
var core = __webpack_require__("5524");
var global = __webpack_require__("ef08");
var speciesConstructor = __webpack_require__("db37");
var promiseResolve = __webpack_require__("24a2");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "393a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("e444");
var $export = __webpack_require__("512c");
var redefine = __webpack_require__("ba01");
var hide = __webpack_require__("051b");
var Iterators = __webpack_require__("8a0d");
var $iterCreate = __webpack_require__("26dd");
var setToStringTag = __webpack_require__("92f0");
var getPrototypeOf = __webpack_require__("ce7a");
var ITERATOR = __webpack_require__("cc15")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "39ad":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6ca1");
var toLength = __webpack_require__("d16a");
var toAbsoluteIndex = __webpack_require__("9d11");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "3f6b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("b9c7"), __esModule: true };

/***/ }),

/***/ "41b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("3f6b");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),

/***/ "4b8b":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "4d20":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("1917");
var createDesc = __webpack_require__("10db");
var toIObject = __webpack_require__("6ca1");
var toPrimitive = __webpack_require__("3397");
var has = __webpack_require__("9c0e");
var IE8_DOM_DEFINE = __webpack_require__("faf5");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("0bad") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "4d88":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "4de9":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "4e71":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("e198")('observable');


/***/ }),

/***/ "4ebc":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("4d88");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "511f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0b99");
__webpack_require__("658f");
module.exports = __webpack_require__("fcd4").f('iterator');


/***/ }),

/***/ "512c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ef08");
var core = __webpack_require__("5524");
var ctx = __webpack_require__("9c0c");
var hide = __webpack_require__("051b");
var has = __webpack_require__("9c0e");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "51eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _rule = __webpack_require__("1afe");

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value);
  _rule2['default'].required(rule, value, source, errors, options, type);
  callback(errors);
}

exports['default'] = required;

/***/ }),

/***/ "5524":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5a94":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("b367")('keys');
var uid = __webpack_require__("8b1a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "5cb7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("512c");
var newPromiseCapability = __webpack_require__("f2c2");
var perform = __webpack_require__("c2a3");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


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

/***/ "6438":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("03d6");
var hiddenKeys = __webpack_require__("9742").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "658f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6858");
var global = __webpack_require__("ef08");
var hide = __webpack_require__("051b");
var Iterators = __webpack_require__("8a0d");
var TO_STRING_TAG = __webpack_require__("cc15")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6858":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("2f9a");
var step = __webpack_require__("ea34");
var Iterators = __webpack_require__("8a0d");
var toIObject = __webpack_require__("6ca1");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("393a")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "693d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("ef08");
var has = __webpack_require__("9c0e");
var DESCRIPTORS = __webpack_require__("0bad");
var $export = __webpack_require__("512c");
var redefine = __webpack_require__("ba01");
var META = __webpack_require__("e34a").KEY;
var $fails = __webpack_require__("4b8b");
var shared = __webpack_require__("b367");
var setToStringTag = __webpack_require__("92f0");
var uid = __webpack_require__("8b1a");
var wks = __webpack_require__("cc15");
var wksExt = __webpack_require__("fcd4");
var wksDefine = __webpack_require__("e198");
var enumKeys = __webpack_require__("0ae2");
var isArray = __webpack_require__("4ebc");
var anObject = __webpack_require__("77e9");
var isObject = __webpack_require__("7a41");
var toIObject = __webpack_require__("6ca1");
var toPrimitive = __webpack_require__("3397");
var createDesc = __webpack_require__("10db");
var _create = __webpack_require__("6f4f");
var gOPNExt = __webpack_require__("1836");
var $GOPD = __webpack_require__("4d20");
var $DP = __webpack_require__("1a14");
var $keys = __webpack_require__("9876");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6438").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("1917").f = $propertyIsEnumerable;
  __webpack_require__("fed5").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("e444")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("051b")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "6aa8":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("4d88");
var TAG = __webpack_require__("cc15")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "6ca1":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("9fbb");
var defined = __webpack_require__("c901");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "6d2f":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("8a0d");
var ITERATOR = __webpack_require__("cc15")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6f4f":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("77e9");
var dPs = __webpack_require__("85e7");
var enumBugKeys = __webpack_require__("9742");
var IE_PROTO = __webpack_require__("5a94")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("05f5")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("9141").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


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

/***/ "7336":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("512c");
var core = __webpack_require__("5524");
var fails = __webpack_require__("4b8b");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "77e9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7a41");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "7a41":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8034":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("b7fa"), __esModule: true };

/***/ }),

/***/ "8119":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("693d");
__webpack_require__("dfe5");
__webpack_require__("301c");
__webpack_require__("4e71");
module.exports = __webpack_require__("5524").Symbol;


/***/ }),

/***/ "85e7":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("1a14");
var anObject = __webpack_require__("77e9");
var getKeys = __webpack_require__("9876");

module.exports = __webpack_require__("0bad") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8771":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("cc15")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


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

/***/ "899e":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("051b");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "8a0d":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "8b1a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

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

/***/ "8e5c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ef08");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "8ecb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ef08");
var macrotask = __webpack_require__("bce0").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("4d88")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "9141":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("ef08").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = {"name":"bin-ui","version":"1.4.6","description":"基于 vue2.6 / vue-cli3 的 UI 组件库","main":"lib/bin-ui.common.js","keywords":["bin-ui","bin","ui","vue","vue","components"],"author":"wang bin","files":["lib","src"],"private":false,"license":"MIT","scripts":{"serve":"vue-cli-service serve","lint":"vue-cli-service lint","build":"vue-cli-service build","build:lib":"npm run lib && npm run style","lib":"vue-cli-service build --target lib --name bin-ui --dest lib src/index.js","style":"gulp build"},"homepage":"https://wangbin3162.github.io/bin-ui-doc/#/giud","dependencies":{"async-validator":"^1.11.2","core-js":"^2.6.5","popper.js":"^1.15.0","resize-observer-polyfill":"^1.5.1","vue":"^2.6.6","vue-router":"^3.0.4"},"devDependencies":{"@babel/core":"^7.4.3","@babel/plugin-transform-runtime":"^7.4.4","@babel/preset-env":"^7.4.3","@vue/cli-plugin-babel":"^3.5.0","@vue/cli-plugin-eslint":"^3.5.0","@vue/cli-service":"^3.5.0","babel-eslint":"^10.0.1","eslint":"^5.8.0","eslint-plugin-vue":"^5.0.0","gulp":"^4.0.0","gulp-autoprefixer":"^4.0.0","gulp-cssmin":"^0.1.7","gulp-stylus":"^2.7.0","highlight.js":"^9.15.6","markdown-it":"^8.4.2","markdown-it-anchor":"^5.0.2","markdown-it-container":"^2.0.0","stylus":"^0.54.5","stylus-loader":"^3.0.2","velocity-animate":"^1.5.2","vue-markdown-loader":"^2.4.1","vue-template-compiler":"^2.5.21"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{"no-debugger":"off","no-console":"off","indent":"off","space-before-function-paren":"off","no-unused-vars":"off"},"parserOptions":{"parser":"babel-eslint"}},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions","not ie <= 8"]};

/***/ }),

/***/ "92f0":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("1a14").f;
var has = __webpack_require__("9c0e");
var TAG = __webpack_require__("cc15")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "9742":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


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

/***/ "9876":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("03d6");
var enumBugKeys = __webpack_require__("9742");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


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

/***/ "9c0c":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("1609");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c0e":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "9c4a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = undefined;

var _stringify = __webpack_require__("8034");

var _stringify2 = _interopRequireDefault(_stringify);

exports.newMessages = newMessages;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
      var cloned = JSON.parse((0, _stringify2['default'])(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = exports.messages = newMessages();

/***/ }),

/***/ "9d11":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("fc5e");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "9fbb":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("4d88");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "a043":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _util = __webpack_require__("fa49");

var util = _interopRequireWildcard(_util);

var _required = __webpack_require__("975a");

var _required2 = _interopRequireDefault(_required);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
    return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && !types.array(value);
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
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) !== rule.type) {
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

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__("e1de");

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__("1907");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

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
    if ((typeof rules === 'undefined' ? 'undefined' : (0, _typeof3['default'])(rules)) !== 'object' || Array.isArray(rules)) {
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
    if (!this.rules || (0, _keys2['default'])(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return _promise2['default'].resolve();
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
    var keys = options.keys || (0, _keys2['default'])(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = (0, _extends3['default'])({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = (0, _extends3['default'])({}, rule);
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
      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof3['default'])(rule.fields) === 'object' || (0, _typeof3['default'])(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return (0, _extends3['default'])({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (errors.length) {
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
          fieldsSchema = (0, _extends3['default'])({}, fieldsSchema, data.rule.fields);
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
    var keys = (0, _keys2['default'])(rule);
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

/***/ "b367":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("5524");
var global = __webpack_require__("ef08");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("e444") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "b7fa":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("5524");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "b9c7":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("e507");
module.exports = __webpack_require__("5524").Object.assign;


/***/ }),

/***/ "ba01":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("051b");


/***/ }),

/***/ "ba43":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "bce0":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9c0c");
var invoke = __webpack_require__("4de9");
var html = __webpack_require__("9141");
var cel = __webpack_require__("05f5");
var global = __webpack_require__("ef08");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("4d88")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "bdad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("ef08");
var core = __webpack_require__("5524");
var dP = __webpack_require__("1a14");
var DESCRIPTORS = __webpack_require__("0bad");
var SPECIES = __webpack_require__("cc15")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "c253":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9c0c");
var call = __webpack_require__("c4c1");
var isArrayIter = __webpack_require__("6d2f");
var anObject = __webpack_require__("77e9");
var toLength = __webpack_require__("d16a");
var getIterFn = __webpack_require__("23dd");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "c2a3":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "c4c1":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("77e9");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "c579":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("e444");
var global = __webpack_require__("ef08");
var ctx = __webpack_require__("9c0c");
var classof = __webpack_require__("6aa8");
var $export = __webpack_require__("512c");
var isObject = __webpack_require__("7a41");
var aFunction = __webpack_require__("1609");
var anInstance = __webpack_require__("ba43");
var forOf = __webpack_require__("c253");
var speciesConstructor = __webpack_require__("db37");
var task = __webpack_require__("bce0").set;
var microtask = __webpack_require__("8ecb")();
var newPromiseCapabilityModule = __webpack_require__("f2c2");
var perform = __webpack_require__("c2a3");
var userAgent = __webpack_require__("8e5c");
var promiseResolve = __webpack_require__("24a2");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("cc15")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("899e")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("92f0")($Promise, PROMISE);
__webpack_require__("bdad")(PROMISE);
Wrapper = __webpack_require__("5524")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("8771")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "c8ba":
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

/***/ "c901":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "cc15":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("b367")('wks');
var uid = __webpack_require__("8b1a");
var Symbol = __webpack_require__("ef08").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


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

/***/ "ce7a":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("9c0e");
var toObject = __webpack_require__("0983");
var IE_PROTO = __webpack_require__("5a94")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "d16a":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("fc5e");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "d46b":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("e70e");
module.exports = __webpack_require__("5524").Object.keys;


/***/ }),

/***/ "db37":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("77e9");
var aFunction = __webpack_require__("1609");
var SPECIES = __webpack_require__("cc15")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "dfe5":
/***/ (function(module, exports) {



/***/ }),

/***/ "e198":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ef08");
var core = __webpack_require__("5524");
var LIBRARY = __webpack_require__("e444");
var wksExt = __webpack_require__("fcd4");
var defineProperty = __webpack_require__("1a14").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "e1de":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("22bf"), __esModule: true };

/***/ }),

/***/ "e34a":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("8b1a")('meta');
var isObject = __webpack_require__("7a41");
var has = __webpack_require__("9c0e");
var setDesc = __webpack_require__("1a14").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("4b8b")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "e444":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "e507":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("512c");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("072d") });


/***/ }),

/***/ "e70e":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("0983");
var $keys = __webpack_require__("9876");

__webpack_require__("7336")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "ea34":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "ef08":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "f2c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("1609");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f893":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("8119"), __esModule: true };

/***/ }),

/***/ "fa49":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = undefined;

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__("e1de");

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__("1907");

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__("8034");

var _stringify2 = _interopRequireDefault(_stringify);

exports.convertFieldsError = convertFieldsError;
exports.format = format;
exports.isEmptyValue = isEmptyValue;
exports.isEmptyObject = isEmptyObject;
exports.asyncMap = asyncMap;
exports.complementError = complementError;
exports.deepMerge = deepMerge;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
            return (0, _stringify2['default'])(args[i++]);
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
  return (0, _keys2['default'])(obj).length === 0;
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
  (0, _keys2['default'])(objArr).forEach(function (k) {
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
    firstFields = (0, _keys2['default'])(objArr);
  }
  var objArrKeys = (0, _keys2['default'])(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new _promise2['default'](function (resolve, reject) {
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
        if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && (0, _typeof3['default'])(target[s]) === 'object') {
          target[s] = (0, _extends3['default'])({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/***/ }),

/***/ "faf5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("0bad") && !__webpack_require__("4b8b")(function () {
  return Object.defineProperty(__webpack_require__("05f5")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
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
        //获得页面向左、向上卷动的距离
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
util.open = function (url) {
  let a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
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
      color = '#f03f14'
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
  if (typeof text === 'object') {// 如果是对象则调用打印对象方式
    console.dir(text)
    return
  }
  if (back) { // 如果是打印带背景图的
    console.log(
      `%c ${text} `,
      `background:${typeColor(type)}; padding: 2px; border-radius: 4px;color: #fff;`,
    )
  } else {
    console.log(
      `%c ${text} `,
      `color: ${typeColor(type)};`,
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
    Vue.prototype.$resize = {addResizeListener: addResizeListener, removeResizeListener: removeResizeListener}
    // 打印UI官网
    utils_log.pretty('[bin-ui] ' + package_0.version, 'https://wangbin3162.github.io/bin-ui-doc/')
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
  render (h, {children}) {
    const data = {
      on: Transition
    }

    return h('transition', data, children)
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/src/icon.vue?vue&type=template&id=24f6d348&
var iconvue_type_template_id_24f6d348_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:['iconfont','icon-' + _vm.name],style:(_vm.style)})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icon/src/icon.vue?vue&type=template&id=24f6d348&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/src/icon.vue?vue&type=script&lang=js&
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

// CONCATENATED MODULE: ./src/components/icon/src/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./src/components/icon/src/icon.vue





/* normalize component */

var icon_component = normalizeComponent(
  src_iconvue_type_script_lang_js_,
  iconvue_type_template_id_24f6d348_render,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/src/button.vue?vue&type=template&id=5c5e916f&
var buttonvue_type_template_id_5c5e916f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bin-button",class:['bin-button--' + _vm.type , 'bin-button--' + _vm.size,
    {
      'is-disabled': _vm.disabled,
      'is-loading': _vm.loading,
      'is-plain': _vm.plain,
      'is-round': _vm.round,
      'is-circle': _vm.circle
    }
  ],attrs:{"disabled":_vm.disabled || _vm.loading,"type":_vm.nativeType},on:{"click":_vm.handleClick}},[(_vm.loading)?_c('b-icon',{attrs:{"name":"loading"}}):_vm._e(),(_vm.icon && !_vm.loading)?_c('i',{class:['iconfont','icon-'+_vm.icon]}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()],1)}
var buttonvue_type_template_id_5c5e916f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/button/src/button.vue?vue&type=template&id=5c5e916f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/src/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./src/components/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/button/src/button.vue





/* normalize component */

var button_component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_5c5e916f_render,
  buttonvue_type_template_id_5c5e916f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_button = (button_component.exports);
// CONCATENATED MODULE: ./src/components/button/index.js


/* istanbul ignore next */
src_button.install = function (Vue) {
  Vue.component(src_button.name, src_button)
}

/* harmony default export */ var components_button = (src_button);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/src/button-group.vue?vue&type=template&id=90801ce6&
var button_groupvue_type_template_id_90801ce6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-button-group"},[_vm._t("default")],2)}
var button_groupvue_type_template_id_90801ce6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/button/src/button-group.vue?vue&type=template&id=90801ce6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/src/button-group.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var button_groupvue_type_script_lang_js_ = ({
  name: 'BButtonGroup'
});

// CONCATENATED MODULE: ./src/components/button/src/button-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_button_groupvue_type_script_lang_js_ = (button_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/button/src/button-group.vue





/* normalize component */

var button_group_component = normalizeComponent(
  src_button_groupvue_type_script_lang_js_,
  button_groupvue_type_template_id_90801ce6_render,
  button_groupvue_type_template_id_90801ce6_staticRenderFns,
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

function renderThumbStyle ({move, size, bar}) {
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
    const {size, move, bar} = this
    let barStyle = Object.assign({}, renderThumbStyle({size, move, bar}), this.barStyle)
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
  components: {Bar: src_bar},
  props: {
    normal: {
      type: Boolean,
      default: false
    },  // 是否采用原生滚动（即只是隐藏掉了原生滚动条，但并没有使用自定义的滚动条）
    always: { // 是否是一直显示，不是悬停显示
      type: Boolean,
      default: false
    },
    wrapStyle: {},  // 内联方式 自定义wrap容器的样式
    wrapClass: {},  // 类名方式 自定义wrap容器的样式
    viewClass: {},  // 内联方式 自定义view容器的样式
    viewStyle: {},  // 类名方式 自定义view容器的样式
    barStyle: {},// bar的样式
    barWrapStyle: {},//bar容器样式
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {                // view容器用那种标签渲染，默认为div
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
            class: [{'always': this.always}],
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
            class: [{'always': this.always}],
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
          ref: 'wrap',
        }, [view])
      ]
    }
    return h('div', {class: 'bin-scrollbar'}, nodes)
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
    !this.noresize && addResizeListener(this.$refs.resize, this.update)
  },
  beforeDestroy () {
    if (this.normal) return
    !this.noresize && removeResizeListener(this.$refs.resize, this.update)
  }
});

// CONCATENATED MODULE: ./src/components/scrollbar/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main)
}

/* harmony default export */ var scrollbar = (main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/back-top/src/back-top.vue?vue&type=template&id=2c1c04f4&
var back_topvue_type_template_id_2c1c04f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"back-top-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.backTop),expression:"backTop"}],class:_vm.classes,style:(_vm.styles),on:{"click":_vm.back}},[_vm._t("default",[_c('div',{class:_vm.innerClasses},[_c('b-icon',{attrs:{"name":"md-arrow-dropup","size":"24"}})],1)])],2)])}
var back_topvue_type_template_id_2c1c04f4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/back-top/src/back-top.vue?vue&type=template&id=2c1c04f4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/back-top/src/back-top.vue?vue&type=script&lang=js&
//
//
//
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
      const sTop = this.domEl !== window ? (this.domEl.pageYOffset || this.domEl.scrollTop) :
        (document.documentElement.scrollTop || document.body.scrollTop)
      scrollTop(this.domEl, sTop, 0, this.duration)
      this.$emit('on-click')
    }
  }
});

// CONCATENATED MODULE: ./src/components/back-top/src/back-top.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_back_topvue_type_script_lang_js_ = (back_topvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/back-top/src/back-top.vue





/* normalize component */

var back_top_component = normalizeComponent(
  src_back_topvue_type_script_lang_js_,
  back_topvue_type_template_id_2c1c04f4_render,
  back_topvue_type_template_id_2c1c04f4_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/src/main.vue?vue&type=template&id=4f734165&
var mainvue_type_template_id_4f734165_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-card",class:[_vm.shadow ? 'is-' + _vm.shadow + '-shadow' : 'is-hover-shadow',
_vm.bordered ? '':'is-no-border'],style:(_vm.cardStyle)},[(_vm.$slots.header || _vm.header)?_c('div',{staticClass:"bin-card__header",class:[_vm.divider ? _vm.divider+'-divider' : 'has-divider',_vm.headTip?'has-tip':'']},[_vm._t("header",[_vm._v(_vm._s(_vm.header))])],2):_vm._e(),_c('div',{staticClass:"bin-card__body",style:(_vm.bodyStyle)},[_vm._t("default")],2)])}
var mainvue_type_template_id_4f734165_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/card/src/main.vue?vue&type=template&id=4f734165&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
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

// CONCATENATED MODULE: ./src/components/card/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/src/main.vue





/* normalize component */

var main_component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_4f734165_render,
  mainvue_type_template_id_4f734165_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_main = (main_component.exports);
// CONCATENATED MODULE: ./src/components/card/index.js


/* istanbul ignore next */
src_main.install = function(Vue) {
  Vue.component(src_main.name, src_main);
};

/* harmony default export */ var card = (src_main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/divider/src/main.vue?vue&type=template&id=31694bb2&
var mainvue_type_template_id_31694bb2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[(_vm.hasSlot)?_c('span',{class:_vm.slotClasses},[_vm._t("default")],2):_vm._e()])}
var mainvue_type_template_id_31694bb2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/divider/src/main.vue?vue&type=template&id=31694bb2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/divider/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

const mainvue_type_script_lang_js_prefixCls = 'bin-divider'
/* harmony default export */ var divider_src_mainvue_type_script_lang_js_ = ({
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
        `${mainvue_type_script_lang_js_prefixCls}`,
        `${mainvue_type_script_lang_js_prefixCls}-${this.type}`,
        {
          [`${mainvue_type_script_lang_js_prefixCls}-with-text-${this.align}`]: this.hasSlot,
          [`${mainvue_type_script_lang_js_prefixCls}-dashed`]: !!this.dashed
        }
      ]
    },
    slotClasses () {
      return [
        `${mainvue_type_script_lang_js_prefixCls}-inner-text`
      ]
    }
  }
});

// CONCATENATED MODULE: ./src/components/divider/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_divider_src_mainvue_type_script_lang_js_ = (divider_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/divider/src/main.vue





/* normalize component */

var src_main_component = normalizeComponent(
  components_divider_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_31694bb2_render,
  mainvue_type_template_id_31694bb2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var divider_src_main = (src_main_component.exports);
// CONCATENATED MODULE: ./src/components/divider/index.js


/* istanbul ignore next */
divider_src_main.install = function(Vue) {
  Vue.component(divider_src_main.name, divider_src_main);
};

/* harmony default export */ var divider = (divider_src_main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/src/modal.vue?vue&type=template&id=7b6a4a44&
var modalvue_type_template_id_7b6a4a44_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"bin-modal",attrs:{"data-transfer":_vm.appendToBody}},[_c('transition',{attrs:{"name":"fade-in-linear"}},[(_vm.showMask)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"bin-modal-mask",style:(_vm.wrapStyles),on:{"click":_vm.handleMask}}):_vm._e()]),_c('div',{class:_vm.wrapClasses,style:(_vm.wrapStyles),on:{"click":_vm.handleWrapClick}},[_c('transition',{attrs:{"name":"fade-scale-move"},on:{"after-leave":_vm.animationFinish}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],class:_vm.classes,style:(_vm.mainStyles)},[_c('div',{ref:"content",class:_vm.contentClasses,style:(_vm.contentStyles),on:{"click":_vm.handleClickModal}},[(_vm.closable)?_c('a',{class:[_vm.prefixCls + '-close'],on:{"click":_vm.close}},[_vm._t("close",[_c('b-icon',{attrs:{"name":"ios-close"}})])],2):_vm._e(),(_vm.showHead)?_c('div',{class:[_vm.prefixCls + '-header'],on:{"mousedown":_vm.handleMoveStart}},[_vm._t("header",[_c('div',{class:[_vm.prefixCls + '-header-inner']},[_vm._v(_vm._s(_vm.title))])])],2):_vm._e(),_c('div',{class:[_vm.prefixCls + '-body']},[_vm._t("default")],2),(!_vm.footerHide)?_c('div',{class:[_vm.prefixCls + '-footer']},[_vm._t("footer",[_c('b-button',{attrs:{"type":"text","size":"small"},nativeOn:{"click":function($event){return _vm.cancel($event)}}},[_vm._v(_vm._s(_vm.cancelText))]),_c('b-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"type":"primary","size":"small","loading":_vm.buttonLoading},nativeOn:{"click":function($event){return _vm.ok($event)}}},[_vm._v(_vm._s(_vm.okText)+"\n              ")])])],2):_vm._e()])])])],1)],1)}
var modalvue_type_template_id_7b6a4a44_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/modal/src/modal.vue?vue&type=template&id=7b6a4a44&

// CONCATENATED MODULE: ./src/utils/transfer-queue.js
let transferIndex = 0

function transferIncrease () {
  transferIndex++
}



// CONCATENATED MODULE: ./src/directive/transfer-dom.js
// move-to-body
/* harmony default export */ var transfer_dom = ({
  inserted (el, {value}, vnode) {
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/src/modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: {TransferDom: transfer_dom},
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
      modalIndex: this.handleGetModalIndex(),  // for Esc close the top modal
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

      const diff_distance = {
        x: distance.x - this.dragData.dragX,
        y: distance.y - this.dragData.dragY
      }

      this.dragData.x += diff_distance.x
      this.dragData.y += diff_distance.y

      this.dragData.dragX = distance.x
      this.dragData.dragY = distance.y
    },
    handleMoveEnd () {
      this.dragData.dragging = false
      off(window, 'mousemove', this.handleMoveMove)
      off(window, 'mouseup', this.handleMoveEnd)
    },
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

// CONCATENATED MODULE: ./src/components/modal/src/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/modal/src/modal.vue





/* normalize component */

var modal_component = normalizeComponent(
  src_modalvue_type_script_lang_js_,
  modalvue_type_template_id_7b6a4a44_render,
  modalvue_type_template_id_7b6a4a44_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_modal = (modal_component.exports);
// CONCATENATED MODULE: ./src/components/modal/src/confirm.js




const confirm_prefixCls = 'bin-modal-confirm'

src_modal.newInstance = properties => {
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
        footerVNodes.push(h(src_button, {
          props: {
            type: 'text',
            size: 'small'
          },
          on: {
            click: this.cancel
          }
        }, this.cancelText))
      }
      footerVNodes.push(h(src_button, {
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
      return h(src_modal, {
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

/* harmony default export */ var src_confirm = (src_modal);

// CONCATENATED MODULE: ./src/components/modal/index.js


let modalInstance

function getModalInstance (render = undefined) {
  modalInstance = modalInstance || src_confirm.newInstance({
    closable: false,
    maskClosable: false,
    footerHide: true,
    render: render
  })

  return modalInstance
}

function modal_confirm (options) {
  const render = ('render' in options) ? options.render : undefined
  let instance = getModalInstance(render)

  options.onRemove = function () {
    modalInstance = null
  }

  instance.show(options)
}

src_confirm.alert = function (props = {}) {
  props.icon = 'info'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return modal_confirm(props)
}
src_confirm.alert.success = function (props = {}) {
  props.icon = 'success'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return modal_confirm(props)
}
src_confirm.alert.warning = function (props = {}) {
  props.icon = 'warning'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return modal_confirm(props)
}
src_confirm.alert.danger = function (props = {}) {
  props.icon = 'danger'
  props.showCancel = false
  if (props.type) {
    props.icon = props.type
  }
  return modal_confirm(props)
}

src_confirm.confirm = function (props = {}) {
  props.icon = 'confirm'
  props.showCancel = true
  return modal_confirm(props)
}

src_confirm.remove = function () {
  if (!modalInstance) {   // at loading status, remove after Cancel
    return false
  }

  const instance = getModalInstance()

  instance.remove()
}

/* istanbul ignore next */
src_confirm.install = function (Vue) {
  Vue.component(src_confirm.name, src_confirm)
}

/* harmony default export */ var components_modal = (src_confirm);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/drawer/src/drawer.vue?vue&type=template&id=09f20b64&
var drawervue_type_template_id_09f20b64_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"bin-drawer",attrs:{"data-transfer":_vm.appendToBody}},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"bin-drawer-wrapper",class:'is-'+_vm.placement,style:(_vm.mainStyle),on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.handleMaskClick($event)}}},[_c('transition',{attrs:{"name":"move"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"drawer-box",style:(_vm.boxStyle),attrs:{"flex":"dir:top"}},[_c('div',{staticClass:"header"},[_vm._t("header",[_c('div',{attrs:{"flex":"main:justify"}},[_c('div',{staticClass:"title",attrs:{"flex-box":"1"}},[_vm._v("\n                  "+_vm._s(_vm.title)+"\n                ")]),_c('div',{staticClass:"close",on:{"click":function($event){$event.stopPropagation();return _vm.close()}}},[_c('b-icon',{attrs:{"name":"ios-close","size":"22"}})],1)])])],2),_c('div',{staticClass:"body",attrs:{"flex-box":"1"}},[_c('b-scrollbar',{staticStyle:{"height":"100%"}},[_vm._t("default")],2)],1),(!_vm.footerHide)?_c('div',{staticClass:"footer"},[_vm._t("footer",[_c('b-button',{attrs:{"type":"default","size":"small","plain":""},on:{"click":function($event){return _vm.close()}}},[_vm._v(_vm._s(_vm.cancelText))]),_c('b-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"size":"small","type":"primary"},on:{"click":_vm.okClick}},[_vm._v("\n                "+_vm._s(_vm.okText)+"\n              ")])])],2):_vm._e()])])],1)])],1)}
var drawervue_type_template_id_09f20b64_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/drawer/src/drawer.vue?vue&type=template&id=09f20b64&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/drawer/src/drawer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: {TransferDom: transfer_dom},
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
        width: this.fullscreen ? '100%' : this.width,
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
    },
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible (val) {
      this.$emit('on-visible-change', val)
    },
  }
});

// CONCATENATED MODULE: ./src/components/drawer/src/drawer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_drawervue_type_script_lang_js_ = (drawervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/drawer/src/drawer.vue





/* normalize component */

var drawer_component = normalizeComponent(
  src_drawervue_type_script_lang_js_,
  drawervue_type_template_id_09f20b64_render,
  drawervue_type_template_id_09f20b64_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drawer = (drawer_component.exports);
// CONCATENATED MODULE: ./src/components/drawer/index.js


/* istanbul ignore next */
drawer.install = function(Vue) {
  Vue.component(drawer.name, drawer);
};

/* harmony default export */ var components_drawer = (drawer);

// CONCATENATED MODULE: ./src/components/tag/src/main.js


/* harmony default export */ var tag_src_main = ({
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
      return this.tagStyle ? this.tagStyle :
        this.dot ? {
            backgroundColor: '#fff',
            color: this.color,
            fontSize: this.fontSize
          } :
          {
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
      style: {backgroundColor: this.dotColor},
    })
    const closeEl = h('i', {
      class: ['iconfont', 'icon-ios-close'],
      style: this.dot ? {backgroundColor: '#fff', color: this.color} : {},
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
        {'no-border': this.noBorder}
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
tag_src_main.install = function (Vue) {
  Vue.component(tag_src_main.name, tag_src_main)
}

/* harmony default export */ var tag = (tag_src_main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/circle/src/circle.vue?vue&type=template&id=dc2286c6&
var circlevue_type_template_id_dc2286c6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapClasses,style:(_vm.circleSize)},[_c('svg',{attrs:{"viewBox":"0 0 100 100"}},[_c('path',{style:(_vm.trailStyle),attrs:{"d":_vm.pathString,"stroke":_vm.trailColor,"stroke-width":_vm.trailWidth,"fill-opacity":0}}),_c('path',{style:(_vm.pathStyle),attrs:{"d":_vm.pathString,"stroke-linecap":_vm.strokeLinecap,"stroke":_vm.strokeColor,"stroke-width":_vm.computedStrokeWidth,"fill-opacity":"0"}})]),_c('div',{class:_vm.innerClasses},[_vm._t("default")],2)])}
var circlevue_type_template_id_dc2286c6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/circle/src/circle.vue?vue&type=template&id=dc2286c6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/circle/src/circle.vue?vue&type=script&lang=js&
//
//
//
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

// CONCATENATED MODULE: ./src/components/circle/src/circle.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_circlevue_type_script_lang_js_ = (circlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/circle/src/circle.vue





/* normalize component */

var circle_component = normalizeComponent(
  src_circlevue_type_script_lang_js_,
  circlevue_type_template_id_dc2286c6_render,
  circlevue_type_template_id_dc2286c6_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/src/progress.vue?vue&type=template&id=0aa055f5&
var progressvue_type_template_id_0aa055f5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'bin-progress',
    _vm.status ? 'progress-' + _vm.status : '',
    {
      'bin-progress-text': !_vm.showText,
      'bin-progress-text-inside': _vm.textInside,
    }
  ],attrs:{"role":"progressbar","aria-valuenow":_vm.percent,"aria-valuemin":"0","aria-valuemax":"100"}},[_c('div',{staticClass:"bin-progress-bar",class:{'is-active': _vm.active}},[_c('div',{staticClass:"bin-progress-bar__outer",style:(_vm.barOutStyle)},[_c('div',{staticClass:"bin-progress-bar__inner",style:(_vm.barStyle)},[(_vm.showText && _vm.textInside)?_c('div',{staticClass:"bin-progress-bar__innerText"},[_vm._v(_vm._s(_vm.percent)+"%")]):_vm._e()])])]),(_vm.showText && !_vm.textInside)?_c('div',{staticClass:"bin-progress__text",style:({fontSize: _vm.progressTextSize + 'px'})},[(!_vm.status)?[_vm._v(_vm._s(_vm.percent)+"%")]:[(_vm.status === 'text')?_vm._t("default"):_c('b-icon',{attrs:{"name":_vm.iconClass}})]],2):_vm._e()])}
var progressvue_type_template_id_0aa055f5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/progress/src/progress.vue?vue&type=template&id=0aa055f5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/src/progress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./src/components/progress/src/progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_progressvue_type_script_lang_js_ = (progressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/progress/src/progress.vue





/* normalize component */

var progress_component = normalizeComponent(
  src_progressvue_type_script_lang_js_,
  progressvue_type_template_id_0aa055f5_render,
  progressvue_type_template_id_0aa055f5_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/src/alert.vue?vue&type=template&id=1319a774&
var alertvue_type_template_id_1319a774_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade-in"}},[(!_vm.closed)?_c('div',{class:_vm.wrapClasses},[(_vm.showIcon)?_c('span',{class:_vm.iconClasses},[_vm._t("icon",[_c('b-icon',{attrs:{"name":_vm.iconType}})])],2):_vm._e(),_c('span',{class:_vm.messageClasses},[_vm._t("default")],2),_c('span',{class:_vm.descClasses},[_vm._t("desc")],2),(_vm.closable)?_c('a',{class:_vm.closeClasses,on:{"click":_vm.close}},[_vm._t("close",[_c('b-icon',{attrs:{"name":"ios-close"}})])],2):_vm._e()]):_vm._e()])}
var alertvue_type_template_id_1319a774_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/alert/src/alert.vue?vue&type=template&id=1319a774&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/src/alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./src/components/alert/src/alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_alertvue_type_script_lang_js_ = (alertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/alert/src/alert.vue





/* normalize component */

var alert_component = normalizeComponent(
  src_alertvue_type_script_lang_js_,
  alertvue_type_template_id_1319a774_render,
  alertvue_type_template_id_1319a774_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_alert = (alert_component.exports);
// CONCATENATED MODULE: ./src/components/alert/index.js


/* istanbul ignore next */
src_alert.install = function (Vue) {
  Vue.component(src_alert.name, src_alert)
}

/* harmony default export */ var components_alert = (src_alert);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loading/src/loading.vue?vue&type=template&id=44c26f05&
var loadingvue_type_template_id_44c26f05_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade-in-linear"}},[_c('div',{class:_vm.classes},[_c('div',{staticClass:"bin-loading-inner"},[_vm._t("default",[(!_vm.showIcon)?_c('div',[_c('svg',{staticClass:"circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",attrs:{"cx":"50","cy":"50","r":"20","fill":"none","stroke-width":"5","stroke-miterlimit":"10"}})])]):_c('b-icon',{staticClass:"loading-icon",attrs:{"name":_vm.showIcon}}),(_vm.showText)?_c('div',{staticClass:"loading-text",style:(_vm.textStyle)},[_vm._v(_vm._s(_vm.showText))]):_vm._e()])],2)])])}
var loadingvue_type_template_id_44c26f05_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/loading/src/loading.vue?vue&type=template&id=44c26f05&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loading/src/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./src/components/loading/src/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/loading/src/loading.vue





/* normalize component */

var loading_component = normalizeComponent(
  src_loadingvue_type_script_lang_js_,
  loadingvue_type_template_id_44c26f05_render,
  loadingvue_type_template_id_44c26f05_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/src/collapse.vue?vue&type=template&id=43d381b6&
var collapsevue_type_template_id_43d381b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_vm._t("default")],2)}
var collapsevue_type_template_id_43d381b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/collapse/src/collapse.vue?vue&type=template&id=43d381b6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/src/collapse.vue?vue&type=script&lang=js&
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

// CONCATENATED MODULE: ./src/components/collapse/src/collapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_collapsevue_type_script_lang_js_ = (collapsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/collapse/src/collapse.vue





/* normalize component */

var collapse_component = normalizeComponent(
  src_collapsevue_type_script_lang_js_,
  collapsevue_type_template_id_43d381b6_render,
  collapsevue_type_template_id_43d381b6_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/src/panel.vue?vue&type=template&id=3767616e&
var panelvue_type_template_id_3767616e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.itemClasses},[_c('div',{class:_vm.headerClasses,on:{"click":_vm.toggle}},[(!_vm.hideArrow)?_c('b-icon',{attrs:{"name":"ios-arrow-forward"}}):_vm._e(),_vm._t("title",[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")])],2),(_vm.mounted)?_c('collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],class:_vm.contentClasses},[_c('div',{class:_vm.boxClasses},[_vm._t("default")],2)])]):_vm._e()],1)}
var panelvue_type_template_id_3767616e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/collapse/src/panel.vue?vue&type=template&id=3767616e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/src/panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./src/components/collapse/src/panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_panelvue_type_script_lang_js_ = (panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/collapse/src/panel.vue





/* normalize component */

var panel_component = normalizeComponent(
  src_panelvue_type_script_lang_js_,
  panelvue_type_template_id_3767616e_render,
  panelvue_type_template_id_3767616e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var panel = (panel_component.exports);
// CONCATENATED MODULE: ./src/components/collapse/panel.js


/* istanbul ignore next */
panel.install = function (Vue) {
  Vue.component(panel.name, panel)
}

/* harmony default export */ var collapse_panel = (panel);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/src/breadcrumb.vue?vue&type=template&id=55fb27ec&
var breadcrumbvue_type_template_id_55fb27ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-breadcrumb",attrs:{"aria-label":"Breadcrumb","role":"navigation"}},[_vm._t("default")],2)}
var breadcrumbvue_type_template_id_55fb27ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/breadcrumb/src/breadcrumb.vue?vue&type=template&id=55fb27ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/src/breadcrumb.vue?vue&type=script&lang=js&
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
      elBreadcrumb: this
    }
  },
  mounted () {
    const items = this.$el.querySelectorAll('.bin-breadcrumb__item')
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page')
    }
  }
});

// CONCATENATED MODULE: ./src/components/breadcrumb/src/breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_breadcrumbvue_type_script_lang_js_ = (breadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/breadcrumb/src/breadcrumb.vue





/* normalize component */

var breadcrumb_component = normalizeComponent(
  src_breadcrumbvue_type_script_lang_js_,
  breadcrumbvue_type_template_id_55fb27ec_render,
  breadcrumbvue_type_template_id_55fb27ec_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/src/breadcrumb-item.vue?vue&type=template&id=0d0ea0ba&
var breadcrumb_itemvue_type_template_id_0d0ea0ba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"bin-breadcrumb__item"},[_c('span',{ref:"link",class:['bin-breadcrumb__inner', _vm.to ? 'is-link' : ''],attrs:{"role":"link"}},[_vm._t("default")],2),(_vm.separatorIcon)?_c('i',{staticClass:"bin-separator icon",class:['iconfont','icon-'+_vm.separatorIcon]}):_c('span',{staticClass:"bin-separator",attrs:{"role":"presentation"}},[_vm._v(_vm._s(_vm.separator))])])}
var breadcrumb_itemvue_type_template_id_0d0ea0ba_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/breadcrumb/src/breadcrumb-item.vue?vue&type=template&id=0d0ea0ba&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumb/src/breadcrumb-item.vue?vue&type=script&lang=js&
//
//
//
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
  inject: ['elBreadcrumb'],
  mounted () {
    this.separator = this.elBreadcrumb.separator
    this.separatorIcon = this.elBreadcrumb.separatorIcon
    const link = this.$refs.link
    link.setAttribute('role', 'link')
    link.addEventListener('click', () => {
      const {to, $router} = this
      if (!to || !$router) return
      this.replace ? $router.replace(to) : $router.push(to)
    })
  }
});

// CONCATENATED MODULE: ./src/components/breadcrumb/src/breadcrumb-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_breadcrumb_itemvue_type_script_lang_js_ = (breadcrumb_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/breadcrumb/src/breadcrumb-item.vue





/* normalize component */

var breadcrumb_item_component = normalizeComponent(
  src_breadcrumb_itemvue_type_script_lang_js_,
  breadcrumb_itemvue_type_template_id_0d0ea0ba_render,
  breadcrumb_itemvue_type_template_id_0d0ea0ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var breadcrumb_item = (breadcrumb_item_component.exports);
// CONCATENATED MODULE: ./src/components/breadcrumb/item.js


/* istanbul ignore next */
breadcrumb_item.install = function (Vue) {
  Vue.component(breadcrumb_item.name, breadcrumb_item)
}

/* harmony default export */ var item = (breadcrumb_item);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/badge/src/main.vue?vue&type=template&id=4517e604&
var mainvue_type_template_id_4517e604_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-badge"},[_vm._t("default"),_c('transition',{attrs:{"name":"zoom-in-center"}},[_c('sup',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hidden && (_vm.content || _vm.content === 0 || _vm.isDot)),expression:"!hidden && (content || content === 0 || isDot)"}],staticClass:"bin-badge__content",class:[
        'bin-badge-is-' + _vm.type,
        {
          'is-fixed': _vm.$slots.default,
          'is-dot': _vm.isDot
        }
      ],domProps:{"textContent":_vm._s(_vm.content)}})])],2)}
var mainvue_type_template_id_4517e604_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/badge/src/main.vue?vue&type=template&id=4517e604&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/badge/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var badge_src_mainvue_type_script_lang_js_ = ({
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

// CONCATENATED MODULE: ./src/components/badge/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_badge_src_mainvue_type_script_lang_js_ = (badge_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/badge/src/main.vue





/* normalize component */

var badge_src_main_component = normalizeComponent(
  components_badge_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_4517e604_render,
  mainvue_type_template_id_4517e604_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var badge_src_main = (badge_src_main_component.exports);
// CONCATENATED MODULE: ./src/components/badge/index.js


/* istanbul ignore next */
badge_src_main.install = function(Vue) {
  Vue.component(badge_src_main.name, badge_src_main);
};

/* harmony default export */ var badge = (badge_src_main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/src/input.vue?vue&type=template&id=423fbb5c&
var inputvue_type_template_id_423fbb5c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapClasses},[(_vm.type !== 'textarea')?_c('label',[(_vm.prepend)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.slotReady),expression:"slotReady"}],class:[_vm.prefixCls + '-group-prepend']},[_vm._t("prepend")],2):_vm._e(),(_vm.clearable && _vm.currentValue && !_vm.disabled)?_c('i',{class:_vm.closeClasses,on:{"click":_vm.handleClear}}):(_vm.icon)?_c('i',{staticClass:"iconfont",class:['icon-' + _vm.icon, _vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal'],on:{"click":_vm.handleIconClick}}):(_vm.search)?_c('i',{staticClass:"iconfont icon-ios-search",class:[_vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal', _vm.prefixCls + '-search-icon'],on:{"click":_vm.handleSearch}}):(_vm.showSuffix)?_c('span',{staticClass:"bin-input-suffix"},[_vm._t("suffix",[(_vm.suffix)?_c('i',{staticClass:"iconfont",class:['icon-' + _vm.suffix]}):_vm._e()])],2):_vm._e(),_c('input',{ref:"input",class:_vm.inputClasses,attrs:{"id":_vm.elementId,"autocomplete":_vm.autocomplete,"type":_vm.type,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"maxlength":_vm.maxlength,"readonly":_vm.readonly,"name":_vm.name,"number":_vm.number,"autofocus":_vm.autofocus},domProps:{"value":_vm.currentValue},on:{"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)},_vm.handleKeyup],"keypress":_vm.handleKeypress,"keydown":_vm.handleKeydown,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput,"change":_vm.handleChange}}),(_vm.showPrefix)?_c('span',{staticClass:"bin-input-prefix"},[_vm._t("prefix",[(_vm.prefix)?_c('i',{staticClass:"iconfont",class:['icon-' + _vm.prefix]}):_vm._e()])],2):_vm._e()]):_c('label',[_c('textarea',{ref:"textarea",class:_vm.textareaClasses,style:(_vm.textareaStyles),attrs:{"id":_vm.elementId,"wrap":_vm.wrap,"autocomplete":_vm.autocomplete,"spellcheck":_vm.spellcheck,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"rows":_vm.rows,"maxlength":_vm.maxlength,"readonly":_vm.readonly,"name":_vm.name,"autofocus":_vm.autofocus},domProps:{"value":_vm.currentValue},on:{"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)},_vm.handleKeyup],"keypress":_vm.handleKeypress,"keydown":_vm.handleKeydown,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput}})])])}
var inputvue_type_template_id_423fbb5c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/src/input.vue?vue&type=template&id=423fbb5c&

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
  'box-sizing',
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
    boxSizing,
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
    boxSizing, sizingStyle,
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
      // todo 如果 params 是空数组，接收到的会是 undefined
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/src/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        this.dispatch('BFormItem', 'on-form-change', value);
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
      const e = {target: {value: ''}}
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
          [`${inputvue_type_script_lang_js_prefixCls}-hide-icon`]: this.append,  // #554
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

// CONCATENATED MODULE: ./src/components/input/src/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/input/src/input.vue





/* normalize component */

var input_component = normalizeComponent(
  src_inputvue_type_script_lang_js_,
  inputvue_type_template_id_423fbb5c_render,
  inputvue_type_template_id_423fbb5c_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input-number/src/input-number.vue?vue&type=template&id=6dc765b2&
var input_numbervue_type_template_id_6dc765b2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapClasses},[_c('div',{class:_vm.handlerClasses},[_c('a',{class:_vm.upClasses,on:{"click":_vm.up}},[_c('span',{class:_vm.innerUpClasses,on:{"click":_vm.preventDefault}})]),_c('a',{class:_vm.downClasses,on:{"click":_vm.down}},[_c('span',{class:_vm.innerDownClasses,on:{"click":_vm.preventDefault}})])]),_c('div',{class:_vm.inputWrapClasses},[_c('input',{class:_vm.inputClasses,attrs:{"id":_vm.elementId,"disabled":_vm.disabled,"autocomplete":"off","spellcheck":"false","autofocus":_vm.autofocus,"readonly":_vm.readonly || !_vm.editable,"name":_vm.name,"placeholder":_vm.placeholder},domProps:{"value":_vm.formatterValue},on:{"focus":_vm.focus,"blur":_vm.blur,"keydown":function($event){$event.stopPropagation();return _vm.keyDown($event)},"input":_vm.change,"mouseup":_vm.preventDefault,"change":_vm.change}})])])}
var input_numbervue_type_template_id_6dc765b2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input-number/src/input-number.vue?vue&type=template&id=6dc765b2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input-number/src/input-number.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [ emitter ],
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
    },
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

      const {min, max} = this
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
      if (event.type == 'change') return

      if (event.type == 'input' && !this.activeChange) return
      let val = event.target.value.trim()
      if (this.parser) {
        val = this.parser(val)
      }

      const isEmptyString = val.length === 0
      if (isEmptyString) {
        this.setValue(null)
        return
      }
      if (event.type == 'input' && val.match(/^\-?\.?$|\.$/)) return // prevent fire early if decimal. If no more input the change event will fire later

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

// CONCATENATED MODULE: ./src/components/input-number/src/input-number.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_input_numbervue_type_script_lang_js_ = (input_numbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/input-number/src/input-number.vue





/* normalize component */

var input_number_component = normalizeComponent(
  src_input_numbervue_type_script_lang_js_,
  input_numbervue_type_template_id_6dc765b2_render,
  input_numbervue_type_template_id_6dc765b2_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/rate/src/main.vue?vue&type=template&id=36edf1dd&
var mainvue_type_template_id_36edf1dd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-rate",attrs:{"role":"slider","aria-valuenow":_vm.currentValue,"aria-valuetext":_vm.text,"aria-valuemin":"0","aria-valuemax":_vm.max,"tabindex":"0"},on:{"keydown":_vm.handleKey}},[_vm._l((_vm.max),function(item,key){return _c('span',{key:key,staticClass:"bin-rate__item",style:({ cursor: _vm.rateDisabled ? 'auto' : 'pointer' }),on:{"mousemove":function($event){return _vm.setCurrentValue(item, $event)},"mouseleave":_vm.resetCurrentValue,"click":function($event){return _vm.selectValue(item)}}},[_c('i',{staticClass:"bin-rate__icon iconfont",class:[_vm.classes[item - 1], { 'hover': _vm.hoverIndex === item }],style:(_vm.getIconStyle(item))},[(_vm.showDecimalIcon(item))?_c('i',{staticClass:"bin-rate__decimal iconfont",class:_vm.decimalIconClass,style:(_vm.decimalStyle)}):_vm._e()])])}),(_vm.showText || _vm.showScore)?_c('span',{staticClass:"bin-rate__text",style:({ color: _vm.textColor })},[_vm._v(_vm._s(_vm.text))]):_vm._e()],2)}
var mainvue_type_template_id_36edf1dd_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/rate/src/main.vue?vue&type=template&id=36edf1dd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/rate/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var rate_src_mainvue_type_script_lang_js_ = ({
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

// CONCATENATED MODULE: ./src/components/rate/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_rate_src_mainvue_type_script_lang_js_ = (rate_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/rate/src/main.vue





/* normalize component */

var rate_src_main_component = normalizeComponent(
  components_rate_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_36edf1dd_render,
  mainvue_type_template_id_36edf1dd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var rate_src_main = (rate_src_main_component.exports);
// CONCATENATED MODULE: ./src/components/rate/index.js


/* istanbul ignore next */
rate_src_main.install = function(Vue) {
  Vue.component(rate_src_main.name, rate_src_main);
};

/* harmony default export */ var rate = (rate_src_main);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/switch/src/switch.vue?vue&type=template&id=608a9bd6&
var switchvue_type_template_id_608a9bd6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.wrapClasses,style:(_vm.wrapStyle),attrs:{"tabindex":"0"},on:{"click":_vm.toggle,"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }return _vm.toggle($event)}}},[_c('input',{attrs:{"type":"hidden","name":_vm.name},domProps:{"value":_vm.currentValue}}),_c('span',{class:_vm.innerClasses},[(_vm.currentValue === _vm.trueValue)?_vm._t("open"):_vm._e(),(_vm.currentValue === _vm.falseValue)?_vm._t("close"):_vm._e()],2)])}
var switchvue_type_template_id_608a9bd6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/switch/src/switch.vue?vue&type=template&id=608a9bd6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/switch/src/switch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
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
        throw 'Value should be trueValue or falseValue.'
      }
      this.currentValue = val
    }
  }
});

// CONCATENATED MODULE: ./src/components/switch/src/switch.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_switchvue_type_script_lang_js_ = (switchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/switch/src/switch.vue





/* normalize component */

var switch_component = normalizeComponent(
  src_switchvue_type_script_lang_js_,
  switchvue_type_template_id_608a9bd6_render,
  switchvue_type_template_id_608a9bd6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_switch = (switch_component.exports);
// CONCATENATED MODULE: ./src/components/switch/index.js


/* istanbul ignore next */
src_switch.install = function (Vue) {
  Vue.component(src_switch.name, src_switch)
}

/* harmony default export */ var components_switch = (src_switch);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/src/checkbox.vue?vue&type=template&id=3714db07&
var checkboxvue_type_template_id_3714db07_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.wrapClasses},[_c('span',{class:_vm.checkboxClasses},[_c('span',{class:_vm.innerClasses}),(_vm.group)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],class:_vm.inputClasses,attrs:{"type":"checkbox","disabled":_vm.disabled,"name":_vm.name},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.change],"focus":_vm.onFocus,"blur":_vm.onBlur}}):_c('input',{class:_vm.inputClasses,attrs:{"type":"checkbox","disabled":_vm.disabled,"name":_vm.name},domProps:{"checked":_vm.currentValue},on:{"change":_vm.change,"focus":_vm.onFocus,"blur":_vm.onBlur}})]),_vm._t("default",[(_vm.showSlot)?_c('span',[_vm._v(_vm._s(_vm.label))]):_vm._e()])],2)}
var checkboxvue_type_template_id_3714db07_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkbox/src/checkbox.vue?vue&type=template&id=3714db07&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/src/checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        throw 'Value should be trueValue or falseValue.'
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/checkbox/src/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/checkbox/src/checkbox.vue





/* normalize component */

var checkbox_component = normalizeComponent(
  src_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_3714db07_render,
  checkboxvue_type_template_id_3714db07_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/src/checkbox-group.vue?vue&type=template&id=27883e41&
var checkbox_groupvue_type_template_id_27883e41_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[_vm._t("default")],2)}
var checkbox_groupvue_type_template_id_27883e41_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkbox/src/checkbox-group.vue?vue&type=template&id=27883e41&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/src/checkbox-group.vue?vue&type=script&lang=js&
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
      childrens: []
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
      this.childrens = findComponentsDownward(this, 'BCheckbox')
      if (this.childrens) {
        const {value} = this
        this.childrens.forEach(child => {
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

// CONCATENATED MODULE: ./src/components/checkbox/src/checkbox-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkbox_groupvue_type_script_lang_js_ = (checkbox_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/checkbox/src/checkbox-group.vue





/* normalize component */

var checkbox_group_component = normalizeComponent(
  src_checkbox_groupvue_type_script_lang_js_,
  checkbox_groupvue_type_template_id_27883e41_render,
  checkbox_groupvue_type_template_id_27883e41_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkbox_group = (checkbox_group_component.exports);
// CONCATENATED MODULE: ./src/components/checkbox/index.js



src_checkbox.Group = checkbox_group

/* istanbul ignore next */
src_checkbox.install = function (Vue) {
  Vue.component(src_checkbox.name, src_checkbox)
}
/* harmony default export */ var components_checkbox = (src_checkbox);

// CONCATENATED MODULE: ./src/components/checkbox-group/index.js


/* istanbul ignore next */
checkbox_group.install = function (Vue) {
  Vue.component(checkbox_group.name, checkbox_group)
}

/* harmony default export */ var components_checkbox_group = (checkbox_group);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio/src/radio.vue?vue&type=template&id=1ccef8c7&
var radiovue_type_template_id_1ccef8c7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.wrapClasses},[_c('span',{class:_vm.radioClasses},[_c('span',{class:_vm.innerClasses}),_c('input',{class:_vm.inputClasses,attrs:{"type":"radio","disabled":_vm.disabled,"name":_vm.groupName},domProps:{"checked":_vm.currentValue},on:{"change":_vm.change,"focus":_vm.onFocus,"blur":_vm.onBlur}})]),_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)}
var radiovue_type_template_id_1ccef8c7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/radio/src/radio.vue?vue&type=template&id=1ccef8c7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio/src/radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
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
        throw 'Value should be trueValue or falseValue.'
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/radio/src/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/radio/src/radio.vue





/* normalize component */

var radio_component = normalizeComponent(
  src_radiovue_type_script_lang_js_,
  radiovue_type_template_id_1ccef8c7_render,
  radiovue_type_template_id_1ccef8c7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_radio = (radio_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio/src/radio-group.vue?vue&type=template&id=5d13c48f&
var radio_groupvue_type_template_id_5d13c48f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,attrs:{"name":_vm.name}},[_vm._t("default")],2)}
var radio_groupvue_type_template_id_5d13c48f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/radio/src/radio-group.vue?vue&type=template&id=5d13c48f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio/src/radio-group.vue?vue&type=script&lang=js&
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

// CONCATENATED MODULE: ./src/components/radio/src/radio-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_radio_groupvue_type_script_lang_js_ = (radio_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/radio/src/radio-group.vue





/* normalize component */

var radio_group_component = normalizeComponent(
  src_radio_groupvue_type_script_lang_js_,
  radio_groupvue_type_template_id_5d13c48f_render,
  radio_groupvue_type_template_id_5d13c48f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var radio_group = (radio_group_component.exports);
// CONCATENATED MODULE: ./src/components/radio/index.js



src_radio.Group = radio_group

/* istanbul ignore next */
src_radio.install = function (Vue) {
  Vue.component(src_radio.name, src_radio)
}


/* harmony default export */ var components_radio = (src_radio);

// CONCATENATED MODULE: ./src/components/radio-group/index.js


/* istanbul ignore next */
radio_group.install = function (Vue) {
  Vue.component(radio_group.name, radio_group)
}

/* harmony default export */ var components_radio_group = (radio_group);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tooltip/src/tooltip.vue?vue&type=template&id=6b2485f6&
var tooltipvue_type_template_id_6b2485f6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.prefixCls],on:{"mouseenter":_vm.handleShowPopper,"mouseleave":_vm.handleClosePopper}},[_c('div',{ref:"reference",class:[_vm.prefixCls + '-rel']},[_vm._t("default")],2),_c('transition',{attrs:{"name":"fade-in"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled && (_vm.visible || _vm.always)),expression:"!disabled && (visible || always)"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"popper",class:[_vm.prefixCls + '-popper', _vm.prefixCls + '-' + _vm.theme],style:(_vm.dropStyles),attrs:{"data-transfer":_vm.transfer},on:{"mouseenter":_vm.handleShowPopper,"mouseleave":_vm.handleClosePopper}},[_c('div',{class:[_vm.prefixCls + '-content']},[_c('div',{class:[_vm.prefixCls + '-arrow']}),_c('div',{class:_vm.innerClasses,style:(_vm.innerStyles)},[_vm._t("content",[_vm._v(_vm._s(_vm.content))])],2)])])])],1)}
var tooltipvue_type_template_id_6b2485f6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tooltip/src/tooltip.vue?vue&type=template&id=6b2485f6&

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
              gpuAcceleration: false,
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
        if (this.handleIndexIncrease) this.handleIndexIncrease()  // just use for Poptip
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tooltip/src/tooltip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: {TransferDom: transfer_dom},
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
    controlled: {    // under this prop,Tooltip will not close when mouseleave
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
    },
  },
  mounted () {
    if (this.always) {
      this.updatePopper()
    }
  }
});

// CONCATENATED MODULE: ./src/components/tooltip/src/tooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tooltipvue_type_script_lang_js_ = (tooltipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tooltip/src/tooltip.vue





/* normalize component */

var tooltip_component = normalizeComponent(
  src_tooltipvue_type_script_lang_js_,
  tooltipvue_type_template_id_6b2485f6_render,
  tooltipvue_type_template_id_6b2485f6_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/form.vue?vue&type=template&id=1c418e39&
var formvue_type_template_id_1c418e39_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{class:_vm.classes,attrs:{"autocomplete":_vm.autocomplete}},[_vm._t("default")],2)}
var formvue_type_template_id_1c418e39_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/form.vue?vue&type=template&id=1c418e39&

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
    return {form: this}
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
  formvue_type_template_id_1c418e39_render,
  formvue_type_template_id_1c418e39_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_form = (form_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/form-item.vue?vue&type=template&id=20340594&
var form_itemvue_type_template_id_20340594_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes},[(_vm.label || _vm.$slots.label)?_c('label',{class:[_vm.prefixCls + '-label'],style:(_vm.labelStyles),attrs:{"for":_vm.labelFor}},[_vm._t("label",[_vm._v(_vm._s(_vm.label))])],2):_vm._e(),_c('div',{class:[_vm.prefixCls + '-content'],style:(_vm.contentStyles)},[_vm._t("default"),_c('transition',{attrs:{"name":"fade-in"}},[(_vm.validateState === 'error' && _vm.showMessage && _vm.form.showMessage)?_c('div',{class:[_vm.prefixCls + '-error-tip']},[_vm._v(_vm._s(_vm.validateMessage)+"\n      ")]):_vm._e()])],2)])}
var form_itemvue_type_template_id_20340594_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/form-item.vue?vue&type=template&id=20340594&

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
          rules = [{required: true}]
        }
      }

      this.validateState = 'validating'

      let descriptor = {}
      descriptor[this.prop] = rules

      const validator = new es_default.a(descriptor)
      let model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, {firstFields: true}, errors => {
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
  form_itemvue_type_template_id_20340594_render,
  form_itemvue_type_template_id_20340594_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loadingbar/src/loading-bar.vue?vue&type=template&id=0f1aff29&
var loading_barvue_type_template_id_0f1aff29_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade-in"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],class:_vm.classes,style:(_vm.outerStyles)},[_c('div',{class:_vm.innerClasses,style:(_vm.styles)})])])}
var loading_barvue_type_template_id_0f1aff29_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/loadingbar/src/loading-bar.vue?vue&type=template&id=0f1aff29&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/loadingbar/src/loading-bar.vue?vue&type=script&lang=js&
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

// CONCATENATED MODULE: ./src/components/loadingbar/src/loading-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_loading_barvue_type_script_lang_js_ = (loading_barvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/loadingbar/src/loading-bar.vue





/* normalize component */

var loading_bar_component = normalizeComponent(
  src_loading_barvue_type_script_lang_js_,
  loading_barvue_type_template_id_0f1aff29_render,
  loading_barvue_type_template_id_0f1aff29_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_loading_bar = (loading_bar_component.exports);
// CONCATENATED MODULE: ./src/components/loadingbar/src/loading-bar.js



src_loading_bar.newInstance = properties => {
  const _props = properties || {}
  // 创建一个实例
  const Instance = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
    data: _props,
    render (h) {
      return h(src_loading_bar, {
        props: _props
      })
    }
  })
  // 绑定组件实例
  const component = Instance.$mount()
  // 添加到dom
  document.body.appendChild(component.$el)
  // 这个loading_bar即是返回的Vnode
  const loading_bar = Instance.$children[0]
  // 返回一个vnode对象
  return {
    update (options) {
      if ('percent' in options) {
        loading_bar.percent = options.percent
      }
      if (options.status) {
        loading_bar.status = options.status
      }
      if ('show' in options) {
        loading_bar.show = options.show
      }
    },
    component: loading_bar,
    destroy () {
      document.body.removeChild(document.getElementsByClassName('bin-loading-bar')[0])
    }
  }
}

/* harmony default export */ var loadingbar_src_loading_bar = (src_loading_bar);

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
  loadingBarInstance = loadingBarInstance || loadingbar_src_loading_bar.newInstance({
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/message/src/message.vue?vue&type=template&id=0b63cfb1&
var messagevue_type_template_id_0b63cfb1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-message",style:(_vm.wrapStyles)},_vm._l((_vm.notices),function(notice){return _c('notice',{key:notice.name,attrs:{"type":notice.type,"render":notice.render,"content":notice.content,"closable":notice.closable,"transition-name":notice.transitionName,"duration":notice.duration,"name":notice.name,"on-close":notice.onClose}})}),1)}
var messagevue_type_template_id_0b63cfb1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/message/src/message.vue?vue&type=template&id=0b63cfb1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/base/notice/notice.vue?vue&type=template&id=44f781a7&
var noticevue_type_template_id_44f781a7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transitionName,"appear":""},on:{"enter":_vm.handleEnter,"leave":_vm.handleLeave}},[_c('div',{class:_vm.classes},[_c('div',{ref:"content",class:[_vm.baseClass + '-content']},[(_vm.content)?_c('div',{class:[_vm.baseClass + '-content-text',(_vm.baseClass + "-" + _vm.type)]},[_c('b-icon',{attrs:{"name":_vm.iconTypes}}),_c('span',[_vm._v(_vm._s(_vm.content))])],1):_vm._e(),_c('div',{class:[_vm.baseClass + '-content-text']},[_c('render-cell',{attrs:{"render":_vm.renderFunc}})],1),(_vm.closable)?_c('a',{class:[_vm.baseClass + '-close'],on:{"click":_vm.close}},[_c('i',{staticClass:"iconfont icon-ios-close"})]):_vm._e()])])])}
var noticevue_type_template_id_44f781a7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/base/notice/notice.vue?vue&type=template&id=44f781a7&

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
      ];
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
  noticevue_type_template_id_44f781a7_render,
  noticevue_type_template_id_44f781a7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var notice = (notice_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/message/src/message.vue?vue&type=script&lang=js&
//
//
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
  components: {Notice: notice},
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

// CONCATENATED MODULE: ./src/components/message/src/message.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_messagevue_type_script_lang_js_ = (messagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/message/src/message.vue





/* normalize component */

var message_component = normalizeComponent(
  src_messagevue_type_script_lang_js_,
  messagevue_type_template_id_0b63cfb1_render,
  messagevue_type_template_id_0b63cfb1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_message = (message_component.exports);
// CONCATENATED MODULE: ./src/components/message/src/message.js



src_message.newInstance = properties => {
  const _props = properties || {}
  // 创建一个实例
  const Instance = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
    render (h) {
      return h(src_message, {
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

/* harmony default export */ var message_src_message = (src_message);

// CONCATENATED MODULE: ./src/components/message/index.js


const prefixKey = 'bin_message_key_'
let messageInstance
let message_name = 1

// 获取一个实例
function getMessageInstance () {
  messageInstance = messageInstance || message_src_message.newInstance({
    styles: {
      top: '24px'
    }
  })
  return messageInstance
}

// 提示方法
function message_notice (options) {
  let instance = getMessageInstance()
  let _notice = Object.assign({name: `${prefixKey}${message_name}`}, options)
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
      _option = Object.assign({}, defaultOption, {content: options})
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
































// 全局注册的实例不需要放入components下



const components = [
  components_icon, components_button, components_button_group, scrollbar,
  components_back_top, card, divider, components_modal, components_drawer,
  tag, components_progress, components_circle, components_alert, components_loading,
  collapse_transition, components_collapse, collapse_panel, badge, components_breadcrumb, item,
  components_input, components_input_number, rate, components_switch, components_checkbox, components_checkbox_group, components_radio, components_radio_group, components_tooltip,
  components_form, components_form_item
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
  Card: card,
  Divider: divider,
  Modal: components_modal,
  Drawer: components_drawer,
  Tag: tag,
  Progress: components_progress,
  Circle: components_circle,
  Alert: components_alert,
  Loading: components_loading,
  CollapseTransition: collapse_transition,
  Collapse: components_collapse, CollapsePanel: collapse_panel,
  Breadcrumb: components_breadcrumb, breadcrumbItem: item,
  LoadingBar: loadingbar,
  Message: components_message,
  Badge: badge,
  Input: components_input,
  InputNumber: components_input_number,
  Rate: rate,
  Switch: components_switch,
  Checkbox: components_checkbox, CheckboxGroup: components_checkbox_group,
  Radio: components_radio, RadioGroup: components_radio_group,
  Tooltip: components_tooltip,
  Form: components_form, FormItem: components_form_item
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fc5e":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "fcd4":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("cc15");


/***/ }),

/***/ "fed5":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ })

/******/ });
});