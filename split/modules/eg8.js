// Module: eg8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eg8 = v(hM5 => {
  function SM5(A) {
    let K = {};
    if (A = A.replace(/^\?/, ""), A) for (let q of A.split("&")) {
      let [Y, z = null] = q.split("=");
      if (Y = decodeURIComponent(Y), z) z = decodeURIComponent(z);
      if (!(Y in K)) K[Y] = z;else if (Array.isArray(K[Y])) K[Y].push(z);else K[Y] = [K[Y], z];
    }
    return K;
  }
  hM5.parseQueryString = SM5;
});

// Register to shared state
__$.eg8 = eg8;
