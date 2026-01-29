// Module: zl8
// Dependencies: so1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zl8 = v(ql8 => {
  Object.defineProperty(ql8, "__esModule", {
    value: !0
  });
  ql8.fromBase64 = void 0;
  var bu5 = __$.so1(),
    xu5 = /^[A-Za-z0-9+/]*={0,2}$/,
    uu5 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!xu5.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, bu5.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  ql8.fromBase64 = uu5;
});

// Register to shared state
__$.zl8 = zl8;
