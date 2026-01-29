// Module: C17
// Dependencies: DC, E17, v06, T06, JH1, kbA, V5

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C17 = k(() => {
  __$.DC();
  __$.E17(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.v06 = {
    [__$.T06]: "Exceeded cache storage capacity.",
    [__$.JH1]: "Unexpected error occurred when using cache storage."
  };
  __$.kbA = class kbA extends __$.V5 {
    constructor(A, K) {
      let q = K || (__$.v06[A] ? __$.v06[A] : __$.v06[__$.JH1]);
      super(`${A}: ${q}`);
      Object.setPrototypeOf(this, __$.kbA.prototype), this.name = "CacheError", this.errorCode = A, this.errorMessage = q;
    }
  };
});

// Register to shared state
__$.C17 = C17;
