// Module: _E6
// Dependencies: WD1, DD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _E6 = v(lg7 => {
  Object.defineProperty(lg7, "__esModule", {
    value: !0
  });
  lg7.toLogAttributes = lg7.createExportLogsServiceRequest = void 0;
  var H82 = __$.WD1(),
    jD1 = __$.DD1();
  function J82(A, K) {
    let q = (0, H82.getOtlpEncoder)(K);
    return {
      resourceLogs: X82(A, q)
    };
  }
  lg7.createExportLogsServiceRequest = J82;
  function O82(A) {
    let K = new Map();
    for (let q of A) {
      let {
          resource: Y,
          instrumentationScope: {
            name: z,
            version: w = "",
            schemaUrl: H = ""
          }
        } = q,
        J = K.get(Y);
      if (!J) J = new Map(), K.set(Y, J);
      let O = `${z}@${w}:${H}`,
        X = J.get(O);
      if (!X) X = [], J.set(O, X);
      X.push(q);
    }
    return K;
  }
  function X82(A, K) {
    let q = O82(A);
    return Array.from(q, ([Y, z]) => {
      let w = (0, jD1.createResource)(Y);
      return {
        resource: w,
        scopeLogs: Array.from(z, ([, H]) => {
          return {
            scope: (0, jD1.createInstrumentationScope)(H[0].instrumentationScope),
            logRecords: H.map(J => $82(J, K)),
            schemaUrl: H[0].instrumentationScope.schemaUrl
          };
        }),
        schemaUrl: w.schemaUrl
      };
    });
  }
  function $82(A, K) {
    return {
      timeUnixNano: K.encodeHrTime(A.hrTime),
      observedTimeUnixNano: K.encodeHrTime(A.hrTimeObserved),
      severityNumber: _82(A.severityNumber),
      severityText: A.severityText,
      body: (0, jD1.toAnyValue)(A.body),
      eventName: A.eventName,
      attributes: cg7(A.attributes),
      droppedAttributesCount: A.droppedAttributesCount,
      flags: A.spanContext?.traceFlags,
      traceId: K.encodeOptionalSpanContext(A.spanContext?.traceId),
      spanId: K.encodeOptionalSpanContext(A.spanContext?.spanId)
    };
  }
  function _82(A) {
    return A;
  }
  function cg7(A) {
    return Object.keys(A).map(K => (0, jD1.toKeyValue)(K, A[K]));
  }
  lg7.toLogAttributes = cg7;
});

// Register to shared state
__$._E6 = _E6;
