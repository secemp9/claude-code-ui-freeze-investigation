// Module: IB1
// Dependencies: H8, FX, Gb, qV, FsA, RB1, yB1, rsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IB1 = v(PP8 => {
  Object.defineProperty(PP8, "__esModule", {
    value: !0
  });
  var TFq = __$.H8(),
    vFq = __$.FX(),
    EFq = __$.Gb(),
    kFq = __$.qV(),
    CFq = __$.FsA(),
    LFq = __$.RB1(),
    MP8 = __$.yB1(),
    RFq = __$.rsA();
  function yFq() {
    let K = this.getScope().getSpan();
    return K ? {
      "sentry-trace": kFq.spanToTraceHeader(K)
    } : {};
  }
  function IFq(A, K) {
    let q = this.getClient(),
      Y = q && q.getOptions() || {},
      z = Y.instrumenter || "sentry",
      w = A.instrumenter || "sentry";
    if (z !== w) vFq.DEBUG_BUILD && TFq.logger.error(`A transaction was started with instrumenter=\`${w}\`, but the SDK is configured with the \`${z}\` instrumenter.
The transaction will not be sampled. Please use the ${z} instrumentation to start transactions.`), A.sampled = !1;
    let H = new RFq.Transaction(A, this);
    if (H = MP8.sampleTransaction(H, Y, {
      name: A.name,
      parentSampled: A.parentSampled,
      transactionContext: A,
      attributes: {
        ...A.data,
        ...A.attributes
      },
      ...K
    }), H.isRecording()) H.initSpanRecorder(Y._experiments && Y._experiments.maxSpans);
    if (q && q.emit) q.emit("startTransaction", H);
    return H;
  }
  function SFq(A, K, q, Y, z, w, H, J = !1) {
    let O = A.getClient(),
      X = O && O.getOptions() || {},
      $ = new LFq.IdleTransaction(K, A, q, Y, H, z, J);
    if ($ = MP8.sampleTransaction($, X, {
      name: K.name,
      parentSampled: K.parentSampled,
      transactionContext: K,
      attributes: {
        ...K.data,
        ...K.attributes
      },
      ...w
    }), $.isRecording()) $.initSpanRecorder(X._experiments && X._experiments.maxSpans);
    if (O && O.emit) O.emit("startTransaction", $);
    return $;
  }
  function hFq() {
    let A = EFq.getMainCarrier();
    if (!A.__SENTRY__) return;
    if (A.__SENTRY__.extensions = A.__SENTRY__.extensions || {}, !A.__SENTRY__.extensions.startTransaction) A.__SENTRY__.extensions.startTransaction = IFq;
    if (!A.__SENTRY__.extensions.traceHeaders) A.__SENTRY__.extensions.traceHeaders = yFq;
    CFq.registerErrorInstrumentation();
  }
  PP8.addTracingExtensions = hFq;
  PP8.startIdleTransaction = SFq;
});

// Register to shared state
__$.IB1 = IB1;
