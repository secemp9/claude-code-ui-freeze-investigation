// Module: uSA
// Dependencies: Vg4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uSA = v((qVw, vg4) => {
  var {
      defineProperty: E21,
      getOwnPropertyDescriptor: LS9,
      getOwnPropertyNames: RS9
    } = Object,
    yS9 = Object.prototype.hasOwnProperty,
    I26 = (A, K) => E21(A, "name", {
      value: K,
      configurable: !0
    }),
    IS9 = (A, K) => {
      for (var q in K) E21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    SS9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of RS9(K)) if (!yS9.call(A, z) && z !== q) E21(A, z, {
          get: () => K[z],
          enumerable: !(Y = LS9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    hS9 = A => SS9(E21({}, "__esModule", {
      value: !0
    }), A),
    fg4 = {};
  IS9(fg4, {
    fromUtf8: () => Tg4,
    toUint8Array: () => bS9,
    toUtf8: () => xS9
  });
  vg4.exports = hS9(fg4);
  var Ng4 = __$.Vg4(),
    Tg4 = I26(A => {
      let K = (0, Ng4.fromString)(A, "utf8");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8"),
    bS9 = I26(A => {
      if (typeof A === "string") return Tg4(A);
      if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      return new Uint8Array(A);
    }, "toUint8Array"),
    xS9 = I26(A => {
      if (typeof A === "string") return A;
      if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return (0, Ng4.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength).toString("utf8");
    }, "toUtf8");
});

// Register to shared state
__$.uSA = uSA;
