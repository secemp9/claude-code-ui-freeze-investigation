// Module: UX6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UX6 = v(M67 => {
  Object.defineProperty(M67, "__esModule", {
    value: !0
  });
  M67.default = D4Y;
  var Z4Y = W4Y(CA("crypto"));
  function W4Y(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  var sH1 = new Uint8Array(256),
    aH1 = sH1.length;
  function D4Y() {
    if (aH1 > sH1.length - 16) Z4Y.default.randomFillSync(sH1), aH1 = 0;
    return sH1.slice(aH1, aH1 += 16);
  }
});

// Register to shared state
__$.UX6 = UX6;
