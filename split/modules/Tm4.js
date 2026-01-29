// Module: Tm4
// Dependencies: N26

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tm4 = v(fm4 => {
  Object.defineProperty(fm4, "__esModule", {
    value: !0
  });
  fm4.fromBase64 = void 0;
  var KI9 = __$.N26(),
    qI9 = /^[A-Za-z0-9+/]*={0,2}$/,
    YI9 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!qI9.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, KI9.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  fm4.fromBase64 = YI9;
});

// Register to shared state
__$.Tm4 = Tm4;
