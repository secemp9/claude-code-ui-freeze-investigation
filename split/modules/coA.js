// Module: coA
// Dependencies: Y3, PZ, rzA, $7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var coA = v(ol => {
  var sHq = ol && ol.__read || function (A, K) {
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
    tHq = ol && ol.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(ol, "__esModule", {
    value: !0
  });
  ol.share = void 0;
  var x98 = __$.Y3(),
    eHq = __$.PZ(),
    u98 = __$.rzA(),
    AJq = __$.$7();
  function KJq(A) {
    if (A === void 0) A = {};
    var K = A.connector,
      q = K === void 0 ? function () {
        return new eHq.Subject();
      } : K,
      Y = A.resetOnError,
      z = Y === void 0 ? !0 : Y,
      w = A.resetOnComplete,
      H = w === void 0 ? !0 : w,
      J = A.resetOnRefCountZero,
      O = J === void 0 ? !0 : J;
    return function (X) {
      var $,
        _,
        G,
        Z = 0,
        W = !1,
        D = !1,
        j = function () {
          _ === null || _ === void 0 || _.unsubscribe(), _ = void 0;
        },
        M = function () {
          j(), $ = G = void 0, W = D = !1;
        },
        P = function () {
          var f = $;
          M(), f === null || f === void 0 || f.unsubscribe();
        };
      return AJq.operate(function (f, N) {
        if (Z++, !D && !W) j();
        var T = G = G !== null && G !== void 0 ? G : q();
        if (N.add(function () {
          if (Z--, Z === 0 && !D && !W) _ = ih1(P, O);
        }), T.subscribe(N), !$ && Z > 0) $ = new u98.SafeSubscriber({
          next: function (C) {
            return T.next(C);
          },
          error: function (C) {
            D = !0, j(), _ = ih1(M, z, C), T.error(C);
          },
          complete: function () {
            W = !0, j(), _ = ih1(M, H), T.complete();
          }
        }), x98.innerFrom(f).subscribe($);
      })(X);
    };
  }
  ol.share = KJq;
  function ih1(A, K) {
    var q = [];
    for (var Y = 2; Y < arguments.length; Y++) q[Y - 2] = arguments[Y];
    if (K === !0) {
      A();
      return;
    }
    if (K === !1) return;
    var z = new u98.SafeSubscriber({
      next: function () {
        z.unsubscribe(), A();
      }
    });
    return x98.innerFrom(K.apply(void 0, tHq([], sHq(q)))).subscribe(z);
  }
});

// Register to shared state
__$.coA = coA;
