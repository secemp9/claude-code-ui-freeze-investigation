// Module: HM8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HM8 = v(wM8 => {
  Object.defineProperty(wM8, "__esModule", {
    value: !0
  });
  function sSq(A) {
    return A.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  wM8.escapeStringForRegex = sSq;
});

// Register to shared state
__$.HM8 = HM8;
