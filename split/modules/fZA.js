// Module: fZA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fZA = v(($8H, X07) => {
  function fPY(A, {
    EOL: K = `
`,
    finalEOL: q = !0,
    replacer: Y = null,
    spaces: z
  } = {}) {
    let w = q ? K : "";
    return JSON.stringify(A, Y, z).replace(/\n/g, K) + w;
  }
  function NPY(A) {
    if (Buffer.isBuffer(A)) A = A.toString("utf8");
    return A.replace(/^\uFEFF/, "");
  }
  X07.exports = {
    stringify: fPY,
    stripBom: NPY
  };
});

// Register to shared state
__$.fZA = fZA;
