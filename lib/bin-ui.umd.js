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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

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


const isServer = typeof window === 'undefined';

/* istanbul ignore next */
const resizeHandler = function(entries) {
  for (let entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(fn => {
        fn();
      });
    }
  }
};

/* istanbul ignore next */
const addResizeListener = function(el, fn) {
  if (isServer) return;
  if (!el.__resizeListeners__) {
    el.__resizeListeners__ = [];
    el.__ro__ = new ResizeObserver_es["a" /* default */](resizeHandler);
    el.__ro__.observe(el);
  }
  el.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
const removeResizeListener = function(el, fn) {
  if (!el || !el.__resizeListeners__) return;
  el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(fn), 1);
  if (!el.__resizeListeners__.length) {
    el.__ro__.disconnect();
  }
};

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
    // 打印地址
    utils_log.print('welcome to use bin-ui', 'primary')
    utils_log.print('Link: ' + 'https://wangbin3162.github.io/bin-ui-doc/', 'danger')
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
    move: Number
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
    return h('div', {
      class: ['bin-scrollbar__bar', 'is-' + bar.key],
      on: {
        mousedown: this.clickTrackHandler
      },
    }, [
      h('div', {
        ref: 'thumb',
        class: ['bin-scrollbar__thumb'],
        on: {
          mousedown: this.clickThumbHandler
        },
        style: renderThumbStyle({size, move, bar})
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
    wrapStyle: {},  // 内联方式 自定义wrap容器的样式
    wrapClass: {},  // 类名方式 自定义wrap容器的样式
    viewClass: {},  // 内联方式 自定义view容器的样式
    viewStyle: {},  // 类名方式 自定义view容器的样式
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
      nodes = [
        wrap,
        h('bar', {props: {move: this.moveX, size: this.sizeWidth}}),
        h('bar', {props: {vertical: true, move: this.moveY, size: this.sizeHeight}})
      ]
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
let transferIndex = 0;

function transferIncrease() {
    transferIndex++;
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/drawer/src/drawer.vue?vue&type=template&id=1d2990a4&
var drawervue_type_template_id_1d2990a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"bin-drawer",attrs:{"data-transfer":_vm.appendToBody}},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"bin-drawer-wrapper",class:'is-'+_vm.placement,style:(_vm.mainStyle),on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.handleMaskClick($event)}}},[_c('transition',{attrs:{"name":"move"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"drawer-box",style:(_vm.boxStyle),attrs:{"flex":"dir:top"}},[_c('div',{staticClass:"header"},[_vm._t("header",[_c('div',{attrs:{"flex":"main:justify"}},[_c('div',{staticClass:"title",attrs:{"flex-box":"1"}},[_vm._v("\n                  "+_vm._s(_vm.title)+"\n                ")]),_c('div',{staticClass:"close",on:{"click":function($event){$event.stopPropagation();return _vm.close()}}},[_c('b-icon',{attrs:{"name":"ios-close","size":"22"}})],1)])])],2),_c('div',{staticClass:"body",attrs:{"flex-box":"1"}},[_c('b-scrollbar',{staticStyle:{"height":"100%"}},[_vm._t("default")],2)],1),_c('div',{staticClass:"footer"},[_vm._t("footer",[_c('b-button',{attrs:{"type":"default","size":"small","plain":""},on:{"click":function($event){return _vm.close()}}},[_vm._v(_vm._s(_vm.cancelText))]),_c('b-button',{directives:[{name:"waves",rawName:"v-waves"}],attrs:{"size":"small","type":"primary"},on:{"click":_vm.okClick}},[_vm._v("\n                "+_vm._s(_vm.okText)+"\n              ")])])],2)])])],1)])],1)}
var drawervue_type_template_id_1d2990a4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/drawer/src/drawer.vue?vue&type=template&id=1d2990a4&

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
  drawervue_type_template_id_1d2990a4_render,
  drawervue_type_template_id_1d2990a4_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/src/input.vue?vue&type=template&id=1f12ab92&
var inputvue_type_template_id_1f12ab92_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapClasses},[(_vm.type !== 'textarea')?_c('label',[(_vm.prepend)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.slotReady),expression:"slotReady"}],class:[_vm.prefixCls + '-group-prepend']},[_vm._t("prepend")],2):_vm._e(),(_vm.clearable && _vm.currentValue && !_vm.disabled)?_c('i',{class:_vm.closeClasses,on:{"click":_vm.handleClear}}):(_vm.icon)?_c('i',{staticClass:"iconfont",class:['icon-' + _vm.icon, _vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal'],on:{"click":_vm.handleIconClick}}):(_vm.search)?_c('i',{staticClass:"iconfont icon-ios-search",class:[_vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal', _vm.prefixCls + '-search-icon'],on:{"click":_vm.handleSearch}}):(_vm.showSuffix)?_c('span',{staticClass:"bin-input-suffix"},[_vm._t("suffix",[(_vm.suffix)?_c('i',{staticClass:"iconfont",class:['icon-' + _vm.suffix]}):_vm._e()])],2):_vm._e(),_c('input',{ref:"input",class:_vm.inputClasses,attrs:{"id":_vm.elementId,"autocomplete":_vm.autocomplete,"type":_vm.type,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"maxlength":_vm.maxlength,"readonly":_vm.readonly,"name":_vm.name,"number":_vm.number,"autofocus":_vm.autofocus},domProps:{"value":_vm.currentValue},on:{"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)},_vm.handleKeyup],"keypress":_vm.handleKeypress,"keydown":_vm.handleKeydown,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput,"change":_vm.handleChange}}),(_vm.showPrefix)?_c('span',{staticClass:"bin-input-prefix"},[_vm._t("prefix",[(_vm.prefix)?_c('i',{staticClass:"iconfont",class:['icon-' + _vm.prefix]}):_vm._e()])],2):_vm._e()]):_c('label',[_c('textarea',{ref:"textarea",class:_vm.textareaClasses,style:(_vm.textareaStyles),attrs:{"id":_vm.elementId,"wrap":_vm.wrap,"autocomplete":_vm.autocomplete,"spellcheck":_vm.spellcheck,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"rows":_vm.rows,"maxlength":_vm.maxlength,"readonly":_vm.readonly,"name":_vm.name,"autofocus":_vm.autofocus},domProps:{"value":_vm.currentValue},on:{"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)},_vm.handleKeyup],"keypress":_vm.handleKeypress,"keydown":_vm.handleKeydown,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput}})])])}
var inputvue_type_template_id_1f12ab92_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/src/input.vue?vue&type=template&id=1f12ab92&

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
`;

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
];

let computedStyleCache = {};
let hiddenTextarea;

function calculateNodeStyling(node, useCache = false) {
    const nodeRef = (
            node.getAttribute('id') ||
            node.getAttribute('data-reactid') ||
            node.getAttribute('name'));

    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }

    const style = window.getComputedStyle(node);

    const boxSizing = (
        style.getPropertyValue('box-sizing') ||
        style.getPropertyValue('-moz-box-sizing') ||
        style.getPropertyValue('-webkit-box-sizing')
    );

    const paddingSize = (
        parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top'))
    );

    const borderSize = (
        parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width'))
    );

    const sizingStyle = SIZING_STYLE
        .map(name => `${name}:${style.getPropertyValue(name)}`)
        .join(';');

    const nodeInfo = {
        sizingStyle,
        paddingSize,
        borderSize,
        boxSizing,
    };

    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }

    return nodeInfo;
}

function calcTextareaHeight(uiTextNode, minRows = null, maxRows = null, useCache = false) {
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }

    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    } else {
        hiddenTextarea.removeAttribute('wrap');
    }

    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox
    let {
        paddingSize, borderSize,
        boxSizing, sizingStyle,
    } = calculateNodeStyling(uiTextNode, useCache);

    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute('style', `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';

    let minHeight = Number.MIN_SAFE_INTEGER;
    let maxHeight = Number.MAX_SAFE_INTEGER;
    let height = hiddenTextarea.scrollHeight;
    let overflowY;

    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height = height + borderSize;
    } else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height = height - paddingSize;
    }

    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = ' ';
        let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    // Remove scroll bar flash when autosize without maxRows
    if (!maxRows) {
        overflowY = 'hidden';
    }

    return {
        height: `${height}px`,
        minHeight: `${minHeight}px`,
        maxHeight: `${maxHeight}px`,
        overflowY
    };
}

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
  inputvue_type_template_id_1f12ab92_render,
  inputvue_type_template_id_1f12ab92_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16e9b170-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/rate/src/main.vue?vue&type=template&id=01377a57&
var mainvue_type_template_id_01377a57_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bin-rate",attrs:{"role":"slider","aria-valuenow":_vm.currentValue,"aria-valuetext":_vm.text,"aria-valuemin":"0","aria-valuemax":_vm.max,"tabindex":"0"},on:{"keydown":_vm.handleKey}},[_vm._l((_vm.max),function(item,key){return _c('span',{key:key,staticClass:"bin-rate__item",style:({ cursor: _vm.rateDisabled ? 'auto' : 'pointer' }),on:{"mousemove":function($event){return _vm.setCurrentValue(item, $event)},"mouseleave":_vm.resetCurrentValue,"click":function($event){return _vm.selectValue(item)}}},[_c('i',{staticClass:"bin-rate__icon iconfont",class:[_vm.classes[item - 1], { 'hover': _vm.hoverIndex === item }],style:(_vm.getIconStyle(item))},[(_vm.showDecimalIcon(item))?_c('i',{staticClass:"bin-rate__decimal iconfont",class:_vm.decimalIconClass,style:(_vm.decimalStyle)}):_vm._e()])])}),(_vm.showText || _vm.showScore)?_c('span',{staticClass:"bin-rate__text",style:({ color: _vm.textColor })},[_vm._v(_vm._s(_vm.text))]):_vm._e()],2)}
var mainvue_type_template_id_01377a57_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/rate/src/main.vue?vue&type=template&id=01377a57&

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
  data() {
    return {
      pointerAtLeftHalf: true,
      currentValue: this.value,
      hoverIndex: -1
    };
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
      default() {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A'];
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
      default() {
        return ['icon-ios-star', 'icon-ios-star', 'icon-ios-star'];
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
      default() {
        return ['极差', '失望', '一般', '满意', '惊喜'];
      }
    },
    scoreTemplate: {
      type: String,
      default: '{value}'
    }
  },

  computed: {
    text() {
      let result = '';
      if (this.showScore) {
        result = this.scoreTemplate.replace(/\{\s*value\s*\}/, this.rateDisabled
          ? this.value
          : this.currentValue);
      } else if (this.showText) {
        result = this.texts[Math.ceil(this.currentValue) - 1];
      }
      return result;
    },

    decimalStyle() {
      let width = '';
      if (this.rateDisabled) {
        width = `${ this.valueDecimal < 50 ? 0 : 50 }%`;
      }
      if (this.allowHalf) {
        width = '50%';
      }
      return {
        color: this.activeColor,
        width
      };
    },

    valueDecimal() {
      return this.value * 100 - Math.floor(this.value) * 100;
    },

    decimalIconClass() {
      return this.getValueFromMap(this.value, this.classMap);
    },

    voidClass() {
      return this.rateDisabled ? this.classMap.disabledVoidClass : this.classMap.voidClass;
    },

    activeClass() {
      return this.getValueFromMap(this.currentValue, this.classMap);
    },

    colorMap() {
      return {
        lowColor: this.colors[0],
        mediumColor: this.colors[1],
        highColor: this.colors[2],
        voidColor: this.voidColor,
        disabledVoidColor: this.disabledVoidColor
      };
    },

    activeColor() {
      return this.getValueFromMap(this.currentValue, this.colorMap);
    },

    classes() {
      let result = [];
      let i = 0;
      let threshold = this.currentValue;
      if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
        threshold--;
      }
      for (; i < threshold; i++) {
        result.push(this.activeClass);
      }
      for (; i < this.max; i++) {
        result.push(this.voidClass);
      }
      return result;
    },

    classMap() {
      return {
        lowClass: this.iconClasses[0],
        mediumClass: this.iconClasses[1],
        highClass: this.iconClasses[2],
        voidClass: this.voidIconClass,
        disabledVoidClass: this.disabledVoidIconClass
      };
    },

    rateDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
      this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
    }
  },

  methods: {
    getMigratingConfig() {
      return {
        props: {
          'text-template': 'text-template is renamed to score-template.'
        }
      };
    },

    getValueFromMap(value, map) {
      let result = '';
      if (value <= this.lowThreshold) {
        result = map.lowColor || map.lowClass;
      } else if (value >= this.highThreshold) {
        result = map.highColor || map.highClass;
      } else {
        result = map.mediumColor || map.mediumClass;
      }
      return result;
    },

    showDecimalIcon(item) {
      let showWhenDisabled = this.rateDisabled && this.valueDecimal > 0 && item - 1 < this.value && item > this.value;
      /* istanbul ignore next */
      let showWhenAllowHalf = this.allowHalf &&
        this.pointerAtLeftHalf &&
        item - 0.5 <= this.currentValue &&
        item > this.currentValue;
      return showWhenDisabled || showWhenAllowHalf;
    },

    getIconStyle(item) {
      const voidColor = this.rateDisabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor;
      return {
        color: item <= this.currentValue ? this.activeColor : voidColor
      };
    },

    selectValue(value) {
      if (this.rateDisabled) {
        return;
      }
      if (this.allowHalf && this.pointerAtLeftHalf) {
        this.$emit('input', this.currentValue);
        this.$emit('change', this.currentValue);
      } else {
        this.$emit('input', value);
        this.$emit('change', value);
      }
    },

    handleKey(e) {
      if (this.rateDisabled) {
        return;
      }
      let currentValue = this.currentValue;
      const keyCode = e.keyCode;
      if (keyCode === 38 || keyCode === 39) { // left / down
        if (this.allowHalf) {
          currentValue += 0.5;
        } else {
          currentValue += 1;
        }
        e.stopPropagation();
        e.preventDefault();
      } else if (keyCode === 37 || keyCode === 40) {
        if (this.allowHalf) {
          currentValue -= 0.5;
        } else {
          currentValue -= 1;
        }
        e.stopPropagation();
        e.preventDefault();
      }
      currentValue = currentValue < 0 ? 0 : currentValue;
      currentValue = currentValue > this.max ? this.max : currentValue;

      this.$emit('input', currentValue);
      this.$emit('change', currentValue);
    },

    setCurrentValue(value, event) {
      if (this.rateDisabled) {
        return;
      }
      /* istanbul ignore if */
      if (this.allowHalf) {
        let target = event.target;
        if (hasClass(target, 'bin-rate__item')) {
          target = target.querySelector('.bin-rate__icon');
        }
        if (hasClass(target, 'bin-rate__decimal')) {
          target = target.parentNode;
        }
        this.pointerAtLeftHalf = event.offsetX * 2 <= target.clientWidth;
        this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value;
      } else {
        this.currentValue = value;
      }
      this.hoverIndex = value;
    },

    resetCurrentValue() {
      if (this.rateDisabled) {
        return;
      }
      if (this.allowHalf) {
        this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
      }
      this.currentValue = this.value;
      this.hoverIndex = -1;
    }
  },

  created() {
    if (!this.value) {
      this.$emit('input', 0);
    }
  }
});

// CONCATENATED MODULE: ./src/components/rate/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_rate_src_mainvue_type_script_lang_js_ = (rate_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/rate/src/main.vue





/* normalize component */

var rate_src_main_component = normalizeComponent(
  components_rate_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_01377a57_render,
  mainvue_type_template_id_01377a57_staticRenderFns,
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

/* harmony default export */ var loadingbar = ({
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




let seed = 0
const now = Date.now()

// 用时间戳设置为uuid
function getUuid () {
  return 'binMessage_' + now + '_' + (seed++)
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
      const name = notice.name || getUuid()
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
  components_input, rate
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
  Rate: rate
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});