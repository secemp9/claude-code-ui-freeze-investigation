// Module: FN6
// Dependencies: zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FN6 = v(($DH, HR7) => {
  var UiY = __$.zj(),
    piY = Object.prototype.toString;
  function diY(A) {
    if (A === null) return !0;
    var K,
      q,
      Y,
      z,
      w,
      H = A;
    w = Array(H.length);
    for (K = 0, q = H.length; K < q; K += 1) {
      if (Y = H[K], piY.call(Y) !== "[object Object]") return !1;
      if (z = Object.keys(Y), z.length !== 1) return !1;
      w[K] = [z[0], Y[z[0]]];
    }
    return !0;
  }
  function ciY(A) {
    if (A === null) return [];
    var K,
      q,
      Y,
      z,
      w,
      H = A;
    w = Array(H.length);
    for (K = 0, q = H.length; K < q; K += 1) Y = H[K], z = Object.keys(Y), w[K] = [z[0], Y[z[0]]];
    return w;
  }
  HR7.exports = new UiY("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: diY,
    construct: ciY
  });
});

// Register to shared state
__$.FN6 = FN6;
