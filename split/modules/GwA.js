// Module: GwA
// Dependencies: gg, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GwA = v(a48 => {
  Object.defineProperty(a48, "__esModule", {
    value: !0
  });
  a48.observeOn = void 0;
  var ES1 = __$.gg(),
    xKq = __$.$7(),
    uKq = __$._K();
  function BKq(A, K) {
    if (K === void 0) K = 0;
    return xKq.operate(function (q, Y) {
      q.subscribe(uKq.createOperatorSubscriber(Y, function (z) {
        return ES1.executeSchedule(Y, A, function () {
          return Y.next(z);
        }, K);
      }, function () {
        return ES1.executeSchedule(Y, A, function () {
          return Y.complete();
        }, K);
      }, function (z) {
        return ES1.executeSchedule(Y, A, function () {
          return Y.error(z);
        }, K);
      }));
    });
  }
  a48.observeOn = BKq;
});

// Register to shared state
__$.GwA = GwA;
