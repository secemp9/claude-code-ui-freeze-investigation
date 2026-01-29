// Module: ah1
// Dependencies: MZ, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ah1 = v(p98 => {
  Object.defineProperty(p98, "__esModule", {
    value: !0
  });
  p98.skipLast = void 0;
  var ZJq = __$.MZ(),
    WJq = __$.$7(),
    DJq = __$._K();
  function jJq(A) {
    return A <= 0 ? ZJq.identity : WJq.operate(function (K, q) {
      var Y = Array(A),
        z = 0;
      return K.subscribe(DJq.createOperatorSubscriber(q, function (w) {
        var H = z++;
        if (H < A) Y[H] = w;else {
          var J = H % A,
            O = Y[J];
          Y[J] = w, q.next(O);
        }
      })), function () {
        Y = null;
      };
    });
  }
  p98.skipLast = jJq;
});

// Register to shared state
__$.ah1 = ah1;
