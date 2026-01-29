// Module: ND1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ND1 = v(wU7 => {
  Object.defineProperty(wU7, "__esModule", {
    value: !0
  });
  wU7.getErrorMessage = wK2;
  wU7.getErrorCode = HK2;
  function wK2(A) {
    if (A instanceof Error) return A.message;else return String(A);
  }
  function HK2(A) {
    if (typeof A === "object" && A !== null && "code" in A && typeof A.code === "number") return A.code;else return null;
  }
});

// Register to shared state
__$.ND1 = ND1;
