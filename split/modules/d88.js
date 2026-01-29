// Module: d88
// Dependencies: U88

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var d88 = v(sh => {
  var J7q = sh && sh.__read || function (A, K) {
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
    O7q = sh && sh.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(sh, "__esModule", {
    value: !0
  });
  sh.immediateProvider = void 0;
  var p88 = __$.U88(),
    X7q = p88.Immediate.setImmediate,
    $7q = p88.Immediate.clearImmediate;
  sh.immediateProvider = {
    setImmediate: function () {
      var A = [];
      for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
      var q = sh.immediateProvider.delegate;
      return ((q === null || q === void 0 ? void 0 : q.setImmediate) || X7q).apply(void 0, O7q([], J7q(A)));
    },
    clearImmediate: function (A) {
      var K = sh.immediateProvider.delegate;
      return ((K === null || K === void 0 ? void 0 : K.clearImmediate) || $7q)(A);
    },
    delegate: void 0
  };
});

// Register to shared state
__$.d88 = d88;
