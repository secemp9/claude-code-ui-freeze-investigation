// Module: n1A
// Dependencies: H8, OHA, xE, $HA, qV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var n1A = v(SM8 => {
  Object.defineProperty(SM8, "__esModule", {
    value: !0
  });
  var $mq = __$.H8(),
    _mq = __$.OHA(),
    yM8 = __$.xE(),
    Gmq = __$.$HA(),
    jB1 = __$.qV();
  function IM8(A, K, q) {
    let Y = K.getOptions(),
      {
        publicKey: z
      } = K.getDsn() || {},
      {
        segment: w
      } = q && q.getUser() || {},
      H = $mq.dropUndefinedKeys({
        environment: Y.environment || _mq.DEFAULT_ENVIRONMENT,
        release: Y.release,
        user_segment: w,
        public_key: z,
        trace_id: A
      });
    return K.emit && K.emit("createDsc", H), H;
  }
  function Zmq(A) {
    let K = yM8.getClient();
    if (!K) return {};
    let q = IM8(jB1.spanToJSON(A).trace_id || "", K, yM8.getCurrentScope()),
      Y = Gmq.getRootSpan(A);
    if (!Y) return q;
    let z = Y && Y._frozenDynamicSamplingContext;
    if (z) return z;
    let {
      sampleRate: w,
      source: H
    } = Y.metadata;
    if (w != null) q.sample_rate = `${w}`;
    let J = jB1.spanToJSON(Y);
    if (H && H !== "url") q.transaction = J.description;
    return q.sampled = String(jB1.spanIsSampled(Y)), K.emit && K.emit("createDsc", q), q;
  }
  SM8.getDynamicSamplingContextFromClient = IM8;
  SM8.getDynamicSamplingContextFromSpan = Zmq;
});

// Register to shared state
__$.n1A = n1A;
