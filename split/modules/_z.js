// Module: _z
// Dependencies: Cu8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _z = v(C$5 => {
  var Lu8 = __$.Cu8(),
    Ru8 = A => {
      let K = Lu8.fromString(A, "utf8");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    },
    E$5 = A => {
      if (typeof A === "string") return Ru8(A);
      if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      return new Uint8Array(A);
    },
    k$5 = A => {
      if (typeof A === "string") return A;
      if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return Lu8.fromArrayBuffer(A.buffer, A.byteOffset, A.byteLength).toString("utf8");
    };
  C$5.fromUtf8 = Ru8;
  C$5.toUint8Array = E$5;
  C$5.toUtf8 = k$5;
});

// Register to shared state
__$._z = _z;
