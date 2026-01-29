// Module: SZ4
// Dependencies: cq6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SZ4 = v(yZ4 => {
  Object.defineProperty(yZ4, "__esModule", {
    value: !0
  });
  yZ4.isCompatible = yZ4._makeCompatibilityCheck = void 0;
  var O49 = __$.cq6(),
    LZ4 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
  function RZ4(A) {
    let K = new Set([A]),
      q = new Set(),
      Y = A.match(LZ4);
    if (!Y) return () => !1;
    let z = {
      major: +Y[1],
      minor: +Y[2],
      patch: +Y[3],
      prerelease: Y[4]
    };
    if (z.prerelease != null) return function (O) {
      return O === A;
    };
    function w(J) {
      return q.add(J), !1;
    }
    function H(J) {
      return K.add(J), !0;
    }
    return function (O) {
      if (K.has(O)) return !0;
      if (q.has(O)) return !1;
      let X = O.match(LZ4);
      if (!X) return w(O);
      let $ = {
        major: +X[1],
        minor: +X[2],
        patch: +X[3],
        prerelease: X[4]
      };
      if ($.prerelease != null) return w(O);
      if (z.major !== $.major) return w(O);
      if (z.major === 0) {
        if (z.minor === $.minor && z.patch <= $.patch) return H(O);
        return w(O);
      }
      if (z.minor <= $.minor) return H(O);
      return w(O);
    };
  }
  yZ4._makeCompatibilityCheck = RZ4;
  yZ4.isCompatible = RZ4(O49.VERSION);
});

// Register to shared state
__$.SZ4 = SZ4;
