// Module: iOK
// Dependencies: _P, sy2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iOK = k(() => {
  __$._P();
  __$.sy2 = new Map([["grep", (A, K, q) => ({
    isError: A >= 2,
    message: A === 1 ? "No matches found" : void 0
  })], ["rg", (A, K, q) => ({
    isError: A >= 2,
    message: A === 1 ? "No matches found" : void 0
  })], ["find", (A, K, q) => ({
    isError: A >= 2,
    message: A === 1 ? "Some directories were inaccessible" : void 0
  })], ["diff", (A, K, q) => ({
    isError: A >= 2,
    message: A === 1 ? "Files differ" : void 0
  })], ["test", (A, K, q) => ({
    isError: A >= 2,
    message: A === 1 ? "Condition is false" : void 0
  })], ["[", (A, K, q) => ({
    isError: A >= 2,
    message: A === 1 ? "Condition is false" : void 0
  })]]);
});

// Register to shared state
__$.iOK = iOK;
