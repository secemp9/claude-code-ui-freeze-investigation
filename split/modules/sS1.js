// Module: sS1
// Dependencies: _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sS1 = v(eq8 => {
  Object.defineProperty(eq8, "__esModule", {
    value: !0
  });
  eq8.scanInternals = void 0;
  var jYq = __$._K();
  function MYq(A, K, q, Y, z) {
    return function (w, H) {
      var J = q,
        O = K,
        X = 0;
      w.subscribe(jYq.createOperatorSubscriber(H, function ($) {
        var _ = X++;
        O = J ? A(O, $, _) : (J = !0, $), Y && H.next(O);
      }, z && function () {
        J && H.next(O), H.complete();
      }));
    };
  }
  eq8.scanInternals = MYq;
});

// Register to shared state
__$.sS1 = sS1;
