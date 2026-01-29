// Module: Mm1
// Dependencies: sq, H8, wV, LHA, pN, vtA, sN8, BvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mm1 = v(qT8 => {
  Object.defineProperty(qT8, "__esModule", {
    value: !0
  });
  var zF = __$.sq(),
    _w = __$.H8(),
    dN = __$.wV(),
    K6A = __$.LHA(),
    wF = __$.pN(),
    Irq = __$.vtA(),
    HF = __$.sN8(),
    Srq = __$.BvA(),
    hrq = 2147483647;
  function s$(A) {
    return A / 1000;
  }
  function jm1() {
    return wF.WINDOW && wF.WINDOW.addEventListener && wF.WINDOW.performance;
  }
  var tN8 = 0,
    FO = {},
    jb,
    FvA;
  function brq() {
    let A = jm1();
    if (A && _w.browserPerformanceTimeOrigin) {
      if (A.mark) wF.WINDOW.performance.mark("sentry-tracing-init");
      let K = Frq(),
        q = mrq(),
        Y = grq(),
        z = Qrq();
      return () => {
        K(), q(), Y(), z();
      };
    }
    return () => {
      return;
    };
  }
  function xrq() {
    K6A.addPerformanceInstrumentationHandler("longtask", ({
      entries: A
    }) => {
      for (let K of A) {
        let q = zF.getActiveTransaction();
        if (!q) return;
        let Y = s$(_w.browserPerformanceTimeOrigin + K.startTime),
          z = s$(K.duration);
        q.startChild({
          description: "Main UI thread blocked",
          op: "ui.long-task",
          origin: "auto.ui.browser.metrics",
          startTimestamp: Y,
          endTimestamp: Y + z
        });
      }
    });
  }
  function urq() {
    K6A.addPerformanceInstrumentationHandler("event", ({
      entries: A
    }) => {
      for (let K of A) {
        let q = zF.getActiveTransaction();
        if (!q) return;
        if (K.name === "click") {
          let Y = s$(_w.browserPerformanceTimeOrigin + K.startTime),
            z = s$(K.duration),
            w = {
              description: _w.htmlTreeAsString(K.target),
              op: `ui.interaction.${K.name}`,
              origin: "auto.ui.browser.metrics",
              startTimestamp: Y,
              endTimestamp: Y + z
            },
            H = _w.getComponentName(K.target);
          if (H) w.attributes = {
            "ui.component_name": H
          };
          q.startChild(w);
        }
      }
    });
  }
  function Brq(A, K) {
    if (jm1() && _w.browserPerformanceTimeOrigin) {
      let Y = Urq(A, K);
      return () => {
        Y();
      };
    }
    return () => {
      return;
    };
  }
  function mrq() {
    return K6A.addClsInstrumentationHandler(({
      metric: A
    }) => {
      let K = A.entries[A.entries.length - 1];
      if (!K) return;
      dN.DEBUG_BUILD && _w.logger.log("[Measurements] Adding CLS"), FO.cls = {
        value: A.value,
        unit: ""
      }, FvA = K;
    }, !0);
  }
  function grq() {
    return K6A.addLcpInstrumentationHandler(({
      metric: A
    }) => {
      let K = A.entries[A.entries.length - 1];
      if (!K) return;
      dN.DEBUG_BUILD && _w.logger.log("[Measurements] Adding LCP"), FO.lcp = {
        value: A.value,
        unit: "millisecond"
      }, jb = K;
    }, !0);
  }
  function Frq() {
    return K6A.addFidInstrumentationHandler(({
      metric: A
    }) => {
      let K = A.entries[A.entries.length - 1];
      if (!K) return;
      let q = s$(_w.browserPerformanceTimeOrigin),
        Y = s$(K.startTime);
      dN.DEBUG_BUILD && _w.logger.log("[Measurements] Adding FID"), FO.fid = {
        value: A.value,
        unit: "millisecond"
      }, FO["mark.fid"] = {
        value: q + Y,
        unit: "second"
      };
    });
  }
  function Qrq() {
    return K6A.addTtfbInstrumentationHandler(({
      metric: A
    }) => {
      if (!A.entries[A.entries.length - 1]) return;
      dN.DEBUG_BUILD && _w.logger.log("[Measurements] Adding TTFB"), FO.ttfb = {
        value: A.value,
        unit: "millisecond"
      };
    });
  }
  var eN8 = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
  };
  function Urq(A, K) {
    return K6A.addInpInstrumentationHandler(({
      metric: q
    }) => {
      if (q.value === void 0) return;
      let Y = q.entries.find(f => f.duration === q.value && eN8[f.name] !== void 0),
        z = zF.getClient();
      if (!Y || !z) return;
      let w = eN8[Y.name],
        H = z.getOptions(),
        J = s$(_w.browserPerformanceTimeOrigin + Y.startTime),
        O = s$(q.value),
        X = Y.interactionId !== void 0 ? A[Y.interactionId] : void 0;
      if (X === void 0) return;
      let {
          routeName: $,
          parentContext: _,
          activeTransaction: G,
          user: Z,
          replayId: W
        } = X,
        D = Z !== void 0 ? Z.email || Z.id || Z.ip_address : void 0,
        j = G !== void 0 ? G.getProfileId() : void 0,
        M = new zF.Span({
          startTimestamp: J,
          endTimestamp: J + O,
          op: `ui.interaction.${w}`,
          name: _w.htmlTreeAsString(Y.target),
          attributes: {
            release: H.release,
            environment: H.environment,
            transaction: $,
            ...(D !== void 0 && D !== "" ? {
              user: D
            } : {}),
            ...(j !== void 0 ? {
              profile_id: j
            } : {}),
            ...(W !== void 0 ? {
              replay_id: W
            } : {})
          },
          exclusiveTime: q.value,
          measurements: {
            inp: {
              value: q.value,
              unit: "millisecond"
            }
          }
        }),
        P = rrq(_, H, K);
      if (!P) return;
      if (Math.random() < P) {
        let f = M ? zF.createSpanEnvelope([M], z.getDsn()) : void 0,
          N = z && z.getTransport();
        if (N && f) N.send(f).then(null, T => {
          dN.DEBUG_BUILD && _w.logger.error("Error while sending interaction:", T);
        });
        return;
      }
    });
  }
  function prq(A) {
    let K = jm1();
    if (!K || !wF.WINDOW.performance.getEntries || !_w.browserPerformanceTimeOrigin) return;
    dN.DEBUG_BUILD && _w.logger.log("[Tracing] Adding & adjusting spans using Performance API");
    let q = s$(_w.browserPerformanceTimeOrigin),
      Y = K.getEntries(),
      {
        op: z,
        start_timestamp: w
      } = zF.spanToJSON(A);
    if (Y.slice(tN8).forEach(H => {
      let J = s$(H.startTime),
        O = s$(H.duration);
      if (A.op === "navigation" && w && q + J < w) return;
      switch (H.entryType) {
        case "navigation":
          {
            drq(A, H, q);
            break;
          }
        case "mark":
        case "paint":
        case "measure":
          {
            AT8(A, H, J, O, q);
            let X = Irq.getVisibilityWatcher(),
              $ = H.startTime < X.firstHiddenTime;
            if (H.name === "first-paint" && $) dN.DEBUG_BUILD && _w.logger.log("[Measurements] Adding FP"), FO.fp = {
              value: H.startTime,
              unit: "millisecond"
            };
            if (H.name === "first-contentful-paint" && $) dN.DEBUG_BUILD && _w.logger.log("[Measurements] Adding FCP"), FO.fcp = {
              value: H.startTime,
              unit: "millisecond"
            };
            break;
          }
        case "resource":
          {
            KT8(A, H, H.name, J, O, q);
            break;
          }
      }
    }), tN8 = Math.max(Y.length - 1, 0), lrq(A), z === "pageload") {
      nrq(FO), ["fcp", "fp", "lcp"].forEach(J => {
        if (!FO[J] || !w || q >= w) return;
        let O = FO[J].value,
          X = q + s$(O),
          $ = Math.abs((X - w) * 1000),
          _ = $ - O;
        dN.DEBUG_BUILD && _w.logger.log(`[Measurements] Normalized ${J} from ${O} to ${$} (${_})`), FO[J].value = $;
      });
      let H = FO["mark.fid"];
      if (H && FO.fid) HF._startChild(A, {
        description: "first input delay",
        endTimestamp: H.value + s$(FO.fid.value),
        op: "ui.action",
        origin: "auto.ui.browser.metrics",
        startTimestamp: H.value
      }), delete FO["mark.fid"];
      if (!("fcp" in FO)) delete FO.cls;
      Object.keys(FO).forEach(J => {
        zF.setMeasurement(J, FO[J].value, FO[J].unit);
      }), irq(A);
    }
    jb = void 0, FvA = void 0, FO = {};
  }
  function AT8(A, K, q, Y, z) {
    let w = z + q,
      H = w + Y;
    return HF._startChild(A, {
      description: K.name,
      endTimestamp: H,
      op: K.entryType,
      origin: "auto.resource.browser.metrics",
      startTimestamp: w
    }), w;
  }
  function drq(A, K, q) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(Y => {
      CtA(A, K, Y, q);
    }), CtA(A, K, "secureConnection", q, "TLS/SSL", "connectEnd"), CtA(A, K, "fetch", q, "cache", "domainLookupStart"), CtA(A, K, "domainLookup", q, "DNS"), crq(A, K, q);
  }
  function CtA(A, K, q, Y, z, w) {
    let H = w ? K[w] : K[`${q}End`],
      J = K[`${q}Start`];
    if (!J || !H) return;
    HF._startChild(A, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: z || q,
      startTimestamp: Y + s$(J),
      endTimestamp: Y + s$(H)
    });
  }
  function crq(A, K, q) {
    if (K.responseEnd) HF._startChild(A, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "request",
      startTimestamp: q + s$(K.requestStart),
      endTimestamp: q + s$(K.responseEnd)
    }), HF._startChild(A, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "response",
      startTimestamp: q + s$(K.responseStart),
      endTimestamp: q + s$(K.responseEnd)
    });
  }
  function KT8(A, K, q, Y, z, w) {
    if (K.initiatorType === "xmlhttprequest" || K.initiatorType === "fetch") return;
    let H = _w.parseUrl(q),
      J = {};
    if (Dm1(J, K, "transferSize", "http.response_transfer_size"), Dm1(J, K, "encodedBodySize", "http.response_content_length"), Dm1(J, K, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in K) J["resource.render_blocking_status"] = K.renderBlockingStatus;
    if (H.protocol) J["url.scheme"] = H.protocol.split(":").pop();
    if (H.host) J["server.address"] = H.host;
    J["url.same_origin"] = q.includes(wF.WINDOW.location.origin);
    let O = w + Y,
      X = O + z;
    HF._startChild(A, {
      description: q.replace(wF.WINDOW.location.origin, ""),
      endTimestamp: X,
      op: K.initiatorType ? `resource.${K.initiatorType}` : "resource.other",
      origin: "auto.resource.browser.metrics",
      startTimestamp: O,
      data: J
    });
  }
  function lrq(A) {
    let K = wF.WINDOW.navigator;
    if (!K) return;
    let q = K.connection;
    if (q) {
      if (q.effectiveType) A.setTag("effectiveConnectionType", q.effectiveType);
      if (q.type) A.setTag("connectionType", q.type);
      if (HF.isMeasurementValue(q.rtt)) FO["connection.rtt"] = {
        value: q.rtt,
        unit: "millisecond"
      };
    }
    if (HF.isMeasurementValue(K.deviceMemory)) A.setTag("deviceMemory", `${K.deviceMemory} GB`);
    if (HF.isMeasurementValue(K.hardwareConcurrency)) A.setTag("hardwareConcurrency", String(K.hardwareConcurrency));
  }
  function irq(A) {
    if (jb) {
      if (dN.DEBUG_BUILD && _w.logger.log("[Measurements] Adding LCP Data"), jb.element) A.setTag("lcp.element", _w.htmlTreeAsString(jb.element));
      if (jb.id) A.setTag("lcp.id", jb.id);
      if (jb.url) A.setTag("lcp.url", jb.url.trim().slice(0, 200));
      A.setTag("lcp.size", jb.size);
    }
    if (FvA && FvA.sources) dN.DEBUG_BUILD && _w.logger.log("[Measurements] Adding CLS Data"), FvA.sources.forEach((K, q) => A.setTag(`cls.source.${q + 1}`, _w.htmlTreeAsString(K.node)));
  }
  function Dm1(A, K, q, Y) {
    let z = K[q];
    if (z != null && z < hrq) A[Y] = z;
  }
  function nrq(A) {
    let K = Srq.getNavigationEntry();
    if (!K) return;
    let {
      responseStart: q,
      requestStart: Y
    } = K;
    if (Y <= q) dN.DEBUG_BUILD && _w.logger.log("[Measurements] Adding TTFB Request Time"), A["ttfb.requestTime"] = {
      value: q - Y,
      unit: "millisecond"
    };
  }
  function rrq(A, K, q) {
    if (!zF.hasTracingEnabled(K)) return !1;
    let Y;
    if (A !== void 0 && typeof K.tracesSampler === "function") Y = K.tracesSampler({
      transactionContext: A,
      name: A.name,
      parentSampled: A.parentSampled,
      attributes: {
        ...A.data,
        ...A.attributes
      },
      location: wF.WINDOW.location
    });else if (A !== void 0 && A.sampled !== void 0) Y = A.sampled;else if (typeof K.tracesSampleRate < "u") Y = K.tracesSampleRate;else Y = 1;
    if (!zF.isValidSampleRate(Y)) return dN.DEBUG_BUILD && _w.logger.warn("[Tracing] Discarding interaction span because of invalid sample rate."), !1;
    if (Y === !0) return q;else if (Y === !1) return 0;
    return Y * q;
  }
  qT8._addMeasureSpans = AT8;
  qT8._addResourceSpans = KT8;
  qT8.addPerformanceEntries = prq;
  qT8.startTrackingINP = Brq;
  qT8.startTrackingInteractions = urq;
  qT8.startTrackingLongTasks = xrq;
  qT8.startTrackingWebVitals = brq;
});

// Register to shared state
__$.Mm1 = Mm1;
