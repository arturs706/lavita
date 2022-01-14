import "/-/object-assign@v4.1.1-LbCnB3r2y2yFmhmiCfPn/dist=es2019,mode=imports/optimized/object-assign.js";
import f from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
function createCommonjsModule(fn) {
  var module = {exports: {}};
  return fn(module, module.exports), module.exports;
}
/** @license React v17.0.1
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __VIRTUAL_FILE = createCommonjsModule(function(module, exports) {
  var g = 60103;
  exports.Fragment = 60107;
  if (typeof Symbol === "function" && Symbol.for) {
    var h = Symbol.for;
    g = h("react.element");
    exports.Fragment = h("react.fragment");
  }
  var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = {key: true, ref: true, __self: true, __source: true};
  function q(c, a, k) {
    var b, d = {}, e = null, l = null;
    k !== void 0 && (e = "" + k);
    a.key !== void 0 && (e = "" + a.key);
    a.ref !== void 0 && (l = a.ref);
    for (b in a)
      n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        d[b] === void 0 && (d[b] = a[b]);
    return {$$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current};
  }
  exports.jsx = q;
  exports.jsxs = q;
});
export default __VIRTUAL_FILE;
