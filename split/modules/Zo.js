// Module: Zo
// Dependencies: Du, _J6, _o, hH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zo = v(PG => {
  var GJ6 = PG && PG.__classPrivateFieldGet || function (A, K, q, Y) {
      if (q === "a" && !Y) throw TypeError("Private accessor was defined without a getter");
      if (typeof K === "function" ? A !== K || !Y : !K.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return q === "m" ? Y : q === "a" ? Y.call(A) : Y ? Y.value : K.get(A);
    },
    ra4 = PG && PG.__classPrivateFieldSet || function (A, K, q, Y, z) {
      if (Y === "m") throw TypeError("Private method is not writable");
      if (Y === "a" && !z) throw TypeError("Private accessor was defined without a setter");
      if (typeof K === "function" ? A !== K || !z : !K.has(A)) throw TypeError("Cannot write private member to an object whose class did not declare it");
      return Y === "a" ? z.call(A, q) : z ? z.value = q : K.set(A, q), q;
    },
    ZJ6,
    T_A,
    aa4;
  Object.defineProperty(PG, "__esModule", {
    value: !0
  });
  PG.BaseExternalAccountClient = PG.DEFAULT_UNIVERSE = PG.CLOUD_RESOURCE_MANAGER = PG.EXTERNAL_ACCOUNT_TYPE = PG.EXPIRATION_TIME_OFFSET = void 0;
  var Ge9 = CA("stream"),
    Ze9 = __$.Du(),
    We9 = __$._J6(),
    oa4 = __$._o(),
    De9 = "urn:ietf:params:oauth:grant-type:token-exchange",
    je9 = "urn:ietf:params:oauth:token-type:access_token",
    WJ6 = "https://www.googleapis.com/auth/cloud-platform",
    Me9 = 3600;
  PG.EXPIRATION_TIME_OFFSET = 300000;
  PG.EXTERNAL_ACCOUNT_TYPE = "external_account";
  PG.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
  var Pe9 = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+",
    Ve9 = "https://sts.{universeDomain}/v1/token",
    fe9 = __$.hH6(),
    Ne9 = __$.Du();
  Object.defineProperty(PG, "DEFAULT_UNIVERSE", {
    enumerable: !0,
    get: function () {
      return Ne9.DEFAULT_UNIVERSE;
    }
  });
  class Xw1 extends Ze9.AuthClient {
    constructor(A, K) {
      var q;
      super({
        ...A,
        ...K
      });
      ZJ6.add(this), T_A.set(this, null);
      let Y = (0, oa4.originalOrCamelOptions)(A),
        z = Y.get("type");
      if (z && z !== PG.EXTERNAL_ACCOUNT_TYPE) throw Error(`Expected "${PG.EXTERNAL_ACCOUNT_TYPE}" type but received "${A.type}"`);
      let w = Y.get("client_id"),
        H = Y.get("client_secret"),
        J = (q = Y.get("token_url")) !== null && q !== void 0 ? q : Ve9.replace("{universeDomain}", this.universeDomain),
        O = Y.get("subject_token_type"),
        X = Y.get("workforce_pool_user_project"),
        $ = Y.get("service_account_impersonation_url"),
        _ = Y.get("service_account_impersonation"),
        G = (0, oa4.originalOrCamelOptions)(_).get("token_lifetime_seconds");
      if (this.cloudResourceManagerURL = new URL(Y.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`), w) this.clientAuth = {
        confidentialClientType: "basic",
        clientId: w,
        clientSecret: H
      };
      this.stsCredential = new We9.StsCredentials(J, this.clientAuth), this.scopes = Y.get("scopes") || [WJ6], this.cachedAccessToken = null, this.audience = Y.get("audience"), this.subjectTokenType = O, this.workforcePoolUserProject = X;
      let Z = new RegExp(Pe9);
      if (this.workforcePoolUserProject && !this.audience.match(Z)) throw Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
      if (this.serviceAccountImpersonationUrl = $, this.serviceAccountImpersonationLifetime = G, this.serviceAccountImpersonationLifetime) this.configLifetimeRequested = !0;else this.configLifetimeRequested = !1, this.serviceAccountImpersonationLifetime = Me9;
      this.projectNumber = this.getProjectNumber(this.audience), this.supplierContext = {
        audience: this.audience,
        subjectTokenType: this.subjectTokenType,
        transporter: this.transporter
      };
    }
    getServiceAccountEmail() {
      var A;
      if (this.serviceAccountImpersonationUrl) {
        if (this.serviceAccountImpersonationUrl.length > 256) throw RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
        let q = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/.exec(this.serviceAccountImpersonationUrl);
        return ((A = q === null || q === void 0 ? void 0 : q.groups) === null || A === void 0 ? void 0 : A.email) || null;
      }
      return null;
    }
    setCredentials(A) {
      super.setCredentials(A), this.cachedAccessToken = A;
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
    async getProjectId() {
      let A = this.projectNumber || this.workforcePoolUserProject;
      if (this.projectId) return this.projectId;else if (A) {
        let K = await this.getRequestHeaders(),
          q = await this.transporter.request({
            ...Xw1.RETRY_CONFIG,
            headers: K,
            url: `${this.cloudResourceManagerURL.toString()}${A}`,
            responseType: "json"
          });
        return this.projectId = q.data.projectId, this.projectId;
      }
      return null;
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
            H = z.config.data instanceof Ge9.Readable;
          if (!K && (w === 401 || w === 403) && !H && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(A, !0);
        }
        throw Y;
      }
      return q;
    }
    async refreshAccessTokenAsync() {
      ra4(this, T_A, GJ6(this, T_A, "f") || GJ6(this, ZJ6, "m", aa4).call(this), "f");
      try {
        return await GJ6(this, T_A, "f");
      } finally {
        ra4(this, T_A, null, "f");
      }
    }
    getProjectNumber(A) {
      let K = A.match(/\/projects\/([^/]+)/);
      if (!K) return null;
      return K[1];
    }
    async getImpersonatedAccessToken(A) {
      let K = {
          ...Xw1.RETRY_CONFIG,
          url: this.serviceAccountImpersonationUrl,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${A}`
          },
          data: {
            scope: this.getScopesArray(),
            lifetime: this.serviceAccountImpersonationLifetime + "s"
          },
          responseType: "json"
        },
        q = await this.transporter.request(K),
        Y = q.data;
      return {
        access_token: Y.accessToken,
        expiry_date: new Date(Y.expireTime).getTime(),
        res: q
      };
    }
    isExpired(A) {
      let K = new Date().getTime();
      return A.expiry_date ? K >= A.expiry_date - this.eagerRefreshThresholdMillis : !1;
    }
    getScopesArray() {
      if (typeof this.scopes === "string") return [this.scopes];
      return this.scopes || [WJ6];
    }
    getMetricsHeaderValue() {
      let A = process.version.replace(/^v/, ""),
        K = this.serviceAccountImpersonationUrl !== void 0,
        q = this.credentialSourceType ? this.credentialSourceType : "unknown";
      return `gl-node/${A} auth/${fe9.version} google-byoid-sdk source/${q} sa-impersonation/${K} config-lifetime/${this.configLifetimeRequested}`;
    }
  }
  PG.BaseExternalAccountClient = Xw1;
  T_A = new WeakMap(), ZJ6 = new WeakSet(), aa4 = async function () {
    let K = await this.retrieveSubjectToken(),
      q = {
        grantType: De9,
        audience: this.audience,
        requestedTokenType: je9,
        subjectToken: K,
        subjectTokenType: this.subjectTokenType,
        scope: this.serviceAccountImpersonationUrl ? [WJ6] : this.getScopesArray()
      },
      Y = !this.clientAuth && this.workforcePoolUserProject ? {
        userProject: this.workforcePoolUserProject
      } : void 0,
      z = {
        "x-goog-api-client": this.getMetricsHeaderValue()
      },
      w = await this.stsCredential.exchangeToken(q, z, Y);
    if (this.serviceAccountImpersonationUrl) this.cachedAccessToken = await this.getImpersonatedAccessToken(w.access_token);else if (w.expires_in) this.cachedAccessToken = {
      access_token: w.access_token,
      expiry_date: new Date().getTime() + w.expires_in * 1000,
      res: w.res
    };else this.cachedAccessToken = {
      access_token: w.access_token,
      res: w.res
    };
    return this.credentials = {}, Object.assign(this.credentials, this.cachedAccessToken), delete this.credentials.res, this.emit("tokens", {
      refresh_token: null,
      expiry_date: this.cachedAccessToken.expiry_date,
      access_token: this.cachedAccessToken.access_token,
      token_type: "Bearer",
      id_token: null
    }), this.cachedAccessToken;
  };
});

// Register to shared state
__$.Zo = Zo;
