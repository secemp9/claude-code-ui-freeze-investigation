// Module: YV7
// Dependencies: JV6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YV7 = v(KV7 => {
  Object.defineProperty(KV7, "__esModule", {
    value: !0
  });
  KV7.fromBase64 = void 0;
  var XSY = __$.JV6(),
    $SY = /^[A-Za-z0-9+/]*={0,2}$/,
    _SY = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!$SY.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, XSY.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  KV7.fromBase64 = _SY;
});

// Register to shared state
__$.YV7 = YV7;
