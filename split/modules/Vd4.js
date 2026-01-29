// Module: Vd4
// Dependencies: N8A, jd4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vd4 = v(Md4 => {
  Object.defineProperty(Md4, "__esModule", {
    value: !0
  });
  Md4.toBase64 = void 0;
  var tU9 = __$.N8A(),
    eU9 = __$.jd4(),
    Ap9 = A => {
      let K;
      if (typeof A === "string") K = (0, eU9.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, tU9.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  Md4.toBase64 = Ap9;
});

// Register to shared state
__$.Vd4 = Vd4;
