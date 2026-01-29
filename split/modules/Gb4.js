// Module: Gb4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gb4 = v((Wjw, _b4) => {
  var Xb4 = /^[0-9]+$/,
    $b4 = (A, K) => {
      let q = Xb4.test(A),
        Y = Xb4.test(K);
      if (q && Y) A = +A, K = +K;
      return A === K ? 0 : q && !Y ? -1 : Y && !q ? 1 : A < K ? -1 : 1;
    },
    rv9 = (A, K) => $b4(K, A);
  _b4.exports = {
    compareIdentifiers: $b4,
    rcompareIdentifiers: rv9
  };
});

// Register to shared state
__$.Gb4 = Gb4;
