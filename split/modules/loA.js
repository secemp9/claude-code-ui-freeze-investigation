// Module: loA
// Dependencies: $7, _K, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var loA = v(DY8 => {
  Object.defineProperty(DY8, "__esModule", {
    value: !0
  });
  DY8.throttle = void 0;
  var sJq = __$.$7(),
    WY8 = __$._K(),
    tJq = __$.Y3();
  function eJq(A, K) {
    return sJq.operate(function (q, Y) {
      var z = K !== null && K !== void 0 ? K : {},
        w = z.leading,
        H = w === void 0 ? !0 : w,
        J = z.trailing,
        O = J === void 0 ? !1 : J,
        X = !1,
        $ = null,
        _ = null,
        G = !1,
        Z = function () {
          if (_ === null || _ === void 0 || _.unsubscribe(), _ = null, O) j(), G && Y.complete();
        },
        W = function () {
          _ = null, G && Y.complete();
        },
        D = function (M) {
          return _ = tJq.innerFrom(A(M)).subscribe(WY8.createOperatorSubscriber(Y, Z, W));
        },
        j = function () {
          if (X) {
            X = !1;
            var M = $;
            $ = null, Y.next(M), !G && D(M);
          }
        };
      q.subscribe(WY8.createOperatorSubscriber(Y, function (M) {
        X = !0, $ = M, !(_ && !_.closed) && (H ? j() : D(M));
      }, function () {
        G = !0, !(O && X && _ && !_.closed) && Y.complete();
      }));
    });
  }
  DY8.throttle = eJq;
});

// Register to shared state
__$.loA = loA;
