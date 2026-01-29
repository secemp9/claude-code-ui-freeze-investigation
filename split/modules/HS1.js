// Module: HS1
// Dependencies: mN

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HS1 = v(SR => {
  var f88 = SR && SR.__read || function (A, K) {
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
    N88 = SR && SR.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(SR, "__esModule", {
    value: !0
  });
  SR.animationFrameProvider = void 0;
  var b4q = __$.mN();
  SR.animationFrameProvider = {
    schedule: function (A) {
      var K = requestAnimationFrame,
        q = cancelAnimationFrame,
        Y = SR.animationFrameProvider.delegate;
      if (Y) K = Y.requestAnimationFrame, q = Y.cancelAnimationFrame;
      var z = K(function (w) {
        q = void 0, A(w);
      });
      return new b4q.Subscription(function () {
        return q === null || q === void 0 ? void 0 : q(z);
      });
    },
    requestAnimationFrame: function () {
      var A = [];
      for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
      var q = SR.animationFrameProvider.delegate;
      return ((q === null || q === void 0 ? void 0 : q.requestAnimationFrame) || requestAnimationFrame).apply(void 0, N88([], f88(A)));
    },
    cancelAnimationFrame: function () {
      var A = [];
      for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
      var q = SR.animationFrameProvider.delegate;
      return ((q === null || q === void 0 ? void 0 : q.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, N88([], f88(A)));
    },
    delegate: void 0
  };
});

// Register to shared state
__$.HS1 = HS1;
