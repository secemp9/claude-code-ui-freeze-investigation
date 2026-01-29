// Module: Ah1
// Dependencies: LoA, $7, k1A, ml, MTA, eP

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ah1 = v(Ul => {
  var _58 = Ul && Ul.__read || function (A, K) {
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
    G58 = Ul && Ul.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(Ul, "__esModule", {
    value: !0
  });
  Ul.combineLatest = void 0;
  var uYq = __$.LoA(),
    BYq = __$.$7(),
    mYq = __$.k1A(),
    gYq = __$.ml(),
    FYq = __$.MTA(),
    QYq = __$.eP();
  function Z58() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = QYq.popResultSelector(A);
    return q ? FYq.pipe(Z58.apply(void 0, G58([], _58(A))), gYq.mapOneOrManyArgs(q)) : BYq.operate(function (Y, z) {
      uYq.combineLatestInit(G58([Y], _58(mYq.argsOrArgArray(A))))(z);
    });
  }
  Ul.combineLatest = Z58;
});

// Register to shared state
__$.Ah1 = Ah1;
