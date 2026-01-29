// Module: Nb4
// Dependencies: R$A, Vb4, WSA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Nb4 = v((Mjw, fb4) => {
  var sv9 = __$.R$A(),
    tv9 = __$.Vb4(),
    {
      safeRe: RY1,
      t: yY1
    } = __$.WSA(),
    ev9 = (A, K) => {
      if (A instanceof sv9) return A;
      if (typeof A === "number") A = String(A);
      if (typeof A !== "string") return null;
      K = K || {};
      let q = null;
      if (!K.rtl) q = A.match(K.includePrerelease ? RY1[yY1.COERCEFULL] : RY1[yY1.COERCE]);else {
        let O = K.includePrerelease ? RY1[yY1.COERCERTLFULL] : RY1[yY1.COERCERTL],
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
      return tv9(`${Y}.${z}.${w}${H}${J}`, K);
    };
  fb4.exports = ev9;
});

// Register to shared state
__$.Nb4 = Nb4;
