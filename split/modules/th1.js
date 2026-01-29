// Module: th1
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var th1 = v(n98 => {
  Object.defineProperty(n98, "__esModule", {
    value: !0
  });
  n98.skipWhile = void 0;
  var NJq = __$.$7(),
    TJq = __$._K();
  function vJq(A) {
    return NJq.operate(function (K, q) {
      var Y = !1,
        z = 0;
      K.subscribe(TJq.createOperatorSubscriber(q, function (w) {
        return (Y || (Y = !A(w, z++))) && q.next(w);
      }));
    });
  }
  n98.skipWhile = vJq;
});

// Register to shared state
__$.th1 = th1;
