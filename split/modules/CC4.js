// Module: CC4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CC4 = v(EC4 => {
  Object.defineProperty(EC4, "__esModule", {
    value: !0
  });
  EC4.isUrlIgnored = EC4.urlMatches = void 0;
  function vC4(A, K) {
    if (typeof K === "string") return A === K;else return !!A.match(K);
  }
  EC4.urlMatches = vC4;
  function FX9(A, K) {
    if (!K) return !1;
    for (let q of K) if (vC4(A, q)) return !0;
    return !1;
  }
  EC4.isUrlIgnored = FX9;
});

// Register to shared state
__$.CC4 = CC4;
