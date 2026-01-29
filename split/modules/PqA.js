// Module: PqA
// Dependencies: HH, I2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PqA = v(qD6 => {
  var QJ7 = __$.HH().fromCallback,
    Zf = __$.I2(),
    ijY = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rm", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter(A => {
      return typeof Zf[A] === "function";
    });
  Object.assign(qD6, Zf);
  ijY.forEach(A => {
    qD6[A] = QJ7(Zf[A]);
  });
  qD6.exists = function (A, K) {
    if (typeof K === "function") return Zf.exists(A, K);
    return new Promise(q => {
      return Zf.exists(A, q);
    });
  };
  qD6.read = function (A, K, q, Y, z, w) {
    if (typeof w === "function") return Zf.read(A, K, q, Y, z, w);
    return new Promise((H, J) => {
      Zf.read(A, K, q, Y, z, (O, X, $) => {
        if (O) return J(O);
        H({
          bytesRead: X,
          buffer: $
        });
      });
    });
  };
  qD6.write = function (A, K, ...q) {
    if (typeof q[q.length - 1] === "function") return Zf.write(A, K, ...q);
    return new Promise((Y, z) => {
      Zf.write(A, K, ...q, (w, H, J) => {
        if (w) return z(w);
        Y({
          bytesWritten: H,
          buffer: J
        });
      });
    });
  };
  if (typeof Zf.writev === "function") qD6.writev = function (A, K, ...q) {
    if (typeof q[q.length - 1] === "function") return Zf.writev(A, K, ...q);
    return new Promise((Y, z) => {
      Zf.writev(A, K, ...q, (w, H, J) => {
        if (w) return z(w);
        Y({
          bytesWritten: H,
          buffers: J
        });
      });
    });
  };
  if (typeof Zf.realpath.native === "function") qD6.realpath.native = QJ7(Zf.realpath.native);else process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?", "Warning", "fs-extra-WARN0003");
});

// Register to shared state
__$.PqA = PqA;
