// Module: n31
// Dependencies: l31, i31

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var n31 = v(QW4 => {
  Object.defineProperty(QW4, "__esModule", {
    value: !0
  });
  QW4.wrapSpanContext = QW4.isSpanContextValid = QW4.isValidSpanId = QW4.isValidTraceId = void 0;
  var mW4 = __$.l31(),
    $79 = __$.i31(),
    _79 = /^([0-9a-f]{32})$/i,
    G79 = /^[0-9a-f]{16}$/i;
  function gW4(A) {
    return _79.test(A) && A !== mW4.INVALID_TRACEID;
  }
  QW4.isValidTraceId = gW4;
  function FW4(A) {
    return G79.test(A) && A !== mW4.INVALID_SPANID;
  }
  QW4.isValidSpanId = FW4;
  function Z79(A) {
    return gW4(A.traceId) && FW4(A.spanId);
  }
  QW4.isSpanContextValid = Z79;
  function W79(A) {
    return new $79.NonRecordingSpan(A);
  }
  QW4.wrapSpanContext = W79;
});

// Register to shared state
__$.n31 = n31;
