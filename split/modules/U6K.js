// Module: U6K
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U6K = v(F6K => {
  Object.defineProperty(F6K, "__esModule", {
    value: !0
  });
  F6K.bindAll = void 0;
  function rZ2(A) {
    var K = A.constructor.prototype;
    for (var q = 0, Y = Object.getOwnPropertyNames(K); q < Y.length; q++) {
      var z = Y[q];
      if (z !== "constructor") {
        var w = Object.getOwnPropertyDescriptor(A.constructor.prototype, z);
        if (!!w && typeof w.value === "function") A[z] = A[z].bind(A);
      }
    }
    return A;
  }
  F6K.bindAll = rZ2;
});

// Register to shared state
__$.U6K = U6K;
