// Module: Pb1
// Dependencies: yoA, $7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pb1 = v(sl => {
  var sOq = sl && sl.__read || function (A, K) {
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
    tOq = sl && sl.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(sl, "__esModule", {
    value: !0
  });
  sl.zip = void 0;
  var eOq = __$.yoA(),
    A0q = __$.$7();
  function K0q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return A0q.operate(function (q, Y) {
      eOq.zip.apply(void 0, tOq([q], sOq(A))).subscribe(Y);
    });
  }
  sl.zip = K0q;
});

// Register to shared state
__$.Pb1 = Pb1;
