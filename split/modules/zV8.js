// Module: zV8
// Dependencies: H8, FX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zV8 = v(YV8 => {
  Object.defineProperty(YV8, "__esModule", {
    value: !0
  });
  var zV = __$.H8(),
    AV8 = __$.FX(),
    qV8 = 30;
  function FUq(A, K, q = zV.makePromiseBuffer(A.bufferSize || qV8)) {
    let Y = {},
      z = H => q.drain(H);
    function w(H) {
      let J = [];
      if (zV.forEachEnvelopeItem(H, (_, G) => {
        let Z = zV.envelopeItemTypeToDataCategory(G);
        if (zV.isRateLimited(Y, Z)) {
          let W = KV8(_, G);
          A.recordDroppedEvent("ratelimit_backoff", Z, W);
        } else J.push(_);
      }), J.length === 0) return zV.resolvedSyncPromise();
      let O = zV.createEnvelope(H[0], J),
        X = _ => {
          zV.forEachEnvelopeItem(O, (G, Z) => {
            let W = KV8(G, Z);
            A.recordDroppedEvent(_, zV.envelopeItemTypeToDataCategory(Z), W);
          });
        },
        $ = () => K({
          body: zV.serializeEnvelope(O, A.textEncoder)
        }).then(_ => {
          if (_.statusCode !== void 0 && (_.statusCode < 200 || _.statusCode >= 300)) AV8.DEBUG_BUILD && zV.logger.warn(`Sentry responded with status code ${_.statusCode} to sent event.`);
          return Y = zV.updateRateLimits(Y, _), _;
        }, _ => {
          throw X("network_error"), _;
        });
      return q.add($).then(_ => _, _ => {
        if (_ instanceof zV.SentryError) return AV8.DEBUG_BUILD && zV.logger.error("Skipped sending event because buffer is full."), X("queue_overflow"), zV.resolvedSyncPromise();else throw _;
      });
    }
    return w.__sentry__baseTransport__ = !0, {
      send: w,
      flush: z
    };
  }
  function KV8(A, K) {
    if (K !== "event" && K !== "transaction") return;
    return Array.isArray(A) ? A[1] : void 0;
  }
  YV8.DEFAULT_TRANSPORT_BUFFER_SIZE = qV8;
  YV8.createTransport = FUq;
});

// Register to shared state
__$.zV8 = zV8;
