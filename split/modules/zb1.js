// Module: zb1
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zb1 = v($Y8 => {
  Object.defineProperty($Y8, "__esModule", {
    value: !0
  });
  $Y8.takeWhile = void 0;
  var dJq = __$.$7(),
    cJq = __$._K();
  function lJq(A, K) {
    if (K === void 0) K = !1;
    return dJq.operate(function (q, Y) {
      var z = 0;
      q.subscribe(cJq.createOperatorSubscriber(Y, function (w) {
        var H = A(w, z++);
        (H || K) && Y.next(w), !H && Y.complete();
      }));
    });
  }
  $Y8.takeWhile = lJq;
});

// Register to shared state
__$.zb1 = zb1;
