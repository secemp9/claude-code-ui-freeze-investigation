// Module: bS1
// Dependencies: VTA, xz, ZwA, ml, GwA, foA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bS1 = v(gl => {
  var $5q = gl && gl.__read || function (A, K) {
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
    KK8 = gl && gl.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(gl, "__esModule", {
    value: !0
  });
  gl.bindCallbackInternals = void 0;
  var _5q = __$.VTA(),
    G5q = __$.xz(),
    Z5q = __$.ZwA(),
    W5q = __$.ml(),
    D5q = __$.GwA(),
    j5q = __$.foA();
  function hS1(A, K, q, Y) {
    if (q) if (_5q.isScheduler(q)) Y = q;else return function () {
      var z = [];
      for (var w = 0; w < arguments.length; w++) z[w] = arguments[w];
      return hS1(A, K, Y).apply(this, z).pipe(W5q.mapOneOrManyArgs(q));
    };
    if (Y) return function () {
      var z = [];
      for (var w = 0; w < arguments.length; w++) z[w] = arguments[w];
      return hS1(A, K).apply(this, z).pipe(Z5q.subscribeOn(Y), D5q.observeOn(Y));
    };
    return function () {
      var z = this,
        w = [];
      for (var H = 0; H < arguments.length; H++) w[H] = arguments[H];
      var J = new j5q.AsyncSubject(),
        O = !0;
      return new G5q.Observable(function (X) {
        var $ = J.subscribe(X);
        if (O) {
          O = !1;
          var _ = !1,
            G = !1;
          if (K.apply(z, KK8(KK8([], $5q(w)), [function () {
            var Z = [];
            for (var W = 0; W < arguments.length; W++) Z[W] = arguments[W];
            if (A) {
              var D = Z.shift();
              if (D != null) {
                J.error(D);
                return;
              }
            }
            if (J.next(1 < Z.length ? Z : Z[0]), G = !0, _) J.complete();
          }])), G) J.complete();
          _ = !0;
        }
        return $;
      });
    };
  }
  gl.bindCallbackInternals = hS1;
});

// Register to shared state
__$.bS1 = bS1;
