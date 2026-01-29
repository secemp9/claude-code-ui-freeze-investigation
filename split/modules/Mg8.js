// Module: Mg8
// Dependencies: Di1, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mg8 = v(Dg8 => {
  Object.defineProperty(Dg8, "__esModule", {
    value: !0
  });
  Dg8.toBase64 = void 0;
  var lD5 = __$.Di1(),
    iD5 = __$._z(),
    nD5 = A => {
      let K;
      if (typeof A === "string") K = (0, iD5.fromUtf8)(A);else K = A;
      if (typeof K !== "object" || typeof K.byteOffset !== "number" || typeof K.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, lD5.fromArrayBuffer)(K.buffer, K.byteOffset, K.byteLength).toString("base64");
    };
  Dg8.toBase64 = nD5;
});

// Register to shared state
__$.Mg8 = Mg8;
