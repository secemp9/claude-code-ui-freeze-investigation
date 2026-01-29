// Module: cK8
// Dependencies: xz, Hz, ml

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cK8 = v(pK8 => {
  Object.defineProperty(pK8, "__esModule", {
    value: !0
  });
  pK8.fromEventPattern = void 0;
  var L3q = __$.xz(),
    R3q = __$.Hz(),
    y3q = __$.ml();
  function UK8(A, K, q) {
    if (q) return UK8(A, K).pipe(y3q.mapOneOrManyArgs(q));
    return new L3q.Observable(function (Y) {
      var z = function () {
          var H = [];
          for (var J = 0; J < arguments.length; J++) H[J] = arguments[J];
          return Y.next(H.length === 1 ? H[0] : H);
        },
        w = A(z);
      return R3q.isFunction(K) ? function () {
        return K(z, w);
      } : void 0;
    });
  }
  pK8.fromEventPattern = UK8;
});

// Register to shared state
__$.cK8 = cK8;
