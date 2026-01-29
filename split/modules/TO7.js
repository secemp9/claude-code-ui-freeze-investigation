// Module: TO7
// Dependencies: I2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TO7 = v((K8H, NO7) => {
  var WO7 = __$.I2(),
    PO7 = CA("path"),
    Nw = CA("assert"),
    ABA = process.platform === "win32";
  function VO7(A) {
    ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(q => {
      A[q] = A[q] || WO7[q], q = q + "Sync", A[q] = A[q] || WO7[q];
    }), A.maxBusyTries = A.maxBusyTries || 3;
  }
  function XD6(A, K, q) {
    let Y = 0;
    if (typeof K === "function") q = K, K = {};
    Nw(A, "rimraf: missing path"), Nw.strictEqual(typeof A, "string", "rimraf: path should be a string"), Nw.strictEqual(typeof q, "function", "rimraf: callback function required"), Nw(K, "rimraf: invalid options argument provided"), Nw.strictEqual(typeof K, "object", "rimraf: options should be object"), VO7(K), DO7(A, K, function z(w) {
      if (w) {
        if ((w.code === "EBUSY" || w.code === "ENOTEMPTY" || w.code === "EPERM") && Y < K.maxBusyTries) {
          Y++;
          let H = Y * 100;
          return setTimeout(() => DO7(A, K, z), H);
        }
        if (w.code === "ENOENT") w = null;
      }
      q(w);
    });
  }
  function DO7(A, K, q) {
    Nw(A), Nw(K), Nw(typeof q === "function"), K.lstat(A, (Y, z) => {
      if (Y && Y.code === "ENOENT") return q(null);
      if (Y && Y.code === "EPERM" && ABA) return jO7(A, K, Y, q);
      if (z && z.isDirectory()) return VX1(A, K, Y, q);
      K.unlink(A, w => {
        if (w) {
          if (w.code === "ENOENT") return q(null);
          if (w.code === "EPERM") return ABA ? jO7(A, K, w, q) : VX1(A, K, w, q);
          if (w.code === "EISDIR") return VX1(A, K, w, q);
        }
        return q(w);
      });
    });
  }
  function jO7(A, K, q, Y) {
    Nw(A), Nw(K), Nw(typeof Y === "function"), K.chmod(A, 438, z => {
      if (z) Y(z.code === "ENOENT" ? null : q);else K.stat(A, (w, H) => {
        if (w) Y(w.code === "ENOENT" ? null : q);else if (H.isDirectory()) VX1(A, K, q, Y);else K.unlink(A, Y);
      });
    });
  }
  function MO7(A, K, q) {
    let Y;
    Nw(A), Nw(K);
    try {
      K.chmodSync(A, 438);
    } catch (z) {
      if (z.code === "ENOENT") return;else throw q;
    }
    try {
      Y = K.statSync(A);
    } catch (z) {
      if (z.code === "ENOENT") return;else throw q;
    }
    if (Y.isDirectory()) fX1(A, K, q);else K.unlinkSync(A);
  }
  function VX1(A, K, q, Y) {
    Nw(A), Nw(K), Nw(typeof Y === "function"), K.rmdir(A, z => {
      if (z && (z.code === "ENOTEMPTY" || z.code === "EEXIST" || z.code === "EPERM")) iMY(A, K, Y);else if (z && z.code === "ENOTDIR") Y(q);else Y(z);
    });
  }
  function iMY(A, K, q) {
    Nw(A), Nw(K), Nw(typeof q === "function"), K.readdir(A, (Y, z) => {
      if (Y) return q(Y);
      let w = z.length,
        H;
      if (w === 0) return K.rmdir(A, q);
      z.forEach(J => {
        XD6(PO7.join(A, J), K, O => {
          if (H) return;
          if (O) return q(H = O);
          if (--w === 0) K.rmdir(A, q);
        });
      });
    });
  }
  function fO7(A, K) {
    let q;
    K = K || {}, VO7(K), Nw(A, "rimraf: missing path"), Nw.strictEqual(typeof A, "string", "rimraf: path should be a string"), Nw(K, "rimraf: missing options"), Nw.strictEqual(typeof K, "object", "rimraf: options should be object");
    try {
      q = K.lstatSync(A);
    } catch (Y) {
      if (Y.code === "ENOENT") return;
      if (Y.code === "EPERM" && ABA) MO7(A, K, Y);
    }
    try {
      if (q && q.isDirectory()) fX1(A, K, null);else K.unlinkSync(A);
    } catch (Y) {
      if (Y.code === "ENOENT") return;else if (Y.code === "EPERM") return ABA ? MO7(A, K, Y) : fX1(A, K, Y);else if (Y.code !== "EISDIR") throw Y;
      fX1(A, K, Y);
    }
  }
  function fX1(A, K, q) {
    Nw(A), Nw(K);
    try {
      K.rmdirSync(A);
    } catch (Y) {
      if (Y.code === "ENOTDIR") throw q;else if (Y.code === "ENOTEMPTY" || Y.code === "EEXIST" || Y.code === "EPERM") nMY(A, K);else if (Y.code !== "ENOENT") throw Y;
    }
  }
  function nMY(A, K) {
    if (Nw(A), Nw(K), K.readdirSync(A).forEach(q => fO7(PO7.join(A, q), K)), ABA) {
      let q = Date.now();
      do try {
        return K.rmdirSync(A, K);
      } catch {} while (Date.now() - q < 500);
    } else return K.rmdirSync(A, K);
  }
  NO7.exports = XD6;
  XD6.sync = fO7;
});

// Register to shared state
__$.TO7 = TO7;
