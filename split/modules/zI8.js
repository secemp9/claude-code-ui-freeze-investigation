// Module: zI8
// Dependencies: KI8, qI8, rA1, YI8, P95

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zI8 = k(() => {
  __$.KI8();
  __$.qI8 = function () {
    var A = /[^.]+$/.exec(__$.rA1 && __$.rA1.keys && __$.rA1.keys.IE_PROTO || "");
    return A ? "Symbol(src)_1." + A : "";
  }();
  __$.YI8 = __$.P95;
});

// Register to shared state
__$.zI8 = zI8;
