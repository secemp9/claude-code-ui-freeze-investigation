// Module: Lh1
// Dependencies: th, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Lh1 = v(p38 => {
  Object.defineProperty(p38, "__esModule", {
    value: !0
  });
  p38.mergeMapTo = void 0;
  var U38 = __$.th(),
    vwq = __$.Hz();
  function Ewq(A, K, q) {
    if (q === void 0) q = 1 / 0;
    if (vwq.isFunction(K)) return U38.mergeMap(function () {
      return A;
    }, K, q);
    if (typeof K === "number") q = K;
    return U38.mergeMap(function () {
      return A;
    }, q);
  }
  p38.mergeMapTo = Ewq;
});

// Register to shared state
__$.Lh1 = Lh1;
