// Module: i47
// Dependencies: QD, bKA, ZGA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var i47 = v((lmw, l47) => {
  var ZqY = __$.QD(),
    WqY = __$.bKA(),
    {
      safeRe: MJ1,
      t: PJ1
    } = __$.ZGA(),
    DqY = (A, K) => {
      if (A instanceof ZqY) return A;
      if (typeof A === "number") A = String(A);
      if (typeof A !== "string") return null;
      K = K || {};
      let q = null;
      if (!K.rtl) q = A.match(K.includePrerelease ? MJ1[PJ1.COERCEFULL] : MJ1[PJ1.COERCE]);else {
        let O = K.includePrerelease ? MJ1[PJ1.COERCERTLFULL] : MJ1[PJ1.COERCERTL],
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
      return WqY(`${Y}.${z}.${w}${H}${J}`, K);
    };
  l47.exports = DqY;
});

// Register to shared state
__$.i47 = i47;
