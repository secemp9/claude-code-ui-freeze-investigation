// Module: B7A
// Dependencies: oy, Kw1, W_A, Du, gH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B7A = v(xo4 => {
  Object.defineProperty(xo4, "__esModule", {
    value: !0
  });
  xo4.OAuth2Client = xo4.ClientAuthentication = xo4.CertificateFormat = xo4.CodeChallengeMethod = void 0;
  var Fs9 = __$.oy(),
    FH6 = CA("querystring"),
    Qs9 = CA("stream"),
    Us9 = __$.Kw1(),
    QH6 = __$.W_A(),
    ps9 = __$.Du(),
    ds9 = __$.gH6(),
    bo4;
  (function (A) {
    A.Plain = "plain", A.S256 = "S256";
  })(bo4 || (xo4.CodeChallengeMethod = bo4 = {}));
  var WU;
  (function (A) {
    A.PEM = "PEM", A.JWK = "JWK";
  })(WU || (xo4.CertificateFormat = WU = {}));
  var ZhA;
  (function (A) {
    A.ClientSecretPost = "ClientSecretPost", A.ClientSecretBasic = "ClientSecretBasic", A.None = "None";
  })(ZhA || (xo4.ClientAuthentication = ZhA = {}));
  class NM extends ps9.AuthClient {
    constructor(A, K, q) {
      let Y = A && typeof A === "object" ? A : {
        clientId: A,
        clientSecret: K,
        redirectUri: q
      };
      super(Y);
      this.certificateCache = {}, this.certificateExpiry = null, this.certificateCacheFormat = WU.PEM, this.refreshTokenPromises = new Map(), this._clientId = Y.clientId, this._clientSecret = Y.clientSecret, this.redirectUri = Y.redirectUri, this.endpoints = {
        tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
        oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
        oauth2TokenUrl: "https://oauth2.googleapis.com/token",
        oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
        oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
        oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
        oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
        ...Y.endpoints
      }, this.clientAuthentication = Y.clientAuthentication || ZhA.ClientSecretPost, this.issuers = Y.issuers || ["accounts.google.com", "https://accounts.google.com", this.universeDomain];
    }
    generateAuthUrl(A = {}) {
      if (A.code_challenge_method && !A.code_challenge) throw Error("If a code_challenge_method is provided, code_challenge must be included.");
      if (A.response_type = A.response_type || "code", A.client_id = A.client_id || this._clientId, A.redirect_uri = A.redirect_uri || this.redirectUri, Array.isArray(A.scope)) A.scope = A.scope.join(" ");
      return this.endpoints.oauth2AuthBaseUrl.toString() + "?" + FH6.stringify(A);
    }
    generateCodeVerifier() {
      throw Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.");
    }
    async generateCodeVerifierAsync() {
      let A = (0, QH6.createCrypto)(),
        q = A.randomBytesBase64(96).replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-"),
        z = (await A.sha256DigestBase64(q)).split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
      return {
        codeVerifier: q,
        codeChallenge: z
      };
    }
    getToken(A, K) {
      let q = typeof A === "string" ? {
        code: A
      } : A;
      if (K) this.getTokenAsync(q).then(Y => K(null, Y.tokens, Y.res), Y => K(Y, null, Y.response));else return this.getTokenAsync(q);
    }
    async getTokenAsync(A) {
      let K = this.endpoints.oauth2TokenUrl.toString(),
        q = {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        Y = {
          client_id: A.client_id || this._clientId,
          code_verifier: A.codeVerifier,
          code: A.code,
          grant_type: "authorization_code",
          redirect_uri: A.redirect_uri || this.redirectUri
        };
      if (this.clientAuthentication === ZhA.ClientSecretBasic) {
        let H = Buffer.from(`${this._clientId}:${this._clientSecret}`);
        q.Authorization = `Basic ${H.toString("base64")}`;
      }
      if (this.clientAuthentication === ZhA.ClientSecretPost) Y.client_secret = this._clientSecret;
      let z = await this.transporter.request({
          ...NM.RETRY_CONFIG,
          method: "POST",
          url: K,
          data: FH6.stringify(Y),
          headers: q
        }),
        w = z.data;
      if (z.data && z.data.expires_in) w.expiry_date = new Date().getTime() + z.data.expires_in * 1000, delete w.expires_in;
      return this.emit("tokens", w), {
        tokens: w,
        res: z
      };
    }
    async refreshToken(A) {
      if (!A) return this.refreshTokenNoCache(A);
      if (this.refreshTokenPromises.has(A)) return this.refreshTokenPromises.get(A);
      let K = this.refreshTokenNoCache(A).then(q => {
        return this.refreshTokenPromises.delete(A), q;
      }, q => {
        throw this.refreshTokenPromises.delete(A), q;
      });
      return this.refreshTokenPromises.set(A, K), K;
    }
    async refreshTokenNoCache(A) {
      var K;
      if (!A) throw Error("No refresh token is set.");
      let q = this.endpoints.oauth2TokenUrl.toString(),
        Y = {
          refresh_token: A,
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token"
        },
        z;
      try {
        z = await this.transporter.request({
          ...NM.RETRY_CONFIG,
          method: "POST",
          url: q,
          data: FH6.stringify(Y),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
      } catch (H) {
        if (H instanceof Fs9.GaxiosError && H.message === "invalid_grant" && ((K = H.response) === null || K === void 0 ? void 0 : K.data) && /ReAuth/i.test(H.response.data.error_description)) H.message = JSON.stringify(H.response.data);
        throw H;
      }
      let w = z.data;
      if (z.data && z.data.expires_in) w.expiry_date = new Date().getTime() + z.data.expires_in * 1000, delete w.expires_in;
      return this.emit("tokens", w), {
        tokens: w,
        res: z
      };
    }
    refreshAccessToken(A) {
      if (A) this.refreshAccessTokenAsync().then(K => A(null, K.credentials, K.res), A);else return this.refreshAccessTokenAsync();
    }
    async refreshAccessTokenAsync() {
      let A = await this.refreshToken(this.credentials.refresh_token),
        K = A.tokens;
      return K.refresh_token = this.credentials.refresh_token, this.credentials = K, {
        credentials: this.credentials,
        res: A.res
      };
    }
    getAccessToken(A) {
      if (A) this.getAccessTokenAsync().then(K => A(null, K.token, K.res), A);else return this.getAccessTokenAsync();
    }
    async getAccessTokenAsync() {
      if (!this.credentials.access_token || this.isTokenExpiring()) {
        if (!this.credentials.refresh_token) if (this.refreshHandler) {
          let q = await this.processAndValidateRefreshHandler();
          if (q === null || q === void 0 ? void 0 : q.access_token) return this.setCredentials(q), {
            token: this.credentials.access_token
          };
        } else throw Error("No refresh token or refresh handler callback is set.");
        let K = await this.refreshAccessTokenAsync();
        if (!K.credentials || K.credentials && !K.credentials.access_token) throw Error("Could not refresh access token.");
        return {
          token: K.credentials.access_token,
          res: K.res
        };
      } else return {
        token: this.credentials.access_token
      };
    }
    async getRequestHeaders(A) {
      return (await this.getRequestMetadataAsync(A)).headers;
    }
    async getRequestMetadataAsync(A) {
      let K = this.credentials;
      if (!K.access_token && !K.refresh_token && !this.apiKey && !this.refreshHandler) throw Error("No access, refresh token, API key or refresh handler callback is set.");
      if (K.access_token && !this.isTokenExpiring()) {
        K.token_type = K.token_type || "Bearer";
        let H = {
          Authorization: K.token_type + " " + K.access_token
        };
        return {
          headers: this.addSharedMetadataHeaders(H)
        };
      }
      if (this.refreshHandler) {
        let H = await this.processAndValidateRefreshHandler();
        if (H === null || H === void 0 ? void 0 : H.access_token) {
          this.setCredentials(H);
          let J = {
            Authorization: "Bearer " + this.credentials.access_token
          };
          return {
            headers: this.addSharedMetadataHeaders(J)
          };
        }
      }
      if (this.apiKey) return {
        headers: {
          "X-Goog-Api-Key": this.apiKey
        }
      };
      let q = null,
        Y = null;
      try {
        q = await this.refreshToken(K.refresh_token), Y = q.tokens;
      } catch (H) {
        let J = H;
        if (J.response && (J.response.status === 403 || J.response.status === 404)) J.message = `Could not refresh access token: ${J.message}`;
        throw J;
      }
      let z = this.credentials;
      z.token_type = z.token_type || "Bearer", Y.refresh_token = z.refresh_token, this.credentials = Y;
      let w = {
        Authorization: z.token_type + " " + Y.access_token
      };
      return {
        headers: this.addSharedMetadataHeaders(w),
        res: q.res
      };
    }
    static getRevokeTokenUrl(A) {
      return new NM().getRevokeTokenURL(A).toString();
    }
    getRevokeTokenURL(A) {
      let K = new URL(this.endpoints.oauth2RevokeUrl);
      return K.searchParams.append("token", A), K;
    }
    revokeToken(A, K) {
      let q = {
        ...NM.RETRY_CONFIG,
        url: this.getRevokeTokenURL(A).toString(),
        method: "POST"
      };
      if (K) this.transporter.request(q).then(Y => K(null, Y), K);else return this.transporter.request(q);
    }
    revokeCredentials(A) {
      if (A) this.revokeCredentialsAsync().then(K => A(null, K), A);else return this.revokeCredentialsAsync();
    }
    async revokeCredentialsAsync() {
      let A = this.credentials.access_token;
      if (this.credentials = {}, A) return this.revokeToken(A);else throw Error("No access token to revoke.");
    }
    request(A, K) {
      if (K) this.requestAsync(A).then(q => K(null, q), q => {
        return K(q, q.response);
      });else return this.requestAsync(A);
    }
    async requestAsync(A, K = !1) {
      let q;
      try {
        let Y = await this.getRequestMetadataAsync(A.url);
        if (A.headers = A.headers || {}, Y.headers && Y.headers["x-goog-user-project"]) A.headers["x-goog-user-project"] = Y.headers["x-goog-user-project"];
        if (Y.headers && Y.headers.Authorization) A.headers.Authorization = Y.headers.Authorization;
        if (this.apiKey) A.headers["X-Goog-Api-Key"] = this.apiKey;
        q = await this.transporter.request(A);
      } catch (Y) {
        let z = Y.response;
        if (z) {
          let w = z.status,
            H = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure),
            J = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler,
            O = z.config.data instanceof Qs9.Readable,
            X = w === 401 || w === 403;
          if (!K && X && !O && H) return await this.refreshAccessTokenAsync(), this.requestAsync(A, !0);else if (!K && X && !O && J) {
            let $ = await this.processAndValidateRefreshHandler();
            if ($ === null || $ === void 0 ? void 0 : $.access_token) this.setCredentials($);
            return this.requestAsync(A, !0);
          }
        }
        throw Y;
      }
      return q;
    }
    verifyIdToken(A, K) {
      if (K && typeof K !== "function") throw Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
      if (K) this.verifyIdTokenAsync(A).then(q => K(null, q), K);else return this.verifyIdTokenAsync(A);
    }
    async verifyIdTokenAsync(A) {
      if (!A.idToken) throw Error("The verifyIdToken method requires an ID Token");
      let K = await this.getFederatedSignonCertsAsync();
      return await this.verifySignedJwtWithCertsAsync(A.idToken, K.certs, A.audience, this.issuers, A.maxExpiry);
    }
    async getTokenInfo(A) {
      let {
          data: K
        } = await this.transporter.request({
          ...NM.RETRY_CONFIG,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${A}`
          },
          url: this.endpoints.tokenInfoUrl.toString()
        }),
        q = Object.assign({
          expiry_date: new Date().getTime() + K.expires_in * 1000,
          scopes: K.scope.split(" ")
        }, K);
      return delete q.expires_in, delete q.scope, q;
    }
    getFederatedSignonCerts(A) {
      if (A) this.getFederatedSignonCertsAsync().then(K => A(null, K.certs, K.res), A);else return this.getFederatedSignonCertsAsync();
    }
    async getFederatedSignonCertsAsync() {
      let A = new Date().getTime(),
        K = (0, QH6.hasBrowserCrypto)() ? WU.JWK : WU.PEM;
      if (this.certificateExpiry && A < this.certificateExpiry.getTime() && this.certificateCacheFormat === K) return {
        certs: this.certificateCache,
        format: K
      };
      let q, Y;
      switch (K) {
        case WU.PEM:
          Y = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
          break;
        case WU.JWK:
          Y = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
          break;
        default:
          throw Error(`Unsupported certificate format ${K}`);
      }
      try {
        q = await this.transporter.request({
          ...NM.RETRY_CONFIG,
          url: Y
        });
      } catch (O) {
        if (O instanceof Error) O.message = `Failed to retrieve verification certificates: ${O.message}`;
        throw O;
      }
      let z = q ? q.headers["cache-control"] : void 0,
        w = -1;
      if (z) {
        let X = new RegExp("max-age=([0-9]*)").exec(z);
        if (X && X.length === 2) w = Number(X[1]) * 1000;
      }
      let H = {};
      switch (K) {
        case WU.PEM:
          H = q.data;
          break;
        case WU.JWK:
          for (let O of q.data.keys) H[O.kid] = O;
          break;
        default:
          throw Error(`Unsupported certificate format ${K}`);
      }
      let J = new Date();
      return this.certificateExpiry = w === -1 ? null : new Date(J.getTime() + w), this.certificateCache = H, this.certificateCacheFormat = K, {
        certs: H,
        format: K,
        res: q
      };
    }
    getIapPublicKeys(A) {
      if (A) this.getIapPublicKeysAsync().then(K => A(null, K.pubkeys, K.res), A);else return this.getIapPublicKeysAsync();
    }
    async getIapPublicKeysAsync() {
      let A,
        K = this.endpoints.oauth2IapPublicKeyUrl.toString();
      try {
        A = await this.transporter.request({
          ...NM.RETRY_CONFIG,
          url: K
        });
      } catch (q) {
        if (q instanceof Error) q.message = `Failed to retrieve verification certificates: ${q.message}`;
        throw q;
      }
      return {
        pubkeys: A.data,
        res: A
      };
    }
    verifySignedJwtWithCerts() {
      throw Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.");
    }
    async verifySignedJwtWithCertsAsync(A, K, q, Y, z) {
      let w = (0, QH6.createCrypto)();
      if (!z) z = NM.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
      let H = A.split(".");
      if (H.length !== 3) throw Error("Wrong number of segments in token: " + A);
      let J = H[0] + "." + H[1],
        O = H[2],
        X,
        $;
      try {
        X = JSON.parse(w.decodeBase64StringUtf8(H[0]));
      } catch (P) {
        if (P instanceof Error) P.message = `Can't parse token envelope: ${H[0]}': ${P.message}`;
        throw P;
      }
      if (!X) throw Error("Can't parse token envelope: " + H[0]);
      try {
        $ = JSON.parse(w.decodeBase64StringUtf8(H[1]));
      } catch (P) {
        if (P instanceof Error) P.message = `Can't parse token payload '${H[0]}`;
        throw P;
      }
      if (!$) throw Error("Can't parse token payload: " + H[1]);
      if (!Object.prototype.hasOwnProperty.call(K, X.kid)) throw Error("No pem found for envelope: " + JSON.stringify(X));
      let _ = K[X.kid];
      if (X.alg === "ES256") O = Us9.joseToDer(O, "ES256").toString("base64");
      if (!(await w.verify(_, J, O))) throw Error("Invalid token signature: " + A);
      if (!$.iat) throw Error("No issue time in token: " + JSON.stringify($));
      if (!$.exp) throw Error("No expiration time in token: " + JSON.stringify($));
      let Z = Number($.iat);
      if (isNaN(Z)) throw Error("iat field using invalid format");
      let W = Number($.exp);
      if (isNaN(W)) throw Error("exp field using invalid format");
      let D = new Date().getTime() / 1000;
      if (W >= D + z) throw Error("Expiration time too far in future: " + JSON.stringify($));
      let j = Z - NM.CLOCK_SKEW_SECS_,
        M = W + NM.CLOCK_SKEW_SECS_;
      if (D < j) throw Error("Token used too early, " + D + " < " + j + ": " + JSON.stringify($));
      if (D > M) throw Error("Token used too late, " + D + " > " + M + ": " + JSON.stringify($));
      if (Y && Y.indexOf($.iss) < 0) throw Error("Invalid issuer, expected one of [" + Y + "], but got " + $.iss);
      if (typeof q < "u" && q !== null) {
        let P = $.aud,
          f = !1;
        if (q.constructor === Array) f = q.indexOf(P) > -1;else f = P === q;
        if (!f) throw Error("Wrong recipient, payload audience != requiredAudience");
      }
      return new ds9.LoginTicket(X, $);
    }
    async processAndValidateRefreshHandler() {
      if (this.refreshHandler) {
        let A = await this.refreshHandler();
        if (!A.access_token) throw Error("No access token is returned by the refreshHandler callback.");
        return A;
      }
      return;
    }
    isTokenExpiring() {
      let A = this.credentials.expiry_date;
      return A ? A <= new Date().getTime() + this.eagerRefreshThresholdMillis : !1;
    }
  }
  xo4.OAuth2Client = NM;
  NM.GOOGLE_TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";
  NM.CLOCK_SKEW_SECS_ = 300;
  NM.DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;
});

// Register to shared state
__$.B7A = B7A;
