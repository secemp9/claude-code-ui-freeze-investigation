// Module: EoA
// Dependencies: eP, Fg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EoA = v(T78 => {
  Object.defineProperty(T78, "__esModule", {
    value: !0
  });
  T78.of = void 0;
  var Nqq = __$.eP(),
    Tqq = __$.Fg();
  function vqq() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = Nqq.popScheduler(A);
    return Tqq.from(A, q);
  }
  T78.of = vqq;
});

// Register to shared state
__$.EoA = EoA;
