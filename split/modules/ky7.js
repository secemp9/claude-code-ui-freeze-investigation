// Module: ky7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ky7 = v((vDH, Ey7) => {
  function rrY() {
    if (typeof process === "object" && typeof process.nextTick === "function") return process.nextTick;else if (typeof setImmediate === "function") return setImmediate;else return function (K) {
      setTimeout(K, 0);
    };
  }
  Ey7.exports = rrY();
});

// Register to shared state
__$.ky7 = ky7;
