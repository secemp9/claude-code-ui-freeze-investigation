// Module: zh1
// Dependencies: Yh1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zh1 = v(cl => {
  var q2q = cl && cl.__read || function (A, K) {
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
    Y2q = cl && cl.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(cl, "__esModule", {
    value: !0
  });
  cl.concatWith = void 0;
  var z2q = __$.Yh1();
  function w2q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return z2q.concat.apply(void 0, Y2q([], q2q(A)));
  }
  cl.concatWith = w2q;
});

// Register to shared state
__$.zh1 = zh1;
