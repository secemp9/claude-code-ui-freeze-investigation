// Module: B_8
// Dependencies: x_8, LR1, fnA, OTq, jzA, e2A, b_8, u_8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B_8 = k(() => {
  __$.x_8();
  __$.LR1();
  __$.fnA();
  __$.OTq = !__$.jzA ? __$.e2A : function (A, K) {
    return __$.jzA(A, "toString", {
      configurable: !0,
      enumerable: !1,
      value: __$.b_8(K),
      writable: !0
    });
  }, __$.u_8 = __$.OTq;
});

// Register to shared state
__$.B_8 = B_8;
