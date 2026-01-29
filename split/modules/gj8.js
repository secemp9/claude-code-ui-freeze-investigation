// Module: gj8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gj8 = v(mj8 => {
  Object.defineProperty(mj8, "__esModule", {
    value: !0
  });
  function uj8(A, K, q) {
    let Y = K.match(/([a-z_]+)\.(.*)/i);
    if (Y === null) A[K] = q;else {
      let z = A[Y[1]];
      uj8(z, Y[2], q);
    }
  }
  function DSq(A, K, q = {}) {
    return Array.isArray(K) ? Bj8(A, K, q) : jSq(A, K, q);
  }
  function Bj8(A, K, q) {
    let Y = K.find(z => z.name === A.name);
    if (Y) {
      for (let [z, w] of Object.entries(q)) uj8(Y, z, w);
      return K;
    }
    return [...K, A];
  }
  function jSq(A, K, q) {
    return z => {
      let w = K(z);
      if (A.allowExclusionByUser) {
        if (!w.find(J => J.name === A.name)) return w;
      }
      return Bj8(A, w, q);
    };
  }
  mj8.addOrUpdateIntegration = DSq;
});

// Register to shared state
__$.gj8 = gj8;
