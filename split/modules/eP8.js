// Module: eP8
// Dependencies: H8, FX, xE, Gb

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eP8 = v(tP8 => {
  Object.defineProperty(tP8, "__esModule", {
    value: !0
  });
  var aP8 = __$.H8(),
    hUq = __$.FX(),
    bUq = __$.xE(),
    xUq = __$.Gb();
  function uUq(A, K) {
    if (K.debug === !0) if (hUq.DEBUG_BUILD) aP8.logger.enable();else aP8.consoleSandbox(() => {
      console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
    });
    bUq.getCurrentScope().update(K.initialScope);
    let Y = new A(K);
    sP8(Y), BUq(Y);
  }
  function sP8(A) {
    let q = xUq.getCurrentHub().getStackTop();
    q.client = A, q.scope.setClient(A);
  }
  function BUq(A) {
    if (A.init) A.init();else if (A.setupIntegrations) A.setupIntegrations();
  }
  tP8.initAndBind = uUq;
  tP8.setCurrentClient = sP8;
});

// Register to shared state
__$.eP8 = eP8;
