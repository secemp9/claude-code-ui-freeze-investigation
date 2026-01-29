// Module: nt6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nt6 = v((B_z, it6) => {
  it6.exports = wAq;
  function wAq(A) {
    var K = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
    if (K) K(A);else setTimeout(A, 0);
  }
});

// Register to shared state
__$.nt6 = nt6;
