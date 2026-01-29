// Module: up4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var up4 = v((Kfw, xp4) => {
  var {
      defineProperty: a21,
      getOwnPropertyDescriptor: aQ9,
      getOwnPropertyNames: sQ9
    } = Object,
    tQ9 = Object.prototype.hasOwnProperty,
    yp4 = (A, K) => a21(A, "name", {
      value: K,
      configurable: !0
    }),
    eQ9 = (A, K) => {
      for (var q in K) a21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    AU9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of sQ9(K)) if (!tQ9.call(A, z) && z !== q) a21(A, z, {
          get: () => K[z],
          enumerable: !(Y = aQ9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    KU9 = A => AU9(a21({}, "__esModule", {
      value: !0
    }), A),
    Ip4 = {};
  eQ9(Ip4, {
    fromHex: () => hp4,
    toHex: () => bp4
  });
  xp4.exports = KU9(Ip4);
  var Sp4 = {},
    lz6 = {};
  for (let A = 0; A < 256; A++) {
    let K = A.toString(16).toLowerCase();
    if (K.length === 1) K = `0${K}`;
    Sp4[A] = K, lz6[K] = A;
  }
  function hp4(A) {
    if (A.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
    let K = new Uint8Array(A.length / 2);
    for (let q = 0; q < A.length; q += 2) {
      let Y = A.slice(q, q + 2).toLowerCase();
      if (Y in lz6) K[q / 2] = lz6[Y];else throw Error(`Cannot decode unrecognized sequence ${Y} as hexadecimal`);
    }
    return K;
  }
  yp4(hp4, "fromHex");
  function bp4(A) {
    let K = "";
    for (let q = 0; q < A.byteLength; q++) K += Sp4[A[q]];
    return K;
  }
  yp4(bp4, "toHex");
});

// Register to shared state
__$.up4 = up4;
