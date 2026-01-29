// Module: ml
// Dependencies: Qg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ml = v(Bl => {
  var z5q = Bl && Bl.__read || function (A, K) {
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
    w5q = Bl && Bl.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(Bl, "__esModule", {
    value: !0
  });
  Bl.mapOneOrManyArgs = void 0;
  var H5q = __$.Qg(),
    J5q = Array.isArray;
  function O5q(A, K) {
    return J5q(K) ? A.apply(void 0, w5q([], z5q(K))) : A(K);
  }
  function X5q(A) {
    return H5q.map(function (K) {
      return O5q(A, K);
    });
  }
  Bl.mapOneOrManyArgs = X5q;
});

// Register to shared state
__$.ml = ml;
