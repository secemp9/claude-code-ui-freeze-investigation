// Module: xg7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xg7 = v(hg7 => {
  Object.defineProperty(hg7, "__esModule", {
    value: !0
  });
  hg7.hexToBinary = void 0;
  function Sg7(A) {
    if (A >= 48 && A <= 57) return A - 48;
    if (A >= 97 && A <= 102) return A - 87;
    return A - 55;
  }
  function l62(A) {
    let K = new Uint8Array(A.length / 2),
      q = 0;
    for (let Y = 0; Y < A.length; Y += 2) {
      let z = Sg7(A.charCodeAt(Y)),
        w = Sg7(A.charCodeAt(Y + 1));
      K[q++] = z << 4 | w;
    }
    return K;
  }
  hg7.hexToBinary = l62;
});

// Register to shared state
__$.xg7 = xg7;
