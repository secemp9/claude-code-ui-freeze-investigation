// Module: v64
// Dependencies: mA6, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var v64 = v(N64 => {
  Object.defineProperty(N64, "__esModule", {
    value: !0
  });
  N64.toBase64 = void 0;
  var Qf3 = __$.mA6(),
    Uf3 = __$._z(),
    pf3 = A => {
      let K;
      if (typeof A === "string") K = (0, Uf3.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, Qf3.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  N64.toBase64 = pf3;
});

// Register to shared state
__$.v64 = v64;
