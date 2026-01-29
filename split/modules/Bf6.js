// Module: Bf6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Bf6 = v((T_H, iE7) => {
  iE7.exports = function (K, q) {
    return q = q || Object.create(null), [K, q].reduce((Y, z) => {
      return Object.keys(z).forEach(w => {
        Y[w] = z[w];
      }), Y;
    }, Object.create(null));
  };
});

// Register to shared state
__$.Bf6 = Bf6;
