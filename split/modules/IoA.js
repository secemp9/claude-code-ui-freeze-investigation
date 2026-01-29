// Module: IoA
// Dependencies: $7, Y3, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IoA = v(mq8 => {
  Object.defineProperty(mq8, "__esModule", {
    value: !0
  });
  mq8.audit = void 0;
  var u9q = __$.$7(),
    B9q = __$.Y3(),
    Bq8 = __$._K();
  function m9q(A) {
    return u9q.operate(function (K, q) {
      var Y = !1,
        z = null,
        w = null,
        H = !1,
        J = function () {
          if (w === null || w === void 0 || w.unsubscribe(), w = null, Y) {
            Y = !1;
            var X = z;
            z = null, q.next(X);
          }
          H && q.complete();
        },
        O = function () {
          w = null, H && q.complete();
        };
      K.subscribe(Bq8.createOperatorSubscriber(q, function (X) {
        if (Y = !0, z = X, !w) B9q.innerFrom(A(X)).subscribe(w = Bq8.createOperatorSubscriber(q, J, O));
      }, function () {
        H = !0, (!Y || !w || w.closed) && q.complete();
      }));
    });
  }
  mq8.audit = m9q;
});

// Register to shared state
__$.IoA = IoA;
