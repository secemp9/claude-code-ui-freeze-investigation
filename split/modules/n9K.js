// Module: n9K
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var n9K = v(l9K => {
  Object.defineProperty(l9K, "__esModule", {
    value: !0
  });
  l9K.hyphenate = l9K.parse = void 0;
  function DT2(A) {
    let K = [],
      q = 0,
      Y = 0,
      z = 0,
      w = 0,
      H = 0,
      J = null;
    while (q < A.length) switch (A.charCodeAt(q++)) {
      case 40:
        Y++;
        break;
      case 41:
        Y--;
        break;
      case 39:
        if (z === 0) z = 39;else if (z === 39 && A.charCodeAt(q - 1) !== 92) z = 0;
        break;
      case 34:
        if (z === 0) z = 34;else if (z === 34 && A.charCodeAt(q - 1) !== 92) z = 0;
        break;
      case 58:
        if (!J && Y === 0 && z === 0) J = c9K(A.substring(H, q - 1).trim()), w = q;
        break;
      case 59:
        if (J && w > 0 && Y === 0 && z === 0) {
          let X = A.substring(w, q - 1).trim();
          K.push(J, X), H = q, w = 0, J = null;
        }
        break;
    }
    if (J && w) {
      let O = A.slice(w).trim();
      K.push(J, O);
    }
    return K;
  }
  l9K.parse = DT2;
  function c9K(A) {
    return A.replace(/[a-z][A-Z]/g, K => {
      return K.charAt(0) + "-" + K.charAt(1);
    }).toLowerCase();
  }
  l9K.hyphenate = c9K;
});

// Register to shared state
__$.n9K = n9K;
