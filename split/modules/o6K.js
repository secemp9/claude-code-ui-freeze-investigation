// Module: o6K
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var o6K = v(n6K => {
  Object.defineProperty(n6K, "__esModule", {
    value: !0
  });
  n6K.tryCreateFormattedUrl = void 0;
  var AW2 = A => A.replace(/\/$/, ""),
    KW2 = (A, K) => {
      return AW2(new URL(K || "", A).href);
    };
  n6K.tryCreateFormattedUrl = KW2;
});

// Register to shared state
__$.o6K = o6K;
