// Module: Su1
// Dependencies: YD, ag

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Su1 = v(fD8 => {
  Object.defineProperty(fD8, "__esModule", {
    value: !0
  });
  var yu1 = __$.YD(),
    Iu1 = __$.ag(),
    ZsA = null;
  function YRq(A) {
    Iu1.addHandler("unhandledrejection", A), Iu1.maybeInstrument("unhandledrejection", zRq);
  }
  function zRq() {
    ZsA = yu1.GLOBAL_OBJ.onunhandledrejection, yu1.GLOBAL_OBJ.onunhandledrejection = function (A) {
      let K = A;
      if (Iu1.triggerHandlers("unhandledrejection", K), ZsA && !ZsA.__SENTRY_LOADER__) return ZsA.apply(this, arguments);
      return !0;
    }, yu1.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
  }
  fD8.addGlobalUnhandledRejectionInstrumentationHandler = YRq;
});

// Register to shared state
__$.Su1 = Su1;
