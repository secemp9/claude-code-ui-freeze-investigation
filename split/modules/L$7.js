// Module: L$7
// Dependencies: I2, RX1, $BA, SI, NqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var L$7 = v((i8H, C$7) => {
  var E$7 = __$.I2(),
    CD6 = CA("path"),
    ifY = __$.RX1().copySync,
    k$7 = __$.$BA().removeSync,
    nfY = __$.SI().mkdirpSync,
    v$7 = __$.NqA();
  function rfY(A, K, q) {
    q = q || {};
    let Y = q.overwrite || q.clobber || !1,
      {
        srcStat: z,
        isChangingCase: w = !1
      } = v$7.checkPathsSync(A, K, "move", q);
    if (v$7.checkParentPathsSync(A, z, K, "move"), !ofY(K)) nfY(CD6.dirname(K));
    return afY(A, K, Y, w);
  }
  function ofY(A) {
    let K = CD6.dirname(A);
    return CD6.parse(K).root === K;
  }
  function afY(A, K, q, Y) {
    if (Y) return kD6(A, K, q);
    if (q) return k$7(K), kD6(A, K, q);
    if (E$7.existsSync(K)) throw Error("dest already exists.");
    return kD6(A, K, q);
  }
  function kD6(A, K, q) {
    try {
      E$7.renameSync(A, K);
    } catch (Y) {
      if (Y.code !== "EXDEV") throw Y;
      return sfY(A, K, q);
    }
  }
  function sfY(A, K, q) {
    return ifY(A, K, {
      overwrite: q,
      errorOnExist: !0
    }), k$7(A);
  }
  C$7.exports = rfY;
});

// Register to shared state
__$.L$7 = L$7;
