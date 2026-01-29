// Module: OJ6
// Dependencies: B7A, oy, _o

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var OJ6 = v(Fa4 => {
  Object.defineProperty(Fa4, "__esModule", {
    value: !0
  });
  Fa4.Impersonated = Fa4.IMPERSONATED_ACCOUNT_TYPE = void 0;
  var ga4 = __$.B7A(),
    qe9 = __$.oy(),
    Ye9 = __$._o();
  Fa4.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
  class PhA extends ga4.OAuth2Client {
    constructor(A = {}) {
      var K, q, Y, z, w, H;
      super(A);
      if (this.credentials = {
        expiry_date: 1,
        refresh_token: "impersonated-placeholder"
      }, this.sourceClient = (K = A.sourceClient) !== null && K !== void 0 ? K : new ga4.OAuth2Client(), this.targetPrincipal = (q = A.targetPrincipal) !== null && q !== void 0 ? q : "", this.delegates = (Y = A.delegates) !== null && Y !== void 0 ? Y : [], this.targetScopes = (z = A.targetScopes) !== null && z !== void 0 ? z : [], this.lifetime = (w = A.lifetime) !== null && w !== void 0 ? w : 3600, !(0, Ye9.originalOrCamelOptions)(A).get("universe_domain")) this.universeDomain = this.sourceClient.universeDomain;else if (this.sourceClient.universeDomain !== this.universeDomain) throw RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
      this.endpoint = (H = A.endpoint) !== null && H !== void 0 ? H : `https://iamcredentials.${this.universeDomain}`;
    }
    async sign(A) {
      await this.sourceClient.getAccessToken();
      let K = `projects/-/serviceAccounts/${this.targetPrincipal}`,
        q = `${this.endpoint}/v1/${K}:signBlob`,
        Y = {
          delegates: this.delegates,
          payload: Buffer.from(A).toString("base64")
        };
      return (await this.sourceClient.request({
        ...PhA.RETRY_CONFIG,
        url: q,
        data: Y,
        method: "POST"
      })).data;
    }
    getTargetPrincipal() {
      return this.targetPrincipal;
    }
    async refreshToken() {
      var A, K, q, Y, z, w;
      try {
        await this.sourceClient.getAccessToken();
        let H = "projects/-/serviceAccounts/" + this.targetPrincipal,
          J = `${this.endpoint}/v1/${H}:generateAccessToken`,
          O = {
            delegates: this.delegates,
            scope: this.targetScopes,
            lifetime: this.lifetime + "s"
          },
          X = await this.sourceClient.request({
            ...PhA.RETRY_CONFIG,
            url: J,
            data: O,
            method: "POST"
          }),
          $ = X.data;
        return this.credentials.access_token = $.accessToken, this.credentials.expiry_date = Date.parse($.expireTime), {
          tokens: this.credentials,
          res: X
        };
      } catch (H) {
        if (!(H instanceof Error)) throw H;
        let J = 0,
          O = "";
        if (H instanceof qe9.GaxiosError) J = (q = (K = (A = H === null || H === void 0 ? void 0 : H.response) === null || A === void 0 ? void 0 : A.data) === null || K === void 0 ? void 0 : K.error) === null || q === void 0 ? void 0 : q.status, O = (w = (z = (Y = H === null || H === void 0 ? void 0 : H.response) === null || Y === void 0 ? void 0 : Y.data) === null || z === void 0 ? void 0 : z.error) === null || w === void 0 ? void 0 : w.message;
        if (J && O) throw H.message = `${J}: unable to impersonate: ${O}`, H;else throw H.message = `unable to impersonate: ${H}`, H;
      }
    }
    async fetchIdToken(A, K) {
      var q, Y;
      await this.sourceClient.getAccessToken();
      let z = `projects/-/serviceAccounts/${this.targetPrincipal}`,
        w = `${this.endpoint}/v1/${z}:generateIdToken`,
        H = {
          delegates: this.delegates,
          audience: A,
          includeEmail: (q = K === null || K === void 0 ? void 0 : K.includeEmail) !== null && q !== void 0 ? q : !0,
          useEmailAzp: (Y = K === null || K === void 0 ? void 0 : K.includeEmail) !== null && Y !== void 0 ? Y : !0
        };
      return (await this.sourceClient.request({
        ...PhA.RETRY_CONFIG,
        url: w,
        data: H,
        method: "POST"
      })).data.token;
    }
  }
  Fa4.Impersonated = PhA;
});

// Register to shared state
__$.OJ6 = OJ6;
