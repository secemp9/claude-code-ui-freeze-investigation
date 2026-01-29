// Module: iO7
// Dependencies: I2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iO7 = v((J8H, lO7) => {
  var cO7 = __$.I2();
  function OPY(A, K, q) {
    if (q = typeof K === "function" ? K : q, K = typeof K === "function" ? !1 : K, K) return q(null, K);
    cO7.lstat(A, (Y, z) => {
      if (Y) return q(null, "file");
      K = z && z.isDirectory() ? "dir" : "file", q(null, K);
    });
  }
  function XPY(A, K) {
    let q;
    if (K) return K;
    try {
      q = cO7.lstatSync(A);
    } catch {
      return "file";
    }
    return q && q.isDirectory() ? "dir" : "file";
  }
  lO7.exports = {
    symlinkType: OPY,
    symlinkTypeSync: XPY
  };
});

// Register to shared state
__$.iO7 = iO7;
