// Module: jb1
// Dependencies: $7, _K, Y3, MZ, jZ, eP

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jb1 = v(al => {
  var FY8 = al && al.__read || function (A, K) {
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
    QY8 = al && al.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(al, "__esModule", {
    value: !0
  });
  al.withLatestFrom = void 0;
  var pOq = __$.$7(),
    UY8 = __$._K(),
    dOq = __$.Y3(),
    cOq = __$.MZ(),
    lOq = __$.jZ(),
    iOq = __$.eP();
  function nOq() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = iOq.popResultSelector(A);
    return pOq.operate(function (Y, z) {
      var w = A.length,
        H = Array(w),
        J = A.map(function () {
          return !1;
        }),
        O = !1,
        X = function (_) {
          dOq.innerFrom(A[_]).subscribe(UY8.createOperatorSubscriber(z, function (G) {
            if (H[_] = G, !O && !J[_]) J[_] = !0, (O = J.every(cOq.identity)) && (J = null);
          }, lOq.noop));
        };
      for (var $ = 0; $ < w; $++) X($);
      Y.subscribe(UY8.createOperatorSubscriber(z, function (_) {
        if (O) {
          var G = QY8([_], FY8(H));
          z.next(q ? q.apply(void 0, QY8([], FY8(G))) : G);
        }
      }));
    });
  }
  al.withLatestFrom = nOq;
});

// Register to shared state
__$.jb1 = jb1;
