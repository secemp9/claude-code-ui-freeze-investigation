// Module: Wh1
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wh1 = v(H38 => {
  Object.defineProperty(H38, "__esModule", {
    value: !0
  });
  H38.every = void 0;
  var Tzq = __$.$7(),
    vzq = __$._K();
  function Ezq(A, K) {
    return Tzq.operate(function (q, Y) {
      var z = 0;
      q.subscribe(vzq.createOperatorSubscriber(Y, function (w) {
        if (!A.call(K, w, z++, q)) Y.next(!1), Y.complete();
      }, function () {
        Y.next(!0), Y.complete();
      }));
    });
  }
  H38.every = Ezq;
});

// Register to shared state
__$.Wh1 = Wh1;
