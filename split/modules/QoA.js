// Module: QoA
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QoA = v(T38 => {
  Object.defineProperty(T38, "__esModule", {
    value: !0
  });
  T38.createFind = T38.find = void 0;
  var Bzq = __$.$7(),
    mzq = __$._K();
  function gzq(A, K) {
    return Bzq.operate(N38(A, K, "value"));
  }
  T38.find = gzq;
  function N38(A, K, q) {
    var Y = q === "index";
    return function (z, w) {
      var H = 0;
      z.subscribe(mzq.createOperatorSubscriber(w, function (J) {
        var O = H++;
        if (A.call(K, J, O, z)) w.next(Y ? O : J), w.complete();
      }, function () {
        w.next(Y ? -1 : void 0), w.complete();
      }));
    };
  }
  T38.createFind = N38;
});

// Register to shared state
__$.QoA = QoA;
