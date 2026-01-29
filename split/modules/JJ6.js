// Module: JJ6
// Dependencies: B7A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JJ6 = v(Ba4 => {
  Object.defineProperty(Ba4, "__esModule", {
    value: !0
  });
  Ba4.UserRefreshClient = Ba4.USER_REFRESH_ACCOUNT_TYPE = void 0;
  var et9 = __$.B7A(),
    Ae9 = CA("querystring");
  Ba4.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
  class Ow1 extends et9.OAuth2Client {
    constructor(A, K, q, Y, z) {
      let w = A && typeof A === "object" ? A : {
        clientId: A,
        clientSecret: K,
        refreshToken: q,
        eagerRefreshThresholdMillis: Y,
        forceRefreshOnFailure: z
      };
      super(w);
      this._refreshToken = w.refreshToken, this.credentials.refresh_token = w.refreshToken;
    }
    async refreshTokenNoCache(A) {
      return super.refreshTokenNoCache(this._refreshToken);
    }
    async fetchIdToken(A) {
      return (await this.transporter.request({
        ...Ow1.RETRY_CONFIG,
        url: this.endpoints.oauth2TokenUrl,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: (0, Ae9.stringify)({
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token",
          refresh_token: this._refreshToken,
          target_audience: A
        })
      })).data.id_token;
    }
    fromJSON(A) {
      if (!A) throw Error("Must pass in a JSON object containing the user refresh token");
      if (A.type !== "authorized_user") throw Error('The incoming JSON object does not have the "authorized_user" type');
      if (!A.client_id) throw Error("The incoming JSON object does not contain a client_id field");
      if (!A.client_secret) throw Error("The incoming JSON object does not contain a client_secret field");
      if (!A.refresh_token) throw Error("The incoming JSON object does not contain a refresh_token field");
      this._clientId = A.client_id, this._clientSecret = A.client_secret, this._refreshToken = A.refresh_token, this.credentials.refresh_token = A.refresh_token, this.quotaProjectId = A.quota_project_id, this.universeDomain = A.universe_domain || this.universeDomain;
    }
    fromStream(A, K) {
      if (K) this.fromStreamAsync(A).then(() => K(), K);else return this.fromStreamAsync(A);
    }
    async fromStreamAsync(A) {
      return new Promise((K, q) => {
        if (!A) return q(Error("Must pass in a stream containing the user refresh token."));
        let Y = "";
        A.setEncoding("utf8").on("error", q).on("data", z => Y += z).on("end", () => {
          try {
            let z = JSON.parse(Y);
            return this.fromJSON(z), K();
          } catch (z) {
            return q(z);
          }
        });
      });
    }
    static fromJSON(A) {
      let K = new Ow1();
      return K.fromJSON(A), K;
    }
  }
  Ba4.UserRefreshClient = Ow1;
});

// Register to shared state
__$.JJ6 = JJ6;
