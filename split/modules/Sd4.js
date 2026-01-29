// Module: Sd4
// Dependencies: N8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sd4 = v(($fw, Id4) => {
  var {
      defineProperty: zz1,
      getOwnPropertyDescriptor: _p9,
      getOwnPropertyNames: Gp9
    } = Object,
    Zp9 = Object.prototype.hasOwnProperty,
    ez6 = (A, K) => zz1(A, "name", {
      value: K,
      configurable: !0
    }),
    Wp9 = (A, K) => {
      for (var q in K) zz1(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    Dp9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of Gp9(K)) if (!Zp9.call(A, z) && z !== q) zz1(A, z, {
          get: () => K[z],
          enumerable: !(Y = _p9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    jp9 = A => Dp9(zz1({}, "__esModule", {
      value: !0
    }), A),
    Ld4 = {};
  Wp9(Ld4, {
    fromUtf8: () => yd4,
    toUint8Array: () => Mp9,
    toUtf8: () => Pp9
  });
  Id4.exports = jp9(Ld4);
  var Rd4 = __$.N8A(),
    yd4 = ez6(A => {
      let K = (0, Rd4.fromString)(A, "utf8");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8"),
    Mp9 = ez6(A => {
      if (typeof A === "string") return yd4(A);
      if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      return new Uint8Array(A);
    }, "toUint8Array"),
    Pp9 = ez6(A => {
      if (typeof A === "string") return A;
      if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return (0, Rd4.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength).toString("utf8");
    }, "toUtf8");
});

// Register to shared state
__$.Sd4 = Sd4;
