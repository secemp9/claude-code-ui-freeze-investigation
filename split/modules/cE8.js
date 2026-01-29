// Module: cE8
// Dependencies: H8, sq, nvA, Qm1, cm1, UE8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cE8 = v(dE8 => {
  var {
    _optionalChain: etA
  } = __$.H8();
  Object.defineProperty(dE8, "__esModule", {
    value: !0
  });
  var l_ = __$.sq(),
    bHA = __$.H8(),
    FA5 = __$.nvA(),
    AeA = __$.Qm1(),
    QA5 = __$.cm1(),
    pE8 = __$.UE8();
  function UA5() {
    return function (K, q, Y) {
      let z = etA([l_.getClient, "call", $ => $(), "optionalAccess", $ => $.getOptions, "call", $ => $()]);
      if (!z || z.instrumenter !== "sentry" || etA([K, "access", $ => $.method, "optionalAccess", $ => $.toUpperCase, "call", $ => $()]) === "OPTIONS" || etA([K, "access", $ => $.method, "optionalAccess", $ => $.toUpperCase, "call", $ => $()]) === "HEAD") return Y();
      let w = K.headers && bHA.isString(K.headers["sentry-trace"]) ? K.headers["sentry-trace"] : void 0,
        H = etA([K, "access", $ => $.headers, "optionalAccess", $ => $.baggage]);
      if (!l_.hasTracingEnabled(z)) return Y();
      let [J, O] = bHA.extractPathForTransaction(K, {
          path: !0,
          method: !0
        }),
        X = l_.continueTrace({
          sentryTrace: w,
          baggage: H
        }, $ => l_.startTransaction({
          name: J,
          op: "http.server",
          origin: "auto.http.node.tracingHandler",
          ...$,
          data: {
            [l_.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: O
          },
          metadata: {
            ...$.metadata,
            request: K
          }
        }, {
          request: bHA.extractRequestData(K)
        }));
      l_.getCurrentScope().setSpan(X), q.__sentry_transaction = X, q.once("finish", () => {
        setImmediate(() => {
          bHA.addRequestDataToTransaction(X, K), l_.setHttpStatus(X, q.statusCode), X.end();
        });
      }), Y();
    };
  }
  function pA5(A = {}) {
    let K;
    if ("include" in A) K = {
      include: A.include
    };else {
      let {
        ip: q,
        request: Y,
        transaction: z,
        user: w
      } = A;
      if (q || Y || z || w) K = {
        include: bHA.dropUndefinedKeys({
          ip: q,
          request: Y,
          transaction: z,
          user: w
        })
      };
    }
    return K;
  }
  function dA5(A) {
    let K = pA5(A),
      q = l_.getClient();
    if (q && AeA.isAutoSessionTrackingEnabled(q)) {
      q.initSessionFlusher();
      let Y = l_.getCurrentScope();
      if (Y.getSession()) Y.setSession();
    }
    return function (z, w, H) {
      if (A && A.flushTimeout && A.flushTimeout > 0) {
        let J = w.end;
        w.end = function (O, X, $) {
          l_.flush(A.flushTimeout).then(() => {
            J.call(this, O, X, $);
          }).then(null, _ => {
            FA5.DEBUG_BUILD && bHA.logger.error(_), J.call(this, O, X, $);
          });
        };
      }
      l_.runWithAsyncContext(() => {
        let J = l_.getCurrentScope();
        J.setSDKProcessingMetadata({
          request: z,
          requestDataOptionsFromExpressHandler: K
        });
        let O = l_.getClient();
        if (AeA.isAutoSessionTrackingEnabled(O)) J.setRequestSession({
          status: "ok"
        });
        w.once("finish", () => {
          let X = l_.getClient();
          if (AeA.isAutoSessionTrackingEnabled(X)) setImmediate(() => {
            if (X && X._captureRequestSession) X._captureRequestSession();
          });
        }), H();
      });
    };
  }
  function cA5(A) {
    let K = A.status || A.statusCode || A.status_code || A.output && A.output.statusCode;
    return K ? parseInt(K, 10) : 500;
  }
  function lA5(A) {
    return cA5(A) >= 500;
  }
  function iA5(A) {
    return function (q, Y, z, w) {
      if ((A && A.shouldHandleError || lA5)(q)) {
        l_.withScope(J => {
          J.setSDKProcessingMetadata({
            request: Y
          });
          let O = z.__sentry_transaction;
          if (O && !l_.getActiveSpan()) J.setSpan(O);
          let X = l_.getClient();
          if (X && AeA.isAutoSessionTrackingEnabled(X)) {
            if (X._sessionFlusher !== void 0) {
              let G = J.getRequestSession();
              if (G && G.status !== void 0) G.status = "crashed";
            }
          }
          let $ = l_.captureException(q, {
            mechanism: {
              type: "middleware",
              handled: !1
            }
          });
          z.sentry = $, w(q);
        });
        return;
      }
      w(q);
    };
  }
  var nA5 = QA5.trpcMiddleware;
  dE8.extractRequestData = pE8.extractRequestData;
  dE8.parseRequest = pE8.parseRequest;
  dE8.errorHandler = iA5;
  dE8.requestHandler = dA5;
  dE8.tracingHandler = UA5;
  dE8.trpcMiddleware = nA5;
});

// Register to shared state
__$.cE8 = cE8;
