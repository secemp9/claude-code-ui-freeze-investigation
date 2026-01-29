// Module: ci8
// Dependencies: ka1, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ci8 = v(pi8 => {
  Object.defineProperty(pi8, "__esModule", {
    value: !0
  });
  pi8.toBase64 = void 0;
  var tF5 = __$.ka1(),
    eF5 = __$._z(),
    AQ5 = A => {
      let K;
      if (typeof A === "string") K = (0, eF5.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, tF5.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  pi8.toBase64 = AQ5;
});

// Register to shared state
__$.ci8 = ci8;
