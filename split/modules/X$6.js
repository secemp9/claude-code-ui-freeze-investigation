// Module: X$6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X$6 = v((Nmw, K47) => {
  var e87 = /^[0-9]+$/,
    A47 = (A, K) => {
      let q = e87.test(A),
        Y = e87.test(K);
      if (q && Y) A = +A, K = +K;
      return A === K ? 0 : q && !Y ? -1 : Y && !q ? 1 : A < K ? -1 : 1;
    },
    NKY = (A, K) => A47(K, A);
  K47.exports = {
    compareIdentifiers: A47,
    rcompareIdentifiers: NKY
  };
});

// Register to shared state
__$.X$6 = X$6;
