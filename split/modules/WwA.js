// Module: WwA
// Dependencies: th, MZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WwA = v(kK8 => {
  Object.defineProperty(kK8, "__esModule", {
    value: !0
  });
  kK8.mergeAll = void 0;
  var c5q = __$.th(),
    l5q = __$.MZ();
  function i5q(A) {
    if (A === void 0) A = 1 / 0;
    return c5q.mergeMap(l5q.identity, A);
  }
  kK8.mergeAll = i5q;
});

// Register to shared state
__$.WwA = WwA;
