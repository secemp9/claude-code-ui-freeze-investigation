// Module: fh1
// Dependencies: xz, Y3, PZ, $7, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fh1 = v(y38 => {
  Object.defineProperty(y38, "__esModule", {
    value: !0
  });
  y38.groupBy = void 0;
  var azq = __$.xz(),
    szq = __$.Y3(),
    tzq = __$.PZ(),
    ezq = __$.$7(),
    R38 = __$._K();
  function Awq(A, K, q, Y) {
    return ezq.operate(function (z, w) {
      var H;
      if (!K || typeof K === "function") H = K;else q = K.duration, H = K.element, Y = K.connector;
      var J = new Map(),
        O = function (W) {
          J.forEach(W), W(w);
        },
        X = function (W) {
          return O(function (D) {
            return D.error(W);
          });
        },
        $ = 0,
        _ = !1,
        G = new R38.OperatorSubscriber(w, function (W) {
          try {
            var D = A(W),
              j = J.get(D);
            if (!j) {
              J.set(D, j = Y ? Y() : new tzq.Subject());
              var M = Z(D, j);
              if (w.next(M), q) {
                var P = R38.createOperatorSubscriber(j, function () {
                  j.complete(), P === null || P === void 0 || P.unsubscribe();
                }, void 0, void 0, function () {
                  return J.delete(D);
                });
                G.add(szq.innerFrom(q(M)).subscribe(P));
              }
            }
            j.next(H ? H(W) : W);
          } catch (f) {
            X(f);
          }
        }, function () {
          return O(function (W) {
            return W.complete();
          });
        }, X, function () {
          return J.clear();
        }, function () {
          return _ = !0, $ === 0;
        });
      z.subscribe(G);
      function Z(W, D) {
        var j = new azq.Observable(function (M) {
          $++;
          var P = D.subscribe(M);
          return function () {
            P.unsubscribe(), --$ === 0 && _ && G.unsubscribe();
          };
        });
        return j.key = W, j;
      }
    });
  }
  y38.groupBy = Awq;
});

// Register to shared state
__$.fh1 = fh1;
