// Module: ya4
// Dependencies: oy, eH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ya4 = v(Go => {
  var ey = Go && Go.__classPrivateFieldGet || function (A, K, q, Y) {
      if (q === "a" && !Y) throw TypeError("Private accessor was defined without a getter");
      if (typeof K === "function" ? A !== K || !Y : !K.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return q === "m" ? Y : q === "a" ? Y.call(A) : Y ? Y.value : K.get(A);
    },
    Na4 = Go && Go.__classPrivateFieldSet || function (A, K, q, Y, z) {
      if (Y === "m") throw TypeError("Private method is not writable");
      if (Y === "a" && !z) throw TypeError("Private accessor was defined without a setter");
      if (typeof K === "function" ? A !== K || !z : !K.has(A)) throw TypeError("Cannot write private member to an object whose class did not declare it");
      return Y === "a" ? z.call(A, q) : z ? z.value = q : K.set(A, q), q;
    },
    AI,
    f_A,
    AJ6,
    Ta4,
    va4,
    KJ6,
    qJ6,
    Ea4;
  Object.defineProperty(Go, "__esModule", {
    value: !0
  });
  Go.GoogleToken = void 0;
  var ka4 = CA("fs"),
    ct9 = __$.oy(),
    lt9 = __$.eH6(),
    it9 = CA("path"),
    nt9 = CA("util"),
    Ca4 = ka4.readFile ? (0, nt9.promisify)(ka4.readFile) : async () => {
      throw new N_A("use key rather than keyFile.", "MISSING_CREDENTIALS");
    },
    La4 = "https://www.googleapis.com/oauth2/v4/token",
    rt9 = "https://accounts.google.com/o/oauth2/revoke?token=";
  class N_A extends Error {
    constructor(A, K) {
      super(A);
      this.code = K;
    }
  }
  class Ra4 {
    get accessToken() {
      return this.rawToken ? this.rawToken.access_token : void 0;
    }
    get idToken() {
      return this.rawToken ? this.rawToken.id_token : void 0;
    }
    get tokenType() {
      return this.rawToken ? this.rawToken.token_type : void 0;
    }
    get refreshToken() {
      return this.rawToken ? this.rawToken.refresh_token : void 0;
    }
    constructor(A) {
      AI.add(this), this.transporter = {
        request: K => (0, ct9.request)(K)
      }, f_A.set(this, void 0), ey(this, AI, "m", qJ6).call(this, A);
    }
    hasExpired() {
      let A = new Date().getTime();
      if (this.rawToken && this.expiresAt) return A >= this.expiresAt;else return !0;
    }
    isTokenExpiring() {
      var A;
      let K = new Date().getTime(),
        q = (A = this.eagerRefreshThresholdMillis) !== null && A !== void 0 ? A : 0;
      if (this.rawToken && this.expiresAt) return this.expiresAt <= K + q;else return !0;
    }
    getToken(A, K = {}) {
      if (typeof A === "object") K = A, A = void 0;
      if (K = Object.assign({
        forceRefresh: !1
      }, K), A) {
        let q = A;
        ey(this, AI, "m", AJ6).call(this, K).then(Y => q(null, Y), A);
        return;
      }
      return ey(this, AI, "m", AJ6).call(this, K);
    }
    async getCredentials(A) {
      switch (it9.extname(A)) {
        case ".json":
          {
            let q = await Ca4(A, "utf8"),
              Y = JSON.parse(q),
              z = Y.private_key,
              w = Y.client_email;
            if (!z || !w) throw new N_A("private_key and client_email are required.", "MISSING_CREDENTIALS");
            return {
              privateKey: z,
              clientEmail: w
            };
          }
        case ".der":
        case ".crt":
        case ".pem":
          return {
            privateKey: await Ca4(A, "utf8")
          };
        case ".p12":
        case ".pfx":
          throw new N_A("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
        default:
          throw new N_A("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE");
      }
    }
    revokeToken(A) {
      if (A) {
        ey(this, AI, "m", KJ6).call(this).then(() => A(), A);
        return;
      }
      return ey(this, AI, "m", KJ6).call(this);
    }
  }
  Go.GoogleToken = Ra4;
  f_A = new WeakMap(), AI = new WeakSet(), AJ6 = async function (K) {
    if (ey(this, f_A, "f") && !K.forceRefresh) return ey(this, f_A, "f");
    try {
      return await Na4(this, f_A, ey(this, AI, "m", Ta4).call(this, K), "f");
    } finally {
      Na4(this, f_A, void 0, "f");
    }
  }, Ta4 = async function (K) {
    if (this.isTokenExpiring() === !1 && K.forceRefresh === !1) return Promise.resolve(this.rawToken);
    if (!this.key && !this.keyFile) throw Error("No key or keyFile set.");
    if (!this.key && this.keyFile) {
      let q = await this.getCredentials(this.keyFile);
      if (this.key = q.privateKey, this.iss = q.clientEmail || this.iss, !q.clientEmail) ey(this, AI, "m", va4).call(this);
    }
    return ey(this, AI, "m", Ea4).call(this);
  }, va4 = function () {
    if (!this.iss) throw new N_A("email is required.", "MISSING_CREDENTIALS");
  }, KJ6 = async function () {
    if (!this.accessToken) throw Error("No token to revoke.");
    let K = rt9 + this.accessToken;
    await this.transporter.request({
      url: K,
      retry: !0
    }), ey(this, AI, "m", qJ6).call(this, {
      email: this.iss,
      sub: this.sub,
      key: this.key,
      keyFile: this.keyFile,
      scope: this.scope,
      additionalClaims: this.additionalClaims
    });
  }, qJ6 = function (K = {}) {
    if (this.keyFile = K.keyFile, this.key = K.key, this.rawToken = void 0, this.iss = K.email || K.iss, this.sub = K.sub, this.additionalClaims = K.additionalClaims, typeof K.scope === "object") this.scope = K.scope.join(" ");else this.scope = K.scope;
    if (this.eagerRefreshThresholdMillis = K.eagerRefreshThresholdMillis, K.transporter) this.transporter = K.transporter;
  }, Ea4 = async function () {
    var K, q;
    let Y = Math.floor(new Date().getTime() / 1000),
      z = this.additionalClaims || {},
      w = Object.assign({
        iss: this.iss,
        scope: this.scope,
        aud: La4,
        exp: Y + 3600,
        iat: Y,
        sub: this.sub
      }, z),
      H = lt9.sign({
        header: {
          alg: "RS256"
        },
        payload: w,
        secret: this.key
      });
    try {
      let J = await this.transporter.request({
        method: "POST",
        url: La4,
        data: {
          grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
          assertion: H
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        responseType: "json",
        retryConfig: {
          httpMethodsToRetry: ["POST"]
        }
      });
      return this.rawToken = J.data, this.expiresAt = J.data.expires_in === null || J.data.expires_in === void 0 ? void 0 : (Y + J.data.expires_in) * 1000, this.rawToken;
    } catch (J) {
      this.rawToken = void 0, this.tokenExpires = void 0;
      let O = J.response && ((K = J.response) === null || K === void 0 ? void 0 : K.data) ? (q = J.response) === null || q === void 0 ? void 0 : q.data : {};
      if (O.error) {
        let X = O.error_description ? `: ${O.error_description}` : "";
        J.message = `${O.error}${X}`;
      }
      throw J;
    }
  };
});

// Register to shared state
__$.ya4 = ya4;
