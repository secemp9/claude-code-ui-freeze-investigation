// Module: ZI4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZI4 = v(FW9 => {
  function gW9(A, K, q = "flow", {
    indentAtStart: Y,
    lineWidth: z = 80,
    minContentWidth: w = 20,
    onFold: H,
    onOverflow: J
  } = {}) {
    if (!z || z < 0) return A;
    if (z < w) w = 0;
    let O = Math.max(1 + w, 1 + z - K.length);
    if (A.length <= O) return A;
    let X = [],
      $ = {},
      _ = z - K.length;
    if (typeof Y === "number") if (Y > z - Math.max(2, w)) X.push(0);else _ = z - Y;
    let G = void 0,
      Z = void 0,
      W = !1,
      D = -1,
      j = -1,
      M = -1;
    if (q === "block") {
      if (D = GI4(A, D, K.length), D !== -1) _ = D + O;
    }
    for (let f; f = A[D += 1];) {
      if (q === "quoted" && f === "\\") {
        switch (j = D, A[D + 1]) {
          case "x":
            D += 3;
            break;
          case "u":
            D += 5;
            break;
          case "U":
            D += 9;
            break;
          default:
            D += 1;
        }
        M = D;
      }
      if (f === `
`) {
        if (q === "block") D = GI4(A, D, K.length);
        _ = D + K.length + O, G = void 0;
      } else {
        if (f === " " && Z && Z !== " " && Z !== `
` && Z !== "\t") {
          let N = A[D + 1];
          if (N && N !== " " && N !== `
` && N !== "\t") G = D;
        }
        if (D >= _) if (G) X.push(G), _ = G + O, G = void 0;else if (q === "quoted") {
          while (Z === " " || Z === "\t") Z = f, f = A[D += 1], W = !0;
          let N = D > M + 1 ? D - 2 : j - 1;
          if ($[N]) return A;
          X.push(N), $[N] = !0, _ = N + O, G = void 0;
        } else W = !0;
      }
      Z = f;
    }
    if (W && J) J();
    if (X.length === 0) return A;
    if (H) H();
    let P = A.slice(0, X[0]);
    for (let f = 0; f < X.length; ++f) {
      let N = X[f],
        T = X[f + 1] || A.length;
      if (N === 0) P = `
${K}${A.slice(0, T)}`;else {
        if (q === "quoted" && $[N]) P += `${A[N]}\\`;
        P += `
${K}${A.slice(N + 1, T)}`;
      }
    }
    return P;
  }
  function GI4(A, K, q) {
    let Y = K,
      z = K + 1,
      w = A[z];
    while (w === " " || w === "\t") if (K < z + q) w = A[++K];else {
      do w = A[++K]; while (w && w !== `
`);
      Y = K, z = K + 1, w = A[z];
    }
    return Y;
  }
  FW9.FOLD_BLOCK = "block";
  FW9.FOLD_FLOW = "flow";
  FW9.FOLD_QUOTED = "quoted";
  FW9.foldFlowLines = gW9;
});

// Register to shared state
__$.ZI4 = ZI4;
