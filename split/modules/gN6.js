// Module: gN6
// Dependencies: zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gN6 = v((XDH, wR7) => {
  var BiY = __$.zj(),
    miY = Object.prototype.hasOwnProperty,
    giY = Object.prototype.toString;
  function FiY(A) {
    if (A === null) return !0;
    var K = [],
      q,
      Y,
      z,
      w,
      H,
      J = A;
    for (q = 0, Y = J.length; q < Y; q += 1) {
      if (z = J[q], H = !1, giY.call(z) !== "[object Object]") return !1;
      for (w in z) if (miY.call(z, w)) if (!H) H = !0;else return !1;
      if (!H) return !1;
      if (K.indexOf(w) === -1) K.push(w);else return !1;
    }
    return !0;
  }
  function QiY(A) {
    return A !== null ? A : [];
  }
  wR7.exports = new BiY("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: FiY,
    construct: QiY
  });
});

// Register to shared state
__$.gN6 = gN6;
