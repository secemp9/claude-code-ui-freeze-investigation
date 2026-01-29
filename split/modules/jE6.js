// Module: jE6
// Dependencies: DD1, WD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jE6 = v(MF7 => {
  Object.defineProperty(MF7, "__esModule", {
    value: !0
  });
  MF7.createExportTraceServiceRequest = MF7.toOtlpSpanEvent = MF7.toOtlpLink = MF7.sdkSpanToOtlpSpan = void 0;
  var pgA = __$.DD1(),
    b82 = __$.WD1(),
    x82 = 256,
    u82 = 512;
  function ZF7(A, K) {
    let q = A & 255 | x82;
    if (K) q |= u82;
    return q;
  }
  function WF7(A, K) {
    let q = A.spanContext(),
      Y = A.status,
      z = A.parentSpanContext?.spanId ? K.encodeSpanContext(A.parentSpanContext?.spanId) : void 0;
    return {
      traceId: K.encodeSpanContext(q.traceId),
      spanId: K.encodeSpanContext(q.spanId),
      parentSpanId: z,
      traceState: q.traceState?.serialize(),
      name: A.name,
      kind: A.kind == null ? 0 : A.kind + 1,
      startTimeUnixNano: K.encodeHrTime(A.startTime),
      endTimeUnixNano: K.encodeHrTime(A.endTime),
      attributes: (0, pgA.toAttributes)(A.attributes),
      droppedAttributesCount: A.droppedAttributesCount,
      events: A.events.map(w => jF7(w, K)),
      droppedEventsCount: A.droppedEventsCount,
      status: {
        code: Y.code,
        message: Y.message
      },
      links: A.links.map(w => DF7(w, K)),
      droppedLinksCount: A.droppedLinksCount,
      flags: ZF7(q.traceFlags, A.parentSpanContext?.isRemote)
    };
  }
  MF7.sdkSpanToOtlpSpan = WF7;
  function DF7(A, K) {
    return {
      attributes: A.attributes ? (0, pgA.toAttributes)(A.attributes) : [],
      spanId: K.encodeSpanContext(A.context.spanId),
      traceId: K.encodeSpanContext(A.context.traceId),
      traceState: A.context.traceState?.serialize(),
      droppedAttributesCount: A.droppedAttributesCount || 0,
      flags: ZF7(A.context.traceFlags, A.context.isRemote)
    };
  }
  MF7.toOtlpLink = DF7;
  function jF7(A, K) {
    return {
      attributes: A.attributes ? (0, pgA.toAttributes)(A.attributes) : [],
      name: A.name,
      timeUnixNano: K.encodeHrTime(A.time),
      droppedAttributesCount: A.droppedAttributesCount || 0
    };
  }
  MF7.toOtlpSpanEvent = jF7;
  function B82(A, K) {
    let q = (0, b82.getOtlpEncoder)(K);
    return {
      resourceSpans: g82(A, q)
    };
  }
  MF7.createExportTraceServiceRequest = B82;
  function m82(A) {
    let K = new Map();
    for (let q of A) {
      let Y = K.get(q.resource);
      if (!Y) Y = new Map(), K.set(q.resource, Y);
      let z = `${q.instrumentationScope.name}@${q.instrumentationScope.version || ""}:${q.instrumentationScope.schemaUrl || ""}`,
        w = Y.get(z);
      if (!w) w = [], Y.set(z, w);
      w.push(q);
    }
    return K;
  }
  function g82(A, K) {
    let q = m82(A),
      Y = [],
      z = q.entries(),
      w = z.next();
    while (!w.done) {
      let [H, J] = w.value,
        O = [],
        X = J.values(),
        $ = X.next();
      while (!$.done) {
        let Z = $.value;
        if (Z.length > 0) {
          let W = Z.map(D => WF7(D, K));
          O.push({
            scope: (0, pgA.createInstrumentationScope)(Z[0].instrumentationScope),
            spans: W,
            schemaUrl: Z[0].instrumentationScope.schemaUrl
          });
        }
        $ = X.next();
      }
      let _ = (0, pgA.createResource)(H),
        G = {
          resource: _,
          scopeSpans: O,
          schemaUrl: _.schemaUrl
        };
      Y.push(G), w = z.next();
    }
    return Y;
  }
});

// Register to shared state
__$.jE6 = jE6;
