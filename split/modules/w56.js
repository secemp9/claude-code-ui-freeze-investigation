// Module: w56
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var w56 = v(MW4 => {
  Object.defineProperty(MW4, "__esModule", {
    value: !0
  });
  MW4.defaultTextMapSetter = MW4.defaultTextMapGetter = void 0;
  MW4.defaultTextMapGetter = {
    get(A, K) {
      if (A == null) return;
      return A[K];
    },
    keys(A) {
      if (A == null) return [];
      return Object.keys(A);
    }
  };
  MW4.defaultTextMapSetter = {
    set(A, K, q) {
      if (A == null) return;
      A[K] = q;
    }
  };
});

// Register to shared state
__$.w56 = w56;
