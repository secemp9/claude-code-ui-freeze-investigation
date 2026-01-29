// Module: km4
// Dependencies: N26, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var km4 = v(vm4 => {
  Object.defineProperty(vm4, "__esModule", {
    value: !0
  });
  vm4.toBase64 = void 0;
  var zI9 = __$.N26(),
    wI9 = __$._z(),
    HI9 = A => {
      let K;
      if (typeof A === "string") K = (0, wI9.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, zI9.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  vm4.toBase64 = HI9;
});

// Register to shared state
__$.km4 = km4;
