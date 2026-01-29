// Module: UZ4
// Dependencies: p31

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UZ4 = v(FZ4 => {
  Object.defineProperty(FZ4, "__esModule", {
    value: !0
  });
  FZ4.createLogLevelDiagLogger = void 0;
  var mQ = __$.p31();
  function f49(A, K) {
    if (A < mQ.DiagLogLevel.NONE) A = mQ.DiagLogLevel.NONE;else if (A > mQ.DiagLogLevel.ALL) A = mQ.DiagLogLevel.ALL;
    K = K || {};
    function q(Y, z) {
      let w = K[Y];
      if (typeof w === "function" && A >= z) return w.bind(K);
      return function () {};
    }
    return {
      error: q("error", mQ.DiagLogLevel.ERROR),
      warn: q("warn", mQ.DiagLogLevel.WARN),
      info: q("info", mQ.DiagLogLevel.INFO),
      debug: q("debug", mQ.DiagLogLevel.DEBUG),
      verbose: q("verbose", mQ.DiagLogLevel.VERBOSE)
    };
  }
  FZ4.createLogLevelDiagLogger = f49;
});

// Register to shared state
__$.UZ4 = UZ4;
