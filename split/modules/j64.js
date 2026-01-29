// Module: j64
// Dependencies: D64

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var j64 = v(Cf3 => {
  var uA6 = __$.D64();
  function kf3(A) {
    let K = [];
    for (let q of Object.keys(A).sort()) {
      let Y = A[q];
      if (q = uA6.escapeUri(q), Array.isArray(Y)) for (let z = 0, w = Y.length; z < w; z++) K.push(`${q}=${uA6.escapeUri(Y[z])}`);else {
        let z = q;
        if (Y || typeof Y === "string") z += `=${uA6.escapeUri(Y)}`;
        K.push(z);
      }
    }
    return K.join("&");
  }
  Cf3.buildQueryString = kf3;
});

// Register to shared state
__$.j64 = j64;
