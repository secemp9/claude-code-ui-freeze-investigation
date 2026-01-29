// Module: I14
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var I14 = v(R14 => {
  Object.defineProperty(R14, "__esModule", {
    value: !0
  });
  R14.isEmptyData = void 0;
  function bP3(A) {
    if (typeof A === "string") return A.length === 0;
    return A.byteLength === 0;
  }
  R14.isEmptyData = bP3;
});

// Register to shared state
__$.I14 = I14;
