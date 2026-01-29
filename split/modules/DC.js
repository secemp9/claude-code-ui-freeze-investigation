// Module: DC
// Dependencies: zH, O06, sw1, nhA, rhA, X06, V5, u6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DC = k(() => {
  __$.zH();
  __$.O06(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.sw1 = {
    [__$.nhA]: "Unexpected error in authentication.",
    [__$.rhA]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }, __$.X06 = {
    unexpectedError: {
      code: __$.nhA,
      desc: __$.sw1[__$.nhA]
    },
    postRequestFailed: {
      code: __$.rhA,
      desc: __$.sw1[__$.rhA]
    }
  };
  __$.V5 = class V5 extends Error {
    constructor(A, K, q) {
      let Y = K ? `${A}: ${K}` : A;
      super(Y);
      Object.setPrototypeOf(this, __$.V5.prototype), this.errorCode = A || __$.u6.EMPTY_STRING, this.errorMessage = K || __$.u6.EMPTY_STRING, this.subError = q || __$.u6.EMPTY_STRING, this.name = "AuthError";
    }
    setCorrelationId(A) {
      this.correlationId = A;
    }
  };
});

// Register to shared state
__$.DC = DC;
