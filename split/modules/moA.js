// Module: moA
// Dependencies: MZ, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var moA = v(s58 => {
  Object.defineProperty(s58, "__esModule", {
    value: !0
  });
  s58.distinctUntilChanged = void 0;
  var Azq = __$.MZ(),
    Kzq = __$.$7(),
    qzq = __$._K();
  function Yzq(A, K) {
    if (K === void 0) K = Azq.identity;
    return A = A !== null && A !== void 0 ? A : zzq, Kzq.operate(function (q, Y) {
      var z,
        w = !0;
      q.subscribe(qzq.createOperatorSubscriber(Y, function (H) {
        var J = K(H);
        if (w || !A(z, J)) w = !1, z = J, Y.next(H);
      }));
    });
  }
  s58.distinctUntilChanged = Yzq;
  function zzq(A, K) {
    return A === K;
  }
});

// Register to shared state
__$.moA = moA;
