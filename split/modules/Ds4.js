// Module: Ds4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ds4 = v(v_A => {
  var jU = v_A && v_A.__classPrivateFieldGet || function (A, K, q, Y) {
      if (q === "a" && !Y) throw TypeError("Private accessor was defined without a getter");
      if (typeof K === "function" ? A !== K || !Y : !K.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return q === "m" ? Y : q === "a" ? Y.call(A) : Y ? Y.value : K.get(A);
    },
    KI,
    EJ6,
    Gs4,
    Zs4,
    $w1,
    kJ6;
  Object.defineProperty(v_A, "__esModule", {
    value: !0
  });
  v_A.DefaultAwsSecurityCredentialsSupplier = void 0;
  class Ws4 {
    constructor(A) {
      KI.add(this), this.regionUrl = A.regionUrl, this.securityCredentialsUrl = A.securityCredentialsUrl, this.imdsV2SessionTokenUrl = A.imdsV2SessionTokenUrl, this.additionalGaxiosOptions = A.additionalGaxiosOptions;
    }
    async getAwsRegion(A) {
      if (jU(this, KI, "a", $w1)) return jU(this, KI, "a", $w1);
      let K = {};
      if (!jU(this, KI, "a", $w1) && this.imdsV2SessionTokenUrl) K["x-aws-ec2-metadata-token"] = await jU(this, KI, "m", EJ6).call(this, A.transporter);
      if (!this.regionUrl) throw Error('Unable to determine AWS region due to missing "options.credential_source.region_url"');
      let q = {
          ...this.additionalGaxiosOptions,
          url: this.regionUrl,
          method: "GET",
          responseType: "text",
          headers: K
        },
        Y = await A.transporter.request(q);
      return Y.data.substr(0, Y.data.length - 1);
    }
    async getAwsSecurityCredentials(A) {
      if (jU(this, KI, "a", kJ6)) return jU(this, KI, "a", kJ6);
      let K = {};
      if (this.imdsV2SessionTokenUrl) K["x-aws-ec2-metadata-token"] = await jU(this, KI, "m", EJ6).call(this, A.transporter);
      let q = await jU(this, KI, "m", Gs4).call(this, K, A.transporter),
        Y = await jU(this, KI, "m", Zs4).call(this, q, K, A.transporter);
      return {
        accessKeyId: Y.AccessKeyId,
        secretAccessKey: Y.SecretAccessKey,
        token: Y.Token
      };
    }
  }
  v_A.DefaultAwsSecurityCredentialsSupplier = Ws4;
  KI = new WeakSet(), EJ6 = async function (K) {
    let q = {
      ...this.additionalGaxiosOptions,
      url: this.imdsV2SessionTokenUrl,
      method: "PUT",
      responseType: "text",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "300"
      }
    };
    return (await K.request(q)).data;
  }, Gs4 = async function (K, q) {
    if (!this.securityCredentialsUrl) throw Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
    let Y = {
      ...this.additionalGaxiosOptions,
      url: this.securityCredentialsUrl,
      method: "GET",
      responseType: "text",
      headers: K
    };
    return (await q.request(Y)).data;
  }, Zs4 = async function (K, q, Y) {
    return (await Y.request({
      ...this.additionalGaxiosOptions,
      url: `${this.securityCredentialsUrl}/${K}`,
      responseType: "json",
      headers: q
    })).data;
  }, $w1 = function () {
    return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null;
  }, kJ6 = function () {
    if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) return {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      token: process.env.AWS_SESSION_TOKEN
    };
    return null;
  };
});

// Register to shared state
__$.Ds4 = Ds4;
