// Module: HV7
// Dependencies: JV6, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HV7 = v(zV7 => {
  Object.defineProperty(zV7, "__esModule", {
    value: !0
  });
  zV7.toBase64 = void 0;
  var GSY = __$.JV6(),
    ZSY = __$._z(),
    WSY = A => {
      let K;
      if (typeof A === "string") K = (0, ZSY.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, GSY.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  zV7.toBase64 = WSY;
});

// Register to shared state
__$.HV7 = HV7;
