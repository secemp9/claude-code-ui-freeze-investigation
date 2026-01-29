// Module: eP
// Dependencies: Hz, VTA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eP = v(k48 => {
  Object.defineProperty(k48, "__esModule", {
    value: !0
  });
  k48.popNumber = k48.popScheduler = k48.popResultSelector = void 0;
  var o7q = __$.Hz(),
    a7q = __$.VTA();
  function DS1(A) {
    return A[A.length - 1];
  }
  function s7q(A) {
    return o7q.isFunction(DS1(A)) ? A.pop() : void 0;
  }
  k48.popResultSelector = s7q;
  function t7q(A) {
    return a7q.isScheduler(DS1(A)) ? A.pop() : void 0;
  }
  k48.popScheduler = t7q;
  function e7q(A, K) {
    return typeof DS1(A) === "number" ? A.pop() : K;
  }
  k48.popNumber = e7q;
});

// Register to shared state
__$.eP = eP;
