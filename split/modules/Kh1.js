// Module: Kh1
// Dependencies: Ah1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kh1 = v(pl => {
  var UYq = pl && pl.__read || function (A, K) {
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
    pYq = pl && pl.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(pl, "__esModule", {
    value: !0
  });
  pl.combineLatestWith = void 0;
  var dYq = __$.Ah1();
  function cYq() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return dYq.combineLatest.apply(void 0, pYq([], UYq(A)));
  }
  pl.combineLatestWith = cYq;
});

// Register to shared state
__$.Kh1 = Kh1;
