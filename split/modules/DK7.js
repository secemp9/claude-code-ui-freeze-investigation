// Module: DK7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DK7 = v((Pgw, WK7) => {
  var u9Y = "[object String]",
    B9Y = Object.prototype,
    m9Y = B9Y.toString,
    g9Y = Array.isArray;
  function F9Y(A) {
    return !!A && typeof A == "object";
  }
  function Q9Y(A) {
    return typeof A == "string" || !g9Y(A) && F9Y(A) && m9Y.call(A) == u9Y;
  }
  WK7.exports = Q9Y;
});

// Register to shared state
__$.DK7 = DK7;
