// Module: QN8
// Dependencies: pN, vHA, ftA, BvA, EHA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QN8 = v(FN8 => {
  Object.defineProperty(FN8, "__esModule", {
    value: !0
  });
  var Zm1 = __$.pN(),
    onq = __$.vHA(),
    anq = __$.ftA(),
    snq = __$.BvA(),
    tnq = __$.EHA(),
    Wm1 = A => {
      if (!Zm1.WINDOW.document) return;
      if (Zm1.WINDOW.document.prerendering) addEventListener("prerenderingchange", () => Wm1(A), !0);else if (Zm1.WINDOW.document.readyState !== "complete") addEventListener("load", () => Wm1(A), !0);else setTimeout(A, 0);
    },
    enq = (A, K) => {
      K = K || {};
      let q = tnq.initMetric("TTFB"),
        Y = onq.bindReporter(A, q, K.reportAllChanges);
      Wm1(() => {
        let z = snq.getNavigationEntry();
        if (z) {
          if (q.value = Math.max(z.responseStart - anq.getActivationStart(), 0), q.value < 0 || q.value > performance.now()) return;
          q.entries = [z], Y(!0);
        }
      });
    };
  FN8.onTTFB = enq;
});

// Register to shared state
__$.QN8 = QN8;
