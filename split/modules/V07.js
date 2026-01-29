// Module: V07
// Dependencies: fZA, EX1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V07 = v((W8H, P07) => {
  var {
      stringify: bPY
    } = __$.fZA(),
    {
      outputFile: xPY
    } = __$.EX1();
  async function uPY(A, K, q = {}) {
    let Y = bPY(K, q);
    await xPY(A, Y, q);
  }
  P07.exports = uPY;
});

// Register to shared state
__$.V07 = V07;
