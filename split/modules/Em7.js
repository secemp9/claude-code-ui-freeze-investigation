// Module: Em7
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Em7 = v(Tm7 => {
  Object.defineProperty(Tm7, "__esModule", {
    value: !0
  });
  Tm7.createLoggingPartialSuccessResponseHandler = void 0;
  var _62 = __$.RK();
  function G62(A) {
    return Object.prototype.hasOwnProperty.call(A, "partialSuccess");
  }
  function Z62() {
    return {
      handleResponse(A) {
        if (A == null || !G62(A) || A.partialSuccess == null || Object.keys(A.partialSuccess).length === 0) return;
        _62.diag.warn("Received Partial Success response:", JSON.stringify(A.partialSuccess));
      }
    };
  }
  Tm7.createLoggingPartialSuccessResponseHandler = Z62;
});

// Register to shared state
__$.Em7 = Em7;
