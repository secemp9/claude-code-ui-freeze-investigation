// Module: Va6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Va6 = v((saK, FR1) => {
  var gR1 = /([()\][%!^"`<>&|;, *?])/g;
  function oaK(A) {
    return A = A.replace(gR1, "^$1"), A;
  }
  function aaK(A, K) {
    if (A = `${A}`, A = A.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\""), A = A.replace(/(?=(\\+?)?)\1$/, "$1$1"), A = `"${A}"`, A = A.replace(gR1, "^$1"), K) A = A.replace(gR1, "^$1");
    return A;
  }
  saK.command = oaK;
  saK.argument = aaK;
});

// Register to shared state
__$.Va6 = Va6;
