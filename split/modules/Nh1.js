// Module: Nh1
// Dependencies: $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Nh1 = v(S38 => {
  Object.defineProperty(S38, "__esModule", {
    value: !0
  });
  S38.isEmpty = void 0;
  var Kwq = __$.$7(),
    qwq = __$._K();
  function Ywq() {
    return Kwq.operate(function (A, K) {
      A.subscribe(qwq.createOperatorSubscriber(K, function () {
        K.next(!1), K.complete();
      }, function () {
        K.next(!0), K.complete();
      }));
    });
  }
  S38.isEmpty = Ywq;
});

// Register to shared state
__$.Nh1 = Nh1;
