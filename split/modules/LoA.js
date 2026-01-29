// Module: LoA
// Dependencies: xz, xS1, Fg, MZ, ml, eP, uS1, _K, gg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LoA = v(MK8 => {
  Object.defineProperty(MK8, "__esModule", {
    value: !0
  });
  MK8.combineLatestInit = MK8.combineLatest = void 0;
  var R5q = __$.xz(),
    y5q = __$.xS1(),
    WK8 = __$.Fg(),
    DK8 = __$.MZ(),
    I5q = __$.ml(),
    GK8 = __$.eP(),
    S5q = __$.uS1(),
    h5q = __$._K(),
    b5q = __$.gg();
  function x5q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = GK8.popScheduler(A),
      Y = GK8.popResultSelector(A),
      z = y5q.argsArgArrayOrObject(A),
      w = z.args,
      H = z.keys;
    if (w.length === 0) return WK8.from([], q);
    var J = new R5q.Observable(jK8(w, q, H ? function (O) {
      return S5q.createObject(H, O);
    } : DK8.identity));
    return Y ? J.pipe(I5q.mapOneOrManyArgs(Y)) : J;
  }
  MK8.combineLatest = x5q;
  function jK8(A, K, q) {
    if (q === void 0) q = DK8.identity;
    return function (Y) {
      ZK8(K, function () {
        var z = A.length,
          w = Array(z),
          H = z,
          J = z,
          O = function ($) {
            ZK8(K, function () {
              var _ = WK8.from(A[$], K),
                G = !1;
              _.subscribe(h5q.createOperatorSubscriber(Y, function (Z) {
                if (w[$] = Z, !G) G = !0, J--;
                if (!J) Y.next(q(w.slice()));
              }, function () {
                if (! --H) Y.complete();
              }));
            }, Y);
          };
        for (var X = 0; X < z; X++) O(X);
      }, Y);
    };
  }
  MK8.combineLatestInit = jK8;
  function ZK8(A, K, q) {
    if (A) b5q.executeSchedule(q, A, K);else K();
  }
});

// Register to shared state
__$.LoA = LoA;
