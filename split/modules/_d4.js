// Module: _d4
// Dependencies: N8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _d4 = v(Xd4 => {
  Object.defineProperty(Xd4, "__esModule", {
    value: !0
  });
  Xd4.fromBase64 = void 0;
  var UU9 = __$.N8A(),
    pU9 = /^[A-Za-z0-9+/]*={0,2}$/,
    dU9 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!pU9.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, UU9.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  Xd4.fromBase64 = dU9;
});

// Register to shared state
__$._d4 = _d4;
