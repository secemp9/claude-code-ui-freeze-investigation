// Module: CQ8
// Dependencies: hn1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CQ8 = v(EQ8 => {
  Object.defineProperty(EQ8, "__esModule", {
    value: !0
  });
  EQ8.fromBase64 = void 0;
  var zT5 = __$.hn1(),
    wT5 = /^[A-Za-z0-9+/]*={0,2}$/,
    HT5 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!wT5.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, zT5.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  EQ8.fromBase64 = HT5;
});

// Register to shared state
__$.CQ8 = CQ8;
