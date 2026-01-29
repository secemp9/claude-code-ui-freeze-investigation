// Module: poA
// Dependencies: US1, $7, MZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var poA = v(rl => {
  var GHq = rl && rl.__read || function (A, K) {
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
    ZHq = rl && rl.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(rl, "__esModule", {
    value: !0
  });
  rl.raceWith = void 0;
  var WHq = __$.US1(),
    DHq = __$.$7(),
    jHq = __$.MZ();
  function MHq() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return !A.length ? jHq.identity : DHq.operate(function (q, Y) {
      WHq.raceInit(ZHq([q], GHq(A)))(Y);
    });
  }
  rl.raceWith = MHq;
});

// Register to shared state
__$.poA = poA;
