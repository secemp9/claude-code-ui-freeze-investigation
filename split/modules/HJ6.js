// Module: HJ6
// Dependencies: ya4, zJ6, B7A, Du

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HJ6 = v(xa4 => {
  Object.defineProperty(xa4, "__esModule", {
    value: !0
  });
  xa4.JWT = void 0;
  var ba4 = __$.ya4(),
    st9 = __$.zJ6(),
    tt9 = __$.B7A(),
    Jw1 = __$.Du();
  class wJ6 extends tt9.OAuth2Client {
    constructor(A, K, q, Y, z, w) {
      let H = A && typeof A === "object" ? A : {
        email: A,
        keyFile: K,
        key: q,
        keyId: w,
        scopes: Y,
        subject: z
      };
      super(H);
      this.email = H.email, this.keyFile = H.keyFile, this.key = H.key, this.keyId = H.keyId, this.scopes = H.scopes, this.subject = H.subject, this.additionalClaims = H.additionalClaims, this.credentials = {
        refresh_token: "jwt-placeholder",
        expiry_date: 1
      };
    }
    createScoped(A) {
      let K = new wJ6(this);
      return K.scopes = A, K;
    }
    async getRequestMetadataAsync(A) {
      A = this.defaultServicePath ? `https://${this.defaultServicePath}/` : A;
      let K = !this.hasUserScopes() && A || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== Jw1.DEFAULT_UNIVERSE;
      if (this.subject && this.universeDomain !== Jw1.DEFAULT_UNIVERSE) throw RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${Jw1.DEFAULT_UNIVERSE}`);
      if (!this.apiKey && K) {
        if (this.additionalClaims && this.additionalClaims.target_audience) {
          let {
            tokens: q
          } = await this.refreshToken();
          return {
            headers: this.addSharedMetadataHeaders({
              Authorization: `Bearer ${q.id_token}`
            })
          };
        } else {
          if (!this.access) this.access = new st9.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
          let q;
          if (this.hasUserScopes()) q = this.scopes;else if (!A) q = this.defaultScopes;
          let Y = this.useJWTAccessWithScope || this.universeDomain !== Jw1.DEFAULT_UNIVERSE,
            z = await this.access.getRequestHeaders(A !== null && A !== void 0 ? A : void 0, this.additionalClaims, Y ? q : void 0);
          return {
            headers: this.addSharedMetadataHeaders(z)
          };
        }
      } else if (this.hasAnyScopes() || this.apiKey) return super.getRequestMetadataAsync(A);else return {
        headers: {}
      };
    }
    async fetchIdToken(A) {
      let K = new ba4.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: {
          target_audience: A
        },
        transporter: this.transporter
      });
      if (await K.getToken({
        forceRefresh: !0
      }), !K.idToken) throw Error("Unknown error: Failed to fetch ID token");
      return K.idToken;
    }
    hasUserScopes() {
      if (!this.scopes) return !1;
      return this.scopes.length > 0;
    }
    hasAnyScopes() {
      if (this.scopes && this.scopes.length > 0) return !0;
      if (this.defaultScopes && this.defaultScopes.length > 0) return !0;
      return !1;
    }
    authorize(A) {
      if (A) this.authorizeAsync().then(K => A(null, K), A);else return this.authorizeAsync();
    }
    async authorizeAsync() {
      let A = await this.refreshToken();
      if (!A) throw Error("No result returned");
      return this.credentials = A.tokens, this.credentials.refresh_token = "jwt-placeholder", this.key = this.gtoken.key, this.email = this.gtoken.iss, A.tokens;
    }
    async refreshTokenNoCache(A) {
      let K = this.createGToken(),
        Y = {
          access_token: (await K.getToken({
            forceRefresh: this.isTokenExpiring()
          })).access_token,
          token_type: "Bearer",
          expiry_date: K.expiresAt,
          id_token: K.idToken
        };
      return this.emit("tokens", Y), {
        res: null,
        tokens: Y
      };
    }
    createGToken() {
      if (!this.gtoken) this.gtoken = new ba4.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: this.additionalClaims,
        transporter: this.transporter
      });
      return this.gtoken;
    }
    fromJSON(A) {
      if (!A) throw Error("Must pass in a JSON object containing the service account auth settings.");
      if (!A.client_email) throw Error("The incoming JSON object does not contain a client_email field");
      if (!A.private_key) throw Error("The incoming JSON object does not contain a private_key field");
      this.email = A.client_email, this.key = A.private_key, this.keyId = A.private_key_id, this.projectId = A.project_id, this.quotaProjectId = A.quota_project_id, this.universeDomain = A.universe_domain || this.universeDomain;
    }
    fromStream(A, K) {
      if (K) this.fromStreamAsync(A).then(() => K(), K);else return this.fromStreamAsync(A);
    }
    fromStreamAsync(A) {
      return new Promise((K, q) => {
        if (!A) throw Error("Must pass in a stream containing the service account auth settings.");
        let Y = "";
        A.setEncoding("utf8").on("error", q).on("data", z => Y += z).on("end", () => {
          try {
            let z = JSON.parse(Y);
            this.fromJSON(z), K();
          } catch (z) {
            q(z);
          }
        });
      });
    }
    fromAPIKey(A) {
      if (typeof A !== "string") throw Error("Must provide an API Key string.");
      this.apiKey = A;
    }
    async getCredentials() {
      if (this.key) return {
        private_key: this.key,
        client_email: this.email
      };else if (this.keyFile) {
        let K = await this.createGToken().getCredentials(this.keyFile);
        return {
          private_key: K.privateKey,
          client_email: K.clientEmail
        };
      }
      throw Error("A key or a keyFile must be provided to getCredentials.");
    }
  }
  xa4.JWT = wJ6;
});

// Register to shared state
__$.HJ6 = HJ6;
