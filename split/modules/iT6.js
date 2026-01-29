// Module: iT6
// Dependencies: Xj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iT6 = v(RS7 => {
  Object.defineProperty(RS7, "__esModule", {
    value: !0
  });
  RS7._typedJsonParse = void 0;
  var saY = __$.Xj();
  function taY(A, K, q) {
    try {
      let Y = JSON.parse(A);
      if (Y && typeof Y === "object" && K in Y) return Y;
    } catch (Y) {}
    return saY.Log.error(`Failed to parse ${q}`), null;
  }
  RS7._typedJsonParse = taY;
});

// Register to shared state
__$.iT6 = iT6;
