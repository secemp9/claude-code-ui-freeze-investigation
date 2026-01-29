// Module: mtA
// Dependencies: H8, sq, nvA, z6A, xv8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mtA = v(gv8 => {
  var {
    _optionalChain: yHA
  } = __$.H8();
  Object.defineProperty(gv8, "__esModule", {
    value: !0
  });
  var JD = __$.sq(),
    lN = __$.H8(),
    hm1 = __$.nvA(),
    ftq = __$.z6A(),
    rvA = __$.xv8(),
    Ntq = (A = {}) => {
      let {
          breadcrumbs: K,
          tracing: q,
          shouldCreateSpanForRequest: Y
        } = A,
        z = {
          breadcrumbs: K,
          tracing: q === !1 ? !1 : lN.dropUndefinedKeys({
            enableIfHasTracingEnabled: q === !0 ? void 0 : !0,
            shouldCreateSpanForRequest: Y
          })
        };
      return new J6A(z);
    },
    Ttq = JD.defineIntegration(Ntq);
  class J6A {
    static __initStatic() {
      this.id = "Http";
    }
    __init() {
      this.name = J6A.id;
    }
    constructor(A = {}) {
      J6A.prototype.__init.call(this), this._breadcrumbs = typeof A.breadcrumbs > "u" ? !0 : A.breadcrumbs, this._tracing = !A.tracing ? void 0 : A.tracing === !0 ? {} : A.tracing;
    }
    setupOnce(A, K) {
      let q = yHA([K, "call", O => O(), "access", O => O.getClient, "call", O => O(), "optionalAccess", O => O.getOptions, "call", O => O()]),
        Y = Bv8(this._tracing, q);
      if (!this._breadcrumbs && !Y) return;
      if (q && q.instrumenter !== "sentry") {
        hm1.DEBUG_BUILD && lN.logger.log("HTTP Integration is skipped because of instrumenter configuration.");
        return;
      }
      let z = mv8(Y, this._tracing, q),
        w = yHA([q, "optionalAccess", O => O.tracePropagationTargets]) || yHA([this, "access", O => O._tracing, "optionalAccess", O => O.tracePropagationTargets]),
        H = CA("http"),
        J = uv8(H, this._breadcrumbs, z, w);
      if (lN.fill(H, "get", J), lN.fill(H, "request", J), ftq.NODE_VERSION.major > 8) {
        let O = CA("https"),
          X = uv8(O, this._breadcrumbs, z, w);
        lN.fill(O, "get", X), lN.fill(O, "request", X);
      }
    }
  }
  J6A.__initStatic();
  function uv8(A, K, q, Y) {
    let z = new lN.LRUMap(100),
      w = new lN.LRUMap(100),
      H = X => {
        if (q === void 0) return !0;
        let $ = z.get(X);
        if ($ !== void 0) return $;
        let _ = q(X);
        return z.set(X, _), _;
      },
      J = X => {
        if (Y === void 0) return !0;
        let $ = w.get(X);
        if ($ !== void 0) return $;
        let _ = lN.stringMatchesSomePattern(X, Y);
        return w.set(X, _), _;
      };
    function O(X, $, _, G) {
      if (!JD.getCurrentHub().getIntegration(J6A)) return;
      JD.addBreadcrumb({
        category: "http",
        data: {
          status_code: G && G.statusCode,
          ...$
        },
        type: "http"
      }, {
        event: X,
        request: _,
        response: G
      });
    }
    return function ($) {
      return function (...G) {
        let Z = rvA.normalizeRequestArgs(A, G),
          W = Z[0],
          D = rvA.extractRawUrl(W),
          j = rvA.extractUrl(W),
          M = JD.getClient();
        if (JD.isSentryRequestUrl(j, M)) return $.apply(A, Z);
        let P = JD.getCurrentScope(),
          f = JD.getIsolationScope(),
          N = JD.getActiveSpan(),
          T = Etq(j, W),
          C = H(D) ? yHA([N, "optionalAccess", R => R.startChild, "call", R => R({
            op: "http.client",
            origin: "auto.http.node.http",
            description: `${T["http.method"]} ${T.url}`,
            data: T
          })]) : void 0;
        if (M && J(D)) {
          let {
              traceId: R,
              spanId: x,
              sampled: y,
              dsc: B
            } = {
              ...f.getPropagationContext(),
              ...P.getPropagationContext()
            },
            b = C ? JD.spanToTraceHeader(C) : lN.generateSentryTraceHeader(R, x, y),
            F = lN.dynamicSamplingContextToSentryBaggageHeader(B || (C ? JD.getDynamicSamplingContextFromSpan(C) : JD.getDynamicSamplingContextFromClient(R, M, P)));
          vtq(W, j, b, F);
        } else hm1.DEBUG_BUILD && lN.logger.log(`[Tracing] Not adding sentry-trace header to outgoing request (${j}) due to mismatching tracePropagationTargets option.`);
        return $.apply(A, Z).once("response", function (R) {
          let x = this;
          if (K) O("response", T, x, R);
          if (C) {
            if (R.statusCode) JD.setHttpStatus(C, R.statusCode);
            C.updateName(rvA.cleanSpanDescription(JD.spanToJSON(C).description || "", W, x) || ""), C.end();
          }
        }).once("error", function () {
          let R = this;
          if (K) O("error", T, R);
          if (C) JD.setHttpStatus(C, 500), C.updateName(rvA.cleanSpanDescription(JD.spanToJSON(C).description || "", W, R) || ""), C.end();
        });
      };
    };
  }
  function vtq(A, K, q, Y) {
    if ((A.headers || {})["sentry-trace"]) return;
    hm1.DEBUG_BUILD && lN.logger.log(`[Tracing] Adding sentry-trace header ${q} to outgoing request to "${K}": `), A.headers = {
      ...A.headers,
      "sentry-trace": q,
      ...(Y && Y.length > 0 && {
        baggage: ktq(A, Y)
      })
    };
  }
  function Etq(A, K) {
    let q = K.method || "GET",
      Y = {
        url: A,
        "http.method": q
      };
    if (K.hash) Y["http.fragment"] = K.hash.substring(1);
    if (K.search) Y["http.query"] = K.search.substring(1);
    return Y;
  }
  function ktq(A, K) {
    if (!A.headers || !A.headers.baggage) return K;else if (!K) return A.headers.baggage;else if (Array.isArray(A.headers.baggage)) return [...A.headers.baggage, K];
    return [A.headers.baggage, K];
  }
  function Bv8(A, K) {
    return A === void 0 ? !1 : A.enableIfHasTracingEnabled ? JD.hasTracingEnabled(K) : !0;
  }
  function mv8(A, K, q) {
    return A ? yHA([K, "optionalAccess", z => z.shouldCreateSpanForRequest]) || yHA([q, "optionalAccess", z => z.shouldCreateSpanForRequest]) : () => !1;
  }
  gv8.Http = J6A;
  gv8._getShouldCreateSpanForRequest = mv8;
  gv8._shouldCreateSpans = Bv8;
  gv8.httpIntegration = Ttq;
});

// Register to shared state
__$.mtA = mtA;
