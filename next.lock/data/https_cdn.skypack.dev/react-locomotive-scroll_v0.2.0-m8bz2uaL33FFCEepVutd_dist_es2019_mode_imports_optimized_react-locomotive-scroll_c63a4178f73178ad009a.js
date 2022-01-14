import "/error/unknown:tslib?from=react-locomotive-scroll";
;
import jsx_runtime_1 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/unoptimized/jsx-runtime.js";
import react_1 from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
import * as useDebounce from "/-/use-debounce@v6.0.1-kPdnU6LBjF3KyyksWvJf/dist=es2019,mode=imports/optimized/use-debounce.js";
import * as useResizeObserver from "/-/use-resize-observer@v6.1.0-OovVA7NDVIKV94ep9ZeR/dist=es2019,mode=imports/optimized/use-resize-observer.js";
import * as locomotiveScroll from "/-/locomotive-scroll@v4.1.3-kLKy1BnSl2321jA6XmWV/dist=es2019,mode=imports/optimized/locomotive-scroll.js";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module2) {
  return module2 = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module2.path : base);
    }
  }, fn(module2, module2.exports), module2.exports;
}
function getDefaultExportFromNamespaceIfNotNamed(n) {
  return n && Object.prototype.hasOwnProperty.call(n, "default") && Object.keys(n).length === 1 ? n["default"] : n;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var use_debounce_1 = /* @__PURE__ */ getDefaultExportFromNamespaceIfNotNamed(useDebounce);
var require$$0 = /* @__PURE__ */ getDefaultExportFromNamespaceIfNotNamed(useResizeObserver);
var require$$1 = /* @__PURE__ */ getDefaultExportFromNamespaceIfNotNamed(locomotiveScroll);
var LocomotiveScroll_context = createCommonjsModule(function(module2, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LocomotiveScrollProvider = exports.LocomotiveScrollContext = void 0;
  const use_resize_observer_1 = tslib_1.__importDefault(require$$0);
  exports.LocomotiveScrollContext = react_1.createContext({
    scroll: null,
    isReady: false
  });
  function LocomotiveScrollProvider2({children, options, containerRef, watch, onUpdate, location, onLocationChange}) {
    const {height: containerHeight} = use_resize_observer_1.default({ref: containerRef});
    const [isReady, setIsReady] = react_1.useState(false);
    const LocomotiveScrollRef = react_1.useRef(null);
    const [height] = use_debounce_1.useDebounce(containerHeight, 100);
    if (!watch) {
      console.warn("react-locomotive-scroll: you did not add any props to watch. Scroll may have weird behaviours if the instance is not updated when the route changes");
    }
    react_1.useEffect(() => {
      (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
          const LocomotiveScroll = (yield Promise.resolve().then(() => tslib_1.__importStar(require$$1))).default;
          const dataScrollContainer = document.querySelector("[data-scroll-container]");
          if (!dataScrollContainer) {
            console.warn(`react-locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.`);
          }
          LocomotiveScrollRef.current = new LocomotiveScroll(Object.assign({el: dataScrollContainer !== null && dataScrollContainer !== void 0 ? dataScrollContainer : void 0}, options));
          setIsReady(true);
        } catch (error) {
          throw Error(`react-locomotive-scroll: ${error}`);
        }
      }))();
      return () => {
        var _a;
        (_a = LocomotiveScrollRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        setIsReady(false);
      };
    }, []);
    react_1.useEffect(() => {
      if (!LocomotiveScrollRef.current) {
        return;
      }
      LocomotiveScrollRef.current.update();
      if (onUpdate) {
        onUpdate(LocomotiveScrollRef.current);
      }
    }, watch ? [...watch, height] : [height]);
    react_1.useEffect(() => {
      if (!LocomotiveScrollRef.current || !location) {
        return;
      }
      LocomotiveScrollRef.current.update();
      if (onLocationChange) {
        onLocationChange(LocomotiveScrollRef.current);
      }
    }, [location]);
    return jsx_runtime_1.jsx(exports.LocomotiveScrollContext.Provider, Object.assign({value: {scroll: LocomotiveScrollRef.current, isReady}}, {children}), void 0);
  }
  exports.LocomotiveScrollProvider = LocomotiveScrollProvider2;
  exports.LocomotiveScrollContext.displayName = "LocomotiveScrollContext";
  LocomotiveScrollProvider2.displayName = "LocomotiveScrollProvider";
});
var useLocomotiveScroll_hook = createCommonjsModule(function(module2, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.useLocomotiveScroll = void 0;
  function useLocomotiveScroll2() {
    const context = react_1.useContext(LocomotiveScroll_context.LocomotiveScrollContext);
    react_1.useEffect(() => {
      if (!context.scroll) {
        console.warn("react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider.");
      }
    }, [context.scroll]);
    return context;
  }
  exports.useLocomotiveScroll = useLocomotiveScroll2;
  useLocomotiveScroll2.displayName = "useLocomotiveScroll";
});
var module = createCommonjsModule(function(module2, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.useLocomotiveScroll = exports.LocomotiveScrollProvider = exports.LocomotiveScrollContext = void 0;
  Object.defineProperty(exports, "LocomotiveScrollContext", {enumerable: true, get: function() {
    return LocomotiveScroll_context.LocomotiveScrollContext;
  }});
  Object.defineProperty(exports, "LocomotiveScrollProvider", {enumerable: true, get: function() {
    return LocomotiveScroll_context.LocomotiveScrollProvider;
  }});
  Object.defineProperty(exports, "useLocomotiveScroll", {enumerable: true, get: function() {
    return useLocomotiveScroll_hook.useLocomotiveScroll;
  }});
});
var __pika_web_default_export_for_treeshaking__ = /* @__PURE__ */ getDefaultExportFromCjs(module);
var LocomotiveScrollContext = module.LocomotiveScrollContext;
var LocomotiveScrollProvider = module.LocomotiveScrollProvider;
export default __pika_web_default_export_for_treeshaking__;
var useLocomotiveScroll = module.useLocomotiveScroll;
export {LocomotiveScrollContext, LocomotiveScrollProvider, module as __moduleExports, useLocomotiveScroll};
