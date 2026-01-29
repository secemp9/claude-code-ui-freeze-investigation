// Module: fT8
// Dependencies: sq, H8, wV, Xm1, LHA, Mm1, RtA, ZT8, pN

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fT8 = v(VT8 => {
  Object.defineProperty(VT8, "__esModule", {
    value: !0
  });
  var gR = __$.sq(),
    JF = __$.H8(),
    Di = __$.wV(),
    Toq = __$.Xm1(),
    WT8 = __$.LHA(),
    pvA = __$.Mm1(),
    jT8 = __$.RtA(),
    voq = __$.ZT8(),
    Y6A = __$.pN(),
    MT8 = "BrowserTracing",
    Eoq = {
      ...gR.TRACING_DEFAULTS,
      markBackgroundTransactions: !0,
      routingInstrumentation: voq.instrumentRoutingWithDefaults,
      startTransactionOnLocationChange: !0,
      startTransactionOnPageLoad: !0,
      enableLongTask: !0,
      enableInp: !1,
      interactionsSampleRate: 1,
      _experiments: {},
      ...jT8.defaultRequestInstrumentationOptions
    },
    DT8 = 10;
  class PT8 {
    constructor(A) {
      if (this.name = MT8, this._hasSetTracePropagationTargets = !1, gR.addTracingExtensions(), Di.DEBUG_BUILD) this._hasSetTracePropagationTargets = !!(A && (A.tracePropagationTargets || A.tracingOrigins));
      if (this.options = {
        ...Eoq,
        ...A
      }, this.options._experiments.enableLongTask !== void 0) this.options.enableLongTask = this.options._experiments.enableLongTask;
      if (A && !A.tracePropagationTargets && A.tracingOrigins) this.options.tracePropagationTargets = A.tracingOrigins;
      if (this._collectWebVitals = pvA.startTrackingWebVitals(), this._interactionIdToRouteNameMapping = {}, this.options.enableInp) pvA.startTrackingINP(this._interactionIdToRouteNameMapping, this.options.interactionsSampleRate);
      if (this.options.enableLongTask) pvA.startTrackingLongTasks();
      if (this.options._experiments.enableInteractions) pvA.startTrackingInteractions();
      this._latestRoute = {
        name: void 0,
        context: void 0
      };
    }
    setupOnce(A, K) {
      this._getCurrentHub = K;
      let Y = K().getClient(),
        z = Y && Y.getOptions(),
        {
          routingInstrumentation: w,
          startTransactionOnLocationChange: H,
          startTransactionOnPageLoad: J,
          markBackgroundTransactions: O,
          traceFetch: X,
          traceXHR: $,
          shouldCreateSpanForRequest: _,
          enableHTTPTimings: G,
          _experiments: Z
        } = this.options,
        W = z && z.tracePropagationTargets,
        D = W || this.options.tracePropagationTargets;
      if (Di.DEBUG_BUILD && this._hasSetTracePropagationTargets && W) JF.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
      if (w(j => {
        let M = this._createRouteTransaction(j);
        return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(M, j, K), M;
      }, J, H), O) Toq.registerBackgroundTabDetection();
      if (Z.enableInteractions) this._registerInteractionListener();
      if (this.options.enableInp) this._registerInpInteractionListener();
      jT8.instrumentOutgoingRequests({
        traceFetch: X,
        traceXHR: $,
        tracePropagationTargets: D,
        shouldCreateSpanForRequest: _,
        enableHTTPTimings: G
      });
    }
    _createRouteTransaction(A) {
      if (!this._getCurrentHub) {
        Di.DEBUG_BUILD && JF.logger.warn(`[Tracing] Did not create ${A.op} transaction because _getCurrentHub is invalid.`);
        return;
      }
      let K = this._getCurrentHub(),
        {
          beforeNavigate: q,
          idleTimeout: Y,
          finalTimeout: z,
          heartbeatInterval: w
        } = this.options,
        H = A.op === "pageload",
        J;
      if (H) {
        let G = H ? fm1("sentry-trace") : "",
          Z = H ? fm1("baggage") : void 0,
          {
            traceId: W,
            dsc: D,
            parentSpanId: j,
            sampled: M
          } = JF.propagationContextFromHeaders(G, Z);
        J = {
          traceId: W,
          parentSpanId: j,
          parentSampled: M,
          ...A,
          metadata: {
            ...A.metadata,
            dynamicSamplingContext: D
          },
          trimEnd: !0
        };
      } else J = {
        trimEnd: !0,
        ...A
      };
      let O = typeof q === "function" ? q(J) : J,
        X = O === void 0 ? {
          ...J,
          sampled: !1
        } : O;
      if (X.metadata = X.name !== J.name ? {
        ...X.metadata,
        source: "custom"
      } : X.metadata, this._latestRoute.name = X.name, this._latestRoute.context = X, X.sampled === !1) Di.DEBUG_BUILD && JF.logger.log(`[Tracing] Will not send ${X.op} transaction because of beforeNavigate.`);
      Di.DEBUG_BUILD && JF.logger.log(`[Tracing] Starting ${X.op} transaction on scope`);
      let {
          location: $
        } = Y6A.WINDOW,
        _ = gR.startIdleTransaction(K, X, Y, z, !0, {
          location: $
        }, w, H);
      if (H) {
        if (Y6A.WINDOW.document) {
          if (Y6A.WINDOW.document.addEventListener("readystatechange", () => {
            if (["interactive", "complete"].includes(Y6A.WINDOW.document.readyState)) _.sendAutoFinishSignal();
          }), ["interactive", "complete"].includes(Y6A.WINDOW.document.readyState)) _.sendAutoFinishSignal();
        }
      }
      return _.registerBeforeFinishCallback(G => {
        this._collectWebVitals(), pvA.addPerformanceEntries(G);
      }), _;
    }
    _registerInteractionListener() {
      let A,
        K = () => {
          let {
              idleTimeout: q,
              finalTimeout: Y,
              heartbeatInterval: z
            } = this.options,
            w = "ui.action.click",
            H = gR.getActiveTransaction();
          if (H && H.op && ["navigation", "pageload"].includes(H.op)) {
            Di.DEBUG_BUILD && JF.logger.warn("[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.");
            return;
          }
          if (A) A.setFinishReason("interactionInterrupted"), A.end(), A = void 0;
          if (!this._getCurrentHub) {
            Di.DEBUG_BUILD && JF.logger.warn("[Tracing] Did not create ui.action.click transaction because _getCurrentHub is invalid.");
            return;
          }
          if (!this._latestRoute.name) {
            Di.DEBUG_BUILD && JF.logger.warn("[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.");
            return;
          }
          let J = this._getCurrentHub(),
            {
              location: O
            } = Y6A.WINDOW,
            X = {
              name: this._latestRoute.name,
              op: "ui.action.click",
              trimEnd: !0,
              data: {
                [gR.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: this._latestRoute.context ? koq(this._latestRoute.context) : "url"
              }
            };
          A = gR.startIdleTransaction(J, X, q, Y, !0, {
            location: O
          }, z);
        };
      ["click"].forEach(q => {
        if (Y6A.WINDOW.document) addEventListener(q, K, {
          once: !1,
          capture: !0
        });
      });
    }
    _registerInpInteractionListener() {
      let A = ({
        entries: K
      }) => {
        let q = gR.getClient(),
          Y = q !== void 0 && q.getIntegrationByName !== void 0 ? q.getIntegrationByName("Replay") : void 0,
          z = Y !== void 0 ? Y.getReplayId() : void 0,
          w = gR.getActiveTransaction(),
          H = gR.getCurrentScope(),
          J = H !== void 0 ? H.getUser() : void 0;
        K.forEach(O => {
          if (Coq(O)) {
            let X = O.interactionId;
            if (X === void 0) return;
            let $ = this._interactionIdToRouteNameMapping[X],
              _ = O.duration,
              G = O.startTime,
              Z = Object.keys(this._interactionIdToRouteNameMapping),
              W = Z.length > 0 ? Z.reduce((D, j) => {
                return this._interactionIdToRouteNameMapping[D].duration < this._interactionIdToRouteNameMapping[j].duration ? D : j;
              }) : void 0;
            if (O.entryType === "first-input") {
              if (Z.map(j => this._interactionIdToRouteNameMapping[j]).some(j => {
                return j.duration === _ && j.startTime === G;
              })) return;
            }
            if (!X) return;
            if ($) $.duration = Math.max($.duration, _);else if (Z.length < DT8 || W === void 0 || _ > this._interactionIdToRouteNameMapping[W].duration) {
              let D = this._latestRoute.name,
                j = this._latestRoute.context;
              if (D && j) {
                if (W && Object.keys(this._interactionIdToRouteNameMapping).length >= DT8) delete this._interactionIdToRouteNameMapping[W];
                this._interactionIdToRouteNameMapping[X] = {
                  routeName: D,
                  duration: _,
                  parentContext: j,
                  user: J,
                  activeTransaction: w,
                  replayId: z,
                  startTime: G
                };
              }
            }
          }
        });
      };
      WT8.addPerformanceInstrumentationHandler("event", A), WT8.addPerformanceInstrumentationHandler("first-input", A);
    }
  }
  function fm1(A) {
    let K = JF.getDomElement(`meta[name=${A}]`);
    return K ? K.getAttribute("content") : void 0;
  }
  function koq(A) {
    let K = A.attributes && A.attributes[gR.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      q = A.data && A.data[gR.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      Y = A.metadata && A.metadata.source;
    return K || q || Y;
  }
  function Coq(A) {
    return "duration" in A;
  }
  VT8.BROWSER_TRACING_INTEGRATION_ID = MT8;
  VT8.BrowserTracing = PT8;
  VT8.getMetaContent = fm1;
});

// Register to shared state
__$.fT8 = fT8;
