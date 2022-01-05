import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
const {createContext} = __commonjs_module0;
const {useContext} = __commonjs_module0;
const {useState} = __commonjs_module0;
const {createElement} = __commonjs_module0;
const {useEffect} = __commonjs_module0;
const {useLayoutEffect} = __commonjs_module0;
const {useRef} = __commonjs_module0;
const {useCallback} = __commonjs_module0;
const {useDebugValue} = __commonjs_module0;
;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y, t, g;
  return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {value: op[1], done: false};
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
}
var noop = function() {
};
var UNDEFINED = noop();
var OBJECT = Object;
var isUndefined = function(v) {
  return v === UNDEFINED;
};
var isFunction = function(v) {
  return typeof v == "function";
};
var mergeObjects = function(a, b) {
  return OBJECT.assign({}, a, b);
};
var STR_UNDEFINED = "undefined";
var hasWindow = function() {
  return typeof window != STR_UNDEFINED;
};
var hasDocument = function() {
  return typeof document != STR_UNDEFINED;
};
var hasRequestAnimationFrame = function() {
  return hasWindow() && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
};
var table = new WeakMap();
var counter = 0;
var stableHash = function(arg) {
  var type = typeof arg;
  var constructor = arg && arg.constructor;
  var isDate = constructor == Date;
  var result;
  var index;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      var keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ":" + stableHash(arg[index]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
var online = true;
var isOnline = function() {
  return online;
};
var hasWin = hasWindow();
var hasDoc = hasDocument();
var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop;
var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop;
var isVisible = function() {
  var visibilityState = hasDoc && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = function(callback) {
  onDocumentEvent("visibilitychange", callback);
  onWindowEvent("focus", callback);
  return function() {
    offDocumentEvent("visibilitychange", callback);
    offWindowEvent("focus", callback);
  };
};
var initReconnect = function(callback) {
  var onOnline = function() {
    online = true;
    callback();
  };
  var onOffline = function() {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return function() {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_SERVER = !hasWindow() || "Deno" in window;
var rAF = function(f) {
  return hasRequestAnimationFrame() ? window["requestAnimationFrame"](f) : setTimeout(f, 1);
};
var useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = function(key) {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  var args = [].concat(key);
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  var errorKey = key ? "$err$" + key : "";
  var isValidatingKey = key ? "$req$" + key : "";
  return [key, args, errorKey, isValidatingKey];
};
var SWRGlobalState = new WeakMap();
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var broadcastState = function(cache2, key, data, error, isValidating, revalidate, populateCache) {
  if (populateCache === void 0) {
    populateCache = true;
  }
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], CONCURRENT_REQUESTS = _a2[4];
  var revalidators = EVENT_REVALIDATORS[key];
  var updaters = STATE_UPDATERS[key] || [];
  if (populateCache && updaters) {
    for (var i = 0; i < updaters.length; ++i) {
      updaters[i](data, error, isValidating);
    }
  }
  if (revalidate) {
    delete CONCURRENT_REQUESTS[key];
    if (revalidators && revalidators[0]) {
      return revalidators[0](MUTATE_EVENT).then(function() {
        return cache2.get(key);
      });
    }
  }
  return cache2.get(key);
};
var __timestamp = 0;
var getTimestamp = function() {
  return ++__timestamp;
};
var internalMutate = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var cache2, _key, _data, _opts, options, revalidate, populateCache, _a2, key, keyErr, _b, MUTATION_TS, MUTATION_END_TS, data, error, beforeMutationTs, res;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          cache2 = args[0], _key = args[1], _data = args[2], _opts = args[3];
          options = typeof _opts === "boolean" ? {revalidate: _opts} : _opts || {};
          revalidate = options.revalidate !== false;
          populateCache = options.populateCache !== false;
          _a2 = serialize(_key), key = _a2[0], keyErr = _a2[2];
          if (!key)
            return [2];
          _b = SWRGlobalState.get(cache2), MUTATION_TS = _b[2], MUTATION_END_TS = _b[3];
          if (args.length < 3) {
            return [2, broadcastState(cache2, key, cache2.get(key), cache2.get(keyErr), UNDEFINED, revalidate, populateCache)];
          }
          data = _data;
          beforeMutationTs = MUTATION_TS[key] = getTimestamp();
          MUTATION_END_TS[key] = 0;
          if (isFunction(data)) {
            try {
              data = data(cache2.get(key));
            } catch (err) {
              error = err;
            }
          }
          if (!(data && isFunction(data.then)))
            return [3, 2];
          return [
            4,
            data.catch(function(err) {
              error = err;
            })
          ];
        case 1:
          data = _c.sent();
          if (beforeMutationTs !== MUTATION_TS[key]) {
            if (error)
              throw error;
            return [2, data];
          }
          _c.label = 2;
        case 2:
          if (populateCache) {
            if (!error) {
              cache2.set(key, data);
            }
            cache2.set(keyErr, error);
          }
          MUTATION_END_TS[key] = getTimestamp();
          return [
            4,
            broadcastState(cache2, key, data, error, UNDEFINED, revalidate, populateCache)
          ];
        case 3:
          res = _c.sent();
          if (error)
            throw error;
          return [2, populateCache ? res : data];
      }
    });
  });
};
var revalidateAllKeys = function(revalidators, type) {
  for (var key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
var initCache = function(provider, options) {
  if (!SWRGlobalState.has(provider)) {
    var opts = mergeObjects(defaultConfigOptions, options);
    var EVENT_REVALIDATORS = {};
    var mutate2 = internalMutate.bind(UNDEFINED, provider);
    var unmount = noop;
    SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, {}, mutate2]);
    if (!IS_SERVER) {
      var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
      var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
      unmount = function() {
        releaseFocus_1 && releaseFocus_1();
        releaseReconnect_1 && releaseReconnect_1();
        SWRGlobalState.delete(provider);
      };
    }
    return [provider, mutate2, unmount];
  }
  return [provider, SWRGlobalState.get(provider)[5]];
};
var onErrorRetry = function(_, __, config, revalidate, opts) {
  var maxRetryCount = config.errorRetryCount;
  var currentRetryCount = opts.retryCount;
  var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var _a = initCache(new Map()), cache = _a[0], mutate = _a[1];
var defaultConfig = mergeObjects({
  onLoadingSlow: noop,
  onSuccess: noop,
  onError: noop,
  onErrorRetry,
  onDiscarded: noop,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  revalidateIfStale: true,
  shouldRetryOnError: true,
  errorRetryInterval: slowConnection ? 1e4 : 5e3,
  focusThrottleInterval: 5 * 1e3,
  dedupingInterval: 2 * 1e3,
  loadingTimeout: slowConnection ? 5e3 : 3e3,
  compare: function(currentData, newData) {
    return stableHash(currentData) == stableHash(newData);
  },
  isPaused: function() {
    return false;
  },
  cache,
  mutate,
  fallback: {}
}, preset);
var mergeConfigs = function(a, b) {
  var v = mergeObjects(a, b);
  if (b) {
    var u1 = a.use, f1 = a.fallback;
    var u2 = b.use, f2 = b.fallback;
    if (u1 && u2) {
      v.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }
  return v;
};
var SWRConfigContext = createContext({});
var SWRConfig$1 = function(props) {
  var value = props.value;
  var extendedConfig = mergeConfigs(useContext(SWRConfigContext), value);
  var provider = value && value.provider;
  var cacheContext = useState(function() {
    return provider ? initCache(provider(extendedConfig.cache || cache), value) : UNDEFINED;
  })[0];
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(function() {
    return cacheContext ? cacheContext[2] : UNDEFINED;
  }, []);
  return createElement(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
var useStateWithDeps = function(state, unmountedRef) {
  var rerender = useState({})[1];
  var stateRef = useRef(state);
  var stateDependenciesRef = useRef({
    data: false,
    error: false,
    isValidating: false
  });
  var setState = useCallback(function(payload) {
    var shouldRerender = false;
    var currentState = stateRef.current;
    for (var _ in payload) {
      var k = _;
      if (currentState[k] !== payload[k]) {
        currentState[k] = payload[k];
        if (stateDependenciesRef.current[k]) {
          shouldRerender = true;
        }
      }
    }
    if (shouldRerender && !unmountedRef.current) {
      rerender({});
    }
  }, []);
  useIsomorphicLayoutEffect(function() {
    stateRef.current = state;
  });
  return [stateRef, stateDependenciesRef.current, setState];
};
var normalize = function(args) {
  return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};
var useSWRConfig = function() {
  return mergeObjects(defaultConfig, useContext(SWRConfigContext));
};
var withArgs = function(hook) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var fallbackConfig = useSWRConfig();
    var _a2 = normalize(args), key = _a2[0], fn = _a2[1], _config = _a2[2];
    var config = mergeConfigs(fallbackConfig, _config);
    var next = hook;
    var use = config.use;
    if (use) {
      for (var i = use.length; i-- > 0; ) {
        next = use[i](next);
      }
    }
    return next(key, fn || config.fetcher, config);
  };
};
var subscribeCallback = function(key, callbacks, callback) {
  var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return function() {
    var index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
var WITH_DEDUPE = {dedupe: true};
var useSWRHandler = function(_key, fetcher, config) {
  var cache2 = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], MUTATION_TS = _a2[2], MUTATION_END_TS = _a2[3], CONCURRENT_REQUESTS = _a2[4];
  var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyErr = _b[2], keyValidating = _b[3];
  var initialMountedRef = useRef(false);
  var unmountedRef = useRef(false);
  var keyRef = useRef(key);
  var fetcherRef = useRef(fetcher);
  var configRef = useRef(config);
  var getConfig = function() {
    return configRef.current;
  };
  var isActive = function() {
    return getConfig().isVisible() && getConfig().isOnline();
  };
  var cached = cache2.get(key);
  var fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  var data = isUndefined(cached) ? fallback : cached;
  var error = cache2.get(keyErr);
  var shouldRevalidateOnMount = function() {
    if (!isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    return suspense ? !isUndefined(data) : isUndefined(data) || config.revalidateIfStale;
  };
  var resolveValidating = function() {
    if (!key || !fetcher)
      return false;
    if (cache2.get(keyValidating))
      return true;
    return !initialMountedRef.current && shouldRevalidateOnMount();
  };
  var isValidating = resolveValidating();
  var _c = useStateWithDeps({
    data,
    error,
    isValidating
  }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
  var revalidate = useCallback(function(revalidateOpts) {
    return __awaiter(void 0, void 0, void 0, function() {
      var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, err_1;
      var _a3;
      return __generator(this, function(_b2) {
        switch (_b2.label) {
          case 0:
            currentFetcher = fetcherRef.current;
            if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
              return [2, false];
            }
            loading = true;
            opts = revalidateOpts || {};
            shouldStartNewRequest = !CONCURRENT_REQUESTS[key] || !opts.dedupe;
            isCurrentKeyMounted = function() {
              return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            };
            cleanupState = function() {
              var requestInfo = CONCURRENT_REQUESTS[key];
              if (requestInfo && requestInfo[1] === startAt) {
                delete CONCURRENT_REQUESTS[key];
              }
            };
            newState = {isValidating: false};
            finishRequestAndUpdateState = function() {
              cache2.set(keyValidating, false);
              if (isCurrentKeyMounted()) {
                setState(newState);
              }
            };
            cache2.set(keyValidating, true);
            setState({isValidating: true});
            _b2.label = 1;
          case 1:
            _b2.trys.push([1, 3, , 4]);
            if (shouldStartNewRequest) {
              broadcastState(cache2, key, stateRef.current.data, stateRef.current.error, true);
              if (config.loadingTimeout && !cache2.get(key)) {
                setTimeout(function() {
                  if (loading && isCurrentKeyMounted()) {
                    getConfig().onLoadingSlow(key, config);
                  }
                }, config.loadingTimeout);
              }
              CONCURRENT_REQUESTS[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
            }
            _a3 = CONCURRENT_REQUESTS[key], newData = _a3[0], startAt = _a3[1];
            return [4, newData];
          case 2:
            newData = _b2.sent();
            if (shouldStartNewRequest) {
              setTimeout(cleanupState, config.dedupingInterval);
            }
            if (!CONCURRENT_REQUESTS[key] || CONCURRENT_REQUESTS[key][1] !== startAt) {
              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onDiscarded(key);
                }
              }
              return [2, false];
            }
            cache2.set(keyErr, UNDEFINED);
            newState.error = UNDEFINED;
            if (!isUndefined(MUTATION_TS[key]) && (startAt <= MUTATION_TS[key] || startAt <= MUTATION_END_TS[key] || MUTATION_END_TS[key] === 0)) {
              finishRequestAndUpdateState();
              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onDiscarded(key);
                }
              }
              return [2, false];
            }
            if (!compare(stateRef.current.data, newData)) {
              newState.data = newData;
            } else {
              newState.data = stateRef.current.data;
            }
            if (!compare(cache2.get(key), newData)) {
              cache2.set(key, newData);
            }
            if (shouldStartNewRequest) {
              if (isCurrentKeyMounted()) {
                getConfig().onSuccess(newData, key, config);
              }
            }
            return [3, 4];
          case 3:
            err_1 = _b2.sent();
            cleanupState();
            if (!getConfig().isPaused()) {
              cache2.set(keyErr, err_1);
              newState.error = err_1;
              if (shouldStartNewRequest && isCurrentKeyMounted()) {
                getConfig().onError(err_1, key, config);
                if (config.shouldRetryOnError) {
                  if (isActive()) {
                    getConfig().onErrorRetry(err_1, key, config, revalidate, {
                      retryCount: (opts.retryCount || 0) + 1,
                      dedupe: true
                    });
                  }
                }
              }
            }
            return [3, 4];
          case 4:
            loading = false;
            finishRequestAndUpdateState();
            if (isCurrentKeyMounted() && shouldStartNewRequest) {
              broadcastState(cache2, key, newState.data, newState.error, false);
            }
            return [2, true];
        }
      });
    });
  }, [key]);
  var boundMutate = useCallback(internalMutate.bind(UNDEFINED, cache2, function() {
    return keyRef.current;
  }), []);
  useIsomorphicLayoutEffect(function() {
    fetcherRef.current = fetcher;
    configRef.current = config;
  });
  useIsomorphicLayoutEffect(function() {
    if (!key)
      return;
    var keyChanged = initialMountedRef.current;
    var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    var onStateUpdate = function(updatedData, updatedError, updatedIsValidating) {
      setState(mergeObjects({
        error: updatedError,
        isValidating: updatedIsValidating
      }, compare(stateRef.current.data, updatedData) ? UNDEFINED : {
        data: updatedData
      }));
    };
    var nextFocusRevalidatedAt = 0;
    var onRevalidate = function(type) {
      if (type == FOCUS_EVENT) {
        var now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == MUTATE_EVENT) {
        return revalidate();
      }
      return;
    };
    var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
    var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    if (keyChanged) {
      setState({
        data,
        error,
        isValidating
      });
    }
    if (shouldRevalidateOnMount()) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return function() {
      unmountedRef.current = true;
      unsubUpdate();
      unsubEvents();
    };
  }, [key, revalidate]);
  useIsomorphicLayoutEffect(function() {
    var timer;
    function next() {
      var interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return function() {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
  useDebugValue(data);
  if (suspense && isUndefined(data) && key) {
    throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return data;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    }
  };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, "default", {
  value: defaultConfig
});
var unstable_serialize = function(key) {
  return serialize(key)[0];
};
var useSWR = withArgs(useSWRHandler);
export default useSWR;
export {SWRConfig, mutate, unstable_serialize, useSWRConfig};
