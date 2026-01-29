// Module: Wg8
// Dependencies: Di1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wg8 = v(Gg8 => {
  Object.defineProperty(Gg8, "__esModule", {
    value: !0
  });
  Gg8.fromBase64 = void 0;
  var pD5 = __$.Di1(),
    dD5 = /^[A-Za-z0-9+/]*={0,2}$/,
    cD5 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!dD5.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, pD5.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  Gg8.fromBase64 = cD5;
});

// Register to shared state
__$.Wg8 = Wg8;
