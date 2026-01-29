// Module: ng6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ng6 = v((QFJ, HjK) => {
  function nQ2(A, K, q, Y, z) {
    let w = 0;
    for (let H = 0; H < Y; H++) for (let J = 0; J < q; J++) {
      let O = z[A[w]];
      if (!O) throw Error("index " + A[w] + " not in palette");
      for (let X = 0; X < 4; X++) K[w + X] = O[X];
      w += 4;
    }
  }
  function rQ2(A, K, q, Y, z) {
    let w = 0;
    for (let H = 0; H < Y; H++) for (let J = 0; J < q; J++) {
      let O = !1;
      if (z.length === 1) {
        if (z[0] === A[w]) O = !0;
      } else if (z[0] === A[w] && z[1] === A[w + 1] && z[2] === A[w + 2]) O = !0;
      if (O) for (let X = 0; X < 4; X++) K[w + X] = 0;
      w += 4;
    }
  }
  function oQ2(A, K, q, Y, z) {
    let w = 255,
      H = Math.pow(2, z) - 1,
      J = 0;
    for (let O = 0; O < Y; O++) for (let X = 0; X < q; X++) {
      for (let $ = 0; $ < 4; $++) K[J + $] = Math.floor(A[J + $] * w / H + 0.5);
      J += 4;
    }
  }
  HjK.exports = function (A, K) {
    let {
        depth: q,
        width: Y,
        height: z,
        colorType: w,
        transColor: H,
        palette: J
      } = K,
      O = A;
    if (w === 3) nQ2(A, O, Y, z, J);else {
      if (H) rQ2(A, O, Y, z, H);
      if (q !== 8) {
        if (q === 16) O = Buffer.alloc(Y * z * 4);
        oQ2(A, O, Y, z, q);
      }
    }
    return O;
  };
});

// Register to shared state
__$.ng6 = ng6;
