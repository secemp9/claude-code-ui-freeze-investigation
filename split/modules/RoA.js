// Module: RoA
// Dependencies: Y3, gg, _K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RoA = v(fK8 => {
  Object.defineProperty(fK8, "__esModule", {
    value: !0
  });
  fK8.mergeInternals = void 0;
  var B5q = __$.Y3(),
    m5q = __$.gg(),
    VK8 = __$._K();
  function g5q(A, K, q, Y, z, w, H, J) {
    var O = [],
      X = 0,
      $ = 0,
      _ = !1,
      G = function () {
        if (_ && !O.length && !X) K.complete();
      },
      Z = function (D) {
        return X < Y ? W(D) : O.push(D);
      },
      W = function (D) {
        w && K.next(D), X++;
        var j = !1;
        B5q.innerFrom(q(D, $++)).subscribe(VK8.createOperatorSubscriber(K, function (M) {
          if (z === null || z === void 0 || z(M), w) Z(M);else K.next(M);
        }, function () {
          j = !0;
        }, void 0, function () {
          if (j) try {
            X--;
            var M = function () {
              var P = O.shift();
              if (H) m5q.executeSchedule(K, H, function () {
                return W(P);
              });else W(P);
            };
            while (O.length && X < Y) M();
            G();
          } catch (P) {
            K.error(P);
          }
        }));
      };
    return A.subscribe(VK8.createOperatorSubscriber(K, Z, function () {
      _ = !0, G();
    })), function () {
      J === null || J === void 0 || J();
    };
  }
  fK8.mergeInternals = g5q;
});

// Register to shared state
__$.RoA = RoA;
