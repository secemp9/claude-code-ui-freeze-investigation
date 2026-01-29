// Module: Z$7
// Dependencies: fZA, bX1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z$7 = v((p8H, G$7) => {
  var {
      stringify: hfY
    } = __$.fZA(),
    {
      outputFile: bfY
    } = __$.bX1();
  async function xfY(A, K, q = {}) {
    let Y = hfY(K, q);
    await bfY(A, Y, q);
  }
  G$7.exports = xfY;
});

// Register to shared state
__$.Z$7 = Z$7;
