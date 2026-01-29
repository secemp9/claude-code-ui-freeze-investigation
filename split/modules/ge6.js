// Module: ge6
// Dependencies: Be6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ge6 = v((JGz, me6) => {
  var CAq = __$.Be6();
  me6.exports = function (K) {
    if (CAq(K) || K === 0) return K;
    return K < 0 ? -1 : 1;
  };
});

// Register to shared state
__$.ge6 = ge6;
