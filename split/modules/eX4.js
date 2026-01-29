// Module: eX4
// Dependencies: N4A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eX4 = v((_Yw, tX4) => {
  var fe3 = __$.N4A(),
    Ne3 = (A, K) => {
      let q = fe3(A.trim().replace(/^[=v]+/, ""), K);
      return q ? q.version : null;
    };
  tX4.exports = Ne3;
});

// Register to shared state
__$.eX4 = eX4;
