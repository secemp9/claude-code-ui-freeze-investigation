// Module: pH6
// Dependencies: B7A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pH6 = v(Uo4 => {
  Object.defineProperty(Uo4, "__esModule", {
    value: !0
  });
  Uo4.IdTokenClient = void 0;
  var os9 = __$.B7A();
  class Qo4 extends os9.OAuth2Client {
    constructor(A) {
      super(A);
      this.targetAudience = A.targetAudience, this.idTokenProvider = A.idTokenProvider;
    }
    async getRequestMetadataAsync(A) {
      if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
        let q = await this.idTokenProvider.fetchIdToken(this.targetAudience);
        this.credentials = {
          id_token: q,
          expiry_date: this.getIdTokenExpiryDate(q)
        };
      }
      return {
        headers: {
          Authorization: "Bearer " + this.credentials.id_token
        }
      };
    }
    getIdTokenExpiryDate(A) {
      let K = A.split(".")[1];
      if (K) return JSON.parse(Buffer.from(K, "base64").toString("ascii")).exp * 1000;
    }
  }
  Uo4.IdTokenClient = Qo4;
});

// Register to shared state
__$.pH6 = pH6;
