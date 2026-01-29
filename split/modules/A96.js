// Module: A96
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A96 = v($D9 => {
  var MI4 = CA("process");
  function OD9(A, ...K) {
    if (A === "debug") console.log(...K);
  }
  function XD9(A, K) {
    if (A === "debug" || A === "warn") if (typeof MI4.emitWarning === "function") MI4.emitWarning(K);else console.warn(K);
  }
  $D9.debug = OD9;
  $D9.warn = XD9;
});

// Register to shared state
__$.A96 = A96;
