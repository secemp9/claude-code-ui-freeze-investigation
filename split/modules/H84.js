// Module: H84
// Dependencies: H16

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var H84 = v(z84 => {
  Object.defineProperty(z84, "__esModule", {
    value: !0
  });
  z84.fromBase64 = void 0;
  var Hv3 = __$.H16(),
    Jv3 = /^[A-Za-z0-9+/]*={0,2}$/,
    Ov3 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!Jv3.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, Hv3.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  z84.fromBase64 = Ov3;
});

// Register to shared state
__$.H84 = H84;
