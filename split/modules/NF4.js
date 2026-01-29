// Module: NF4
// Dependencies: qz6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NF4 = v(VF4 => {
  Object.defineProperty(VF4, "__esModule", {
    value: !0
  });
  VF4.fromBase64 = void 0;
  var ob9 = __$.qz6(),
    ab9 = /^[A-Za-z0-9+/]*={0,2}$/,
    sb9 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!ab9.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, ob9.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  VF4.fromBase64 = sb9;
});

// Register to shared state
__$.NF4 = NF4;
