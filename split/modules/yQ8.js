// Module: yQ8
// Dependencies: hn1, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yQ8 = v(LQ8 => {
  Object.defineProperty(LQ8, "__esModule", {
    value: !0
  });
  LQ8.toBase64 = void 0;
  var JT5 = __$.hn1(),
    OT5 = __$._z(),
    XT5 = A => {
      let K;
      if (typeof A === "string") K = (0, OT5.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, JT5.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  LQ8.toBase64 = XT5;
});

// Register to shared state
__$.yQ8 = yQ8;
