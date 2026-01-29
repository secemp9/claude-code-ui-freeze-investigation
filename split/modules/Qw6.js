// Module: Qw6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qw6 = v((BNw, al4) => {
  function Fw6(A) {
    return A >= 48 && A <= 57;
  }
  function ol4(A) {
    return A >= 65 && A <= 90 || A >= 97 && A <= 122;
  }
  function Ti9(A) {
    return ol4(A) || Fw6(A);
  }
  function vi9(A) {
    return Fw6(A) || A >= 65 && A <= 70 || A >= 97 && A <= 102;
  }
  al4.exports = {
    isASCIIDigit: Fw6,
    isASCIIAlpha: ol4,
    isASCIIAlphanumeric: Ti9,
    isASCIIHex: vi9
  };
});

// Register to shared state
__$.Qw6 = Qw6;
