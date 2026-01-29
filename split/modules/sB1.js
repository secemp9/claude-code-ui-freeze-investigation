// Module: sB1
// Dependencies: H8, FX, KF

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sB1 = v(UV8 => {
  Object.defineProperty(UV8, "__esModule", {
    value: !0
  });
  var c_ = __$.H8(),
    s1A = __$.FX(),
    gV8 = __$.KF(),
    Ipq = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/],
    Spq = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
    FV8 = "InboundFilters",
    hpq = (A = {}) => {
      return {
        name: FV8,
        setupOnce() {},
        processEvent(K, q, Y) {
          let z = Y.getOptions(),
            w = xpq(A, z);
          return upq(K, w) ? null : K;
        }
      };
    },
    QV8 = gV8.defineIntegration(hpq),
    bpq = gV8.convertIntegrationFnToClass(FV8, QV8);
  function xpq(A = {}, K = {}) {
    return {
      allowUrls: [...(A.allowUrls || []), ...(K.allowUrls || [])],
      denyUrls: [...(A.denyUrls || []), ...(K.denyUrls || [])],
      ignoreErrors: [...(A.ignoreErrors || []), ...(K.ignoreErrors || []), ...(A.disableErrorDefaults ? [] : Ipq)],
      ignoreTransactions: [...(A.ignoreTransactions || []), ...(K.ignoreTransactions || []), ...(A.disableTransactionDefaults ? [] : Spq)],
      ignoreInternal: A.ignoreInternal !== void 0 ? A.ignoreInternal : !0
    };
  }
  function upq(A, K) {
    if (K.ignoreInternal && Upq(A)) return s1A.DEBUG_BUILD && c_.logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${c_.getEventDescription(A)}`), !0;
    if (Bpq(A, K.ignoreErrors)) return s1A.DEBUG_BUILD && c_.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${c_.getEventDescription(A)}`), !0;
    if (mpq(A, K.ignoreTransactions)) return s1A.DEBUG_BUILD && c_.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${c_.getEventDescription(A)}`), !0;
    if (gpq(A, K.denyUrls)) return s1A.DEBUG_BUILD && c_.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${c_.getEventDescription(A)}.
Url: ${ztA(A)}`), !0;
    if (!Fpq(A, K.allowUrls)) return s1A.DEBUG_BUILD && c_.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${c_.getEventDescription(A)}.
Url: ${ztA(A)}`), !0;
    return !1;
  }
  function Bpq(A, K) {
    if (A.type || !K || !K.length) return !1;
    return Qpq(A).some(q => c_.stringMatchesSomePattern(q, K));
  }
  function mpq(A, K) {
    if (A.type !== "transaction" || !K || !K.length) return !1;
    let q = A.transaction;
    return q ? c_.stringMatchesSomePattern(q, K) : !1;
  }
  function gpq(A, K) {
    if (!K || !K.length) return !1;
    let q = ztA(A);
    return !q ? !1 : c_.stringMatchesSomePattern(q, K);
  }
  function Fpq(A, K) {
    if (!K || !K.length) return !0;
    let q = ztA(A);
    return !q ? !0 : c_.stringMatchesSomePattern(q, K);
  }
  function Qpq(A) {
    let K = [];
    if (A.message) K.push(A.message);
    let q;
    try {
      q = A.exception.values[A.exception.values.length - 1];
    } catch (Y) {}
    if (q) {
      if (q.value) {
        if (K.push(q.value), q.type) K.push(`${q.type}: ${q.value}`);
      }
    }
    if (s1A.DEBUG_BUILD && K.length === 0) c_.logger.error(`Could not extract message for event ${c_.getEventDescription(A)}`);
    return K;
  }
  function Upq(A) {
    try {
      return A.exception.values[0].type === "SentryError";
    } catch (K) {}
    return !1;
  }
  function ppq(A = []) {
    for (let K = A.length - 1; K >= 0; K--) {
      let q = A[K];
      if (q && q.filename !== "<anonymous>" && q.filename !== "[native code]") return q.filename || null;
    }
    return null;
  }
  function ztA(A) {
    try {
      let K;
      try {
        K = A.exception.values[0].stacktrace.frames;
      } catch (q) {}
      return K ? ppq(K) : null;
    } catch (K) {
      return s1A.DEBUG_BUILD && c_.logger.error(`Cannot extract url for event ${c_.getEventDescription(A)}`), null;
    }
  }
  UV8.InboundFilters = bpq;
  UV8.inboundFiltersIntegration = QV8;
});

// Register to shared state
__$.sB1 = sB1;
