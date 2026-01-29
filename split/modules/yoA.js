// Module: yoA
// Dependencies: xz, Y3, k1A, hR, _K, eP

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yoA = v(Ql => {
  var C9q = Ql && Ql.__read || function (A, K) {
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
    L9q = Ql && Ql.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(Ql, "__esModule", {
    value: !0
  });
  Ql.zip = void 0;
  var R9q = __$.xz(),
    y9q = __$.Y3(),
    I9q = __$.k1A(),
    S9q = __$.hR(),
    h9q = __$._K(),
    b9q = __$.eP();
  function x9q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = b9q.popResultSelector(A),
      Y = I9q.argsOrArgArray(A);
    return Y.length ? new R9q.Observable(function (z) {
      var w = Y.map(function () {
          return [];
        }),
        H = Y.map(function () {
          return !1;
        });
      z.add(function () {
        w = H = null;
      });
      var J = function (X) {
        y9q.innerFrom(Y[X]).subscribe(h9q.createOperatorSubscriber(z, function ($) {
          if (w[X].push($), w.every(function (G) {
            return G.length;
          })) {
            var _ = w.map(function (G) {
              return G.shift();
            });
            if (z.next(q ? q.apply(void 0, L9q([], C9q(_))) : _), w.some(function (G, Z) {
              return !G.length && H[Z];
            })) z.complete();
          }
        }, function () {
          H[X] = !0, !w[X].length && z.complete();
        }));
      };
      for (var O = 0; !z.closed && O < Y.length; O++) J(O);
      return function () {
        w = H = null;
      };
    }) : S9q.EMPTY;
  }
  Ql.zip = x9q;
});

// Register to shared state
__$.yoA = yoA;
