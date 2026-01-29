// Module: Pm1
// Dependencies: sq, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pm1 = v(zT8 => {
  Object.defineProperty(zT8, "__esModule", {
    value: !0
  });
  var Mb = __$.sq(),
    q6A = __$.H8();
  function qoq(A, K, q, Y, z = "auto.http.browser") {
    if (!Mb.hasTracingEnabled() || !A.fetchData) return;
    let w = K(A.fetchData.url);
    if (A.endTimestamp && w) {
      let Z = A.fetchData.__span;
      if (!Z) return;
      let W = Y[Z];
      if (W) zoq(W, A), delete Y[Z];
      return;
    }
    let H = Mb.getCurrentScope(),
      J = Mb.getClient(),
      {
        method: O,
        url: X
      } = A.fetchData,
      $ = Yoq(X),
      _ = $ ? q6A.parseUrl($).host : void 0,
      G = w ? Mb.startInactiveSpan({
        name: `${O} ${X}`,
        onlyIfParent: !0,
        attributes: {
          url: X,
          type: "fetch",
          "http.method": O,
          "http.url": $,
          "server.address": _,
          [Mb.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: z
        },
        op: "http.client"
      }) : void 0;
    if (G) A.fetchData.__span = G.spanContext().spanId, Y[G.spanContext().spanId] = G;
    if (q(A.fetchData.url) && J) {
      let Z = A.args[0];
      A.args[1] = A.args[1] || {};
      let W = A.args[1];
      W.headers = YT8(Z, J, H, W, G);
    }
    return G;
  }
  function YT8(A, K, q, Y, z) {
    let w = z || q.getSpan(),
      H = Mb.getIsolationScope(),
      {
        traceId: J,
        spanId: O,
        sampled: X,
        dsc: $
      } = {
        ...H.getPropagationContext(),
        ...q.getPropagationContext()
      },
      _ = w ? Mb.spanToTraceHeader(w) : q6A.generateSentryTraceHeader(J, O, X),
      G = q6A.dynamicSamplingContextToSentryBaggageHeader($ || (w ? Mb.getDynamicSamplingContextFromSpan(w) : Mb.getDynamicSamplingContextFromClient(J, K, q))),
      Z = Y.headers || (typeof Request < "u" && q6A.isInstanceOf(A, Request) ? A.headers : void 0);
    if (!Z) return {
      "sentry-trace": _,
      baggage: G
    };else if (typeof Headers < "u" && q6A.isInstanceOf(Z, Headers)) {
      let W = new Headers(Z);
      if (W.append("sentry-trace", _), G) W.append(q6A.BAGGAGE_HEADER_NAME, G);
      return W;
    } else if (Array.isArray(Z)) {
      let W = [...Z, ["sentry-trace", _]];
      if (G) W.push([q6A.BAGGAGE_HEADER_NAME, G]);
      return W;
    } else {
      let W = "baggage" in Z ? Z.baggage : void 0,
        D = [];
      if (Array.isArray(W)) D.push(...W);else if (W) D.push(W);
      if (G) D.push(G);
      return {
        ...Z,
        "sentry-trace": _,
        baggage: D.length > 0 ? D.join(",") : void 0
      };
    }
  }
  function Yoq(A) {
    try {
      return new URL(A).href;
    } catch (K) {
      return;
    }
  }
  function zoq(A, K) {
    if (K.response) {
      Mb.setHttpStatus(A, K.response.status);
      let q = K.response && K.response.headers && K.response.headers.get("content-length");
      if (q) {
        let Y = parseInt(q);
        if (Y > 0) A.setAttribute("http.response_content_length", Y);
      }
    } else if (K.error) A.setStatus("internal_error");
    A.end();
  }
  zT8.addTracingHeadersToFetchRequest = YT8;
  zT8.instrumentFetchRequest = qoq;
});

// Register to shared state
__$.Pm1 = Pm1;
