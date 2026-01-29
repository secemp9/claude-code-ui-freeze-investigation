// Module: T$7
// Dependencies: I2, RX1, $BA, SI, va, NqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var T$7 = v((l8H, N$7) => {
  var FfY = __$.I2(),
    ED6 = CA("path"),
    QfY = __$.RX1().copy,
    f$7 = __$.$BA().remove,
    UfY = __$.SI().mkdirp,
    pfY = __$.va().pathExists,
    P$7 = __$.NqA();
  function dfY(A, K, q, Y) {
    if (typeof q === "function") Y = q, q = {};
    q = q || {};
    let z = q.overwrite || q.clobber || !1;
    P$7.checkPaths(A, K, "move", q, (w, H) => {
      if (w) return Y(w);
      let {
        srcStat: J,
        isChangingCase: O = !1
      } = H;
      P$7.checkParentPaths(A, J, K, "move", X => {
        if (X) return Y(X);
        if (cfY(K)) return V$7(A, K, z, O, Y);
        UfY(ED6.dirname(K), $ => {
          if ($) return Y($);
          return V$7(A, K, z, O, Y);
        });
      });
    });
  }
  function cfY(A) {
    let K = ED6.dirname(A);
    return ED6.parse(K).root === K;
  }
  function V$7(A, K, q, Y, z) {
    if (Y) return vD6(A, K, q, z);
    if (q) return f$7(K, w => {
      if (w) return z(w);
      return vD6(A, K, q, z);
    });
    pfY(K, (w, H) => {
      if (w) return z(w);
      if (H) return z(Error("dest already exists."));
      return vD6(A, K, q, z);
    });
  }
  function vD6(A, K, q, Y) {
    FfY.rename(A, K, z => {
      if (!z) return Y();
      if (z.code !== "EXDEV") return Y(z);
      return lfY(A, K, q, Y);
    });
  }
  function lfY(A, K, q, Y) {
    QfY(A, K, {
      overwrite: q,
      errorOnExist: !0
    }, w => {
      if (w) return Y(w);
      return f$7(A, Y);
    });
  }
  N$7.exports = dfY;
});

// Register to shared state
__$.T$7 = T$7;
