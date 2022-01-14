import require$$0 from "../unoptimized/cjs/react-jsx-runtime.production.min.js";
import require$$1 from "../unoptimized/cjs/react-jsx-runtime.development.js";
function createCommonjsModule(fn) {
  var module = {exports: {}};
  return fn(module, module.exports), module.exports;
}
var __VIRTUAL_FILE = createCommonjsModule(function(module) {
  if (process.env.NODE_ENV === "production") {
    module.exports = require$$0;
  } else {
    module.exports = require$$1;
  }
});
export default __VIRTUAL_FILE;
