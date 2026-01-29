// Module: qh1
// Dependencies: boA, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qh1 = v(P58 => {
  Object.defineProperty(P58, "__esModule", {
    value: !0
  });
  P58.concatMapTo = void 0;
  var M58 = __$.boA(),
    nYq = __$.Hz();
  function rYq(A, K) {
    return nYq.isFunction(K) ? M58.concatMap(function () {
      return A;
    }, K) : M58.concatMap(function () {
      return A;
    });
  }
  P58.concatMapTo = rYq;
});

// Register to shared state
__$.qh1 = qh1;
