// Module: b07
// Dependencies: I2, PX1, KBA, yI, VqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b07 = v((P8H, h07) => {
  var I07 = __$.I2(),
    WD6 = CA("path"),
    nPY = __$.PX1().copySync,
    S07 = __$.KBA().removeSync,
    rPY = __$.yI().mkdirpSync,
    y07 = __$.VqA();
  function oPY(A, K, q) {
    q = q || {};
    let Y = q.overwrite || q.clobber || !1,
      {
        srcStat: z,
        isChangingCase: w = !1
      } = y07.checkPathsSync(A, K, "move", q);
    if (y07.checkParentPathsSync(A, z, K, "move"), !aPY(K)) rPY(WD6.dirname(K));
    return sPY(A, K, Y, w);
  }
  function aPY(A) {
    let K = WD6.dirname(A);
    return WD6.parse(K).root === K;
  }
  function sPY(A, K, q, Y) {
    if (Y) return ZD6(A, K, q);
    if (q) return S07(K), ZD6(A, K, q);
    if (I07.existsSync(K)) throw Error("dest already exists.");
    return ZD6(A, K, q);
  }
  function ZD6(A, K, q) {
    try {
      I07.renameSync(A, K);
    } catch (Y) {
      if (Y.code !== "EXDEV") throw Y;
      return tPY(A, K, q);
    }
  }
  function tPY(A, K, q) {
    return nPY(A, K, {
      overwrite: q,
      errorOnExist: !0
    }), S07(A);
  }
  h07.exports = oPY;
});

// Register to shared state
__$.b07 = b07;
