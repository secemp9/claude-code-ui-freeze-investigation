// Module: NwA
// Dependencies: hR, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NwA = v(x58 => {
  Object.defineProperty(x58, "__esModule", {
    value: !0
  });
  x58.take = void 0;
  var L2q = __$.hR(),
    R2q = __$.$7(),
    y2q = __$._K();
  function I2q(A) {
    return A <= 0 ? function () {
      return L2q.EMPTY;
    } : R2q.operate(function (K, q) {
      var Y = 0;
      K.subscribe(y2q.createOperatorSubscriber(q, function (z) {
        if (++Y <= A) {
          if (q.next(z), A <= Y) q.complete();
        }
      }));
    });
  }
  x58.take = I2q;
});

// Register to shared state
__$.NwA = NwA;
