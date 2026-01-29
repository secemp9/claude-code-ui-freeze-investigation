// Module: KC4
// Dependencies: RK, TIA, H36

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KC4 = v(ek4 => {
  Object.defineProperty(ek4, "__esModule", {
    value: !0
  });
  ek4.W3CTraceContextPropagator = ek4.parseTraceParent = ek4.TRACE_STATE_HEADER = ek4.TRACE_PARENT_HEADER = void 0;
  var e31 = __$.RK(),
    JX9 = __$.TIA(),
    OX9 = __$.H36();
  ek4.TRACE_PARENT_HEADER = "traceparent";
  ek4.TRACE_STATE_HEADER = "tracestate";
  var XX9 = "00",
    $X9 = "(?!ff)[\\da-f]{2}",
    _X9 = "(?![0]{32})[\\da-f]{32}",
    GX9 = "(?![0]{16})[\\da-f]{16}",
    ZX9 = "[\\da-f]{2}",
    WX9 = new RegExp(`^\\s?(${$X9})-(${_X9})-(${GX9})-(${ZX9})(-.*)?\\s?$`);
  function sk4(A) {
    let K = WX9.exec(A);
    if (!K) return null;
    if (K[1] === "00" && K[5]) return null;
    return {
      traceId: K[2],
      spanId: K[3],
      traceFlags: parseInt(K[4], 16)
    };
  }
  ek4.parseTraceParent = sk4;
  class tk4 {
    inject(A, K, q) {
      let Y = e31.trace.getSpanContext(A);
      if (!Y || (0, JX9.isTracingSuppressed)(A) || !(0, e31.isSpanContextValid)(Y)) return;
      let z = `${XX9}-${Y.traceId}-${Y.spanId}-0${Number(Y.traceFlags || e31.TraceFlags.NONE).toString(16)}`;
      if (q.set(K, ek4.TRACE_PARENT_HEADER, z), Y.traceState) q.set(K, ek4.TRACE_STATE_HEADER, Y.traceState.serialize());
    }
    extract(A, K, q) {
      let Y = q.get(K, ek4.TRACE_PARENT_HEADER);
      if (!Y) return A;
      let z = Array.isArray(Y) ? Y[0] : Y;
      if (typeof z !== "string") return A;
      let w = sk4(z);
      if (!w) return A;
      w.isRemote = !0;
      let H = q.get(K, ek4.TRACE_STATE_HEADER);
      if (H) {
        let J = Array.isArray(H) ? H.join(",") : H;
        w.traceState = new OX9.TraceState(typeof J === "string" ? J : void 0);
      }
      return e31.trace.setSpanContext(A, w);
    }
    fields() {
      return [ek4.TRACE_PARENT_HEADER, ek4.TRACE_STATE_HEADER];
    }
  }
  ek4.W3CTraceContextPropagator = tk4;
});

// Register to shared state
__$.KC4 = KC4;
