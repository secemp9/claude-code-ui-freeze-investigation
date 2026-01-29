// Module: R07
// Dependencies: I2, PX1, KBA, yI, Va, VqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var R07 = v((M8H, L07) => {
  var QPY = __$.I2(),
    GD6 = CA("path"),
    UPY = __$.PX1().copy,
    C07 = __$.KBA().remove,
    pPY = __$.yI().mkdirp,
    dPY = __$.Va().pathExists,
    E07 = __$.VqA();
  function cPY(A, K, q, Y) {
    if (typeof q === "function") Y = q, q = {};
    q = q || {};
    let z = q.overwrite || q.clobber || !1;
    E07.checkPaths(A, K, "move", q, (w, H) => {
      if (w) return Y(w);
      let {
        srcStat: J,
        isChangingCase: O = !1
      } = H;
      E07.checkParentPaths(A, J, K, "move", X => {
        if (X) return Y(X);
        if (lPY(K)) return k07(A, K, z, O, Y);
        pPY(GD6.dirname(K), $ => {
          if ($) return Y($);
          return k07(A, K, z, O, Y);
        });
      });
    });
  }
  function lPY(A) {
    let K = GD6.dirname(A);
    return GD6.parse(K).root === K;
  }
  function k07(A, K, q, Y, z) {
    if (Y) return _D6(A, K, q, z);
    if (q) return C07(K, w => {
      if (w) return z(w);
      return _D6(A, K, q, z);
    });
    dPY(K, (w, H) => {
      if (w) return z(w);
      if (H) return z(Error("dest already exists."));
      return _D6(A, K, q, z);
    });
  }
  function _D6(A, K, q, Y) {
    QPY.rename(A, K, z => {
      if (!z) return Y();
      if (z.code !== "EXDEV") return Y(z);
      return iPY(A, K, q, Y);
    });
  }
  function iPY(A, K, q, Y) {
    UPY(A, K, {
      overwrite: q,
      errorOnExist: !0
    }, w => {
      if (w) return Y(w);
      return C07(A, Y);
    });
  }
  L07.exports = cPY;
});

// Register to shared state
__$.R07 = R07;
