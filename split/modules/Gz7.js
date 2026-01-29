// Module: Gz7
// Dependencies: zz7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gz7 = v((AAH, _z7) => {
  var {
      HEX: F$Y
    } = __$.zz7(),
    Q$Y = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function Oz7(A) {
    if ($z7(A, ".") < 3) return {
      host: A,
      isIPV4: !1
    };
    let K = A.match(Q$Y) || [],
      [q] = K;
    if (q) return {
      host: p$Y(q, "."),
      isIPV4: !0
    };else return {
      host: A,
      isIPV4: !1
    };
  }
  function gZ6(A, K = !1) {
    let q = "",
      Y = !0;
    for (let z of A) {
      if (F$Y[z] === void 0) return;
      if (z !== "0" && Y === !0) Y = !1;
      if (!Y) q += z;
    }
    if (K && q.length === 0) q = "0";
    return q;
  }
  function U$Y(A) {
    let K = 0,
      q = {
        error: !1,
        address: "",
        zone: ""
      },
      Y = [],
      z = [],
      w = !1,
      H = !1,
      J = !1;
    function O() {
      if (z.length) {
        if (w === !1) {
          let X = gZ6(z);
          if (X !== void 0) Y.push(X);else return q.error = !0, !1;
        }
        z.length = 0;
      }
      return !0;
    }
    for (let X = 0; X < A.length; X++) {
      let $ = A[X];
      if ($ === "[" || $ === "]") continue;
      if ($ === ":") {
        if (H === !0) J = !0;
        if (!O()) break;
        if (K++, Y.push(":"), K > 7) {
          q.error = !0;
          break;
        }
        if (X - 1 >= 0 && A[X - 1] === ":") H = !0;
        continue;
      } else if ($ === "%") {
        if (!O()) break;
        w = !0;
      } else {
        z.push($);
        continue;
      }
    }
    if (z.length) if (w) q.zone = z.join("");else if (J) Y.push(z.join(""));else Y.push(gZ6(z));
    return q.address = Y.join(""), q;
  }
  function Xz7(A) {
    if ($z7(A, ":") < 2) return {
      host: A,
      isIPV6: !1
    };
    let K = U$Y(A);
    if (!K.error) {
      let {
        address: q,
        address: Y
      } = K;
      if (K.zone) q += "%" + K.zone, Y += "%25" + K.zone;
      return {
        host: q,
        escapedHost: Y,
        isIPV6: !0
      };
    } else return {
      host: A,
      isIPV6: !1
    };
  }
  function p$Y(A, K) {
    let q = "",
      Y = !0,
      z = A.length;
    for (let w = 0; w < z; w++) {
      let H = A[w];
      if (H === "0" && Y) {
        if (w + 1 <= z && A[w + 1] === K || w + 1 === z) q += H, Y = !1;
      } else {
        if (H === K) Y = !0;else Y = !1;
        q += H;
      }
    }
    return q;
  }
  function $z7(A, K) {
    let q = 0;
    for (let Y = 0; Y < A.length; Y++) if (A[Y] === K) q++;
    return q;
  }
  var wz7 = /^\.\.?\//u,
    Hz7 = /^\/\.(?:\/|$)/u,
    Jz7 = /^\/\.\.(?:\/|$)/u,
    d$Y = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function c$Y(A) {
    let K = [];
    while (A.length) if (A.match(wz7)) A = A.replace(wz7, "");else if (A.match(Hz7)) A = A.replace(Hz7, "/");else if (A.match(Jz7)) A = A.replace(Jz7, "/"), K.pop();else if (A === "." || A === "..") A = "";else {
      let q = A.match(d$Y);
      if (q) {
        let Y = q[0];
        A = A.slice(Y.length), K.push(Y);
      } else throw Error("Unexpected dot segment condition");
    }
    return K.join("");
  }
  function l$Y(A, K) {
    let q = K !== !0 ? escape : unescape;
    if (A.scheme !== void 0) A.scheme = q(A.scheme);
    if (A.userinfo !== void 0) A.userinfo = q(A.userinfo);
    if (A.host !== void 0) A.host = q(A.host);
    if (A.path !== void 0) A.path = q(A.path);
    if (A.query !== void 0) A.query = q(A.query);
    if (A.fragment !== void 0) A.fragment = q(A.fragment);
    return A;
  }
  function i$Y(A) {
    let K = [];
    if (A.userinfo !== void 0) K.push(A.userinfo), K.push("@");
    if (A.host !== void 0) {
      let q = unescape(A.host),
        Y = Oz7(q);
      if (Y.isIPV4) q = Y.host;else {
        let z = Xz7(Y.host);
        if (z.isIPV6 === !0) q = `[${z.escapedHost}]`;else q = A.host;
      }
      K.push(q);
    }
    if (typeof A.port === "number" || typeof A.port === "string") K.push(":"), K.push(String(A.port));
    return K.length ? K.join("") : void 0;
  }
  _z7.exports = {
    recomposeAuthority: i$Y,
    normalizeComponentEncoding: l$Y,
    removeDotSegments: c$Y,
    normalizeIPv4: Oz7,
    normalizeIPv6: Xz7,
    stringArrayToHexStripped: gZ6
  };
});

// Register to shared state
__$.Gz7 = Gz7;
