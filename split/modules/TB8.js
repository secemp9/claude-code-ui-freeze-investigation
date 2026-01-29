// Module: TB8
// Dependencies: NB8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TB8 = v(Q_5 => {
  var gl1 = __$.NB8();
  function F_5(A) {
    let K = [];
    for (let q of Object.keys(A).sort()) {
      let Y = A[q];
      if (q = gl1.escapeUri(q), Array.isArray(Y)) for (let z = 0, w = Y.length; z < w; z++) K.push(`${q}=${gl1.escapeUri(Y[z])}`);else {
        let z = q;
        if (Y || typeof Y === "string") z += `=${gl1.escapeUri(Y)}`;
        K.push(z);
      }
    }
    return K.join("&");
  }
  Q_5.buildQueryString = F_5;
});

// Register to shared state
__$.TB8 = TB8;
