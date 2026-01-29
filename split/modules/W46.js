// Module: W46
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var W46 = v((Z8w, mz4) => {
  function ji3(A) {
    for (let K = 0; K < A.length; ++K) {
      let q = A.charCodeAt(K);
      if (q >= 0 && q <= 8 || q >= 10 && q <= 31 || q === 127) return !0;
    }
    return !1;
  }
  function bz4(A) {
    for (let K = 0; K < A.length; ++K) {
      let q = A.charCodeAt(K);
      if (q < 33 || q > 126 || q === 34 || q === 40 || q === 41 || q === 60 || q === 62 || q === 64 || q === 44 || q === 59 || q === 58 || q === 92 || q === 47 || q === 91 || q === 93 || q === 63 || q === 61 || q === 123 || q === 125) throw Error("Invalid cookie name");
    }
  }
  function xz4(A) {
    let K = A.length,
      q = 0;
    if (A[0] === '"') {
      if (K === 1 || A[K - 1] !== '"') throw Error("Invalid cookie value");
      --K, ++q;
    }
    while (q < K) {
      let Y = A.charCodeAt(q++);
      if (Y < 33 || Y > 126 || Y === 34 || Y === 44 || Y === 59 || Y === 92) throw Error("Invalid cookie value");
    }
  }
  function uz4(A) {
    for (let K = 0; K < A.length; ++K) {
      let q = A.charCodeAt(K);
      if (q < 32 || q === 127 || q === 59) throw Error("Invalid cookie path");
    }
  }
  function Mi3(A) {
    if (A.startsWith("-") || A.endsWith(".") || A.endsWith("-")) throw Error("Invalid cookie domain");
  }
  var Pi3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    Vi3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    Kq1 = Array(61).fill(0).map((A, K) => K.toString().padStart(2, "0"));
  function Bz4(A) {
    if (typeof A === "number") A = new Date(A);
    return `${Pi3[A.getUTCDay()]}, ${Kq1[A.getUTCDate()]} ${Vi3[A.getUTCMonth()]} ${A.getUTCFullYear()} ${Kq1[A.getUTCHours()]}:${Kq1[A.getUTCMinutes()]}:${Kq1[A.getUTCSeconds()]} GMT`;
  }
  function fi3(A) {
    if (A < 0) throw Error("Invalid cookie max-age");
  }
  function Ni3(A) {
    if (A.name.length === 0) return null;
    bz4(A.name), xz4(A.value);
    let K = [`${A.name}=${A.value}`];
    if (A.name.startsWith("__Secure-")) A.secure = !0;
    if (A.name.startsWith("__Host-")) A.secure = !0, A.domain = null, A.path = "/";
    if (A.secure) K.push("Secure");
    if (A.httpOnly) K.push("HttpOnly");
    if (typeof A.maxAge === "number") fi3(A.maxAge), K.push(`Max-Age=${A.maxAge}`);
    if (A.domain) Mi3(A.domain), K.push(`Domain=${A.domain}`);
    if (A.path) uz4(A.path), K.push(`Path=${A.path}`);
    if (A.expires && A.expires.toString() !== "Invalid Date") K.push(`Expires=${Bz4(A.expires)}`);
    if (A.sameSite) K.push(`SameSite=${A.sameSite}`);
    for (let q of A.unparsed) {
      if (!q.includes("=")) throw Error("Invalid unparsed");
      let [Y, ...z] = q.split("=");
      K.push(`${Y.trim()}=${z.join("=")}`);
    }
    return K.join("; ");
  }
  mz4.exports = {
    isCTLExcludingHtab: ji3,
    validateCookieName: bz4,
    validateCookiePath: uz4,
    validateCookieValue: xz4,
    toIMFDate: Bz4,
    stringify: Ni3
  };
});

// Register to shared state
__$.W46 = W46;
