// Module: TIA
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TIA = v(pj4 => {
  Object.defineProperty(pj4, "__esModule", {
    value: !0
  });
  pj4.isTracingSuppressed = pj4.unsuppressTracing = pj4.suppressTracing = void 0;
  var QK9 = __$.RK(),
    i56 = (0, QK9.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
  function UK9(A) {
    return A.setValue(i56, !0);
  }
  pj4.suppressTracing = UK9;
  function pK9(A) {
    return A.deleteValue(i56);
  }
  pj4.unsuppressTracing = pK9;
  function dK9(A) {
    return A.getValue(i56) === !0;
  }
  pj4.isTracingSuppressed = dK9;
});

// Register to shared state
__$.TIA = TIA;
