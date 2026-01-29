// Module: BvA
// Dependencies: pN

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BvA = v(DN8 => {
  Object.defineProperty(DN8, "__esModule", {
    value: !0
  });
  var uvA = __$.pN(),
    riq = () => {
      let A = uvA.WINDOW.performance.timing,
        K = uvA.WINDOW.performance.navigation.type,
        q = {
          entryType: "navigation",
          startTime: 0,
          type: K == 2 ? "back_forward" : K === 1 ? "reload" : "navigate"
        };
      for (let Y in A) if (Y !== "navigationStart" && Y !== "toJSON") q[Y] = Math.max(A[Y] - A.navigationStart, 0);
      return q;
    },
    oiq = () => {
      if (uvA.WINDOW.__WEB_VITALS_POLYFILL__) return uvA.WINDOW.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || riq());else return uvA.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    };
  DN8.getNavigationEntry = oiq;
});

// Register to shared state
__$.BvA = BvA;
