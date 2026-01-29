// Module: bB4
// Dependencies: D26

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bB4 = v(SB4 => {
  Object.defineProperty(SB4, "__esModule", {
    value: !0
  });
  SB4.convertToBuffer = void 0;
  var rR9 = __$.D26(),
    oR9 = typeof Buffer < "u" && Buffer.from ? function (A) {
      return Buffer.from(A, "utf8");
    } : rR9.fromUtf8;
  function aR9(A) {
    if (A instanceof Uint8Array) return A;
    if (typeof A === "string") return oR9(A);
    if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(A);
  }
  SB4.convertToBuffer = aR9;
});

// Register to shared state
__$.bB4 = bB4;
