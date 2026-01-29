// Module: nu8
// Dependencies: ii, Il1, lu8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nu8 = v(iu8 => {
  Object.defineProperty(iu8, "__esModule", {
    value: !0
  });
  iu8.createChecksumStream = i$5;
  var d$5 = __$.ii(),
    c$5 = __$.Il1(),
    l$5 = __$.lu8();
  function i$5(A) {
    if (typeof ReadableStream === "function" && (0, d$5.isReadableStream)(A.source)) return (0, l$5.createChecksumStream)(A);
    return new c$5.ChecksumStream(A);
  }
});

// Register to shared state
__$.nu8 = nu8;
