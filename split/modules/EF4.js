// Module: EF4
// Dependencies: qz6, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EF4 = v(TF4 => {
  Object.defineProperty(TF4, "__esModule", {
    value: !0
  });
  TF4.toBase64 = void 0;
  var tb9 = __$.qz6(),
    eb9 = __$._z(),
    Ax9 = A => {
      let K;
      if (typeof A === "string") K = (0, eb9.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, tb9.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  TF4.toBase64 = Ax9;
});

// Register to shared state
__$.EF4 = EF4;
