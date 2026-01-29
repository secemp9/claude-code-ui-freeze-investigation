// Module: Ru1
// Dependencies: YD, ag

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ru1 = v(VD8 => {
  Object.defineProperty(VD8, "__esModule", {
    value: !0
  });
  var Cu1 = __$.YD(),
    Lu1 = __$.ag(),
    GsA = null;
  function ARq(A) {
    Lu1.addHandler("error", A), Lu1.maybeInstrument("error", KRq);
  }
  function KRq() {
    GsA = Cu1.GLOBAL_OBJ.onerror, Cu1.GLOBAL_OBJ.onerror = function (A, K, q, Y, z) {
      let w = {
        column: Y,
        error: z,
        line: q,
        msg: A,
        url: K
      };
      if (Lu1.triggerHandlers("error", w), GsA && !GsA.__SENTRY_LOADER__) return GsA.apply(this, arguments);
      return !1;
    }, Cu1.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0;
  }
  VD8.addGlobalErrorInstrumentationHandler = ARq;
});

// Register to shared state
__$.Ru1 = Ru1;
