// Module: GO7
// Dependencies: I2, yI, HD6, VqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GO7 = v((e6H, _O7) => {
  var cD = __$.I2(),
    tuA = CA("path"),
    yMY = __$.yI().mkdirsSync,
    IMY = __$.HD6().utimesMillisSync,
    euA = __$.VqA();
  function SMY(A, K, q) {
    if (typeof q === "function") q = {
      filter: q
    };
    if (q = q || {}, q.clobber = "clobber" in q ? !!q.clobber : !0, q.overwrite = "overwrite" in q ? !!q.overwrite : q.clobber, q.preserveTimestamps && process.arch === "ia32") process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`, "Warning", "fs-extra-WARN0002");
    let {
      srcStat: Y,
      destStat: z
    } = euA.checkPathsSync(A, K, "copy", q);
    return euA.checkParentPathsSync(A, Y, K, "copy"), hMY(z, A, K, q);
  }
  function hMY(A, K, q, Y) {
    if (Y.filter && !Y.filter(K, q)) return;
    let z = tuA.dirname(q);
    if (!cD.existsSync(z)) yMY(z);
    return OO7(A, K, q, Y);
  }
  function bMY(A, K, q, Y) {
    if (Y.filter && !Y.filter(K, q)) return;
    return OO7(A, K, q, Y);
  }
  function OO7(A, K, q, Y) {
    let w = (Y.dereference ? cD.statSync : cD.lstatSync)(K);
    if (w.isDirectory()) return QMY(w, A, K, q, Y);else if (w.isFile() || w.isCharacterDevice() || w.isBlockDevice()) return xMY(w, A, K, q, Y);else if (w.isSymbolicLink()) return dMY(A, K, q, Y);else if (w.isSocket()) throw Error(`Cannot copy a socket file: ${K}`);else if (w.isFIFO()) throw Error(`Cannot copy a FIFO pipe: ${K}`);
    throw Error(`Unknown file: ${K}`);
  }
  function xMY(A, K, q, Y, z) {
    if (!K) return XO7(A, q, Y, z);
    return uMY(A, q, Y, z);
  }
  function uMY(A, K, q, Y) {
    if (Y.overwrite) return cD.unlinkSync(q), XO7(A, K, q, Y);else if (Y.errorOnExist) throw Error(`'${q}' already exists`);
  }
  function XO7(A, K, q, Y) {
    if (cD.copyFileSync(K, q), Y.preserveTimestamps) BMY(A.mode, K, q);
    return OD6(q, A.mode);
  }
  function BMY(A, K, q) {
    if (mMY(A)) gMY(q, A);
    return FMY(K, q);
  }
  function mMY(A) {
    return (A & 128) === 0;
  }
  function gMY(A, K) {
    return OD6(A, K | 128);
  }
  function OD6(A, K) {
    return cD.chmodSync(A, K);
  }
  function FMY(A, K) {
    let q = cD.statSync(A);
    return IMY(K, q.atime, q.mtime);
  }
  function QMY(A, K, q, Y, z) {
    if (!K) return UMY(A.mode, q, Y, z);
    return $O7(q, Y, z);
  }
  function UMY(A, K, q, Y) {
    return cD.mkdirSync(q), $O7(K, q, Y), OD6(q, A);
  }
  function $O7(A, K, q) {
    cD.readdirSync(A).forEach(Y => pMY(Y, A, K, q));
  }
  function pMY(A, K, q, Y) {
    let z = tuA.join(K, A),
      w = tuA.join(q, A),
      {
        destStat: H
      } = euA.checkPathsSync(z, w, "copy", Y);
    return bMY(H, z, w, Y);
  }
  function dMY(A, K, q, Y) {
    let z = cD.readlinkSync(K);
    if (Y.dereference) z = tuA.resolve(process.cwd(), z);
    if (!A) return cD.symlinkSync(z, q);else {
      let w;
      try {
        w = cD.readlinkSync(q);
      } catch (H) {
        if (H.code === "EINVAL" || H.code === "UNKNOWN") return cD.symlinkSync(z, q);
        throw H;
      }
      if (Y.dereference) w = tuA.resolve(process.cwd(), w);
      if (euA.isSrcSubdir(z, w)) throw Error(`Cannot copy '${z}' to a subdirectory of itself, '${w}'.`);
      if (cD.statSync(q).isDirectory() && euA.isSrcSubdir(w, z)) throw Error(`Cannot overwrite '${w}' with '${z}'.`);
      return cMY(z, q);
    }
  }
  function cMY(A, K) {
    return cD.unlinkSync(K), cD.symlinkSync(A, K);
  }
  _O7.exports = SMY;
});

// Register to shared state
__$.GO7 = GO7;
