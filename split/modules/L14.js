// Module: L14
// Dependencies: E14

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var L14 = v(k14 => {
  Object.defineProperty(k14, "__esModule", {
    value: !0
  });
  k14.convertToBuffer = void 0;
  var IP3 = __$.E14(),
    SP3 = typeof Buffer < "u" && Buffer.from ? function (A) {
      return Buffer.from(A, "utf8");
    } : IP3.fromUtf8;
  function hP3(A) {
    if (A instanceof Uint8Array) return A;
    if (typeof A === "string") return SP3(A);
    if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(A);
  }
  k14.convertToBuffer = hP3;
});

// Register to shared state
__$.L14 = L14;
