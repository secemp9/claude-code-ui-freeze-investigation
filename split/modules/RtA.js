// Module: RtA
// Dependencies: sq, H8, Pm1, LHA, pN

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RtA = v($T8 => {
  Object.defineProperty($T8, "__esModule", {
    value: !0
  });
  var BR = __$.sq(),
    mR = __$.H8(),
    Joq = __$.Pm1(),
    Ooq = __$.LHA(),
    Xoq = __$.pN(),
    LtA = ["localhost", /^\/(?!\/)/],
    Vm1 = {
      traceFetch: !0,
      traceXHR: !0,
      enableHTTPTimings: !0,
      tracingOrigins: LtA,
      tracePropagationTargets: LtA
    };
  function $oq(A) {
    let {
        traceFetch: K,
        traceXHR: q,
        tracePropagationTargets: Y,
        tracingOrigins: z,
        shouldCreateSpanForRequest: w,
        enableHTTPTimings: H
      } = {
        traceFetch: Vm1.traceFetch,
        traceXHR: Vm1.traceXHR,
        ...A
      },
      J = typeof w === "function" ? w : $ => !0,
      O = $ => JT8($, Y || z),
      X = {};
    if (K) mR.addFetchInstrumentationHandler($ => {
      let _ = Joq.instrumentFetchRequest($, J, O, X);
      if (_) {
        let G = XT8($.fetchData.url),
          Z = G ? mR.parseUrl(G).host : void 0;
        _.setAttributes({
          "http.url": G,
          "server.address": Z
        });
      }
      if (H && _) wT8(_);
    });
    if (q) mR.addXhrInstrumentationHandler($ => {
      let _ = OT8($, J, O, X);
      if (H && _) wT8(_);
    });
  }
  function _oq(A) {
    return A.entryType === "resource" && "initiatorType" in A && typeof A.nextHopProtocol === "string" && (A.initiatorType === "fetch" || A.initiatorType === "xmlhttprequest");
  }
  function wT8(A) {
    let {
      url: K
    } = BR.spanToJSON(A).data || {};
    if (!K || typeof K !== "string") return;
    let q = Ooq.addPerformanceInstrumentationHandler("resource", ({
      entries: Y
    }) => {
      Y.forEach(z => {
        if (_oq(z) && z.name.endsWith(K)) Goq(z).forEach(H => A.setAttribute(...H)), setTimeout(q);
      });
    });
  }
  function HT8(A) {
    let K = "unknown",
      q = "unknown",
      Y = "";
    for (let z of A) {
      if (z === "/") {
        [K, q] = A.split("/");
        break;
      }
      if (!isNaN(Number(z))) {
        K = Y === "h" ? "http" : Y, q = A.split(Y)[1];
        break;
      }
      Y += z;
    }
    if (Y === A) K = Y;
    return {
      name: K,
      version: q
    };
  }
  function Pb(A = 0) {
    return ((mR.browserPerformanceTimeOrigin || performance.timeOrigin) + A) / 1000;
  }
  function Goq(A) {
    let {
        name: K,
        version: q
      } = HT8(A.nextHopProtocol),
      Y = [];
    if (Y.push(["network.protocol.version", q], ["network.protocol.name", K]), !mR.browserPerformanceTimeOrigin) return Y;
    return [...Y, ["http.request.redirect_start", Pb(A.redirectStart)], ["http.request.fetch_start", Pb(A.fetchStart)], ["http.request.domain_lookup_start", Pb(A.domainLookupStart)], ["http.request.domain_lookup_end", Pb(A.domainLookupEnd)], ["http.request.connect_start", Pb(A.connectStart)], ["http.request.secure_connection_start", Pb(A.secureConnectionStart)], ["http.request.connection_end", Pb(A.connectEnd)], ["http.request.request_start", Pb(A.requestStart)], ["http.request.response_start", Pb(A.responseStart)], ["http.request.response_end", Pb(A.responseEnd)]];
  }
  function JT8(A, K) {
    return mR.stringMatchesSomePattern(A, K || LtA);
  }
  function OT8(A, K, q, Y) {
    let z = A.xhr,
      w = z && z[mR.SENTRY_XHR_DATA_KEY];
    if (!BR.hasTracingEnabled() || !z || z.__sentry_own_request__ || !w) return;
    let H = K(w.url);
    if (A.endTimestamp && H) {
      let Z = z.__sentry_xhr_span_id__;
      if (!Z) return;
      let W = Y[Z];
      if (W && w.status_code !== void 0) BR.setHttpStatus(W, w.status_code), W.end(), delete Y[Z];
      return;
    }
    let J = BR.getCurrentScope(),
      O = BR.getIsolationScope(),
      X = XT8(w.url),
      $ = X ? mR.parseUrl(X).host : void 0,
      _ = H ? BR.startInactiveSpan({
        name: `${w.method} ${w.url}`,
        onlyIfParent: !0,
        attributes: {
          type: "xhr",
          "http.method": w.method,
          "http.url": X,
          url: w.url,
          "server.address": $,
          [BR.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser"
        },
        op: "http.client"
      }) : void 0;
    if (_) z.__sentry_xhr_span_id__ = _.spanContext().spanId, Y[z.__sentry_xhr_span_id__] = _;
    let G = BR.getClient();
    if (z.setRequestHeader && q(w.url) && G) {
      let {
          traceId: Z,
          spanId: W,
          sampled: D,
          dsc: j
        } = {
          ...O.getPropagationContext(),
          ...J.getPropagationContext()
        },
        M = _ ? BR.spanToTraceHeader(_) : mR.generateSentryTraceHeader(Z, W, D),
        P = mR.dynamicSamplingContextToSentryBaggageHeader(j || (_ ? BR.getDynamicSamplingContextFromSpan(_) : BR.getDynamicSamplingContextFromClient(Z, G, J)));
      Zoq(z, M, P);
    }
    return _;
  }
  function Zoq(A, K, q) {
    try {
      if (A.setRequestHeader("sentry-trace", K), q) A.setRequestHeader(mR.BAGGAGE_HEADER_NAME, q);
    } catch (Y) {}
  }
  function XT8(A) {
    try {
      return new URL(A, Xoq.WINDOW.location.origin).href;
    } catch (K) {
      return;
    }
  }
  $T8.DEFAULT_TRACE_PROPAGATION_TARGETS = LtA;
  $T8.defaultRequestInstrumentationOptions = Vm1;
  $T8.extractNetworkProtocol = HT8;
  $T8.instrumentOutgoingRequests = $oq;
  $T8.shouldAttachHeaders = JT8;
  $T8.xhrCallback = OT8;
});

// Register to shared state
__$.RtA = RtA;
