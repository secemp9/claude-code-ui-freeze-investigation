// Module: A6A
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A6A = v(VN8 => {
  Object.defineProperty(VN8, "__esModule", {
    value: !0
  });
  var wnq = (A, K, q) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(A)) {
        let Y = new PerformanceObserver(z => {
          K(z.getEntries());
        });
        return Y.observe(Object.assign({
          type: A,
          buffered: !0
        }, q || {})), Y;
      }
    } catch (Y) {}
    return;
  };
  VN8.observe = wnq;
});

// Register to shared state
__$.A6A = A6A;
