// Module: C88
// Dependencies: xz, V88, HS1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C88 = v(E88 => {
  Object.defineProperty(E88, "__esModule", {
    value: !0
  });
  E88.animationFrames = void 0;
  var x4q = __$.xz(),
    u4q = __$.V88(),
    T88 = __$.HS1();
  function B4q(A) {
    return A ? v88(A) : m4q;
  }
  E88.animationFrames = B4q;
  function v88(A) {
    return new x4q.Observable(function (K) {
      var q = A || u4q.performanceTimestampProvider,
        Y = q.now(),
        z = 0,
        w = function () {
          if (!K.closed) z = T88.animationFrameProvider.requestAnimationFrame(function (H) {
            z = 0;
            var J = q.now();
            K.next({
              timestamp: A ? J : H,
              elapsed: J - Y
            }), w();
          });
        };
      return w(), function () {
        if (z) T88.animationFrameProvider.cancelAnimationFrame(z);
      };
    });
  }
  var m4q = v88();
});

// Register to shared state
__$.C88 = C88;
