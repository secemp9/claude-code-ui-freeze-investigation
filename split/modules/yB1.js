// Module: yB1
// Dependencies: H8, FX, CvA, QsA, qV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yB1 = v(jP8 => {
  Object.defineProperty(jP8, "__esModule", {
    value: !0
  });
  var a1A = __$.H8(),
    PHA = __$.FX(),
    ssA = __$.CvA(),
    MFq = __$.QsA(),
    PFq = __$.qV();
  function VFq(A, K, q) {
    if (!MFq.hasTracingEnabled(K)) return A.sampled = !1, A;
    if (A.sampled !== void 0) return A.setAttribute(ssA.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(A.sampled)), A;
    let Y;
    if (typeof K.tracesSampler === "function") Y = K.tracesSampler(q), A.setAttribute(ssA.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(Y));else if (q.parentSampled !== void 0) Y = q.parentSampled;else if (typeof K.tracesSampleRate < "u") Y = K.tracesSampleRate, A.setAttribute(ssA.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(Y));else Y = 1, A.setAttribute(ssA.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Y);
    if (!DP8(Y)) return PHA.DEBUG_BUILD && a1A.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."), A.sampled = !1, A;
    if (!Y) return PHA.DEBUG_BUILD && a1A.logger.log(`[Tracing] Discarding transaction because ${typeof K.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), A.sampled = !1, A;
    if (A.sampled = Math.random() < Y, !A.sampled) return PHA.DEBUG_BUILD && a1A.logger.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(Y)})`), A;
    return PHA.DEBUG_BUILD && a1A.logger.log(`[Tracing] starting ${A.op} transaction - ${PFq.spanToJSON(A).description}`), A;
  }
  function DP8(A) {
    if (a1A.isNaN(A) || !(typeof A === "number" || typeof A === "boolean")) return PHA.DEBUG_BUILD && a1A.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(A)} of type ${JSON.stringify(typeof A)}.`), !1;
    if (A < 0 || A > 1) return PHA.DEBUG_BUILD && a1A.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${A}.`), !1;
    return !0;
  }
  jP8.isValidSampleRate = DP8;
  jP8.sampleTransaction = VFq;
});

// Register to shared state
__$.yB1 = yB1;
