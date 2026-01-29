// Module: Ui8
// Dependencies: ka1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ui8 = v(Fi8 => {
  Object.defineProperty(Fi8, "__esModule", {
    value: !0
  });
  Fi8.fromBase64 = void 0;
  var oF5 = __$.ka1(),
    aF5 = /^[A-Za-z0-9+/]*={0,2}$/,
    sF5 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!aF5.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, oF5.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  Fi8.fromBase64 = sF5;
});

// Register to shared state
__$.Ui8 = Ui8;
