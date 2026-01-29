// Module: Hh1
// Dependencies: $7, jZ, _K, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hh1 = v(R58 => {
  Object.defineProperty(R58, "__esModule", {
    value: !0
  });
  R58.debounce = void 0;
  var j2q = __$.$7(),
    M2q = __$.jZ(),
    L58 = __$._K(),
    P2q = __$.Y3();
  function V2q(A) {
    return j2q.operate(function (K, q) {
      var Y = !1,
        z = null,
        w = null,
        H = function () {
          if (w === null || w === void 0 || w.unsubscribe(), w = null, Y) {
            Y = !1;
            var J = z;
            z = null, q.next(J);
          }
        };
      K.subscribe(L58.createOperatorSubscriber(q, function (J) {
        w === null || w === void 0 || w.unsubscribe(), Y = !0, z = J, w = L58.createOperatorSubscriber(q, H, M2q.noop), P2q.innerFrom(A(J)).subscribe(w);
      }, function () {
        H(), q.complete();
      }, void 0, function () {
        z = w = null;
      }));
    });
  }
  R58.debounce = V2q;
});

// Register to shared state
__$.Hh1 = Hh1;
