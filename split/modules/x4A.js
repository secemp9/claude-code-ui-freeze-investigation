// Module: x4A
// Dependencies: mZ4, UZ4, p31, b4A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var x4A = v(dZ4 => {
  Object.defineProperty(dZ4, "__esModule", {
    value: !0
  });
  dZ4.DiagAPI = void 0;
  var N49 = __$.mZ4(),
    T49 = __$.UZ4(),
    pZ4 = __$.p31(),
    d31 = __$.b4A(),
    v49 = "diag";
  class iq6 {
    constructor() {
      function A(Y) {
        return function (...z) {
          let w = (0, d31.getGlobal)("diag");
          if (!w) return;
          return w[Y](...z);
        };
      }
      let K = this,
        q = (Y, z = {
          logLevel: pZ4.DiagLogLevel.INFO
        }) => {
          var w, H, J;
          if (Y === K) {
            let $ = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
            return K.error((w = $.stack) !== null && w !== void 0 ? w : $.message), !1;
          }
          if (typeof z === "number") z = {
            logLevel: z
          };
          let O = (0, d31.getGlobal)("diag"),
            X = (0, T49.createLogLevelDiagLogger)((H = z.logLevel) !== null && H !== void 0 ? H : pZ4.DiagLogLevel.INFO, Y);
          if (O && !z.suppressOverrideMessage) {
            let $ = (J = Error().stack) !== null && J !== void 0 ? J : "<failed to generate stacktrace>";
            O.warn(`Current logger will be overwritten from ${$}`), X.warn(`Current logger will overwrite one already registered from ${$}`);
          }
          return (0, d31.registerGlobal)("diag", X, K, !0);
        };
      K.setLogger = q, K.disable = () => {
        (0, d31.unregisterGlobal)(v49, K);
      }, K.createComponentLogger = Y => {
        return new N49.DiagComponentLogger(Y);
      }, K.verbose = A("verbose"), K.debug = A("debug"), K.info = A("info"), K.warn = A("warn"), K.error = A("error");
    }
    static instance() {
      if (!this._instance) this._instance = new iq6();
      return this._instance;
    }
  }
  dZ4.DiagAPI = iq6;
});

// Register to shared state
__$.x4A = x4A;
