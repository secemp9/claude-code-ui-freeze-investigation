// Module: tX7
// Dependencies: HH, fqA, SI, UX7, cX7, va, NqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tX7 = v((g8H, sX7) => {
  var PfY = __$.HH().fromCallback,
    iX7 = CA("path"),
    hI = __$.fqA(),
    nX7 = __$.SI(),
    VfY = nX7.mkdirs,
    ffY = nX7.mkdirsSync,
    rX7 = __$.UX7(),
    NfY = rX7.symlinkPaths,
    TfY = rX7.symlinkPathsSync,
    oX7 = __$.cX7(),
    vfY = oX7.symlinkType,
    EfY = oX7.symlinkTypeSync,
    kfY = __$.va().pathExists,
    {
      areIdentical: aX7
    } = __$.NqA();
  function CfY(A, K, q, Y) {
    Y = typeof q === "function" ? q : Y, q = typeof q === "function" ? !1 : q, hI.lstat(K, (z, w) => {
      if (!z && w.isSymbolicLink()) Promise.all([hI.stat(A), hI.stat(K)]).then(([H, J]) => {
        if (aX7(H, J)) return Y(null);
        lX7(A, K, q, Y);
      });else lX7(A, K, q, Y);
    });
  }
  function lX7(A, K, q, Y) {
    NfY(A, K, (z, w) => {
      if (z) return Y(z);
      A = w.toDst, vfY(w.toCwd, q, (H, J) => {
        if (H) return Y(H);
        let O = iX7.dirname(K);
        kfY(O, (X, $) => {
          if (X) return Y(X);
          if ($) return hI.symlink(A, K, J, Y);
          VfY(O, _ => {
            if (_) return Y(_);
            hI.symlink(A, K, J, Y);
          });
        });
      });
    });
  }
  function LfY(A, K, q) {
    let Y;
    try {
      Y = hI.lstatSync(K);
    } catch {}
    if (Y && Y.isSymbolicLink()) {
      let J = hI.statSync(A),
        O = hI.statSync(K);
      if (aX7(J, O)) return;
    }
    let z = TfY(A, K);
    A = z.toDst, q = EfY(z.toCwd, q);
    let w = iX7.dirname(K);
    if (hI.existsSync(w)) return hI.symlinkSync(A, K, q);
    return ffY(w), hI.symlinkSync(A, K, q);
  }
  sX7.exports = {
    createSymlink: PfY(CfY),
    createSymlinkSync: LfY
  };
});

// Register to shared state
__$.tX7 = tX7;
