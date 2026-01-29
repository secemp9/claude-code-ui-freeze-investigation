// Module: gF7
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gF7 = v(BF7 => {
  Object.defineProperty(BF7, "__esModule", {
    value: !0
  });
  BF7.validateAndNormalizeHeaders = void 0;
  var X42 = __$.RK();
  function $42(A) {
    let K = {};
    return Object.entries(A ?? {}).forEach(([q, Y]) => {
      if (typeof Y < "u") K[q] = String(Y);else X42.diag.warn(`Header "${q}" has invalid value (${Y}) and will be ignored`);
    }), K;
  }
  BF7.validateAndNormalizeHeaders = $42;
});

// Register to shared state
__$.gF7 = gF7;
