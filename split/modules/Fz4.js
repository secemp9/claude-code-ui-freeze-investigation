// Module: Fz4
// Dependencies: hz4, W46, IV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fz4 = v((W8w, gz4) => {
  var {
      maxNameValuePairSize: Ti3,
      maxAttributeValueSize: vi3
    } = __$.hz4(),
    {
      isCTLExcludingHtab: Ei3
    } = __$.W46(),
    {
      collectASequenceOfCodePointsFast: qq1
    } = __$.IV(),
    ki3 = CA("node:assert");
  function Ci3(A) {
    if (Ei3(A)) return null;
    let K = "",
      q = "",
      Y = "",
      z = "";
    if (A.includes(";")) {
      let w = {
        position: 0
      };
      K = qq1(";", A, w), q = A.slice(w.position);
    } else K = A;
    if (!K.includes("=")) z = K;else {
      let w = {
        position: 0
      };
      Y = qq1("=", K, w), z = K.slice(w.position + 1);
    }
    if (Y = Y.trim(), z = z.trim(), Y.length + z.length > Ti3) return null;
    return {
      name: Y,
      value: z,
      ...F0A(q)
    };
  }
  function F0A(A, K = {}) {
    if (A.length === 0) return K;
    ki3(A[0] === ";"), A = A.slice(1);
    let q = "";
    if (A.includes(";")) q = qq1(";", A, {
      position: 0
    }), A = A.slice(q.length);else q = A, A = "";
    let Y = "",
      z = "";
    if (q.includes("=")) {
      let H = {
        position: 0
      };
      Y = qq1("=", q, H), z = q.slice(H.position + 1);
    } else Y = q;
    if (Y = Y.trim(), z = z.trim(), z.length > vi3) return F0A(A, K);
    let w = Y.toLowerCase();
    if (w === "expires") {
      let H = new Date(z);
      K.expires = H;
    } else if (w === "max-age") {
      let H = z.charCodeAt(0);
      if ((H < 48 || H > 57) && z[0] !== "-") return F0A(A, K);
      if (!/^\d+$/.test(z)) return F0A(A, K);
      let J = Number(z);
      K.maxAge = J;
    } else if (w === "domain") {
      let H = z;
      if (H[0] === ".") H = H.slice(1);
      H = H.toLowerCase(), K.domain = H;
    } else if (w === "path") {
      let H = "";
      if (z.length === 0 || z[0] !== "/") H = "/";else H = z;
      K.path = H;
    } else if (w === "secure") K.secure = !0;else if (w === "httponly") K.httpOnly = !0;else if (w === "samesite") {
      let H = "Default",
        J = z.toLowerCase();
      if (J.includes("none")) H = "None";
      if (J.includes("strict")) H = "Strict";
      if (J.includes("lax")) H = "Lax";
      K.sameSite = H;
    } else K.unparsed ??= [], K.unparsed.push(`${Y}=${z}`);
    return F0A(A, K);
  }
  gz4.exports = {
    parseSetCookie: Ci3,
    parseUnparsedAttributes: F0A
  };
});

// Register to shared state
__$.Fz4 = Fz4;
