// Module: CB4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CB4 = v(EB4 => {
  Object.defineProperty(EB4, "__esModule", {
    value: !0
  });
  EB4.toUtf8 = EB4.fromUtf8 = void 0;
  function pR9(A) {
    return new TextEncoder().encode(A);
  }
  EB4.fromUtf8 = pR9;
  function dR9(A) {
    return new TextDecoder("utf-8").decode(A);
  }
  EB4.toUtf8 = dR9;
});

// Register to shared state
__$.CB4 = CB4;
