// Module: K28
// Dependencies: k1A, poA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K28 = v(el => {
  var X_q = el && el.__read || function (A, K) {
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
    $_q = el && el.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(el, "__esModule", {
    value: !0
  });
  el.race = void 0;
  var __q = __$.k1A(),
    G_q = __$.poA();
  function Z_q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return G_q.raceWith.apply(void 0, $_q([], X_q(__q.argsOrArgArray(A))));
  }
  el.race = Z_q;
});

// Register to shared state
__$.K28 = K28;
