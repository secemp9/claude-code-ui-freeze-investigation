// Module: FsA
// Dependencies: H8, FX, gsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FsA = v(iM8 => {
  Object.defineProperty(iM8, "__esModule", {
    value: !0
  });
  var fB1 = __$.H8(),
    Ogq = __$.FX(),
    Xgq = __$.gsA(),
    lM8 = !1;
  function $gq() {
    if (lM8) return;
    lM8 = !0, fB1.addGlobalErrorInstrumentationHandler(NB1), fB1.addGlobalUnhandledRejectionInstrumentationHandler(NB1);
  }
  function NB1() {
    let A = Xgq.getActiveTransaction();
    if (A) Ogq.DEBUG_BUILD && fB1.logger.log("[Tracing] Transaction: internal_error -> Global error occured"), A.setStatus("internal_error");
  }
  NB1.tag = "sentry_tracingErrorCallback";
  iM8.registerErrorInstrumentation = $gq;
});

// Register to shared state
__$.FsA = FsA;
