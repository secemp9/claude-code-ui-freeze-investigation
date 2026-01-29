// Module: fwA
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fwA = v(h58 => {
  Object.defineProperty(h58, "__esModule", {
    value: !0
  });
  h58.defaultIfEmpty = void 0;
  var E2q = __$.$7(),
    k2q = __$._K();
  function C2q(A) {
    return E2q.operate(function (K, q) {
      var Y = !1;
      K.subscribe(k2q.createOperatorSubscriber(q, function (z) {
        Y = !0, q.next(z);
      }, function () {
        if (!Y) q.next(A);
        q.complete();
      }));
    });
  }
  h58.defaultIfEmpty = C2q;
});

// Register to shared state
__$.fwA = fwA;
