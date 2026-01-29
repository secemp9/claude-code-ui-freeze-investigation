// Module: Su8
// Dependencies: w61, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Su8 = v(yu8 => {
  Object.defineProperty(yu8, "__esModule", {
    value: !0
  });
  yu8.toBase64 = void 0;
  var I$5 = __$.w61(),
    S$5 = __$._z(),
    h$5 = A => {
      let K;
      if (typeof A === "string") K = (0, S$5.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, I$5.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  yu8.toBase64 = h$5;
});

// Register to shared state
__$.Su8 = Su8;
