// Module: aJ6
// Dependencies: LF, CkA, oJ6, Ot4, Xt4, iJ6, rAY, Mw1, $z, Dw1
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aJ6 = k(() => {
  __$.LF();
  __$.CkA();
  __$.oJ6();
  __$.Ot4();
  __$.LF();
  __$.Xt4 = o(__$.iJ6(), 1), __$.rAY = new Set(["/v1/messages", "/v1/messages?beta=true"]);
  __$.Mw1 = class Mw1 extends __$.$z {
    constructor({
      baseURL: A = __$.Dw1("ANTHROPIC_VERTEX_BASE_URL"),
      region: K = __$.Dw1("CLOUD_ML_REGION") ?? null,
      projectId: q = __$.Dw1("ANTHROPIC_VERTEX_PROJECT_ID") ?? null,
      ...Y
    } = {}) {
      if (!K) throw Error("No region was given. The client should be instantiated with the `region` option or the `CLOUD_ML_REGION` environment variable should be set.");
      super({
        baseURL: A || (K === "global" ? "https://aiplatform.googleapis.com/v1" : `https://${K}-aiplatform.googleapis.com/v1`),
        ...Y
      });
      if (this.messages = __$.oAY(this), this.beta = __$.aAY(this), this.region = K, this.projectId = q, this.accessToken = Y.accessToken ?? null, Y.authClient && Y.googleAuth) throw Error("You cannot provide both `authClient` and `googleAuth`. Please provide only one of them.");else if (Y.authClient) this._authClientPromise = Promise.resolve(Y.authClient);else this._auth = Y.googleAuth ?? new __$.Xt4.GoogleAuth({
        scopes: "https://www.googleapis.com/auth/cloud-platform"
      }), this._authClientPromise = this._auth.getClient();
    }
    validateHeaders() {}
    async prepareOptions(A) {
      let K = await this._authClientPromise,
        q = await K.getRequestHeaders(),
        Y = K.projectId ?? q["x-goog-user-project"];
      if (!this.projectId && Y) this.projectId = Y;
      A.headers = __$.Jt4([q, A.headers]);
    }
    async buildRequest(A) {
      if (__$.jw1(A.body)) A.body = {
        ...A.body
      };
      if (__$.jw1(A.body)) {
        if (!A.body.anthropic_version) A.body.anthropic_version = __$.nAY;
      }
      if (__$.rAY.has(A.path) && A.method === "post") {
        if (!this.projectId) throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
        if (!__$.jw1(A.body)) throw Error("Expected request body to be an object for post /v1/messages");
        let K = A.body.model;
        A.body.model = void 0;
        let Y = A.body.stream ?? !1 ? "streamRawPredict" : "rawPredict";
        A.path = `/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/${K}:${Y}`;
      }
      if (A.path === "/v1/messages/count_tokens" || A.path == "/v1/messages/count_tokens?beta=true" && A.method === "post") {
        if (!this.projectId) throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
        A.path = `/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/count-tokens:rawPredict`;
      }
      return super.buildRequest(A);
    }
  };
});

// Register to shared state
__$.aJ6 = aJ6;
