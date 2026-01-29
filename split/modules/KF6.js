// Module: KF6
// Dependencies: IdA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KF6 = v(Np2 => {
  var Vp2 = __$.IdA();
  function ojK(A, K) {
    let q = A.a / 255,
      Y = K + '="' + A.hex + '"';
    return q < 1 ? Y + " " + K + '-opacity="' + q.toFixed(2).slice(1) + '"' : Y;
  }
  function AF6(A, K, q) {
    let Y = A + K;
    if (typeof q < "u") Y += " " + q;
    return Y;
  }
  function fp2(A, K, q) {
    let Y = "",
      z = 0,
      w = !1,
      H = 0;
    for (let J = 0; J < A.length; J++) {
      let O = Math.floor(J % K),
        X = Math.floor(J / K);
      if (!O && !w) w = !0;
      if (A[J]) {
        if (H++, !(J > 0 && O > 0 && A[J - 1])) Y += w ? AF6("M", O + q, 0.5 + X + q) : AF6("m", z, 0), z = 0, w = !1;
        if (!(O + 1 < K && A[J + 1])) Y += AF6("h", H), H = 0;
      } else z++;
    }
    return Y;
  }
  Np2.render = function (K, q, Y) {
    let z = Vp2.getOptions(q),
      w = K.modules.size,
      H = K.modules.data,
      J = w + z.margin * 2,
      O = !z.color.light.a ? "" : "<path " + ojK(z.color.light, "fill") + ' d="M0 0h' + J + "v" + J + 'H0z"/>',
      X = "<path " + ojK(z.color.dark, "stroke") + ' d="' + fp2(H, w, z.margin) + '"/>',
      $ = 'viewBox="0 0 ' + J + " " + J + '"',
      G = '<svg xmlns="http://www.w3.org/2000/svg" ' + (!z.width ? "" : 'width="' + z.width + '" height="' + z.width + '" ') + $ + ' shape-rendering="crispEdges">' + O + X + `</svg>
`;
    if (typeof Y === "function") Y(null, G);
    return G;
  };
});

// Register to shared state
__$.KF6 = KF6;
