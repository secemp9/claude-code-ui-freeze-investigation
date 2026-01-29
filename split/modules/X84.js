// Module: X84
// Dependencies: H16, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X84 = v(J84 => {
  Object.defineProperty(J84, "__esModule", {
    value: !0
  });
  J84.toBase64 = void 0;
  var Xv3 = __$.H16(),
    $v3 = __$._z(),
    _v3 = A => {
      let K;
      if (typeof A === "string") K = (0, $v3.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, Xv3.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  J84.toBase64 = _v3;
});

// Register to shared state
__$.X84 = X84;
