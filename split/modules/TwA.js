// Module: TwA
// Dependencies: ul, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TwA = v(K38 => {
  Object.defineProperty(K38, "__esModule", {
    value: !0
  });
  K38.throwIfEmpty = void 0;
  var Jzq = __$.ul(),
    Ozq = __$.$7(),
    Xzq = __$._K();
  function $zq(A) {
    if (A === void 0) A = _zq;
    return Ozq.operate(function (K, q) {
      var Y = !1;
      K.subscribe(Xzq.createOperatorSubscriber(q, function (z) {
        Y = !0, q.next(z);
      }, function () {
        return Y ? q.complete() : q.error(A());
      }));
    });
  }
  K38.throwIfEmpty = $zq;
  function _zq() {
    return new Jzq.EmptyError();
  }
});

// Register to shared state
__$.TwA = TwA;
