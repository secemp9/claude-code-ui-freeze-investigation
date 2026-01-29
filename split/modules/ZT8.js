// Module: ZT8
// Dependencies: H8, wV, pN

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZT8 = v(GT8 => {
  Object.defineProperty(GT8, "__esModule", {
    value: !0
  });
  var QvA = __$.H8(),
    _T8 = __$.wV(),
    UvA = __$.pN();
  function foq(A, K = !0, q = !0) {
    if (!UvA.WINDOW || !UvA.WINDOW.location) {
      _T8.DEBUG_BUILD && QvA.logger.warn("Could not initialize routing instrumentation due to invalid location");
      return;
    }
    let Y = UvA.WINDOW.location.href,
      z;
    if (K) z = A({
      name: UvA.WINDOW.location.pathname,
      startTimestamp: QvA.browserPerformanceTimeOrigin ? QvA.browserPerformanceTimeOrigin / 1000 : void 0,
      op: "pageload",
      origin: "auto.pageload.browser",
      metadata: {
        source: "url"
      }
    });
    if (q) QvA.addHistoryInstrumentationHandler(({
      to: w,
      from: H
    }) => {
      if (H === void 0 && Y && Y.indexOf(w) !== -1) {
        Y = void 0;
        return;
      }
      if (H !== w) {
        if (Y = void 0, z) _T8.DEBUG_BUILD && QvA.logger.log(`[Tracing] Finishing current transaction with op: ${z.op}`), z.end();
        z = A({
          name: UvA.WINDOW.location.pathname,
          op: "navigation",
          origin: "auto.navigation.browser",
          metadata: {
            source: "url"
          }
        });
      }
    });
  }
  GT8.instrumentRoutingWithDefaults = foq;
});

// Register to shared state
__$.ZT8 = ZT8;
