// Module: l31
// Dependencies: $56

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var l31 = v(LW4 => {
  Object.defineProperty(LW4, "__esModule", {
    value: !0
  });
  LW4.INVALID_SPAN_CONTEXT = LW4.INVALID_TRACEID = LW4.INVALID_SPANID = void 0;
  var a49 = __$.$56();
  LW4.INVALID_SPANID = "0000000000000000";
  LW4.INVALID_TRACEID = "00000000000000000000000000000000";
  LW4.INVALID_SPAN_CONTEXT = {
    traceId: LW4.INVALID_TRACEID,
    spanId: LW4.INVALID_SPANID,
    traceFlags: a49.TraceFlags.NONE
  };
});

// Register to shared state
__$.l31 = l31;
