// Module: jp4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jp4 = v(Wp4 => {
  Object.defineProperty(Wp4, "__esModule", {
    value: !0
  });
  Wp4.isEmptyData = void 0;
  function hQ9(A) {
    if (typeof A === "string") return A.length === 0;
    return A.byteLength === 0;
  }
  Wp4.isEmptyData = hQ9;
});

// Register to shared state
__$.jp4 = jp4;
