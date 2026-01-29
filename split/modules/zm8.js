// Module: zm8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zm8 = v(Ym8 => {
  Object.defineProperty(Ym8, "__esModule", {
    value: !0
  });
  Ym8.splitStream = wZ5;
  async function wZ5(A) {
    if (typeof A.stream === "function") A = A.stream();
    return A.tee();
  }
});

// Register to shared state
__$.zm8 = zm8;
