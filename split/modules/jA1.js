// Module: jA1
// Dependencies: C6A, DA1, X35, KkA, Oy8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jA1 = k(() => {
  __$.C6A();
  __$.DA1 = {
    off: 0,
    error: 200,
    warn: 300,
    info: 400,
    debug: 500
  };
  __$.X35 = {
    error: __$.KkA,
    warn: __$.KkA,
    info: __$.KkA,
    debug: __$.KkA
  }, __$.Oy8 = new WeakMap();
});

// Register to shared state
__$.jA1 = jA1;
