// Module: VF8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VF8 = v($V5 => {
  var PF8 = {},
    si1 = {};
  for (let A = 0; A < 256; A++) {
    let K = A.toString(16).toLowerCase();
    if (K.length === 1) K = `0${K}`;
    PF8[A] = K, si1[K] = A;
  }
  function OV5(A) {
    if (A.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
    let K = new Uint8Array(A.length / 2);
    for (let q = 0; q < A.length; q += 2) {
      let Y = A.slice(q, q + 2).toLowerCase();
      if (Y in si1) K[q / 2] = si1[Y];else throw Error(`Cannot decode unrecognized sequence ${Y} as hexadecimal`);
    }
    return K;
  }
  function XV5(A) {
    let K = "";
    for (let q = 0; q < A.byteLength; q++) K += PF8[A[q]];
    return K;
  }
  $V5.fromHex = OV5;
  $V5.toHex = XV5;
});

// Register to shared state
__$.VF8 = VF8;
