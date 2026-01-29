// Module: Sh1
// Dependencies: C1A, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sh1 = v(n38 => {
  Object.defineProperty(n38, "__esModule", {
    value: !0
  });
  n38.min = void 0;
  var gwq = __$.C1A(),
    Fwq = __$.Hz();
  function Qwq(A) {
    return gwq.reduce(Fwq.isFunction(A) ? function (K, q) {
      return A(K, q) < 0 ? K : q;
    } : function (K, q) {
      return K < q ? K : q;
    });
  }
  n38.min = Qwq;
});

// Register to shared state
__$.Sh1 = Sh1;
