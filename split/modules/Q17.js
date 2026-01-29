// Module: Q17
// Dependencies: DC, kH1, V5

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Q17 = k(() => {
  __$.DC(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.kH1 = class kH1 extends __$.V5 {
    constructor(A, K, q) {
      super(A.errorCode, A.errorMessage, A.subError);
      Object.setPrototypeOf(this, __$.kH1.prototype), this.name = "NetworkError", this.error = A, this.httpStatus = K, this.responseHeaders = q;
    }
  };
});

// Register to shared state
__$.Q17 = Q17;
