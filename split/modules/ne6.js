// Module: ne6
// Dependencies: iy1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ne6 = v((GGz, ie6) => {
  var le6 = typeof Symbol < "u" && Symbol,
    LAq = __$.iy1();
  ie6.exports = function () {
    if (typeof le6 !== "function") return !1;
    if (typeof Symbol !== "function") return !1;
    if (typeof le6("foo") !== "symbol") return !1;
    if (typeof Symbol("bar") !== "symbol") return !1;
    return LAq();
  };
});

// Register to shared state
__$.ne6 = ne6;
