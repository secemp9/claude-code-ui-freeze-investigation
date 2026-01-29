// Module: JO7
// Dependencies: I2, yI, Va, HD6, VqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JO7 = v((t6H, HO7) => {
  var Wf = __$.I2(),
    auA = CA("path"),
    ZMY = __$.yI().mkdirs,
    WMY = __$.Va().pathExists,
    DMY = __$.HD6().utimesMillis,
    suA = __$.VqA();
  function jMY(A, K, q, Y) {
    if (typeof q === "function" && !Y) Y = q, q = {};else if (typeof q === "function") q = {
      filter: q
    };
    if (Y = Y || function () {}, q = q || {}, q.clobber = "clobber" in q ? !!q.clobber : !0, q.overwrite = "overwrite" in q ? !!q.overwrite : q.clobber, q.preserveTimestamps && process.arch === "ia32") process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`, "Warning", "fs-extra-WARN0001");
    suA.checkPaths(A, K, "copy", q, (z, w) => {
      if (z) return Y(z);
      let {
        srcStat: H,
        destStat: J
      } = w;
      suA.checkParentPaths(A, H, K, "copy", O => {
        if (O) return Y(O);
        if (q.filter) return qO7(AO7, J, A, K, q, Y);
        return AO7(J, A, K, q, Y);
      });
    });
  }
  function AO7(A, K, q, Y, z) {
    let w = auA.dirname(q);
    WMY(w, (H, J) => {
      if (H) return z(H);
      if (J) return jX1(A, K, q, Y, z);
      ZMY(w, O => {
        if (O) return z(O);
        return jX1(A, K, q, Y, z);
      });
    });
  }
  function qO7(A, K, q, Y, z, w) {
    Promise.resolve(z.filter(q, Y)).then(H => {
      if (H) return A(K, q, Y, z, w);
      return w();
    }, H => w(H));
  }
  function MMY(A, K, q, Y, z) {
    if (Y.filter) return qO7(jX1, A, K, q, Y, z);
    return jX1(A, K, q, Y, z);
  }
  function jX1(A, K, q, Y, z) {
    (Y.dereference ? Wf.stat : Wf.lstat)(K, (H, J) => {
      if (H) return z(H);
      if (J.isDirectory()) return EMY(J, A, K, q, Y, z);else if (J.isFile() || J.isCharacterDevice() || J.isBlockDevice()) return PMY(J, A, K, q, Y, z);else if (J.isSymbolicLink()) return LMY(A, K, q, Y, z);else if (J.isSocket()) return z(Error(`Cannot copy a socket file: ${K}`));else if (J.isFIFO()) return z(Error(`Cannot copy a FIFO pipe: ${K}`));
      return z(Error(`Unknown file: ${K}`));
    });
  }
  function PMY(A, K, q, Y, z, w) {
    if (!K) return YO7(A, q, Y, z, w);
    return VMY(A, q, Y, z, w);
  }
  function VMY(A, K, q, Y, z) {
    if (Y.overwrite) Wf.unlink(q, w => {
      if (w) return z(w);
      return YO7(A, K, q, Y, z);
    });else if (Y.errorOnExist) return z(Error(`'${q}' already exists`));else return z();
  }
  function YO7(A, K, q, Y, z) {
    Wf.copyFile(K, q, w => {
      if (w) return z(w);
      if (Y.preserveTimestamps) return fMY(A.mode, K, q, z);
      return MX1(q, A.mode, z);
    });
  }
  function fMY(A, K, q, Y) {
    if (NMY(A)) return TMY(q, A, z => {
      if (z) return Y(z);
      return KO7(A, K, q, Y);
    });
    return KO7(A, K, q, Y);
  }
  function NMY(A) {
    return (A & 128) === 0;
  }
  function TMY(A, K, q) {
    return MX1(A, K | 128, q);
  }
  function KO7(A, K, q, Y) {
    vMY(K, q, z => {
      if (z) return Y(z);
      return MX1(q, A, Y);
    });
  }
  function MX1(A, K, q) {
    return Wf.chmod(A, K, q);
  }
  function vMY(A, K, q) {
    Wf.stat(A, (Y, z) => {
      if (Y) return q(Y);
      return DMY(K, z.atime, z.mtime, q);
    });
  }
  function EMY(A, K, q, Y, z, w) {
    if (!K) return kMY(A.mode, q, Y, z, w);
    return zO7(q, Y, z, w);
  }
  function kMY(A, K, q, Y, z) {
    Wf.mkdir(q, w => {
      if (w) return z(w);
      zO7(K, q, Y, H => {
        if (H) return z(H);
        return MX1(q, A, z);
      });
    });
  }
  function zO7(A, K, q, Y) {
    Wf.readdir(A, (z, w) => {
      if (z) return Y(z);
      return wO7(w, A, K, q, Y);
    });
  }
  function wO7(A, K, q, Y, z) {
    let w = A.pop();
    if (!w) return z();
    return CMY(A, w, K, q, Y, z);
  }
  function CMY(A, K, q, Y, z, w) {
    let H = auA.join(q, K),
      J = auA.join(Y, K);
    suA.checkPaths(H, J, "copy", z, (O, X) => {
      if (O) return w(O);
      let {
        destStat: $
      } = X;
      MMY($, H, J, z, _ => {
        if (_) return w(_);
        return wO7(A, q, Y, z, w);
      });
    });
  }
  function LMY(A, K, q, Y, z) {
    Wf.readlink(K, (w, H) => {
      if (w) return z(w);
      if (Y.dereference) H = auA.resolve(process.cwd(), H);
      if (!A) return Wf.symlink(H, q, z);else Wf.readlink(q, (J, O) => {
        if (J) {
          if (J.code === "EINVAL" || J.code === "UNKNOWN") return Wf.symlink(H, q, z);
          return z(J);
        }
        if (Y.dereference) O = auA.resolve(process.cwd(), O);
        if (suA.isSrcSubdir(H, O)) return z(Error(`Cannot copy '${H}' to a subdirectory of itself, '${O}'.`));
        if (A.isDirectory() && suA.isSrcSubdir(O, H)) return z(Error(`Cannot overwrite '${O}' with '${H}'.`));
        return RMY(H, q, z);
      });
    });
  }
  function RMY(A, K, q) {
    Wf.unlink(K, Y => {
      if (Y) return q(Y);
      return Wf.symlink(A, K, q);
    });
  }
  HO7.exports = jMY;
});

// Register to shared state
__$.JO7 = JO7;
