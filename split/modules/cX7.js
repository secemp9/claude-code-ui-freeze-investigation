// Module: cX7
// Dependencies: I2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cX7 = v((m8H, dX7) => {
  var pX7 = __$.I2();
  function jfY(A, K, q) {
    if (q = typeof K === "function" ? K : q, K = typeof K === "function" ? !1 : K, K) return q(null, K);
    pX7.lstat(A, (Y, z) => {
      if (Y) return q(null, "file");
      K = z && z.isDirectory() ? "dir" : "file", q(null, K);
    });
  }
  function MfY(A, K) {
    let q;
    if (K) return K;
    try {
      q = pX7.lstatSync(A);
    } catch {
      return "file";
    }
    return q && q.isDirectory() ? "dir" : "file";
  }
  dX7.exports = {
    symlinkType: jfY,
    symlinkTypeSync: MfY
  };
});

// Register to shared state
__$.cX7 = cX7;
