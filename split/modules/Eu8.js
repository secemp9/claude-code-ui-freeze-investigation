// Module: Eu8
// Dependencies: w61

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Eu8 = v(Tu8 => {
  Object.defineProperty(Tu8, "__esModule", {
    value: !0
  });
  Tu8.fromBase64 = void 0;
  var G$5 = __$.w61(),
    Z$5 = /^[A-Za-z0-9+/]*={0,2}$/,
    W$5 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!Z$5.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, G$5.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  Tu8.fromBase64 = W$5;
});

// Register to shared state
__$.Eu8 = Eu8;
