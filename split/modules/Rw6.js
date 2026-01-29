// Module: Rw6
// Dependencies: LF, CkA, cU4, sc4, tSA, ec4, ql4, Fc9, Vz1, $z
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rw6 = k(() => {
  __$.LF();
  __$.CkA();
  __$.cU4();
  __$.sc4();
  __$.tSA();
  __$.ec4();
  __$.ql4();
  __$.LF();
  __$.Fc9 = new Set(["/v1/complete", "/v1/messages", "/v1/messages?beta=true"]);
  __$.Vz1 = class Vz1 extends __$.$z {
    constructor({
      awsRegion: A = __$.kw6("AWS_REGION") ?? "us-east-1",
      baseURL: K = __$.kw6("ANTHROPIC_BEDROCK_BASE_URL") ?? `https://bedrock-runtime.${A}.amazonaws.com`,
      awsSecretKey: q = null,
      awsAccessKey: Y = null,
      awsSessionToken: z = null,
      providerChainResolver: w = null,
      ...H
    } = {}) {
      super({
        baseURL: K,
        ...H
      });
      this.skipAuth = !1, this.messages = __$.Qc9(this), this.completions = new __$.Ii(this), this.beta = __$.Uc9(this), this.awsSecretKey = q, this.awsAccessKey = Y, this.awsRegion = A, this.awsSessionToken = z, this.skipAuth = H.skipAuth ?? !1, this.providerChainResolver = w;
    }
    validateHeaders() {}
    async prepareRequest(A, {
      url: K,
      options: q
    }) {
      if (this.skipAuth) return;
      let Y = this.awsRegion;
      if (!Y) throw Error("Expected `awsRegion` option to be passed to the client or the `AWS_REGION` environment variable to be present");
      let z = await __$.dU4(A, {
        url: K,
        regionName: Y,
        awsAccessKey: this.awsAccessKey,
        awsSecretKey: this.awsSecretKey,
        awsSessionToken: this.awsSessionToken,
        fetchOptions: this.fetchOptions,
        providerChainResolver: this.providerChainResolver
      });
      A.headers = __$.Cw6([z, A.headers]).values;
    }
    async buildRequest(A) {
      if (A.__streamClass = __$.Pz1, __$.Dz1(A.body)) A.body = {
        ...A.body
      };
      if (__$.Dz1(A.body)) {
        if (!A.body.anthropic_version) A.body.anthropic_version = __$.gc9;
        if (A.headers && !A.body.anthropic_beta) {
          let K = __$.Cw6([A.headers]).values.get("anthropic-beta");
          if (K != null) A.body.anthropic_beta = K.split(",");
        }
      }
      if (__$.Fc9.has(A.path) && A.method === "post") {
        if (!__$.Dz1(A.body)) throw Error("Expected request body to be an object for post /v1/messages");
        let K = A.body.model;
        A.body.model = void 0;
        let q = A.body.stream;
        if (A.body.stream = void 0, q) A.path = __$.Lw6`/model/${K}/invoke-with-response-stream`;else A.path = __$.Lw6`/model/${K}/invoke`;
      }
      return super.buildRequest(A);
    }
  };
});

// Register to shared state
__$.Rw6 = Rw6;
