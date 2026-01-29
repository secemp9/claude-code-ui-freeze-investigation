// Module: csA
// Dependencies: H8, FX, Gb, qV, FsA, ZHA, n1A, xE, EB1, QsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var csA = v(KP8 => {
  Object.defineProperty(KP8, "__esModule", {
    value: !0
  });
  var vvA = __$.H8(),
    Egq = __$.FX(),
    _i = __$.Gb(),
    UsA = __$.qV();
  __$.FsA();
  __$.ZHA();
  var kgq = __$.n1A(),
    WHA = __$.xE(),
    kB1 = __$.EB1(),
    aM8 = __$.QsA();
  function Cgq(A, K, q = () => {}, Y = () => {}) {
    let z = _i.getCurrentHub(),
      w = WHA.getCurrentScope(),
      H = w.getSpan(),
      J = dsA(A),
      O = psA(z, {
        parentSpan: H,
        spanContext: J,
        forceTransaction: !1,
        scope: w
      });
    return w.setSpan(O), kB1.handleCallbackErrors(() => K(O), X => {
      O && O.setStatus("internal_error"), q(X, O);
    }, () => {
      O && O.end(), w.setSpan(H), Y();
    });
  }
  function sM8(A, K) {
    let q = dsA(A);
    return _i.runWithAsyncContext(() => {
      return WHA.withScope(A.scope, Y => {
        let z = _i.getCurrentHub(),
          w = Y.getSpan(),
          J = A.onlyIfParent && !w ? void 0 : psA(z, {
            parentSpan: w,
            spanContext: q,
            forceTransaction: A.forceTransaction,
            scope: Y
          });
        return kB1.handleCallbackErrors(() => K(J), () => {
          if (J) {
            let {
              status: O
            } = UsA.spanToJSON(J);
            if (!O || O === "ok") J.setStatus("internal_error");
          }
        }, () => J && J.end());
      });
    });
  }
  var Lgq = sM8;
  function Rgq(A, K) {
    let q = dsA(A);
    return _i.runWithAsyncContext(() => {
      return WHA.withScope(A.scope, Y => {
        let z = _i.getCurrentHub(),
          w = Y.getSpan(),
          J = A.onlyIfParent && !w ? void 0 : psA(z, {
            parentSpan: w,
            spanContext: q,
            forceTransaction: A.forceTransaction,
            scope: Y
          });
        function O() {
          J && J.end();
        }
        return kB1.handleCallbackErrors(() => K(J, O), () => {
          if (J && J.isRecording()) {
            let {
              status: X
            } = UsA.spanToJSON(J);
            if (!X || X === "ok") J.setStatus("internal_error");
          }
        });
      });
    });
  }
  function ygq(A) {
    if (!aM8.hasTracingEnabled()) return;
    let K = dsA(A),
      q = _i.getCurrentHub(),
      Y = A.scope ? A.scope.getSpan() : tM8();
    if (A.onlyIfParent && !Y) return;
    let H = (A.scope || WHA.getCurrentScope()).clone();
    return psA(q, {
      parentSpan: Y,
      spanContext: K,
      forceTransaction: A.forceTransaction,
      scope: H
    });
  }
  function tM8() {
    return WHA.getCurrentScope().getSpan();
  }
  var Igq = ({
    sentryTrace: A,
    baggage: K
  }, q) => {
    let Y = WHA.getCurrentScope(),
      {
        traceparentData: z,
        dynamicSamplingContext: w,
        propagationContext: H
      } = vvA.tracingContextFromHeaders(A, K);
    if (Y.setPropagationContext(H), Egq.DEBUG_BUILD && z) vvA.logger.log(`[Tracing] Continuing trace ${z.traceId}.`);
    let J = {
      ...z,
      metadata: vvA.dropUndefinedKeys({
        dynamicSamplingContext: w
      })
    };
    if (!q) return J;
    return _i.runWithAsyncContext(() => {
      return q(J);
    });
  };
  function psA(A, {
    parentSpan: K,
    spanContext: q,
    forceTransaction: Y,
    scope: z
  }) {
    if (!aM8.hasTracingEnabled()) return;
    let w = _i.getIsolationScope(),
      H;
    if (K && !Y) H = K.startChild(q);else if (K) {
      let J = kgq.getDynamicSamplingContextFromSpan(K),
        {
          traceId: O,
          spanId: X
        } = K.spanContext(),
        $ = UsA.spanIsSampled(K);
      H = A.startTransaction({
        traceId: O,
        parentSpanId: X,
        parentSampled: $,
        ...q,
        metadata: {
          dynamicSamplingContext: J,
          ...q.metadata
        }
      });
    } else {
      let {
        traceId: J,
        dsc: O,
        parentSpanId: X,
        sampled: $
      } = {
        ...w.getPropagationContext(),
        ...z.getPropagationContext()
      };
      H = A.startTransaction({
        traceId: J,
        parentSpanId: X,
        parentSampled: $,
        ...q,
        metadata: {
          dynamicSamplingContext: O,
          ...q.metadata
        }
      });
    }
    return z.setSpan(H), Sgq(H, z, w), H;
  }
  function dsA(A) {
    if (A.startTime) {
      let K = {
        ...A
      };
      return K.startTimestamp = UsA.spanTimeInputToSeconds(A.startTime), delete K.startTime, K;
    }
    return A;
  }
  var eM8 = "_sentryScope",
    AP8 = "_sentryIsolationScope";
  function Sgq(A, K, q) {
    if (A) vvA.addNonEnumerableProperty(A, AP8, q), vvA.addNonEnumerableProperty(A, eM8, K);
  }
  function hgq(A) {
    return {
      scope: A[eM8],
      isolationScope: A[AP8]
    };
  }
  KP8.continueTrace = Igq;
  KP8.getActiveSpan = tM8;
  KP8.getCapturedScopesOnSpan = hgq;
  KP8.startActiveSpan = Lgq;
  KP8.startInactiveSpan = ygq;
  KP8.startSpan = sM8;
  KP8.startSpanManual = Rgq;
  KP8.trace = Cgq;
});

// Register to shared state
__$.csA = csA;
