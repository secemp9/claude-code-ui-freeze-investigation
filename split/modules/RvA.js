// Module: RvA
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RvA = v(RP8 => {
  Object.defineProperty(RP8, "__esModule", {
    value: !0
  });
  var PQq = __$.H8();
  function VQq(A, K, q, Y) {
    let z = Object.entries(PQq.dropUndefinedKeys(Y)).sort((w, H) => w[0].localeCompare(H[0]));
    return `${A}${K}${q}${z}`;
  }
  function fQq(A) {
    let K = 0;
    for (let q = 0; q < A.length; q++) {
      let Y = A.charCodeAt(q);
      K = (K << 5) - K + Y, K &= K;
    }
    return K >>> 0;
  }
  function NQq(A) {
    let K = "";
    for (let q of A) {
      let Y = Object.entries(q.tags),
        z = Y.length > 0 ? `|#${Y.map(([w, H]) => `${w}:${H}`).join(",")}` : "";
      K += `${q.name}@${q.unit}:${q.metric}|${q.metricType}${z}|T${q.timestamp}
`;
    }
    return K;
  }
  function TQq(A) {
    return A.replace(/[^\w]+/gi, "_");
  }
  function vQq(A) {
    return A.replace(/[^\w\-.]+/gi, "_");
  }
  function EQq(A) {
    return A.replace(/[^\w\-./]+/gi, "");
  }
  var kQq = [[`
`, "\\n"], ["\r", "\\r"], ["\t", "\\t"], ["\\", "\\\\"], ["|", "\\u{7c}"], [",", "\\u{2c}"]];
  function CQq(A) {
    for (let [K, q] of kQq) if (A === K) return q;
    return A;
  }
  function LQq(A) {
    return [...A].reduce((K, q) => K + CQq(q), "");
  }
  function RQq(A) {
    let K = {};
    for (let q in A) if (Object.prototype.hasOwnProperty.call(A, q)) {
      let Y = EQq(q);
      K[Y] = LQq(String(A[q]));
    }
    return K;
  }
  RP8.getBucketKey = VQq;
  RP8.sanitizeMetricKey = vQq;
  RP8.sanitizeTags = RQq;
  RP8.sanitizeUnit = TQq;
  RP8.serializeMetricBuckets = NQq;
  RP8.simpleHash = fQq;
});

// Register to shared state
__$.RvA = RvA;
