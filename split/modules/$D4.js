// Module: $D4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $D4 = v(OD4 => {
  Object.defineProperty(OD4, "__esModule", {
    value: !0
  });
  OD4.validateValue = OD4.validateKey = void 0;
  var T56 = "[_0-9a-z-*/]",
    I79 = `[a-z]${T56}{0,255}`,
    S79 = `[a-z0-9]${T56}{0,240}@[a-z]${T56}{0,13}`,
    h79 = new RegExp(`^(?:${I79}|${S79})$`),
    b79 = /^[ -~]{0,255}[!-~]$/,
    x79 = /,|=/;
  function u79(A) {
    return h79.test(A);
  }
  OD4.validateKey = u79;
  function B79(A) {
    return b79.test(A) && !x79.test(A);
  }
  OD4.validateValue = B79;
});

// Register to shared state
__$.$D4 = $D4;
