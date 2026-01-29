// Module: DoA
// Dependencies: nzA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DoA = v(r68 => {
  Object.defineProperty(r68, "__esModule", {
    value: !0
  });
  r68.captureError = r68.errorContext = void 0;
  var n68 = __$.nzA(),
    v1A = null;
  function a8q(A) {
    if (n68.config.useDeprecatedSynchronousErrorHandling) {
      var K = !v1A;
      if (K) v1A = {
        errorThrown: !1,
        error: null
      };
      if (A(), K) {
        var q = v1A,
          Y = q.errorThrown,
          z = q.error;
        if (v1A = null, Y) throw z;
      }
    } else A();
  }
  r68.errorContext = a8q;
  function s8q(A) {
    if (n68.config.useDeprecatedSynchronousErrorHandling && v1A) v1A.errorThrown = !0, v1A.error = A;
  }
  r68.captureError = s8q;
});

// Register to shared state
__$.DoA = DoA;
