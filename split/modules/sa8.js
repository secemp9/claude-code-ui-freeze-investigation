// Module: sa8
// Dependencies: ys1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sa8 = v(oa8 => {
  Object.defineProperty(oa8, "__esModule", {
    value: !0
  });
  oa8.fromBase64 = void 0;
  var pn5 = __$.ys1(),
    dn5 = /^[A-Za-z0-9+/]*={0,2}$/,
    cn5 = A => {
      if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
      if (!dn5.exec(A)) throw TypeError("Invalid base64 string.");
      let K = (0, pn5.fromString)(A, "base64");
      return new Uint8Array(K.buffer, K.byteOffset, K.byteLength);
    };
  oa8.fromBase64 = cn5;
});

// Register to shared state
__$.sa8 = sa8;
