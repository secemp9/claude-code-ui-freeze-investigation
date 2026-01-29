// Module: TM
// Dependencies: wq, z1Y, khA, Y1Y, xt4, HO6, JO6, w1Y, PU

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TM = k(() => {
  __$.wq = class wq extends Error {
    constructor(A, K) {
      super(A, K);
      this.name = __$.z1Y;
    }
  };
  __$.khA = class khA extends Error {
    constructor(A, K, q) {
      let Y = {
        error: "unknown",
        errorDescription: "An unknown error occurred and no additional details are available."
      };
      if (__$.Y1Y(K)) Y = __$.xt4(K);else if (typeof K === "string") try {
        let z = JSON.parse(K);
        Y = __$.xt4(z);
      } catch (z) {
        if (A === 400) Y = {
          error: "invalid_request",
          errorDescription: `The service indicated that the request was invalid.

${K}`
        };else Y = {
          error: "unknown_error",
          errorDescription: `An unknown error has occurred. Response body:

${K}`
        };
      } else Y = {
        error: "unknown_error",
        errorDescription: "An unknown error occurred and no additional details are available."
      };
      super(`${Y.error} Status code: ${A}
More details:
${Y.errorDescription},`, q);
      this.statusCode = A, this.errorResponse = Y, this.name = __$.HO6;
    }
  };
  __$.JO6 = class JO6 extends Error {
    constructor(A, K) {
      let q = A.join(`
`);
      super(`${K}
${q}`);
      this.errors = A, this.name = __$.w1Y;
    }
  };
  __$.PU = class PU extends Error {
    constructor(A) {
      super(A.message, A.cause ? {
        cause: A.cause
      } : void 0);
      this.scopes = A.scopes, this.getTokenOptions = A.getTokenOptions, this.name = "AuthenticationRequiredError";
    }
  };
});

// Register to shared state
__$.TM = TM;
