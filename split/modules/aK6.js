// Module: aK6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aK6 = v((JYw, lX4) => {
  var dX4 = /^[0-9]+$/,
    cX4 = (A, K) => {
      let q = dX4.test(A),
        Y = dX4.test(K);
      if (q && Y) A = +A, K = +K;
      return A === K ? 0 : q && !Y ? -1 : Y && !q ? 1 : A < K ? -1 : 1;
    },
    De3 = (A, K) => cX4(K, A);
  lX4.exports = {
    compareIdentifiers: cX4,
    rcompareIdentifiers: De3
  };
});

// Register to shared state
__$.aK6 = aK6;
