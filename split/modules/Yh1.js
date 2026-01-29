// Module: Yh1
// Dependencies: $7, NTA, eP, Fg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yh1 = v(dl => {
  var oYq = dl && dl.__read || function (A, K) {
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
    aYq = dl && dl.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(dl, "__esModule", {
    value: !0
  });
  dl.concat = void 0;
  var sYq = __$.$7(),
    tYq = __$.NTA(),
    eYq = __$.eP(),
    A2q = __$.Fg();
  function K2q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = eYq.popScheduler(A);
    return sYq.operate(function (Y, z) {
      tYq.concatAll()(A2q.from(aYq([Y], oYq(A)), q)).subscribe(z);
    });
  }
  dl.concat = K2q;
});

// Register to shared state
__$.Yh1 = Yh1;
