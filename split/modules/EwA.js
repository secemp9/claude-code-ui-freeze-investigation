// Module: EwA
// Dependencies: Y3, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EwA = v(e98 => {
  Object.defineProperty(e98, "__esModule", {
    value: !0
  });
  e98.switchMap = void 0;
  var LJq = __$.Y3(),
    RJq = __$.$7(),
    t98 = __$._K();
  function yJq(A, K) {
    return RJq.operate(function (q, Y) {
      var z = null,
        w = 0,
        H = !1,
        J = function () {
          return H && !z && Y.complete();
        };
      q.subscribe(t98.createOperatorSubscriber(Y, function (O) {
        z === null || z === void 0 || z.unsubscribe();
        var X = 0,
          $ = w++;
        LJq.innerFrom(A(O, $)).subscribe(z = t98.createOperatorSubscriber(Y, function (_) {
          return Y.next(K ? K(O, _, $, X++) : _);
        }, function () {
          z = null, J();
        }));
      }, function () {
        H = !0, J();
      }));
    });
  }
  e98.switchMap = yJq;
});

// Register to shared state
__$.EwA = EwA;
