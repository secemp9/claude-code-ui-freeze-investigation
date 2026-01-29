// Module: yz1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yz1 = v((mNw, sl4) => {
  var Ei9 = new TextEncoder(),
    ki9 = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
  function Ci9(A) {
    return Ei9.encode(A);
  }
  function Li9(A) {
    return ki9.decode(A);
  }
  sl4.exports = {
    utf8Encode: Ci9,
    utf8DecodeWithoutBOM: Li9
  };
});

// Register to shared state
__$.yz1 = yz1;
