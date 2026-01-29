// Module: AL4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AL4 = v(tC4 => {
  Object.defineProperty(tC4, "__esModule", {
    value: !0
  });
  tC4.identity = tC4.isPromiseLike = void 0;
  var O$9 = A => {
    return A !== null && typeof A === "object" && typeof A.then === "function";
  };
  tC4.isPromiseLike = O$9;
  function X$9(A) {
    return A;
  }
  tC4.identity = X$9;
});

// Register to shared state
__$.AL4 = AL4;
