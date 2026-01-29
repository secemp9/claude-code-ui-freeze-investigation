// Module: th
// Dependencies: Qg, Y3, $7, RoA, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var th = v(vK8 => {
  Object.defineProperty(vK8, "__esModule", {
    value: !0
  });
  vK8.mergeMap = void 0;
  var F5q = __$.Qg(),
    Q5q = __$.Y3(),
    U5q = __$.$7(),
    p5q = __$.RoA(),
    d5q = __$.Hz();
  function TK8(A, K, q) {
    if (q === void 0) q = 1 / 0;
    if (d5q.isFunction(K)) return TK8(function (Y, z) {
      return F5q.map(function (w, H) {
        return K(Y, w, z, H);
      })(Q5q.innerFrom(A(Y, z)));
    }, q);else if (typeof K === "number") q = K;
    return U5q.operate(function (Y, z) {
      return p5q.mergeInternals(Y, z, A, q);
    });
  }
  vK8.mergeMap = TK8;
});

// Register to shared state
__$.th = th;
