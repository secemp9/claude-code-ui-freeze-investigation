// Module: ag
// Dependencies: Xb, xR, OsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ag = v(HD8 => {
  Object.defineProperty(HD8, "__esModule", {
    value: !0
  });
  var pCq = __$.Xb(),
    dCq = __$.xR(),
    cCq = __$.OsA(),
    wHA = {},
    wD8 = {};
  function lCq(A, K) {
    wHA[A] = wHA[A] || [], wHA[A].push(K);
  }
  function iCq() {
    Object.keys(wHA).forEach(A => {
      wHA[A] = void 0;
    });
  }
  function nCq(A, K) {
    if (!wD8[A]) K(), wD8[A] = !0;
  }
  function rCq(A, K) {
    let q = A && wHA[A];
    if (!q) return;
    for (let Y of q) try {
      Y(K);
    } catch (z) {
      pCq.DEBUG_BUILD && dCq.logger.error(`Error while triggering instrumentation handler.
Type: ${A}
Name: ${cCq.getFunctionName(Y)}
Error:`, z);
    }
  }
  HD8.addHandler = lCq;
  HD8.maybeInstrument = nCq;
  HD8.resetInstrumentationHandlers = iCq;
  HD8.triggerHandlers = rCq;
});

// Register to shared state
__$.ag = ag;
