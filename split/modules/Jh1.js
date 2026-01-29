// Module: Jh1
// Dependencies: tP, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jh1 = v(I58 => {
  Object.defineProperty(I58, "__esModule", {
    value: !0
  });
  I58.debounceTime = void 0;
  var f2q = __$.tP(),
    N2q = __$.$7(),
    T2q = __$._K();
  function v2q(A, K) {
    if (K === void 0) K = f2q.asyncScheduler;
    return N2q.operate(function (q, Y) {
      var z = null,
        w = null,
        H = null,
        J = function () {
          if (z) {
            z.unsubscribe(), z = null;
            var X = w;
            w = null, Y.next(X);
          }
        };
      function O() {
        var X = H + A,
          $ = K.now();
        if ($ < X) {
          z = this.schedule(void 0, X - $), Y.add(z);
          return;
        }
        J();
      }
      q.subscribe(T2q.createOperatorSubscriber(Y, function (X) {
        if (w = X, H = K.now(), !z) z = K.schedule(O, A), Y.add(z);
      }, function () {
        J(), Y.complete();
      }, void 0, function () {
        w = z = null;
      }));
    });
  }
  I58.debounceTime = v2q;
});

// Register to shared state
__$.Jh1 = Jh1;
