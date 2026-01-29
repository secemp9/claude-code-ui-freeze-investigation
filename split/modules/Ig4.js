// Module: Ig4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ig4 = v((YVw, yg4) => {
  var {
      defineProperty: k21,
      getOwnPropertyDescriptor: uS9,
      getOwnPropertyNames: BS9
    } = Object,
    mS9 = Object.prototype.hasOwnProperty,
    Eg4 = (A, K) => k21(A, "name", {
      value: K,
      configurable: !0
    }),
    gS9 = (A, K) => {
      for (var q in K) k21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    FS9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of BS9(K)) if (!mS9.call(A, z) && z !== q) k21(A, z, {
          get: () => K[z],
          enumerable: !(Y = uS9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    QS9 = A => FS9(k21({}, "__esModule", {
      value: !0
    }), A),
    kg4 = {};
  gS9(kg4, {
    fromHex: () => Lg4,
    toHex: () => Rg4
  });
  yg4.exports = QS9(kg4);
  var Cg4 = {},
    S26 = {};
  for (let A = 0; A < 256; A++) {
    let K = A.toString(16).toLowerCase();
    if (K.length === 1) K = `0${K}`;
    Cg4[A] = K, S26[K] = A;
  }
  function Lg4(A) {
    if (A.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
    let K = new Uint8Array(A.length / 2);
    for (let q = 0; q < A.length; q += 2) {
      let Y = A.slice(q, q + 2).toLowerCase();
      if (Y in S26) K[q / 2] = S26[Y];else throw Error(`Cannot decode unrecognized sequence ${Y} as hexadecimal`);
    }
    return K;
  }
  Eg4(Lg4, "fromHex");
  function Rg4(A) {
    let K = "";
    for (let q = 0; q < A.byteLength; q++) K += Cg4[A[q]];
    return K;
  }
  Eg4(Rg4, "toHex");
});

// Register to shared state
__$.Ig4 = Ig4;
