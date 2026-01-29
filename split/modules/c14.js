// Module: c14
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var c14 = v(eP3 => {
  var d14 = {},
    TA6 = {};
  for (let A = 0; A < 256; A++) {
    let K = A.toString(16).toLowerCase();
    if (K.length === 1) K = `0${K}`;
    d14[A] = K, TA6[K] = A;
  }
  function sP3(A) {
    if (A.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
    let K = new Uint8Array(A.length / 2);
    for (let q = 0; q < A.length; q += 2) {
      let Y = A.slice(q, q + 2).toLowerCase();
      if (Y in TA6) K[q / 2] = TA6[Y];else throw Error(`Cannot decode unrecognized sequence ${Y} as hexadecimal`);
    }
    return K;
  }
  function tP3(A) {
    let K = "";
    for (let q = 0; q < A.byteLength; q++) K += d14[A[q]];
    return K;
  }
  eP3.fromHex = sP3;
  eP3.toHex = tP3;
});

// Register to shared state
__$.c14 = c14;
