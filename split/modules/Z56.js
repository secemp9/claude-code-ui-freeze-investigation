// Module: Z56
// Dependencies: VIA, i31, NIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z56 = v(uW4 => {
  Object.defineProperty(uW4, "__esModule", {
    value: !0
  });
  uW4.getSpanContext = uW4.setSpanContext = uW4.deleteSpan = uW4.setSpan = uW4.getActiveSpan = uW4.getSpan = void 0;
  var t49 = __$.VIA(),
    e49 = __$.i31(),
    A79 = __$.NIA(),
    _56 = (0, t49.createContextKey)("OpenTelemetry Context Key SPAN");
  function G56(A) {
    return A.getValue(_56) || void 0;
  }
  uW4.getSpan = G56;
  function K79() {
    return G56(A79.ContextAPI.getInstance().active());
  }
  uW4.getActiveSpan = K79;
  function xW4(A, K) {
    return A.setValue(_56, K);
  }
  uW4.setSpan = xW4;
  function q79(A) {
    return A.deleteValue(_56);
  }
  uW4.deleteSpan = q79;
  function Y79(A, K) {
    return xW4(A, new e49.NonRecordingSpan(K));
  }
  uW4.setSpanContext = Y79;
  function z79(A) {
    var K;
    return (K = G56(A)) === null || K === void 0 ? void 0 : K.spanContext();
  }
  uW4.getSpanContext = z79;
});

// Register to shared state
__$.Z56 = Z56;
