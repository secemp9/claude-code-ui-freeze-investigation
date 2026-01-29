// Module: $X7
// Dependencies: I2, SI, VD6, NqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $X7 = v((y8H, XX7) => {
  var lD = __$.I2(),
    JBA = CA("path"),
    mVY = __$.SI().mkdirsSync,
    gVY = __$.VD6().utimesMillisSync,
    OBA = __$.NqA();
  function FVY(A, K, q) {
    if (typeof q === "function") q = {
      filter: q
    };
    if (q = q || {}, q.clobber = "clobber" in q ? !!q.clobber : !0, q.overwrite = "overwrite" in q ? !!q.overwrite : q.clobber, q.preserveTimestamps && process.arch === "ia32") process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`, "Warning", "fs-extra-WARN0002");
    let {
      srcStat: Y,
      destStat: z
    } = OBA.checkPathsSync(A, K, "copy", q);
    return OBA.checkParentPathsSync(A, Y, K, "copy"), QVY(z, A, K, q);
  }
  function QVY(A, K, q, Y) {
    if (Y.filter && !Y.filter(K, q)) return;
    let z = JBA.dirname(q);
    if (!lD.existsSync(z)) mVY(z);
    return HX7(A, K, q, Y);
  }
  function UVY(A, K, q, Y) {
    if (Y.filter && !Y.filter(K, q)) return;
    return HX7(A, K, q, Y);
  }
  function HX7(A, K, q, Y) {
    let w = (Y.dereference ? lD.statSync : lD.lstatSync)(K);
    if (w.isDirectory()) return rVY(w, A, K, q, Y);else if (w.isFile() || w.isCharacterDevice() || w.isBlockDevice()) return pVY(w, A, K, q, Y);else if (w.isSymbolicLink()) return sVY(A, K, q, Y);else if (w.isSocket()) throw Error(`Cannot copy a socket file: ${K}`);else if (w.isFIFO()) throw Error(`Cannot copy a FIFO pipe: ${K}`);
    throw Error(`Unknown file: ${K}`);
  }
  function pVY(A, K, q, Y, z) {
    if (!K) return JX7(A, q, Y, z);
    return dVY(A, q, Y, z);
  }
  function dVY(A, K, q, Y) {
    if (Y.overwrite) return lD.unlinkSync(q), JX7(A, K, q, Y);else if (Y.errorOnExist) throw Error(`'${q}' already exists`);
  }
  function JX7(A, K, q, Y) {
    if (lD.copyFileSync(K, q), Y.preserveTimestamps) cVY(A.mode, K, q);
    return ND6(q, A.mode);
  }
  function cVY(A, K, q) {
    if (lVY(A)) iVY(q, A);
    return nVY(K, q);
  }
  function lVY(A) {
    return (A & 128) === 0;
  }
  function iVY(A, K) {
    return ND6(A, K | 128);
  }
  function ND6(A, K) {
    return lD.chmodSync(A, K);
  }
  function nVY(A, K) {
    let q = lD.statSync(A);
    return gVY(K, q.atime, q.mtime);
  }
  function rVY(A, K, q, Y, z) {
    if (!K) return oVY(A.mode, q, Y, z);
    return OX7(q, Y, z);
  }
  function oVY(A, K, q, Y) {
    return lD.mkdirSync(q), OX7(K, q, Y), ND6(q, A);
  }
  function OX7(A, K, q) {
    lD.readdirSync(A).forEach(Y => aVY(Y, A, K, q));
  }
  function aVY(A, K, q, Y) {
    let z = JBA.join(K, A),
      w = JBA.join(q, A),
      {
        destStat: H
      } = OBA.checkPathsSync(z, w, "copy", Y);
    return UVY(H, z, w, Y);
  }
  function sVY(A, K, q, Y) {
    let z = lD.readlinkSync(K);
    if (Y.dereference) z = JBA.resolve(process.cwd(), z);
    if (!A) return lD.symlinkSync(z, q);else {
      let w;
      try {
        w = lD.readlinkSync(q);
      } catch (H) {
        if (H.code === "EINVAL" || H.code === "UNKNOWN") return lD.symlinkSync(z, q);
        throw H;
      }
      if (Y.dereference) w = JBA.resolve(process.cwd(), w);
      if (OBA.isSrcSubdir(z, w)) throw Error(`Cannot copy '${z}' to a subdirectory of itself, '${w}'.`);
      if (lD.statSync(q).isDirectory() && OBA.isSrcSubdir(w, z)) throw Error(`Cannot overwrite '${w}' with '${z}'.`);
      return tVY(z, q);
    }
  }
  function tVY(A, K) {
    return lD.unlinkSync(K), lD.symlinkSync(A, K);
  }
  XX7.exports = FVY;
});

// Register to shared state
__$.$X7 = $X7;
