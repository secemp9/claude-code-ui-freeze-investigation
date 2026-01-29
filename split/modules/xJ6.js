// Module: xJ6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xJ6 = v(fs4 => {
  Object.defineProperty(fs4, "__esModule", {
    value: !0
  });
  fs4.InvalidSubjectTokenError = fs4.InvalidMessageFieldError = fs4.InvalidCodeFieldError = fs4.InvalidTokenTypeFieldError = fs4.InvalidExpirationTimeFieldError = fs4.InvalidSuccessFieldError = fs4.InvalidVersionFieldError = fs4.ExecutableResponseError = fs4.ExecutableResponse = void 0;
  var Gw1 = "urn:ietf:params:oauth:token-type:saml2",
    LJ6 = "urn:ietf:params:oauth:token-type:id_token",
    RJ6 = "urn:ietf:params:oauth:token-type:jwt";
  class Ps4 {
    constructor(A) {
      if (!A.version) throw new yJ6("Executable response must contain a 'version' field.");
      if (A.success === void 0) throw new IJ6("Executable response must contain a 'success' field.");
      if (this.version = A.version, this.success = A.success, this.success) {
        if (this.expirationTime = A.expiration_time, this.tokenType = A.token_type, this.tokenType !== Gw1 && this.tokenType !== LJ6 && this.tokenType !== RJ6) throw new SJ6(`Executable response must contain a 'token_type' field when successful and it must be one of ${LJ6}, ${RJ6}, or ${Gw1}.`);
        if (this.tokenType === Gw1) {
          if (!A.saml_response) throw new Zw1(`Executable response must contain a 'saml_response' field when token_type=${Gw1}.`);
          this.subjectToken = A.saml_response;
        } else {
          if (!A.id_token) throw new Zw1(`Executable response must contain a 'id_token' field when token_type=${LJ6} or ${RJ6}.`);
          this.subjectToken = A.id_token;
        }
      } else {
        if (!A.code) throw new hJ6("Executable response must contain a 'code' field when unsuccessful.");
        if (!A.message) throw new bJ6("Executable response must contain a 'message' field when unsuccessful.");
        this.errorCode = A.code, this.errorMessage = A.message;
      }
    }
    isValid() {
      return !this.isExpired() && this.success;
    }
    isExpired() {
      return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1000);
    }
  }
  fs4.ExecutableResponse = Ps4;
  class MU extends Error {
    constructor(A) {
      super(A);
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  fs4.ExecutableResponseError = MU;
  class yJ6 extends MU {}
  fs4.InvalidVersionFieldError = yJ6;
  class IJ6 extends MU {}
  fs4.InvalidSuccessFieldError = IJ6;
  class Vs4 extends MU {}
  fs4.InvalidExpirationTimeFieldError = Vs4;
  class SJ6 extends MU {}
  fs4.InvalidTokenTypeFieldError = SJ6;
  class hJ6 extends MU {}
  fs4.InvalidCodeFieldError = hJ6;
  class bJ6 extends MU {}
  fs4.InvalidMessageFieldError = bJ6;
  class Zw1 extends MU {}
  fs4.InvalidSubjectTokenError = Zw1;
});

// Register to shared state
__$.xJ6 = xJ6;
