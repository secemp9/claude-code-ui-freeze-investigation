// Module: $y6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $y6 = v(NZ2 => {
  var P3A = 256,
    rM1 = [],
    nM1;
  while (P3A--) rM1[P3A] = (P3A + 256).toString(16).substring(1);
  function fZ2() {
    var A = 0,
      K,
      q = "";
    if (!nM1 || P3A + 16 > 256) {
      nM1 = Array(A = 256);
      while (A--) nM1[A] = 256 * Math.random() | 0;
      A = P3A = 0;
    }
    for (; A < 16; A++) {
      if (K = nM1[P3A + A], A == 6) q += rM1[K & 15 | 64];else if (A == 8) q += rM1[K & 63 | 128];else q += rM1[K];
      if (A & 1 && A > 1 && A < 11) q += "-";
    }
    return P3A++, q;
  }
  NZ2.v4 = fZ2;
});

// Register to shared state
__$.$y6 = $y6;
