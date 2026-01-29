// Module: goA
// Dependencies: Qg, Y3, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var goA = v(_38 => {
  Object.defineProperty(_38, "__esModule", {
    value: !0
  });
  _38.exhaustMap = void 0;
  var kzq = __$.Qg(),
    O38 = __$.Y3(),
    Czq = __$.$7(),
    X38 = __$._K();
  function $38(A, K) {
    if (K) return function (q) {
      return q.pipe($38(function (Y, z) {
        return O38.innerFrom(A(Y, z)).pipe(kzq.map(function (w, H) {
          return K(Y, w, z, H);
        }));
      }));
    };
    return Czq.operate(function (q, Y) {
      var z = 0,
        w = null,
        H = !1;
      q.subscribe(X38.createOperatorSubscriber(Y, function (J) {
        if (!w) w = X38.createOperatorSubscriber(Y, void 0, function () {
          w = null, H && Y.complete();
        }), O38.innerFrom(A(J, z++)).subscribe(w);
      }, function () {
        H = !0, !w && Y.complete();
      }));
    });
  }
  _38.exhaustMap = $38;
});

// Register to shared state
__$.goA = goA;
