// Module: VDK
// Dependencies: MDK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VDK = v(VF2 => {
  var Mg6 = __$.MDK();
  VF2.mul = function (K, q) {
    let Y = new Uint8Array(K.length + q.length - 1);
    for (let z = 0; z < K.length; z++) for (let w = 0; w < q.length; w++) Y[z + w] ^= Mg6.mul(K[z], q[w]);
    return Y;
  };
  VF2.mod = function (K, q) {
    let Y = new Uint8Array(K);
    while (Y.length - q.length >= 0) {
      let z = Y[0];
      for (let H = 0; H < q.length; H++) Y[H] ^= Mg6.mul(q[H], z);
      let w = 0;
      while (w < Y.length && Y[w] === 0) w++;
      Y = Y.slice(w);
    }
    return Y;
  };
  VF2.generateECPolynomial = function (K) {
    let q = new Uint8Array([1]);
    for (let Y = 0; Y < K; Y++) q = VF2.mul(q, new Uint8Array([1, Mg6.exp(Y)]));
    return q;
  };
});

// Register to shared state
__$.VDK = VDK;
