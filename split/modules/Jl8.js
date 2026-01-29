// Module: Jl8
// Dependencies: so1, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jl8 = v(wl8 => {
  Object.defineProperty(wl8, "__esModule", {
    value: !0
  });
  wl8.toBase64 = void 0;
  var Bu5 = __$.so1(),
    mu5 = __$._z(),
    gu5 = A => {
      let K;
      if (typeof A === "string") K = (0, mu5.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, Bu5.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  wl8.toBase64 = gu5;
});

// Register to shared state
__$.Jl8 = Jl8;
