// Module: Zh1
// Dependencies: TTA, EoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zh1 = v(ll => {
  var Mzq = ll && ll.__read || function (A, K) {
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
    Pzq = ll && ll.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(ll, "__esModule", {
    value: !0
  });
  ll.endWith = void 0;
  var Vzq = __$.TTA(),
    fzq = __$.EoA();
  function Nzq() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    return function (q) {
      return Vzq.concat(q, fzq.of.apply(void 0, Pzq([], Mzq(A))));
    };
  }
  ll.endWith = Nzq;
});

// Register to shared state
__$.Zh1 = Zh1;
