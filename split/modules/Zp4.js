// Module: Zp4
// Dependencies: D26

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zp4 = v(_p4 => {
  Object.defineProperty(_p4, "__esModule", {
    value: !0
  });
  _p4.convertToBuffer = void 0;
  var yQ9 = __$.D26(),
    IQ9 = typeof Buffer < "u" && Buffer.from ? function (A) {
      return Buffer.from(A, "utf8");
    } : yQ9.fromUtf8;
  function SQ9(A) {
    if (A instanceof Uint8Array) return A;
    if (typeof A === "string") return IQ9(A);
    if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(A);
  }
  _p4.convertToBuffer = SQ9;
});

// Register to shared state
__$.Zp4 = Zp4;
