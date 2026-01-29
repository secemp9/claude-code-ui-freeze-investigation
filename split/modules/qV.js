// Module: qV
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qV = v(VM8 => {
  Object.defineProperty(VM8, "__esModule", {
    value: !0
  });
  var $B1 = __$.H8(),
    Quq = 0,
    jM8 = 1;
  function Uuq(A) {
    let {
        spanId: K,
        traceId: q
      } = A.spanContext(),
      {
        data: Y,
        op: z,
        parent_span_id: w,
        status: H,
        tags: J,
        origin: O
      } = MM8(A);
    return $B1.dropUndefinedKeys({
      data: Y,
      op: z,
      parent_span_id: w,
      span_id: K,
      status: H,
      tags: J,
      trace_id: q,
      origin: O
    });
  }
  function puq(A) {
    let {
        traceId: K,
        spanId: q
      } = A.spanContext(),
      Y = PM8(A);
    return $B1.generateSentryTraceHeader(K, q, Y);
  }
  function duq(A) {
    if (typeof A === "number") return DM8(A);
    if (Array.isArray(A)) return A[0] + A[1] / 1e9;
    if (A instanceof Date) return DM8(A.getTime());
    return $B1.timestampInSeconds();
  }
  function DM8(A) {
    return A > 9999999999 ? A / 1000 : A;
  }
  function MM8(A) {
    if (cuq(A)) return A.getSpanJSON();
    if (typeof A.toJSON === "function") return A.toJSON();
    return {};
  }
  function cuq(A) {
    return typeof A.getSpanJSON === "function";
  }
  function PM8(A) {
    let {
      traceFlags: K
    } = A.spanContext();
    return Boolean(K & jM8);
  }
  VM8.TRACE_FLAG_NONE = Quq;
  VM8.TRACE_FLAG_SAMPLED = jM8;
  VM8.spanIsSampled = PM8;
  VM8.spanTimeInputToSeconds = duq;
  VM8.spanToJSON = MM8;
  VM8.spanToTraceContext = Uuq;
  VM8.spanToTraceHeader = puq;
});

// Register to shared state
__$.qV = qV;
