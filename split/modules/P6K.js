// Module: P6K
// Dependencies: Uz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P6K = v(j6K => {
  Object.defineProperty(j6K, "__esModule", {
    value: !0
  });
  j6K.groupBy = void 0;
  var D6K = __$.Uz();
  function bZ2(A, K) {
    var q = {};
    return A.forEach(function (Y) {
      var z,
        w = void 0;
      if (typeof K === "string") {
        var H = Y[K];
        w = typeof H !== "string" ? JSON.stringify(H) : H;
      } else if (K instanceof Function) w = K(Y);
      if (w === void 0) return;
      q[w] = D6K.__spreadArray(D6K.__spreadArray([], (z = q[w]) !== null && z !== void 0 ? z : [], !0), [Y], !1);
    }), q;
  }
  j6K.groupBy = bZ2;
});

// Register to shared state
__$.P6K = P6K;
