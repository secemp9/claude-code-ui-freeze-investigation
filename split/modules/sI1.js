// Module: sI1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sI1 = v(rh => {
  var g68 = rh && rh.__read || function (A, K) {
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
    F68 = rh && rh.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(rh, "__esModule", {
    value: !0
  });
  rh.timeoutProvider = void 0;
  rh.timeoutProvider = {
    setTimeout: function (A, K) {
      var q = [];
      for (var Y = 2; Y < arguments.length; Y++) q[Y - 2] = arguments[Y];
      var z = rh.timeoutProvider.delegate;
      if (z === null || z === void 0 ? void 0 : z.setTimeout) return z.setTimeout.apply(z, F68([A, K], g68(q)));
      return setTimeout.apply(void 0, F68([A, K], g68(q)));
    },
    clearTimeout: function (A) {
      var K = rh.timeoutProvider.delegate;
      return ((K === null || K === void 0 ? void 0 : K.clearTimeout) || clearTimeout)(A);
    },
    delegate: void 0
  };
});

// Register to shared state
__$.sI1 = sI1;
