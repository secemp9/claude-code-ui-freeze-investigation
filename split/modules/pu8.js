// Module: pu8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pu8 = v(Qu8 => {
  Object.defineProperty(Qu8, "__esModule", {
    value: !0
  });
  Qu8.ChecksumStream = void 0;
  var g$5 = typeof ReadableStream === "function" ? ReadableStream : function () {};
  class Fu8 extends g$5 {}
  Qu8.ChecksumStream = Fu8;
});

// Register to shared state
__$.pu8 = pu8;
