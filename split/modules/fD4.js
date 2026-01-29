// Module: fD4
// Dependencies: MD4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fD4 = v(PD4 => {
  Object.defineProperty(PD4, "__esModule", {
    value: !0
  });
  PD4.createTraceState = void 0;
  var F79 = __$.MD4();
  function Q79(A) {
    return new F79.TraceStateImpl(A);
  }
  PD4.createTraceState = Q79;
});

// Register to shared state
__$.fD4 = fD4;
