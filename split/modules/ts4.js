// Module: ts4
// Dependencies: Du, _J6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ts4 = v(as4 => {
  Object.defineProperty(as4, "__esModule", {
    value: !0
  });
  as4.DownscopedClient = as4.EXPIRATION_TIME_OFFSET = as4.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
  var DAY = CA("stream"),
    jAY = __$.Du(),
    MAY = __$._J6(),
    PAY = "urn:ietf:params:oauth:grant-type:token-exchange",
    VAY = "urn:ietf:params:oauth:token-type:access_token",
    fAY = "urn:ietf:params:oauth:token-type:access_token";
  as4.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
  as4.EXPIRATION_TIME_OFFSET = 300000;
  class os4 extends jAY.AuthClient {
    constructor(A, K, q, Y) {
      super({
        ...q,
        quotaProjectId: Y
      });
      if (this.authClient = A, this.credentialAccessBoundary = K, K.accessBoundary.accessBoundaryRules.length === 0) throw Error("At least one access boundary rule needs to be defined.");else if (K.accessBoundary.accessBoundaryRules.length > as4.MAX_ACCESS_BOUNDARY_RULES_COUNT) throw Error(`The provided access boundary has more than ${as4.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
      for (let z of K.accessBoundary.accessBoundaryRules) if (z.availablePermissions.length === 0) throw Error("At least one permission should be defined in access boundary rules.");
      this.stsCredential = new MAY.StsCredentials(`https://sts.${this.universeDomain}/v1/token`), this.cachedDownscopedAccessToken = null;
    }
    setCredentials(A) {
      if (!A.expiry_date) throw Error("The access token expiry_date field is missing in the provided credentials.");
      super.setCredentials(A), this.cachedDownscopedAccessToken = A;
    }
    async getAccessToken() {
      if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) await this.refreshAccessTokenAsync();
      return {
        token: this.cachedDownscopedAccessToken.access_token,
        expirationTime: this.cachedDownscopedAccessToken.expiry_date,
        res: this.cachedDownscopedAccessToken.res
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
            H = z.config.data instanceof DAY.Readable;
          if (!K && (w === 401 || w === 403) && !H && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(A, !0);
        }
        throw Y;
      }
      return q;
    }
    async refreshAccessTokenAsync() {
      var A;
      let K = (await this.authClient.getAccessToken()).token,
        q = {
          grantType: PAY,
          requestedTokenType: VAY,
          subjectToken: K,
          subjectTokenType: fAY
        },
        Y = await this.stsCredential.exchangeToken(q, void 0, this.credentialAccessBoundary),
        z = ((A = this.authClient.credentials) === null || A === void 0 ? void 0 : A.expiry_date) || null,
        w = Y.expires_in ? new Date().getTime() + Y.expires_in * 1000 : z;
      return this.cachedDownscopedAccessToken = {
        access_token: Y.access_token,
        expiry_date: w,
        res: Y.res
      }, this.credentials = {}, Object.assign(this.credentials, this.cachedDownscopedAccessToken), delete this.credentials.res, this.emit("tokens", {
        refresh_token: null,
        expiry_date: this.cachedDownscopedAccessToken.expiry_date,
        access_token: this.cachedDownscopedAccessToken.access_token,
        token_type: "Bearer",
        id_token: null
      }), this.cachedDownscopedAccessToken;
    }
    isExpired(A) {
      let K = new Date().getTime();
      return A.expiry_date ? K >= A.expiry_date - this.eagerRefreshThresholdMillis : !1;
    }
  }
  as4.DownscopedClient = os4;
});

// Register to shared state
__$.ts4 = ts4;
