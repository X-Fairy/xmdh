(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ 123:
/*!**************************************************!*\
  !*** E:/项萍/熙美订货/components/u-charts/u-charts.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {/*
 * uCharts v1.7.0.4
 * uni-app平台高性能跨全端图表
 * 支持H5、APP、小程序（微信/支付宝/百度/头条）
 * Designed by QIUN秋云
 *
 * uCharts官方网站
 * https://www.uCharts.cn
 *
 * 开源地址:
 * https://github.com/16cheng/uCharts(停更)
 * 开源地址即将变更为：
 * https://gitee.com/qiuyunkeji/uCharts(尚未上传)
 * 开源协议变更为Apache-2.0
 *
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 *
 * 主要更新记录
 * 2019-04-01
 * 改造为兼容uni-app的uCharts
 * 2019-04-14
 * 支持支付宝/百度/头条小程序实现跨全端
 * 2019-04-15
 * 支持横屏模式，新增rotate参数，默认flase
 * 2019-04-16
 * 新增圆弧进度图，图表类型arcbar
 * 2019-04-22
 * 修改图表拖拽功能跨端支持，增加拖拽时显示滚动条
 * 2019-04-28
 * 新增柱状图自定义颜色
 * 2019-05-01
 * 新增仪表盘图
 * 2019-05-14
 * 新增K线图
 * 2019-05-20
 * 新增混合图、堆叠图、温度计图、柱状图类ToolTip效果
 *
 *
 */



var config = {
  yAxisWidth: 15,
  yAxisSplit: 5,
  xAxisHeight: 15,
  xAxisLineHeight: 15,
  legendHeight: 15,
  yAxisTitleWidth: 15,
  padding: 12,
  pixelRatio: 1, //适配H5高分屏
  rotate: false, //横屏模式
  columePadding: 3,
  fontSize: 13,
  //dataPointShape: ['diamond', 'circle', 'triangle', 'rect'],
  dataPointShape: ['circle', 'circle', 'circle', 'circle'], //仿F2图例样式改为圆点
  colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'],
  pieChartLinePadding: 15,
  pieChartTextPadding: 5,
  xAxisTextPadding: 3,
  titleColor: '#333333',
  titleFontSize: 20,
  subtitleColor: '#999999',
  subtitleFontSize: 15,
  toolTipPadding: 3,
  toolTipBackground: '#000000',
  toolTipOpacity: 0.7,
  toolTipLineHeight: 20,
  radarGridCount: 3,
  radarLabelTextMargin: 15,
  gaugeLabelTextMargin: 15 };


// Object.assign polyfill
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target, varArgs) {
  if (target == null) {
    // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) {
      // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}

var util = {
  toFixed: function toFixed(num, limit) {
    limit = limit || 2;
    if (this.isFloat(num)) {
      num = num.toFixed(limit);
    }
    return num;
  },
  isFloat: function isFloat(num) {
    return num % 1 !== 0;
  },
  approximatelyEqual: function approximatelyEqual(num1, num2) {
    return Math.abs(num1 - num2) < 1e-10;
  },
  isSameSign: function isSameSign(num1, num2) {
    return Math.abs(num1) === num1 && Math.abs(num2) === num2 || Math.abs(num1) !== num1 && Math.abs(num2) !== num2;
  },
  isSameXCoordinateArea: function isSameXCoordinateArea(p1, p2) {
    return this.isSameSign(p1.x, p2.x);
  },
  isCollision: function isCollision(obj1, obj2) {
    obj1.end = {};
    obj1.end.x = obj1.start.x + obj1.width;
    obj1.end.y = obj1.start.y - obj1.height;
    obj2.end = {};
    obj2.end.x = obj2.start.x + obj2.width;
    obj2.end.y = obj2.start.y - obj2.height;
    var flag = obj2.start.x > obj1.end.x || obj2.end.x < obj1.start.x || obj2.end.y > obj1.start.y || obj2.start.y <
    obj1.end.y;

    return !flag;
  } };


// hex 转 rgba
function hexToRgb(hexValue, opc) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opc + ')';
}

function findRange(num, type, limit) {
  if (isNaN(num)) {
    throw new Error('[wxCharts] unvalid series data!');
  }
  limit = limit || 10;
  type = type ? type : 'upper';
  var multiple = 1;
  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }
  if (type === 'upper') {
    num = Math.ceil(num * multiple);
  } else {
    num = Math.floor(num * multiple);
  }
  while (num % limit !== 0) {
    if (type === 'upper') {
      num++;
    } else {
      num--;
    }
  }

  return num / multiple;
}

function calValidDistance(distance, chartData, config, opts) {

  var dataChartAreaWidth = opts.width - config.padding - chartData.xAxisPoints[0];
  var dataChartWidth = chartData.eachSpacing * opts.categories.length;
  var validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth;
  }
  return validDistance;
}

function isInAngleRange(angle, startAngle, endAngle) {
  function adjust(angle) {
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }

    return angle;
  }

  angle = adjust(angle);
  startAngle = adjust(startAngle);
  endAngle = adjust(endAngle);
  if (startAngle > endAngle) {
    endAngle += 2 * Math.PI;
    if (angle < startAngle) {
      angle += 2 * Math.PI;
    }
  }

  return angle >= startAngle && angle <= endAngle;
}

function calRotateTranslate(x, y, h) {
  var xv = x;
  var yv = h - y;

  var transX = xv + (h - yv - xv) / Math.sqrt(2);
  transX *= -1;

  var transY = (h - yv) * (Math.sqrt(2) - 1) - (h - yv - xv) / Math.sqrt(2);

  return {
    transX: transX,
    transY: transY };

}

function createCurveControlPoints(points, i) {

  function isNotMiddlePoint(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y, points[
      i + 1].y);
    } else {
      return false;
    }
  }

  var a = 0.2;
  var b = 0.2;
  var pAx = null;
  var pAy = null;
  var pBx = null;
  var pBy = null;
  if (i < 1) {
    pAx = points[0].x + (points[1].x - points[0].x) * a;
    pAy = points[0].y + (points[1].y - points[0].y) * a;
  } else {
    pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
    pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
  }

  if (i > points.length - 3) {
    var last = points.length - 1;
    pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
    pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
  } else {
    pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
    pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
  }

  // fix issue https://github.com/xiaolin3303/wx-charts/issues/79
  if (isNotMiddlePoint(points, i + 1)) {
    pBy = points[i + 1].y;
  }
  if (isNotMiddlePoint(points, i)) {
    pAy = points[i].y;
  }

  return {
    ctrA: {
      x: pAx,
      y: pAy },

    ctrB: {
      x: pBx,
      y: pBy } };


}

function convertCoordinateOrigin(x, y, center) {
  return {
    x: center.x + x,
    y: center.y - y };

}

function avoidCollision(obj, target) {
  if (target) {
    // is collision test
    while (util.isCollision(obj, target)) {
      if (obj.start.x > 0) {
        obj.start.y--;
      } else if (obj.start.x < 0) {
        obj.start.y++;
      } else {
        if (obj.start.y > 0) {
          obj.start.y++;
        } else {
          obj.start.y--;
        }
      }
    }
  }
  return obj;
}

function fillSeriesColor(series, config) {
  var index = 0;
  return series.map(function (item) {
    if (!item.color) {
      item.color = config.colors[index];
      index = (index + 1) % config.colors.length;
    }
    return item;
  });
}

function fillSeriesType(series, opts) {
  return series.map(function (item) {
    if (!item.type) {
      item.type = opts.type;
    }
    return item;
  });
}

function getDataRange(minData, maxData) {
  var limit = 0;
  var range = maxData - minData;
  if (range >= 10000) {
    limit = 1000;
  } else if (range >= 1000) {
    limit = 100;
  } else if (range >= 100) {
    limit = 10;
  } else if (range >= 10) {
    limit = 5;
  } else if (range >= 1) {
    limit = 1;
  } else if (range >= 0.1) {
    limit = 0.1;
  } else {
    limit = 0.01;
  }
  return {
    minRange: findRange(minData, 'lower', limit),
    maxRange: findRange(maxData, 'upper', limit) };

}

function measureText(text) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.fontSize;

  // wx canvas 未实现measureText方法, 此处自行实现
  // 适配修改初始字体10px为其他大小的方法
  text = String(text);
  var text = text.split('');
  var width = 0;
  text.forEach(function (item) {
    if (/[a-zA-Z]/.test(item)) {
      width += 7;
    } else if (/[0-9]/.test(item)) {
      width += 5.5;
    } else if (/\./.test(item)) {
      width += 2.7;
    } else if (/-/.test(item)) {
      width += 3.25;
    } else if (/[\u4e00-\u9fa5]/.test(item)) {
      width += 10;
    } else if (/\(|\)/.test(item)) {
      width += 3.73;
    } else if (/\s/.test(item)) {
      width += 2.5;
    } else if (/%/.test(item)) {
      width += 8;
    } else {
      width += 10;
    }
  });
  return width * fontSize / 10;
}

function dataCombine(series) {
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data);
  }, []);
}

function dataCombineStack(series) {
  var sum = new Array(series[0].data.length);
  for (var j = 0; j < sum.length; j++) {
    sum[j] = 0;
  }
  for (var i = 0; i < series.length; i++) {
    for (var j = 0; j < sum.length; j++) {
      sum[j] += series[i].data[j];
    }
  }
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data).concat(sum);
  }, []);
}

function getTouches(touches, opts, e) {
  var x, y;
  if (touches.clientX) {
    if (opts.rotate) {//适配横屏
      y = opts.height - touches.clientX * opts.pixelRatio;
      x = (touches.pageY - e.mp.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    } else {
      x = touches.clientX * opts.pixelRatio;
      y = (touches.pageY - e.mp.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    }
  } else {
    if (opts.rotate) {//适配横屏
      y = opts.height - touches.x * opts.pixelRatio;
      x = touches.y * opts.pixelRatio;
    } else {
      x = touches.x * opts.pixelRatio;
      y = touches.y * opts.pixelRatio;
    }
  }
  return {
    x: x,
    y: y };

}

function getSeriesDataItem(series, index) {
  var data = [];
  series.forEach(function (item) {
    if (item.data[index] !== null && typeof item.data[index] !== 'undefined') {
      var seriesItem = {};
      seriesItem.color = item.color;
      seriesItem.name = item.name;
      seriesItem.data = item.format ? item.format(item.data[index]) : item.data[index];
      data.push(seriesItem);
    }
  });

  return data;
}

function getMaxTextListLength(list) {
  var lengthList = list.map(function (item) {
    return measureText(item);
  });
  return Math.max.apply(null, lengthList);
}

function getRadarCoordinateSeries(length) {
  var eachAngle = 2 * Math.PI / length;
  var CoordinateSeries = [];
  for (var i = 0; i < length; i++) {
    CoordinateSeries.push(eachAngle * i);
  }

  return CoordinateSeries.map(function (item) {
    return -1 * item + Math.PI / 2;
  });
}

function getToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color };

  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  calPoints.forEach(function (points) {
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  });
  validCalPoints.forEach(function (item) {
    offset.x = Math.round(item.x);
    offset.y += item.y;
  });

  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getCandleToolTipData(series, seriesData, calPoints, index, categories, extra) {
  var option = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var upColor = extra.color.upFill;
  var downColor = extra.color.downFill;
  //颜色顺序为开盘，收盘，最低，最高
  var color = [upColor, upColor, downColor, upColor];
  var textList = [];
  var text0 = {
    text: categories[index],
    color: null };

  textList.push(text0);
  seriesData.map(function (item) {
    //console.log(color)
    if (index == 0 && item.data[1] - item.data[0] < 0) {
      color[1] = downColor;
    } else {
      if (item.data[0] < series[index - 1][1]) {
        color[0] = downColor;
      }
      if (item.data[1] < item.data[0]) {
        color[1] = downColor;
      }
      if (item.data[2] > series[index - 1][1]) {
        color[2] = upColor;
      }
      if (item.data[3] < series[index - 1][1]) {
        color[3] = downColor;
      }
    }

    var text1 = {
      text: '开盘：' + item.data[0],
      color: color[0] };

    var text2 = {
      text: '收盘：' + item.data[1],
      color: color[1] };

    var text3 = {
      text: '最低：' + item.data[2],
      color: color[2] };

    var text4 = {
      text: '最高：' + item.data[3],
      color: color[3] };

    textList.push(text1, text2, text3, text4);
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  calPoints.forEach(function (points) {
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  });
  offset.x = Math.round(validCalPoints[0][0].x);
  return {
    textList: textList,
    offset: offset };

}

function findCurrentIndex(currentPoints, xAxisPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var currentIndex = -1;
  if (isInExactChartArea(currentPoints, opts, config)) {
    xAxisPoints.forEach(function (item, index) {
      if (currentPoints.x + offset > item) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function isInExactChartArea(currentPoints, opts, config) {
  return currentPoints.x < opts.width - config.padding && currentPoints.x > config.padding + config.yAxisWidth + config.yAxisTitleWidth &&
  currentPoints.y > config.padding && currentPoints.y < opts.height - config.legendHeight - config.xAxisHeight - config.
  padding;
}

function findRadarChartCurrentIndex(currentPoints, radarData, count) {
  var eachAngleArea = 2 * Math.PI / count;
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, radarData.center, radarData.radius)) {
    var fixAngle = function fixAngle(angle) {
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      return angle;
    };

    var angle = Math.atan2(radarData.center.y - currentPoints.y, currentPoints.x - radarData.center.x);
    angle = -1 * angle;
    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    var angleList = radarData.angleList.map(function (item) {
      item = fixAngle(-1 * item);

      return item;
    });

    angleList.forEach(function (item, index) {
      var rangeStart = fixAngle(item - eachAngleArea / 2);
      var rangeEnd = fixAngle(item + eachAngleArea / 2);
      if (rangeEnd < rangeStart) {
        rangeEnd += 2 * Math.PI;
      }
      if (angle >= rangeStart && angle <= rangeEnd || angle + 2 * Math.PI >= rangeStart && angle + 2 * Math.PI <=
      rangeEnd) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function findPieChartCurrentIndex(currentPoints, pieData) {
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    for (var i = 0, len = pieData.series.length; i < len; i++) {
      var item = pieData.series[i];
      if (isInAngleRange(angle, item._start_, item._start_ + item._proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }

  return currentIndex;
}

function isInExactPieChartArea(currentPoints, center, radius) {
  return Math.pow(currentPoints.x - center.x, 2) + Math.pow(currentPoints.y - center.y, 2) <= Math.pow(radius, 2);
}

function splitPoints(points) {
  var newPoints = [];
  var items = [];
  points.forEach(function (item, index) {
    if (item !== null) {
      items.push(item);
    } else {
      if (items.length) {
        newPoints.push(items);
      }
      items = [];
    }
  });
  if (items.length) {
    newPoints.push(items);
  }

  return newPoints;
}

function calLegendData(series, opts, config) {
  if (opts.legend === false) {
    return {
      legendList: [],
      legendHeight: 0 };

  }
  //适配H5高分屏
  var padding = 5 * opts.pixelRatio;
  var marginTop = 8 * opts.pixelRatio;
  var shapeWidth = 15 * opts.pixelRatio;
  var legendList = [];
  var widthCount = 0;
  var currentRow = [];
  series.forEach(function (item) {
    var itemWidth = 3 * padding + shapeWidth + measureText(item.name || 'undefined');
    if (widthCount + itemWidth > opts.width) {
      legendList.push(currentRow);
      widthCount = itemWidth;
      currentRow = [item];
    } else {
      widthCount += itemWidth;
      currentRow.push(item);
    }
  });
  if (currentRow.length) {
    legendList.push(currentRow);
  }

  return {
    legendList: legendList,
    legendHeight: legendList.length * (config.fontSize + marginTop) + padding };

}

function calCategoriesData(categories, opts, config) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };


  var _getXAxisPoints = getXAxisPoints(categories, opts, config),
  eachSpacing = _getXAxisPoints.eachSpacing;

  // get max length of categories text


  var categoriesTextLenth = categories.map(function (item) {
    return measureText(item);
  });

  var maxTextLength = Math.max.apply(this, categoriesTextLenth);

  if (opts.xAxis.rotateLabel == true && maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }

  return result;
}

function getRadarDataPoints(angleList, center, radius, series, opts) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

  var radarOption = opts.extra.radar || {};
  radarOption.max = radarOption.max || 0;
  var maxData = Math.max(radarOption.max, Math.max.apply(null, dataCombine(series)));

  var data = [];
  series.forEach(function (each) {
    var listItem = {};
    listItem.color = each.color;
    listItem.data = [];
    each.data.forEach(function (item, index) {
      var tmp = {};
      tmp.angle = angleList[index];

      tmp.proportion = item / maxData;
      tmp.position = convertCoordinateOrigin(radius * tmp.proportion * process * Math.cos(tmp.angle), radius * tmp.proportion *
      process * Math.sin(tmp.angle), center);
      listItem.data.push(tmp);
    });

    data.push(listItem);
  });

  return data;
}

function getPieDataPoints(series) {
  var process = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var count = 0;
  var _start_ = 0;
  series.forEach(function (item) {
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
  });
  series.forEach(function (item) {
    item.data = item.data === null ? 0 : item.data;
    item._proportion_ = item.data / count * process;
  });
  series.forEach(function (item) {
    item._start_ = _start_;
    _start_ += 2 * item._proportion_ * Math.PI;
  });

  return series;
}

function getArcbarDataPoints(series, arcbarOption) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process == 1) {
    process = 0.999999;
  }
  series.forEach(function (item) {
    item.data = item.data === null ? 0 : item.data;
    var totalAngle;
    if (arcbarOption.type == 'default') {
      totalAngle = arcbarOption.startAngle - arcbarOption.endAngle + 1;
    } else {
      totalAngle = 2;
    }
    item._proportion_ = totalAngle * item.data * process + arcbarOption.startAngle;
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  });
  return series;
}

function getGaugeAxisPoints(categories, startAngle, endAngle) {
  var totalAngle = startAngle - endAngle + 1;
  var tempStartAngle = startAngle;
  for (var i = 0; i < categories.length; i++) {
    categories[i].value = categories[i].value === null ? 0 : categories[i].value;
    categories[i]._startAngle_ = tempStartAngle;
    categories[i]._endAngle_ = totalAngle * categories[i].value + startAngle;
    if (categories[i]._endAngle_ >= 2) {
      categories[i]._endAngle_ = categories[i]._endAngle_ % 2;
    }
    tempStartAngle = categories[i]._endAngle_;
  }
  return categories;
}

function getGaugeDataPoints(series, categories, gaugeOption) {
  var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  series.forEach(function (item) {
    item.data = item.data === null ? 0 : item.data;
    if (gaugeOption.pointer.color == 'auto') {
      for (var i = 0; i < categories.length; i++) {
        if (item.data <= categories[i].value) {
          item.color = categories[i].color;
          break;
        }
      }
    } else {
      item.color = gaugeOption.pointer.color;
    }
    var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    item._endAngle_ = totalAngle * item.data + gaugeOption.startAngle;
    item._oldAngle_ = gaugeOption.oldAngle;
    if (gaugeOption.oldAngle < gaugeOption.endAngle) {
      item._oldAngle_ += 2;
    }
    if (item.data >= gaugeOption.oldData) {
      item._proportion_ = (item._endAngle_ - item._oldAngle_) * process + gaugeOption.oldAngle;
    } else {
      item._proportion_ = item._oldAngle_ - (item._oldAngle_ - item._endAngle_) * process;
    }
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  });
  return series;
}


function getPieTextMaxLength(series) {
  series = getPieDataPoints(series);
  var maxLength = 0;
  series.forEach(function (item) {
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    maxLength = Math.max(maxLength, measureText(text));
  });

  return maxLength;
}

function fixColumeData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = (eachSpacing - 2 * config.columePadding) / columnLen;

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      // customer column width
      item.width = Math.min(item.width, +opts.extra.column.width);
    } else {
      // default width should less tran 25px
      // don't ask me why, I don't know
      item.width = Math.min(item.width, 25);
    }
    item.x += (index + 0.5 - columnLen / 2) * item.width;

    return item;
  });
}

function fixColumeMeterData(points, eachSpacing, columnLen, index, config, opts, border) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = eachSpacing - 2 * config.columePadding;

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    } else {
      item.width = Math.min(item.width, 25);
    }
    if (index > 0) {
      item.width -= 2 * border;
    }
    return item;
  });
}

function fixColumeStackData(points, eachSpacing, columnLen, index, config, opts, series) {

  return points.map(function (item, indexn) {

    if (item === null) {
      return null;
    }
    item.width = eachSpacing - 2 * config.columePadding;

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    } else {
      item.width = Math.min(item.width, 25);
    }
    return item;
  });
}

function getXAxisPoints(categories, opts, config) {
  var yAxisTotalWidth = config.yAxisWidth + config.yAxisTitleWidth;
  var spacingValid = opts.width - 2 * config.padding - yAxisTotalWidth;
  var dataCount = opts.enableScroll ? Math.min(opts.xAxis.itemCount, categories.length) : categories.length;
  var eachSpacing = spacingValid / dataCount;

  var xAxisPoints = [];
  var startX = config.padding + yAxisTotalWidth;
  var endX = opts.width - config.padding;
  categories.forEach(function (item, index) {
    xAxisPoints.push(startX + index * eachSpacing);
  });
  if (opts.enableScroll === true) {
    xAxisPoints.push(startX + categories.length * eachSpacing);
  } else {
    xAxisPoints.push(endX);
  }

  return {
    xAxisPoints: xAxisPoints,
    startX: startX,
    endX: endX,
    eachSpacing: eachSpacing };

}

function getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;

  var points = [];
  var validHeight = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var cPoints = [];
      item.forEach(function (items, indexs) {
        var point = {};
        point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
        var value = items.value || items;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        height *= process;
        point.y = opts.height - config.xAxisHeight - config.legendHeight - Math.round(height) - config.padding;
        cPoints.push(point);
      });
      points.push(cPoints);
    }
  });

  return points;
}

function getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;

  var points = [];
  var validHeight = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
      var value = item.value || item;
      var height = validHeight * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.y = opts.height - config.xAxisHeight - config.legendHeight - Math.round(height) - config.padding;
      points.push(point);
    }
  });

  return points;
}

function getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;

  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);

      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.y = opts.height - config.xAxisHeight - config.legendHeight - Math.round(height) - config.padding;
      point.y0 = opts.height - config.xAxisHeight - config.legendHeight - Math.round(heightc) - config.padding;
      points.push(point);
    }
  });

  return points;
}

function getYAxisTextList(series, opts, config, stack) {
  var data;
  if (stack == 'stack') {
    //data = dataCombine(series);
    data = dataCombineStack(series);
  } else {
    data = dataCombine(series);
  }

  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      //判断是否为数组
      if (item.constructor == Array) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  //var minData = Math.min.apply(this, data);
  //var maxData = Math.max.apply(this, data);
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor == Array) {
        item.map(function (subitem) {
          sorted.push(subitem);
        });
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
    //typeof item === 'object' ? sorted.push(item.value) : sorted.push(item)
  });
  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  if (typeof opts.yAxis.min === 'number') {
    minData = Math.min(opts.yAxis.min, minData);
  }
  if (typeof opts.yAxis.max === 'number') {
    maxData = Math.max(opts.yAxis.max, maxData);
  }

  // fix issue https://github.com/xiaolin3303/wx-charts/issues/9
  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    //minData -= rangeSpan;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / config.yAxisSplit;

  for (var i = 0; i <= config.yAxisSplit; i++) {
    range.push(minRange + eachRange * i);
  }
  return range.reverse();
}

function calYAxisData(series, opts, config) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, opts.extra.column || {
    "type": "" });


  var ranges = getYAxisTextList(series, opts, config, columnstyle.type);
  var yAxisWidth = config.yAxisWidth;
  var rangesFormat = ranges.map(function (item) {
    item = util.toFixed(item, 2);
    item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
    yAxisWidth = Math.max(yAxisWidth, measureText(item) + 5);
    return item;
  });
  if (opts.yAxis.disabled === true) {
    yAxisWidth = 0;
  }

  return {
    rangesFormat: rangesFormat,
    ranges: ranges,
    yAxisWidth: yAxisWidth };

}

function calTooltipYAxisData(point, series, opts, config, eachSpacing) {
  var ranges = getYAxisTextList(series, opts, config);
  var spacingValid = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  var maxVal = ranges[0];
  var minVal = ranges[ranges.length - 1];
  var minAxis = config.padding;
  var maxAxis = config.padding + spacingValid;
  var item = maxVal - (maxVal - minVal) * (point - minAxis) / (maxAxis - minAxis);
  item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
  return item;
}

function contextRotate(context, opts) {
  if (opts.rotateLock !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
  } else if (opts._rotate_ !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
    opts._rotate_ = true;
  }
}

function drawPointShape(points, color, shape, context, opts) {
  context.beginPath();
  context.setStrokeStyle("#ffffff");
  context.setLineWidth(1 * opts.pixelRatio);
  context.setFillStyle(color);
  if (shape === 'diamond') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y);
        context.lineTo(item.x, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'circle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x + 3.5 * opts.pixelRatio, item.y);
        context.arc(item.x, item.y, 4 * opts.pixelRatio, 0, 2 * Math.PI, false);
      }
    });
  } else if (shape === 'rect') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x - 3.5, item.y - 3.5);
        context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
      }
    });
  } else if (shape === 'triangle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y + 4.5);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function drawRingTitle(opts, config, context) {
  var titlefontSize = opts.title.fontSize || config.titleFontSize;
  var subtitlefontSize = opts.subtitle.fontSize || config.subtitleFontSize;
  var title = opts.title.name || '';
  var subtitle = opts.subtitle.name || '';
  var titleFontColor = opts.title.color || config.titleColor;
  var subtitleFontColor = opts.subtitle.color || config.subtitleColor;
  var titleHeight = title ? titlefontSize : 0;
  var subtitleHeight = subtitle ? subtitlefontSize : 0;
  var margin = 5;
  if (subtitle) {
    var textWidth = measureText(subtitle, subtitlefontSize);
    var startX = (opts.width - textWidth) / 2 + (opts.subtitle.offsetX || 0);
    var startY = (opts.height - config.legendHeight + subtitlefontSize) / 2 + (opts.subtitle.offsetY || 0);
    if (title) {
      startY -= (titleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(subtitlefontSize);
    context.setFillStyle(subtitleFontColor);
    context.fillText(subtitle, startX, startY);
    context.closePath();
    context.stroke();
  }
  if (title) {
    var _textWidth = measureText(title, titlefontSize);
    var _startX = (opts.width - _textWidth) / 2 + (opts.title.offsetX || 0);
    var _startY = (opts.height - config.legendHeight + titlefontSize) / 2 + (opts.title.offsetY || 0);
    if (subtitle) {
      _startY += (subtitleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(titlefontSize);
    context.setFillStyle(titleFontColor);
    context.fillText(title, _startX, _startY);
    context.closePath();
    context.stroke();
  }
}

function drawPointText(points, series, config, context) {
  // 绘制数据文案
  var data = series.data;


  points.forEach(function (item, index) {
    if (item !== null) {
      //var formatVal = series.format ? series.format(data[index]) : data[index];
      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle('#666666');
      var value = data[index].value || data[index];
      var formatVal = series.format ? series.format(value) : value;
      context.fillText(formatVal, item.x - measureText(formatVal) / 2, item.y - 2);
      context.closePath();
      context.stroke();
    }
  });

}

function drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context) {
  radius -= gaugeOption.width / 2 + config.gaugeLabelTextMargin;

  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var totalNumber = gaugeOption.endNumber - gaugeOption.startNumber;
  var splitNumber = totalNumber / gaugeOption.splitLine.splitNumber;
  var nowAngle = gaugeOption.startAngle;
  var nowNumber = gaugeOption.startNumber;
  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    var pos = {
      x: radius * Math.cos(nowAngle * Math.PI),
      y: radius * Math.sin(nowAngle * Math.PI) };

    pos.x += centerPosition.x - measureText(nowNumber) / 2;
    pos.y += centerPosition.y;
    var startX = pos.x;
    var startY = pos.y;

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(gaugeOption.labelColor || '#666666');
    context.fillText(nowNumber, startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();

    nowAngle += splitAngle;
    if (nowAngle >= 2) {
      nowAngle = nowAngle % 2;
    }
    nowNumber += splitNumber;
  }

}

function drawRadarLabel(angleList, radius, centerPosition, opts, config, context) {
  var radarOption = opts.extra.radar || {};
  radius += config.radarLabelTextMargin;

  angleList.forEach(function (angle, index) {
    var pos = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle) };

    var posRelativeCanvas = convertCoordinateOrigin(pos.x, pos.y, centerPosition);
    var startX = posRelativeCanvas.x;
    var startY = posRelativeCanvas.y;
    if (util.approximatelyEqual(pos.x, 0)) {
      startX -= measureText(opts.categories[index] || '') / 2;
    } else if (pos.x < 0) {
      startX -= measureText(opts.categories[index] || '');
    }
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(radarOption.labelColor || '#666666');
    context.fillText(opts.categories[index] || '', startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });

}

function drawPieText(series, opts, config, context, radius, center) {
  var lineRadius = radius + config.pieChartLinePadding;
  var textObjectCollection = [];
  var lastTextObject = null;

  var seriesConvert = series.map(function (item) {
    var arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._proportion_ / 2);
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    var color = item.color;
    return {
      arc: arc,
      text: text,
      color: color };

  });
  seriesConvert.forEach(function (item) {
    // line end
    var orginX1 = Math.cos(item.arc) * lineRadius;
    var orginY1 = Math.sin(item.arc) * lineRadius;

    // line start
    var orginX2 = Math.cos(item.arc) * radius;
    var orginY2 = Math.sin(item.arc) * radius;

    // text start
    var orginX3 = orginX1 >= 0 ? orginX1 + config.pieChartTextPadding : orginX1 - config.pieChartTextPadding;
    var orginY3 = orginY1;

    var textWidth = measureText(item.text);
    var startY = orginY3;

    if (lastTextObject && util.isSameXCoordinateArea(lastTextObject.start, {
      x: orginX3 }))
    {
      if (orginX3 > 0) {
        startY = Math.min(orginY3, lastTextObject.start.y);
      } else if (orginX1 < 0) {
        startY = Math.max(orginY3, lastTextObject.start.y);
      } else {
        if (orginY3 > 0) {
          startY = Math.max(orginY3, lastTextObject.start.y);
        } else {
          startY = Math.min(orginY3, lastTextObject.start.y);
        }
      }
    }

    if (orginX3 < 0) {
      orginX3 -= textWidth;
    }

    var textObject = {
      lineStart: {
        x: orginX2,
        y: orginY2 },

      lineEnd: {
        x: orginX1,
        y: orginY1 },

      start: {
        x: orginX3,
        y: startY },

      width: textWidth,
      height: config.fontSize,
      text: item.text,
      color: item.color };


    lastTextObject = avoidCollision(textObject, lastTextObject);
    textObjectCollection.push(lastTextObject);
  });

  textObjectCollection.forEach(function (item) {
    var lineStartPoistion = convertCoordinateOrigin(item.lineStart.x, item.lineStart.y, center);
    var lineEndPoistion = convertCoordinateOrigin(item.lineEnd.x, item.lineEnd.y, center);
    var textPosition = convertCoordinateOrigin(item.start.x, item.start.y, center);
    context.setLineWidth(1 * opts.pixelRatio);
    context.setFontSize(config.fontSize);
    context.beginPath();
    context.setStrokeStyle(item.color);
    context.setFillStyle(item.color);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    var curveStartX = item.start.x < 0 ? textPosition.x + item.width : textPosition.x;
    var textStartX = item.start.x < 0 ? textPosition.x - 5 : textPosition.x + 5;
    context.quadraticCurveTo(lineEndPoistion.x, lineEndPoistion.y, curveStartX, textPosition.y);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(textPosition.x + item.width, textPosition.y);
    context.arc(curveStartX, textPosition.y, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle('#666666');
    context.fillText(item.text, textStartX, textPosition.y + 3);
    context.closePath();
    context.stroke();
    context.closePath();
  });
}

function drawToolTipSplitLine(offsetX, opts, config, context) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startY = config.padding;
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.beginPath();
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.moveTo(offsetX, startY);
  context.lineTo(offsetX, endY);
  context.closePath();
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.xAxisLabel) {
    var lableText = opts.categories[opts.tooltip.index];
    context.setFontSize(config.fontSize);
    var textWidth = context.measureText(lableText).width;

    var textX = offsetX - config.toolTipPadding - 0.5 * textWidth;
    var textY = endY;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity ||
    config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX, textY, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(lableText, textX + 2 * config.toolTipPadding, textY + config.toolTipPadding + config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startX = config.padding + config.yAxisWidth + config.yAxisTitleWidth;
  var endX = opts.width - config.padding;

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.beginPath();
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.moveTo(startX, opts.tooltip.offset.y);
  context.lineTo(endX, opts.tooltip.offset.y);
  context.closePath();
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.yAxisLabel) {

    var lableText = calTooltipYAxisData(opts.tooltip.offset.y, opts.series, opts, config, eachSpacing);
    context.setFontSize(config.fontSize);
    var textWidth = context.measureText(lableText).width;

    var textX = startX - 2 * config.toolTipPadding - textWidth;
    var textY = opts.tooltip.offset.y;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity ||
    config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX, textY - 0.5 * config.fontSize - config.toolTipPadding, textWidth + 2 * config.toolTipPadding,
    config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(lableText, textX + config.toolTipPadding, textY + 0.5 * config.fontSize);
    context.closePath();
    context.stroke();
  }
}


function drawToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var startY = config.padding;
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;
  context.beginPath();
  context.setFillStyle(hexToRgb('#000000', 0.08));
  context.rect(offsetX - eachSpacing / 2, startY, eachSpacing, endY - startY);
  context.closePath();
  context.fill();
}

function drawToolTip(textList, offset, opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  var legendWidth = 4 * opts.pixelRatio;
  var legendMarginRight = 5 * opts.pixelRatio;
  var arrowWidth = 8 * opts.pixelRatio;
  var isOverRightBorder = false;
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'candle' || opts.type == 'mix') {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  offset = assign({
    x: 0,
    y: 0 },
  offset);
  offset.y -= 8 * opts.pixelRatio;
  var textWidth = textList.map(function (item) {
    return measureText(item.text);
  });

  var toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
  var toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;

  // if beyond the right border
  if (offset.x - Math.abs(opts._scrollDistance_) + arrowWidth + toolTipWidth > opts.width) {
    isOverRightBorder = true;
  }

  // draw background rect
  context.beginPath();
  context.setFillStyle(hexToRgb(opts.tooltip.option.background || config.toolTipBackground, config.toolTipOpacity));
  if (isOverRightBorder) {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  } else {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  }

  context.closePath();
  context.fill();

  // draw legend
  textList.forEach(function (item, index) {
    if (item.color !== null) {
      context.beginPath();
      context.setFillStyle(item.color);
      var startX = offset.x + arrowWidth + 2 * config.toolTipPadding;
      var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
      config.toolTipPadding + 1;
      if (isOverRightBorder) {
        startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding;
      }
      context.fillRect(startX, startY, legendWidth, config.fontSize);
      context.closePath();
    }
  });

  // draw text list

  textList.forEach(function (item, index) {
    var startX = offset.x + arrowWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
    if (isOverRightBorder) {
      startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding + +legendWidth + legendMarginRight;
    }
    var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
    config.toolTipPadding;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle('#ffffff');
    context.fillText(item.text, startX, startY + config.fontSize);
    context.closePath();
    context.stroke();
  });
}

function drawYAxisTitle(title, opts, config, context) {
  var startX = config.xAxisHeight + (opts.height - config.xAxisHeight - measureText(title)) / 2;
  context.save();
  context.beginPath();
  context.setFontSize(config.fontSize);
  context.setFillStyle(opts.yAxis.titleFontColor || '#333333');
  context.translate(0, opts.height);
  context.rotate(-90 * Math.PI / 180);
  context.fillText(title, startX, config.padding + 0.5 * config.fontSize);
  context.closePath();
  context.stroke();
  context.restore();
}

function drawColumnDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var columnOption = opts.extra.column || {
    type: {},
    meter: {} };

  columnOption.type = columnOption.type == undefined ? 'group' : columnOption.type;
  columnOption.meter = columnOption.meter || {};
  columnOption.meter.border = columnOption.meter.border == undefined ? 4 : columnOption.meter.border;
  columnOption.meter.fillColor = columnOption.meter.fillColor == undefined ? '#FFFFFF' : columnOption.meter.fillColor;
  var _calYAxisData = calYAxisData(series, opts, config),
  ranges = _calYAxisData.ranges;

  var _getXAxisPoints = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints.xAxisPoints,
  eachSpacing = _getXAxisPoints.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitArea(opts.tooltip.offset.x, opts, config, context, eachSpacing);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config,
        seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
        points.forEach(function (item, index) {
          if (item !== null) {
            context.beginPath();
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2 + 1;
            var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
            context.moveTo(startX, item.y);
            context.fillRect(startX, item.y, item.width - 2, height);
            context.closePath();
            context.fill();
          }
        });
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex,
        series, process);
        calPoints.push(points);
        points = fixColumeStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);

        points.forEach(function (item, index) {
          if (item !== null) {
            context.beginPath();
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2 + 1;
            var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
            var height0 = opts.height - item.y0 - config.padding - config.xAxisHeight - config.legendHeight;
            if (seriesIndex > 0) {
              height -= height0;
            }
            context.moveTo(startX, item.y);
            context.fillRect(startX, item.y, item.width - 2, height);
            context.closePath();
            context.fill();
          }
        });
        break;
      case 'meter':
        // 绘制温度计数据图
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        calPoints.push(points);
        points = fixColumeMeterData(points, eachSpacing, series.length, seriesIndex, config, opts, columnOption.meter.border);
        if (seriesIndex == 0) {
          points.forEach(function (item, index) {
            if (item !== null) {
              //画背景颜色
              context.beginPath();
              context.setFillStyle(columnOption.meter.fillColor);
              var startX = item.x - item.width / 2 + 1;
              var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
              context.moveTo(startX, item.y);
              context.fillRect(startX, item.y, item.width - 2, height);
              context.closePath();
              context.fill();
              //画边框线
              context.beginPath();
              context.setStrokeStyle(eachSeries.color);
              context.setLineWidth(columnOption.meter.border * opts.pixelRatio);
              context.moveTo(startX + columnOption.meter.border * 0.5, item.y + height);
              context.lineTo(startX + columnOption.meter.border * 0.5, item.y + columnOption.meter.border * 0.5);
              context.lineTo(startX + item.width - columnOption.meter.border, item.y + columnOption.meter.border * 0.5);
              context.lineTo(startX + item.width - columnOption.meter.border, item.y + height);
              context.stroke();
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (item !== null) {
              context.beginPath();
              context.setFillStyle(item.color || eachSeries.color);
              var startX = item.x - item.width / 2 + 1;
              var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
              context.moveTo(startX, item.y);
              context.rect(startX, item.y, item.width - 2, height);
              context.closePath();
              context.fill();
            }
          });
        }
        break;}

  });
  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'stack':
          var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex,
          series, process);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'meter':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          drawPointText(points, eachSeries, config, context);
          break;}

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawCandleDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var candleOption = opts.extra.candle || {
    color: {},
    average: {} };

  candleOption.color.upLine = candleOption.color.upLine ? candleOption.color.upLine : '#f04864';
  candleOption.color.upFill = candleOption.color.upFill ? candleOption.color.upFill : '#f04864';
  candleOption.color.downLine = candleOption.color.downLine ? candleOption.color.downLine : '#2fc25b';
  candleOption.color.downFill = candleOption.color.downFill ? candleOption.color.downFill : '#2fc25b';
  candleOption.average.show = candleOption.average.show === true ? true : false;
  candleOption.average.name = candleOption.average.name ? candleOption.average.name : [];
  candleOption.average.day = candleOption.average.day ? candleOption.average.day : [];
  candleOption.average.color = candleOption.average.color ? candleOption.average.color : ['#1890ff', '#2fc25b',
  '#facc14', '#f04864', '#8543e0', '#90ed7d'];

  opts.extra.candle = candleOption;

  var _calYAxisData5 = calYAxisData(series, opts, config),
  ranges = _calYAxisData5.ranges;

  var _getXAxisPoints5 = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints5.xAxisPoints,
  eachSpacing = _getXAxisPoints5.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);
    splitPointList = splitPointList[0];

    splitPointList.forEach(function (points, index) {
      context.beginPath();
      //如果上涨
      if (data[index][1] - data[index][0] > 0) {
        context.setStrokeStyle(candleOption.color.upLine);
        context.setFillStyle(candleOption.color.upFill);
        context.setLineWidth(1 * opts.pixelRatio);
        context.moveTo(points[3].x, points[3].y); //顶点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[1].x - eachSpacing / 4, points[1].y); //收盘左侧点
        context.lineTo(points[0].x - eachSpacing / 4, points[0].y); //开盘左侧点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[2].x, points[2].y); //底点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[0].x + eachSpacing / 4, points[0].y); //开盘右侧点
        context.lineTo(points[1].x + eachSpacing / 4, points[1].y); //收盘右侧点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.moveTo(points[3].x, points[3].y); //顶点
      } else {
        context.setStrokeStyle(candleOption.color.downLine);
        context.setFillStyle(candleOption.color.downFill);
        context.setLineWidth(1 * opts.pixelRatio);
        context.moveTo(points[3].x, points[3].y); //顶点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[0].x - eachSpacing / 4, points[0].y); //开盘左侧点
        context.lineTo(points[1].x - eachSpacing / 4, points[1].y); //收盘左侧点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[2].x, points[2].y); //底点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[1].x + eachSpacing / 4, points[1].y); //收盘右侧点
        context.lineTo(points[0].x + eachSpacing / 4, points[0].y); //开盘右侧点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.moveTo(points[3].x, points[3].y); //顶点
      }
      context.closePath();
      context.fill();
      context.stroke();
    });
  });

  context.restore();

  //画均线
  if (candleOption.average.show) {

  }

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawAreaDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var _calYAxisData2 = calYAxisData(series, opts, config),
  ranges = _calYAxisData2.ranges;

  var _getXAxisPoints2 = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints2.xAxisPoints,
  eachSpacing = _getXAxisPoints2.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }


  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    var splitPointList = splitPoints(points);

    splitPointList.forEach(function (points) {
      // 绘制区域数据
      context.beginPath();
      context.setStrokeStyle(eachSeries.color);
      context.setFillStyle(eachSeries.color);
      context.setGlobalAlpha(0.2);
      context.setLineWidth(2 * opts.pixelRatio);
      if (points.length > 1) {
        var firstPoint = points[0];
        var lastPoint = points[points.length - 1];

        context.moveTo(firstPoint.x, firstPoint.y);
        if (opts.extra.lineStyle === 'curve') {
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.
              y);
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (index > 0) {
              context.lineTo(item.x, item.y);
            }
          });
        }

        context.lineTo(lastPoint.x, endY);
        context.lineTo(firstPoint.x, endY);
        context.lineTo(firstPoint.x, firstPoint.y);
      } else {
        var item = points[0];
        context.moveTo(item.x - eachSpacing / 2, item.y);
        context.lineTo(item.x + eachSpacing / 2, item.y);
        context.lineTo(item.x + eachSpacing / 2, endY);
        context.lineTo(item.x - eachSpacing / 2, endY);
        context.moveTo(item.x - eachSpacing / 2, item.y);
      }
      context.closePath();
      context.fill();
      context.setGlobalAlpha(1);


      //画连线
      context.beginPath();
      context.setStrokeStyle(eachSeries.color);
      context.setLineWidth(2 * opts.pixelRatio);
      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        if (opts.extra.lineStyle === 'curve') {
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.
              y);
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (index > 0) {
              context.lineTo(item.x, item.y);
            }
          });
        }
        context.moveTo(points[0].x, points[0].y);
      }
      context.closePath();
      context.stroke();
    });

    //画点
    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }

  });
  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawLineDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var _calYAxisData3 = calYAxisData(series, opts, config),
  ranges = _calYAxisData3.ranges;

  var _getXAxisPoints3 = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints3.xAxisPoints,
  eachSpacing = _getXAxisPoints3.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    splitPointList.forEach(function (points, index) {
      context.beginPath();
      context.setStrokeStyle(eachSeries.color);
      context.setLineWidth(2 * opts.pixelRatio);
      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        if (opts.extra.lineStyle === 'curve') {
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.
              y);
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (index > 0) {
              context.lineTo(item.x, item.y);
            }
          });
        }
        context.moveTo(points[0].x, points[0].y);
      }
      context.closePath();
      context.stroke();
    });

    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawMixDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var _calYAxisData6 = calYAxisData(series, opts, config),
  ranges = _calYAxisData6.ranges;

  var _getXAxisPoints6 = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints6.xAxisPoints,
  eachSpacing = _getXAxisPoints6.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;
  var calPoints = [];

  var columnIndex = 0;
  var columnLength = 0;
  series.forEach(function (eachSeries, seriesIndex) {
    if (eachSeries.type == 'column') {
      columnLength += 1;
    }
  });
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    // 绘制柱状数据图
    if (eachSeries.type == 'column') {
      points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
      points.forEach(function (item, index) {
        if (item !== null) {
          context.beginPath();
          context.setFillStyle(item.color || eachSeries.color);
          var startX = item.x - item.width / 2 + 1;
          var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
          context.moveTo(startX, item.y);
          context.rect(startX, item.y, item.width - 2, height);
          context.closePath();
          context.fill();
        }
      });
      columnIndex += 1;
    }

    //绘制区域图数据

    if (eachSeries.type == 'area') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points) {
        // 绘制区域数据
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setFillStyle(eachSeries.color);
        context.setGlobalAlpha(0.2);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length > 1) {
          var firstPoint = points[0];
          var lastPoint = points[points.length - 1];
          context.moveTo(firstPoint.x, firstPoint.y);
          if (eachSeries.style === 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x,
                item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.lineTo(lastPoint.x, endY);
          context.lineTo(firstPoint.x, endY);
          context.lineTo(firstPoint.x, firstPoint.y);
        } else {
          var item = points[0];
          context.moveTo(item.x - eachSpacing / 2, item.y);
          context.lineTo(item.x + eachSpacing / 2, item.y);
          context.lineTo(item.x + eachSpacing / 2, endY);
          context.lineTo(item.x - eachSpacing / 2, endY);
          context.moveTo(item.x - eachSpacing / 2, item.y);
        }
        context.closePath();
        context.fill();
        context.setGlobalAlpha(1);
      });
    }



    // 绘制折线数据图
    if (eachSeries.type == 'line') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          if (eachSeries.style == 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x,
                item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.closePath();
        context.stroke();
      });
    }

    // 绘制点数据图
    if (eachSeries.type == 'point') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        context.closePath();
        context.stroke();
      });
    }

    if (opts.dataPointShape !== false && eachSeries.type !== 'column') {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    var columnIndex = 0;
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      if (eachSeries.type !== 'column') {
        drawPointText(points, eachSeries, config, context);
      } else {
        points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
        drawPointText(points, eachSeries, config, context);
        columnIndex += 1;
      }

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  if (toolTipOption.horizentalLine && opts.tooltip && process === 1 && (opts.type == 'line' || opts.type == 'area' ||
  opts.type == 'column' || opts.type == 'candle' || opts.type == 'mix')) {
    drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTip(opts.tooltip.textList, opts.tooltip.offset, opts, config, context, eachSpacing, xAxisPoints);
  }
  context.restore();

}

function drawXAxis(categories, opts, config, context) {

  var _getXAxisPoints4 = getXAxisPoints(categories, opts, config),
  xAxisPoints = _getXAxisPoints4.xAxisPoints,
  startX = _getXAxisPoints4.startX,
  endX = _getXAxisPoints4.endX,
  eachSpacing = _getXAxisPoints4.eachSpacing;

  var startY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;
  var endY = config.padding;


  //绘制滚动条
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    var scrollY = opts.height - config.padding - config.legendHeight + 4 * opts.pixelRatio;
    var scrollScreenWidth = endX - startX;
    var scrollTotalWidth = eachSpacing * (xAxisPoints.length - 1);
    var scrollWidth = scrollScreenWidth * scrollScreenWidth / scrollTotalWidth;
    var scrollLeft = 0;
    if (opts._scrollDistance_) {
      scrollLeft = -opts._scrollDistance_ * scrollScreenWidth / scrollTotalWidth;
    }
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollBackgroundColor || "#EFEBEF");
    context.moveTo(startX, scrollY);
    context.lineTo(endX, scrollY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollColor || "#A6A6A6");
    context.moveTo(startX + scrollLeft, scrollY);
    context.lineTo(startX + scrollLeft + scrollWidth, scrollY);
    context.stroke();
    context.closePath();
  }

  context.save();

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  context.beginPath();
  context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
  context.setLineCap('butt');
  context.setLineWidth(1 * opts.pixelRatio);
  if (opts.xAxis.gridType == 'dash') {
    context.setLineDash([opts.xAxis.dashLength, opts.xAxis.dashLength]);
  }
  if (opts.xAxis.disableGrid !== true) {
    if (opts.xAxis.type === 'calibration') {
      xAxisPoints.forEach(function (item, index) {
        if (index > 0) {
          context.moveTo(item - eachSpacing / 2, startY);
          context.lineTo(item - eachSpacing / 2, startY + 4 * opts.pixelRatio);
        }
      });
    } else {
      xAxisPoints.forEach(function (item, index) {
        context.moveTo(item, startY);
        context.lineTo(item, endY);
      });
    }
  }
  context.closePath();
  context.stroke();
  context.setLineDash([]);

  //不绘制X轴
  if (opts.xAxis.disabled !== true) {
    // 对X轴列表做抽稀处理
    var validWidth = opts.width - 2 * config.padding - config.yAxisWidth - config.yAxisTitleWidth;
    var maxXAxisListLength = Math.min(categories.length, Math.ceil(validWidth / config.fontSize / 1.5));
    var ratio = Math.ceil(categories.length / maxXAxisListLength);
    categories = categories.map(function (item, index) {
      return index % ratio !== 0 ? '' : item;
    });

    if (config._xAxisTextAngle_ === 0) {
      categories.forEach(function (item, index) {
        var offset = eachSpacing / 2 - measureText(item) / 2;
        context.beginPath();
        context.setFontSize(config.fontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        context.fillText(item, xAxisPoints[index] + offset, startY + config.fontSize + 5);
        context.closePath();
        context.stroke();
      });

    } else {
      categories.forEach(function (item, index) {
        context.save();
        context.beginPath();
        context.setFontSize(config.fontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        var textWidth = measureText(item);
        var offset = eachSpacing / 2 - textWidth;

        var _calRotateTranslate = calRotateTranslate(xAxisPoints[index] + eachSpacing / 2, startY + config.fontSize / 2 +
        5, opts.height),
        transX = _calRotateTranslate.transX,
        transY = _calRotateTranslate.transY;

        context.rotate(-1 * config._xAxisTextAngle_);
        context.translate(transX, transY);
        context.fillText(item, xAxisPoints[index] + offset, startY + config.fontSize + 5);
        context.closePath();
        context.stroke();
        context.restore();
      });
    }
  }
  context.restore();

}

function drawYAxisGrid(categories, opts, config, context) {
  if (opts.yAxis.disableGrid === true) {
    return;
  }
  var spacingValid = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  var eachSpacing = Math.floor(spacingValid / config.yAxisSplit);
  var yAxisTotalWidth = config.yAxisWidth + config.yAxisTitleWidth;
  var startX = config.padding + yAxisTotalWidth;
  var _getXAxisPoints4 = getXAxisPoints(categories, opts, config),
  xAxisPoints = _getXAxisPoints4.xAxisPoints,
  xAxiseachSpacing = _getXAxisPoints4.eachSpacing;
  var TotalWidth = xAxiseachSpacing * (xAxisPoints.length - 1);
  var endX = startX + TotalWidth;

  var points = [];
  for (var i = 0; i < config.yAxisSplit; i++) {
    points.push(config.padding + eachSpacing * i);
  }
  points.push(config.padding + eachSpacing * config.yAxisSplit + 2);

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.yAxis.gridType == 'dash') {
    context.setLineDash([opts.yAxis.dashLength, opts.yAxis.dashLength]);
  }
  context.beginPath();
  context.setStrokeStyle(opts.yAxis.gridColor || "#cccccc");

  context.setLineWidth(1 * opts.pixelRatio);
  points.forEach(function (item, index) {
    context.moveTo(startX, item);
    context.lineTo(endX, item);
  });
  context.closePath();
  context.stroke();
  context.setLineDash([]);

  context.restore();
}

function drawYAxis(series, opts, config, context) {
  if (opts.yAxis.disabled === true) {
    return;
  }

  var _calYAxisData4 = calYAxisData(series, opts, config),
  rangesFormat = _calYAxisData4.rangesFormat;

  var yAxisTotalWidth = config.yAxisWidth + config.yAxisTitleWidth;

  var spacingValid = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  var eachSpacing = Math.floor(spacingValid / config.yAxisSplit);
  var startX = config.padding + yAxisTotalWidth;
  var endX = opts.width - config.padding;
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;

  // set YAxis background
  context.beginPath();
  context.setFillStyle(opts.background || '#ffffff');
  if (opts._scrollDistance_ < 0) {
    context.fillRect(0, 0, startX, endY + config.xAxisHeight);
  }
  context.fillRect(endX, 0, opts.width, endY + config.xAxisHeight);
  context.closePath();
  context.stroke();

  var points = [];
  for (var i = 0; i <= config.yAxisSplit; i++) {
    points.push(config.padding + eachSpacing * i);
  }


  rangesFormat.forEach(function (item, index) {
    var pos = points[index] ? points[index] : endY;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(opts.yAxis.fontColor || '#666666');
    context.fillText(item, config.padding + config.yAxisTitleWidth, pos + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });


  if (opts.yAxis.title) {
    drawYAxisTitle(opts.yAxis.title, opts, config, context);
  }
}

function drawLegend(series, opts, config, context) {
  if (opts.legend === false) {
    return;
  }
  // each legend shape width 15px
  // the spacing between shape and text in each legend is the `padding`
  // each legend spacing is the `padding`
  // legend margin top `config.padding`

  var _calLegendData = calLegendData(series, opts, config),
  legendList = _calLegendData.legendList;

  var padding = 5 * opts.pixelRatio;
  var marginTop = 10 * opts.pixelRatio;
  var shapeWidth = 15 * opts.pixelRatio;
  legendList.forEach(function (itemList, listIndex) {
    var width = 0;
    itemList.forEach(function (item) {
      item.name = item.name || 'undefined';
      width += 3 * padding + measureText(item.name) + shapeWidth;
    });
    var startX = (opts.width - width) / 2 + padding;
    var startY = opts.height - config.padding - config.legendHeight + listIndex * (config.fontSize + marginTop) +
    padding + marginTop;

    context.setFontSize(config.fontSize);
    itemList.forEach(function (item) {
      switch (opts.type) {
        case 'line':
          context.beginPath();
          context.setLineWidth(1 * opts.pixelRatio);
          context.setStrokeStyle(item.color);
          context.setFillStyle(item.color);
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio, 6 * opts.pixelRatio, 0, 2 * Math.PI);
          context.closePath();
          context.fill();
          context.stroke();
          break;
        case 'pie':
          context.beginPath();
          context.setLineWidth(1 * opts.pixelRatio);
          context.setStrokeStyle(item.color);
          context.setFillStyle(item.color);
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio, 6 * opts.pixelRatio, 0, 2 * Math.PI);
          context.closePath();
          context.fill();
          context.stroke();
          break;
        case 'ring':
          context.beginPath();
          context.setLineWidth(1 * opts.pixelRatio);
          context.setStrokeStyle(item.color);
          context.setFillStyle(item.color);
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio, 6 * opts.pixelRatio, 0, 2 * Math.PI);
          context.closePath();
          context.fill();
          context.stroke();
          break;
        //圆弧进度图不显示图例
        case 'gauge':
          break;
        case 'arcbar':
          break;
        default:
          context.beginPath();
          context.setFillStyle(item.color);
          context.moveTo(startX, startY);
          context.fillRect(startX, startY, 15 * opts.pixelRatio, 10 * opts.pixelRatio);
          context.closePath();
          context.fill();
          context.stroke();}

      startX += padding + shapeWidth;
      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(opts.extra.legendTextColor || '#333333');
      context.fillText(item.name, startX, startY + 6 * opts.pixelRatio + 3 * opts.pixelRatio);
      context.closePath();
      context.stroke();
      startX += measureText(item.name) + 2 * padding;
    });
  });
}

function drawPieDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var pieOption = opts.extra.pie || {};
  series = getPieDataPoints(series, process);
  var centerPosition = {
    x: opts.width / 2,
    y: (opts.height - config.legendHeight) / 2 };

  var radius = Math.min(centerPosition.x - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_,
  centerPosition.y - config.pieChartLinePadding - config.pieChartTextPadding);
  if (opts.dataLabel) {
    radius -= 10;
  } else {
    radius -= 2 * config.padding;
  }

  var activeRadius = radius + config.pieChartLinePadding / 2;


  series = series.map(function (eachSeries) {
    eachSeries._start_ += (pieOption.offsetAngle || 0) * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, opts.extra.pie.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, activeRadius, eachSeries._start_, eachSeries._start_ + 2 *
        eachSeries._proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(2 * opts.pixelRatio);
    context.setStrokeStyle('#ffffff');
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, radius, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ *
    Math.PI);
    context.closePath();
    context.fill();
    if (opts.disablePieStroke !== true) {
      context.stroke();
    }
  });

  if (opts.type === 'ring') {
    var innerPieWidth = radius * 0.6;
    if (typeof opts.extra.pie.ringWidth === 'number' && opts.extra.pie.ringWidth > 0) {
      innerPieWidth = Math.max(0, radius - opts.extra.pie.ringWidth);
    }
    context.beginPath();
    context.setFillStyle(opts.background || '#ffffff');
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, innerPieWidth, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

  if (opts.dataLabel !== false && process === 1) {
    // fix https://github.com/xiaolin3303/wx-charts/issues/132
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  if (process === 1 && opts.type === 'ring') {
    drawRingTitle(opts, config, context);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawArcbarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var arcbarOption = opts.extra.arcbar || {};
  arcbarOption.startAngle = arcbarOption.startAngle ? arcbarOption.startAngle : 0.75;
  arcbarOption.endAngle = arcbarOption.endAngle ? arcbarOption.endAngle : 0.25;
  arcbarOption.type = arcbarOption.type ? arcbarOption.type : 'default';

  series = getArcbarDataPoints(series, arcbarOption, process);
  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);

  if (typeof arcbarOption.width === 'number' && arcbarOption.width > 0) {
    arcbarOption.width = arcbarOption.width;
  } else {
    arcbarOption.width = 12 * opts.pixelRatio;
  }
  radius -= config.padding + arcbarOption.width / 2;

  //背景颜色
  context.setLineWidth(arcbarOption.width); // 设置圆环的宽度
  context.setStrokeStyle(arcbarOption.backgroundColor || '#E9E9E9'); // 设置圆环的颜色
  context.setLineCap('round'); // 设置圆环端点的形状
  context.beginPath(); //开始一个新的路径
  if (arcbarOption.type == 'default') {
    context.arc(centerPosition.x, centerPosition.y, radius, arcbarOption.startAngle * Math.PI, arcbarOption.endAngle *
    Math.PI, false);
  } else {
    context.arc(centerPosition.x, centerPosition.y, radius, 0, 2 * Math.PI, false);
  }

  context.stroke(); //对当前路径进行描边


  series.forEach(function (eachSeries) {
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(eachSeries.color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius, arcbarOption.startAngle * Math.PI, eachSeries._proportion_ *
    Math.PI, false);
    context.stroke();

  });
  drawRingTitle(opts, config, context);
  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawGaugeDataPoints(categories, series, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var gaugeOption = opts.extra.gauge || {};
  gaugeOption.startAngle = gaugeOption.startAngle ? gaugeOption.startAngle : 0.75;
  if (gaugeOption.oldAngle == undefined) {
    gaugeOption.oldAngle = gaugeOption.startAngle;
  }
  if (gaugeOption.oldData == undefined) {
    gaugeOption.oldData = 0;
  }
  gaugeOption.endAngle = gaugeOption.endAngle ? gaugeOption.endAngle : 0.25;
  categories = getGaugeAxisPoints(categories, gaugeOption.startAngle, gaugeOption.endAngle);
  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  if (typeof gaugeOption.width === 'number' && gaugeOption.width > 0) {
    gaugeOption.width = gaugeOption.width;
  } else {
    gaugeOption.width = 15 * opts.pixelRatio;
  }
  radius -= config.padding + gaugeOption.width / 2;
  var innerRadius = radius - gaugeOption.width;



  //画背景
  context.setLineWidth(gaugeOption.width);
  context.setLineCap('butt');
  categories.forEach(function (eachCategories) {
    context.beginPath();
    context.setStrokeStyle(eachCategories.color);
    context.arc(centerPosition.x, centerPosition.y, radius, eachCategories._startAngle_ * Math.PI, eachCategories._endAngle_ *
    Math.PI, false);
    context.stroke();
  });
  context.save();

  //画刻度线
  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  gaugeOption.splitLine.fixRadius = gaugeOption.splitLine.fixRadius ? gaugeOption.splitLine.fixRadius : 0;
  gaugeOption.splitLine.splitNumber = gaugeOption.splitLine.splitNumber ? gaugeOption.splitLine.splitNumber : 10;
  gaugeOption.splitLine.width = gaugeOption.splitLine.width ? gaugeOption.splitLine.width : 15 * opts.pixelRatio;
  gaugeOption.splitLine.color = gaugeOption.splitLine.color ? gaugeOption.splitLine.color : '#FFFFFF';
  gaugeOption.splitLine.childNumber = gaugeOption.splitLine.childNumber ? gaugeOption.splitLine.childNumber : 5;
  gaugeOption.splitLine.childWidth = gaugeOption.splitLine.childWidth ? gaugeOption.splitLine.childWidth : 5 * opts.pixelRatio;

  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
  var startX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
  var endX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
  var childendX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.childWidth;

  context.translate(centerPosition.x, centerPosition.y);
  context.rotate((gaugeOption.startAngle - 1) * Math.PI);

  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    context.beginPath();
    context.setStrokeStyle(gaugeOption.splitLine.color);
    context.setLineWidth(2 * opts.pixelRatio);
    context.moveTo(startX, 0);
    context.lineTo(endX, 0);
    context.stroke();
    context.rotate(splitAngle * Math.PI);
  }
  context.restore();

  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  context.rotate((gaugeOption.startAngle - 1) * Math.PI);

  for (var _i = 0; _i < gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1; _i++) {
    context.beginPath();
    context.setStrokeStyle(gaugeOption.splitLine.color);
    context.setLineWidth(1 * opts.pixelRatio);
    context.moveTo(startX, 0);
    context.lineTo(childendX, 0);
    context.stroke();
    context.rotate(childAngle * Math.PI);
  }
  context.restore();

  //画指针
  gaugeOption.pointer.width = gaugeOption.pointer.width ? gaugeOption.pointer.width : 15 * opts.pixelRatio;
  if (gaugeOption.pointer.color == undefined || gaugeOption.pointer.color == 'auto') {
    gaugeOption.pointer.color == 'auto';
  } else {
    gaugeOption.pointer.color == gaugeOption.pointer.color;
  }
  series = getGaugeDataPoints(series, categories, gaugeOption, process);

  series.forEach(function (eachSeries) {
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((eachSeries._proportion_ - 1) * Math.PI);
    context.beginPath();
    context.setFillStyle(eachSeries.color);
    context.moveTo(gaugeOption.pointer.width, 0);
    context.lineTo(0, -gaugeOption.pointer.width / 2);
    context.lineTo(-innerRadius, 0);
    context.lineTo(0, gaugeOption.pointer.width / 2);
    context.lineTo(gaugeOption.pointer.width, 0);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFillStyle('#FFFFFF');
    context.arc(0, 0, gaugeOption.pointer.width / 6, 0, 2 * Math.PI, false);
    context.fill();
    context.restore();
  });

  if (opts.dataLabel !== false) {
    drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context);
  }

  drawRingTitle(opts, config, context);

  if (process === 1 && opts.type === 'gauge') {
    gaugeOption.oldAngle = series[0]._proportion_;
    gaugeOption.oldData = series[0].data;
  }
  return {
    center: centerPosition,
    radius: radius,
    innerRadius: innerRadius,
    categories: categories,
    totalAngle: totalAngle };

}

function drawRadarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var radarOption = opts.extra.radar || {};
  var coordinateAngle = getRadarCoordinateSeries(opts.categories.length);
  var centerPosition = {
    x: opts.width / 2,
    y: (opts.height - config.legendHeight) / 2 };


  var radius = Math.min(centerPosition.x - (getMaxTextListLength(opts.categories) + config.radarLabelTextMargin),
  centerPosition.y - config.radarLabelTextMargin);

  radius -= config.padding;

  // draw grid
  context.beginPath();
  context.setLineWidth(1 * opts.pixelRatio);
  context.setStrokeStyle(radarOption.gridColor || "#cccccc");
  coordinateAngle.forEach(function (angle) {
    var pos = convertCoordinateOrigin(radius * Math.cos(angle), radius * Math.sin(angle), centerPosition);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.lineTo(pos.x, pos.y);
  });
  context.stroke();
  context.closePath();

  // draw split line grid

  var _loop = function _loop(i) {
    var startPos = {};
    context.beginPath();
    context.setLineWidth(1 * opts.pixelRatio);
    context.setStrokeStyle(radarOption.gridColor || "#cccccc");
    coordinateAngle.forEach(function (angle, index) {
      var pos = convertCoordinateOrigin(radius / config.radarGridCount * i * Math.cos(angle), radius / config.radarGridCount *
      i * Math.sin(angle), centerPosition);
      if (index === 0) {
        startPos = pos;
        context.moveTo(pos.x, pos.y);
      } else {
        context.lineTo(pos.x, pos.y);
      }
    });
    context.lineTo(startPos.x, startPos.y);
    context.stroke();
    context.closePath();
  };

  for (var i = 1; i <= config.radarGridCount; i++) {
    _loop(i);
  }

  var radarDataPoints = getRadarDataPoints(coordinateAngle, centerPosition, radius, series, opts, process);

  radarDataPoints.forEach(function (eachSeries, seriesIndex) {
    // 绘制区域数据
    context.beginPath();
    context.setFillStyle(eachSeries.color);
    context.setGlobalAlpha(0.3);
    eachSeries.data.forEach(function (item, index) {
      if (index === 0) {
        context.moveTo(item.position.x, item.position.y);
      } else {
        context.lineTo(item.position.x, item.position.y);
      }
    });
    context.closePath();
    context.fill();
    context.setGlobalAlpha(1);

    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      var points = eachSeries.data.map(function (item) {
        return item.position;
      });
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  // draw label text
  drawRadarLabel(coordinateAngle, radius, centerPosition, opts, config, context);

  return {
    center: centerPosition,
    radius: radius,
    angleList: coordinateAngle };

}

function drawCanvas(opts, context) {
  context.draw();
}

var Timing = {
  easeIn: function easeIn(pos) {
    return Math.pow(pos, 3);
  },

  easeOut: function easeOut(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },

  easeInOut: function easeInOut(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
  },

  linear: function linear(pos) {
    return pos;
  } };


function Animation(opts) {
  this.isStop = false;
  opts.duration = typeof opts.duration === 'undefined' ? 1000 : opts.duration;
  opts.timing = opts.timing || 'linear';

  var delay = 17;

  var createAnimationFrame = function createAnimationFrame() {

    if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame;
    } else if (typeof setTimeout !== 'undefined') {

      return function (step, delay) {
        setTimeout(function () {
          var timeStamp = +new Date();
          step(timeStamp);
        }, delay);
      };
    } else {

      return function (step) {
        step(null);
      };
    }
  };
  var animationFrame = createAnimationFrame();
  var startTimeStamp = null;

  var _step = function step(timestamp) {

    if (timestamp === null || this.isStop === true) {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
      return;
    }
    if (startTimeStamp === null) {
      startTimeStamp = timestamp;
    }
    if (timestamp - startTimeStamp < opts.duration) {
      var process = (timestamp - startTimeStamp) / opts.duration;
      var timingFunction = Timing[opts.timing];
      process = timingFunction(process);

      opts.onProcess && opts.onProcess(process);
      animationFrame(_step, delay);
    } else {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
    }
  };
  _step = _step.bind(this);
  animationFrame(_step, delay);
}

// stop animation immediately
// and tigger onAnimationFinish
Animation.prototype.stop = function () {
  this.isStop = true;
};

function drawCharts(type, opts, config, context) {
  var _this = this;

  var series = opts.series;
  var categories = opts.categories;
  series = fillSeriesColor(series, config);
  series = fillSeriesType(series, opts);

  var _calLegendData = calLegendData(series, opts, config),
  legendHeight = _calLegendData.legendHeight;

  config.legendHeight = legendHeight;

  var _calYAxisData = calYAxisData(series, opts, config),
  yAxisWidth = _calYAxisData.yAxisWidth;

  config.yAxisWidth = yAxisWidth;
  if (categories && categories.length) {
    var _calCategoriesData = calCategoriesData(categories, opts, config),
    xAxisHeight = _calCategoriesData.xAxisHeight,
    angle = _calCategoriesData.angle;

    config.xAxisHeight = xAxisHeight;
    config._xAxisTextAngle_ = angle;
  }
  if (type === 'pie' || type === 'ring') {
    config._pieTextMaxLength_ = opts.dataLabel === false ? 0 : getPieTextMaxLength(series);
  }

  var duration = opts.animation ? 1000 : 0;
  this.animationInstance && this.animationInstance.stop();

  //先清空画布,不然百度和支付宝ToolTip有重影
  context.clearRect(0, 0, opts.width, opts.height);


  switch (type) {
    case 'line':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawLineDataPoints = drawLineDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawLineDataPoints.xAxisPoints,
          calPoints = _drawLineDataPoints.calPoints,
          eachSpacing = _drawLineDataPoints.eachSpacing;

          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);

        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });


      break;
    case 'mix':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawMixDataPoints = drawMixDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawMixDataPoints.xAxisPoints,
          calPoints = _drawMixDataPoints.calPoints,
          eachSpacing = _drawMixDataPoints.eachSpacing;

          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });


      break;
    case 'column':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawColumnDataPoints = drawColumnDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawColumnDataPoints.xAxisPoints,
          calPoints = _drawColumnDataPoints.calPoints,
          eachSpacing = _drawColumnDataPoints.eachSpacing;
          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'area':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawAreaDataPoints = drawAreaDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawAreaDataPoints.xAxisPoints,
          calPoints = _drawAreaDataPoints.calPoints,
          eachSpacing = _drawAreaDataPoints.eachSpacing;

          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);

          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'ring':
    case 'pie':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          _this.chartData.pieData = drawPieDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'radar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          _this.chartData.radarData = drawRadarDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'arcbar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          _this.chartData.arcbarData = drawArcbarDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'gauge':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          _this.chartData.gaugeData = drawGaugeDataPoints(categories, series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'candle':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawCandleDataPoints = drawCandleDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawCandleDataPoints.xAxisPoints,
          calPoints = _drawCandleDataPoints.calPoints,
          eachSpacing = _drawCandleDataPoints.eachSpacing;

          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;}

}

// simple event implement

function Event() {
  this.events = {};
}

Event.prototype.addEventListener = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Event.prototype.trigger = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var type = args[0];
  var params = args.slice(1);
  if (!!this.events[type]) {
    this.events[type].forEach(function (listener) {
      try {
        listener.apply(null, params);
      } catch (e) {
        console.error(e);
      }
    });
  }
};

var Charts = function Charts(opts) {
  opts.fontSize = opts.fontSize ? opts.fontSize * opts.pixelRatio : 13 * opts.pixelRatio;
  opts.title = opts.title || {};
  opts.subtitle = opts.subtitle || {};
  opts.yAxis = opts.yAxis || {};
  opts.yAxis.gridType = opts.yAxis.gridType ? opts.yAxis.gridType : 'solid';
  opts.yAxis.dashLength = opts.yAxis.dashLength ? opts.yAxis.dashLength : 4 * opts.pixelRatio;
  opts.xAxis = opts.xAxis || {};
  opts.xAxis.rotateLabel = opts.xAxis.rotateLabel ? true : false;
  opts.xAxis.type = opts.xAxis.type ? opts.xAxis.type : 'calibration';
  opts.xAxis.gridType = opts.xAxis.gridType ? opts.xAxis.gridType : 'solid';
  opts.xAxis.dashLength = opts.xAxis.dashLength ? opts.xAxis.dashLength : 4 * opts.pixelRatio;
  opts.xAxis.itemCount = opts.xAxis.itemCount ? opts.xAxis.itemCount : 5;
  opts.xAxis.scrollAlign = opts.xAxis.scrollAlign ? opts.xAxis.scrollAlign : 'left';
  opts.extra = opts.extra || {};

  opts.legend = opts.legend === false ? false : true;
  opts.rotate = opts.rotate ? true : false;
  opts.animation = opts.animation === false ? false : true;
  var config$$1 = assign({}, config);
  config$$1.yAxisTitleWidth = opts.yAxis.disabled !== true && opts.yAxis.title ? config$$1.yAxisTitleWidth : 0;
  if (opts.type == 'pie' || opts.type == 'ring') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.pie.lableWidth || config$$1.pieChartLinePadding *
    opts.pixelRatio;
  }
  config$$1.pieChartTextPadding = opts.dataLabel === false ? 0 : config$$1.pieChartTextPadding * opts.pixelRatio;
  config$$1.yAxisSplit = opts.yAxis.splitNumber ? opts.yAxis.splitNumber : config.yAxisSplit;
  //屏幕旋转
  config$$1.rotate = opts.rotate;
  if (opts.rotate) {
    var tempWidth = opts.width;
    var tempHeight = opts.height;
    opts.width = tempHeight;
    opts.height = tempWidth;
  }

  //适配H5高分屏
  config$$1.yAxisWidth = config.yAxisWidth * opts.pixelRatio;
  config$$1.xAxisHeight = config.xAxisHeight * opts.pixelRatio;
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    config$$1.xAxisHeight += 4 * opts.pixelRatio;
  }
  config$$1.xAxisLineHeight = config.xAxisLineHeight * opts.pixelRatio;
  config$$1.legendHeight = config.legendHeight * opts.pixelRatio;
  //config$$1.yAxisTitleWidth=config.yAxisTitleWidth*opts.pixelRatio;
  config$$1.padding = config.padding * opts.pixelRatio;
  config$$1.fontSize = opts.fontSize;
  config$$1.titleFontSize = config.titleFontSize * opts.pixelRatio;
  config$$1.subtitleFontSize = config.subtitleFontSize * opts.pixelRatio;
  config$$1.toolTipPadding = config.toolTipPadding * opts.pixelRatio;
  config$$1.toolTipLineHeight = config.toolTipLineHeight * opts.pixelRatio;
  config$$1.columePadding = config.columePadding * opts.pixelRatio;
  //config$$1.xAxisTextPadding=config.xAxisTextPadding*opts.pixelRatio;

  //向配置中传入当前pixelRatio及字体大小
  config.pixelRatio = opts.pixelRatio;
  config.fontSize = opts.fontSize;
  config.rotate = opts.rotate;

  this.opts = opts;
  this.config = config$$1;
  opts.$this = opts.$this ? opts.$this : this;
  this.context = uni.createCanvasContext(opts.canvasId, opts.$this);
  // store calcuated chart data
  // such as chart point coordinate
  this.chartData = {};
  this.event = new Event();

  this.scrollOption = {
    currentOffset: 0,
    startTouchX: 0,
    distance: 0 };


  //计算右对齐偏移距离
  if (opts.enableScroll && opts.xAxis.scrollAlign == 'right') {
    var _calYAxisData = calYAxisData(opts.series, opts, config$$1),
    yAxisWidth = _calYAxisData.yAxisWidth;
    config$$1.yAxisWidth = yAxisWidth;
    var offsetLeft = 0;
    var _getXAxisPoints0 = getXAxisPoints(opts.categories, opts, config$$1),
    xAxisPoints = _getXAxisPoints0.xAxisPoints,
    startX = _getXAxisPoints0.startX,
    endX = _getXAxisPoints0.endX,
    eachSpacing = _getXAxisPoints0.eachSpacing;
    var totalWidth = eachSpacing * (xAxisPoints.length - 1);
    var screenWidth = endX - startX;
    offsetLeft = screenWidth - totalWidth;
    this.scrollOption = {
      currentOffset: offsetLeft,
      startTouchX: offsetLeft,
      distance: 0 };

    opts._scrollDistance_ = offsetLeft;
  }

  drawCharts.call(this, opts.type, opts, config$$1, this.context);
};

Charts.prototype.updateData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.opts.series = data.series || this.opts.series;
  this.opts.categories = data.categories || this.opts.categories;

  this.opts.title = assign({}, this.opts.title, data.title || {});
  this.opts.subtitle = assign({}, this.opts.subtitle, data.subtitle || {});

  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.zoom = function () {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.opts.xAxis.itemCount;
  if (this.opts.enableScroll !== true) {
    console.log('请启用滚动条后使用！');
    return;
  }
  this.opts.animation = false;
  this.opts.xAxis.itemCount = val.itemCount;
  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.stopAnimation = function () {
  this.animationInstance && this.animationInstance.stop();
};

Charts.prototype.addEventListener = function (type, listener) {
  this.event.addEventListener(type, listener);
};

Charts.prototype.getCurrentDataIndex = function (e) {
  var touches = e.mp.changedTouches[0];
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    if (this.opts.type === 'pie' || this.opts.type === 'ring') {
      return findPieChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.chartData.pieData);
    } else if (this.opts.type === 'radar') {
      return findRadarChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.chartData.radarData, this.opts.categories.length);
    } else {
      return findCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.chartData.xAxisPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
  }
  return -1;
};

Charts.prototype.showToolTip = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = e.mp.changedTouches[0];
  var _touches$ = getTouches(touches, this.opts, e);

  if (this.opts.type === 'line' || this.opts.type === 'area' || this.opts.type === 'mix' || this.opts.type === 'column') {
    var index = this.getCurrentDataIndex(e);
    var currentOffset = this.scrollOption.currentOffset;

    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset,
      animation: false });

    if (index > -1) {

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.chartData.calPoints, index, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'candle') {

    var index = this.getCurrentDataIndex(e);
    var currentOffset = this.scrollOption.currentOffset;

    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset,
      animation: false });

    if (index > -1) {
      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getCandleToolTipData(this.opts.series[0].data, seriesData, this.chartData.calPoints, index,
        this.opts.categories, this.opts.extra.candle, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'pie' || this.opts.type === 'ring') {
    var index = this.getCurrentDataIndex(e);
    var currentOffset = this.scrollOption.currentOffset;

    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset,
      animation: false });

    if (index > -1) {

      var seriesData = this.opts.series[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.name + ': ' + seriesData.data,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };


      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.scrollStart = function (e) {
  var touches = e.mp.changedTouches[0];
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    if (touches.x) {
      this.scrollOption.startTouchX = _touches$.x;
    } else {
      this.scrollOption.startTouchX = _touches$.clientX;
    }
  }
};

Charts.prototype.scroll = function (e) {
  // TODO throtting...
  var touches = e.mp.changedTouches[0];
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    var _distance;
    if (touches.x) {
      _distance = _touches$.x - this.scrollOption.startTouchX;
    } else {
      _distance = _touches$.clientX - this.scrollOption.startTouchX;
    }
    var currentOffset = this.scrollOption.currentOffset;

    var validDistance = calValidDistance(currentOffset + _distance, this.chartData, this.config, this.opts);

    this.scrollOption.distance = _distance = validDistance - currentOffset;
    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset + _distance,
      animation: false });

    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.scrollEnd = function (e) {
  if (this.opts.enableScroll === true) {
    var _scrollOption = this.scrollOption,
    currentOffset = _scrollOption.currentOffset,
    distance = _scrollOption.distance;

    this.scrollOption.currentOffset = currentOffset + distance;
    this.scrollOption.distance = 0;
  }
};

module.exports = Charts;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 14:
/*!**********************************!*\
  !*** E:/项萍/熙美订货/common/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var api = 'https://api.xmvogue.com';
// const api="http://172.21.8.128/XMapi/api";
var now = Date.now || function () {
  return new Date().getTime();
};
var loadsatus = 1;
var isArray = Array.isArray || function (obj) {
  return obj instanceof Array;
};
//post请求
function postRequest(url, params, success, fail) {
  this.post(url, params, success, fail);

}
var userinfo = uni.getStorageSync('userinfo');
//POST请求
function post(url, params, _success, _fail) {
  var that = this;
  var data = uni.getStorageSync('userinfo');
  var lang = uni.getStorageSync('lang');
  // console.log(data)
  var cooking = {
    uid: data.uid,
    hdid: data.hdid,
    sign: data.token,
    oversea: data.oversea };

  // 海外版本语言切换
  if (lang != "") {
    cooking.lang = lang.lang;
  }
  // 购物车
  if (params.src) {
    params.uname = data.username;
  }
  //合并参数
  params = Object.assign(cooking, params);
  uni.request({
    url: api + url,
    method: 'POST',
    header: {
      'Content-type': 'application/x-www-form-urlencoded' },

    data: params,
    success: function success(res) {
      // console.log(res.data)
      if (res.statusCode == 200) {
        if (loadsatus == 2) {
          uni.hideLoading();
        }
        // console.log(res.data)
        _success(res.data); //回调
      } else {
        uni.hideLoading();
        uni.showModal({
          content: "网络异常,请重新加载",
          success: function success(e) {
            if (e.confirm) {
              load("重新加载");
              loadsatus = 2;
              setTimeout(function () {
                post(url, params, _success, _fail);
              }, 1000);
            } else {
              console.log("取消");
            }
          } });

      }
    },
    fail: function fail(res) {
      console.log(res);
      uni.hideLoading();
      uni.showModal({
        content: "网络异常,请重新加载",
        success: function success(e) {
          if (e.confirm) {
            load("重新加载");
            loadsatus = 2;
            setTimeout(function () {
              post(url, params, _success, _fail);
            }, 1000);
          }
        } });

      if (res.errMsg == "request:fail timeout") {
        return false;
      };
      _fail(res); //回调
    },
    complete: function complete() {} });

}



//GET请求
function market(url, params, _success2, _fail2) {
  var that = this;
  var data = uni.getStorageSync('userinfo');
  //获取用户信息
  var cooking = {
    uid: data.uid,

    sign: data.token };

  //合并参数
  params = Object.assign(cooking, params);

  uni.request({
    url: api + url,
    method: 'POST',
    header: {
      'Content-type': 'application/x-www-form-urlencoded' },

    data: params,
    success: function success(res) {
      console.log(res);
      _success2(res); //回调
    },
    fail: function fail(res) {
      console.log(res);
      _fail2(res); //回调
      uni.hideLoading();

    },
    complete: function complete() {} });

}




//测试数据
function ceshi(url, params, _success3, _fail3) {
  var that = this;
  var data = uni.getStorageSync('userinfo');
  var cooking = {
    uid: data.uid,
    hdid: data.hdid,
    sign: data.token,
    oversea: data.oversea };


  if (cooking.oversea == "1") {
    cooking.lang = data.lang;
  };

  if (data == "") {
    if (!params.version) {
      uni.showToast({
        title: '请登录后操作',
        image: "../../static/msg.png",
        duration: 1500 });

      setTimeout(function () {
        uni.navigateTo({
          url: '/pages/login/login' });

      }, 1500);
      return false;
    }

  }
  //合并参数
  params = Object.assign(cooking, params);
  uni.request({
    url: "http://172.21.8.128/api" + url,
    method: 'POST',
    header: {
      'Content-type': 'application/x-www-form-urlencoded' },

    data: params,
    success: function success(res) {
      // console.log(res);
      _success3(res.data); //回调
    },
    fail: function fail(res) {
      console.log(res);
      _fail3(res); //回调
      uni.hideLoading();

    },
    complete: function complete() {} });

}

// 原生js模拟jquery ajax
// function ajax() {
// 	var ajaxData = {
// 		type: arguments[0].type || "GET",
// 		url: arguments[0].url || "",
// 		async: arguments[0].async || "true",
// 		data: arguments[0].data || null,
// 		dataType: arguments[0].dataType || "text",
// 		contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
// 		beforeSend: arguments[0].beforeSend || function() {},
// 		success: arguments[0].success || function() {},
// 		error: arguments[0].error || function() {}
// 	}
// 	ajaxData.beforeSend()
// 	var xhr = createxmlHttpRequest();
// 	xhr.responseType = ajaxData.dataType;
// 	xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);
// 	xhr.setRequestHeader("Content-Type", ajaxData.contentType);
// 	xhr.send(convertData(ajaxData.data));
// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				ajaxData.success(xhr.response)
// 			} else {
// 				ajaxData.error()
// 			}
// 		}
// 	}
// }
// 
// function createxmlHttpRequest() {
// 	if (window.ActiveXObject) {
// 		return new ActiveXObject("Microsoft.XMLHTTP");
// 	} else if (window.XMLHttpRequest) {
// 		return new XMLHttpRequest();
// 	}
// }
// 


function convertData(data) {
  if (typeof data === 'object') {
    var convertResult = "";
    var n = 0;
    for (var c in data) {
      if (typeof data[c] == "string" || typeof data[c] == "number") {
        convertResult += c + "=" + data[c] + "&";
      }
      if (typeof data[c] == 'object') {
        for (var i in data[c]) {
          convertResult += c + "[]=" + data[c][i] + "&";
        }
      }
    }
    console.log(convertResult);
    convertResult = convertResult.substring(0, convertResult.length - 1);
    return convertResult;
  } else {
    return data;
  }
}

function arry(url, params, _success4, _fail4) {
  var that = this;
  var data = uni.getStorageSync('userinfo');
  //获取用户信息
  var cooking = {
    uid: data.uid,
    hdid: data.hdid,
    sign: data.token };

  //合并参数
  params = Object.assign(cooking, params);
  uni.request({
    url: api + url,
    method: 'POST',
    header: {
      'Content-type': 'application/x-www-form-urlencoded' },

    data: convertData(params),
    success: function success(res) {
      // console.log(res);
      _success4(res); //回调
    },
    fail: function fail(res) {
      // console.log(res);
      _fail4(res); //回调

      uni.hideLoading();
    },
    complete: function complete() {} });

};

// 格式化时间
function formatDate(date) {

  var date = new Date(date * 1000); //如果date为13位不需要乘1000
  var Y = date.getFullYear() + '-';
  var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return "".concat(M, "\u6708").concat(D, "\u65E5");

}


// 获取字符串长度
function strlen(str) {
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    //单字节加1 
    if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
}



//发送消息
function send() {
  var data = uni.getStorageSync('userinfo');
  var pages = getCurrentPages();
  var url = pages[0].route.split("/");
  var test = '{"user_id":"' + data.hdid + '","user_name":"' + data.username + '","page":"' + url[2] + '","src":"app"}';
  var msg = {
    class: "Xmorder",
    action: "connect",
    content: test };

  var params = JSON.stringify(msg);
  console.log(params);
  uni.sendSocketMessage({
    data: params,
    success: function success(res) {
      console.log(res);
    },
    fail: function fail(res) {
      console.log(res);
    } });

};


// webscoket
var lockReconnect = false; //避免重复连接
var ws = null; //WebSocket的引用
var wsUrl = "wss://sw.xmvogue.com"; //这个要与后端提供的相同
function createWebSocket() {
  try {
    uni.connectSocket({
      url: wsUrl });

    initEventHandle();
  } catch (e) {
    // reconnect(wsUrl);
  }
}
// 连接失败
function reconnect(url) {
  if (lockReconnect) return;
  lockReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  setTimeout(function () {
    createWebSocket(wsUrl);
    console.log("正在重连，当前时间" + new Date());
    lockReconnect = false;
  }, 5000); //这里设置重连间隔(ms)


}
/*********************初始化开始**********************/
function initEventHandle() {
  // 连接成功建立后响应
  uni.onSocketOpen(function (res) {
    console.log("成功连接到" + wsUrl);
    setTimeout(function () {
      send();
    }, 2000);
    //心跳检测重置
    heartCheck.reset().start();
  });

  // 收到服务器消息后响应
  uni.onSocketMessage(function (res) {
    var list = res.data.split("arg:");
    var data = JSON.parse(list[1]);
    console.log(data);
    //如果获取到消息，心跳检测重置
    //拿到任何消息都说明当前连接是正常的
    // heartCheck.reset().start();
    //Json转换成Object
    // var msg = eval('(' + e.data + ')');
    // if (msg.message == "heartBeat") {
    // 	//忽略心跳的信息，因为只要有消息进来，断线重连就会重置不会触发
    // } else {
    // 	//处理消息的业务逻辑
    // }
  });


  // 连接关闭后响应
  uni.onSocketClose(function (res) {
    console.log('WebSocket 已关闭！');
    reconnect(wsUrl); //重连
  });
  uni.onSocketError(function (res) {
    reconnect(wsUrl); //重连
  });

}
/***************初始化结束***********************/
//心跳检测
var heartCheck = {
  timeout: 15000, //毫秒
  timeoutObj: null,
  serverTimeoutObj: null,
  reset: function reset() {
    clearTimeout(this.timeoutObj);
    clearTimeout(this.serverTimeoutObj);
    return this;
  },
  start: function start() {
    var self = this;
    this.timeoutObj = setTimeout(function () {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      //onmessage拿到返回的心跳就说明连接正常

      uni.sendSocketMessage({
        data: "keep",
        success: function success(res) {
          // console.log(res);
          heartCheck.reset().start();
        },
        fail: function fail(res) {
          console.log(res);
        } });

      self.serverTimeoutObj = setTimeout(function () {//如果超过一定时间还没重置，说明后端主动断开了
        uni.onSocketClose(function (res) {
          console.log('WebSocket 已关闭！');
          reconnect(wsUrl); //重连
        }); //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
      }, self.timeout);
    }, this.timeout);
  } };




// 客户端app更新
function getclient() {
  // console.log("更新")
  plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
    // console.log(wgtinfo.version); //应用版本号
    // 判断当前系统
    var status = "";
    if (plus.os.name.toLowerCase() == "android") {
      status = 1; // 当前系统为安卓
    } else {
      status = 2; // 当前系统为ios
    }
    var params = {
      version: wgtinfo.version,
      type: status };

    post("/index.php/Home/Version/index", params, function (res) {
      console.log(res);
      if (res.id) {
        uni.navigateTo({
          url: '/pages/update/update' });

      }
    });
  });
}


// 服务器端app更新
function getserver() {
  plus.screen.lockOrientation('portrait-primary'); //竖屏正方向锁定
  plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
    console.log(wgtinfo.version); //应用版本号
    var status = "";
    var params = "";
    if (plus.os.name.toLowerCase() == "android") {
      status = 1; // 当前系统为安卓
      params = {
        type: status,
        version: wgtinfo.version,
        link: "https://service.dcloud.net.cn/build/download/8cccfbe0-b8e5-11e9-8095-1f7572572025",
        text: '请求余额接口/增加新品上线商品列表/我的库存增加查询搜索关键字/我的订单增加已确认和未确定订单' };

    } else {
      status = 2; // 当前系统为ios
      params = {
        type: status,
        version: wgtinfo.version,
        link: "https://service.dcloud.net.cn/build/download/8cccfbe0-b8e5-11e9-8095-1f7572572025",
        text: 'ios更新了' };

    }
    post("/index.php/Home/Version/check_version", params, function (res) {

    });
  });
}

// 获取一周前
function weekend() {
  var inputTime = new Date(new Date() - 7 * 24 * 3600 * 100);
  var date = new Date(inputTime);
  var Y = date.getFullYear();
  var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return "".concat(Y, "-").concat(M, "-").concat(D);
}

// 获取一个月前
function month() {
  var date = new Date(); //如果date为13位不需要乘1000
  date.setMonth(date.getMonth() - 1);
  var Y = date.getFullYear();
  var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return "".concat(Y, "-").concat(M, "-").concat(D);
}

// 获取昨天
function yesterday() {
  var inputTime = new Date(new Date() - 1000 * 60 * 60 * 24);
  var date = new Date(inputTime);
  var Y = date.getFullYear();
  var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return "".concat(Y, "-").concat(M, "-").concat(D);
}
// 获取今天
function newdata() {
  var date = new Date();
  var Y = date.getFullYear();
  var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return "".concat(Y, "-").concat(M, "-").concat(D);
}
// 修改页面标题

function pageTitle(name) {
  uni.setNavigationBarTitle({
    title: name });

}
// 加载
function load(data) {
  uni.showLoading({
    title: data });

}


function formatDateTime(timestamp) {
  var date = new Date(timestamp * 1000);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate();
  d = d < 10 ? '0' + d : d;
  var h = date.getHours();
  h = h < 10 ? '0' + h : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  return y + '/' + m + '/' + d + ' ' + h + ':' + minute + ':' + second;
};var _default =
{
  api: api,
  now: now,
  isArray: isArray,
  postRequest: postRequest,
  post: post,
  market: market,
  ceshi: ceshi,
  arry: arry,
  formatDate: formatDate,
  strlen: strlen,
  send: send,
  createWebSocket: createWebSocket,
  getclient: getclient,
  getserver: getserver,
  weekend: weekend,
  month: month,
  yesterday: yesterday,
  newdata: newdata,
  pageTitle: pageTitle,
  load: load,
  userinfo: userinfo,
  formatDateTime: formatDateTime };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 148:
/*!******************************************!*\
  !*** E:/项萍/熙美订货/common/classify.data.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = [
{
  "name": "女装",
  "foods": [
  {
    "name": "A字裙",
    "key": "A字裙",
    "icon": "http://img.kiwifruits.cn/classify/1/1.jpg",
    "cat": 10 },

  {
    "name": "T恤",
    "key": "T恤",
    "icon": "http://img.kiwifruits.cn/classify/1/2.jpg",
    "cat": 10 },

  {
    "name": "半身裙",
    "key": "半身裙",
    "icon": "http://img.kiwifruits.cn/classify/1/3.jpg",
    "cat": 10 },

  {
    "name": "衬衫",
    "key": "衬衫",
    "icon": "http://img.kiwifruits.cn/classify/1/4.jpg",
    "cat": 10 },

  {
    "name": "短裙",
    "key": "短裙",
    "icon": "http://img.kiwifruits.cn/classify/1/5.jpg",
    "cat": 10 },

  {
    "name": "阔腿裤",
    "key": "阔腿裤",
    "icon": "http://img.kiwifruits.cn/classify/1/6.jpg",
    "cat": 10 },

  {
    "name": "连衣裙",
    "key": "连衣裙",
    "icon": "http://img.kiwifruits.cn/classify/1/7.jpg",
    "cat": 10 },

  {
    "name": "妈妈装",
    "key": "妈妈装",
    "icon": "http://img.kiwifruits.cn/classify/1/8.jpg",
    "cat": 10 },

  {
    "name": "牛仔裤",
    "key": "牛仔裤",
    "icon": "http://img.kiwifruits.cn/classify/1/9.jpg",
    "cat": 10 },

  {
    "name": "情侣装",
    "key": "情侣装",
    "icon": "http://img.kiwifruits.cn/classify/1/10.jpg",
    "cat": 10 },

  {
    "name": "休闲裤",
    "key": "休闲裤",
    "icon": "http://img.kiwifruits.cn/classify/1/11.jpg",
    "cat": 10 },

  {
    "name": "雪纺衫",
    "key": "雪纺衫",
    "icon": "http://img.kiwifruits.cn/classify/1/12.jpg",
    "cat": 10 },

  {
    "name": "防晒衣",
    "key": "防晒衣",
    "icon": "http://img.kiwifruits.cn/classify/1/13.jpg",
    "cat": 10 },

  {
    "name": "礼服/婚纱",
    "key": "礼服婚纱",
    "icon": "http://img.kiwifruits.cn/classify/1/14.jpg",
    "cat": 10 }] },



{
  "name": "美食",
  "foods": [
  {
    "name": "火锅",
    "key": "火锅",
    "icon": "http://img.kiwifruits.cn/classify/2/1.jpg",
    "cat": 6 },

  {
    "name": "糕点饼干",
    "key": "糕点饼干",
    "icon": "http://img.kiwifruits.cn/classify/2/2.jpg",
    "cat": 6 },

  {
    "name": "坚果果干",
    "key": "坚果果干",
    "icon": "http://img.kiwifruits.cn/classify/2/3.jpg",
    "cat": 6 },

  {
    "name": "酒类",
    "key": "酒类",
    "icon": "http://img.kiwifruits.cn/classify/2/4.jpg",
    "cat": 6 },

  {
    "name": "辣条",
    "key": "辣条",
    "icon": "http://img.kiwifruits.cn/classify/2/5.jpg",
    "cat": 6 },

  {
    "name": "大礼包",
    "key": "大礼包",
    "icon": "http://img.kiwifruits.cn/classify/2/6.jpg",
    "cat": 6 },

  {
    "name": "精品茗茶",
    "key": "茶",
    "icon": "http://img.kiwifruits.cn/classify/2/7.jpg",
    "cat": 6 },

  {
    "name": "休闲食品",
    "key": "休闲食品",
    "icon": "http://img.kiwifruits.cn/classify/2/8.jpg",
    "cat": 6 },

  {
    "name": "糖果巧克力",
    "key": "糖果巧克力",
    "icon": "http://img.kiwifruits.cn/classify/2/9.jpg",
    "cat": 6 },

  {
    "name": "方便速食",
    "key": "方便速食",
    "icon": "http://img.kiwifruits.cn/classify/2/10.jpg",
    "cat": 6 },

  {
    "name": "营养代餐",
    "key": "营养代餐",
    "icon": "http://img.kiwifruits.cn/classify/2/11.jpg",
    "cat": 6 },

  {
    "name": "粮油副食",
    "key": "粮油",
    "icon": "http://img.kiwifruits.cn/classify/2/12.jpg",
    "cat": 6 },

  {
    "name": "生鲜水果",
    "key": "水果",
    "icon": "http://img.kiwifruits.cn/classify/2/13.jpg",
    "cat": 6 },

  {
    "name": "饮品",
    "key": "饮品",
    "icon": "http://img.kiwifruits.cn/classify/2/14.jpg",
    "cat": 6 }] },



{
  "name": "美妆",
  "foods": [
  {
    "name": "化妆刷",
    "key": "化妆刷",
    "icon": "http://img.kiwifruits.cn/classify/3/1.jpg",
    "cat": 3 },

  {
    "name": "粉底",
    "key": "粉底",
    "icon": "http://img.kiwifruits.cn/classify/3/2.jpg",
    "cat": 3 },

  {
    "name": "洗发护发",
    "key": "洗发护发",
    "icon": "http://img.kiwifruits.cn/classify/3/3.jpg",
    "cat": 3 },

  {
    "name": "美容工具",
    "key": "美容工具",
    "icon": "http://img.kiwifruits.cn/classify/3/4.jpg",
    "cat": 3 },

  {
    "name": "眼部护理",
    "key": "眼部护理",
    "icon": "http://img.kiwifruits.cn/classify/3/5.jpg",
    "cat": 3 },

  {
    "name": "眉妆",
    "key": "眉妆",
    "icon": "http://img.kiwifruits.cn/classify/3/6.jpg",
    "cat": 3 },

  {
    "name": "卸妆品",
    "key": "卸妆品",
    "icon": "http://img.kiwifruits.cn/classify/3/7.jpg",
    "cat": 3 },

  {
    "name": "基础护肤",
    "key": "基础护肤",
    "icon": "http://img.kiwifruits.cn/classify/3/8.jpg",
    "cat": 3 },

  {
    "name": "眼妆",
    "key": "眼妆",
    "icon": "http://img.kiwifruits.cn/classify/3/9.jpg",
    "cat": 3 },

  {
    "name": "唇妆",
    "key": "唇妆",
    "icon": "http://img.kiwifruits.cn/classify/3/10.jpg",
    "cat": 3 },

  {
    "name": "面膜",
    "key": "面膜",
    "icon": "http://img.kiwifruits.cn/classify/3/11.jpg",
    "cat": 3 },

  {
    "name": "沐浴用品",
    "key": "沐浴用品",
    "icon": "http://img.kiwifruits.cn/classify/3/12.jpg",
    "cat": 3 },

  {
    "name": "护肤套装",
    "key": "护肤套装",
    "icon": "http://img.kiwifruits.cn/classify/3/13.jpg",
    "cat": 3 },

  {
    "name": "防晒品",
    "key": "防晒品",
    "icon": "http://img.kiwifruits.cn/classify/3/14.jpg",
    "cat": 3 },

  {
    "name": "美甲",
    "key": "美甲",
    "icon": "http://img.kiwifruits.cn/classify/3/15.jpg",
    "cat": 3 }] },




{
  "name": "居家日用",
  "foods": [
  {
    "name": "垃圾袋",
    "key": "垃圾袋",
    "icon": "http://img.kiwifruits.cn/classify/4/1.jpg",
    "cat": 4 },

  {
    "name": "纸巾",
    "key": "纸巾",
    "icon": "http://img.kiwifruits.cn/classify/4/2.jpg",
    "cat": 4 },

  {
    "name": "驱蚊用品",
    "key": "驱蚊用品",
    "icon": "http://img.kiwifruits.cn/classify/4/3.jpg",
    "cat": 4 },

  {
    "name": "收纳神器",
    "key": "收纳神器",
    "icon": "http://img.kiwifruits.cn/classify/4/4.jpg",
    "cat": 4 },

  {
    "name": "厨房用品",
    "key": "厨房用品",
    "icon": "http://img.kiwifruits.cn/classify/4/5.jpg",
    "cat": 4 },

  {
    "name": "厨房烹饪",
    "key": "烹饪",
    "icon": "http://img.kiwifruits.cn/classify/4/6.jpg",
    "cat": 4 },

  {
    "name": "衣物晾晒",
    "key": "衣物晾晒",
    "icon": "http://img.kiwifruits.cn/classify/4/7.jpg",
    "cat": 4 },

  {
    "name": "衣物护理",
    "key": "衣物护理",
    "icon": "http://img.kiwifruits.cn/classify/4/8.jpg",
    "cat": 4 },

  {
    "name": "宠物用品",
    "key": "宠物用品",
    "icon": "http://img.kiwifruits.cn/classify/4/9.jpg",
    "cat": 4 },

  {
    "name": "医药保健",
    "key": "医药",
    "icon": "http://img.kiwifruits.cn/classify/4/10.jpg",
    "cat": 4 },

  {
    "name": "日用百货",
    "key": "百货",
    "icon": "http://img.kiwifruits.cn/classify/4/11.jpg",
    "cat": 4 },

  {
    "name": "清洁用品",
    "key": "清洁",
    "icon": "http://img.kiwifruits.cn/classify/4/12.jpg",
    "cat": 4 },

  {
    "name": "绿植园艺",
    "key": "绿植",
    "icon": "http://img.kiwifruits.cn/classify/4/13.jpg",
    "cat": 4 }] },



{
  "name": "男装",
  "foods": [
  {
    "name": "爸爸装",
    "key": "爸爸装",
    "icon": "http://img.kiwifruits.cn/classify/5/1.jpg",
    "cat": 12 },

  {
    "name": "牛仔裤",
    "key": "牛仔裤",
    "icon": "http://img.kiwifruits.cn/classify/5/2.jpg",
    "cat": 12 },

  {
    "name": "衬衫",
    "key": "衬衫",
    "icon": "http://img.kiwifruits.cn/classify/5/3.jpg",
    "cat": 12 },

  {
    "name": "休闲裤",
    "key": "休闲裤",
    "icon": "http://img.kiwifruits.cn/classify/5/4.jpg",
    "cat": 12 },

  {
    "name": "外套",
    "key": "外套",
    "icon": "http://img.kiwifruits.cn/classify/5/5.jpg",
    "cat": 12 },

  {
    "name": "T恤",
    "key": "T恤",
    "icon": "http://img.kiwifruits.cn/classify/5/6.jpg",
    "cat": 12 },

  {
    "name": "套装",
    "key": "套装",
    "icon": "http://img.kiwifruits.cn/classify/5/7.jpg",
    "cat": 12 },

  {
    "name": "运动裤",
    "key": "运动裤",
    "icon": "http://img.kiwifruits.cn/classify/5/8.jpg",
    "cat": 12 },

  {
    "name": "马甲/背心",
    "key": "马甲背心",
    "icon": "http://img.kiwifruits.cn/classify/5/9.jpg",
    "cat": 12 },

  {
    "name": "POLO衫",
    "key": "POLO衫",
    "icon": "http://img.kiwifruits.cn/classify/5/10.jpg",
    "cat": 12 },

  {
    "name": "商务装",
    "key": "商务装",
    "icon": "http://img.kiwifruits.cn/classify/5/11.jpg",
    "cat": 12 }] },



{
  "name": "鞋品",
  "foods": [
  {
    "name": "单鞋",
    "key": "单鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/1.jpg",
    "cat": 5 },

  {
    "name": "皮鞋",
    "key": "皮鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/2.jpg",
    "cat": 5 },

  {
    "name": "帆布鞋",
    "key": "帆布鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/3.jpg",
    "cat": 5 },

  {
    "name": "北京老布鞋",
    "key": "北京老布鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/4.jpg",
    "cat": 5 },

  {
    "name": "运动鞋",
    "key": "运动鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/5.jpg",
    "cat": 5 },

  {
    "name": "拖鞋",
    "key": "拖鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/6.jpg",
    "cat": 5 },

  {
    "name": "凉鞋",
    "key": "凉鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/7.jpg",
    "cat": 5 },

  {
    "name": "休闲鞋",
    "key": "休闲鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/8.jpg",
    "cat": 5 },

  {
    "name": "高跟鞋",
    "key": "高跟鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/9.jpg",
    "cat": 5 },

  {
    "name": "老人鞋",
    "key": "老人鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/10.jpg",
    "cat": 5 },

  {
    "name": "懒人鞋",
    "key": "懒人鞋",
    "icon": "http://img.kiwifruits.cn/classify/6/11.jpg",
    "cat": 5 }] },



{
  "name": "数码家电",
  "foods": [
  {
    "name": "数据线",
    "key": "数据线",
    "icon": "http://img.kiwifruits.cn/classify/7/1.jpg",
    "cat": 8 },

  {
    "name": "耳机",
    "key": "耳机",
    "icon": "http://img.kiwifruits.cn/classify/7/2.jpg",
    "cat": 8 },

  {
    "name": "生活家电",
    "key": "家电",
    "icon": "http://img.kiwifruits.cn/classify/7/3.jpg",
    "cat": 8 },

  {
    "name": "电风扇",
    "key": "电风扇",
    "icon": "http://img.kiwifruits.cn/classify/7/4.jpg",
    "cat": 8 },

  {
    "name": "电吹风",
    "key": "电吹风",
    "icon": "http://img.kiwifruits.cn/classify/7/5.jpg",
    "cat": 8 },

  {
    "name": "手机壳",
    "key": "手机壳",
    "icon": "http://img.kiwifruits.cn/classify/7/6.jpg",
    "cat": 8 },

  {
    "name": "榨汁机",
    "key": "榨汁机",
    "icon": "http://img.kiwifruits.cn/classify/7/7.jpg",
    "cat": 8 },

  {
    "name": "小家电",
    "key": "小家电",
    "icon": "http://img.kiwifruits.cn/classify/7/8.jpg",
    "cat": 8 },

  {
    "name": "数码电子",
    "key": "数码",
    "icon": "http://img.kiwifruits.cn/classify/7/9.jpg",
    "cat": 8 },

  {
    "name": "电饭锅",
    "key": "电饭锅",
    "icon": "http://img.kiwifruits.cn/classify/7/10.jpg",
    "cat": 8 },

  {
    "name": "手机支架",
    "key": "手机支架",
    "icon": "http://img.kiwifruits.cn/classify/7/11.jpg",
    "cat": 8 },

  {
    "name": "剃须刀",
    "key": "剃须刀",
    "icon": "http://img.kiwifruits.cn/classify/7/12.jpg",
    "cat": 8 },

  {
    "name": "充电宝",
    "key": "充电宝",
    "icon": "http://img.kiwifruits.cn/classify/7/13.jpg",
    "cat": 8 },

  {
    "name": "手机配件",
    "key": "手机配件",
    "icon": "http://img.kiwifruits.cn/classify/7/14.jpg",
    "cat": 8 }] },



{
  "name": "母婴",
  "foods": [
  {
    "name": "婴童服饰",
    "key": "衣服",
    "icon": "http://img.kiwifruits.cn/classify/8/1.jpg",
    "cat": 2 },

  {
    "name": "玩具乐器",
    "key": "玩具乐器",
    "icon": "http://img.kiwifruits.cn/classify/8/2.jpg",
    "cat": 2 },

  {
    "name": "尿不湿",
    "key": "尿不湿",
    "icon": "http://img.kiwifruits.cn/classify/8/3.jpg",
    "cat": 2 },

  {
    "name": "安抚牙胶",
    "key": "安抚牙胶",
    "icon": "http://img.kiwifruits.cn/classify/8/4.jpg",
    "cat": 2 },

  {
    "name": "奶瓶奶嘴",
    "key": "奶瓶奶嘴",
    "icon": "http://img.kiwifruits.cn/classify/8/5.jpg",
    "cat": 2 },

  {
    "name": "孕妈用品",
    "key": "孕妈用品",
    "icon": "http://img.kiwifruits.cn/classify/8/6.jpg",
    "cat": 2 },

  {
    "name": "宝宝用品",
    "key": "宝宝用品",
    "icon": "http://img.kiwifruits.cn/classify/8/7.jpg",
    "cat": 2 },

  {
    "name": "婴童湿巾",
    "key": "湿巾",
    "icon": "http://img.kiwifruits.cn/classify/8/8.jpg",
    "cat": 2 },

  {
    "name": "喂养洗护",
    "key": "洗护",
    "icon": "http://img.kiwifruits.cn/classify/8/9.jpg",
    "cat": 2 },

  {
    "name": "婴童鞋靴",
    "key": "童鞋",
    "icon": "http://img.kiwifruits.cn/classify/8/10.jpg",
    "cat": 2 },

  {
    "name": "口水巾",
    "key": "口水巾",
    "icon": "http://img.kiwifruits.cn/classify/8/11.jpg",
    "cat": 2 },

  {
    "name": "营养辅食",
    "key": "营养",
    "icon": "http://img.kiwifruits.cn/classify/8/12.jpg",
    "cat": 2 },

  {
    "name": "婴幼书籍",
    "key": "书籍",
    "icon": "http://img.kiwifruits.cn/classify/8/13.jpg",
    "cat": 2 },

  {
    "name": "婴儿车",
    "key": "婴儿车",
    "icon": "http://img.kiwifruits.cn/classify/8/14.jpg",
    "cat": 2 }] },



{
  "name": "箱包",
  "foods": [
  {
    "name": "单肩包",
    "key": "单肩包",
    "icon": "http://img.kiwifruits.cn/classify/9/1.jpg",
    "cat": 0 },

  {
    "name": "斜挎包",
    "key": "斜挎包",
    "icon": "http://img.kiwifruits.cn/classify/9/2.jpg",
    "cat": 0 },

  {
    "name": "女包",
    "key": "女包",
    "icon": "http://img.kiwifruits.cn/classify/9/3.jpg",
    "cat": 0 },

  {
    "name": "男包",
    "key": "男包",
    "icon": "http://img.kiwifruits.cn/classify/9/4.jpg",
    "cat": 0 },

  {
    "name": "双肩包",
    "key": "双肩包",
    "icon": "http://img.kiwifruits.cn/classify/9/5.jpg",
    "cat": 0 },

  {
    "name": "小方包",
    "key": "小方包",
    "icon": "http://img.kiwifruits.cn/classify/9/6.jpg",
    "cat": 0 },

  {
    "name": "钱包",
    "key": "钱包",
    "icon": "http://img.kiwifruits.cn/classify/9/7.jpg",
    "cat": 0 },

  {
    "name": "旅行箱包",
    "key": "旅行箱包",
    "icon": "http://img.kiwifruits.cn/classify/9/8.jpg",
    "cat": 0 },

  {
    "name": "零钱包",
    "key": "零钱包",
    "icon": "http://img.kiwifruits.cn/classify/9/9.jpg",
    "cat": 0 },

  {
    "name": "手提包",
    "key": "手提包",
    "icon": "http://img.kiwifruits.cn/classify/9/10.jpg",
    "cat": 0 },

  {
    "name": "胸包",
    "key": "胸包",
    "icon": "http://img.kiwifruits.cn/classify/9/11.jpg",
    "cat": 0 }] },



{
  "name": "内衣",
  "foods": [
  {
    "name": "袜子",
    "key": "袜子",
    "icon": "http://img.kiwifruits.cn/classify/10/1.jpg",
    "cat": 11 },

  {
    "name": "吊带背心",
    "key": "吊带背心",
    "icon": "http://img.kiwifruits.cn/classify/10/2.jpg",
    "cat": 11 },

  {
    "name": "抹胸",
    "key": "抹胸",
    "icon": "http://img.kiwifruits.cn/classify/10/3.jpg",
    "cat": 11 },

  {
    "name": "内裤",
    "key": "内裤",
    "icon": "http://img.kiwifruits.cn/classify/10/4.jpg",
    "cat": 11 },

  {
    "name": "文胸",
    "key": "文胸",
    "icon": "http://img.kiwifruits.cn/classify/10/5.jpg",
    "cat": 11 },

  {
    "name": "文胸套装",
    "key": "文胸套装",
    "icon": "http://img.kiwifruits.cn/classify/10/6.jpg",
    "cat": 11 },

  {
    "name": "打底塑身",
    "key": "打底塑身",
    "icon": "http://img.kiwifruits.cn/classify/10/7.jpg",
    "cat": 11 },

  {
    "name": "家居服",
    "key": "家居服",
    "icon": "http://img.kiwifruits.cn/classify/10/8.jpg",
    "cat": 11 },

  {
    "name": "船袜",
    "key": "船袜",
    "icon": "http://img.kiwifruits.cn/classify/10/9.jpg",
    "cat": 11 },

  {
    "name": "情侣睡衣",
    "key": "情侣睡衣",
    "icon": "http://img.kiwifruits.cn/classify/10/10.jpg",
    "cat": 11 },

  {
    "name": "丝袜",
    "key": "丝袜",
    "icon": "http://img.kiwifruits.cn/classify/10/11.jpg",
    "cat": 11 }] },



{
  "name": "文娱车品",
  "foods": [
  {
    "name": "车市车品",
    "key": "车市车品",
    "icon": "http://img.kiwifruits.cn/classify/11/1.jpg",
    "cat": 7 },

  {
    "name": "办公文具",
    "key": "办公文具",
    "icon": "http://img.kiwifruits.cn/classify/11/2.jpg",
    "cat": 7 },

  {
    "name": "考试必备",
    "key": "考试必备",
    "icon": "http://img.kiwifruits.cn/classify/11/3.jpg",
    "cat": 7 },

  {
    "name": "笔记本",
    "key": "笔记本",
    "icon": "http://img.kiwifruits.cn/classify/11/4.jpg",
    "cat": 7 },

  {
    "name": "艺术礼品",
    "key": "礼品",
    "icon": "http://img.kiwifruits.cn/classify/11/5.jpg",
    "cat": 7 },

  {
    "name": "书写工具",
    "key": "书写工具",
    "icon": "http://img.kiwifruits.cn/classify/11/6.jpg",
    "cat": 7 },

  {
    "name": "车载电器",
    "key": "车载电器",
    "icon": "http://img.kiwifruits.cn/classify/11/7.jpg",
    "cat": 7 },

  {
    "name": "图书音像",
    "key": "图书音像",
    "icon": "http://img.kiwifruits.cn/classify/11/8.jpg",
    "cat": 7 },

  {
    "name": "画具画材",
    "key": "画具画材",
    "icon": "http://img.kiwifruits.cn/classify/11/9.jpg",
    "cat": 7 }] },



{
  "name": "配饰",
  "foods": [
  {
    "name": "太阳镜",
    "key": "太阳镜",
    "icon": "http://img.kiwifruits.cn/classify/12/1.jpg",
    "cat": 0 },

  {
    "name": "皮带",
    "key": "皮带",
    "icon": "http://img.kiwifruits.cn/classify/12/2.jpg",
    "cat": 0 },

  {
    "name": "棒球帽",
    "key": "棒球帽",
    "icon": "http://img.kiwifruits.cn/classify/12/3.jpg",
    "cat": 0 },

  {
    "name": "手表",
    "key": "手表",
    "icon": "http://img.kiwifruits.cn/classify/12/4.jpg",
    "cat": 0 },

  {
    "name": "发饰",
    "key": "发饰",
    "icon": "http://img.kiwifruits.cn/classify/12/5.jpg",
    "cat": 0 },

  {
    "name": "项链",
    "key": "项链",
    "icon": "http://img.kiwifruits.cn/classify/12/6.jpg",
    "cat": 0 },

  {
    "name": "手饰",
    "key": "手饰",
    "icon": "http://img.kiwifruits.cn/classify/12/7.jpg",
    "cat": 0 },

  {
    "name": "耳环",
    "key": "耳环",
    "icon": "http://img.kiwifruits.cn/classify/12/8.jpg",
    "cat": 0 },

  {
    "name": "帽子丝巾",
    "key": "帽子丝巾",
    "icon": "http://img.kiwifruits.cn/classify/12/9.jpg",
    "cat": 0 },

  {
    "name": "眼镜墨镜",
    "key": "眼镜墨镜",
    "icon": "http://img.kiwifruits.cn/classify/12/10.jpg",
    "cat": 0 },

  {
    "name": "发带发箍",
    "key": "发带发箍",
    "icon": "http://img.kiwifruits.cn/classify/12/11.jpg",
    "cat": 0 }] },



{
  "name": "家装家纺",
  "foods": [
  {
    "name": "家居饰品",
    "key": "家居饰品",
    "icon": "http://img.kiwifruits.cn/classify/13/1.jpg",
    "cat": 0 },

  {
    "name": "凉席",
    "key": "凉席",
    "icon": "http://img.kiwifruits.cn/classify/13/2.jpg",
    "cat": 0 },

  {
    "name": "背枕靠枕",
    "key": "靠枕",
    "icon": "http://img.kiwifruits.cn/classify/13/3.jpg",
    "cat": 0 },

  {
    "name": "床上用品",
    "key": "床上用品",
    "icon": "http://img.kiwifruits.cn/classify/13/4.jpg",
    "cat": 0 },

  {
    "name": "摆件",
    "key": "摆件",
    "icon": "http://img.kiwifruits.cn/classify/13/5.jpg",
    "cat": 0 },

  {
    "name": "四件套",
    "key": "四件套",
    "icon": "http://img.kiwifruits.cn/classify/13/6.jpg",
    "cat": 0 },

  {
    "name": "装饰品",
    "key": "装饰品",
    "icon": "http://img.kiwifruits.cn/classify/13/7.jpg",
    "cat": 0 },

  {
    "name": "卫浴用品",
    "key": "卫浴",
    "icon": "http://img.kiwifruits.cn/classify/13/8.jpg",
    "cat": 0 },

  {
    "name": "家居家装",
    "key": "家具",
    "icon": "http://img.kiwifruits.cn/classify/13/9.jpg",
    "cat": 0 },

  {
    "name": "蚊帐",
    "key": "蚊帐",
    "icon": "http://img.kiwifruits.cn/classify/13/10.jpg",
    "cat": 0 },

  {
    "name": "墙纸贴纸",
    "key": "墙纸",
    "icon": "http://img.kiwifruits.cn/classify/13/11.jpg",
    "cat": 0 },

  {
    "name": "空调被",
    "key": "空调被",
    "icon": "http://img.kiwifruits.cn/classify/13/12.jpg",
    "cat": 0 }] },



{
  "name": "户外运动",
  "foods": [
  {
    "name": "游泳装备",
    "key": "游泳",
    "icon": "http://img.kiwifruits.cn/classify/14/1.jpg",
    "cat": 0 },

  {
    "name": "泳镜",
    "key": "泳镜",
    "icon": "http://img.kiwifruits.cn/classify/14/2.jpg",
    "cat": 0 },

  {
    "name": "户外装备",
    "key": "户外",
    "icon": "http://img.kiwifruits.cn/classify/14/3.jpg",
    "cat": 0 },

  {
    "name": "健身服饰",
    "key": "健身",
    "icon": "http://img.kiwifruits.cn/classify/14/4.jpg",
    "cat": 0 },

  {
    "name": "泳衣",
    "key": "泳衣",
    "icon": "http://img.kiwifruits.cn/classify/14/5.jpg",
    "cat": 0 },

  {
    "name": "瑜伽垫",
    "key": "瑜伽垫",
    "icon": "http://img.kiwifruits.cn/classify/14/6.jpg",
    "cat": 0 },

  {
    "name": "瑜伽用品",
    "key": "瑜伽",
    "icon": "http://img.kiwifruits.cn/classify/14/7.jpg",
    "cat": 0 },

  {
    "name": "健身装备",
    "key": "健身",
    "icon": "http://img.kiwifruits.cn/classify/14/8.jpg",
    "cat": 0 },

  {
    "name": "球迷用品",
    "key": "球迷",
    "icon": "http://img.kiwifruits.cn/classify/14/9.jpg",
    "cat": 0 }] }];exports.default = _default;

/***/ }),

/***/ 15:
/*!***********************************************!*\
  !*** E:/项萍/熙美订货/common/qqmap-wx-jssdk.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var ERROR_CONF = { KEY_ERR: 311, KEY_ERR_MSG: 'key格式错误', PARAM_ERR: 310, PARAM_ERR_MSG: '请求参数信息有误', SYSTEM_ERR: 600, SYSTEM_ERR_MSG: '系统错误', WX_ERR_CODE: 1000, WX_OK_CODE: 200 };var BASE_URL = 'https://apis.map.qq.com/ws/';var URL_SEARCH = BASE_URL + 'place/v1/search';var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';var URL_CITY_LIST = BASE_URL + 'district/v1/list';var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';var URL_DISTANCE = BASE_URL + 'distance/v1/';var URL_DIRECTION = BASE_URL + 'direction/v1/';var MODE = { driving: 'driving', transit: 'transit' };var EARTH_RADIUS = 6378136.49;var Utils = { safeAdd: function safeAdd(x, y) {var lsw = (x & 0xffff) + (y & 0xffff);var msw = (x >> 16) + (y >> 16) + (lsw >> 16);return msw << 16 | lsw & 0xffff;}, bitRotateLeft: function bitRotateLeft(num, cnt) {return num << cnt | num >>> 32 - cnt;}, md5cmn: function md5cmn(q, a, b, x, s, t) {return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);}, md5ff: function md5ff(a, b, c, d, x, s, t) {return this.md5cmn(b & c | ~b & d, a, b, x, s, t);}, md5gg: function md5gg(a, b, c, d, x, s, t) {return this.md5cmn(b & d | c & ~d, a, b, x, s, t);}, md5hh: function md5hh(a, b, c, d, x, s, t) {return this.md5cmn(b ^ c ^ d, a, b, x, s, t);}, md5ii: function md5ii(a, b, c, d, x, s, t) {return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);}, binlMD5: function binlMD5(x, len) {x[len >> 5] |= 0x80 << len % 32;x[(len + 64 >>> 9 << 4) + 14] = len;var i;var olda;var oldb;var oldc;var oldd;var a = 1732584193;var b = -271733879;var c = -1732584194;var d = 271733878;for (i = 0; i < x.length; i += 16) {olda = a;oldb = b;oldc = c;oldd = d;a = this.md5ff(a, b, c, d, x[i], 7, -680876936);d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);b = this.md5gg(b, c, d, a, x[i], 20, -373897302);a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);d = this.md5hh(d, a, b, c, x[i], 11, -358537222);c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);a = this.md5ii(a, b, c, d, x[i], 6, -198630844);d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);a = this.safeAdd(a, olda);b = this.safeAdd(b, oldb);c = this.safeAdd(c, oldc);d = this.safeAdd(d, oldd);}return [a, b, c, d];}, binl2rstr: function binl2rstr(input) {var i;var output = '';var length32 = input.length * 32;for (i = 0; i < length32; i += 8) {output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);}return output;}, rstr2binl: function rstr2binl(input) {var i;var output = [];output[(input.length >> 2) - 1] = undefined;for (i = 0; i < output.length; i += 1) {output[i] = 0;}var length8 = input.length * 8;for (i = 0; i < length8; i += 8) {output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;}return output;}, rstrMD5: function rstrMD5(s) {return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));}, rstrHMACMD5: function rstrHMACMD5(key, data) {var i;var bkey = this.rstr2binl(key);var ipad = [];var opad = [];var hash;ipad[15] = opad[15] = undefined;if (bkey.length > 16) {bkey = this.binlMD5(bkey, key.length * 8);}for (i = 0; i < 16; i += 1) {ipad[i] = bkey[i] ^ 0x36363636;opad[i] = bkey[i] ^ 0x5c5c5c5c;}hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);return this.binl2rstr(this.binlMD5(opad.concat(hash), 512 + 128));}, rstr2hex: function rstr2hex(input) {var hexTab = '0123456789abcdef';var output = '';var x;var i;for (i = 0; i < input.length; i += 1) {x = input.charCodeAt(i);output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);}return output;}, str2rstrUTF8: function str2rstrUTF8(input) {return unescape(encodeURIComponent(input));}, rawMD5: function rawMD5(s) {return this.rstrMD5(this.str2rstrUTF8(s));}, hexMD5: function hexMD5(s) {return this.rstr2hex(this.rawMD5(s));}, rawHMACMD5: function rawHMACMD5(k, d) {return this.rstrHMACMD5(this.str2rstrUTF8(k), str2rstrUTF8(d));}, hexHMACMD5: function hexHMACMD5(k, d) {return this.rstr2hex(this.rawHMACMD5(k, d));}, md5: function md5(string, key, raw) {if (!key) {if (!raw) {return this.hexMD5(string);}return this.rawMD5(string);}if (!raw) {return this.hexHMACMD5(key, string);}return this.rawHMACMD5(key, string);}, getSig: function getSig(requestParam, sk, feature, mode) {var sig = null;var requestArr = [];Object.keys(requestParam).sort().forEach(function (key) {requestArr.push(key + '=' + requestParam[key]);});if (feature == 'search') {sig = '/ws/place/v1/search?' + requestArr.join('&') + sk;}if (feature == 'suggest') {sig = '/ws/place/v1/suggestion?' + requestArr.join('&') + sk;}if (feature == 'reverseGeocoder') {sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;}if (feature == 'geocoder') {sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;}if (feature == 'getCityList') {sig = '/ws/district/v1/list?' + requestArr.join('&') + sk;}if (feature == 'getDistrictByCityId') {sig = '/ws/district/v1/getchildren?' + requestArr.join('&') + sk;}if (feature == 'calculateDistance') {sig = '/ws/distance/v1/?' + requestArr.join('&') + sk;}if (feature == 'direction') {sig = '/ws/direction/v1/' + mode + '?' + requestArr.join('&') + sk;}sig = this.md5(sig);return sig;}, location2query: function location2query(data) {if (typeof data == 'string') {return data;}var query = '';for (var i = 0; i < data.length; i++) {var d = data[i];if (!!query) {query += ';';}if (d.location) {query = query + d.location.lat + ',' + d.location.lng;}if (d.latitude && d.longitude) {query = query + d.latitude + ',' + d.longitude;}}return query;}, rad: function rad(d) {return d * Math.PI / 180.0;}, getEndLocation: function getEndLocation(location) {var to = location.split(';');var endLocation = [];for (var i = 0; i < to.length; i++) {endLocation.push({ lat: parseFloat(to[i].split(',')[0]), lng: parseFloat(to[i].split(',')[1]) });}return endLocation;}, getDistance: function getDistance(latFrom, lngFrom, latTo, lngTo) {var radLatFrom = this.rad(latFrom);var radLatTo = this.rad(latTo);var a = radLatFrom - radLatTo;var b = this.rad(lngFrom) - this.rad(lngTo);var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));distance = distance * EARTH_RADIUS;distance = Math.round(distance * 10000) / 10000;return parseFloat(distance.toFixed(0));}, getWXLocation: function getWXLocation(success, fail, complete) {wx.getLocation({ type: 'gcj02', success: success, fail: fail, complete: complete });}, getLocationParam: function getLocationParam(location) {if (typeof location == 'string') {var locationArr = location.split(',');if (locationArr.length === 2) {location = { latitude: location.split(',')[0], longitude: location.split(',')[1] };} else {location = {};}}return location;}, polyfillParam: function polyfillParam(param) {param.success = param.success || function () {};param.fail = param.fail || function () {};param.complete = param.complete || function () {};}, checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {if (!param[key]) {var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');param.fail(errconf);param.complete(errconf);return true;}return false;}, checkKeyword: function checkKeyword(param) {return !this.checkParamKeyEmpty(param, 'keyword');}, checkLocation: function checkLocation(param) {var location = this.getLocationParam(param.location);if (!location || !location.latitude || !location.longitude) {var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');param.fail(errconf);param.complete(errconf);return false;}return true;}, buildErrorConfig: function buildErrorConfig(errCode, errMsg) {return { status: errCode, message: errMsg };}, handleData: function handleData(param, data, feature) {if (feature == 'search') {var searchResult = data.data;var searchSimplify = [];for (var i = 0; i < searchResult.length; i++) {searchSimplify.push({ id: searchResult[i].id || null, title: searchResult[i].title || null, latitude: searchResult[i].location && searchResult[i].location.lat || null, longitude: searchResult[i].location && searchResult[i].location.lng || null, address: searchResult[i].address || null, category: searchResult[i].category || null, tel: searchResult[i].tel || null, adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null, city: searchResult[i].ad_info && searchResult[i].ad_info.city || null, district: searchResult[i].ad_info && searchResult[i].ad_info.district || null, province: searchResult[i].ad_info && searchResult[i].ad_info.province || null });}param.success(data, { searchResult: searchResult, searchSimplify: searchSimplify });} else if (feature == 'suggest') {var suggestResult = data.data;var suggestSimplify = [];for (var i = 0; i < suggestResult.length; i++) {suggestSimplify.push({ adcode: suggestResult[i].adcode || null, address: suggestResult[i].address || null, category: suggestResult[i].category || null, city: suggestResult[i].city || null, district: suggestResult[i].district || null, id: suggestResult[i].id || null, latitude: suggestResult[i].location && suggestResult[i].location.lat || null, longitude: suggestResult[i].location && suggestResult[i].location.lng || null, province: suggestResult[i].province || null, title: suggestResult[i].title || null, type: suggestResult[i].type || null });}param.success(data, { suggestResult: suggestResult, suggestSimplify: suggestSimplify });} else if (feature == 'reverseGeocoder') {var reverseGeocoderResult = data.result;var reverseGeocoderSimplify = { address: reverseGeocoderResult.address || null, latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null, longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null, adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null, city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null, district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null, nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null, province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null, street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null, street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null, recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null, rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null };if (reverseGeocoderResult.pois) {var pois = reverseGeocoderResult.pois;var poisSimplify = [];for (var i = 0; i < pois.length; i++) {poisSimplify.push({ id: pois[i].id || null, title: pois[i].title || null, latitude: pois[i].location && pois[i].location.lat || null, longitude: pois[i].location && pois[i].location.lng || null, address: pois[i].address || null, category: pois[i].category || null, adcode: pois[i].ad_info && pois[i].ad_info.adcode || null, city: pois[i].ad_info && pois[i].ad_info.city || null, district: pois[i].ad_info && pois[i].ad_info.district || null, province: pois[i].ad_info && pois[i].ad_info.province || null });}param.success(data, { reverseGeocoderResult: reverseGeocoderResult, reverseGeocoderSimplify: reverseGeocoderSimplify, pois: pois, poisSimplify: poisSimplify });} else {param.success(data, { reverseGeocoderResult: reverseGeocoderResult, reverseGeocoderSimplify: reverseGeocoderSimplify });}} else if (feature == 'geocoder') {var geocoderResult = data.result;var geocoderSimplify = { title: geocoderResult.title || null, latitude: geocoderResult.location && geocoderResult.location.lat || null, longitude: geocoderResult.location && geocoderResult.location.lng || null, adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null, province: geocoderResult.address_components && geocoderResult.address_components.province || null, city: geocoderResult.address_components && geocoderResult.address_components.city || null, district: geocoderResult.address_components && geocoderResult.address_components.district || null, street: geocoderResult.address_components && geocoderResult.address_components.street || null, street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null, level: geocoderResult.level || null };param.success(data, { geocoderResult: geocoderResult, geocoderSimplify: geocoderSimplify });} else if (feature == 'getCityList') {var provinceResult = data.result[0];var cityResult = data.result[1];var districtResult = data.result[2];param.success(data, { provinceResult: provinceResult, cityResult: cityResult, districtResult: districtResult });} else if (feature == 'getDistrictByCityId') {var districtByCity = data.result[0];param.success(data, districtByCity);} else if (feature == 'calculateDistance') {var calculateDistanceResult = data.result.elements;var distance = [];for (var i = 0; i < calculateDistanceResult.length; i++) {distance.push(calculateDistanceResult[i].distance);}param.success(data, { calculateDistanceResult: calculateDistanceResult, distance: distance });} else if (feature == 'direction') {var direction = data.result.routes;param.success(data, direction);} else {param.success(data);}}, buildWxRequestConfig: function buildWxRequestConfig(param, options, feature) {var that = this;options.header = { "content-type": "application/json" };options.method = 'GET';options.success = function (res) {var data = res.data;if (data.status === 0) {that.handleData(param, data, feature);} else {param.fail(data);}};options.fail = function (res) {res.statusCode = ERROR_CONF.WX_ERR_CODE;param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));};options.complete = function (res) {var statusCode = +res.statusCode;switch (statusCode) {case ERROR_CONF.WX_ERR_CODE:{param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));break;}case ERROR_CONF.WX_OK_CODE:{var data = res.data;if (data.status === 0) {param.complete(data);} else {param.complete(that.buildErrorConfig(data.status, data.message));}break;}default:{param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));}}};return options;}, locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {var that = this;locationfail = locationfail || function (res) {res.statusCode = ERROR_CONF.WX_ERR_CODE;param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));};locationcomplete = locationcomplete || function (res) {if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));}};if (!param.location) {that.getWXLocation(locationsuccess, locationfail, locationcomplete);} else if (that.checkLocation(param)) {var location = Utils.getLocationParam(param.location);locationsuccess(location);}} };var QQMapWX = /*#__PURE__*/function () {"use strict";function QQMapWX(options) {_classCallCheck(this, QQMapWX);if (!options.key) {throw Error('key值不能为空');}this.key = options.key;}_createClass(QQMapWX, [{ key: "search", value: function search(options) {var that = this;options = options || {};Utils.polyfillParam(options);if (!Utils.checkKeyword(options)) {return;}var requestParam = { keyword: options.keyword, orderby: options.orderby || '_distance', page_size: options.page_size || 10, page_index: options.page_index || 1, output: 'json', key: that.key };if (options.address_format) {requestParam.address_format = options.address_format;}if (options.filter) {requestParam.filter = options.filter;}var distance = options.distance || "1000";var auto_extend = options.auto_extend || 1;var region = null;var rectangle = null;if (options.region) {region = options.region;}if (options.rectangle) {rectangle = options.rectangle;}var locationsuccess = function locationsuccess(result) {if (region && !rectangle) {requestParam.boundary = "region(" + region + "," + auto_extend + "," + result.latitude + "," + result.longitude + ")";if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');}} else if (rectangle && !region) {requestParam.boundary = "rectangle(" + rectangle + ")";if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');}} else {requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');}}wx.request(Utils.buildWxRequestConfig(options, { url: URL_SEARCH, data: requestParam }, 'search'));};Utils.locationProcess(options, locationsuccess);} }, { key: "getSuggestion", value: function getSuggestion(options) {var that = this;options = options || {};Utils.polyfillParam(options);if (!Utils.checkKeyword(options)) {return;}var requestParam = { keyword: options.keyword, region: options.region || '全国', region_fix: options.region_fix || 0, policy: options.policy || 0, page_size: options.page_size || 10, page_index: options.page_index || 1, get_subpois: options.get_subpois || 0, output: 'json', key: that.key };if (options.address_format) {requestParam.address_format = options.address_format;}if (options.filter) {requestParam.filter = options.filter;}if (options.location) {var locationsuccess = function locationsuccess(result) {requestParam.location = result.latitude + ',' + result.longitude;if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');}wx.request(Utils.buildWxRequestConfig(options, { url: URL_SUGGESTION, data: requestParam }, "suggest"));};Utils.locationProcess(options, locationsuccess);} else {if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');}wx.request(Utils.buildWxRequestConfig(options, { url: URL_SUGGESTION, data: requestParam }, "suggest"));}} }, { key: "reverseGeocoder", value: function reverseGeocoder(options) {var that = this;options = options || {};Utils.polyfillParam(options);var requestParam = { coord_type: options.coord_type || 5, get_poi: options.get_poi || 0, output: 'json', key: that.key };if (options.poi_options) {requestParam.poi_options = options.poi_options;}var locationsuccess = function locationsuccess(result) {requestParam.location = result.latitude + ',' + result.longitude;if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'reverseGeocoder');}wx.request(Utils.buildWxRequestConfig(options, { url: URL_GET_GEOCODER, data: requestParam }, 'reverseGeocoder'));};Utils.locationProcess(options, locationsuccess);} }, { key: "geocoder", value: function geocoder(options) {var that = this;options = options || {};Utils.polyfillParam(options);if (Utils.checkParamKeyEmpty(options, 'address')) {return;}var requestParam = { address: options.address, output: 'json', key: that.key };if (options.region) {requestParam.region = options.region;}if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'geocoder');}wx.request(Utils.buildWxRequestConfig(options, { url: URL_GET_GEOCODER, data: requestParam }, 'geocoder'));} }, { key: "getCityList", value: function getCityList(options) {var that = this;options = options || {};Utils.polyfillParam(options);var requestParam = { output: 'json', key: that.key };if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'getCityList');}wx.request(Utils.buildWxRequestConfig(options, { url: URL_CITY_LIST, data: requestParam }, 'getCityList'));} }, { key: "getDistrictByCityId", value: function getDistrictByCityId(options) {var that = this;options = options || {};Utils.polyfillParam(options);if (Utils.checkParamKeyEmpty(options, 'id')) {return;}var requestParam = { id: options.id || '', output: 'json', key: that.key };if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'getDistrictByCityId');}wx.request(Utils.buildWxRequestConfig(options, { url: URL_AREA_LIST, data: requestParam }, 'getDistrictByCityId'));} }, { key: "calculateDistance", value: function calculateDistance(options) {var that = this;options = options || {};Utils.polyfillParam(options);if (Utils.checkParamKeyEmpty(options, 'to')) {return;}var requestParam = { mode: options.mode || 'walking', to: Utils.location2query(options.to), output: 'json', key: that.key };if (options.from) {options.location = options.from;}if (requestParam.mode == 'straight') {var locationsuccess = function locationsuccess(result) {var locationTo = Utils.getEndLocation(requestParam.to);var data = { message: "query ok", result: { elements: [] }, status: 0 };for (var i = 0; i < locationTo.length; i++) {data.result.elements.push({ distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng), duration: 0, from: { lat: result.latitude, lng: result.longitude }, to: { lat: locationTo[i].lat, lng: locationTo[i].lng } });}var calculateResult = data.result.elements;var distanceResult = [];for (var i = 0; i < calculateResult.length; i++) {distanceResult.push(calculateResult[i].distance);}return options.success(data, { calculateResult: calculateResult, distanceResult: distanceResult });};Utils.locationProcess(options, locationsuccess);} else {var locationsuccess = function locationsuccess(result) {requestParam.from = result.latitude + ',' + result.longitude;if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'calculateDistance');}wx.request(Utils.buildWxRequestConfig(options, { url: URL_DISTANCE, data: requestParam }, 'calculateDistance'));};Utils.locationProcess(options, locationsuccess);}} }, { key: "direction", value: function direction(options) {var that = this;options = options || {};Utils.polyfillParam(options);if (Utils.checkParamKeyEmpty(options, 'to')) {return;}var requestParam = { output: 'json', key: that.key };if (typeof options.to == 'string') {requestParam.to = options.to;} else {requestParam.to = options.to.latitude + ',' + options.to.longitude;}var SET_URL_DIRECTION = null;options.mode = options.mode || MODE.driving;SET_URL_DIRECTION = URL_DIRECTION + options.mode;if (options.from) {options.location = options.from;}if (options.mode == MODE.driving) {if (options.from_poi) {requestParam.from_poi = options.from_poi;}if (options.heading) {requestParam.heading = options.heading;}if (options.speed) {requestParam.speed = options.speed;}if (options.accuracy) {requestParam.accuracy = options.accuracy;}if (options.road_type) {requestParam.road_type = options.road_type;}if (options.to_poi) {requestParam.to_poi = options.to_poi;}if (options.from_track) {requestParam.from_track = options.from_track;}if (options.waypoints) {requestParam.waypoints = options.waypoints;}if (options.policy) {requestParam.policy = options.policy;}if (options.plate_number) {requestParam.plate_number = options.plate_number;}}if (options.mode == MODE.transit) {if (options.departure_time) {requestParam.departure_time = options.departure_time;}if (options.policy) {requestParam.policy = options.policy;}}var locationsuccess = function locationsuccess(result) {requestParam.from = result.latitude + ',' + result.longitude;if (options.sig) {requestParam.sig = Utils.getSig(requestParam, options.sig, 'direction', options.mode);}wx.request(Utils.buildWxRequestConfig(options, { url: SET_URL_DIRECTION, data: requestParam }, 'direction'));};Utils.locationProcess(options, locationsuccess);} }]);return QQMapWX;}();;module.exports = QQMapWX;

/***/ }),

/***/ 18:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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


/***/ }),

/***/ 19:
/*!**************************!*\
  !*** E:/项萍/熙美订货/Json.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* 用户 */
var userInfo = {
  status: 1,
  data: {
    id: 1,
    mobile: 18888888888,
    nickname: 'Leo yo',
    portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg' },

  msg: '提示' };

/* 首页轮播图 */
var carouselList = [{
  src: "/static/temp/banner3.jpg",
  background: "rgb(203, 87, 60)" },

{
  src: "/static/temp/banner2.jpg",
  background: "rgb(205, 215, 218)" },

{
  src: "/static/temp/banner4.jpg",
  background: "rgb(183, 73, 69)" }];


/* 商品列表 */
var goodsList = [{
  image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
  image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
  image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
  title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
  price: 179,
  sales: 61 },

{
  image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",
  image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",
  image3: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",
  title: "潘歌针织连衣裙",
  price: 78,
  sales: 16 },

{
  image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",
  image2: "http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",
  image3: "http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",
  title: "巧谷2019春夏季新品新款女装",
  price: 108.8,
  sales: 5 },
{
  image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg",
  image2: "http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",
  image3: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",
  title: "私萱连衣裙",
  price: 265,
  sales: 88 },
{
  image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
  image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
  image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
  title: "娇诗茹 ulzzang原宿风学生潮韩版春夏短",
  price: 422,
  sales: 137 },
{
  image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
  image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
  image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
  title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
  price: 179,
  sales: 95 }];



/* 购物车 */
var cartList = [{
  id: 1,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg',
  attr_val: '春装款 L',
  stock: 15,
  title: 'OVBE 长袖风衣',
  price: 278.00,
  number: 1 },

{
  id: 3,
  image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
  attr_val: '激光导航 扫拖一体',
  stock: 3,
  title: '科沃斯 Ecovacs 扫地机器人',
  price: 1348.00,
  number: 5 },

{
  id: 4,
  image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
  attr_val: 'XL',
  stock: 55,
  title: '朵绒菲小西装',
  price: 175.88,
  number: 1 },

{
  id: 5,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
  attr_val: '520 #粉红色',
  stock: 15,
  title: '迪奥（Dior）烈艳唇膏',
  price: 1089.00,
  number: 1 },

{
  id: 6,
  image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
  attr_val: '樱花味润手霜 30ml',
  stock: 15,
  title: "欧舒丹（L'OCCITANE）乳木果",
  price: 128,
  number: 1 },

{
  id: 7,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
  attr_val: '特级 12个',
  stock: 7,
  title: '新疆阿克苏苹果 特级',
  price: 58.8,
  number: 10 },

{
  id: 8,
  image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
  attr_val: '激光导航 扫拖一体',
  stock: 15,
  title: '科沃斯 Ecovacs 扫地机器人',
  price: 1348.00,
  number: 1 },

{
  id: 9,
  image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
  attr_val: 'XL',
  stock: 55,
  title: '朵绒菲小西装',
  price: 175.88,
  number: 1 },

{
  id: 10,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
  attr_val: '520 #粉红色',
  stock: 15,
  title: '迪奥（Dior）烈艳唇膏',
  price: 1089.00,
  number: 1 },

{
  id: 11,
  image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
  attr_val: '樱花味润手霜 30ml',
  stock: 15,
  title: "欧舒丹（L'OCCITANE）乳木果",
  price: 128,
  number: 1 },

{
  id: 12,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
  attr_val: '特级 12个',
  stock: 7,
  title: '新疆阿克苏苹果 特级',
  price: 58.8,
  number: 10 },

{
  id: 13,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
  attr_val: '春装款/m',
  stock: 15,
  title: '女装2019春秋新款',
  price: 420.00,
  number: 1 }];


//详情展示页面
var detailData = {
  title: '纯种金毛幼犬活体有血统证书',
  title2: '拆家小能手 你值得拥有',
  favorite: true,
  imgList: [{
    src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg' },

  {
    src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg' },

  {
    src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg' },

  {
    src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg' }],


  episodeList: [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],

  guessList: [{
    src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
    title: '猫眼指甲油',
    title2: '独树一帜的免照灯猫眼指甲' },

  {
    src: 'http://m.china-7.net/uploads/14778449362891.jpg',
    title: '创意屋',
    title2: '创意屋形上下双层高低床' },

  {
    src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg',
    title: 'MissCandy 指甲油',
    title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质' },

  {
    src: 'http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg	',
    title: 'RMK 2017星空海蓝唇釉',
    title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。' }],


  evaList: [{
    src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
    nickname: 'Ranth Allngal',
    time: '09-20 12:54',
    zan: '54',
    content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。' },

  {
    src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
    nickname: 'Ranth Allngal',
    time: '09-20 12:54',
    zan: '54',
    content: '楼上说的好有道理。' }] };



var shareList = [{
  type: 1,
  icon: '/static/temp/share_wechat.png',
  text: '微信好友' },

{
  type: 2,
  icon: '/static/temp/share_moment.png',
  text: '朋友圈' },

{
  type: 3,
  icon: '/static/temp/share_qq.png',
  text: 'QQ好友' },

{
  type: 4,
  icon: '/static/temp/share_qqzone.png',
  text: 'QQ空间' }];


var lazyLoadList = [{
  src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg' },

{
  src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg' },

{
  src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg' },

{
  src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg' },

{
  src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg' },

{
  src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg' },

{
  src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg' },

{
  src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg' },

{
  src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg' },

{
  src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg' },

{
  src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg' },

{
  src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg' },

{
  src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg' },

{
  src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg' },

{
  src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg' },

{
  src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg' },

{
  src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg' },

{
  src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg' },

{
  src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg' },

{
  src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg' }];



var orderList = [{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg' },

  {
    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg' }] },



{
  time: '2019-04-06 11:37',
  state: 9,
  goodsList: [{
    title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
    price: 179.5,
    image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
    number: 1,
    attr: '珊瑚粉 M' }] },


{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2120460599/O1CN01LBPS4C1GINkwsOTXS_!!2120460599.jpg_430x430q90.jpg' },

  {
    image: 'https://img.alicdn.com/imgextra/i2/1069876356/TB2ocTQG4WYBuNjy1zkXXXGGpXa_!!1069876356.jpg_430x430q90.jpg' },

  {
    image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2120460599/O1CN01YsmgwZ1GINkv38rkn_!!2120460599.jpg_430x430q90.jpg' }] },



{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    title: '回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女',
    price: 69,
    image: 'https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg',
    number: 1,
    attr: '白色-高帮 39' }] },


{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3358098495/O1CN01dhYyid2Ccl5MWLDok_!!3358098495.jpg_430x430q90.jpg' },

  {
    image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3358098495/O1CN01AWsnFA2Ccl5OzvqsL_!!3358098495.jpg_430x430q90.jpg' }] },



{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    image: 'https://img.alicdn.com/imgextra/i4/3470687433/O1CN0124mMQOSERr18L1h_!!3470687433.jpg_430x430q90.jpg' },

  {
    image: 'https://img.alicdn.com/imgextra/i3/2888462616/O1CN01ERra5J1VCAbZaKI5n_!!0-item_pic.jpg_430x430q90.jpg' },

  {
    image: 'https://gd3.alicdn.com/imgextra/i3/819381730/O1CN01YV4mXj1OeNhQIhQlh_!!819381730.jpg_400x400.jpg' }] }];





var cateList = [{
  id: 1,
  name: '手机数码' },

{
  id: 2,
  name: '礼品鲜花' },

{
  id: 3,
  name: '男装女装' },

{
  id: 4,
  name: '母婴用品' },

{
  id: 5,
  pid: 1,
  name: '手机通讯' },

{
  id: 6,
  pid: 1,
  name: '运营商' },

{
  id: 8,
  pid: 5,
  name: '全面屏手机',
  picture: '/static/temp/cate2.jpg' },

{
  id: 9,
  pid: 5,
  name: '游戏手机',
  picture: '/static/temp/cate3.jpg' },

{
  id: 10,
  pid: 5,
  name: '老人机',
  picture: '/static/temp/cate1.jpg' },

{
  id: 11,
  pid: 5,
  name: '拍照手机',
  picture: '/static/temp/cate4.jpg' },

{
  id: 12,
  pid: 5,
  name: '女性手机',
  picture: '/static/temp/cate5.jpg' },

{
  id: 14,
  pid: 6,
  name: '合约机',
  picture: '/static/temp/cate1.jpg' },

{
  id: 15,
  pid: 6,
  name: '选好卡',
  picture: '/static/temp/cate4.jpg' },

{
  id: 16,
  pid: 6,
  name: '办套餐',
  picture: '/static/temp/cate5.jpg' },

{
  id: 17,
  pid: 2,
  name: '礼品' },

{
  id: 18,
  pid: 2,
  name: '鲜花' },

{
  id: 19,
  pid: 17,
  name: '公益摆件',
  picture: '/static/temp/cate7.jpg' },

{
  id: 20,
  pid: 17,
  name: '创意礼品',
  picture: '/static/temp/cate8.jpg' },

{
  id: 21,
  pid: 18,
  name: '鲜花',
  picture: '/static/temp/cate9.jpg' },

{
  id: 22,
  pid: 18,
  name: '每周一花',
  picture: '/static/temp/cate10.jpg' },

{
  id: 23,
  pid: 18,
  name: '卡通花束',
  picture: '/static/temp/cate11.jpg' },

{
  id: 24,
  pid: 18,
  name: '永生花',
  picture: '/static/temp/cate12.jpg' },

{
  id: 25,
  pid: 3,
  name: '男装' },

{
  id: 26,
  pid: 3,
  name: '女装' },

{
  id: 27,
  pid: 25,
  name: '男士T恤',
  picture: '/static/temp/cate13.jpg' },

{
  id: 28,
  pid: 25,
  name: '男士外套',
  picture: '/static/temp/cate14.jpg' },

{
  id: 29,
  pid: 26,
  name: '裙装',
  picture: '/static/temp/cate15.jpg' },

{
  id: 30,
  pid: 26,
  name: 'T恤',
  picture: '/static/temp/cate16.jpg' },

{
  id: 31,
  pid: 26,
  name: '上装',
  picture: '/static/temp/cate15.jpg' },

{
  id: 32,
  pid: 26,
  name: '下装',
  picture: '/static/temp/cate16.jpg' },

{
  id: 33,
  pid: 4,
  name: '奶粉' },

{
  id: 34,
  pid: 4,
  name: '营养辅食' },

{
  id: 35,
  pid: 4,
  name: '童装' },

{
  id: 39,
  pid: 4,
  name: '喂养用品' },

{
  id: 36,
  pid: 33,
  name: '有机奶粉',
  picture: '/static/temp/cate17.jpg' },

{
  id: 37,
  pid: 34,
  name: '果泥/果汁',
  picture: '/static/temp/cate18.jpg' },

{
  id: 39,
  pid: 34,
  name: '面条/粥',
  picture: '/static/temp/cate20.jpg' },

{
  id: 42,
  pid: 35,
  name: '婴童衣橱',
  picture: '/static/temp/cate19.jpg' },

{
  id: 43,
  pid: 39,
  name: '吸奶器',
  picture: '/static/temp/cate21.jpg' },

{
  id: 44,
  pid: 39,
  name: '儿童餐具',
  picture: '/static/temp/cate22.jpg' },

{
  id: 45,
  pid: 39,
  name: '牙胶安抚',
  picture: '/static/temp/cate23.jpg' },

{
  id: 46,
  pid: 39,
  name: '围兜',
  picture: '/static/temp/cate24.jpg' }];


var cateData = [{
  "cls_id": "01",
  "cls_name": "家居百货",
  "child": {
    "101": {
      "cls_id": "0101",
      "cls_name": "杯类",
      "img": ["6970893335470", "6941595106170", "6939837616693"],
      "index": "101",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6970893335470.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595106170.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837616693.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false }] },


    "102": {
      "cls_id": "0102",
      "cls_name": "厨房用品",
      "img": ["6939837608438", "6939837616686", "6939837609343"],
      "index": "102",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837608438.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837616686.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837609343.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false }] },


    "103": {
      "cls_id": "0103",
      "cls_name": "居家用品",
      "img": ["6941196008859", "6941196078203", "6941196078210"],
      "index": "103",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196008859.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196078203.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196078210.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false }] },


    "104": {
      "cls_id": "0104",
      "cls_name": "收纳用品",
      "img": ["6941196077657", "6941196077664", "6941196077671"],
      "index": "104",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196077657.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196077664.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196077671.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false }] },


    "105": {
      "cls_id": "0105",
      "cls_name": "香氛日化",
      "img": ["6970893330062", "6941196092940", "6970893330536"],
      "index": "105",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6970893330062.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196092940.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970893330536.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false }] },


    "106": {
      "cls_id": "0106",
      "cls_name": "纺织用品",
      "img": ["6941196090830", "6941196092438", "6941595108136"],
      "index": "106",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196090830.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196092438.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595108136.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false }] },


    "107": {
      "cls_id": "0107",
      "cls_name": "一次性用品",
      "img": ["6939837633942", "6941196092209", "6939837612794"],
      "index": "107",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837633942.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196092209.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837612794.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false }] },


    "108": {
      "cls_id": "0108",
      "cls_name": "儿童用品",
      "img": ["6970893337504", "6970893337627", "13000270"],
      "index": "108",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6970893337504.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970893337627.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/13000270.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false }] },


    "109": {
      "cls_id": "0109",
      "cls_name": "季节产品",
      "img": ["6941595110665", "6939837627019", "6941595119163"],
      "index": "109",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595110665.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837627019.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595119163.jpg?x-oss-process=style/80",
        "show": true,
        "loaded": false }] },


    "110": {
      "cls_id": "0110",
      "cls_name": "宠物用品",
      "img": null,
      "index": "110",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] },


    "111": {
      "cls_id": "0111",
      "cls_name": "个人护理",
      "img": null,
      "index": "111",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "0101",
    "cls_name": "杯类",
    "img": ["6970893335470", "6941595106170", "6939837616693"],
    "index": "101",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6970893335470.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595106170.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837616693.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0102",
    "cls_name": "厨房用品",
    "img": ["6939837608438", "6939837616686", "6939837609343"],
    "index": "102",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837608438.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837616686.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837609343.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0103",
    "cls_name": "居家用品",
    "img": ["6941196008859", "6941196078203", "6941196078210"],
    "index": "103",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196008859.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196078203.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196078210.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0104",
    "cls_name": "收纳用品",
    "img": ["6941196077657", "6941196077664", "6941196077671"],
    "index": "104",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196077657.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196077664.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196077671.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0105",
    "cls_name": "香氛日化",
    "img": ["6970893330062", "6941196092940", "6970893330536"],
    "index": "105",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6970893330062.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196092940.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970893330536.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0106",
    "cls_name": "纺织用品",
    "img": ["6941196090830", "6941196092438", "6941595108136"],
    "index": "106",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196090830.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196092438.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595108136.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0107",
    "cls_name": "一次性用品",
    "img": ["6939837633942", "6941196092209", "6939837612794"],
    "index": "107",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837633942.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196092209.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837612794.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0108",
    "cls_name": "儿童用品",
    "img": ["6970893337504", "6970893337627", "13000270"],
    "index": "108",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6970893337504.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970893337627.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/13000270.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0109",
    "cls_name": "季节产品",
    "img": ["6941595110665", "6939837627019", "6941595119163"],
    "index": "109",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595110665.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837627019.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595119163.jpg?x-oss-process=style/80",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0110",
    "cls_name": "宠物用品",
    "img": null,
    "index": "110",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "0111",
    "cls_name": "个人护理",
    "img": null,
    "index": "111",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] }] },


{
  "cls_id": "02",
  "cls_name": "健康美容",
  "child": {
    "201": {
      "cls_id": "0201",
      "cls_name": "彩妆、香水、甲油",
      "img": ["6928441732455", "6934488908920", "6934488909019"],
      "index": "201",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6928441732455.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6934488908920.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6934488909019.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "202": {
      "cls_id": "0202",
      "cls_name": "护  肤",
      "img": ["6950079151285", "6922200824627", "6950079119636"],
      "index": "202",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6950079151285.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6922200824627.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6950079119636.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "203": {
      "cls_id": "0203",
      "cls_name": "美妆工具",
      "img": ["6941196089292", "6941196089339", "6941196089360"],
      "index": "203",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196089292.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196089339.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196089360.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "204": {
      "cls_id": "0204",
      "cls_name": "季节产品",
      "img": ["6941924324176", "6922200852422", "6936217741976"],
      "index": "204",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941924324176.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6922200852422.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6936217741976.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "0201",
    "cls_name": "彩妆、香水、甲油",
    "img": ["6928441732455", "6934488908920", "6934488909019"],
    "index": "201",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6928441732455.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6934488908920.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6934488909019.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0202",
    "cls_name": "护  肤",
    "img": ["6950079151285", "6922200824627", "6950079119636"],
    "index": "202",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6950079151285.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6922200824627.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6950079119636.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0203",
    "cls_name": "美妆工具",
    "img": ["6941196089292", "6941196089339", "6941196089360"],
    "index": "203",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196089292.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196089339.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196089360.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0204",
    "cls_name": "季节产品",
    "img": ["6941924324176", "6922200852422", "6936217741976"],
    "index": "204",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941924324176.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6922200852422.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6936217741976.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] }] },


{
  "cls_id": "03",
  "cls_name": "饰品系列",
  "child": {
    "301": {
      "cls_id": "0301",
      "cls_name": "发夹",
      "img": ["6941595110504", "6941595109638", "6941595110511"],
      "index": "301",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595110504.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595109638.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595110511.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "302": {
      "cls_id": "0302",
      "cls_name": "发圈",
      "img": ["6941196088615", "6941595103711", "6941595109560"],
      "index": "302",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196088615.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595103711.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595109560.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "303": {
      "cls_id": "0303",
      "cls_name": "发箍",
      "img": ["6941196064657", "6941595105074", "6941595110528"],
      "index": "303",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196064657.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595105074.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595110528.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "304": {
      "cls_id": "0304",
      "cls_name": "首饰",
      "img": ["6941196096689", "6941595106002", "6941595107344"],
      "index": "304",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196096689.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595106002.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595107344.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "305": {
      "cls_id": "0305",
      "cls_name": "10任选",
      "img": ["6941196087434", "6941595103742", "6941595113642"],
      "index": "305",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196087434.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595103742.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595113642.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "306": {
      "cls_id": "0306",
      "cls_name": "儿童头饰",
      "img": ["6941196089575", "6941196089599", "6941196089605"],
      "index": "306",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196089575.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196089599.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196089605.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "307": {
      "cls_id": "0307",
      "cls_name": "服装类",
      "img": ["6939010811259", "6970893330413", "6939010800789"],
      "index": "307",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939010811259.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970893330413.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939010800789.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "308": {
      "cls_id": "0308",
      "cls_name": "季节产品",
      "img": ["6939837600661", "6970574423465", "6970574421492"],
      "index": "308",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837600661.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970574423465.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970574421492.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "309": {
      "cls_id": "0309",
      "cls_name": "网红爆款区",
      "img": null,
      "index": "309",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "0301",
    "cls_name": "发夹",
    "img": ["6941595110504", "6941595109638", "6941595110511"],
    "index": "301",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595110504.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595109638.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595110511.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0302",
    "cls_name": "发圈",
    "img": ["6941196088615", "6941595103711", "6941595109560"],
    "index": "302",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196088615.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595103711.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595109560.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0303",
    "cls_name": "发箍",
    "img": ["6941196064657", "6941595105074", "6941595110528"],
    "index": "303",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196064657.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595105074.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595110528.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0304",
    "cls_name": "首饰",
    "img": ["6941196096689", "6941595106002", "6941595107344"],
    "index": "304",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196096689.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595106002.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595107344.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0305",
    "cls_name": "10任选",
    "img": ["6941196087434", "6941595103742", "6941595113642"],
    "index": "305",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196087434.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595103742.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595113642.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0306",
    "cls_name": "儿童头饰",
    "img": ["6941196089575", "6941196089599", "6941196089605"],
    "index": "306",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196089575.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196089599.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196089605.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0307",
    "cls_name": "服装类",
    "img": ["6939010811259", "6970893330413", "6939010800789"],
    "index": "307",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939010811259.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970893330413.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939010800789.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0308",
    "cls_name": "季节产品",
    "img": ["6939837600661", "6970574423465", "6970574421492"],
    "index": "308",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837600661.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970574423465.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970574421492.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0309",
    "cls_name": "网红爆款区",
    "img": null,
    "index": "309",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] }] },


{
  "cls_id": "04",
  "cls_name": "文体礼品",
  "child": {
    "401": {
      "cls_id": "0401",
      "cls_name": "文具",
      "img": ["6941595106361", "6941595106385", "6941595106415"],
      "index": "401",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595106361.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595106385.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595106415.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "402": {
      "cls_id": "0402",
      "cls_name": "钟表",
      "img": ["6939837628016", "6941196042013", "6939837643552"],
      "index": "402",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837628016.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196042013.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837643552.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "403": {
      "cls_id": "0403",
      "cls_name": "体育用品",
      "img": ["6939837635748", "6939837601231", "6939837624483"],
      "index": "403",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837635748.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837601231.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837624483.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "404": {
      "cls_id": "0404",
      "cls_name": "办公学习",
      "img": ["6941595106453", "6970574422390", "6970574420891"],
      "index": "404",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595106453.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970574422390.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970574420891.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "405": {
      "cls_id": "0405",
      "cls_name": "益智早教",
      "img": ["6941595114489", "6941196084334", "6941595114465"],
      "index": "405",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595114489.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196084334.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595114465.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "406": {
      "cls_id": "0406",
      "cls_name": "礼品包装",
      "img": ["6941595110795", "6941595110788", "6941595110764"],
      "index": "406",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595110795.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595110788.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595110764.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "0401",
    "cls_name": "文具",
    "img": ["6941595106361", "6941595106385", "6941595106415"],
    "index": "401",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595106361.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595106385.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595106415.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0402",
    "cls_name": "钟表",
    "img": ["6939837628016", "6941196042013", "6939837643552"],
    "index": "402",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837628016.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196042013.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837643552.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0403",
    "cls_name": "体育用品",
    "img": ["6939837635748", "6939837601231", "6939837624483"],
    "index": "403",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837635748.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837601231.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837624483.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0404",
    "cls_name": "办公学习",
    "img": ["6941595106453", "6970574422390", "6970574420891"],
    "index": "404",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595106453.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970574422390.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970574420891.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0405",
    "cls_name": "益智早教",
    "img": ["6941595114489", "6941196084334", "6941595114465"],
    "index": "405",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595114489.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196084334.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595114465.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0406",
    "cls_name": "礼品包装",
    "img": ["6941595110795", "6941595110788", "6941595110764"],
    "index": "406",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595110795.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595110788.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595110764.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] }] },


{
  "cls_id": "05",
  "cls_name": "季节潮品",
  "child": {
    "501": {
      "cls_id": "0501",
      "cls_name": "伞类",
      "img": ["6939837628443", "6970893337870", "6939837612190"],
      "index": "501",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837628443.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970893337870.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837612190.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "502": {
      "cls_id": "0502",
      "cls_name": "鞋类",
      "img": ["6939837633874", "6939837633720", "6970893338006"],
      "index": "502",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837633874.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837633720.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970893338006.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "503": {
      "cls_id": "0503",
      "cls_name": "内衣",
      "img": ["6939837608131", "6939837628863", "6970893338167"],
      "index": "503",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837608131.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837628863.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970893338167.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "504": {
      "cls_id": "0504",
      "cls_name": "皮带",
      "img": ["6941595108884", "6941595108907", "6941595108914"],
      "index": "504",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595108884.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595108907.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595108914.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "505": {
      "cls_id": "0505",
      "cls_name": "功能产品",
      "img": ["6939837675645", "6941595120466", "6941595111723"],
      "index": "505",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837675645.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595120466.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595111723.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "506": {
      "cls_id": "0506",
      "cls_name": "游泳产品",
      "img": ["6939010800536", "6939010801724", "6939010800543"],
      "index": "506",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939010800536.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939010801724.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939010800543.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "507": {
      "cls_id": "0507",
      "cls_name": "帽子",
      "img": ["6941595110252", "6941595110269", "6941595110283"],
      "index": "507",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595110252.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595110269.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595110283.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "508": {
      "cls_id": "0508",
      "cls_name": "眼镜",
      "img": ["6939837641794", "6970574428415", "52000206"],
      "index": "508",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837641794.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970574428415.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/52000206.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "509": {
      "cls_id": "0509",
      "cls_name": "手套",
      "img": ["6939837675690", "6939837675706", "6939837622151"],
      "index": "509",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837675690.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837675706.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837622151.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "510": {
      "cls_id": "0510",
      "cls_name": "袜子",
      "img": ["6941196092698", "6941196092728", "6939837629778"],
      "index": "510",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196092698.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196092728.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837629778.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "511": {
      "cls_id": "0511",
      "cls_name": "围巾",
      "img": ["6941196060796", "6941196060802", "6941196070597"],
      "index": "511",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196060796.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196060802.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196070597.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "0501",
    "cls_name": "伞类",
    "img": ["6939837628443", "6970893337870", "6939837612190"],
    "index": "501",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837628443.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970893337870.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837612190.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0502",
    "cls_name": "鞋类",
    "img": ["6939837633874", "6939837633720", "6970893338006"],
    "index": "502",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837633874.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837633720.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970893338006.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0503",
    "cls_name": "内衣",
    "img": ["6939837608131", "6939837628863", "6970893338167"],
    "index": "503",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837608131.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837628863.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970893338167.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0504",
    "cls_name": "皮带",
    "img": ["6941595108884", "6941595108907", "6941595108914"],
    "index": "504",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595108884.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595108907.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595108914.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0505",
    "cls_name": "功能产品",
    "img": ["6939837675645", "6941595120466", "6941595111723"],
    "index": "505",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837675645.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595120466.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595111723.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0506",
    "cls_name": "游泳产品",
    "img": ["6939010800536", "6939010801724", "6939010800543"],
    "index": "506",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939010800536.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939010801724.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939010800543.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0507",
    "cls_name": "帽子",
    "img": ["6941595110252", "6941595110269", "6941595110283"],
    "index": "507",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595110252.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595110269.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595110283.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0508",
    "cls_name": "眼镜",
    "img": ["6939837641794", "6970574428415", "52000206"],
    "index": "508",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837641794.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970574428415.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/52000206.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0509",
    "cls_name": "手套",
    "img": ["6939837675690", "6939837675706", "6939837622151"],
    "index": "509",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837675690.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837675706.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837622151.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0510",
    "cls_name": "袜子",
    "img": ["6941196092698", "6941196092728", "6939837629778"],
    "index": "510",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196092698.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196092728.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837629778.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0511",
    "cls_name": "围巾",
    "img": ["6941196060796", "6941196060802", "6941196070597"],
    "index": "511",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196060796.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196060802.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196070597.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] }] },


{
  "cls_id": "06",
  "cls_name": "精品包饰",
  "child": {
    "601": {
      "cls_id": "0601",
      "cls_name": "时尚包",
      "img": ["6941196094463", "6941595105661", "6939837632518"],
      "index": "601",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196094463.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595105661.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837632518.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "602": {
      "cls_id": "0602",
      "cls_name": "双肩包",
      "img": ["6939837630408", "6939837619342", "6970893336835"],
      "index": "602",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837630408.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837619342.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970893336835.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "603": {
      "cls_id": "0603",
      "cls_name": "钱包",
      "img": ["6941595108990", "6939837619816", "6941595101885"],
      "index": "603",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595108990.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837619816.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595101885.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "604": {
      "cls_id": "0604",
      "cls_name": "随意小包",
      "img": ["6970893336675", "6939837635229", "61000346"],
      "index": "604",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6970893336675.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837635229.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/61000346.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "605": {
      "cls_id": "0605",
      "cls_name": "配饰",
      "img": ["6939837609480", "6939837632761", "6939837604393"],
      "index": "605",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837609480.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837632761.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837604393.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "606": {
      "cls_id": "0606",
      "cls_name": "行李箱",
      "img": ["6939837640421", "6939837637773", "6939837630033"],
      "index": "606",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837640421.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837637773.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837630033.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "607": {
      "cls_id": "0607",
      "cls_name": "功能大包",
      "img": ["6939837636240", "6939837635557", "6939837630071"],
      "index": "607",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837636240.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837635557.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837630071.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "614": {
      "cls_id": "0614",
      "cls_name": "儿童包包",
      "img": ["6941595101649", "6939837620027", "6941595101656"],
      "index": "614",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595101649.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837620027.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595101656.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "0601",
    "cls_name": "时尚包",
    "img": ["6941196094463", "6941595105661", "6939837632518"],
    "index": "601",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196094463.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595105661.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837632518.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0602",
    "cls_name": "双肩包",
    "img": ["6939837630408", "6939837619342", "6970893336835"],
    "index": "602",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837630408.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837619342.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970893336835.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0603",
    "cls_name": "钱包",
    "img": ["6941595108990", "6939837619816", "6941595101885"],
    "index": "603",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595108990.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837619816.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595101885.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0604",
    "cls_name": "随意小包",
    "img": ["6970893336675", "6939837635229", "61000346"],
    "index": "604",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6970893336675.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837635229.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/61000346.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0605",
    "cls_name": "配饰",
    "img": ["6939837609480", "6939837632761", "6939837604393"],
    "index": "605",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837609480.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837632761.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837604393.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0606",
    "cls_name": "行李箱",
    "img": ["6939837640421", "6939837637773", "6939837630033"],
    "index": "606",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837640421.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837637773.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837630033.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0607",
    "cls_name": "功能大包",
    "img": ["6939837636240", "6939837635557", "6939837630071"],
    "index": "607",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837636240.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837635557.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837630071.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0614",
    "cls_name": "儿童包包",
    "img": ["6941595101649", "6939837620027", "6941595101656"],
    "index": "614",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595101649.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837620027.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595101656.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] }] },


{
  "cls_id": "07",
  "cls_name": "儿童玩具",
  "child": {
    "704": {
      "cls_id": "0704",
      "cls_name": "模型玩具",
      "img": ["6970707190684", "6970707190899", "6970707190929"],
      "index": "704",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6970707190684.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970707190899.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970707190929.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "705": {
      "cls_id": "0705",
      "cls_name": "拼图积木",
      "img": ["6971619010138", "6971619010145", "6932691995423"],
      "index": "705",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6971619010138.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6971619010145.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6932691995423.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "706": {
      "cls_id": "0706",
      "cls_name": "益智玩具",
      "img": ["6952516803726", "6952516803078", "6970574421683"],
      "index": "706",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6952516803726.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6952516803078.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970574421683.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "707": {
      "cls_id": "0707",
      "cls_name": "季节产品",
      "img": ["6926205600774", "6924270302678", "6947806402635"],
      "index": "707",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6926205600774.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6924270302678.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6947806402635.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "708": {
      "cls_id": "0708",
      "cls_name": "潮流玩具",
      "img": ["6970643770070", "6946904786616", "6946904780423"],
      "index": "708",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6970643770070.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6946904786616.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6946904780423.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "0704",
    "cls_name": "模型玩具",
    "img": ["6970707190684", "6970707190899", "6970707190929"],
    "index": "704",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6970707190684.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970707190899.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970707190929.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0705",
    "cls_name": "拼图积木",
    "img": ["6971619010138", "6971619010145", "6932691995423"],
    "index": "705",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6971619010138.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6971619010145.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6932691995423.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0706",
    "cls_name": "益智玩具",
    "img": ["6952516803726", "6952516803078", "6970574421683"],
    "index": "706",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6952516803726.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6952516803078.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970574421683.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0707",
    "cls_name": "季节产品",
    "img": ["6926205600774", "6924270302678", "6947806402635"],
    "index": "707",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6926205600774.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6924270302678.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6947806402635.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0708",
    "cls_name": "潮流玩具",
    "img": ["6970643770070", "6946904786616", "6946904780423"],
    "index": "708",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6970643770070.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6946904786616.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6946904780423.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] }] },


{
  "cls_id": "08",
  "cls_name": "毛绒公仔",
  "child": {
    "801": {
      "cls_id": "0801",
      "cls_name": "小号公仔",
      "img": ["6941196092216", "6939837607868", "6939837607912"],
      "index": "801",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196092216.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837607868.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837607912.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "802": {
      "cls_id": "0802",
      "cls_name": "中号公仔",
      "img": ["6941196081067", "6941595109881", "6941595109898"],
      "index": "802",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196081067.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595109881.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "803": {
      "cls_id": "0803",
      "cls_name": "大号公仔",
      "img": ["6941196068327", "6941196085652", "6941196086741"],
      "index": "803",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196068327.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196085652.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196086741.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "809": {
      "cls_id": "0809",
      "cls_name": "版权公仔",
      "img": ["6941595109898", "6941196064633", "6941196056843"],
      "index": "809",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196064633.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196056843.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "0801",
    "cls_name": "小号公仔",
    "img": ["6941196092216", "6939837607868", "6939837607912"],
    "index": "801",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196092216.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837607868.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837607912.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0802",
    "cls_name": "中号公仔",
    "img": ["6941196081067", "6941595109881", "6941595109898"],
    "index": "802",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196081067.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595109881.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0803",
    "cls_name": "大号公仔",
    "img": ["6941196068327", "6941196085652", "6941196086741"],
    "index": "803",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196068327.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196085652.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196086741.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0809",
    "cls_name": "版权公仔",
    "img": ["6941595109898", "6941196064633", "6941196056843"],
    "index": "809",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941595109898.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196064633.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196056843.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] }] },


{
  "cls_id": "09",
  "cls_name": "数码配件",
  "child": {
    "901": {
      "cls_id": "0901",
      "cls_name": "手机配件",
      "img": ["6941196078913", "6941595119309", "6941595119323"],
      "index": "901",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196078913.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595119309.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595119323.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "902": {
      "cls_id": "0902",
      "cls_name": "充电设备",
      "img": ["6941196099376", "6941595103148", "6941595102950"],
      "index": "902",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196099376.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595103148.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941595102950.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "903": {
      "cls_id": "0903",
      "cls_name": "影音娱乐",
      "img": ["6939837610288", "6941196072133", "6939837631269"],
      "index": "903",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837610288.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196072133.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837631269.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "904": {
      "cls_id": "0904",
      "cls_name": "灯具",
      "img": ["6939837610271", "6970574420389", "6939837612763"],
      "index": "904",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6939837610271.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970574420389.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837612763.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "905": {
      "cls_id": "0905",
      "cls_name": "家用电器",
      "img": ["6970574429511", "6970574425353", "6970574421843"],
      "index": "905",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6970574429511.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970574425353.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6970574421843.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "906": {
      "cls_id": "0906",
      "cls_name": "电脑外设",
      "img": ["6970574423809", "16000573", "6939837605819"],
      "index": "906",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6970574423809.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/16000573.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6939837605819.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "907": {
      "cls_id": "0907",
      "cls_name": "季节产品",
      "img": ["6941196063889", "6941196083535", "6941196077978"],
      "index": "907",
      "lazy": [{
        "src": "http://img.xmvogue.com/thumb/6941196063889.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196083535.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false },
      {
        "src": "http://img.xmvogue.com/thumb/6941196077978.jpg?x-oss-process=style/80",
        "show": false,
        "loaded": false }] },


    "908": {
      "cls_id": "0908",
      "cls_name": "移动电源",
      "img": null,
      "index": "908",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "0901",
    "cls_name": "手机配件",
    "img": ["6941196078913", "6941595119309", "6941595119323"],
    "index": "901",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196078913.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595119309.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595119323.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0902",
    "cls_name": "充电设备",
    "img": ["6941196099376", "6941595103148", "6941595102950"],
    "index": "902",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196099376.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595103148.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941595102950.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0903",
    "cls_name": "影音娱乐",
    "img": ["6939837610288", "6941196072133", "6939837631269"],
    "index": "903",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837610288.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196072133.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837631269.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0904",
    "cls_name": "灯具",
    "img": ["6939837610271", "6970574420389", "6939837612763"],
    "index": "904",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6939837610271.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970574420389.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837612763.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0905",
    "cls_name": "家用电器",
    "img": ["6970574429511", "6970574425353", "6970574421843"],
    "index": "905",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6970574429511.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970574425353.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6970574421843.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0906",
    "cls_name": "电脑外设",
    "img": ["6970574423809", "16000573", "6939837605819"],
    "index": "906",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6970574423809.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/16000573.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6939837605819.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0907",
    "cls_name": "季节产品",
    "img": ["6941196063889", "6941196083535", "6941196077978"],
    "index": "907",
    "lazy": [{
      "src": "http://img.xmvogue.com/thumb/6941196063889.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196083535.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false },
    {
      "src": "http://img.xmvogue.com/thumb/6941196077978.jpg?x-oss-process=style/80",
      "show": false,
      "loaded": false }] },

  {
    "cls_id": "0908",
    "cls_name": "移动电源",
    "img": null,
    "index": "908",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] }] },


{
  "cls_id": "10",
  "cls_name": "休闲食品",
  "child": {
    "100101": {
      "cls_id": "100101",
      "cls_name": "糖果",
      "img": null,
      "index": "100101",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] },


    "100102": {
      "cls_id": "100102",
      "cls_name": "炒货",
      "img": null,
      "index": "100102",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] },


    "100103": {
      "cls_id": "100103",
      "cls_name": "坚果",
      "img": null,
      "index": "100103",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] },


    "100104": {
      "cls_id": "100104",
      "cls_name": "饼干",
      "img": null,
      "index": "100104",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] },


    "100105": {
      "cls_id": "100105",
      "cls_name": "膨化",
      "img": null,
      "index": "100105",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] },


    "100106": {
      "cls_id": "100106",
      "cls_name": "蜜饯果脯",
      "img": null,
      "index": "100106",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] },


    "100107": {
      "cls_id": "100107",
      "cls_name": "肉脯",
      "img": null,
      "index": "100107",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] },


    "100108": {
      "cls_id": "100108",
      "cls_name": "饮料",
      "img": null,
      "index": "100108",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] },


    "100109": {
      "cls_id": "100109",
      "cls_name": "其它",
      "img": null,
      "index": "100109",
      "lazy": [{
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false },
      {
        "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
        "show": true,
        "loaded": false }] } },



  "foods": [{
    "cls_id": "100101",
    "cls_name": "糖果",
    "img": null,
    "index": "100101",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "100102",
    "cls_name": "炒货",
    "img": null,
    "index": "100102",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "100103",
    "cls_name": "坚果",
    "img": null,
    "index": "100103",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "100104",
    "cls_name": "饼干",
    "img": null,
    "index": "100104",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "100105",
    "cls_name": "膨化",
    "img": null,
    "index": "100105",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "100106",
    "cls_name": "蜜饯果脯",
    "img": null,
    "index": "100106",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "100107",
    "cls_name": "肉脯",
    "img": null,
    "index": "100107",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "100108",
    "cls_name": "饮料",
    "img": null,
    "index": "100108",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "100109",
    "cls_name": "其它",
    "img": null,
    "index": "100109",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] }] },


{
  "cls_id": "14",
  "cls_name": "物料耗材",
  "foods": [{
    "cls_id": "14",
    "cls_name": "物料耗材",
    "index": "14",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "14",
    "cls_name": "物料耗材",
    "index": "14",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] },

  {
    "cls_id": "14",
    "cls_name": "物料耗材",
    "index": "14",
    "lazy": [{
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false },
    {
      "src": "http://dh.xmcpcn.com/Public/images/none.jpg",
      "show": true,
      "loaded": false }] }] }];var _default =




{
  carouselList: carouselList,
  cartList: cartList,
  detailData: detailData,
  lazyLoadList: lazyLoadList,
  userInfo: userInfo,
  shareList: shareList,
  goodsList: goodsList,
  orderList: orderList,
  cateList: cateList,
  cateData: cateData };exports.default = _default;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!************************************!*\
  !*** E:/项萍/熙美订货/common/request.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _index = _interopRequireDefault(__webpack_require__(/*! @/common/index */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var content = {
  // 获取banner
  hIndex: function hIndex() {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Index/index', '', function (res) {
        resolve(res);
      });
    });
  },
  // 新品上线
  hNew: function hNew(data, params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Category/new_goods?p=' + data.page + "&num=" + data.downNum, params, function (res) {
        resolve(res);
      });
    });
  },
  // 最近补货
  hBu: function hBu(data, params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Category/bu_goods?p=' + data.page + "&num=" + data.downNum, params, function (res) {
        resolve(res);
      });
    });
  },
  // 特惠商品
  hDis: function hDis(data, params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Promotion/dis?p=' + data.page + "&num=" + data.downNum, params, function (res) {
        resolve(res);
      });
    });
  },
  // 地区最畅销
  hSale: function hSale(data, params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Category/get_province_sale?p=' + data.page + "&num=" + data.downNum, params, function (res) {
        resolve(res);
      });
    });
  },
  // 猜你喜欢
  hLike: function hLike() {
    return new Promise(function (resolve) {
      _index.default.post('/Home/Category/get_sale/', '', function (res) {
        resolve(res);
      });
    });
  },
  // 添加购物车
  addShop: function addShop(data) {
    var params = {
      max_buy: 40 };

    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Cart/addCart?sn=' + data.item_no + "&num=" + data.allNum, params, function (res) {
        resolve(res);
      });
    });
  },
  // 商品详情
  product: function product(id) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Goods/index/id/' + id, "", function (res) {
        resolve(res);
      });
    });
  },
  // 收藏
  addLike: function addLike(params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Collect/addcollect', params, function (res) {
        resolve(res);
      });
    });
  },
  // 取消收藏
  deleteLike: function deleteLike(params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Collect/delcollect', params, function (res) {
        resolve(res);
      });
    });
  },

  // 购物车详细
  cartData: function cartData(data) {
    var params = {
      cart_times: 129600,
      p: data.page };

    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/Cart/index_new?num=" + data.downNum, params, function (res) {
        resolve(res);
      });
    });
  },
  // 获取余额
  money: function money(params) {
    return new Promise(function (resolve) {
      _index.default.post('/Home/Index/get_amt?hdid=' + params.hdid, "", function (res) {
        resolve(res);
      });
    });
  },
  // 获取积分
  integral: function integral() {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/integralindex', "", function (res) {
        resolve(res);
      });
    });
  },
  // 获取代金券
  dis: function dis() {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Coupon/index', "", function (res) {
        resolve(res);
      });
    });
  },
  // 购物车数量
  changenum: function changenum(content) {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/Cart/changenum?sn=" + content.item_no + "&num=" + content.num, "", function (res) {
        resolve(res);
      });
    });
  },
  // 商品分类
  category: function category(data, item) {

    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/Category/appindex?id=" + data.listId + "&pagesize=" + data.pagesize + "&p=" + data.page +
      "&num=" + data.downNum, item, function (res) {
        resolve(res);
      });
    });
  },
  // 获取公告
  artData: function artData(id) {
    return new Promise(function (resolve) {
      _index.default.post("/Home/Article/show?id=" + id, "", function (res) {
        resolve(res);
      });
    });
  },
  // 单件删除
  cartDele: function cartDele(item) {
    return new Promise(function (resolve) {
      _index.default.post("/Home/Cart/delGoods?sn=" + item.item_no, item.id, function (res) {
        resolve(res);
      });
    });
  },
  //全部删除
  cartAlldele: function cartAlldele(user) {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/Cart/clear?uid=" + user.uid, "", function (res) {
        resolve(res);
      });
    });
  },
  // 购物车结算
  cartJiesuan: function cartJiesuan(params) {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/Cart/app_jiesuan", params, function (res) {
        resolve(res);
      });
    });
  },
  // 获取搜索数据
  searchData: function searchData(data) {
    var params = {
      type: 'app' };

    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Category/search?ser_key=' + data.text + "&p=" + data.page + "&num=" + data.downNum,
      params, function (res) {
        resolve(res);
      });
    });
  },
  // 库存查询
  queryRep: function queryRep(data, params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/appStock?code=' + data.p_num, params, function (res) {
        resolve(res);
      });
    });
  },
  // 售后列表
  saleData: function saleData() {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/shouhou', "", function (res) {
        resolve(res);
      });
    });
  },
  // 售后详情
  saleView: function saleView(params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/shouhou_view?mid=' + params.mid, "", function (res) {
        resolve(res);
      });
    });
  },
  // 撤销售后
  saleDele: function saleDele(data) {
    return new Promise(function (resolve) {
      _index.default.post("/Home/User/shouhou_del?id=" + data.mid, "", function (res) {
        resolve(res);
      });
    });
  },
  // 新增售后
  saleAdd: function saleAdd(params) {
    return new Promise(function (resolve) {
      _index.default.arry("/index.php/Home/User/shouhou_add", params, function (res) {
        resolve(res);
      });
    });
  },
  // 售后扫描
  saleScan: function saleScan(data) {
    return new Promise(function (resolve) {
      _index.default.arry("/index.php/Home/User/getItemInfo?item_no=" + data.result, "", function (res) {
        resolve(res);
      });
    });
  },
  // 售后名称
  saleName: function saleName(data) {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/User/getItemInfo?item_no=" + data.value, "", function (res) {
        resolve(res);
      });
    });
  },
  // 物流列表
  logisList: function logisList(data) {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/User/sh_express_list?p=" + data.p, "", function (res) {
        resolve(res);
      });
    });
  },
  // 物流详情
  logisData: function logisData(data) {

    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/sh_express_view?mid=' + data.mid, "", function (res) {
        resolve(res);
      });
    });
  },
  // 获取已通过物流
  logisView: function logisView() {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/sh_express', "", function (res) {
        resolve(res);
      });
    });
  },
  logisAdd: function logisAdd() {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/sh_express', "", function (res) {
        resolve(res);
      });
    });
  },
  // 订单列表（未确认）
  orderHa: function orderHa(data) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/orderList?p=' + data.page, "", function (res) {
        resolve(res);
      });
    });
  },
  // 订单详情（未确认）
  orderHaView: function orderHaView(data) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/orderView/sn/' + data.sn, "", function (res) {
        resolve(res);
      });
    });
  },
  // 订单列表（已确认）
  orderHd: function orderHd(data) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Hd/orderList?p=' + data.page, "", function (res) {
        resolve(res);
      });
    });
  },
  // 订单详情（已确认）
  orderHdView: function orderHdView(data) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Hd/orderView/sn/' + data.sn, "", function (res) {
        resolve(res);
      });
    });
  },
  // 收藏列表
  colList: function colList() {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/Collect/index", "", function (res) {
        resolve(res);
      });
    });
  },
  // 收藏单件删除
  colDele: function colDele(data) {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/Collect/delcollect", data, function (res) {
        resolve(res);
      });
    });
  },
  // 收藏清空
  colDeleAll: function colDeleAll() {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/Collect/clear", "", function (res) {
        resolve(res);
      });
    });
  },
  // 地址
  address: function address() {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/User/Address", "", function (res) {
        resolve(res);
      });
    });
  },
  // 商品分类
  categories_app: function categories_app() {
    return new Promise(function (resolve) {
      _index.default.post("/index.php/Home/Category/categories_tree3", "", function (res) {
        resolve(res);
      });
    });
  },
  // 销售图表
  marketRank: function marketRank(params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/ranking', params, function (res) {
        resolve(res);
      });
    });
  },
  // 销售详情
  marketView: function marketView(params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/mysale', params, function (res) {
        resolve(res);
      });
    });
  },
  // 库存图表
  reqRank: function reqRank() {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/allstock', "", function (res) {
        resolve(res);
      });
    });
  },
  // 库存详情
  reqView: function reqView(data, params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/User/appStock?code=' + data.p_num, params, function (res) {
        resolve(res);
      });
    });
  },
  // 自动更新
  Version: function Version(params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Version/index', params, function (res) {
        resolve(res);
      });
    });
  },
  // 领取免费商品
  orders: function orders(params) {
    return new Promise(function (resolve) {
      _index.default.post('/index.php/Home/Order/success', params, function (res) {
        resolve(res);
      });
    });
  },
  // 提交免费商品
  create_free_order: function create_free_order(params) {
    return new Promise(function (resolve) {
      _index.default.arry('/index.php/Home/Order/create_free_order', params, function (res) {
        resolve(res);
      });
    });
  } };var _default =

content;exports.default = _default;

/***/ }),

/***/ 21:
/*!*******************************!*\
  !*** E:/项萍/熙美订货/common/en.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cart, _search;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = {
  // 登录
  login: {
    companyName: "XIMIVOGUE",
    project: "Ordering Website",
    user: 'Username',
    pass: 'Password',
    login: 'login',
    userMsg: 'Please enter user name',
    passMsg: 'Please enter password',
    history: "Historical Notes",
    save: 'Save user name' },

  // 商品分类
  categoryList_0: {
    typelist: [{
      id: '02',
      color: '#FF82AB',
      img: "../../static/home/huazhuang.png",
      title: 'Cosmetics' },
    {
      id: '04',
      color: '#FFD700',
      img: "../../static/home/liwu.png",
      title: 'Office Style' },
    {
      id: '09',
      color: '#9adaff',
      img: "../../static/home/erji_1.png",
      title: 'Digital' },
    {
      id: '06',
      color: '#FFD700',
      img: "../../static/home/bag.png",
      title: 'Bags' },
    {
      id: '05',
      color: '#a8f1a8',
      img: "../../static/home/xiezi.png",
      title: 'Seasonal' },
    {
      id: '03',
      color: '#FF8C69',
      img: "../../static/home/zhubaoshipin.png",
      title: 'Decorations' },
    {
      id: '01',
      color: '#B0E2FF',
      img: "../../static/home/beizi.png",
      title: 'Household' },
    {
      id: '07',
      color: '#a6eba6',
      img: "../../static/home/shipin_1.png",
      title: 'Toys' },
    {
      id: '08',
      color: '#FFC125',
      img: "../../static/home/wanju.png",
      title: 'PlushDoll' },
    {
      id: '10',
      color: '#ff9769',
      img: "../../static/home/lingshi_2.png",
      title: 'Leisurefood' }] },


  // 商品分类
  categoryList_1: {
    typelist: [{
      id: '22',
      color: '#FF82AB',
      img: "../../static/home/huazhuang.png",
      title: 'Cosmetics' },
    {
      id: '24',
      color: '#FFD700',
      img: "../../static/home/liwu.png",
      title: 'Office Style' },
    {
      id: '29',
      color: '#9adaff',
      img: "../../static/home/erji_1.png",
      title: 'Digital' },
    {
      id: '26',
      color: '#FFD700',
      img: "../../static/home/bag.png",
      title: 'Bags' },
    {
      id: '25',
      color: '#a8f1a8',
      img: "../../static/home/xiezi.png",
      title: 'Seasonal' },
    {
      id: '23',
      color: '#FF8C69',
      img: "../../static/home/zhubaoshipin.png",
      title: 'Decorations' },
    {
      id: '21',
      color: '#B0E2FF',
      img: "../../static/home/beizi.png",
      title: 'Household' },
    {
      id: '27',
      color: '#a6eba6',
      img: "../../static/home/shipin_1.png",
      title: 'Toys' },
    {
      id: '28',
      color: '#FFC125',
      img: "../../static/home/wanju.png",
      title: 'PlushDoll' },
    {
      id: '20',
      color: '#ff9769',
      img: "../../static/home/lingshi_2.png",
      title: 'Leisurefood' }] },


  // 主页
  index: {
    news: 'New arrivals',
    rep: 'Stock replenishment',
    sell: 'Best Selling',
    dis: '90% OFF(no exchange)',
    sala: 'Regional unmarketable',
    like: 'Guess You Like',
    search: 'Please enter',
    tab1: 'Home',
    tab2: 'Classify',
    tab3: 'Shopping',
    tab4: 'My',
    foot: 'Have what',
    loadmsg: 'loading...',
    all: 'all',
    p1: 'Trade',
    p2: 'Sale',
    p3: 'Discount',
    loginmsg: 'please log in',
    contentdown: "loading...",
    contentrefresh: "loading...",
    contentnomore: "No Data",
    cancel: 'Cancel',
    confirm: 'Confirm',
    msg1: 'Successfully added',
    msg2: 'Successfully delete',
    msg3: 'Submit successfully',
    msg4: 'Collection of success',
    msg5: 'Delete a site collection',
    address: 'now located in ' },

  // 个人中心
  my: {
    status: 'Normal user',
    user: 'User',
    vip: 'XIMI SVIP',
    info_a1: 'Remaining balance',
    info_a2: "Voucher",
    info_a3: 'Integral',
    info_b1: 'Inventory',
    info_b2: 'Sales',
    info_b3: 'After sale',
    info_b4: 'Supporter',
    info_c1: 'Order',
    info_c2: 'Favorite',
    info_c3: 'Voucher',
    info_c4: 'Address',
    info_c5: 'Set' },

  // 购物车
  cart: (_cart = {
    foot: 'Have what',
    title: 'Shopping trolley',
    p1: 'There are',
    p2: 'style and',
    p3: 'piece',
    Sort: "",
    amount: 'quantity',
    empty: 'Clear',
    select: 'Choose vouchers',
    all: 'Total',
    go: 'Submit',
    bind: 'Confirm',
    Default: 'Default' }, _defineProperty(_cart, "all",
  'all'), _defineProperty(_cart, "hint",
  'Empty Cart?'), _defineProperty(_cart, "regulate",
  'Regulate'), _defineProperty(_cart, "sheet",
  ['number goes from high to low', 'number goes from low to high', 'Empty shopping cart']), _defineProperty(_cart, "emptyText",
  'Go shopping'), _defineProperty(_cart, "hint2",
  'Settlement cart?'), _defineProperty(_cart, "voucher",
  'Voucher'), _defineProperty(_cart, "use",
  'Threshold free use'), _defineProperty(_cart, "uesText",
  'Select the'), _defineProperty(_cart, "hint3",
  "Right - click to view product categories"), _defineProperty(_cart, "type",
  "Classify"), _cart),

  //分类
  classify: {
    title: "Classify" },

  // 商品详情
  details: {
    title: 'details',
    price_a: 'Trade Price',
    price_b: 'Sale Price',
    type: "type",
    select: "selected",
    Default: 'Default',
    code: 'Barcode',
    spec: 'Moq',
    size: 'size',
    weight: 'weight',
    Material: 'Material',
    home: 'home',
    cart: 'shopping',
    like: 'like',
    submit: 'submit',
    add: 'Add to Cart',
    rec: 'recommend',
    features: 'features',
    notice: 'notice',
    usage: 'usage',
    p3: 'Discount',
    empty: 'null',
    p1: 'Trade',
    p2: 'Sale' },

  // 商品分类
  list: {
    Default: 'Default',
    price: 'Price',
    page: 'page',
    title: "Classify",
    p1: 'Trade',
    p2: 'Sale',
    p3: 'Discount' },

  // 库存
  repertory: {
    title: ' Inventory search',
    select: 'select',
    type: 'type',
    all: 'total inventory',
    code: 'Barcode',
    name: 'name',
    hint: 'no data',
    proportion: 'Total store inventory amount proportion',
    submit: 'Search',
    time: 'End Time',
    totalMoney: 'Total money',
    input: 'Please input commodity barcode',
    key: ' Please enter a search phrase',
    items: [{
      value: 'c',
      name: 'Stocks' },
    {
      value: 'a',
      name: 'barcode' },
    {
      value: 'b',
      name: 'name' }],

    store: 'repertory',
    money: 'money',
    num: 'count',
    price: 'price',
    total: 'total',
    pcs: 'pcs',
    category: ['Home Depot', 'Health Beauty', 'Decorations', 'Office Style', 'Seasonal Products', 'Bags', 'Toys',
    'Plush Doll', 'Digtial', 'Leisurefood', 'Consumable'],

    p1: "Please select the query type",
    p2: 'Please enter the item number',
    p3: 'Please enter the product name' },

  // 技术支持
  technology: {
    Remote: 'Remote',
    title: 'Supporter',
    password: 'rconpassword',
    qq: 'contact QQ',
    telephone: 'telephone',
    problem: 'problem description',
    upload: 'Upload picture',
    submit: 'submit',
    inputId: 'Please enter the remote ID',
    inputPass: 'Please enter the remote password',
    inputQQ: 'Please enter the contact QQ',
    inputTel: 'Please enter the telephone',
    inputProblem: 'Please enter the problem ',
    inputImg: 'Please upload picture' },

  // 我的销售
  market: {
    title: ' my sales',
    code: 'Store code',
    time: 'Time range',
    zhi: 'to',
    chart: 'Total store sales chart',
    bills: 'Real-time bills',
    tq: 'Total Qty',
    ts: 'Total retail sales',
    tc: 'Total cost amount',
    tg: 'Total gross profit',
    tt: 'Total traffic',
    tp: 'Total guest unit price',
    details: 'view details',
    hint: 'No data',
    submit: 'search',
    num: 'count',
    money: 'money',
    category: ['Home Depot', 'Health Beauty', 'Decorations', 'Office Style', 'Seasonal Products', 'Bags', 'Toys',
    'Plush Doll', 'Digtial', 'Leisurefood', 'Consumable'],

    loading: 'loading' },

  // 销售详情
  market_data: {
    title: 'Sales detail',
    Default: 'Default',
    tq: 'Qty',
    ts: 'Retail sales',
    tc: 'Cost amount',
    tg: 'Gross profit',
    tt: 'Traffic',
    tp: 'Guest unit price',
    readTime: 'Real-time bills',
    weekDay: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] },



  // 搜索
  search: (_search = {
    title: 'Search',
    inputpl: 'Please write keywords...',
    p1: "Please write keywords",
    recommend: 'Decommend',
    Default: 'Default',
    price: 'Price',
    page: 'page' }, _defineProperty(_search, "p1",
  'Trade'), _defineProperty(_search, "p2",
  'Sale'), _defineProperty(_search, "more",
  'No Data'), _defineProperty(_search, "results",
  'Results'), _defineProperty(_search, "recList_a",
  [{
    value: "Mask",
    id: '口罩' },
  {
    value: "Perfume",
    id: '香水' },
  {
    value: "Headset",
    id: '耳机' },
  {
    value: "Towel",
    id: '毛巾' },
  {
    value: "USB",
    id: '数据线' },
  {
    value: "Slipper",
    id: '拖鞋' }]), _defineProperty(_search, "recList_b",

  [{
    value: "New product launch" },
  {
    value: "Chinese Products" }]), _search),


  // 订单
  order_list: {
    title: "Order",
    navList: ['Pending order', 'Firm order'],
    priceAll: "Total Amount",
    time: 'Time',
    more: 'No Data',
    order: 'Order number' },

  // 订单详情
  order_data: {
    title: "Order Detail",
    priceAll: "Total Amount",
    code: 'Order NO',
    item_no: 'Barcode',
    item_num: 'Subtotal',
    hint: 'Orders Submitted,Waiting for customer service confirming',
    pcs: 'pcs' },

  // 收藏
  collect: {
    title: "Collect",
    all: 'all',
    item_no: 'Barcode',
    p1: 'Trade',
    p2: 'Sale',
    empty: 'Empty',
    foot_a: 'Total of',
    foot_b: 'goods',
    more: 'No Data',
    Default: 'Default' },

  // 代金券
  voucher: {
    title: 'Voucher',
    navList: ['Unused', 'USED', 'Expired'],
    use: 'Use',
    atime: 'Start Time',
    btime: 'End Time',
    more: 'No Data' },

  // 收货人
  address: {
    consignee: 'Consignee',
    title: 'Address',
    code: 'code',
    Default: 'Default',
    Phone: "Phone" },

  // 设置
  set: {
    title: 'Set',
    clear: 'Clear cache',
    quit: 'Quit',
    check: 'Detection of update',
    version: 'version number',
    modelMsg: 'Are you sure you want to log out',
    hint: 'Clear success' },

  // 我的售后
  sale: {
    title: 'After-sales',
    type: 'Type',
    date: 'Time',
    product: 'Apply',
    send: 'Logistics' },

  // 售后详情
  saleDetail: {
    title: 'Detail',
    loading: 'loading',
    num: 'Number',
    type: 'Type',
    count: 'count',
    status: 'Audit state',
    progress: 'progress',
    information: 'Return information',
    name: 'name',
    code: 'code',
    reason: 'Application reason',
    situation: 'Audit situation',
    picture: 'picture',
    content: 'Are you sure to cancel the after-sale goods?',
    remove: "Remove" },

  // 添加售后
  sale_add: {
    title: 'Apply',
    radioList: [{
      value: '1',
      name: 'Choose',
      checked: false },

    {
      value: '2',
      name: 'Quality',
      checked: false },

    {
      value: '3',
      name: 'Logistics',
      checked: false }],


    hint1: 'Plz Choose type!',
    hint2: 'please enter Barcode',
    hint3: 'Please enter the quantity',
    hint4: "Please enter the reason",
    code: 'Barcode',
    qty: 'Qty',
    reason: 'Reason',
    add: "Add",
    photo: 'Photo',
    submit: 'Submit',
    hint5: 'Are you sure to modify the selection type',
    hint6: 'Item number already exists and cannot be added repeatedly',
    hint7: 'upload successful',
    hint8: 'upload successful',
    hint9: 'Please add after sale goods' },

  // 寄回产品
  send: {
    title: 'Send back',
    submit: 'submit',
    ex: 'Express',
    time: "Time",
    dhl: "Express" },

  // 申请寄回
  addsend: {
    hint1: 'Please declare the after-sale products first',
    hint2: 'Click on the declaration',
    title: 'To apply for return',
    declaration: 'Click on the declaration',
    name: 'Express',
    number: 'Express Number',
    fee: 'Express   fee',
    img: 'Upload pictures ',
    item_no: "Barcode",
    item_name: 'Name',
    qty: 'qty',
    num: 'num',
    submit: 'Submit',
    pla1: "Please enter the Express",
    pla2: "Please enter the Express Number",
    pla3: "Please input freight",
    pla4: "Please add after sale goods",
    pla5: "Please upload photos" } };exports.default = _default;

/***/ }),

/***/ 22:
/*!*******************************!*\
  !*** E:/项萍/熙美订货/common/zh.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cart, _search;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = {
  // 登录页
  login: {
    companyName: '熙美诚品订货系统',
    project: '',
    user: '用户名',
    pass: '密码',
    login: "登录",
    userMsg: "请输入用户名",
    passMsg: '请输入密码',
    history: '历史记录',
    save: '保存用户名' },

  // 商品分类
  categoryList_0: {
    typelist: [{
      id: '02',
      title: '健康美容',
      color: '#FF6F91',
      img: "../../static/home/huazhuang.png" },
    {
      id: '04',
      title: '文体礼品',
      color: '#00C9AD',
      img: "../../static/home/liwu.png" },
    {
      id: '09',
      title: '数码配件',
      color: '#4A9CFF',
      img: "../../static/home/erji_1.png" },
    {
      id: '06',
      title: '精品包饰',
      color: '#FF6960',
      img: "../../static/home/bag.png" },
    {
      id: '05',
      title: '季节产品',
      color: '#996EC3',
      img: "../../static/home/xiezi.png" },
    {
      id: '03',
      title: '饰品系列',
      color: '#FF6960',
      img: "../../static/home/zhubaoshipin.png" },
    {
      id: '01',
      title: '家居百货',
      color: '#4A9CFF',
      img: "../../static/home/beizi.png" },
    {
      id: '07',
      title: '儿童玩具',
      color: '#00C9AD',
      img: "../../static/home/shipin_1.png" },
    {
      id: '08',

      title: '毛绒公仔',
      color: '#FFC125',
      img: "../../static/home/wanju.png" },
    {
      id: '10',
      title: '休闲食品',
      color: '#FF6F91',
      img: "../../static/home/lingshi_2.png" }] },


  // categoryList_0: {
  // 	typelist: [{
  // 		id: '02',
  // 		title: '健康美容',
  // 		color: '#FF82AB',
  // 		img:"../../static/home/huazhuang.png"
  // 	}, {
  // 		id: '04',
  // 		title: '文体礼品',
  // 		color: '#FFD700',
  // 		img:"../../static/home/liwu.png"
  // 	}, {
  // 		id: '09',
  // 		title: '数码配件',
  // 		color: '#9adaff',
  // 		img:"../../static/home/erji_1.png"
  // 	}, {
  // 		id: '06',
  // 		title: '精品包饰',
  // 		color: '#FFD700',
  // 		img:"../../static/home/bag.png"
  // 	}, {
  // 		id: '05',
  // 		title: '季节产品',
  // 		color: '#a8f1a8',
  // 		img:"../../static/home/xiezi.png"
  // 	}, {
  // 		id: '03',
  // 		title: '饰品系列',
  // 		color: '#FF8C69',
  // 		img:"../../static/home/zhubaoshipin.png"
  // 	}, {
  // 		id: '01',
  // 		title: '家居百货',
  // 		color: '#B0E2FF',
  // 		img:"../../static/home/beizi.png"
  // 	}, {
  // 		id: '07',
  // 		title: '儿童玩具',
  // 		color: '#a6eba6',
  // 		img:"../../static/home/shipin_1.png"
  // 	}, {
  // 		id: '08',

  // 		title: '毛绒公仔',
  // 		color: '#FFC125',
  // 		img:"../../static/home/wanju.png"
  // 	}, {
  // 		id: '10',
  // 		title: '休闲食品',
  // 		color: '#ff9769',
  // 		img:"../../static/home/lingshi_2.png"
  // 	}, ],
  // },
  // 商品分类
  categoryList_1: {
    typelist: [{
      id: '22',
      title: '健康美容',
      color: '#FF82AB',
      img: "../../static/home/huazhuang.png" },
    {
      id: '24',
      title: '文体礼品',
      color: '#FFD700',
      img: "../../static/home/liwu.png" },
    {
      id: '29',
      title: '数码配件',
      color: '#9adaff',
      img: "../../static/home/erji_1.png" },
    {
      id: '26',
      title: '精品包饰',
      color: '#FFD700',
      img: "../../static/home/bag.png" },
    {
      id: '25',
      title: '季节产品',
      color: '#a8f1a8',
      img: "../../static/home/xiezi.png" },
    {
      id: '23',
      title: '饰品系列',
      color: '#FF8C69',
      img: "../../static/home/zhubaoshipin.png" },
    {
      id: '21',
      title: '家居百货',
      color: '#B0E2FF',
      img: "../../static/home/beizi.png" },
    {
      id: '27',
      title: '儿童玩具',
      color: '#a6eba6',
      img: "../../static/home/shipin_1.png" },
    {
      id: '28',

      title: '毛绒公仔',
      color: '#FFC125',
      img: "../../static/home/wanju.png" },
    {
      id: '20',
      title: '休闲食品',
      color: '#ff9769',
      img: "../../static/home/lingshi_2.png" }] },


  //主页
  index: {
    news: '新品上线',
    rep: '最近补货',
    sell: '地区最畅销商品',
    dis: '1折特价清仓（不退换）',
    sala: '地区滞销',
    like: '猜你喜欢',
    search: "请输入...",
    tab1: '主页',
    tab2: '分类',
    tab3: '购物车',
    tab4: '我的',
    foot: '已经到底啦',
    loadmsg: '正在加载...',
    all: '查看全部',
    p1: '批',
    p2: '售',
    p3: '打折',
    loginmsg: '请登录后操作',
    contentdown: "正在加载...",
    contentrefresh: "正在加载...",
    contentnomore: "没有更多数据啦",
    cancel: '取消',
    confirm: '确定',
    msg1: '添加成功',
    msg2: '删除成功',
    msg3: '提交成功',
    msg4: '收藏成功',
    msg5: '收藏成功',
    address: '当前位置在' },


  // 个人中心
  my: {
    status: '普通用户',
    user: '用户',
    vip: '熙美SVIP',
    info_a1: '余额',
    info_a2: "代金券",
    info_a3: '积分',
    info_b1: '我的库存',
    info_b2: '我的销售',
    info_b3: '售后服务',
    info_b4: '技术支持',
    info_c1: '我的订单',
    info_c2: '我的收藏',
    info_c3: '我的代金券',
    info_c4: '地址管理',
    info_c5: '设置' },

  // 购物车
  cart: (_cart = {
    foot: '已经到底啦',
    title: '购物车',
    p1: '共有',
    p2: '款',
    p3: '件宝贝',
    Sort: "排序:",
    amount: '数量',
    empty: '清空',
    select: '请选择代金券',
    all: '总额',
    go: '去结算',
    bind: '确定',
    Default: '默认' }, _defineProperty(_cart, "all",
  '全部'), _defineProperty(_cart, "hint",
  '清空购物车?'), _defineProperty(_cart, "regulate",
  '管理'), _defineProperty(_cart, "sheet",
  ['数量由高到低', '数量由低到高', '清空购物车']), _defineProperty(_cart, "emptyText",
  '空空如也 随便逛逛'), _defineProperty(_cart, "hint2",
  '结算购物车?'), _defineProperty(_cart, "voucher",
  '代金券'), _defineProperty(_cart, "use",
  '无门槛使用'), _defineProperty(_cart, "uesText",
  '选中'), _defineProperty(_cart, "hint3",
  "右滑查看商品分类"), _defineProperty(_cart, "type",
  "分类"), _cart),



  //商品详情
  details: {
    title: '商品详情',
    price_a: '批发价',
    price_b: '销售价',
    type: "购买类型",
    select: "已选",
    Default: '默认',
    code: '商品条码',
    spec: '规格',
    size: '尺寸',
    weight: '重量',
    Material: '材质',
    home: '首页',
    cart: '购物车',
    like: '收藏',
    submit: '完成',
    add: '加入购物车',
    rec: '同类推荐',
    features: '产品特点',
    usage: '使用方法',
    notice: '注意事项',
    p3: '打折',
    empty: '空',
    p1: '批',
    p2: '售' },

  // 商品分类
  list: {
    Default: '默认',
    price: '价格',
    page: '页',
    title: "分类",
    p1: '批',
    p2: '售',
    p3: '打折' },


  // 库存
  repertory: {
    title: '库存查询',
    select: '选择',
    type: '选择类型',
    all: '总库存',
    code: '条码',
    name: '名称',
    hint: '目前店铺暂无此商品',
    proportion: '门店总库存金额占比',
    submit: '提交',
    time: '截止时间',
    totalMoney: '总金额',
    input: '请输入商品条码',
    key: '请输入关键字',
    items: [{
      value: 'c',
      name: '总库存' },
    {
      value: 'a',
      name: '条码' },
    {
      value: 'b',
      name: '名称' }],

    store: '库存',
    money: '金额',
    num: '数量',
    price: '单价',
    total: '合计',
    pcs: '件',
    category: ['家居百货', '健康美容', '饰品系列', '文体礼品', '季节产品', '精品包饰', '儿童玩具', '毛绒公仔', '数码配件', '休闲食品', '物料耗材'],
    p1: "请选择查询类型",
    p2: '请输入商品条码',
    p3: '请输入商品名称' },

  // 技术支持
  technology: {
    Remote: '远程',
    title: '技术支持',
    password: '远程密码',
    qq: '联系QQ',
    telephone: '联系电话',
    problem: '问题描述',
    upload: '上传照片',
    submit: '提交',
    inputId: '请输入远程ID',
    inputPass: '请输入远程密码',
    inputQQ: '请输入联系QQ',
    inputTel: '请输入联系电话',
    inputProblem: '请输入问题描述',
    inputImg: '请上传图片' },


  // 我的销售
  market: {
    title: '我的销售',
    code: '门店编码',
    time: '时间范围',
    zhi: '至',
    chart: '门店总销售图表',
    bills: '实时账单',
    tq: '总数量',
    ts: '总零售额',
    tc: '总成本额',
    tg: '总毛利额',
    tt: '总客流量',
    tp: '总客单价',
    details: '查看详情',
    hint: '暂无数据',
    submit: '查询',
    num: '数量',
    money: '金额',
    category: ['家居百货', '健康美容', '饰品系列', '文体礼品', '季节产品', '精品包饰', '儿童玩具', '毛绒公仔', '数码配件', '休闲食品', '物料耗材'],
    loading: '正在加载中...' },

  // 销售详情
  market_data: {
    title: '销售明细',
    Default: '默认',
    tq: '数量',
    ts: '零售额',
    tc: '成本额',
    tg: '毛利额',
    tt: '客流量',
    tp: '客单价',
    readTime: '实时账单',
    weekDay: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"] },


  // 搜索
  search: (_search = {
    title: '搜索',
    inputpl: '请输入关键字...',
    p1: "请输入关键字",
    recommend: '推荐',
    Default: '默认',
    price: '价格',
    page: '页' }, _defineProperty(_search, "p1",
  '批'), _defineProperty(_search, "p2",
  '售'), _defineProperty(_search, "more",
  '没有更多数据啦'), _defineProperty(_search, "results",
  '结果'), _defineProperty(_search, "recList_a",
  [{
    value: "口罩",
    id: '口罩' },
  {
    value: "香水",
    id: '香水' },
  {
    value: "耳机",
    id: '耳机' },
  {
    value: "毛巾",
    id: '毛巾' },
  {
    value: "数据线",
    id: '数据线' },
  {
    value: "拖鞋",
    id: '拖鞋' }]), _defineProperty(_search, "recList_b",

  [{
    value: "新品上线" },
  {
    value: "中国仓产品" }]), _search),


  // 订单列表
  order_list: {
    title: "我的订单",
    navList: ['待确定订单', '已确定订单'],
    priceAll: "订单总额",
    time: '提交时间',
    more: '没有更多数据啦',
    order: '订单号' },

  // 订单详情
  order_data: {
    title: "订单详情",
    priceAll: "订单总额",
    code: '订单条码',
    item_no: '商品条码',
    item_num: '商品总额',
    hint: '订单已提交,等待客服确认',
    pcs: '件' },

  // 收藏
  collect: {
    title: "我的收藏",
    all: '全部',
    item_no: '商品条码',
    p1: '批',
    p2: '售',
    empty: '清空',
    foot_a: '收藏夹共有',
    foot_b: '款商品',
    more: '没有更多数据啦',
    Default: '默认' },

  // 代金券
  voucher: {
    title: '代金券',
    navList: ['未使用', '已使用', '已过期'],
    use: '使用',
    atime: '开始时间',
    btime: '结束时间',
    more: '没有更多数据啦' },

  // 收货人
  address: {
    consignee: '收货人',
    title: '地址',
    code: '编号',
    Default: '默认',
    Phone: "电话" },

  // 设置
  set: {
    title: '设置',
    clear: '清除缓存',
    quit: '退出',
    check: '检测更新',
    version: '当前版本号',
    modelMsg: '确定要退出登录吗',
    hint: '清除成功' },

  // 我的售后
  sale: {
    title: '我的售后',
    type: '售后类型',
    date: '申请日期',
    product: '申报产品',
    send: '寄回产品' },

  // 售后详情
  saleDetail: {
    title: '售后详情',
    loading: '正在加载中...',
    num: '售后编号',
    type: '审核类型',
    count: '数量',
    status: '审核状态',
    progress: '进度',
    information: '退货信息',
    name: '商品名称',
    code: '商品条码',
    reason: '申请原因',
    situation: '审核情况',
    picture: '质量图片',
    content: '您确定撤销售后商品？',
    success: '撤销成功',
    remove: "撤销" },

  // 添加售后
  sale_add: {
    title: '添加售后',
    radioList: [{
      value: '1',
      name: '调换货物',
      checked: false },

    {
      value: '2',
      name: '质量问题',
      checked: false },

    {
      value: '3',
      name: '物流破损',
      checked: false }],


    hint1: '请选择售后类型!',
    hint2: '请输入商品条码',
    hint3: '请输入数量',
    hint4: "请输入申请原因",
    hint5: '您确定修改选择类型吗',
    hint6: '货号已存在,不能重复添加',
    hint7: '上传成功',
    hint8: '添加成功',
    hint9: '请添加售后商品',
    code: '商品条码',
    qty: '数量',
    reason: '申请原因',
    add: "添加商品",
    photo: '质量图片',
    submit: '提交' },


  // 寄回产品
  send: {
    title: '寄回产品',
    submit: '我要寄回',
    ex: '快递',
    time: "寄回时间",
    dhl: "快递公司" },

  // 申请寄回
  addsend: {
    hint1: '请先申报售后产品',
    hint2: '点击申报',
    title: '申请寄回',
    declaration: '点击申报',
    name: '快递公司',
    number: '快递单号',
    fee: '快递运费',
    img: '上传面单',
    item_no: "商品编号",
    item_name: '商品名称',
    qty: '申报数',
    num: '实退数',
    submit: '提交',
    pla1: "请输入物流公司",
    pla2: "请输入物流单号",
    pla3: "请输入运费",
    pla4: "请添加售后商品",
    pla5: "请上传照片" } };exports.default = _default;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ 4:
/*!*****************************!*\
  !*** E:/项萍/熙美订货/pages.json ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 419:
/*!*************************************************************!*\
  !*** E:/项萍/熙美订货/node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*!
                                                                                                      * vue-i18n v8.14.1 
                                                                                                      * (c) 2019 kazuya kawaguchi
                                                                                                      * Released under the MIT License.
                                                                                                      */
/*  */

/**
        * constants
        */

var numberFormatKeys = [
'style',
'currency',
'currencyDisplay',
'useGrouping',
'minimumIntegerDigits',
'minimumFractionDigits',
'maximumFractionDigits',
'minimumSignificantDigits',
'maximumSignificantDigits',
'localeMatcher',
'formatMatcher'];


/**
                   * utilities
                   */

function warn(msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error(msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

function isNull(val) {
  return val === null || val === undefined;
}

function parseArgs() {
  var args = [],len = arguments.length;
  while (len--) {args[len] = arguments[len];}

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || Array.isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || Array.isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params };
}

function looseClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function merge(target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = void 0;
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output;
}

function looseEqual(a, b) {
  if (a === b) {return true;}
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

/*  */

function extend(Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get() {return this._i18n;} });

  }

  Vue.prototype.$t = function (key) {
    var values = [],len = arguments.length - 1;
    while (len-- > 0) {values[len] = arguments[len + 1];}

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [key, i18n.locale, i18n._getMessages(), this].concat(values));
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [],len = arguments.length - 2;
    while (len-- > 0) {values[len] = arguments[len + 2];}

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [key, i18n.locale, i18n._getMessages(), this, choice].concat(values));
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale);
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [],len = arguments.length - 1;
    while (len-- > 0) {args[len] = arguments[len + 1];}
    return (ref = this.$i18n).d.apply(ref, [value].concat(args));
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [],len = arguments.length - 1;
    while (len-- > 0) {args[len] = arguments[len + 1];}
    return (ref = this.$i18n).n.apply(ref, [value].concat(args));
  };
}

/*  */

var mixin = {
  beforeCreate: function beforeCreate() {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = {};
            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });
            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }
        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
      } else if (isPlainObject(options.i18n)) {
        // component local i18n
        if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
          options.i18n.root = this.$root;
          options.i18n.formatter = this.$root.$i18n.formatter;
          options.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
          options.i18n.formatFallbackMessages = this.$root.$i18n.formatFallbackMessages;
          options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
          options.i18n.silentFallbackWarn = this.$root.$i18n.silentFallbackWarn;
          options.i18n.pluralizationRules = this.$root.$i18n.pluralizationRules;
          options.i18n.preserveDirectiveContent = this.$root.$i18n.preserveDirectiveContent;
        }

        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages$1 = {};
            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });
            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }

        var ref = options.i18n;
        var sharedMessages = ref.sharedMessages;
        if (sharedMessages && isPlainObject(sharedMessages)) {
          options.i18n.messages = merge(options.i18n.messages, sharedMessages);
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
    }
  },

  beforeMount: function beforeMount() {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },

  beforeDestroy: function beforeDestroy() {
    if (!this._i18n) {return;}

    var self = this;
    this.$nextTick(function () {
      if (self._subscribing) {
        self._i18n.unsubscribeDataChanging(self);
        delete self._subscribing;
      }

      if (self._i18nWatcher) {
        self._i18nWatcher();
        self._i18n.destroyVM();
        delete self._i18nWatcher;
      }

      if (self._localeWatcher) {
        self._localeWatcher();
        delete self._localeWatcher;
      }

      self._i18n = null;
    });
  } };


/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: String },

    path: {
      type: String,
      required: true },

    locale: {
      type: String },

    places: {
      type: [Array, Object] } },


  render: function render(h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return;
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
    path,
    locale,
    onlyHasDefaultPlace(params) || places ?
    useLegacyPlaces(params.default, places) :
    params);


    var tag = props.tag || 'span';
    return tag ? h(tag, data, children) : children;
  } };


function onlyHasDefaultPlace(params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') {return false;}
  }
  return Boolean(prop);
}

function useLegacyPlaces(children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) {return params;}

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== '';
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if ( true && everyPlace) {
    warn('`place` attribute is deprecated in next major version. Please switch to Vue slots.');
  }

  return children.reduce(
  everyPlace ? assignChildPlace : assignChildIndex,
  params);

}

function createParamsFromPlaces(places) {
  if (true) {
    warn('`places` prop is deprecated in next major version. Please switch to Vue slots.');
  }

  return Array.isArray(places) ?
  places.reduce(assignChildIndex, {}) :
  Object.assign({}, places);
}

function assignChildPlace(params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params;
}

function assignChildIndex(params, child, index) {
  params[index] = child;
  return params;
}

function vnodeHasPlaceAttribute(vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place);
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'span' },

    value: {
      type: Number,
      required: true },

    format: {
      type: [String, Object] },

    locale: {
      type: String } },


  render: function render(h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return null;
    }

    var key = null;
    var options = null;

    if (typeof props.format === 'string') {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (numberFormatKeys.includes(prop)) {
          return Object.assign({}, acc, (obj = {}, obj[prop] = props.format[prop], obj));
        }
        return acc;
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot((obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj)) : part.value;
    });

    return h(props.tag, {
      attrs: data.attrs,
      'class': data['class'],
      staticClass: data.staticClass },
    values);
  } };


/*  */

function bind(el, binding, vnode) {
  if (!assert(el, vnode)) {return;}

  t(el, binding, vnode);
}

function update(el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) {return;}

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
  looseEqual(binding.value, binding.oldValue) &&
  looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale))) {return;}

  t(el, binding, vnode);
}

function unbind(el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return;
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert(el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false;
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false;
  }

  return true;
}

function localeEqual(el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale;
}

function t(el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return;
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return;
  }

  var vm = vnode.context;
  if (choice) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [path, choice].concat(makeParams(locale, args)));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [path].concat(makeParams(locale, args)));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue(value) {
  var path;
  var locale;
  var args;
  var choice;

  if (typeof value === 'string') {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice };
}

function makeParams(locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params;
}

var Vue;

function install(_Vue) {
  /* istanbul ignore if */
  if ( true && install.installed && _Vue === Vue) {
    warn('already installed.');
    return;
  }
  install.installed = true;

  Vue = _Vue;

  var version = Vue.version && Number(Vue.version.split('.')[0]) || -1;
  /* istanbul ignore if */
  if ( true && version < 2) {
    warn("vue-i18n (" + install.version + ") need to use Vue 2.0 or later (Vue: " + Vue.version + ").");
    return;
  }

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined ?
    parentVal :
    childVal;
  };
}

/*  */

var BaseFormatter = function BaseFormatter() {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate(message, values) {
  if (!values) {
    return [message];
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values);
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse(format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var _char = format[position++];
    if (_char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      _char = format[position++];
      while (_char !== undefined && _char !== '}') {
        sub += _char;
        _char = format[position++];
      }
      var isClosed = _char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    } else if (_char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[position] !== '{') {
        text += _char;
      }
    } else {
      text += _char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens;
}

function compile(tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {return compiled;}

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            warn("Type of token '" + token.type + "' and format of value '" + mode + "' don't match!");
          }
        }
        break;
      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }

  return compiled;
}

/*  */

/**
        *  Path parser
        *  - Inspired:
        *    Vue.js Path parser
        */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH] };


pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH] };


pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND] };


pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH] };


pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND] };


pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND] };


pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND] };


/**
                                        * Check if an expression is a literal value.
                                        */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
   * Strip quotes from a string
   */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ?
  str.slice(1, -1) :
  str;
}

/**
   * Determine the type of a character in a keypath.
   */

function getPathCharType(ch) {
  if (ch === undefined || ch === null) {return 'eof';}

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch;

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident';

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029: // Paragraph Separator
      return 'ws';}


  return 'ident';
}

/**
   * Format a subPath, return its plain form if it is
   * a literal string or number. Otherwise prepend the
   * dynamic indicator (*).
   */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {return false;}

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
   * Parse a string path into an array of segments
   */

function parse$1(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) {return false;}
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" ||
    mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ?
      c :
      newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      return keys;
    }
  }
}





var I18nPath = function I18nPath() {
  this._cache = Object.create(null);
};

/**
    * External parse that check for a cache hit first
    */
I18nPath.prototype.parsePath = function parsePath(path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || [];
};

/**
    * Get path value from path string
    */
I18nPath.prototype.getPathValue = function getPathValue(obj, path) {
  if (!isObject(obj)) {return null;}

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null;
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        return null;
      }
      last = value;
      i++;
    }

    return last;
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var formatters = {
  'upper': function upper(str) {return str.toLocaleUpperCase();},
  'lower': function lower(str) {return str.toLocaleLowerCase();} };


var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined ?
  true :
  !!options.fallbackRoot;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined ?
  false :
  !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined ?
  false :
  options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined ?
  false :
  !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined ?
  false :
  !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';

  this._exist = function (message, key) {
    if (!message || !key) {return false;}
    if (!isNull(this$1._path.getPathValue(message, key))) {return true;}
    // fallback for flat key
    if (message[key]) {return true;}
    return false;
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats });

};

var prototypeAccessors = { vm: { configurable: true }, messages: { configurable: true }, dateTimeFormats: { configurable: true }, numberFormats: { configurable: true }, availableLocales: { configurable: true }, locale: { configurable: true }, fallbackLocale: { configurable: true }, formatFallbackMessages: { configurable: true }, missing: { configurable: true }, formatter: { configurable: true }, silentTranslationWarn: { configurable: true }, silentFallbackWarn: { configurable: true }, preserveDirectiveContent: { configurable: true }, warnHtmlInMessage: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage(locale, level, message) {
  var paths = [];

  var fn = function fn(level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (Array.isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push("[" + index + "]");
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push("[" + index + "]");
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (typeof message === 'string') {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + paths.join('') + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM(data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM() {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging(vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging(vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData() {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;
    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, { deep: true });
};

VueI18n.prototype.watchLocale = function watchLocale() {
  /* istanbul ignore if */
  if (!this._sync || !this._root) {return null;}
  var target = this._vm;
  return this._root.$i18n.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, { immediate: true });
};

prototypeAccessors.vm.get = function () {return this._vm;};

prototypeAccessors.messages.get = function () {return looseClone(this._getMessages());};
prototypeAccessors.dateTimeFormats.get = function () {return looseClone(this._getDateTimeFormats());};
prototypeAccessors.numberFormats.get = function () {return looseClone(this._getNumberFormats());};
prototypeAccessors.availableLocales.get = function () {return Object.keys(this.messages).sort();};

prototypeAccessors.locale.get = function () {return this._vm.locale;};
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () {return this._vm.fallbackLocale;};
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () {return this._formatFallbackMessages;};
prototypeAccessors.formatFallbackMessages.set = function (fallback) {this._formatFallbackMessages = fallback;};

prototypeAccessors.missing.get = function () {return this._missing;};
prototypeAccessors.missing.set = function (handler) {this._missing = handler;};

prototypeAccessors.formatter.get = function () {return this._formatter;};
prototypeAccessors.formatter.set = function (formatter) {this._formatter = formatter;};

prototypeAccessors.silentTranslationWarn.get = function () {return this._silentTranslationWarn;};
prototypeAccessors.silentTranslationWarn.set = function (silent) {this._silentTranslationWarn = silent;};

prototypeAccessors.silentFallbackWarn.get = function () {return this._silentFallbackWarn;};
prototypeAccessors.silentFallbackWarn.set = function (silent) {this._silentFallbackWarn = silent;};

prototypeAccessors.preserveDirectiveContent.get = function () {return this._preserveDirectiveContent;};
prototypeAccessors.preserveDirectiveContent.set = function (preserve) {this._preserveDirectiveContent = preserve;};

prototypeAccessors.warnHtmlInMessage.get = function () {return this._warnHtmlInMessage;};
prototypeAccessors.warnHtmlInMessage.set = function (level) {
  var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

VueI18n.prototype._getMessages = function _getMessages() {return this._vm.messages;};
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats() {return this._vm.dateTimeFormats;};
VueI18n.prototype._getNumberFormats = function _getNumberFormats() {return this._vm.numberFormats;};

VueI18n.prototype._warnDefault = function _warnDefault(locale, key, result, vm, values) {
  if (!isNull(result)) {return result;}
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (typeof missingRet === 'string') {
      return missingRet;
    }
  } else {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(
      "Cannot translate the value of keypath '" + key + "'. " +
      'Use the value of keypath as default.');

    }
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, 'string', parsedArgs.params, key);
  } else {
    return key;
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot(val) {
  return !val && !isNull(this._root) && this._fallbackRoot;
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn(key) {
  return this._silentFallbackWarn instanceof RegExp ?
  this._silentFallbackWarn.test(key) :
  this._silentFallbackWarn;
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback(locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale);
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn(key) {
  return this._silentTranslationWarn instanceof RegExp ?
  this._silentTranslationWarn.test(key) :
  this._silentTranslationWarn;
};

VueI18n.prototype._interpolate = function _interpolate(
locale,
message,
key,
host,
interpolateMode,
values,
visitedLinkStack)
{
  if (!message) {return null;}

  var pathRet = this._path.getPathValue(message, key);
  if (Array.isArray(pathRet) || isPlainObject(pathRet)) {return pathRet;}

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (typeof ret !== 'string') {
        if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn("Value of key '" + key + "' is not a string!");
        }
        return null;
      }
    } else {
      return null;
    }
  } else {
    /* istanbul ignore else */
    if (typeof pathRet === 'string') {
      ret = pathRet;
    } else {
      if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn("Value of key '" + key + "' is not a string!");
      }
      return null;
    }
  }

  // Check for the existence of links within the translated string
  if (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key);
};

VueI18n.prototype._link = function _link(
locale,
message,
str,
host,
interpolateMode,
values,
visitedLinkStack)
{
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue;
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
    var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (visitedLinkStack.includes(linkPlaceholder)) {
      if (true) {
        warn("Circular reference found. \"" + link + "\" is already visited in the chain of " + visitedLinkStack.reverse().join(' <- '));
      }
      return ret;
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
    locale, message, linkPlaceholder, host,
    interpolateMode === 'raw' ? 'string' : interpolateMode,
    interpolateMode === 'raw' ? undefined : values,
    visitedLinkStack);


    if (this._isFallbackRoot(translated)) {
      if ( true && !this._isSilentTranslationWarn(linkPlaceholder)) {
        warn("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale.");
      }
      /* istanbul ignore if */
      if (!this._root) {throw Error('unexpected error');}
      var root = this._root.$i18n;
      translated = root._translate(
      root._getMessages(), root.locale, root.fallbackLocale,
      linkPlaceholder, host, interpolateMode, values);

    }
    translated = this._warnDefault(
    locale, linkPlaceholder, translated, host,
    Array.isArray(values) ? values : [values]);

    if (formatters.hasOwnProperty(formatterName)) {
      translated = formatters[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret;
};

VueI18n.prototype._render = function _render(message, interpolateMode, values, path) {
  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' ? ret.join('') : ret;
};

VueI18n.prototype._translate = function _translate(
messages,
locale,
fallback,
key,
host,
interpolateMode,
args)
{
  var res =
  this._interpolate(locale, messages[locale], key, host, interpolateMode, args, [key]);
  if (!isNull(res)) {return res;}

  res = this._interpolate(fallback, messages[fallback], key, host, interpolateMode, args, [key]);
  if (!isNull(res)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to translate the keypath '" + key + "' with '" + fallback + "' locale.");
    }
    return res;
  } else {
    return null;
  }
};

VueI18n.prototype._t = function _t(key, _locale, messages, host) {
  var ref;

  var values = [],len = arguments.length - 4;
  while (len-- > 0) {values[len] = arguments[len + 4];}
  if (!key) {return '';}

  var parsedArgs = parseArgs.apply(void 0, values);
  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
  messages, locale, this.fallbackLocale, key,
  host, 'string', parsedArgs.params);

  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to translate the keypath '" + key + "' with root locale.");
    }
    /* istanbul ignore if */
    if (!this._root) {throw Error('unexpected error');}
    return (ref = this._root).$t.apply(ref, [key].concat(values));
  } else {
    return this._warnDefault(locale, key, ret, host, values);
  }
};

VueI18n.prototype.t = function t(key) {
  var ref;

  var values = [],len = arguments.length - 1;
  while (len-- > 0) {values[len] = arguments[len + 1];}
  return (ref = this)._t.apply(ref, [key, this.locale, this._getMessages(), null].concat(values));
};

VueI18n.prototype._i = function _i(key, locale, messages, host, values) {
  var ret =
  this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn("Fall back to interpolate the keypath '" + key + "' with root locale.");
    }
    if (!this._root) {throw Error('unexpected error');}
    return this._root.$i18n.i(key, locale, values);
  } else {
    return this._warnDefault(locale, key, ret, host, [values]);
  }
};

VueI18n.prototype.i = function i(key, locale, values) {
  /* istanbul ignore if */
  if (!key) {return '';}

  if (typeof locale !== 'string') {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values);
};

VueI18n.prototype._tc = function _tc(
key,
_locale,
messages,
host,
choice)
{
  var ref;

  var values = [],len = arguments.length - 5;
  while (len-- > 0) {values[len] = arguments[len + 5];}
  if (!key) {return '';}
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [key, _locale, messages, host].concat(values)), choice);
};

VueI18n.prototype.fetchChoice = function fetchChoice(message, choice) {
  /* istanbul ignore if */
  if (!message && typeof message !== 'string') {return null;}
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) {return message;}
  return choices[choice].trim();
};

/**
    * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
    * @param choicesLength {number} an overall amount of available choices
    * @returns a final choice index
   */
VueI18n.prototype.getChoiceIndex = function getChoiceIndex(choice, choicesLength) {
  // Default (old) getChoiceIndex implementation - english-compatible
  var defaultImpl = function defaultImpl(_choice, _choicesLength) {
    _choice = Math.abs(_choice);

    if (_choicesLength === 2) {
      return _choice ?
      _choice > 1 ?
      1 :
      0 :
      1;
    }

    return _choice ? Math.min(_choice, 2) : 0;
  };

  if (this.locale in this.pluralizationRules) {
    return this.pluralizationRules[this.locale].apply(this, [choice, choicesLength]);
  } else {
    return defaultImpl(choice, choicesLength);
  }
};

VueI18n.prototype.tc = function tc(key, choice) {
  var ref;

  var values = [],len = arguments.length - 2;
  while (len-- > 0) {values[len] = arguments[len + 2];}
  return (ref = this)._tc.apply(ref, [key, this.locale, this._getMessages(), null, choice].concat(values));
};

VueI18n.prototype._te = function _te(key, locale, messages) {
  var args = [],len = arguments.length - 3;
  while (len-- > 0) {args[len] = arguments[len + 3];}

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key);
};

VueI18n.prototype.te = function te(key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale);
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage(locale) {
  return looseClone(this._vm.messages[locale] || {});
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage(locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
    if (this._warnHtmlInMessage === 'error') {return;}
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage(locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
    if (this._warnHtmlInMessage === 'error') {return;}
  }
  this._vm.$set(this._vm.messages, locale, merge(this._vm.messages[locale] || {}, message));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat(locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {});
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat(locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat(locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime(
value,
locale,
fallback,
dateTimeFormats,
key)
{
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to '" + fallback + "' datetime formats from '" + locale + "' datetime formats.");
    }
    _locale = fallback;
    formats = dateTimeFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null;
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value);
  }
};

VueI18n.prototype._d = function _d(value, locale, key) {
  /* istanbul ignore if */
  if ( true && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
    return '';
  }

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value);
  }

  var ret =
  this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to datetime localization of root: key '" + key + "'.");
    }
    /* istanbul ignore if */
    if (!this._root) {throw Error('unexpected error');}
    return this._root.$i18n.d(value, key, locale);
  } else {
    return ret || '';
  }
};

VueI18n.prototype.d = function d(value) {
  var args = [],len = arguments.length - 1;
  while (len-- > 0) {args[len] = arguments[len + 1];}

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._d(value, locale, key);
};

VueI18n.prototype.getNumberFormat = function getNumberFormat(locale) {
  return looseClone(this._vm.numberFormats[locale] || {});
};

VueI18n.prototype.setNumberFormat = function setNumberFormat(locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat(locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter(
value,
locale,
fallback,
numberFormats,
key,
options)
{
  var _locale = locale;
  var formats = numberFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to '" + fallback + "' number formats from '" + locale + "' number formats.");
    }
    _locale = fallback;
    formats = numberFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null;
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter;
  }
};

VueI18n.prototype._n = function _n(value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
    }
    return '';
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value);
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to number localization of root: key '" + key + "'.");
    }
    /* istanbul ignore if */
    if (!this._root) {throw Error('unexpected error');}
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options));
  } else {
    return ret || '';
  }
};

VueI18n.prototype.n = function n(value) {
  var args = [],len = arguments.length - 1;
  while (len-- > 0) {args[len] = arguments[len + 1];}

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
        var obj;

        if (numberFormatKeys.includes(key)) {
          return Object.assign({}, acc, (obj = {}, obj[key] = args[0][key], obj));
        }
        return acc;
      }, null);
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options);
};

VueI18n.prototype._ntp = function _ntp(value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
    }
    return [];
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value);
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn("Fall back to format number to parts of root: key '" + key + "' .");
    }
    /* istanbul ignore if */
    if (!this._root) {throw Error('unexpected error');}
    return this._root.$i18n._ntp(value, locale, key, options);
  } else {
    return ret || [];
  }
};

Object.defineProperties(VueI18n.prototype, prototypeAccessors);

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get() {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined' };

    }

    return availabilities;
  } });


VueI18n.install = install;
VueI18n.version = '8.14.1';var _default =

VueI18n;exports.default = _default;

/***/ }),

/***/ 420:
/*!****************************************************************!*\
  !*** E:/项萍/熙美订货/node_modules/vue-lazyload/vue-lazyload.esm.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*!
                                                                                                      * Vue-Lazyload.js v1.3.3
                                                                                                      * (c) 2019 Awe <hilongjw@gmail.com>
                                                                                                      * Released under the MIT License.
                                                                                                      */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function classCallCheck(instance, Constructor) {
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

/*!
      * is-primitive <https://github.com/jonschlinkert/is-primitive>
      *
      * Copyright (c) 2014-2015, Jon Schlinkert.
      * Licensed under the MIT License.
      */

// see http://jsperf.com/testing-value-is-primitive/7

var isPrimitive = function isPrimitive(value) {
  return value == null || typeof value !== 'function' && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object';
};

/*!
    * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
    *
    * Copyright (c) 2015, Jon Schlinkert.
    * Licensed under the MIT License.
    */

var assignSymbols = function assignSymbols(receiver, objects) {
  if (receiver === null || typeof receiver === 'undefined') {
    throw new TypeError('expected first argument to be an object.');
  }

  if (typeof objects === 'undefined' || typeof Symbol === 'undefined') {
    return receiver;
  }

  if (typeof Object.getOwnPropertySymbols !== 'function') {
    return receiver;
  }

  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var target = Object(receiver);
  var len = arguments.length,
  i = 0;

  while (++i < len) {
    var provider = Object(arguments[i]);
    var names = Object.getOwnPropertySymbols(provider);

    for (var j = 0; j < names.length; j++) {
      var key = names[j];

      if (isEnumerable.call(provider, key)) {
        target[key] = provider[key];
      }
    }
  }
  return target;
};

var toString = Object.prototype.toString;

/**
                                           * Get the native `typeof` a value.
                                           *
                                           * @param  {*} `val`
                                           * @return {*} Native javascript type
                                           */

var kindOf = function kindOf(val) {
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);

  // primitivies
  if (type === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (type === 'string' || val instanceof String) {
    return 'string';
  }
  if (type === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (type === 'function' || val instanceof Function) {
    if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {
      return 'generatorfunction';
    }
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  if (type === '[object Map Iterator]') {
    return 'mapiterator';
  }
  if (type === '[object Set Iterator]') {
    return 'setiterator';
  }
  if (type === '[object String Iterator]') {
    return 'stringiterator';
  }
  if (type === '[object Array Iterator]') {
    return 'arrayiterator';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

/**
    * If you need to support Safari 5-7 (8-10 yr-old browser),
    * take a look at https://github.com/feross/is-buffer
    */

function isBuffer(val) {
  return val.constructor && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

function assign(target /*, objects*/) {
  target = target || {};
  var len = arguments.length,
  i = 0;
  if (len === 1) {
    return target;
  }
  while (++i < len) {
    var val = arguments[i];
    if (isPrimitive(target)) {
      target = val;
    }
    if (isObject$1(val)) {
      extend(target, val);
    }
  }
  return target;
}

/**
   * Shallow extend
   */

function extend(target, obj) {
  assignSymbols(target, obj);

  for (var key in obj) {
    if (key !== '__proto__' && hasOwn(obj, key)) {
      var val = obj[key];
      if (isObject$1(val)) {
        if (kindOf(target[key]) === 'undefined' && kindOf(val) === 'function') {
          target[key] = val;
        }
        target[key] = assign(target[key] || {}, val);
      } else {
        target[key] = val;
      }
    }
  }
  return target;
}

/**
   * Returns true if the object is a plain object or a function.
   */

function isObject$1(obj) {
  return kindOf(obj) === 'object' || kindOf(obj) === 'function';
}

/**
   * Returns true if the given `key` is an own property of `obj`.
   */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
   * Expose `assign`
   */

var assignDeep = assign;

var inBrowser = typeof window !== 'undefined';
var hasIntersectionObserver = checkIntersectionObserver();

function checkIntersectionObserver() {
  if (inBrowser && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function get$$1() {
          return this.intersectionRatio > 0;
        } });

    }
    return true;
  }
  return false;
}

var modeType = {
  event: 'event',
  observer: 'observer'

  // CustomEvent polyfill
};var CustomEvent = function () {
  if (!inBrowser) return;
  if (typeof window.CustomEvent === 'function') return window.CustomEvent;
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  return CustomEvent;
}();

function remove(arr, item) {
  if (!arr.length) return;
  var index = arr.indexOf(item);
  if (index > -1) return arr.splice(index, 1);
}

function some(arr, fn) {
  var has = false;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (fn(arr[i])) {
      has = true;
      break;
    }
  }
  return has;
}

function getBestSelectionFromSrcset(el, scale) {
  if (el.tagName !== 'IMG' || !el.getAttribute('data-srcset')) return;

  var options = el.getAttribute('data-srcset');
  var result = [];
  var container = el.parentNode;
  var containerWidth = container.offsetWidth * scale;

  var spaceIndex = void 0;
  var tmpSrc = void 0;
  var tmpWidth = void 0;

  options = options.trim().split(',');

  options.map(function (item) {
    item = item.trim();
    spaceIndex = item.lastIndexOf(' ');
    if (spaceIndex === -1) {
      tmpSrc = item;
      tmpWidth = 999998;
    } else {
      tmpSrc = item.substr(0, spaceIndex);
      tmpWidth = parseInt(item.substr(spaceIndex + 1, item.length - spaceIndex - 2), 10);
    }
    result.push([tmpWidth, tmpSrc]);
  });

  result.sort(function (a, b) {
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      if (b[1].indexOf('.webp', b[1].length - 5) !== -1) {
        return 1;
      }
      if (a[1].indexOf('.webp', a[1].length - 5) !== -1) {
        return -1;
      }
    }
    return 0;
  });
  var bestSelectedSrc = '';
  var tmpOption = void 0;

  for (var i = 0; i < result.length; i++) {
    tmpOption = result[i];
    bestSelectedSrc = tmpOption[1];
    var next = result[i + 1];
    if (next && next[0] < containerWidth) {
      bestSelectedSrc = tmpOption[1];
      break;
    } else if (!next) {
      bestSelectedSrc = tmpOption[1];
      break;
    }
  }

  return bestSelectedSrc;
}

function find(arr, fn) {
  var item = void 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (fn(arr[i])) {
      item = arr[i];
      break;
    }
  }
  return item;
}

var getDPR = function getDPR() {
  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return inBrowser ? window.devicePixelRatio || scale : scale;
};

function supportWebp() {
  if (!inBrowser) return false;

  var support = true;
  var d = document;

  try {
    var el = d.createElement('object');
    el.type = 'image/webp';
    el.style.visibility = 'hidden';
    el.innerHTML = '!';
    d.body.appendChild(el);
    support = !el.offsetWidth;
    d.body.removeChild(el);
  } catch (err) {
    support = false;
  }

  return support;
}

function throttle(action, delay) {
  var timeout = null;
  var lastRun = 0;
  return function () {
    if (timeout) {
      return;
    }
    var elapsed = Date.now() - lastRun;
    var context = this;
    var args = arguments;
    var runCallback = function runCallback() {
      lastRun = Date.now();
      timeout = false;
      action.apply(context, args);
    };
    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
  };
}

function testSupportsPassive() {
  if (!inBrowser) return;
  var support = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get$$1() {
        support = true;
      } });

    window.addEventListener('test', null, opts);
  } catch (e) {}
  return support;
}

var supportsPassive = testSupportsPassive();

var _ = {
  on: function on(el, type, func) {
    var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (supportsPassive) {
      el.addEventListener(type, func, {
        capture: capture,
        passive: true });

    } else {
      el.addEventListener(type, func, capture);
    }
  },
  off: function off(el, type, func) {
    var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    el.removeEventListener(type, func, capture);
  } };


var loadImageAsync = function loadImageAsync(item, resolve, reject) {
  var image = new Image();
  if (!item || !item.src) {
    var err = new Error('image src is required');
    return reject(err);
  }

  image.src = item.src;

  image.onload = function () {
    resolve({
      naturalHeight: image.naturalHeight,
      naturalWidth: image.naturalWidth,
      src: image.src });

  };

  image.onerror = function (e) {
    reject(e);
  };
};

var style = function style(el, prop) {
  return typeof getComputedStyle !== 'undefined' ? getComputedStyle(el, null).getPropertyValue(prop) : el.style[prop];
};

var overflow = function overflow(el) {
  return style(el, 'overflow') + style(el, 'overflow-y') + style(el, 'overflow-x');
};

var scrollParent = function scrollParent(el) {
  if (!inBrowser) return;
  if (!(el instanceof HTMLElement)) {
    return window;
  }

  var parent = el;

  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break;
    }

    if (!parent.parentNode) {
      break;
    }

    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return window;
};

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

function ObjectKeys(obj) {
  if (!(obj instanceof Object)) return [];
  if (Object.keys) {
    return Object.keys(obj);
  } else {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
}

function ArrayFrom(arrLike) {
  var len = arrLike.length;
  var list = [];
  for (var i = 0; i < len; i++) {
    list.push(arrLike[i]);
  }
  return list;
}

function noop() {}

var ImageCache = function () {
  function ImageCache(_ref) {
    var max = _ref.max;
    classCallCheck(this, ImageCache);

    this.options = {
      max: max || 100 };

    this._caches = [];
  }

  createClass(ImageCache, [{
    key: 'has',
    value: function has(key) {
      return this._caches.indexOf(key) > -1;
    } },
  {
    key: 'add',
    value: function add(key) {
      if (this.has(key)) return;
      this._caches.push(key);
      if (this._caches.length > this.options.max) {
        this.free();
      }
    } },
  {
    key: 'free',
    value: function free() {
      this._caches.shift();
    } }]);

  return ImageCache;
}();

// el: {
//     state,
//     src,
//     error,
//     loading
// }

var ReactiveListener = function () {
  function ReactiveListener(_ref) {
    var el = _ref.el,
    src = _ref.src,
    error = _ref.error,
    loading = _ref.loading,
    bindType = _ref.bindType,
    $parent = _ref.$parent,
    options = _ref.options,
    elRenderer = _ref.elRenderer,
    imageCache = _ref.imageCache;
    classCallCheck(this, ReactiveListener);

    this.el = el;
    this.src = src;
    this.error = error;
    this.loading = loading;
    this.bindType = bindType;
    this.attempt = 0;

    this.naturalHeight = 0;
    this.naturalWidth = 0;

    this.options = options;

    this.rect = null;

    this.$parent = $parent;
    this.elRenderer = elRenderer;
    this._imageCache = imageCache;
    this.performanceData = {
      init: Date.now(),
      loadStart: 0,
      loadEnd: 0 };


    this.filter();
    this.initState();
    this.render('loading', false);
  }

  /*
     * init listener state
     * @return
     */


  createClass(ReactiveListener, [{
    key: 'initState',
    value: function initState() {
      if ('dataset' in this.el) {
        this.el.dataset.src = this.src;
      } else {
        this.el.setAttribute('data-src', this.src);
      }

      this.state = {
        loading: false,
        error: false,
        loaded: false,
        rendered: false };

    }

    /*
       * record performance
       * @return
       */ },

  {
    key: 'record',
    value: function record(event) {
      this.performanceData[event] = Date.now();
    }

    /*
       * update image listener data
       * @param  {String} image uri
       * @param  {String} loading image uri
       * @param  {String} error image uri
       * @return
       */ },

  {
    key: 'update',
    value: function update(_ref2) {
      var src = _ref2.src,
      loading = _ref2.loading,
      error = _ref2.error;

      var oldSrc = this.src;
      this.src = src;
      this.loading = loading;
      this.error = error;
      this.filter();
      if (oldSrc !== this.src) {
        this.attempt = 0;
        this.initState();
      }
    }

    /*
       * get el node rect
       * @return
       */ },

  {
    key: 'getRect',
    value: function getRect() {
      this.rect = this.el.getBoundingClientRect();
    }

    /*
       *  check el is in view
       * @return {Boolean} el is in view
       */ },

  {
    key: 'checkInView',
    value: function checkInView() {
      this.getRect();
      return this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0;
    }

    /*
       * listener filter
       */ },

  {
    key: 'filter',
    value: function filter() {
      var _this = this;

      ObjectKeys(this.options.filter).map(function (key) {
        _this.options.filter[key](_this, _this.options);
      });
    }

    /*
       * render loading first
       * @params cb:Function
       * @return
       */ },

  {
    key: 'renderLoading',
    value: function renderLoading(cb) {
      var _this2 = this;

      this.state.loading = true;
      loadImageAsync({
        src: this.loading },
      function (data) {
        _this2.render('loading', false);
        _this2.state.loading = false;
        cb();
      }, function () {
        // handler `loading image` load failed
        cb();
        _this2.state.loading = false;
        if (!_this2.options.silent) console.warn('VueLazyload log: load failed with loading image(' + _this2.loading + ')');
      });
    }

    /*
       * try load image and  render it
       * @return
       */ },

  {
    key: 'load',
    value: function load() {
      var _this3 = this;

      var onFinish = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

      if (this.attempt > this.options.attempt - 1 && this.state.error) {
        if (!this.options.silent) console.log('VueLazyload log: ' + this.src + ' tried too more than ' + this.options.attempt + ' times');
        onFinish();
        return;
      }
      if (this.state.rendered && this.state.loaded) return;
      if (this._imageCache.has(this.src)) {
        this.state.loaded = true;
        this.render('loaded', true);
        this.state.rendered = true;
        return onFinish();
      }

      this.renderLoading(function () {
        _this3.attempt++;

        _this3.options.adapter['beforeLoad'] && _this3.options.adapter['beforeLoad'](_this3, _this3.options);
        _this3.record('loadStart');

        loadImageAsync({
          src: _this3.src },
        function (data) {
          _this3.naturalHeight = data.naturalHeight;
          _this3.naturalWidth = data.naturalWidth;
          _this3.state.loaded = true;
          _this3.state.error = false;
          _this3.record('loadEnd');
          _this3.render('loaded', false);
          _this3.state.rendered = true;
          _this3._imageCache.add(_this3.src);
          onFinish();
        }, function (err) {
          !_this3.options.silent && console.error(err);
          _this3.state.error = true;
          _this3.state.loaded = false;
          _this3.render('error', false);
        });
      });
    }

    /*
       * render image
       * @param  {String} state to render // ['loading', 'src', 'error']
       * @param  {String} is form cache
       * @return
       */ },

  {
    key: 'render',
    value: function render(state, cache) {
      this.elRenderer(this, state, cache);
    }

    /*
       * output performance data
       * @return {Object} performance data
       */ },

  {
    key: 'performance',
    value: function performance() {
      var state = 'loading';
      var time = 0;

      if (this.state.loaded) {
        state = 'loaded';
        time = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1000;
      }

      if (this.state.error) state = 'error';

      return {
        src: this.src,
        state: state,
        time: time };

    }

    /*
       * $destroy
       * @return
       */ },

  {
    key: '$destroy',
    value: function $destroy() {
      this.el = null;
      this.src = null;
      this.error = null;
      this.loading = null;
      this.bindType = null;
      this.attempt = 0;
    } }]);

  return ReactiveListener;
}();

var DEFAULT_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
var DEFAULT_EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'];
var DEFAULT_OBSERVER_OPTIONS = {
  rootMargin: '0px',
  threshold: 0 };


var Lazy = function Lazy(Vue) {
  return function () {
    function Lazy(_ref) {
      var preLoad = _ref.preLoad,
      error = _ref.error,
      throttleWait = _ref.throttleWait,
      preLoadTop = _ref.preLoadTop,
      dispatchEvent = _ref.dispatchEvent,
      loading = _ref.loading,
      attempt = _ref.attempt,
      _ref$silent = _ref.silent,
      silent = _ref$silent === undefined ? true : _ref$silent,
      scale = _ref.scale,
      listenEvents = _ref.listenEvents,
      hasbind = _ref.hasbind,
      filter = _ref.filter,
      adapter = _ref.adapter,
      observer = _ref.observer,
      observerOptions = _ref.observerOptions;
      classCallCheck(this, Lazy);

      this.version = '1.3.3';
      this.mode = modeType.event;
      this.ListenerQueue = [];
      this.TargetIndex = 0;
      this.TargetQueue = [];
      this.options = {
        silent: silent,
        dispatchEvent: !!dispatchEvent,
        throttleWait: throttleWait || 200,
        preLoad: preLoad || 1.3,
        preLoadTop: preLoadTop || 0,
        error: error || DEFAULT_URL,
        loading: loading || DEFAULT_URL,
        attempt: attempt || 3,
        scale: scale || getDPR(scale),
        ListenEvents: listenEvents || DEFAULT_EVENTS,
        hasbind: false,
        supportWebp: supportWebp(),
        filter: filter || {},
        adapter: adapter || {},
        observer: !!observer,
        observerOptions: observerOptions || DEFAULT_OBSERVER_OPTIONS };

      this._initEvent();
      this._imageCache = new ImageCache({ max: 200 });
      this.lazyLoadHandler = throttle(this._lazyLoadHandler.bind(this), this.options.throttleWait);

      this.setMode(this.options.observer ? modeType.observer : modeType.event);
    }

    /**
       * update config
       * @param  {Object} config params
       * @return
       */


    createClass(Lazy, [{
      key: 'config',
      value: function config() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        assignDeep(this.options, options);
      }

      /**
         * output listener's load performance
         * @return {Array}
         */ },

    {
      key: 'performance',
      value: function performance() {
        var list = [];

        this.ListenerQueue.map(function (item) {
          list.push(item.performance());
        });

        return list;
      }

      /*
         * add lazy component to queue
         * @param  {Vue} vm lazy component instance
         * @return
         */ },

    {
      key: 'addLazyBox',
      value: function addLazyBox(vm) {
        this.ListenerQueue.push(vm);
        if (inBrowser) {
          this._addListenerTarget(window);
          this._observer && this._observer.observe(vm.el);
          if (vm.$el && vm.$el.parentNode) {
            this._addListenerTarget(vm.$el.parentNode);
          }
        }
      }

      /*
         * add image listener to queue
         * @param  {DOM} el
         * @param  {object} binding vue directive binding
         * @param  {vnode} vnode vue directive vnode
         * @return
         */ },

    {
      key: 'add',
      value: function add(el, binding, vnode) {
        var _this = this;

        if (some(this.ListenerQueue, function (item) {
          return item.el === el;
        })) {
          this.update(el, binding);
          return Vue.nextTick(this.lazyLoadHandler);
        }

        var _valueFormatter2 = this._valueFormatter(binding.value),
        src = _valueFormatter2.src,
        loading = _valueFormatter2.loading,
        error = _valueFormatter2.error;

        Vue.nextTick(function () {
          src = getBestSelectionFromSrcset(el, _this.options.scale) || src;
          _this._observer && _this._observer.observe(el);

          var container = Object.keys(binding.modifiers)[0];
          var $parent = void 0;

          if (container) {
            $parent = vnode.context.$refs[container];
            // if there is container passed in, try ref first, then fallback to getElementById to support the original usage
            $parent = $parent ? $parent.$el || $parent : document.getElementById(container);
          }

          if (!$parent) {
            $parent = scrollParent(el);
          }

          var newListener = new ReactiveListener({
            bindType: binding.arg,
            $parent: $parent,
            el: el,
            loading: loading,
            error: error,
            src: src,
            elRenderer: _this._elRenderer.bind(_this),
            options: _this.options,
            imageCache: _this._imageCache });


          _this.ListenerQueue.push(newListener);

          if (inBrowser) {
            _this._addListenerTarget(window);
            _this._addListenerTarget($parent);
          }

          _this.lazyLoadHandler();
          Vue.nextTick(function () {
            return _this.lazyLoadHandler();
          });
        });
      }

      /**
        * update image src
        * @param  {DOM} el
        * @param  {object} vue directive binding
        * @return
        */ },

    {
      key: 'update',
      value: function update(el, binding, vnode) {
        var _this2 = this;

        var _valueFormatter3 = this._valueFormatter(binding.value),
        src = _valueFormatter3.src,
        loading = _valueFormatter3.loading,
        error = _valueFormatter3.error;

        src = getBestSelectionFromSrcset(el, this.options.scale) || src;

        var exist = find(this.ListenerQueue, function (item) {
          return item.el === el;
        });
        if (!exist) {
          this.add(el, binding, vnode);
        } else {
          exist.update({
            src: src,
            loading: loading,
            error: error });

        }
        if (this._observer) {
          this._observer.unobserve(el);
          this._observer.observe(el);
        }
        this.lazyLoadHandler();
        Vue.nextTick(function () {
          return _this2.lazyLoadHandler();
        });
      }

      /**
        * remove listener form list
        * @param  {DOM} el
        * @return
        */ },

    {
      key: 'remove',
      value: function remove$$1(el) {
        if (!el) return;
        this._observer && this._observer.unobserve(el);
        var existItem = find(this.ListenerQueue, function (item) {
          return item.el === el;
        });
        if (existItem) {
          this._removeListenerTarget(existItem.$parent);
          this._removeListenerTarget(window);
          remove(this.ListenerQueue, existItem);
          existItem.$destroy();
        }
      }

      /*
         * remove lazy components form list
         * @param  {Vue} vm Vue instance
         * @return
         */ },

    {
      key: 'removeComponent',
      value: function removeComponent(vm) {
        if (!vm) return;
        remove(this.ListenerQueue, vm);
        this._observer && this._observer.unobserve(vm.el);
        if (vm.$parent && vm.$el.parentNode) {
          this._removeListenerTarget(vm.$el.parentNode);
        }
        this._removeListenerTarget(window);
      } },
    {
      key: 'setMode',
      value: function setMode(mode) {
        var _this3 = this;

        if (!hasIntersectionObserver && mode === modeType.observer) {
          mode = modeType.event;
        }

        this.mode = mode; // event or observer

        if (mode === modeType.event) {
          if (this._observer) {
            this.ListenerQueue.forEach(function (listener) {
              _this3._observer.unobserve(listener.el);
            });
            this._observer = null;
          }

          this.TargetQueue.forEach(function (target) {
            _this3._initListen(target.el, true);
          });
        } else {
          this.TargetQueue.forEach(function (target) {
            _this3._initListen(target.el, false);
          });
          this._initIntersectionObserver();
        }
      }

      /*
        *** Private functions ***
        */

      /*
            * add listener target
            * @param  {DOM} el listener target
            * @return
            */ },

    {
      key: '_addListenerTarget',
      value: function _addListenerTarget(el) {
        if (!el) return;
        var target = find(this.TargetQueue, function (target) {
          return target.el === el;
        });
        if (!target) {
          target = {
            el: el,
            id: ++this.TargetIndex,
            childrenCount: 1,
            listened: true };

          this.mode === modeType.event && this._initListen(target.el, true);
          this.TargetQueue.push(target);
        } else {
          target.childrenCount++;
        }
        return this.TargetIndex;
      }

      /*
         * remove listener target or reduce target childrenCount
         * @param  {DOM} el or window
         * @return
         */ },

    {
      key: '_removeListenerTarget',
      value: function _removeListenerTarget(el) {
        var _this4 = this;

        this.TargetQueue.forEach(function (target, index) {
          if (target.el === el) {
            target.childrenCount--;
            if (!target.childrenCount) {
              _this4._initListen(target.el, false);
              _this4.TargetQueue.splice(index, 1);
              target = null;
            }
          }
        });
      }

      /*
         * add or remove eventlistener
         * @param  {DOM} el DOM or Window
         * @param  {boolean} start flag
         * @return
         */ },

    {
      key: '_initListen',
      value: function _initListen(el, start) {
        var _this5 = this;

        this.options.ListenEvents.forEach(function (evt) {
          return _[start ? 'on' : 'off'](el, evt, _this5.lazyLoadHandler);
        });
      } },
    {
      key: '_initEvent',
      value: function _initEvent() {
        var _this6 = this;

        this.Event = {
          listeners: {
            loading: [],
            loaded: [],
            error: [] } };



        this.$on = function (event, func) {
          if (!_this6.Event.listeners[event]) _this6.Event.listeners[event] = [];
          _this6.Event.listeners[event].push(func);
        };

        this.$once = function (event, func) {
          var vm = _this6;
          function on() {
            vm.$off(event, on);
            func.apply(vm, arguments);
          }
          _this6.$on(event, on);
        };

        this.$off = function (event, func) {
          if (!func) {
            if (!_this6.Event.listeners[event]) return;
            _this6.Event.listeners[event].length = 0;
            return;
          }
          remove(_this6.Event.listeners[event], func);
        };

        this.$emit = function (event, context, inCache) {
          if (!_this6.Event.listeners[event]) return;
          _this6.Event.listeners[event].forEach(function (func) {
            return func(context, inCache);
          });
        };
      }

      /**
         * find nodes which in viewport and trigger load
         * @return
         */ },

    {
      key: '_lazyLoadHandler',
      value: function _lazyLoadHandler() {
        var _this7 = this;

        var freeList = [];
        this.ListenerQueue.forEach(function (listener, index) {
          if (!listener.el || !listener.el.parentNode) {
            freeList.push(listener);
          }
          var catIn = listener.checkInView();
          if (!catIn) return;
          listener.load();
        });
        freeList.forEach(function (item) {
          remove(_this7.ListenerQueue, item);
          item.$destroy();
        });
      }
      /**
        * init IntersectionObserver
        * set mode to observer
        * @return
        */ },

    {
      key: '_initIntersectionObserver',
      value: function _initIntersectionObserver() {
        var _this8 = this;

        if (!hasIntersectionObserver) return;
        this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions);
        if (this.ListenerQueue.length) {
          this.ListenerQueue.forEach(function (listener) {
            _this8._observer.observe(listener.el);
          });
        }
      }

      /**
        * init IntersectionObserver
        * @return
        */ },

    {
      key: '_observerHandler',
      value: function _observerHandler(entries, observer) {
        var _this9 = this;

        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            _this9.ListenerQueue.forEach(function (listener) {
              if (listener.el === entry.target) {
                if (listener.state.loaded) return _this9._observer.unobserve(listener.el);
                listener.load();
              }
            });
          }
        });
      }

      /**
        * set element attribute with image'url and state
        * @param  {object} lazyload listener object
        * @param  {string} state will be rendered
        * @param  {bool} inCache  is rendered from cache
        * @return
        */ },

    {
      key: '_elRenderer',
      value: function _elRenderer(listener, state, cache) {
        if (!listener.el) return;
        var el = listener.el,
        bindType = listener.bindType;


        var src = void 0;
        switch (state) {
          case 'loading':
            src = listener.loading;
            break;
          case 'error':
            src = listener.error;
            break;
          default:
            src = listener.src;
            break;}


        if (bindType) {
          el.style[bindType] = 'url("' + src + '")';
        } else if (el.getAttribute('src') !== src) {
          el.setAttribute('src', src);
        }

        el.setAttribute('lazy', state);

        this.$emit(state, listener, cache);
        this.options.adapter[state] && this.options.adapter[state](listener, this.options);

        if (this.options.dispatchEvent) {
          var event = new CustomEvent(state, {
            detail: listener });

          el.dispatchEvent(event);
        }
      }

      /**
        * generate loading loaded error image url
        * @param {string} image's src
        * @return {object} image's loading, loaded, error url
        */ },

    {
      key: '_valueFormatter',
      value: function _valueFormatter(value) {
        var src = value;
        var loading = this.options.loading;
        var error = this.options.error;

        // value is object
        if (isObject(value)) {
          if (!value.src && !this.options.silent) console.error('Vue Lazyload warning: miss src with ' + value);
          src = value.src;
          loading = value.loading || this.options.loading;
          error = value.error || this.options.error;
        }
        return {
          src: src,
          loading: loading,
          error: error };

      } }]);

    return Lazy;
  }();
};

var LazyComponent = function LazyComponent(lazy) {
  return {
    props: {
      tag: {
        type: String,
        default: 'div' } },


    render: function render(h) {
      if (this.show === false) {
        return h(this.tag);
      }
      return h(this.tag, null, this.$slots.default);
    },
    data: function data() {
      return {
        el: null,
        state: {
          loaded: false },

        rect: {},
        show: false };

    },
    mounted: function mounted() {
      this.el = this.$el;
      lazy.addLazyBox(this);
      lazy.lazyLoadHandler();
    },
    beforeDestroy: function beforeDestroy() {
      lazy.removeComponent(this);
    },

    methods: {
      getRect: function getRect() {
        this.rect = this.$el.getBoundingClientRect();
      },
      checkInView: function checkInView() {
        this.getRect();
        return inBrowser && this.rect.top < window.innerHeight * lazy.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * lazy.options.preLoad && this.rect.right > 0;
      },
      load: function load() {
        this.show = true;
        this.state.loaded = true;
        this.$emit('show', this);
      },
      destroy: function destroy() {
        return this.$destroy;
      } } };


};

var LazyContainerMananger = function () {
  function LazyContainerMananger(_ref) {
    var lazy = _ref.lazy;
    classCallCheck(this, LazyContainerMananger);

    this.lazy = lazy;
    lazy.lazyContainerMananger = this;
    this._queue = [];
  }

  createClass(LazyContainerMananger, [{
    key: 'bind',
    value: function bind(el, binding, vnode) {
      var container = new LazyContainer$1({ el: el, binding: binding, vnode: vnode, lazy: this.lazy });
      this._queue.push(container);
    } },
  {
    key: 'update',
    value: function update(el, binding, vnode) {
      var container = find(this._queue, function (item) {
        return item.el === el;
      });
      if (!container) return;
      container.update({ el: el, binding: binding, vnode: vnode });
    } },
  {
    key: 'unbind',
    value: function unbind(el, binding, vnode) {
      var container = find(this._queue, function (item) {
        return item.el === el;
      });
      if (!container) return;
      container.clear();
      remove(this._queue, container);
    } }]);

  return LazyContainerMananger;
}();

var defaultOptions = {
  selector: 'img' };


var LazyContainer$1 = function () {
  function LazyContainer(_ref2) {
    var el = _ref2.el,
    binding = _ref2.binding,
    vnode = _ref2.vnode,
    lazy = _ref2.lazy;
    classCallCheck(this, LazyContainer);

    this.el = null;
    this.vnode = vnode;
    this.binding = binding;
    this.options = {};
    this.lazy = lazy;

    this._queue = [];
    this.update({ el: el, binding: binding });
  }

  createClass(LazyContainer, [{
    key: 'update',
    value: function update(_ref3) {
      var _this = this;

      var el = _ref3.el,
      binding = _ref3.binding;

      this.el = el;
      this.options = assignDeep({}, defaultOptions, binding.value);

      var imgs = this.getImgs();
      imgs.forEach(function (el) {
        _this.lazy.add(el, assignDeep({}, _this.binding, {
          value: {
            src: 'dataset' in el ? el.dataset.src : el.getAttribute('data-src'),
            error: ('dataset' in el ? el.dataset.error : el.getAttribute('data-error')) || _this.options.error,
            loading: ('dataset' in el ? el.dataset.loading : el.getAttribute('data-loading')) || _this.options.loading } }),

        _this.vnode);
      });
    } },
  {
    key: 'getImgs',
    value: function getImgs() {
      return ArrayFrom(this.el.querySelectorAll(this.options.selector));
    } },
  {
    key: 'clear',
    value: function clear() {
      var _this2 = this;

      var imgs = this.getImgs();
      imgs.forEach(function (el) {
        return _this2.lazy.remove(el);
      });

      this.vnode = null;
      this.binding = null;
      this.lazy = null;
    } }]);

  return LazyContainer;
}();

var LazyImage = function LazyImage(lazyManager) {
  return {
    props: {
      src: [String, Object],
      tag: {
        type: String,
        default: 'img' } },


    render: function render(h) {
      return h(this.tag, {
        attrs: {
          src: this.renderSrc } },

      this.$slots.default);
    },
    data: function data() {
      return {
        el: null,
        options: {
          src: '',
          error: '',
          loading: '',
          attempt: lazyManager.options.attempt },

        state: {
          loaded: false,
          error: false,
          attempt: 0 },

        rect: {},
        renderSrc: '' };

    },

    watch: {
      src: function src() {
        this.init();
        lazyManager.addLazyBox(this);
        lazyManager.lazyLoadHandler();
      } },

    created: function created() {
      this.init();
      this.renderSrc = this.options.loading;
    },
    mounted: function mounted() {
      this.el = this.$el;
      lazyManager.addLazyBox(this);
      lazyManager.lazyLoadHandler();
    },
    beforeDestroy: function beforeDestroy() {
      lazyManager.removeComponent(this);
    },

    methods: {
      init: function init() {
        var _lazyManager$_valueFo = lazyManager._valueFormatter(this.src),
        src = _lazyManager$_valueFo.src,
        loading = _lazyManager$_valueFo.loading,
        error = _lazyManager$_valueFo.error;

        this.state.loaded = false;
        this.options.src = src;
        this.options.error = error;
        this.options.loading = loading;
        this.renderSrc = this.options.loading;
      },
      getRect: function getRect() {
        this.rect = this.$el.getBoundingClientRect();
      },
      checkInView: function checkInView() {
        this.getRect();
        return inBrowser && this.rect.top < window.innerHeight * lazyManager.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * lazyManager.options.preLoad && this.rect.right > 0;
      },
      load: function load() {
        var _this = this;

        var onFinish = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

        if (this.state.attempt > this.options.attempt - 1 && this.state.error) {
          if (!lazyManager.options.silent) console.log('VueLazyload log: ' + this.options.src + ' tried too more than ' + this.options.attempt + ' times');
          onFinish();
          return;
        }
        var src = this.options.src;
        loadImageAsync({ src: src }, function (_ref) {
          var src = _ref.src;

          _this.renderSrc = src;
          _this.state.loaded = true;
        }, function (e) {
          _this.state.attempt++;
          _this.renderSrc = _this.options.error;
          _this.state.error = true;
        });
      } } };


};

var index = {
  /*
              * install function
              * @param  {Vue} Vue
              * @param  {object} options  lazyload options
              */
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var LazyClass = Lazy(Vue);
    var lazy = new LazyClass(options);
    var lazyContainer = new LazyContainerMananger({ lazy: lazy });

    var isVue2 = Vue.version.split('.')[0] === '2';

    Vue.prototype.$Lazyload = lazy;

    if (options.lazyComponent) {
      Vue.component('lazy-component', LazyComponent(lazy));
    }

    if (options.lazyImage) {
      Vue.component('lazy-image', LazyImage(lazy));
    }

    if (isVue2) {
      Vue.directive('lazy', {
        bind: lazy.add.bind(lazy),
        update: lazy.update.bind(lazy),
        componentUpdated: lazy.lazyLoadHandler.bind(lazy),
        unbind: lazy.remove.bind(lazy) });

      Vue.directive('lazy-container', {
        bind: lazyContainer.bind.bind(lazyContainer),
        componentUpdated: lazyContainer.update.bind(lazyContainer),
        unbind: lazyContainer.unbind.bind(lazyContainer) });

    } else {
      Vue.directive('lazy', {
        bind: lazy.lazyLoadHandler.bind(lazy),
        update: function update(newValue, oldValue) {
          assignDeep(this.vm.$refs, this.vm.$els);
          lazy.add(this.el, {
            modifiers: this.modifiers || {},
            arg: this.arg,
            value: newValue,
            oldValue: oldValue },
          {
            context: this.vm });

        },
        unbind: function unbind() {
          lazy.remove(this.el);
        } });


      Vue.directive('lazy-container', {
        update: function update(newValue, oldValue) {
          lazyContainer.update(this.el, {
            modifiers: this.modifiers || {},
            arg: this.arg,
            value: newValue,
            oldValue: oldValue },
          {
            context: this.vm });

        },
        unbind: function unbind() {
          lazyContainer.unbind(this.el);
        } });

    }
  } };var _default =


index;exports.default = _default;

/***/ }),

/***/ 421:
/*!***********************************!*\
  !*** E:/项萍/熙美订货/static/60x60.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAVtJREFUaAXt2DGPgzAMBeDr6QQbGxMb//+nsLOxMbHBVKa+KmoUWY1LczYS0mNAmBjz+Jqpt2EYfq52/F4t8DMvQ5/1q1Ga0ooAt4eCY7pEaVNOZRilFRzTJUqbcirDKK3gmC5R2pRTGUZpBcd0idKmnMowSis4pkuUNuVUhl1S+k/5oI9L99cxz3PXdW3b5h55Nd4/duYmpPf/JT1NE2YhR9/3OKdzxfXxTvHg27JcOqSs63rf96ZpcA4vCPnWdY32uc63gY7cLJdelgWJQ8T0TVBHYnxG3C25zvSpr67LQ4MW+bZtq6oKWxbn9MW4E0u9M7Ydv7gV/6mOHx2E4ERcXMfNMI4jmAM2biJKrvN4StFZHloMOrMs3x5nphTvYmgB4lZS2o1WDKa0AHErKe1GKwZTWoC4lZR2oxWDKS1A3EpKu9GKwZQWIG4lpd1oxWBKCxC3ktJutGLwA9ZAg95oozaIAAAAAElFTkSuQmCC"

/***/ }),

/***/ 5:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 6);function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 7).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 6:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-26920200424005","_inBundle":false,"_integrity":"sha512-FT8Z/C5xSmIxooqhV1v69jTkxATPz+FsRQIFOrbdlWekjGkrE73jfrdNMWm7gL5u41ALPJTVArxN1Re9by1bjQ==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26920200424005.tgz","_shasum":"47f4375095eda3089cf4678b4b96fc656a7ab623","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"94494d54ed23e2dcf9ab8e3245b48b770b4e98a9","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-26920200424005"};

/***/ }),

/***/ 7:
/*!**********************************************!*\
  !*** E:/项萍/熙美订货/pages.json?{"type":"style"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/index/index": { "navigationBarTitleText": "首页", "navigationStyle": "custom" }, "pages/cart/cart": { "enablePullDownRefresh": true, "navigationBarTitleText": "购物车", "navigationStyle": "custom" }, "pages/ceshi/ceshi": {}, "pages/product/product": { "navigationStyle": "custom", "navigationBarTitleText": "详情展示" }, "pages/set/set": { "navigationBarTitleText": "设置" }, "pages/user/user": { "navigationStyle": "custom", "navigationBarTitleText": "我的" }, "pages/login/login": { "navigationBarTitleText": "", "navigationStyle": "custom" }, "pages/order/order": { "enablePullDownRefresh": true, "navigationBarTextStyle": "black", "navigationBarTitleText": "我的订单" }, "pages/address/address": { "navigationBarTextStyle": "black", "navigationBarTitleText": "收货地址" }, "pages/oreder-detail/oreder-detail": { "navigationBarTextStyle": "black", "navigationBarTitleText": "订单详情" }, "pages/oreder-detail/index": { "navigationBarTextStyle": "black", "navigationBarTitleText": "订单详情" }, "pages/repertory/repertory": { "navigationBarTextStyle": "black", "navigationBarTitleText": "库存查询" }, "pages/sale/sale": { "navigationBarTextStyle": "black", "navigationBarTitleText": "我的售后" }, "pages/technology/technology": { "navigationBarTextStyle": "black", "navigationBarTitleText": "技术支持" }, "pages/category/leftCategory": { "navigationBarTitleText": "分类", "navigationBarTextStyle": "black" }, "pages/product/list": { "enablePullDownRefresh": true, "navigationBarTitleText": "商品列表", "navigationStyle": "custom" }, "pages/search/search": { "navigationStyle": "custom", "navigationBarTitleText": "搜索", "enablePullDownRefresh": true }, "pages/market/market": { "navigationBarTextStyle": "black", "navigationBarTitleText": "我的销售" }, "pages/sale-detail/sale-detail": { "navigationBarTextStyle": "black", "navigationBarTitleText": "售后详情" }, "pages/sale-add/sale-add": { "navigationBarTextStyle": "black", "navigationBarTitleText": "申报产品" }, "pages/logistics-add/logistics-add": { "navigationBarTextStyle": "black", "navigationBarTitleText": "申请寄回" }, "pages/logistics-list/logistics-list": { "navigationBarTextStyle": "black", "navigationBarTitleText": "寄回产品" }, "pages/logistics-detail/logistics-detail": { "navigationBarTextStyle": "black", "navigationBarTitleText": "寄回详情" }, "pages/collect/collect": { "navigationBarTextStyle": "black", "navigationBarTitleText": "我的收藏" }, "pages/update/update": { "navigationBarTitleText": "系统更新", "navigationStyle": "custom" }, "pages/webview/webview": { "navigationBarTitleText": "活动" }, "pages/discounts/discounts": { "navigationBarTextStyle": "black", "navigationBarTitleText": "代金券" }, "pages/Article/Article": { "navigationStyle": "custom" }, "pages/market-detail/market-detail": {}, "pages/order-hddata/order-hddata": {}, "pages/theme/theme": { "navigationBarTitleText": "主题换肤", "navigationStyle": "custom" }, "pages/cart/success/success": { "navigationBarTitleText": "提交成功" } }, "globalStyle": { "navigationBarTextStyle": "black", "navigationBarTitleText": "熙美诚品", "navigationBarBackgroundColor": "#ffffff", "backgroundColor": "#f8f8f8" } };exports.default = _default;

/***/ }),

/***/ 75:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 76);

/***/ }),

/***/ 76:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 77);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 77:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 78:
/*!************************************!*\
  !*** E:/项萍/熙美订货/common/md5.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function () {"use strict";function t(t) {if (t) d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, this.blocks = d, this.buffer8 = l;else if (a) {var r = new ArrayBuffer(68);this.buffer8 = new Uint8Array(r), this.blocks = new Uint32Array(r);} else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;}var r = "input is invalid type",e = "object" == typeof window,i = e ? window : {};i.JS_MD5_NO_WINDOW && (e = !1);var s = !e && "object" == typeof self,h = !i.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;h ? i = global : s && (i = self);var f = !i.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports,o =  true && __webpack_require__(/*! !webpack amd options */ 81),a = !i.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,n = "0123456789abcdef".split(""),u = [128, 32768, 8388608, -2147483648],y = [0, 8, 16, 24],c = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d = [],l;if (a) {var A = new ArrayBuffer(68);l = new Uint8Array(A), d = new Uint32Array(A);}!i.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {return "[object Array]" === Object.prototype.toString.call(t);}), !a || !i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;});var b = function b(r) {return function (e) {return new t(!0).update(e)[r]();};},v = function v() {var r = b("hex");h && (r = w(r)), r.create = function () {return new t();}, r.update = function (t) {return r.create().update(t);};for (var e = 0; e < c.length; ++e) {var i = c[e];r[i] = b(i);}return r;},w = function w(t) {var e = eval("require('crypto')"),i = eval("require('buffer').Buffer"),s = function s(_s) {if ("string" == typeof _s) return e.createHash("md5").update(_s, "utf8").digest("hex");if (null === _s || void 0 === _s) throw r;return _s.constructor === ArrayBuffer && (_s = new Uint8Array(_s)), Array.isArray(_s) || ArrayBuffer.isView(_s) || _s.constructor === i ? e.createHash("md5").update(new i(_s)).digest("hex") : t(_s);};return s;};t.prototype.update = function (t) {if (!this.finalized) {var e,i = typeof t;if ("string" !== i) {if ("object" !== i) throw r;if (null === t) throw r;if (a && t.constructor === ArrayBuffer) t = new Uint8Array(t);else if (!(Array.isArray(t) || a && ArrayBuffer.isView(t))) throw r;e = !0;}for (var s, h, f = 0, o = t.length, n = this.blocks, u = this.buffer8; f < o;) {if (this.hashed && (this.hashed = !1, n[0] = n[16], n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0), e) {if (a) for (h = this.start; f < o && h < 64; ++f) {u[h++] = t[f];} else for (h = this.start; f < o && h < 64; ++f) {n[h >> 2] |= t[f] << y[3 & h++];}} else if (a) for (h = this.start; f < o && h < 64; ++f) {(s = t.charCodeAt(f)) < 128 ? u[h++] = s : s < 2048 ? (u[h++] = 192 | s >> 6, u[h++] = 128 | 63 & s) : s < 55296 || s >= 57344 ? (u[h++] = 224 | s >> 12, u[h++] = 128 | s >> 6 & 63, u[h++] = 128 | 63 & s) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++f)), u[h++] = 240 | s >> 18, u[h++] = 128 | s >> 12 & 63, u[h++] = 128 | s >> 6 & 63, u[h++] = 128 | 63 & s);} else for (h = this.start; f < o && h < 64; ++f) {(s = t.charCodeAt(f)) < 128 ? n[h >> 2] |= s << y[3 & h++] : s < 2048 ? (n[h >> 2] |= (192 | s >> 6) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]) : s < 55296 || s >= 57344 ? (n[h >> 2] |= (224 | s >> 12) << y[3 & h++], n[h >> 2] |= (128 | s >> 6 & 63) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++f)), n[h >> 2] |= (240 | s >> 18) << y[3 & h++], n[h >> 2] |= (128 | s >> 12 & 63) << y[3 & h++], n[h >> 2] |= (128 | s >> 6 & 63) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]);}this.lastByteIndex = h, this.bytes += h - this.start, h >= 64 ? (this.start = h - 64, this.hash(), this.hashed = !0) : this.start = h;}return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;}}, t.prototype.finalize = function () {if (!this.finalized) {this.finalized = !0;var t = this.blocks,r = this.lastByteIndex;t[r >> 2] |= u[3 & r], r >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();}}, t.prototype.hash = function () {var t,r,e,i,s,h,f = this.blocks;this.first ? r = ((r = ((t = ((t = f[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (e = ((e = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & t) + f[1] - 117830708) << 12 | i >>> 20) + t << 0) & (-271733879 ^ t)) + f[2] - 1126478375) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[3] - 1316259209) << 22 | r >>> 10) + e << 0 : (t = this.h0, r = this.h1, e = this.h2, r = ((r += ((t = ((t += ((i = this.h3) ^ r & (e ^ i)) + f[0] - 680876936) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[1] - 389564586) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[2] + 606105819) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[3] - 1044525330) << 22 | r >>> 10) + e << 0), r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[4] - 176418897) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[5] + 1200080426) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[6] - 1473231341) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[7] - 45705983) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[8] + 1770035416) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[9] - 1958414417) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[10] - 42063) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[11] - 1990404162) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[12] + 1804603682) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[13] - 40341101) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[14] - 1502002290) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[15] + 1236535329) << 22 | r >>> 10) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[1] - 165796510) << 5 | t >>> 27) + r << 0) ^ r)) + f[6] - 1069501632) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[11] + 643717713) << 14 | e >>> 18) + i << 0) ^ i)) + f[0] - 373897302) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[5] - 701558691) << 5 | t >>> 27) + r << 0) ^ r)) + f[10] + 38016083) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[15] - 660478335) << 14 | e >>> 18) + i << 0) ^ i)) + f[4] - 405537848) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[9] + 568446438) << 5 | t >>> 27) + r << 0) ^ r)) + f[14] - 1019803690) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[3] - 187363961) << 14 | e >>> 18) + i << 0) ^ i)) + f[8] + 1163531501) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[13] - 1444681467) << 5 | t >>> 27) + r << 0) ^ r)) + f[2] - 51403784) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[7] + 1735328473) << 14 | e >>> 18) + i << 0) ^ i)) + f[12] - 1926607734) << 20 | r >>> 12) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[5] - 378558) << 4 | t >>> 28) + r << 0)) + f[8] - 2022574463) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[11] + 1839030562) << 16 | e >>> 16) + i << 0)) + f[14] - 35309556) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[1] - 1530992060) << 4 | t >>> 28) + r << 0)) + f[4] + 1272893353) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[7] - 155497632) << 16 | e >>> 16) + i << 0)) + f[10] - 1094730640) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[13] + 681279174) << 4 | t >>> 28) + r << 0)) + f[0] - 358537222) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[3] - 722521979) << 16 | e >>> 16) + i << 0)) + f[6] + 76029189) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[9] - 640364487) << 4 | t >>> 28) + r << 0)) + f[12] - 421815835) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[15] + 530742520) << 16 | e >>> 16) + i << 0)) + f[2] - 995338651) << 23 | r >>> 9) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[0] - 198630844) << 6 | t >>> 26) + r << 0) | ~e)) + f[7] + 1126891415) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[14] - 1416354905) << 15 | e >>> 17) + i << 0) | ~t)) + f[5] - 57434055) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[12] + 1700485571) << 6 | t >>> 26) + r << 0) | ~e)) + f[3] - 1894986606) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[10] - 1051523) << 15 | e >>> 17) + i << 0) | ~t)) + f[1] - 2054922799) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[8] + 1873313359) << 6 | t >>> 26) + r << 0) | ~e)) + f[15] - 30611744) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[6] - 1560198380) << 15 | e >>> 17) + i << 0) | ~t)) + f[13] + 1309151649) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[4] - 145523070) << 6 | t >>> 26) + r << 0) | ~e)) + f[11] - 1120210379) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[2] + 718787259) << 15 | e >>> 17) + i << 0) | ~t)) + f[9] - 343485551) << 21 | r >>> 11) + e << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = r - 271733879 << 0, this.h2 = e - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + i << 0);}, t.prototype.hex = function () {this.finalize();var t = this.h0,r = this.h1,e = this.h2,i = this.h3;return n[t >> 4 & 15] + n[15 & t] + n[t >> 12 & 15] + n[t >> 8 & 15] + n[t >> 20 & 15] + n[t >> 16 & 15] + n[t >> 28 & 15] + n[t >> 24 & 15] + n[r >> 4 & 15] + n[15 & r] + n[r >> 12 & 15] + n[r >> 8 & 15] + n[r >> 20 & 15] + n[r >> 16 & 15] + n[r >> 28 & 15] + n[r >> 24 & 15] + n[e >> 4 & 15] + n[15 & e] + n[e >> 12 & 15] + n[e >> 8 & 15] + n[e >> 20 & 15] + n[e >> 16 & 15] + n[e >> 28 & 15] + n[e >> 24 & 15] + n[i >> 4 & 15] + n[15 & i] + n[i >> 12 & 15] + n[i >> 8 & 15] + n[i >> 20 & 15] + n[i >> 16 & 15] + n[i >> 28 & 15] + n[i >> 24 & 15];}, t.prototype.toString = t.prototype.hex, t.prototype.digest = function () {this.finalize();var t = this.h0,r = this.h1,e = this.h2,i = this.h3;return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255];}, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function () {this.finalize();var t = new ArrayBuffer(16),r = new Uint32Array(t);return r[0] = this.h0, r[1] = this.h1, r[2] = this.h2, r[3] = this.h3, t;}, t.prototype.buffer = t.prototype.arrayBuffer, t.prototype.base64 = function () {for (var t, r, e, i = "", s = this.array(), h = 0; h < 15;) {t = s[h++], r = s[h++], e = s[h++], i += p[t >>> 2] + p[63 & (t << 4 | r >>> 4)] + p[63 & (r << 2 | e >>> 6)] + p[63 & e];}return t = s[h], i += p[t >>> 2] + p[t << 4 & 63] + "==";};var _ = v();f ? module.exports = _ : (i.md5 = _, o && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return _;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/node-libs-browser/mock/process.js */ 79), __webpack_require__(/*! (webpack)/buildin/global.js */ 3)))

/***/ }),

/***/ 79:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 80);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 8:
/*!*********************************************!*\
  !*** E:/项萍/熙美订货/pages.json?{"type":"stat"} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__5FA85B0" };exports.default = _default;

/***/ }),

/***/ 80:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 79)))

/***/ }),

/***/ 81:
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ 9:
/*!*********************************!*\
  !*** E:/项萍/熙美订货/store/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    hasLogin: false,
    showFooter: true,
    userinfo: {},
    imgStatus: true,
    imgUrl: 'http://img.xmvogue.com',
    app: '1' //1是国内app，2是海外app
  },
  getters: {
    isShow: function isShow(state) {
      return state.showFooter;
    },
    imgGet: function imgGet(state) {
      return state.imgStatus;
    },
    imgShow: function imgShow(state) {
      return state.imgUrl;
    } },

  mutations: {
    // 修改登录状态
    show: function show(state) {
      state.showFooter = true;
    },
    hide: function hide(state) {
      state.showFooter = false;
    },
    // 储存用户信息
    login: function login(state, provider) {
      state.hasLogin = true;
      state.userinfo = provider;
      // uni.setStorageSync({ //缓存用户登陆状态
      // 	key: 'userinfo',
      // 	data: provider
      // })
      uni.setStorageSync('userinfo', provider);
    },
    //退出登录
    logout: function logout(state) {
      state.hasLogin = false;
      state.userinfo = {};
      uni.removeStorageSync('userinfo');
      // uni.removeStorageSync('getlist');
      // uni.removeStorageSync('radio');
      // uni.removeStorageSync('collectlist');
      // uni.removeStorageSync('list');
      // uni.removeStorageSync('lang');
      // uni.removeStorage({
      // 	key: 'userinfo'
      // })
      uni.removeStorage({
        key: 'getlist' });

      uni.removeStorage({
        key: 'radio' });

      uni.removeStorage({
        key: 'collectlist' });

      uni.removeStorage({
        key: 'list' });

      uni.removeStorage({
        key: 'lang' });

    },
    // 返回登录页面
    navLogin: function navLogin(state) {
      uni.showToast({
        title: '请登录后操作',
        image: "../../static/msg.png",
        duration: 1500 });

      setTimeout(function () {
        uni.navigateTo({
          url: '/pages/login/login' });

      }, 1500);
    },
    // 修改图片状态
    imgZN: function imgZN(state) {
      state.imgStatus = true;
      if (state.imgStatus) {
        state.imgUrl = 'http://img.xmvogue.com';
      } else {
        state.imgUrl = 'http://hwimg.xmvogue.com';
      }
    },
    imgEN: function imgEN(state) {
      state.imgStatus = false;
      if (state.imgStatus) {
        state.imgUrl = 'http://img.xmvogue.com';
      } else {
        state.imgUrl = 'http://hwimg.xmvogue.com';
      }
    } },


  actions: {
    hideFooter: function hideFooter(context) {//自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
      context.commit('hide');
    },
    showFooter: function showFooter(context) {//同上注释
      context.commit('show');
    },
    showLogin: function showLogin(context) {
      context.commit('navLogin');
    },
    imghideZN: function imghideZN(context) {
      context.commit('imgZN');
    },
    imgshowEN: function imgshowEN(context) {
      context.commit('imgEN');
    } } });var _default =




store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 90:
/*!*********************************!*\
  !*** E:/项萍/熙美订货/common/uni.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map