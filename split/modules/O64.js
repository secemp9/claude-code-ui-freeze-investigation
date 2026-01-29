// Module: O64
// Dependencies: J64

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var O64 = v(Af3 => {
  var hA6 = __$.J64();
  function eV3(A) {
    let K = [];
    for (let q of Object.keys(A).sort()) {
      let Y = A[q];
      if (q = hA6.escapeUri(q), Array.isArray(Y)) for (let z = 0, w = Y.length; z < w; z++) K.push(`${q}=${hA6.escapeUri(Y[z])}`);else {
        let z = q;
        if (Y || typeof Y === "string") z += `=${hA6.escapeUri(Y)}`;
        K.push(z);
      }
    }
    return K.join("&");
  }
  Af3.buildQueryString = eV3;
});

// Register to shared state
__$.O64 = O64;
