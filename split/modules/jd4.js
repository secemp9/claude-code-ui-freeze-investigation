// Module: jd4
// Dependencies: N8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jd4 = v((Hfw, Dd4) => {
  var {
      defineProperty: Kz1,
      getOwnPropertyDescriptor: cU9,
      getOwnPropertyNames: lU9
    } = Object,
    iU9 = Object.prototype.hasOwnProperty,
    rz6 = (A, K) => Kz1(A, "name", {
      value: K,
      configurable: !0
    }),
    nU9 = (A, K) => {
      for (var q in K) Kz1(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    rU9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of lU9(K)) if (!iU9.call(A, z) && z !== q) Kz1(A, z, {
          get: () => K[z],
          enumerable: !(Y = cU9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    oU9 = A => rU9(Kz1({}, "__esModule", {
      value: !0
    }), A),
    Gd4 = {};
  nU9(Gd4, {
    fromUtf8: () => Wd4,
    toUint8Array: () => aU9,
    toUtf8: () => sU9
  });
  Dd4.exports = oU9(Gd4);
  var Zd4 = __$.N8A(),
    Wd4 = rz6(A => {
      let K = (0, Zd4.fromString)(A, "utf8");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8"),
    aU9 = rz6(A => {
      if (typeof A === "string") return Wd4(A);
      if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      return new Uint8Array(A);
    }, "toUint8Array"),
    sU9 = rz6(A => {
      if (typeof A === "string") return A;
      if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return (0, Zd4.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength).toString("utf8");
    }, "toUtf8");
});

// Register to shared state
__$.jd4 = jd4;
