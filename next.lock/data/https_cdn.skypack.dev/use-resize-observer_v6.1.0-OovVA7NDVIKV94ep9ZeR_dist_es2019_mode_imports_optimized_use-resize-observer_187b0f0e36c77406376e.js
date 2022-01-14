import {useRef, useState, useEffect, useMemo} from "/-/react@v17.0.1-tOtrZxBRexARODgO0jli/dist=es2019,mode=imports/optimized/react.js";
function useResizeObserver(opts) {
  if (opts === void 0) {
    opts = {};
  }
  var defaultRef = useRef(null);
  var onResize = opts.onResize;
  var onResizeRef = useRef(void 0);
  onResizeRef.current = onResize;
  var resizeObserverRef = useRef();
  var ref = opts.ref || defaultRef;
  var _useState = useState({
    width: void 0,
    height: void 0
  }), size = _useState[0], setSize = _useState[1];
  var previous = useRef({
    width: void 0,
    height: void 0
  });
  useEffect(function() {
    if (resizeObserverRef.current) {
      return;
    }
    resizeObserverRef.current = new ResizeObserver(function(entries) {
      if (!Array.isArray(entries)) {
        return;
      }
      if (!entries.length) {
        return;
      }
      var entry = entries[0];
      var newWidth = Math.round(entry.contentRect.width);
      var newHeight = Math.round(entry.contentRect.height);
      if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
        var newSize = {
          width: newWidth,
          height: newHeight
        };
        if (onResizeRef.current) {
          onResizeRef.current(newSize);
        } else {
          previous.current.width = newWidth;
          previous.current.height = newHeight;
          setSize(newSize);
        }
      }
    });
  }, []);
  useEffect(function() {
    if (typeof ref !== "object" || ref === null || !(ref.current instanceof Element)) {
      return;
    }
    var element = ref.current;
    resizeObserverRef.current.observe(element);
    return function() {
      return resizeObserverRef.current.unobserve(element);
    };
  }, [ref]);
  return useMemo(function() {
    return {
      ref,
      width: size.width,
      height: size.height
    };
  }, [ref, size ? size.width : null, size ? size.height : null]);
}
export default useResizeObserver;
