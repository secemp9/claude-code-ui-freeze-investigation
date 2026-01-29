// Module: fqA
// Dependencies: HH, I2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fqA = v(DD6 => {
  var g07 = __$.HH().fromCallback,
    Df = __$.I2(),
    AVY = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rm", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter(A => {
      return typeof Df[A] === "function";
    });
  Object.assign(DD6, Df);
  AVY.forEach(A => {
    DD6[A] = g07(Df[A]);
  });
  DD6.exists = function (A, K) {
    if (typeof K === "function") return Df.exists(A, K);
    return new Promise(q => {
      return Df.exists(A, q);
    });
  };
  DD6.read = function (A, K, q, Y, z, w) {
    if (typeof w === "function") return Df.read(A, K, q, Y, z, w);
    return new Promise((H, J) => {
      Df.read(A, K, q, Y, z, (O, X, $) => {
        if (O) return J(O);
        H({
          bytesRead: X,
          buffer: $
        });
      });
    });
  };
  DD6.write = function (A, K, ...q) {
    if (typeof q[q.length - 1] === "function") return Df.write(A, K, ...q);
    return new Promise((Y, z) => {
      Df.write(A, K, ...q, (w, H, J) => {
        if (w) return z(w);
        Y({
          bytesWritten: H,
          buffer: J
        });
      });
    });
  };
  if (typeof Df.writev === "function") DD6.writev = function (A, K, ...q) {
    if (typeof q[q.length - 1] === "function") return Df.writev(A, K, ...q);
    return new Promise((Y, z) => {
      Df.writev(A, K, ...q, (w, H, J) => {
        if (w) return z(w);
        Y({
          bytesWritten: H,
          buffers: J
        });
      });
    });
  };
  if (typeof Df.realpath.native === "function") DD6.realpath.native = g07(Df.realpath.native);else process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?", "Warning", "fs-extra-WARN0003");
});

// Register to shared state
__$.fqA = fqA;
