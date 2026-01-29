// Module: yh1
// Dependencies: $7, WwA, eP, Fg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yh1 = v(il => {
  var Rwq = il && il.__read || function (A, K) {
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
    ywq = il && il.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(il, "__esModule", {
    value: !0
  });
  il.merge = void 0;
  var Iwq = __$.$7(),
    Swq = __$.WwA(),
    i38 = __$.eP(),
    hwq = __$.Fg();
  function bwq() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = i38.popScheduler(A),
      Y = i38.popNumber(A, 1 / 0);
    return Iwq.operate(function (z, w) {
      Swq.mergeAll(Y)(hwq.from(ywq([z], Rwq(A)), q)).subscribe(w);
    });
  }
  il.merge = bwq;
});

// Register to shared state
__$.yh1 = yh1;
