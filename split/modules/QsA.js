// Module: QsA
// Dependencies: xE

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QsA = v(oM8 => {
  Object.defineProperty(oM8, "__esModule", {
    value: !0
  });
  var Ngq = __$.xE();
  function Tgq(A) {
    if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) return !1;
    let K = Ngq.getClient(),
      q = A || K && K.getOptions();
    return !!q && (q.enableTracing || "tracesSampleRate" in q || "tracesSampler" in q);
  }
  oM8.hasTracingEnabled = Tgq;
});

// Register to shared state
__$.QsA = QsA;
