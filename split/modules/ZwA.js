// Module: ZwA
// Dependencies: $7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZwA = v(t48 => {
  Object.defineProperty(t48, "__esModule", {
    value: !0
  });
  t48.subscribeOn = void 0;
  var mKq = __$.$7();
  function gKq(A, K) {
    if (K === void 0) K = 0;
    return mKq.operate(function (q, Y) {
      Y.add(A.schedule(function () {
        return q.subscribe(Y);
      }, K));
    });
  }
  t48.subscribeOn = gKq;
});

// Register to shared state
__$.ZwA = ZwA;
