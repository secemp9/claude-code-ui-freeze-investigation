// Module: Qh1
// Dependencies: Y3, PZ, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qh1 = v(j98 => {
  Object.defineProperty(j98, "__esModule", {
    value: !0
  });
  j98.repeatWhen = void 0;
  var vHq = __$.Y3(),
    EHq = __$.PZ(),
    kHq = __$.$7(),
    D98 = __$._K();
  function CHq(A) {
    return kHq.operate(function (K, q) {
      var Y,
        z = !1,
        w,
        H = !1,
        J = !1,
        O = function () {
          return J && H && (q.complete(), !0);
        },
        X = function () {
          if (!w) w = new EHq.Subject(), vHq.innerFrom(A(w)).subscribe(D98.createOperatorSubscriber(q, function () {
            if (Y) $();else z = !0;
          }, function () {
            H = !0, O();
          }));
          return w;
        },
        $ = function () {
          if (J = !1, Y = K.subscribe(D98.createOperatorSubscriber(q, void 0, function () {
            J = !0, !O() && X().next();
          })), z) Y.unsubscribe(), Y = null, z = !1, $();
        };
      $();
    });
  }
  j98.repeatWhen = CHq;
});

// Register to shared state
__$.Qh1 = Qh1;
