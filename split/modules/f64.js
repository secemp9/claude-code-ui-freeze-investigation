// Module: f64
// Dependencies: mA6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var f64 = v(P64 => {
  Object.defineProperty(P64, "__esModule", {
    value: !0
  });
  P64.fromBase64 = void 0;
  var mf3 = __$.mA6(),
    gf3 = /^[A-Za-z0-9+/]*={0,2}$/,
    Ff3 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!gf3.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, mf3.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  P64.fromBase64 = Ff3;
});

// Register to shared state
__$.f64 = f64;
