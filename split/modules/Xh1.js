// Module: Xh1
// Dependencies: koA, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xh1 = v(i58 => {
  Object.defineProperty(i58, "__esModule", {
    value: !0
  });
  i58.dematerialize = void 0;
  var i2q = __$.koA(),
    n2q = __$.$7(),
    r2q = __$._K();
  function o2q() {
    return n2q.operate(function (A, K) {
      A.subscribe(r2q.createOperatorSubscriber(K, function (q) {
        return i2q.observeNotification(q, K);
      }));
    });
  }
  i58.dematerialize = o2q;
});

// Register to shared state
__$.Xh1 = Xh1;
