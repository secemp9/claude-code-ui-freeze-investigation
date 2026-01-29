// Module: CoA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CoA = v(r78 => {
  Object.defineProperty(r78, "__esModule", {
    value: !0
  });
  r78.isValidDate = void 0;
  function lqq(A) {
    return A instanceof Date && !isNaN(A);
  }
  r78.isValidDate = lqq;
});

// Register to shared state
__$.CoA = CoA;
