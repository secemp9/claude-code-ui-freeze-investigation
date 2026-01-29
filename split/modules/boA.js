// Module: boA
// Dependencies: th, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var boA = v(D58 => {
  Object.defineProperty(D58, "__esModule", {
    value: !0
  });
  D58.concatMap = void 0;
  var W58 = __$.th(),
    lYq = __$.Hz();
  function iYq(A, K) {
    return lYq.isFunction(K) ? W58.mergeMap(A, K, 1) : W58.mergeMap(A, 1);
  }
  D58.concatMap = iYq;
});

// Register to shared state
__$.boA = boA;
