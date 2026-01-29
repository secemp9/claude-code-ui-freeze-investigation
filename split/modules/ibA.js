// Module: ibA
// Dependencies: zH, DC, RH1, U17, RX6, yX6, IX6, Bo, CH1, c8Y
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ibA = k(() => {
  __$.zH();
  __$.DC();
  __$.RH1(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.U17 = [__$.RX6, __$.yX6, __$.IX6, __$.Bo, __$.CH1], __$.c8Y = ["message_only", "additional_action", "basic_action", "user_password_expired", "consent_required", "bad_token"], __$.yH1 = {
    [__$.uo]: "No refresh token found in the cache. Please sign-in.",
    [__$.cbA]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
    [__$.lbA]: "Refresh token has expired.",
    [__$.Bo]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve.",
    [__$.CH1]: "`canShowUI` flag in Edge was set to false. User interaction required on web page. Please invoke an interactive API to resolve."
  }, __$.SX6 = {
    noTokensFoundError: {
      code: __$.uo,
      desc: __$.yH1[__$.uo]
    },
    native_account_unavailable: {
      code: __$.cbA,
      desc: __$.yH1[__$.cbA]
    },
    bad_token: {
      code: __$.Bo,
      desc: __$.yH1[__$.Bo]
    }
  };
  __$.FT = class FT extends __$.V5 {
    constructor(A, K, q, Y, z, w, H, J) {
      super(A, K, q);
      Object.setPrototypeOf(this, __$.FT.prototype), this.timestamp = Y || __$.u6.EMPTY_STRING, this.traceId = z || __$.u6.EMPTY_STRING, this.correlationId = w || __$.u6.EMPTY_STRING, this.claims = H || __$.u6.EMPTY_STRING, this.name = "InteractionRequiredAuthError", this.errorNo = J;
    }
  };
});

// Register to shared state
__$.ibA = ibA;
