// Module: EHA
// Dependencies: pN, WN8, ftA, BvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EHA = v(PN8 => {
  Object.defineProperty(PN8, "__esModule", {
    value: !0
  });
  var MN8 = __$.pN(),
    Anq = __$.WN8(),
    Knq = __$.ftA(),
    qnq = __$.BvA(),
    Ynq = (A, K) => {
      let q = qnq.getNavigationEntry(),
        Y = "navigate";
      if (q) if (MN8.WINDOW.document && MN8.WINDOW.document.prerendering || Knq.getActivationStart() > 0) Y = "prerender";else Y = q.type.replace(/_/g, "-");
      return {
        name: A,
        value: typeof K > "u" ? -1 : K,
        rating: "good",
        delta: 0,
        entries: [],
        id: Anq.generateUniqueID(),
        navigationType: Y
      };
    };
  PN8.initMetric = Ynq;
});

// Register to shared state
__$.EHA = EHA;
