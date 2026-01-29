// Module: ZW1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZW1 = v(UI7 => {
  Object.defineProperty(UI7, "__esModule", {
    value: !0
  });
  UI7._isTypeMatch = UI7._typeOf = void 0;
  function doY(A) {
    return Array.isArray(A) ? "array" : typeof A;
  }
  UI7._typeOf = doY;
  function coY(A, K) {
    let q = Y => Array.isArray(Y) ? "array" : typeof Y;
    return q(A) === q(K);
  }
  UI7._isTypeMatch = coY;
});

// Register to shared state
__$.ZW1 = ZW1;
