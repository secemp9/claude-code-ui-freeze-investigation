// Module: t56
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var t56 = v(SM4 => {
  Object.defineProperty(SM4, "__esModule", {
    value: !0
  });
  SM4.createConstMap = void 0;
  function kq9(A) {
    let K = {},
      q = A.length;
    for (let Y = 0; Y < q; Y++) {
      let z = A[Y];
      if (z) K[String(z).toUpperCase().replace(/[-.]/g, "_")] = z;
    }
    return K;
  }
  SM4.createConstMap = kq9;
});

// Register to shared state
__$.t56 = t56;
