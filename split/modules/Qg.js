// Module: Qg
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qg = v(e78 => {
  Object.defineProperty(e78, "__esModule", {
    value: !0
  });
  e78.map = void 0;
  var K5q = __$.$7(),
    q5q = __$._K();
  function Y5q(A, K) {
    return K5q.operate(function (q, Y) {
      var z = 0;
      q.subscribe(q5q.createOperatorSubscriber(Y, function (w) {
        Y.next(A.call(K, w, z++));
      }));
    });
  }
  e78.map = Y5q;
});

// Register to shared state
__$.Qg = Qg;
