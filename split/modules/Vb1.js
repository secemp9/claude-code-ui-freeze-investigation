// Module: Vb1
// Dependencies: Pb1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vb1 = v(tl => {
  var q0q = tl && tl.__read || function (A, K) {
      var q = typeof Symbol === "function" && A[Symbol.iterator];
      if (!q) return A;
      var Y = q.call(A),
        z,
        w = [],
        H;
      try {
        while ((K === void 0 || K-- > 0) && !(z = Y.next()).done) w.push(z.value);
      } catch (J) {
        H = {
          error: J
        };
      } finally {
        try {
          if (z && !z.done && (q = Y.return)) q.call(Y);
        } finally {
          if (H) throw H.error;
        }
      }
      return w;
    },
    Y0q = tl && tl.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(tl, "__esModule", {
    value: !0
  });
  tl.zipWith = void 0;
  var z0q = __$.Pb1();
  function w0q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return z0q.zip.apply(void 0, Y0q([], q0q(A)));
  }
  tl.zipWith = w0q;
});

// Register to shared state
__$.Vb1 = Vb1;
