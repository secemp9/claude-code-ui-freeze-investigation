// Module: gC4
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gC4 = v(BC4 => {
  Object.defineProperty(BC4, "__esModule", {
    value: !0
  });
  BC4.diagLogLevelFromString = void 0;
  var QQ = __$.RK(),
    uC4 = {
      ALL: QQ.DiagLogLevel.ALL,
      VERBOSE: QQ.DiagLogLevel.VERBOSE,
      DEBUG: QQ.DiagLogLevel.DEBUG,
      INFO: QQ.DiagLogLevel.INFO,
      WARN: QQ.DiagLogLevel.WARN,
      ERROR: QQ.DiagLogLevel.ERROR,
      NONE: QQ.DiagLogLevel.NONE
    };
  function pX9(A) {
    if (A == null) return;
    let K = uC4[A.toUpperCase()];
    if (K == null) return QQ.diag.warn(`Unknown log level "${A}", expected one of ${Object.keys(uC4)}, using default`), QQ.DiagLogLevel.INFO;
    return K;
  }
  BC4.diagLogLevelFromString = pX9;
});

// Register to shared state
__$.gC4 = gC4;
