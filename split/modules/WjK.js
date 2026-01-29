// Module: WjK
// Dependencies: Qg6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WjK = v((dFJ, ZjK) => {
  var GjK = __$.Qg6();
  function KU2(A, K, q, Y, z) {
    for (let w = 0; w < q; w++) Y[z + w] = A[K + w];
  }
  function qU2(A, K, q) {
    let Y = 0,
      z = K + q;
    for (let w = K; w < z; w++) Y += Math.abs(A[w]);
    return Y;
  }
  function YU2(A, K, q, Y, z, w) {
    for (let H = 0; H < q; H++) {
      let J = H >= w ? A[K + H - w] : 0,
        O = A[K + H] - J;
      Y[z + H] = O;
    }
  }
  function zU2(A, K, q, Y) {
    let z = 0;
    for (let w = 0; w < q; w++) {
      let H = w >= Y ? A[K + w - Y] : 0,
        J = A[K + w] - H;
      z += Math.abs(J);
    }
    return z;
  }
  function wU2(A, K, q, Y, z) {
    for (let w = 0; w < q; w++) {
      let H = K > 0 ? A[K + w - q] : 0,
        J = A[K + w] - H;
      Y[z + w] = J;
    }
  }
  function HU2(A, K, q) {
    let Y = 0,
      z = K + q;
    for (let w = K; w < z; w++) {
      let H = K > 0 ? A[w - q] : 0,
        J = A[w] - H;
      Y += Math.abs(J);
    }
    return Y;
  }
  function JU2(A, K, q, Y, z, w) {
    for (let H = 0; H < q; H++) {
      let J = H >= w ? A[K + H - w] : 0,
        O = K > 0 ? A[K + H - q] : 0,
        X = A[K + H] - (J + O >> 1);
      Y[z + H] = X;
    }
  }
  function OU2(A, K, q, Y) {
    let z = 0;
    for (let w = 0; w < q; w++) {
      let H = w >= Y ? A[K + w - Y] : 0,
        J = K > 0 ? A[K + w - q] : 0,
        O = A[K + w] - (H + J >> 1);
      z += Math.abs(O);
    }
    return z;
  }
  function XU2(A, K, q, Y, z, w) {
    for (let H = 0; H < q; H++) {
      let J = H >= w ? A[K + H - w] : 0,
        O = K > 0 ? A[K + H - q] : 0,
        X = K > 0 && H >= w ? A[K + H - (q + w)] : 0,
        $ = A[K + H] - GjK(J, O, X);
      Y[z + H] = $;
    }
  }
  function $U2(A, K, q, Y) {
    let z = 0;
    for (let w = 0; w < q; w++) {
      let H = w >= Y ? A[K + w - Y] : 0,
        J = K > 0 ? A[K + w - q] : 0,
        O = K > 0 && w >= Y ? A[K + w - (q + Y)] : 0,
        X = A[K + w] - GjK(H, J, O);
      z += Math.abs(X);
    }
    return z;
  }
  var _U2 = {
      0: KU2,
      1: YU2,
      2: wU2,
      3: JU2,
      4: XU2
    },
    GU2 = {
      0: qU2,
      1: zU2,
      2: HU2,
      3: OU2,
      4: $U2
    };
  ZjK.exports = function (A, K, q, Y, z) {
    let w;
    if (!("filterType" in Y) || Y.filterType === -1) w = [0, 1, 2, 3, 4];else if (typeof Y.filterType === "number") w = [Y.filterType];else throw Error("unrecognised filter types");
    if (Y.bitDepth === 16) z *= 2;
    let H = K * z,
      J = 0,
      O = 0,
      X = Buffer.alloc((H + 1) * q),
      $ = w[0];
    for (let _ = 0; _ < q; _++) {
      if (w.length > 1) {
        let G = 1 / 0;
        for (let Z = 0; Z < w.length; Z++) {
          let W = GU2[w[Z]](A, O, H, z);
          if (W < G) $ = w[Z], G = W;
        }
      }
      X[J] = $, J++, _U2[$](A, O, H, X, J, z), J += H, O += H;
    }
    return X;
  };
});

// Register to shared state
__$.WjK = WjK;
