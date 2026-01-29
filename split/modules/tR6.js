// Module: tR6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tR6 = v(gG2 => {
  function mG2(A, K, q) {
    K.split && (K = K.split("."));
    var Y = 0,
      z = K.length,
      w = A,
      H,
      J;
    while (Y < z) {
      if (J = "" + K[Y++], J === "__proto__" || J === "constructor" || J === "prototype") break;
      w = w[J] = Y === z ? q : typeof (H = w[J]) === typeof K ? H : K[Y] * 0 !== 0 || !!~("" + K[Y]).indexOf(".") ? {} : [];
    }
  }
  gG2.dset = mG2;
});

// Register to shared state
__$.tR6 = tR6;
