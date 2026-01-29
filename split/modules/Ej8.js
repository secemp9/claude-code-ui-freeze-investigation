// Module: Ej8
// Dependencies: nu1, HvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ej8 = v(vj8 => {
  Object.defineProperty(vj8, "__esModule", {
    value: !0
  });
  var Nj8 = __$.nu1(),
    bE = __$.HvA(),
    Tj8 = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
  function ru1(A) {
    if (!A) return;
    let K = A.match(Tj8);
    if (!K) return;
    let q;
    if (K[3] === "1") q = !0;else if (K[3] === "0") q = !1;
    return {
      traceId: K[1],
      parentSampled: q,
      parentSpanId: K[2]
    };
  }
  function LIq(A, K) {
    let q = ru1(A),
      Y = Nj8.baggageHeaderToDynamicSamplingContext(K),
      {
        traceId: z,
        parentSpanId: w,
        parentSampled: H
      } = q || {};
    if (!q) return {
      traceparentData: q,
      dynamicSamplingContext: void 0,
      propagationContext: {
        traceId: z || bE.uuid4(),
        spanId: bE.uuid4().substring(16)
      }
    };else return {
      traceparentData: q,
      dynamicSamplingContext: Y || {},
      propagationContext: {
        traceId: z || bE.uuid4(),
        parentSpanId: w || bE.uuid4().substring(16),
        spanId: bE.uuid4().substring(16),
        sampled: H,
        dsc: Y || {}
      }
    };
  }
  function RIq(A, K) {
    let q = ru1(A),
      Y = Nj8.baggageHeaderToDynamicSamplingContext(K),
      {
        traceId: z,
        parentSpanId: w,
        parentSampled: H
      } = q || {};
    if (!q) return {
      traceId: z || bE.uuid4(),
      spanId: bE.uuid4().substring(16)
    };else return {
      traceId: z || bE.uuid4(),
      parentSpanId: w || bE.uuid4().substring(16),
      spanId: bE.uuid4().substring(16),
      sampled: H,
      dsc: Y || {}
    };
  }
  function yIq(A = bE.uuid4(), K = bE.uuid4().substring(16), q) {
    let Y = "";
    if (q !== void 0) Y = q ? "-1" : "-0";
    return `${A}-${K}${Y}`;
  }
  vj8.TRACEPARENT_REGEXP = Tj8;
  vj8.extractTraceparentData = ru1;
  vj8.generateSentryTraceHeader = yIq;
  vj8.propagationContextFromHeaders = RIq;
  vj8.tracingContextFromHeaders = LIq;
});

// Register to shared state
__$.Ej8 = Ej8;
