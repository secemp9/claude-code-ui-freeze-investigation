// Module: Ih1
// Dependencies: yh1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ih1 = v(nl => {
  var xwq = nl && nl.__read || function (A, K) {
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
    uwq = nl && nl.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(nl, "__esModule", {
    value: !0
  });
  nl.mergeWith = void 0;
  var Bwq = __$.yh1();
  function mwq() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return Bwq.merge.apply(void 0, uwq([], xwq(A)));
  }
  nl.mergeWith = mwq;
});

// Register to shared state
__$.Ih1 = Ih1;
