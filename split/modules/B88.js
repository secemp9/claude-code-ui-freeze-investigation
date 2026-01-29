// Module: B88
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B88 = v(ah => {
  var x88 = ah && ah.__read || function (A, K) {
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
    u88 = ah && ah.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(ah, "__esModule", {
    value: !0
  });
  ah.intervalProvider = void 0;
  ah.intervalProvider = {
    setInterval: function (A, K) {
      var q = [];
      for (var Y = 2; Y < arguments.length; Y++) q[Y - 2] = arguments[Y];
      var z = ah.intervalProvider.delegate;
      if (z === null || z === void 0 ? void 0 : z.setInterval) return z.setInterval.apply(z, u88([A, K], x88(q)));
      return setInterval.apply(void 0, u88([A, K], x88(q)));
    },
    clearInterval: function (A) {
      var K = ah.intervalProvider.delegate;
      return ((K === null || K === void 0 ? void 0 : K.clearInterval) || clearInterval)(A);
    },
    delegate: void 0
  };
});

// Register to shared state
__$.B88 = B88;
