// Module: E14
// Dependencies: N8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var E14 = v((cAw, v14) => {
  var {
      defineProperty: s41,
      getOwnPropertyDescriptor: TP3,
      getOwnPropertyNames: vP3
    } = Object,
    EP3 = Object.prototype.hasOwnProperty,
    MA6 = (A, K) => s41(A, "name", {
      value: K,
      configurable: !0
    }),
    kP3 = (A, K) => {
      for (var q in K) s41(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    CP3 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of vP3(K)) if (!EP3.call(A, z) && z !== q) s41(A, z, {
          get: () => K[z],
          enumerable: !(Y = TP3(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    LP3 = A => CP3(s41({}, "__esModule", {
      value: !0
    }), A),
    f14 = {};
  kP3(f14, {
    fromUtf8: () => T14,
    toUint8Array: () => RP3,
    toUtf8: () => yP3
  });
  v14.exports = LP3(f14);
  var N14 = __$.N8A(),
    T14 = MA6(A => {
      let K = (0, N14.fromString)(A, "utf8");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8"),
    RP3 = MA6(A => {
      if (typeof A === "string") return T14(A);
      if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      return new Uint8Array(A);
    }, "toUint8Array"),
    yP3 = MA6(A => {
      if (typeof A === "string") return A;
      if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return (0, N14.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength).toString("utf8");
    }, "toUtf8");
});

// Register to shared state
__$.E14 = E14;
