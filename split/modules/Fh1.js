// Module: Fh1
// Dependencies: hR, $7, _K, Y3, Fl

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fh1 = v(Z98 => {
  Object.defineProperty(Z98, "__esModule", {
    value: !0
  });
  Z98.repeat = void 0;
  var PHq = __$.hR(),
    VHq = __$.$7(),
    G98 = __$._K(),
    fHq = __$.Y3(),
    NHq = __$.Fl();
  function THq(A) {
    var K,
      q = 1 / 0,
      Y;
    if (A != null) if (typeof A === "object") K = A.count, q = K === void 0 ? 1 / 0 : K, Y = A.delay;else q = A;
    return q <= 0 ? function () {
      return PHq.EMPTY;
    } : VHq.operate(function (z, w) {
      var H = 0,
        J,
        O = function () {
          if (J === null || J === void 0 || J.unsubscribe(), J = null, Y != null) {
            var $ = typeof Y === "number" ? NHq.timer(Y) : fHq.innerFrom(Y(H)),
              _ = G98.createOperatorSubscriber(w, function () {
                _.unsubscribe(), X();
              });
            $.subscribe(_);
          } else X();
        },
        X = function () {
          var $ = !1;
          if (J = z.subscribe(G98.createOperatorSubscriber(w, void 0, function () {
            if (++H < q) {
              if (J) O();else $ = !0;
            } else w.complete();
          })), $) O();
        };
      X();
    });
  }
  Z98.repeat = THq;
});

// Register to shared state
__$.Fh1 = Fh1;
