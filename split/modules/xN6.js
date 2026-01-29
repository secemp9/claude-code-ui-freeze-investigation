// Module: xN6
// Dependencies: zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xN6 = v((HDH, qR7) => {
  var kiY = __$.zj(),
    AR7 = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
    KR7 = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function CiY(A) {
    if (A === null) return !1;
    if (AR7.exec(A) !== null) return !0;
    if (KR7.exec(A) !== null) return !0;
    return !1;
  }
  function LiY(A) {
    var K,
      q,
      Y,
      z,
      w,
      H,
      J,
      O = 0,
      X = null,
      $,
      _,
      G;
    if (K = AR7.exec(A), K === null) K = KR7.exec(A);
    if (K === null) throw Error("Date resolve error");
    if (q = +K[1], Y = +K[2] - 1, z = +K[3], !K[4]) return new Date(Date.UTC(q, Y, z));
    if (w = +K[4], H = +K[5], J = +K[6], K[7]) {
      O = K[7].slice(0, 3);
      while (O.length < 3) O += "0";
      O = +O;
    }
    if (K[9]) {
      if ($ = +K[10], _ = +(K[11] || 0), X = ($ * 60 + _) * 60000, K[9] === "-") X = -X;
    }
    if (G = new Date(Date.UTC(q, Y, z, w, H, J, O)), X) G.setTime(G.getTime() - X);
    return G;
  }
  function RiY(A) {
    return A.toISOString();
  }
  qR7.exports = new kiY("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: CiY,
    construct: LiY,
    instanceOf: Date,
    represent: RiY
  });
});

// Register to shared state
__$.xN6 = xN6;
