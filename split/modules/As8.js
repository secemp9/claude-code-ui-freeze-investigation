// Module: As8
// Dependencies: ys1, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var As8 = v(ta8 => {
  Object.defineProperty(ta8, "__esModule", {
    value: !0
  });
  ta8.toBase64 = void 0;
  var ln5 = __$.ys1(),
    in5 = __$._z(),
    nn5 = A => {
      let K;
      if (typeof A === "string") K = (0, in5.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, ln5.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  ta8.toBase64 = nn5;
});

// Register to shared state
__$.As8 = As8;
