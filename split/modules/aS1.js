// Module: aS1
// Dependencies: Y3, _K, $7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aS1 = v(sq8 => {
  Object.defineProperty(sq8, "__esModule", {
    value: !0
  });
  sq8.catchError = void 0;
  var ZYq = __$.Y3(),
    WYq = __$._K(),
    DYq = __$.$7();
  function aq8(A) {
    return DYq.operate(function (K, q) {
      var Y = null,
        z = !1,
        w;
      if (Y = K.subscribe(WYq.createOperatorSubscriber(q, void 0, void 0, function (H) {
        if (w = ZYq.innerFrom(A(H, aq8(A)(K))), Y) Y.unsubscribe(), Y = null, w.subscribe(q);else z = !0;
      })), z) Y.unsubscribe(), Y = null, w.subscribe(q);
    });
  }
  sq8.catchError = aq8;
});

// Register to shared state
__$.aS1 = aS1;
