// Module: zX4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zX4 = v((A9w, YX4) => {
  var Et3 = /[|\\{}()[\]^$+*?.-]/g;
  YX4.exports = A => {
    if (typeof A !== "string") throw TypeError("Expected a string");
    return A.replace(Et3, "\\$&");
  };
});

// Register to shared state
__$.zX4 = zX4;
