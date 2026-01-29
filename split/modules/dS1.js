// Module: dS1
// Dependencies: $7, jZ, _K, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dS1 = v(pq8 => {
  Object.defineProperty(pq8, "__esModule", {
    value: !0
  });
  pq8.buffer = void 0;
  var p9q = __$.$7(),
    d9q = __$.jZ(),
    Uq8 = __$._K(),
    c9q = __$.Y3();
  function l9q(A) {
    return p9q.operate(function (K, q) {
      var Y = [];
      return K.subscribe(Uq8.createOperatorSubscriber(q, function (z) {
        return Y.push(z);
      }, function () {
        q.next(Y), q.complete();
      })), c9q.innerFrom(A).subscribe(Uq8.createOperatorSubscriber(q, function () {
        var z = Y;
        Y = [], q.next(z);
      }, d9q.noop)), function () {
        Y = null;
      };
    });
  }
  pq8.buffer = l9q;
});

// Register to shared state
__$.dS1 = dS1;
