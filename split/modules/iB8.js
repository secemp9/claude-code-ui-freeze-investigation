// Module: iB8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iB8 = v(nG5 => {
  var lB8 = {},
    ol1 = {};
  for (let A = 0; A < 256; A++) {
    let K = A.toString(16).toLowerCase();
    if (K.length === 1) K = `0${K}`;
    lB8[A] = K, ol1[K] = A;
  }
  function lG5(A) {
    if (A.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
    let K = new Uint8Array(A.length / 2);
    for (let q = 0; q < A.length; q += 2) {
      let Y = A.slice(q, q + 2).toLowerCase();
      if (Y in ol1) K[q / 2] = ol1[Y];else throw Error(`Cannot decode unrecognized sequence ${Y} as hexadecimal`);
    }
    return K;
  }
  function iG5(A) {
    let K = "";
    for (let q = 0; q < A.byteLength; q++) K += lB8[A[q]];
    return K;
  }
  nG5.fromHex = lG5;
  nG5.toHex = iG5;
});

// Register to shared state
__$.iB8 = iB8;
