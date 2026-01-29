// Module: dh1
// Dependencies: tP, doA, mS1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dh1 = v(L98 => {
  Object.defineProperty(L98, "__esModule", {
    value: !0
  });
  L98.sampleTime = void 0;
  var QHq = __$.tP(),
    UHq = __$.doA(),
    pHq = __$.mS1();
  function dHq(A, K) {
    if (K === void 0) K = QHq.asyncScheduler;
    return UHq.sample(pHq.interval(A, K));
  }
  L98.sampleTime = dHq;
});

// Register to shared state
__$.dh1 = dh1;
