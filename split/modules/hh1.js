// Module: hh1
// Dependencies: k1A, FS1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hh1 = v(eh => {
  var cwq = eh && eh.__read || function (A, K) {
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
    lwq = eh && eh.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(eh, "__esModule", {
    value: !0
  });
  eh.onErrorResumeNext = eh.onErrorResumeNextWith = void 0;
  var iwq = __$.k1A(),
    nwq = __$.FS1();
  function t38() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = iwq.argsOrArgArray(A);
    return function (Y) {
      return nwq.onErrorResumeNext.apply(void 0, lwq([Y], cwq(q)));
    };
  }
  eh.onErrorResumeNextWith = t38;
  eh.onErrorResumeNext = t38;
});

// Register to shared state
__$.hh1 = hh1;
