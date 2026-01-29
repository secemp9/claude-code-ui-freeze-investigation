// Module: K64
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K64 = v(vV3 => {
  var A64 = {},
    EA6 = {};
  for (let A = 0; A < 256; A++) {
    let K = A.toString(16).toLowerCase();
    if (K.length === 1) K = `0${K}`;
    A64[A] = K, EA6[K] = A;
  }
  function NV3(A) {
    if (A.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
    let K = new Uint8Array(A.length / 2);
    for (let q = 0; q < A.length; q += 2) {
      let Y = A.slice(q, q + 2).toLowerCase();
      if (Y in EA6) K[q / 2] = EA6[Y];else throw Error(`Cannot decode unrecognized sequence ${Y} as hexadecimal`);
    }
    return K;
  }
  function TV3(A) {
    let K = "";
    for (let q = 0; q < A.byteLength; q++) K += A64[A[q]];
    return K;
  }
  vV3.fromHex = NV3;
  vV3.toHex = TV3;
});

// Register to shared state
__$.K64 = K64;
