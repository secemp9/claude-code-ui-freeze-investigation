// Module: a$7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var a$7 = v((K4H, o$7) => {
  var HNY = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    JNY = ["B", "kiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
    ONY = ["b", "kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
    XNY = ["b", "kibit", "Mibit", "Gibit", "Tibit", "Pibit", "Eibit", "Zibit", "Yibit"],
    r$7 = (A, K, q) => {
      let Y = A;
      if (typeof K === "string" || Array.isArray(K)) Y = A.toLocaleString(K, q);else if (K === !0 || q !== void 0) Y = A.toLocaleString(void 0, q);
      return Y;
    };
  o$7.exports = (A, K) => {
    if (!Number.isFinite(A)) throw TypeError(`Expected a finite number, got ${typeof A}: ${A}`);
    K = Object.assign({
      bits: !1,
      binary: !1
    }, K);
    let q = K.bits ? K.binary ? XNY : ONY : K.binary ? JNY : HNY;
    if (K.signed && A === 0) return ` 0 ${q[0]}`;
    let Y = A < 0,
      z = Y ? "-" : K.signed ? "+" : "";
    if (Y) A = -A;
    let w;
    if (K.minimumFractionDigits !== void 0) w = {
      minimumFractionDigits: K.minimumFractionDigits
    };
    if (K.maximumFractionDigits !== void 0) w = Object.assign({
      maximumFractionDigits: K.maximumFractionDigits
    }, w);
    if (A < 1) {
      let X = r$7(A, K.locale, w);
      return z + X + " " + q[0];
    }
    let H = Math.min(Math.floor(K.binary ? Math.log(A) / Math.log(1024) : Math.log10(A) / 3), q.length - 1);
    if (A /= Math.pow(K.binary ? 1024 : 1000, H), !w) A = A.toPrecision(3);
    let J = r$7(Number(A), K.locale, w),
      O = q[H];
    return z + J + " " + O;
  };
});

// Register to shared state
__$.a$7 = a$7;
