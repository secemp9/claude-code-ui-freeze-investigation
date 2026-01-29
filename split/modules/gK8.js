// Module: gK8
// Dependencies: xz, xS1, Y3, eP, _K, ml, uS1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gK8 = v(BK8 => {
  Object.defineProperty(BK8, "__esModule", {
    value: !0
  });
  BK8.forkJoin = void 0;
  var J3q = __$.xz(),
    O3q = __$.xS1(),
    X3q = __$.Y3(),
    $3q = __$.eP(),
    _3q = __$._K(),
    G3q = __$.ml(),
    Z3q = __$.uS1();
  function W3q() {
    var A = [];
    for (var K = 0; K < arguments.length; K++) A[K] = arguments[K];
    var q = $3q.popResultSelector(A),
      Y = O3q.argsArgArrayOrObject(A),
      z = Y.args,
      w = Y.keys,
      H = new J3q.Observable(function (J) {
        var O = z.length;
        if (!O) {
          J.complete();
          return;
        }
        var X = Array(O),
          $ = O,
          _ = O,
          G = function (W) {
            var D = !1;
            X3q.innerFrom(z[W]).subscribe(_3q.createOperatorSubscriber(J, function (j) {
              if (!D) D = !0, _--;
              X[W] = j;
            }, function () {
              return $--;
            }, void 0, function () {
              if (!$ || !D) {
                if (!_) J.next(w ? Z3q.createObject(w, X) : X);
                J.complete();
              }
            }));
          };
        for (var Z = 0; Z < O; Z++) G(Z);
      });
    return q ? H.pipe(G3q.mapOneOrManyArgs(q)) : H;
  }
  BK8.forkJoin = W3q;
});

// Register to shared state
__$.gK8 = gK8;
