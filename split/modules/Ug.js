// Module: Ug
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ug = v(Mq8 => {
  Object.defineProperty(Mq8, "__esModule", {
    value: !0
  });
  Mq8.filter = void 0;
  var X9q = __$.$7(),
    $9q = __$._K();
  function _9q(A, K) {
    return X9q.operate(function (q, Y) {
      var z = 0;
      q.subscribe($9q.createOperatorSubscriber(Y, function (w) {
        return A.call(K, w, z++) && Y.next(w);
      }));
    });
  }
  Mq8.filter = _9q;
});

// Register to shared state
__$.Ug = Ug;
