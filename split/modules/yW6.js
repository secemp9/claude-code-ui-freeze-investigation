// Module: yW6
// Dependencies: G$, l01, OZA, XZA, $ZA, i01, n01, r01, du, _ZA
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yW6 = k(() => {
  __$.G$ = class G$ extends Error {
    constructor(A, K) {
      super(A);
      this.errorUri = K, this.name = this.constructor.name;
    }
    toResponseObject() {
      let A = {
        error: this.errorCode,
        error_description: this.message
      };
      if (this.errorUri) A.error_uri = this.errorUri;
      return A;
    }
    get errorCode() {
      return this.constructor.errorCode;
    }
  };
  __$.l01 = class l01 extends __$.G$ {};
  __$.l01.errorCode = "invalid_request";
  __$.OZA = class OZA extends __$.G$ {};
  __$.OZA.errorCode = "invalid_client";
  __$.XZA = class XZA extends __$.G$ {};
  __$.XZA.errorCode = "invalid_grant";
  __$.$ZA = class $ZA extends __$.G$ {};
  __$.$ZA.errorCode = "unauthorized_client";
  __$.i01 = class i01 extends __$.G$ {};
  __$.i01.errorCode = "unsupported_grant_type";
  __$.n01 = class n01 extends __$.G$ {};
  __$.n01.errorCode = "invalid_scope";
  __$.r01 = class r01 extends __$.G$ {};
  __$.r01.errorCode = "access_denied";
  __$.du = class du extends __$.G$ {};
  __$.du.errorCode = "server_error";
  __$._ZA = class _ZA extends __$.G$ {};
  __$._ZA.errorCode = "temporarily_unavailable";
  __$.o01 = class o01 extends __$.G$ {};
  __$.o01.errorCode = "unsupported_response_type";
  __$.a01 = class a01 extends __$.G$ {};
  __$.a01.errorCode = "unsupported_token_type";
  __$.s01 = class s01 extends __$.G$ {};
  __$.s01.errorCode = "invalid_token";
  __$.t01 = class t01 extends __$.G$ {};
  __$.t01.errorCode = "method_not_allowed";
  __$.GZA = class GZA extends __$.G$ {};
  __$.GZA.errorCode = "too_many_requests";
  __$.ZZA = class ZZA extends __$.G$ {};
  __$.ZZA.errorCode = "invalid_client_metadata";
  __$.e01 = class e01 extends __$.G$ {};
  __$.e01.errorCode = "insufficient_scope";
  __$.AX1 = class AX1 extends __$.G$ {};
  __$.AX1.errorCode = "invalid_target";
  __$.XJ7 = {
    [__$.l01.errorCode]: __$.l01,
    [__$.OZA.errorCode]: __$.OZA,
    [__$.XZA.errorCode]: __$.XZA,
    [__$.$ZA.errorCode]: __$.$ZA,
    [__$.i01.errorCode]: __$.i01,
    [__$.n01.errorCode]: __$.n01,
    [__$.r01.errorCode]: __$.r01,
    [__$.du.errorCode]: __$.du,
    [__$._ZA.errorCode]: __$._ZA,
    [__$.o01.errorCode]: __$.o01,
    [__$.a01.errorCode]: __$.a01,
    [__$.s01.errorCode]: __$.s01,
    [__$.t01.errorCode]: __$.t01,
    [__$.GZA.errorCode]: __$.GZA,
    [__$.ZZA.errorCode]: __$.ZZA,
    [__$.e01.errorCode]: __$.e01,
    [__$.AX1.errorCode]: __$.AX1
  };
});

// Register to shared state
__$.yW6 = yW6;
