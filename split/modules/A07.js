// Module: A07
// Dependencies: HH, PqA, yI, dO7, iO7, Va, VqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A07 = v((O8H, eO7) => {
  var $PY = __$.HH().fromCallback,
    rO7 = CA("path"),
    II = __$.PqA(),
    oO7 = __$.yI(),
    _PY = oO7.mkdirs,
    GPY = oO7.mkdirsSync,
    aO7 = __$.dO7(),
    ZPY = aO7.symlinkPaths,
    WPY = aO7.symlinkPathsSync,
    sO7 = __$.iO7(),
    DPY = sO7.symlinkType,
    jPY = sO7.symlinkTypeSync,
    MPY = __$.Va().pathExists,
    {
      areIdentical: tO7
    } = __$.VqA();
  function PPY(A, K, q, Y) {
    Y = typeof q === "function" ? q : Y, q = typeof q === "function" ? !1 : q, II.lstat(K, (z, w) => {
      if (!z && w.isSymbolicLink()) Promise.all([II.stat(A), II.stat(K)]).then(([H, J]) => {
        if (tO7(H, J)) return Y(null);
        nO7(A, K, q, Y);
      });else nO7(A, K, q, Y);
    });
  }
  function nO7(A, K, q, Y) {
    ZPY(A, K, (z, w) => {
      if (z) return Y(z);
      A = w.toDst, DPY(w.toCwd, q, (H, J) => {
        if (H) return Y(H);
        let O = rO7.dirname(K);
        MPY(O, (X, $) => {
          if (X) return Y(X);
          if ($) return II.symlink(A, K, J, Y);
          _PY(O, _ => {
            if (_) return Y(_);
            II.symlink(A, K, J, Y);
          });
        });
      });
    });
  }
  function VPY(A, K, q) {
    let Y;
    try {
      Y = II.lstatSync(K);
    } catch {}
    if (Y && Y.isSymbolicLink()) {
      let J = II.statSync(A),
        O = II.statSync(K);
      if (tO7(J, O)) return;
    }
    let z = WPY(A, K);
    A = z.toDst, q = jPY(z.toCwd, q);
    let w = rO7.dirname(K);
    if (II.existsSync(w)) return II.symlinkSync(A, K, q);
    return GPY(w), II.symlinkSync(A, K, q);
  }
  eO7.exports = {
    createSymlink: $PY(PPY),
    createSymlinkSync: VPY
  };
});

// Register to shared state
__$.A07 = A07;
