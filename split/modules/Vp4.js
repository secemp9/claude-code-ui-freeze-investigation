// Module: Vp4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vp4 = v(Mp4 => {
  Object.defineProperty(Mp4, "__esModule", {
    value: !0
  });
  Mp4.numToUint8 = void 0;
  function bQ9(A) {
    return new Uint8Array([(A & 4278190080) >> 24, (A & 16711680) >> 16, (A & 65280) >> 8, A & 255]);
  }
  Mp4.numToUint8 = bQ9;
});

// Register to shared state
__$.Vp4 = Vp4;
