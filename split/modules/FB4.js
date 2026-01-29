// Module: FB4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FB4 = v(mB4 => {
  Object.defineProperty(mB4, "__esModule", {
    value: !0
  });
  mB4.numToUint8 = void 0;
  function tR9(A) {
    return new Uint8Array([(A & 4278190080) >> 24, (A & 16711680) >> 16, (A & 65280) >> 8, A & 255]);
  }
  mB4.numToUint8 = tR9;
});

// Register to shared state
__$.FB4 = FB4;
