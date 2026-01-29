// Module: b14
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b14 = v(S14 => {
  Object.defineProperty(S14, "__esModule", {
    value: !0
  });
  S14.numToUint8 = void 0;
  function xP3(A) {
    return new Uint8Array([(A & 4278190080) >> 24, (A & 16711680) >> 16, (A & 65280) >> 8, A & 255]);
  }
  S14.numToUint8 = xP3;
});

// Register to shared state
__$.b14 = b14;
