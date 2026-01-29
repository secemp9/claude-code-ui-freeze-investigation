// Module: pk7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pk7 = v((g_H, Uk7) => {
  var lpY = (A, K, q) => {
      let Y = A.indexOf(K);
      if (Y === -1) return A;
      let z = K.length,
        w = 0,
        H = "";
      do H += A.substr(w, Y - w) + K + q, w = Y + z, Y = A.indexOf(K, w); while (Y !== -1);
      return H += A.substr(w), H;
    },
    ipY = (A, K, q, Y) => {
      let z = 0,
        w = "";
      do {
        let H = A[Y - 1] === "\r";
        w += A.substr(z, (H ? Y - 1 : Y) - z) + K + (H ? `\r
` : `
`) + q, z = Y + 1, Y = A.indexOf(`
`, z);
      } while (Y !== -1);
      return w += A.substr(z), w;
    };
  Uk7.exports = {
    stringReplaceAll: lpY,
    stringEncaseCRLFWithFirstIndex: ipY
  };
});

// Register to shared state
__$.pk7 = pk7;
