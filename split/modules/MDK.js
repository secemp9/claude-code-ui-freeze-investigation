// Module: MDK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MDK = v(DF2 => {
  var EdA = new Uint8Array(512),
    kv1 = new Uint8Array(256);
  (function () {
    let K = 1;
    for (let q = 0; q < 255; q++) if (EdA[q] = K, kv1[K] = q, K <<= 1, K & 256) K ^= 285;
    for (let q = 255; q < 512; q++) EdA[q] = EdA[q - 255];
  })();
  DF2.log = function (K) {
    if (K < 1) throw Error("log(" + K + ")");
    return kv1[K];
  };
  DF2.exp = function (K) {
    return EdA[K];
  };
  DF2.mul = function (K, q) {
    if (K === 0 || q === 0) return 0;
    return EdA[kv1[K] + kv1[q]];
  };
});

// Register to shared state
__$.MDK = MDK;
