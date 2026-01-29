// Module: gs4
// Dependencies: Du, XJ6, oy, Zo

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gs4 = v(Bs4 => {
  Object.defineProperty(Bs4, "__esModule", {
    value: !0
  });
  Bs4.ExternalAccountAuthorizedUserClient = Bs4.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
  var KAY = __$.Du(),
    xs4 = __$.XJ6(),
    qAY = __$.oy(),
    YAY = CA("stream"),
    zAY = __$.Zo();
  Bs4.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
  var wAY = "https://sts.{universeDomain}/v1/oauthtoken";
  class FJ6 extends xs4.OAuthClientAuthHandler {
    constructor(A, K, q) {
      super(q);
      this.url = A, this.transporter = K;
    }
    async refreshToken(A, K) {
      let q = new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: A
        }),
        Y = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...K
        },
        z = {
          ...FJ6.RETRY_CONFIG,
          url: this.url,
          method: "POST",
          headers: Y,
          data: q.toString(),
          responseType: "json"
        };
      this.applyClientAuthenticationOptions(z);
      try {
        let w = await this.transporter.request(z),
          H = w.data;
        return H.res = w, H;
      } catch (w) {
        if (w instanceof qAY.GaxiosError && w.response) throw (0, xs4.getErrorFromOAuthErrorResponse)(w.response.data, w);
        throw w;
      }
    }
  }
  class us4 extends KAY.AuthClient {
    constructor(A, K) {
      var q;
      super({
        ...A,
        ...K
      });
      if (A.universe_domain) this.universeDomain = A.universe_domain;
      this.refreshToken = A.refresh_token;
      let Y = {
        confidentialClientType: "basic",
        clientId: A.client_id,
        clientSecret: A.client_secret
      };
      if (this.externalAccountAuthorizedUserHandler = new FJ6((q = A.token_url) !== null && q !== void 0 ? q : wAY.replace("{universeDomain}", this.universeDomain), this.transporter, Y), this.cachedAccessToken = null, this.quotaProjectId = A.quota_project_id, typeof (K === null || K === void 0 ? void 0 : K.eagerRefreshThresholdMillis) !== "number") this.eagerRefreshThresholdMillis = zAY.EXPIRATION_TIME_OFFSET;else this.eagerRefreshThresholdMillis = K.eagerRefreshThresholdMillis;
      this.forceRefreshOnFailure = !!(K === null || K === void 0 ? void 0 : K.forceRefreshOnFailure);
    }
    async getAccessToken() {
      if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) await this.refreshAccessTokenAsync();
      return {
        token: this.cachedAccessToken.access_token,
        res: this.cachedAccessToken.res
      };
    }
    async getRequestHeaders() {
      let K = {
        Authorization: `Bearer ${(await this.getAccessToken()).token}`
      };
      return this.addSharedMetadataHeaders(K);
    }
    request(A, K) {
      if (K) this.requestAsync(A).then(q => K(null, q), q => {
        return K(q, q.response);
      });else return this.requestAsync(A);
    }
    async requestAsync(A, K = !1) {
      let q;
      try {
        let Y = await this.getRequestHeaders();
        if (A.headers = A.headers || {}, Y && Y["x-goog-user-project"]) A.headers["x-goog-user-project"] = Y["x-goog-user-project"];
        if (Y && Y.Authorization) A.headers.Authorization = Y.Authorization;
        q = await this.transporter.request(A);
      } catch (Y) {
        let z = Y.response;
        if (z) {
          let w = z.status,
            H = z.config.data instanceof YAY.Readable;
          if (!K && (w === 401 || w === 403) && !H && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(A, !0);
        }
        throw Y;
      }
      return q;
    }
    async refreshAccessTokenAsync() {
      let A = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
      if (this.cachedAccessToken = {
        access_token: A.access_token,
        expiry_date: new Date().getTime() + A.expires_in * 1000,
        res: A.res
      }, A.refresh_token !== void 0) this.refreshToken = A.refresh_token;
      return this.cachedAccessToken;
    }
    isExpired(A) {
      let K = new Date().getTime();
      return A.expiry_date ? K >= A.expiry_date - this.eagerRefreshThresholdMillis : !1;
    }
  }
  Bs4.ExternalAccountAuthorizedUserClient = us4;
});

// Register to shared state
__$.gs4 = gs4;
