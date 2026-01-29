// Module: wb1
// Dependencies: Hz, $7, _K, MZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wb1 = v(GY8 => {
  Object.defineProperty(GY8, "__esModule", {
    value: !0
  });
  GY8.tap = void 0;
  var iJq = __$.Hz(),
    nJq = __$.$7(),
    rJq = __$._K(),
    oJq = __$.MZ();
  function aJq(A, K, q) {
    var Y = iJq.isFunction(A) || K || q ? {
      next: A,
      error: K,
      complete: q
    } : A;
    return Y ? nJq.operate(function (z, w) {
      var H;
      (H = Y.subscribe) === null || H === void 0 || H.call(Y);
      var J = !0;
      z.subscribe(rJq.createOperatorSubscriber(w, function (O) {
        var X;
        (X = Y.next) === null || X === void 0 || X.call(Y, O), w.next(O);
      }, function () {
        var O;
        J = !1, (O = Y.complete) === null || O === void 0 || O.call(Y), w.complete();
      }, function (O) {
        var X;
        J = !1, (X = Y.error) === null || X === void 0 || X.call(Y, O), w.error(O);
      }, function () {
        var O, X;
        if (J) (O = Y.unsubscribe) === null || O === void 0 || O.call(Y);
        (X = Y.finalize) === null || X === void 0 || X.call(Y);
      }));
    }) : oJq.identity;
  }
  GY8.tap = aJq;
});

// Register to shared state
__$.wb1 = wb1;
