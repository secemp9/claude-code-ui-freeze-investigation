// Module: x$4
// Dependencies: LD, N4A, hXA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var x$4 = v((SYw, b$4) => {
  var JA9 = __$.LD(),
    OA9 = __$.N4A(),
    {
      safeRe: A31,
      t: K31
    } = __$.hXA(),
    XA9 = (A, K) => {
      if (A instanceof JA9) return A;
      if (typeof A === "number") A = String(A);
      if (typeof A !== "string") return null;
      K = K || {};
      let q = null;
      if (!K.rtl) q = A.match(K.includePrerelease ? A31[K31.COERCEFULL] : A31[K31.COERCE]);else {
        let O = K.includePrerelease ? A31[K31.COERCERTLFULL] : A31[K31.COERCERTL],
          X;
        while ((X = O.exec(A)) && (!q || q.index + q[0].length !== A.length)) {
          if (!q || X.index + X[0].length !== q.index + q[0].length) q = X;
          O.lastIndex = X.index + X[1].length + X[2].length;
        }
        O.lastIndex = -1;
      }
      if (q === null) return null;
      let Y = q[2],
        z = q[3] || "0",
        w = q[4] || "0",
        H = K.includePrerelease && q[5] ? `-${q[5]}` : "",
        J = K.includePrerelease && q[6] ? `+${q[6]}` : "";
      return OA9(`${Y}.${z}.${w}${H}${J}`, K);
    };
  b$4.exports = XA9;
});

// Register to shared state
__$.x$4 = x$4;
