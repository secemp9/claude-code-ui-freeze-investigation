// Module: cs4
// Dependencies: $hA, W_A, GhA, UH6, pH6, dH6, HJ6, JJ6, OJ6, gJ6
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cs4 = v(cZ => {
  var Wo = cZ && cZ.__classPrivateFieldGet || function (A, K, q, Y) {
      if (q === "a" && !Y) throw TypeError("Private accessor was defined without a getter");
      if (typeof K === "function" ? A !== K || !Y : !K.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return q === "m" ? Y : q === "a" ? Y.call(A) : Y ? Y.value : K.get(A);
    },
    Fs4 = cZ && cZ.__classPrivateFieldSet || function (A, K, q, Y, z) {
      if (Y === "m") throw TypeError("Private method is not writable");
      if (Y === "a" && !z) throw TypeError("Private accessor was defined without a setter");
      if (typeof K === "function" ? A !== K || !z : !K.has(A)) throw TypeError("Cannot write private member to an object whose class did not declare it");
      return Y === "a" ? z.call(A, q) : z ? z.value = q : K.set(A, q), q;
    },
    Do,
    L_A,
    R_A,
    ds4;
  Object.defineProperty(cZ, "__esModule", {
    value: !0
  });
  cZ.GoogleAuth = cZ.GoogleAuthExceptionMessages = cZ.CLOUD_SDK_CLIENT_ID = void 0;
  var JAY = CA("child_process"),
    vhA = CA("fs"),
    NhA = __$.$hA(),
    OAY = CA("os"),
    UJ6 = CA("path"),
    XAY = __$.W_A(),
    $AY = __$.GhA(),
    _AY = __$.UH6(),
    GAY = __$.pH6(),
    ZAY = __$.dH6(),
    k_A = __$.HJ6(),
    Qs4 = __$.JJ6(),
    C_A = __$.OJ6(),
    WAY = __$.gJ6(),
    ThA = __$.Zo(),
    QJ6 = __$.Du(),
    Us4 = __$.gs4(),
    ps4 = __$._o();
  cZ.CLOUD_SDK_CLIENT_ID = "764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com";
  cZ.GoogleAuthExceptionMessages = {
    API_KEY_WITH_CREDENTIALS: "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.",
    NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
    NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
    NO_ADC_FOUND: "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.",
    NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.
To learn more about Universe Domain retrieval, visit: 
https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys`
  };
  class pJ6 {
    get isGCE() {
      return this.checkIsGCE;
    }
    constructor(A = {}) {
      if (Do.add(this), this.checkIsGCE = void 0, this.jsonContent = null, this.cachedCredential = null, L_A.set(this, null), this.clientOptions = {}, this._cachedProjectId = A.projectId || null, this.cachedCredential = A.authClient || null, this.keyFilename = A.keyFilename || A.keyFile, this.scopes = A.scopes, this.clientOptions = A.clientOptions || {}, this.jsonContent = A.credentials || null, this.apiKey = A.apiKey || this.clientOptions.apiKey || null, this.apiKey && (this.jsonContent || this.clientOptions.credentials)) throw RangeError(cZ.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
      if (A.universeDomain) this.clientOptions.universeDomain = A.universeDomain;
    }
    setGapicJWTValues(A) {
      A.defaultServicePath = this.defaultServicePath, A.useJWTAccessWithScope = this.useJWTAccessWithScope, A.defaultScopes = this.defaultScopes;
    }
    getProjectId(A) {
      if (A) this.getProjectIdAsync().then(K => A(null, K), A);else return this.getProjectIdAsync();
    }
    async getProjectIdOptional() {
      try {
        return await this.getProjectId();
      } catch (A) {
        if (A instanceof Error && A.message === cZ.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) return null;else throw A;
      }
    }
    async findAndCacheProjectId() {
      let A = null;
      if (A || (A = await this.getProductionProjectId()), A || (A = await this.getFileProjectId()), A || (A = await this.getDefaultServiceProjectId()), A || (A = await this.getGCEProjectId()), A || (A = await this.getExternalAccountClientProjectId()), A) return this._cachedProjectId = A, A;else throw Error(cZ.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
    }
    async getProjectIdAsync() {
      if (this._cachedProjectId) return this._cachedProjectId;
      if (!this._findProjectIdPromise) this._findProjectIdPromise = this.findAndCacheProjectId();
      return this._findProjectIdPromise;
    }
    async getUniverseDomainFromMetadataServer() {
      var A;
      let K;
      try {
        K = await NhA.universe("universe-domain"), K || (K = QJ6.DEFAULT_UNIVERSE);
      } catch (q) {
        if (q && ((A = q === null || q === void 0 ? void 0 : q.response) === null || A === void 0 ? void 0 : A.status) === 404) K = QJ6.DEFAULT_UNIVERSE;else throw q;
      }
      return K;
    }
    async getUniverseDomain() {
      let A = (0, ps4.originalOrCamelOptions)(this.clientOptions).get("universe_domain");
      try {
        A !== null && A !== void 0 || (A = (await this.getClient()).universeDomain);
      } catch (K) {
        A !== null && A !== void 0 || (A = QJ6.DEFAULT_UNIVERSE);
      }
      return A;
    }
    getAnyScopes() {
      return this.scopes || this.defaultScopes;
    }
    getApplicationDefault(A = {}, K) {
      let q;
      if (typeof A === "function") K = A;else q = A;
      if (K) this.getApplicationDefaultAsync(q).then(Y => K(null, Y.credential, Y.projectId), K);else return this.getApplicationDefaultAsync(q);
    }
    async getApplicationDefaultAsync(A = {}) {
      if (this.cachedCredential) return await Wo(this, Do, "m", R_A).call(this, this.cachedCredential, null);
      let K;
      if (K = await this._tryGetApplicationCredentialsFromEnvironmentVariable(A), K) {
        if (K instanceof k_A.JWT) K.scopes = this.scopes;else if (K instanceof ThA.BaseExternalAccountClient) K.scopes = this.getAnyScopes();
        return await Wo(this, Do, "m", R_A).call(this, K);
      }
      if (K = await this._tryGetApplicationCredentialsFromWellKnownFile(A), K) {
        if (K instanceof k_A.JWT) K.scopes = this.scopes;else if (K instanceof ThA.BaseExternalAccountClient) K.scopes = this.getAnyScopes();
        return await Wo(this, Do, "m", R_A).call(this, K);
      }
      if (await this._checkIsGCE()) return A.scopes = this.getAnyScopes(), await Wo(this, Do, "m", R_A).call(this, new _AY.Compute(A));
      throw Error(cZ.GoogleAuthExceptionMessages.NO_ADC_FOUND);
    }
    async _checkIsGCE() {
      if (this.checkIsGCE === void 0) this.checkIsGCE = NhA.getGCPResidency() || (await NhA.isAvailable());
      return this.checkIsGCE;
    }
    async _tryGetApplicationCredentialsFromEnvironmentVariable(A) {
      let K = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials;
      if (!K || K.length === 0) return null;
      try {
        return this._getApplicationCredentialsFromFilePath(K, A);
      } catch (q) {
        if (q instanceof Error) q.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${q.message}`;
        throw q;
      }
    }
    async _tryGetApplicationCredentialsFromWellKnownFile(A) {
      let K = null;
      if (this._isWindows()) K = process.env.APPDATA;else {
        let Y = process.env.HOME;
        if (Y) K = UJ6.join(Y, ".config");
      }
      if (K) {
        if (K = UJ6.join(K, "gcloud", "application_default_credentials.json"), !vhA.existsSync(K)) K = null;
      }
      if (!K) return null;
      return await this._getApplicationCredentialsFromFilePath(K, A);
    }
    async _getApplicationCredentialsFromFilePath(A, K = {}) {
      if (!A || A.length === 0) throw Error("The file path is invalid.");
      try {
        if (A = vhA.realpathSync(A), !vhA.lstatSync(A).isFile()) throw Error();
      } catch (Y) {
        if (Y instanceof Error) Y.message = `The file at ${A} does not exist, or it is not a file. ${Y.message}`;
        throw Y;
      }
      let q = vhA.createReadStream(A);
      return this.fromStream(q, K);
    }
    fromImpersonatedJSON(A) {
      var K, q, Y, z;
      if (!A) throw Error("Must pass in a JSON object containing an  impersonated refresh token");
      if (A.type !== C_A.IMPERSONATED_ACCOUNT_TYPE) throw Error(`The incoming JSON object does not have the "${C_A.IMPERSONATED_ACCOUNT_TYPE}" type`);
      if (!A.source_credentials) throw Error("The incoming JSON object does not contain a source_credentials field");
      if (!A.service_account_impersonation_url) throw Error("The incoming JSON object does not contain a service_account_impersonation_url field");
      let w = this.fromJSON(A.source_credentials);
      if (((K = A.service_account_impersonation_url) === null || K === void 0 ? void 0 : K.length) > 256) throw RangeError(`Target principal is too long: ${A.service_account_impersonation_url}`);
      let H = (Y = (q = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(A.service_account_impersonation_url)) === null || q === void 0 ? void 0 : q.groups) === null || Y === void 0 ? void 0 : Y.target;
      if (!H) throw RangeError(`Cannot extract target principal from ${A.service_account_impersonation_url}`);
      let J = (z = this.getAnyScopes()) !== null && z !== void 0 ? z : [];
      return new C_A.Impersonated({
        ...A,
        sourceClient: w,
        targetPrincipal: H,
        targetScopes: Array.isArray(J) ? J : [J]
      });
    }
    fromJSON(A, K = {}) {
      let q,
        Y = (0, ps4.originalOrCamelOptions)(K).get("universe_domain");
      if (A.type === Qs4.USER_REFRESH_ACCOUNT_TYPE) q = new Qs4.UserRefreshClient(K), q.fromJSON(A);else if (A.type === C_A.IMPERSONATED_ACCOUNT_TYPE) q = this.fromImpersonatedJSON(A);else if (A.type === ThA.EXTERNAL_ACCOUNT_TYPE) q = WAY.ExternalAccountClient.fromJSON(A, K), q.scopes = this.getAnyScopes();else if (A.type === Us4.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) q = new Us4.ExternalAccountAuthorizedUserClient(A, K);else K.scopes = this.scopes, q = new k_A.JWT(K), this.setGapicJWTValues(q), q.fromJSON(A);
      if (Y) q.universeDomain = Y;
      return q;
    }
    _cacheClientFromJSON(A, K) {
      let q = this.fromJSON(A, K);
      return this.jsonContent = A, this.cachedCredential = q, q;
    }
    fromStream(A, K = {}, q) {
      let Y = {};
      if (typeof K === "function") q = K;else Y = K;
      if (q) this.fromStreamAsync(A, Y).then(z => q(null, z), q);else return this.fromStreamAsync(A, Y);
    }
    fromStreamAsync(A, K) {
      return new Promise((q, Y) => {
        if (!A) throw Error("Must pass in a stream containing the Google auth settings.");
        let z = [];
        A.setEncoding("utf8").on("error", Y).on("data", w => z.push(w)).on("end", () => {
          try {
            try {
              let w = JSON.parse(z.join("")),
                H = this._cacheClientFromJSON(w, K);
              return q(H);
            } catch (w) {
              if (!this.keyFilename) throw w;
              let H = new k_A.JWT({
                ...this.clientOptions,
                keyFile: this.keyFilename
              });
              return this.cachedCredential = H, this.setGapicJWTValues(H), q(H);
            }
          } catch (w) {
            return Y(w);
          }
        });
      });
    }
    fromAPIKey(A, K = {}) {
      return new k_A.JWT({
        ...K,
        apiKey: A
      });
    }
    _isWindows() {
      let A = OAY.platform();
      if (A && A.length >= 3) {
        if (A.substring(0, 3).toLowerCase() === "win") return !0;
      }
      return !1;
    }
    async getDefaultServiceProjectId() {
      return new Promise(A => {
        (0, JAY.exec)("gcloud config config-helper --format json", (K, q) => {
          if (!K && q) try {
            let Y = JSON.parse(q).configuration.properties.core.project;
            A(Y);
            return;
          } catch (Y) {}
          A(null);
        });
      });
    }
    getProductionProjectId() {
      return process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT || process.env.gcloud_project || process.env.google_cloud_project;
    }
    async getFileProjectId() {
      if (this.cachedCredential) return this.cachedCredential.projectId;
      if (this.keyFilename) {
        let K = await this.getClient();
        if (K && K.projectId) return K.projectId;
      }
      let A = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
      if (A) return A.projectId;else return null;
    }
    async getExternalAccountClientProjectId() {
      if (!this.jsonContent || this.jsonContent.type !== ThA.EXTERNAL_ACCOUNT_TYPE) return null;
      return await (await this.getClient()).getProjectId();
    }
    async getGCEProjectId() {
      try {
        return await NhA.project("project-id");
      } catch (A) {
        return null;
      }
    }
    getCredentials(A) {
      if (A) this.getCredentialsAsync().then(K => A(null, K), A);else return this.getCredentialsAsync();
    }
    async getCredentialsAsync() {
      let A = await this.getClient();
      if (A instanceof C_A.Impersonated) return {
        client_email: A.getTargetPrincipal()
      };
      if (A instanceof ThA.BaseExternalAccountClient) {
        let K = A.getServiceAccountEmail();
        if (K) return {
          client_email: K,
          universe_domain: A.universeDomain
        };
      }
      if (this.jsonContent) return {
        client_email: this.jsonContent.client_email,
        private_key: this.jsonContent.private_key,
        universe_domain: this.jsonContent.universe_domain
      };
      if (await this._checkIsGCE()) {
        let [K, q] = await Promise.all([NhA.instance("service-accounts/default/email"), this.getUniverseDomain()]);
        return {
          client_email: K,
          universe_domain: q
        };
      }
      throw Error(cZ.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
    }
    async getClient() {
      if (this.cachedCredential) return this.cachedCredential;
      Fs4(this, L_A, Wo(this, L_A, "f") || Wo(this, Do, "m", ds4).call(this), "f");
      try {
        return await Wo(this, L_A, "f");
      } finally {
        Fs4(this, L_A, null, "f");
      }
    }
    async getIdTokenClient(A) {
      let K = await this.getClient();
      if (!("fetchIdToken" in K)) throw Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
      return new GAY.IdTokenClient({
        targetAudience: A,
        idTokenProvider: K
      });
    }
    async getAccessToken() {
      return (await (await this.getClient()).getAccessToken()).token;
    }
    async getRequestHeaders(A) {
      return (await this.getClient()).getRequestHeaders(A);
    }
    async authorizeRequest(A) {
      A = A || {};
      let K = A.url || A.uri,
        Y = await (await this.getClient()).getRequestHeaders(K);
      return A.headers = Object.assign(A.headers || {}, Y), A;
    }
    async request(A) {
      return (await this.getClient()).request(A);
    }
    getEnv() {
      return (0, ZAY.getEnv)();
    }
    async sign(A, K) {
      let q = await this.getClient(),
        Y = await this.getUniverseDomain();
      if (K = K || `https://iamcredentials.${Y}/v1/projects/-/serviceAccounts/`, q instanceof C_A.Impersonated) return (await q.sign(A)).signedBlob;
      let z = (0, XAY.createCrypto)();
      if (q instanceof k_A.JWT && q.key) return await z.sign(q.key, A);
      let w = await this.getCredentials();
      if (!w.client_email) throw Error("Cannot sign data without `client_email`.");
      return this.signBlob(z, w.client_email, A, K);
    }
    async signBlob(A, K, q, Y) {
      let z = new URL(Y + `${K}:signBlob`);
      return (await this.request({
        method: "POST",
        url: z.href,
        data: {
          payload: A.encodeBase64StringUtf8(q)
        },
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: ["POST"]
        }
      })).data.signedBlob;
    }
  }
  cZ.GoogleAuth = pJ6;
  L_A = new WeakMap(), Do = new WeakSet(), R_A = async function (K, q = process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null) {
    let Y = await this.getProjectIdOptional();
    if (q) K.quotaProjectId = q;
    return this.cachedCredential = K, {
      credential: K,
      projectId: Y
    };
  }, ds4 = async function () {
    if (this.jsonContent) return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);else if (this.keyFilename) {
      let K = UJ6.resolve(this.keyFilename),
        q = vhA.createReadStream(K);
      return await this.fromStreamAsync(q, this.clientOptions);
    } else if (this.apiKey) {
      let K = await this.fromAPIKey(this.apiKey, this.clientOptions);
      K.scopes = this.scopes;
      let {
        credential: q
      } = await Wo(this, Do, "m", R_A).call(this, K);
      return q;
    } else {
      let {
        credential: K
      } = await this.getApplicationDefaultAsync(this.clientOptions);
      return K;
    }
  };
  pJ6.DefaultTransporter = $AY.DefaultTransporter;
});

// Register to shared state
__$.cs4 = cs4;
