// Module: fX7
// Dependencies: I2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fX7 = v((S8H, VX7) => {
  var GX7 = __$.I2(),
    jX7 = CA("path"),
    Tw = CA("assert"),
    XBA = process.platform === "win32";
  function MX7(A) {
    ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(q => {
      A[q] = A[q] || GX7[q], q = q + "Sync", A[q] = A[q] || GX7[q];
    }), A.maxBusyTries = A.maxBusyTries || 3;
  }
  function TD6(A, K, q) {
    let Y = 0;
    if (typeof K === "function") q = K, K = {};
    Tw(A, "rimraf: missing path"), Tw.strictEqual(typeof A, "string", "rimraf: path should be a string"), Tw.strictEqual(typeof q, "function", "rimraf: callback function required"), Tw(K, "rimraf: invalid options argument provided"), Tw.strictEqual(typeof K, "object", "rimraf: options should be object"), MX7(K), ZX7(A, K, function z(w) {
      if (w) {
        if ((w.code === "EBUSY" || w.code === "ENOTEMPTY" || w.code === "EPERM") && Y < K.maxBusyTries) {
          Y++;
          let H = Y * 100;
          return setTimeout(() => ZX7(A, K, z), H);
        }
        if (w.code === "ENOENT") w = null;
      }
      q(w);
    });
  }
  function ZX7(A, K, q) {
    Tw(A), Tw(K), Tw(typeof q === "function"), K.lstat(A, (Y, z) => {
      if (Y && Y.code === "ENOENT") return q(null);
      if (Y && Y.code === "EPERM" && XBA) return WX7(A, K, Y, q);
      if (z && z.isDirectory()) return yX1(A, K, Y, q);
      K.unlink(A, w => {
        if (w) {
          if (w.code === "ENOENT") return q(null);
          if (w.code === "EPERM") return XBA ? WX7(A, K, w, q) : yX1(A, K, w, q);
          if (w.code === "EISDIR") return yX1(A, K, w, q);
        }
        return q(w);
      });
    });
  }
  function WX7(A, K, q, Y) {
    Tw(A), Tw(K), Tw(typeof Y === "function"), K.chmod(A, 438, z => {
      if (z) Y(z.code === "ENOENT" ? null : q);else K.stat(A, (w, H) => {
        if (w) Y(w.code === "ENOENT" ? null : q);else if (H.isDirectory()) yX1(A, K, q, Y);else K.unlink(A, Y);
      });
    });
  }
  function DX7(A, K, q) {
    let Y;
    Tw(A), Tw(K);
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
    if (Y.isDirectory()) IX1(A, K, q);else K.unlinkSync(A);
  }
  function yX1(A, K, q, Y) {
    Tw(A), Tw(K), Tw(typeof Y === "function"), K.rmdir(A, z => {
      if (z && (z.code === "ENOTEMPTY" || z.code === "EEXIST" || z.code === "EPERM")) AfY(A, K, Y);else if (z && z.code === "ENOTDIR") Y(q);else Y(z);
    });
  }
  function AfY(A, K, q) {
    Tw(A), Tw(K), Tw(typeof q === "function"), K.readdir(A, (Y, z) => {
      if (Y) return q(Y);
      let w = z.length,
        H;
      if (w === 0) return K.rmdir(A, q);
      z.forEach(J => {
        TD6(jX7.join(A, J), K, O => {
          if (H) return;
          if (O) return q(H = O);
          if (--w === 0) K.rmdir(A, q);
        });
      });
    });
  }
  function PX7(A, K) {
    let q;
    K = K || {}, MX7(K), Tw(A, "rimraf: missing path"), Tw.strictEqual(typeof A, "string", "rimraf: path should be a string"), Tw(K, "rimraf: missing options"), Tw.strictEqual(typeof K, "object", "rimraf: options should be object");
    try {
      q = K.lstatSync(A);
    } catch (Y) {
      if (Y.code === "ENOENT") return;
      if (Y.code === "EPERM" && XBA) DX7(A, K, Y);
    }
    try {
      if (q && q.isDirectory()) IX1(A, K, null);else K.unlinkSync(A);
    } catch (Y) {
      if (Y.code === "ENOENT") return;else if (Y.code === "EPERM") return XBA ? DX7(A, K, Y) : IX1(A, K, Y);else if (Y.code !== "EISDIR") throw Y;
      IX1(A, K, Y);
    }
  }
  function IX1(A, K, q) {
    Tw(A), Tw(K);
    try {
      K.rmdirSync(A);
    } catch (Y) {
      if (Y.code === "ENOTDIR") throw q;else if (Y.code === "ENOTEMPTY" || Y.code === "EEXIST" || Y.code === "EPERM") KfY(A, K);else if (Y.code !== "ENOENT") throw Y;
    }
  }
  function KfY(A, K) {
    if (Tw(A), Tw(K), K.readdirSync(A).forEach(q => PX7(jX7.join(A, q), K)), XBA) {
      let q = Date.now();
      do try {
        return K.rmdirSync(A, K);
      } catch {} while (Date.now() - q < 500);
    } else return K.rmdirSync(A, K);
  }
  VX7.exports = TD6;
  TD6.sync = PX7;
});

// Register to shared state
__$.fX7 = fX7;
