import __commonjs_module0 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
const {useRef} = __commonjs_module0;
const {useEffect} = __commonjs_module0;
const {useMemo} = __commonjs_module0;
const {useCallback} = __commonjs_module0;
const {useState} = __commonjs_module0;
;
function useDebouncedCallback(func, wait, options) {
  var _this = this;
  var lastCallTime = useRef(null);
  var lastInvokeTime = useRef(0);
  var timerId = useRef(null);
  var lastArgs = useRef([]);
  var lastThis = useRef();
  var result = useRef();
  var funcRef = useRef(func);
  var mounted = useRef(true);
  funcRef.current = func;
  var useRAF = !wait && wait !== 0 && typeof window !== "undefined";
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  wait = +wait || 0;
  options = options || {};
  var leading = !!options.leading;
  var trailing = "trailing" in options ? !!options.trailing : true;
  var maxing = "maxWait" in options;
  var maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : null;
  useEffect(function() {
    mounted.current = true;
    return function() {
      mounted.current = false;
    };
  }, []);
  var debounced = useMemo(function() {
    var invokeFunc = function(time) {
      var args = lastArgs.current;
      var thisArg = lastThis.current;
      lastArgs.current = lastThis.current = null;
      lastInvokeTime.current = time;
      return result.current = funcRef.current.apply(thisArg, args);
    };
    var startTimer = function(pendingFunc, wait2) {
      if (useRAF)
        cancelAnimationFrame(timerId.current);
      timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait2);
    };
    var shouldInvoke = function(time) {
      if (!mounted.current)
        return false;
      var timeSinceLastCall = time - lastCallTime.current;
      var timeSinceLastInvoke = time - lastInvokeTime.current;
      return !lastCallTime.current || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    };
    var trailingEdge = function(time) {
      timerId.current = null;
      if (trailing && lastArgs.current) {
        return invokeFunc(time);
      }
      lastArgs.current = lastThis.current = null;
      return result.current;
    };
    var timerExpired = function() {
      var time = Date.now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      if (!mounted.current) {
        return;
      }
      var timeSinceLastCall = time - lastCallTime.current;
      var timeSinceLastInvoke = time - lastInvokeTime.current;
      var timeWaiting = wait - timeSinceLastCall;
      var remainingWait = maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      startTimer(timerExpired, remainingWait);
    };
    var func2 = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var time = Date.now();
      var isInvoking = shouldInvoke(time);
      lastArgs.current = args;
      lastThis.current = _this;
      lastCallTime.current = time;
      if (isInvoking) {
        if (!timerId.current && mounted.current) {
          lastInvokeTime.current = lastCallTime.current;
          startTimer(timerExpired, wait);
          return leading ? invokeFunc(lastCallTime.current) : result.current;
        }
        if (maxing) {
          startTimer(timerExpired, wait);
          return invokeFunc(lastCallTime.current);
        }
      }
      if (!timerId.current) {
        startTimer(timerExpired, wait);
      }
      return result.current;
    };
    func2.cancel = function() {
      if (timerId.current) {
        useRAF ? cancelAnimationFrame(timerId.current) : clearTimeout(timerId.current);
      }
      lastInvokeTime.current = 0;
      lastArgs.current = lastCallTime.current = lastThis.current = timerId.current = null;
    };
    func2.isPending = function() {
      return !!timerId.current;
    };
    func2.flush = function() {
      return !timerId.current ? result.current : trailingEdge(Date.now());
    };
    return func2;
  }, [leading, maxing, wait, maxWait, trailing, useRAF]);
  return debounced;
}
function valueEquality(left, right) {
  return left === right;
}
function adjustFunctionValueOfSetState(value) {
  return typeof value === "function" ? function() {
    return value;
  } : value;
}
function useStateIgnoreCallback(initialState) {
  var _a = useState(adjustFunctionValueOfSetState(initialState)), state = _a[0], setState = _a[1];
  var setStateIgnoreCallback = useCallback(function(value) {
    return setState(adjustFunctionValueOfSetState(value));
  }, []);
  return [state, setStateIgnoreCallback];
}
function useDebounce(value, delay, options) {
  var eq = options && options.equalityFn || valueEquality;
  var _a = useStateIgnoreCallback(value), state = _a[0], dispatch = _a[1];
  var debounced = useDebouncedCallback(useCallback(function(value2) {
    return dispatch(value2);
  }, [dispatch]), delay, options);
  var previousValue = useRef(value);
  useEffect(function() {
    if (!eq(previousValue.current, value)) {
      debounced(value);
      previousValue.current = value;
    }
  }, [value, debounced, eq]);
  return [state, {cancel: debounced.cancel, isPending: debounced.isPending, flush: debounced.flush}];
}
function useThrottledCallback(func, wait, _a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.leading, leading = _c === void 0 ? true : _c, _d = _b.trailing, trailing = _d === void 0 ? true : _d;
  return useDebouncedCallback(func, wait, {
    maxWait: wait,
    leading,
    trailing
  });
}
export {useDebounce, useDebouncedCallback, useThrottledCallback};
export default null;
