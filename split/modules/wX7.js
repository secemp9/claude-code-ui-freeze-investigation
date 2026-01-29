// Module: wX7
// Dependencies: I2, SI, va, VD6, NqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wX7 = v((R8H, zX7) => {
  var jf = __$.I2(),
    wBA = CA("path"),
    NVY = __$.SI().mkdirs,
    TVY = __$.va().pathExists,
    vVY = __$.VD6().utimesMillis,
    HBA = __$.NqA();
  function EVY(A, K, q, Y) {
    if (typeof q === "function" && !Y) Y = q, q = {};else if (typeof q === "function") q = {
      filter: q
    };
    if (Y = Y || function () {}, q = q || {}, q.clobber = "clobber" in q ? !!q.clobber : !0, q.overwrite = "overwrite" in q ? !!q.overwrite : q.clobber, q.preserveTimestamps && process.arch === "ia32") process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`, "Warning", "fs-extra-WARN0001");
    HBA.checkPaths(A, K, "copy", q, (z, w) => {
      if (z) return Y(z);
      let {
        srcStat: H,
        destStat: J
      } = w;
      HBA.checkParentPaths(A, H, K, "copy", O => {
        if (O) return Y(O);
        if (q.filter) return AX7(t07, J, A, K, q, Y);
        return t07(J, A, K, q, Y);
      });
    });
  }
  function t07(A, K, q, Y, z) {
    let w = wBA.dirname(q);
    TVY(w, (H, J) => {
      if (H) return z(H);
      if (J) return CX1(A, K, q, Y, z);
      NVY(w, O => {
        if (O) return z(O);
        return CX1(A, K, q, Y, z);
      });
    });
  }
  function AX7(A, K, q, Y, z, w) {
    Promise.resolve(z.filter(q, Y)).then(H => {
      if (H) return A(K, q, Y, z, w);
      return w();
    }, H => w(H));
  }
  function kVY(A, K, q, Y, z) {
    if (Y.filter) return AX7(CX1, A, K, q, Y, z);
    return CX1(A, K, q, Y, z);
  }
  function CX1(A, K, q, Y, z) {
    (Y.dereference ? jf.stat : jf.lstat)(K, (H, J) => {
      if (H) return z(H);
      if (J.isDirectory()) return hVY(J, A, K, q, Y, z);else if (J.isFile() || J.isCharacterDevice() || J.isBlockDevice()) return CVY(J, A, K, q, Y, z);else if (J.isSymbolicLink()) return uVY(A, K, q, Y, z);else if (J.isSocket()) return z(Error(`Cannot copy a socket file: ${K}`));else if (J.isFIFO()) return z(Error(`Cannot copy a FIFO pipe: ${K}`));
      return z(Error(`Unknown file: ${K}`));
    });
  }
  function CVY(A, K, q, Y, z, w) {
    if (!K) return KX7(A, q, Y, z, w);
    return LVY(A, q, Y, z, w);
  }
  function LVY(A, K, q, Y, z) {
    if (Y.overwrite) jf.unlink(q, w => {
      if (w) return z(w);
      return KX7(A, K, q, Y, z);
    });else if (Y.errorOnExist) return z(Error(`'${q}' already exists`));else return z();
  }
  function KX7(A, K, q, Y, z) {
    jf.copyFile(K, q, w => {
      if (w) return z(w);
      if (Y.preserveTimestamps) return RVY(A.mode, K, q, z);
      return LX1(q, A.mode, z);
    });
  }
  function RVY(A, K, q, Y) {
    if (yVY(A)) return IVY(q, A, z => {
      if (z) return Y(z);
      return e07(A, K, q, Y);
    });
    return e07(A, K, q, Y);
  }
  function yVY(A) {
    return (A & 128) === 0;
  }
  function IVY(A, K, q) {
    return LX1(A, K | 128, q);
  }
  function e07(A, K, q, Y) {
    SVY(K, q, z => {
      if (z) return Y(z);
      return LX1(q, A, Y);
    });
  }
  function LX1(A, K, q) {
    return jf.chmod(A, K, q);
  }
  function SVY(A, K, q) {
    jf.stat(A, (Y, z) => {
      if (Y) return q(Y);
      return vVY(K, z.atime, z.mtime, q);
    });
  }
  function hVY(A, K, q, Y, z, w) {
    if (!K) return bVY(A.mode, q, Y, z, w);
    return qX7(q, Y, z, w);
  }
  function bVY(A, K, q, Y, z) {
    jf.mkdir(q, w => {
      if (w) return z(w);
      qX7(K, q, Y, H => {
        if (H) return z(H);
        return LX1(q, A, z);
      });
    });
  }
  function qX7(A, K, q, Y) {
    jf.readdir(A, (z, w) => {
      if (z) return Y(z);
      return YX7(w, A, K, q, Y);
    });
  }
  function YX7(A, K, q, Y, z) {
    let w = A.pop();
    if (!w) return z();
    return xVY(A, w, K, q, Y, z);
  }
  function xVY(A, K, q, Y, z, w) {
    let H = wBA.join(q, K),
      J = wBA.join(Y, K);
    HBA.checkPaths(H, J, "copy", z, (O, X) => {
      if (O) return w(O);
      let {
        destStat: $
      } = X;
      kVY($, H, J, z, _ => {
        if (_) return w(_);
        return YX7(A, q, Y, z, w);
      });
    });
  }
  function uVY(A, K, q, Y, z) {
    jf.readlink(K, (w, H) => {
      if (w) return z(w);
      if (Y.dereference) H = wBA.resolve(process.cwd(), H);
      if (!A) return jf.symlink(H, q, z);else jf.readlink(q, (J, O) => {
        if (J) {
          if (J.code === "EINVAL" || J.code === "UNKNOWN") return jf.symlink(H, q, z);
          return z(J);
        }
        if (Y.dereference) O = wBA.resolve(process.cwd(), O);
        if (HBA.isSrcSubdir(H, O)) return z(Error(`Cannot copy '${H}' to a subdirectory of itself, '${O}'.`));
        if (A.isDirectory() && HBA.isSrcSubdir(O, H)) return z(Error(`Cannot overwrite '${O}' with '${H}'.`));
        return BVY(H, q, z);
      });
    });
  }
  function BVY(A, K, q) {
    jf.unlink(K, Y => {
      if (Y) return q(Y);
      return jf.symlink(A, K, q);
    });
  }
  zX7.exports = EVY;
});

// Register to shared state
__$.wX7 = wX7;
