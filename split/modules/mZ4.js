// Module: mZ4
// Dependencies: b4A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mZ4 = v(uZ4 => {
  Object.defineProperty(uZ4, "__esModule", {
    value: !0
  });
  uZ4.DiagComponentLogger = void 0;
  var P49 = __$.b4A();
  class xZ4 {
    constructor(A) {
      this._namespace = A.namespace || "DiagComponentLogger";
    }
    debug(...A) {
      return PIA("debug", this._namespace, A);
    }
    error(...A) {
      return PIA("error", this._namespace, A);
    }
    info(...A) {
      return PIA("info", this._namespace, A);
    }
    warn(...A) {
      return PIA("warn", this._namespace, A);
    }
    verbose(...A) {
      return PIA("verbose", this._namespace, A);
    }
  }
  uZ4.DiagComponentLogger = xZ4;
  function PIA(A, K, q) {
    let Y = (0, P49.getGlobal)("diag");
    if (!Y) return;
    return q.unshift(K), Y[A](...q);
  }
});

// Register to shared state
__$.mZ4 = mZ4;
