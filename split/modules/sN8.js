// Module: sN8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sN8 = v(aN8 => {
  Object.defineProperty(aN8, "__esModule", {
    value: !0
  });
  function Crq(A) {
    return typeof A === "number" && isFinite(A);
  }
  function Lrq(A, {
    startTimestamp: K,
    ...q
  }) {
    if (K && A.startTimestamp > K) A.startTimestamp = K;
    return A.startChild({
      startTimestamp: K,
      ...q
    });
  }
  aN8._startChild = Lrq;
  aN8.isMeasurementValue = Crq;
});

// Register to shared state
__$.sN8 = sN8;
