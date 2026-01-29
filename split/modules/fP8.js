// Module: fP8
// Dependencies: gsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fP8 = v(VP8 => {
  Object.defineProperty(VP8, "__esModule", {
    value: !0
  });
  var uFq = __$.gsA();
  function BFq(A, K, q) {
    let Y = uFq.getActiveTransaction();
    if (Y) Y.setMeasurement(A, K, q);
  }
  VP8.setMeasurement = BFq;
});

// Register to shared state
__$.fP8 = fP8;
