// Module: RT8
// Dependencies: sq, H8, wV, Xm1, LHA, Mm1, RtA, pN

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RT8 = v(LT8 => {
  Object.defineProperty(LT8, "__esModule", {
    value: !0
  });
  var U0 = __$.sq(),
    uE = __$.H8(),
    ji = __$.wV(),
    Ioq = __$.Xm1(),
    NT8 = __$.LHA(),
    dvA = __$.Mm1(),
    vT8 = __$.RtA(),
    cN = __$.pN(),
    ET8 = "BrowserTracing",
    Soq = {
      ...U0.TRACING_DEFAULTS,
      instrumentNavigation: !0,
      instrumentPageLoad: !0,
      markBackgroundSpan: !0,
      enableLongTask: !0,
      enableInp: !1,
      interactionsSampleRate: 1,
      _experiments: {},
      ...vT8.defaultRequestInstrumentationOptions
    },
    hoq = (A = {}) => {
      let K = ji.DEBUG_BUILD ? !!(A.tracePropagationTargets || A.tracingOrigins) : !1;
      if (U0.addTracingExtensions(), !A.tracePropagationTargets && A.tracingOrigins) A.tracePropagationTargets = A.tracingOrigins;
      let q = {
          ...Soq,
          ...A
        },
        Y = dvA.startTrackingWebVitals(),
        z = {};
      if (q.enableInp) dvA.startTrackingINP(z, q.interactionsSampleRate);
      if (q.enableLongTask) dvA.startTrackingLongTasks();
      if (q._experiments.enableInteractions) dvA.startTrackingInteractions();
      let w = {
        name: void 0,
        context: void 0
      };
      function H(J) {
        let O = U0.getCurrentHub(),
          {
            beforeStartSpan: X,
            idleTimeout: $,
            finalTimeout: _,
            heartbeatInterval: G
          } = q,
          Z = J.op === "pageload",
          W;
        if (Z) {
          let P = Z ? Nm1("sentry-trace") : "",
            f = Z ? Nm1("baggage") : void 0,
            {
              traceId: N,
              dsc: T,
              parentSpanId: C,
              sampled: R
            } = uE.propagationContextFromHeaders(P, f);
          W = {
            traceId: N,
            parentSpanId: C,
            parentSampled: R,
            ...J,
            metadata: {
              ...J.metadata,
              dynamicSamplingContext: T
            },
            trimEnd: !0
          };
        } else W = {
          trimEnd: !0,
          ...J
        };
        let D = X ? X(W) : W;
        if (D.metadata = D.name !== W.name ? {
          ...D.metadata,
          source: "custom"
        } : D.metadata, w.name = D.name, w.context = D, D.sampled === !1) ji.DEBUG_BUILD && uE.logger.log(`[Tracing] Will not send ${D.op} transaction because of beforeNavigate.`);
        ji.DEBUG_BUILD && uE.logger.log(`[Tracing] Starting ${D.op} transaction on scope`);
        let {
            location: j
          } = cN.WINDOW,
          M = U0.startIdleTransaction(O, D, $, _, !0, {
            location: j
          }, G, Z);
        if (Z && cN.WINDOW.document) {
          if (cN.WINDOW.document.addEventListener("readystatechange", () => {
            if (["interactive", "complete"].includes(cN.WINDOW.document.readyState)) M.sendAutoFinishSignal();
          }), ["interactive", "complete"].includes(cN.WINDOW.document.readyState)) M.sendAutoFinishSignal();
        }
        return M.registerBeforeFinishCallback(P => {
          Y(), dvA.addPerformanceEntries(P);
        }), M;
      }
      return {
        name: ET8,
        setupOnce: () => {},
        afterAllSetup(J) {
          let O = J.getOptions(),
            {
              markBackgroundSpan: X,
              traceFetch: $,
              traceXHR: _,
              shouldCreateSpanForRequest: G,
              enableHTTPTimings: Z,
              _experiments: W
            } = q,
            D = O && O.tracePropagationTargets,
            j = D || q.tracePropagationTargets;
          if (ji.DEBUG_BUILD && K && D) uE.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
          let M,
            P = cN.WINDOW.location && cN.WINDOW.location.href;
          if (J.on) J.on("startNavigationSpan", f => {
            if (M) ji.DEBUG_BUILD && uE.logger.log(`[Tracing] Finishing current transaction with op: ${U0.spanToJSON(M).op}`), M.end();
            M = H({
              op: "navigation",
              ...f
            });
          }), J.on("startPageLoadSpan", f => {
            if (M) ji.DEBUG_BUILD && uE.logger.log(`[Tracing] Finishing current transaction with op: ${U0.spanToJSON(M).op}`), M.end();
            M = H({
              op: "pageload",
              ...f
            });
          });
          if (q.instrumentPageLoad && J.emit && cN.WINDOW.location) {
            let f = {
              name: cN.WINDOW.location.pathname,
              startTimestamp: uE.browserPerformanceTimeOrigin ? uE.browserPerformanceTimeOrigin / 1000 : void 0,
              origin: "auto.pageload.browser",
              attributes: {
                [U0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
              }
            };
            kT8(J, f);
          }
          if (q.instrumentNavigation && J.emit && cN.WINDOW.location) uE.addHistoryInstrumentationHandler(({
            to: f,
            from: N
          }) => {
            if (N === void 0 && P && P.indexOf(f) !== -1) {
              P = void 0;
              return;
            }
            if (N !== f) {
              P = void 0;
              let T = {
                name: cN.WINDOW.location.pathname,
                origin: "auto.navigation.browser",
                attributes: {
                  [U0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
                }
              };
              CT8(J, T);
            }
          });
          if (X) Ioq.registerBackgroundTabDetection();
          if (W.enableInteractions) boq(q, w);
          if (q.enableInp) uoq(z, w);
          vT8.instrumentOutgoingRequests({
            traceFetch: $,
            traceXHR: _,
            tracePropagationTargets: j,
            shouldCreateSpanForRequest: G,
            enableHTTPTimings: Z
          });
        },
        options: q
      };
    };
  function kT8(A, K) {
    if (!A.emit) return;
    A.emit("startPageLoadSpan", K);
    let q = U0.getActiveSpan();
    return (q && U0.spanToJSON(q).op) === "pageload" ? q : void 0;
  }
  function CT8(A, K) {
    if (!A.emit) return;
    A.emit("startNavigationSpan", K);
    let q = U0.getActiveSpan();
    return (q && U0.spanToJSON(q).op) === "navigation" ? q : void 0;
  }
  function Nm1(A) {
    let K = uE.getDomElement(`meta[name=${A}]`);
    return K ? K.getAttribute("content") : void 0;
  }
  function boq(A, K) {
    let q,
      Y = () => {
        let {
            idleTimeout: z,
            finalTimeout: w,
            heartbeatInterval: H
          } = A,
          J = "ui.action.click",
          O = U0.getActiveTransaction();
        if (O && O.op && ["navigation", "pageload"].includes(O.op)) {
          ji.DEBUG_BUILD && uE.logger.warn("[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.");
          return;
        }
        if (q) q.setFinishReason("interactionInterrupted"), q.end(), q = void 0;
        if (!K.name) {
          ji.DEBUG_BUILD && uE.logger.warn("[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.");
          return;
        }
        let {
            location: X
          } = cN.WINDOW,
          $ = {
            name: K.name,
            op: "ui.action.click",
            trimEnd: !0,
            data: {
              [U0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: K.context ? Boq(K.context) : "url"
            }
          };
        q = U0.startIdleTransaction(U0.getCurrentHub(), $, z, w, !0, {
          location: X
        }, H);
      };
    ["click"].forEach(z => {
      if (cN.WINDOW.document) addEventListener(z, Y, {
        once: !1,
        capture: !0
      });
    });
  }
  function xoq(A) {
    return "duration" in A;
  }
  var TT8 = 10;
  function uoq(A, K) {
    let q = ({
      entries: Y
    }) => {
      let z = U0.getClient(),
        w = z !== void 0 && z.getIntegrationByName !== void 0 ? z.getIntegrationByName("Replay") : void 0,
        H = w !== void 0 ? w.getReplayId() : void 0,
        J = U0.getActiveTransaction(),
        O = U0.getCurrentScope(),
        X = O !== void 0 ? O.getUser() : void 0;
      Y.forEach($ => {
        if (xoq($)) {
          let _ = $.interactionId;
          if (_ === void 0) return;
          let G = A[_],
            Z = $.duration,
            W = $.startTime,
            D = Object.keys(A),
            j = D.length > 0 ? D.reduce((M, P) => {
              return A[M].duration < A[P].duration ? M : P;
            }) : void 0;
          if ($.entryType === "first-input") {
            if (D.map(P => A[P]).some(P => {
              return P.duration === Z && P.startTime === W;
            })) return;
          }
          if (!_) return;
          if (G) G.duration = Math.max(G.duration, Z);else if (D.length < TT8 || j === void 0 || Z > A[j].duration) {
            let {
              name: M,
              context: P
            } = K;
            if (M && P) {
              if (j && Object.keys(A).length >= TT8) delete A[j];
              A[_] = {
                routeName: M,
                duration: Z,
                parentContext: P,
                user: X,
                activeTransaction: J,
                replayId: H,
                startTime: W
              };
            }
          }
        }
      });
    };
    NT8.addPerformanceInstrumentationHandler("event", q), NT8.addPerformanceInstrumentationHandler("first-input", q);
  }
  function Boq(A) {
    let K = A.attributes && A.attributes[U0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      q = A.data && A.data[U0.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      Y = A.metadata && A.metadata.source;
    return K || q || Y;
  }
  LT8.BROWSER_TRACING_INTEGRATION_ID = ET8;
  LT8.browserTracingIntegration = hoq;
  LT8.getMetaContent = Nm1;
  LT8.startBrowserTracingNavigationSpan = CT8;
  LT8.startBrowserTracingPageLoadSpan = kT8;
});

// Register to shared state
__$.RT8 = RT8;
