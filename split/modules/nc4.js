// Module: nc4
// Dependencies: tSA, cc4, bc9, eSA, lc4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nc4 = k(() => {
  __$.tSA();
  __$.cc4 = {
    off: 0,
    error: 200,
    warn: 300,
    info: 400,
    debug: 500
  };
  __$.bc9 = {
    error: __$.eSA,
    warn: __$.eSA,
    info: __$.eSA,
    debug: __$.eSA
  }, __$.lc4 = new WeakMap();
});

// Register to shared state
__$.nc4 = nc4;
