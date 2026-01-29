// Module: Kb1
// Dependencies: EwA, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kb1 = v(zY8 => {
  Object.defineProperty(zY8, "__esModule", {
    value: !0
  });
  zY8.switchMapTo = void 0;
  var YY8 = __$.EwA(),
    bJq = __$.Hz();
  function xJq(A, K) {
    return bJq.isFunction(K) ? YY8.switchMap(function () {
      return A;
    }, K) : YY8.switchMap(function () {
      return A;
    });
  }
  zY8.switchMapTo = xJq;
});

// Register to shared state
__$.Kb1 = Kb1;
