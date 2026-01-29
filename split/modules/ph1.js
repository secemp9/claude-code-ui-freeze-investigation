// Module: ph1
// Dependencies: Y3, PZ, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ph1 = v(T98 => {
  Object.defineProperty(T98, "__esModule", {
    value: !0
  });
  T98.retryWhen = void 0;
  var hHq = __$.Y3(),
    bHq = __$.PZ(),
    xHq = __$.$7(),
    N98 = __$._K();
  function uHq(A) {
    return xHq.operate(function (K, q) {
      var Y,
        z = !1,
        w,
        H = function () {
          if (Y = K.subscribe(N98.createOperatorSubscriber(q, void 0, void 0, function (J) {
            if (!w) w = new bHq.Subject(), hHq.innerFrom(A(w)).subscribe(N98.createOperatorSubscriber(q, function () {
              return Y ? H() : z = !0;
            }));
            if (w) w.next(J);
          })), z) Y.unsubscribe(), Y = null, z = !1, H();
        };
      H();
    });
  }
  T98.retryWhen = uHq;
});

// Register to shared state
__$.ph1 = ph1;
