// Module: UB8
// Dependencies: QB8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UB8 = v(hG5 => {
  var nl1 = __$.QB8();
  function SG5(A) {
    let K = [];
    for (let q of Object.keys(A).sort()) {
      let Y = A[q];
      if (q = nl1.escapeUri(q), Array.isArray(Y)) for (let z = 0, w = Y.length; z < w; z++) K.push(`${q}=${nl1.escapeUri(Y[z])}`);else {
        let z = q;
        if (Y || typeof Y === "string") z += `=${nl1.escapeUri(Y)}`;
        K.push(z);
      }
    }
    return K.join("&");
  }
  hG5.buildQueryString = SG5;
});

// Register to shared state
__$.UB8 = UB8;
