// Module: H06
// Dependencies: X17, Po, NU, TM, y_A, mT, YX, U_A, nw1, Pw1
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var H06 = k(() => {
  __$.X17();
  __$.Po();
  __$.NU();
  __$.TM();
  __$.y_A();
  __$.mT();
  __$.YX();
  __$.U_A = class U_A extends __$.nw1 {
    constructor(A) {
      var K, q;
      let Y = `azsdk-js-identity/${__$.Pw1}`,
        z = ((K = A === null || A === void 0 ? void 0 : A.userAgentOptions) === null || K === void 0 ? void 0 : K.userAgentPrefix) ? `${A.userAgentOptions.userAgentPrefix} ${Y}` : `${Y}`,
        w = __$.A8Y(A);
      if (!w.startsWith("https:")) throw Error("The authorityHost address must use the 'https' protocol.");
      super(Object.assign(Object.assign({
        requestContentType: "application/json; charset=utf-8",
        retryOptions: {
          maxRetries: 3
        }
      }, A), {
        userAgentOptions: {
          userAgentPrefix: z
        },
        baseUri: w
      }));
      if (this.allowInsecureConnection = !1, this.authorityHost = w, this.abortControllers = new Map(), this.allowLoggingAccountIdentifiers = (q = A === null || A === void 0 ? void 0 : A.loggingOptions) === null || q === void 0 ? void 0 : q.allowLoggingAccountIdentifiers, this.tokenCredentialOptions = Object.assign({}, A), A === null || A === void 0 ? void 0 : A.allowInsecureConnection) this.allowInsecureConnection = A.allowInsecureConnection;
    }
    async sendTokenRequest(A) {
      __$.ZC.info(`IdentityClient: sending token request to [${A.url}]`);
      let K = await this.sendRequest(A);
      if (K.bodyAsText && (K.status === 200 || K.status === 201)) {
        let q = JSON.parse(K.bodyAsText);
        if (!q.access_token) return null;
        this.logIdentifiers(K);
        let Y = {
          accessToken: {
            token: q.access_token,
            expiresOnTimestamp: __$.G17(q),
            refreshAfterTimestamp: __$.Z17(q),
            tokenType: "Bearer"
          },
          refreshToken: q.refresh_token
        };
        return __$.ZC.info(`IdentityClient: [${A.url}] token acquired, expires on ${Y.accessToken.expiresOnTimestamp}`), Y;
      } else {
        let q = new __$.khA(K.status, K.bodyAsText);
        throw __$.ZC.warning(`IdentityClient: authentication error. HTTP status: ${K.status}, ${q.errorResponse.errorDescription}`), q;
      }
    }
    async refreshAccessToken(A, K, q, Y, z, w = {}) {
      if (Y === void 0) return null;
      __$.ZC.info(`IdentityClient: refreshing access token with client ID: ${K}, scopes: ${q} started`);
      let H = {
        grant_type: "refresh_token",
        client_id: K,
        refresh_token: Y,
        scope: q
      };
      if (z !== void 0) H.client_secret = z;
      let J = new URLSearchParams(H);
      return __$.EJ.withSpan("IdentityClient.refreshAccessToken", w, async O => {
        try {
          let X = __$.$17(A),
            $ = __$.wI({
              url: `${this.authorityHost}/${A}/${X}`,
              method: "POST",
              body: J.toString(),
              abortSignal: w.abortSignal,
              headers: __$.U7A({
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
              }),
              tracingOptions: O.tracingOptions
            }),
            _ = await this.sendTokenRequest($);
          return __$.ZC.info(`IdentityClient: refreshed token for client ID: ${K}`), _;
        } catch (X) {
          if (X.name === __$.HO6 && X.errorResponse.error === "interaction_required") return __$.ZC.info(`IdentityClient: interaction required for client ID: ${K}`), null;else throw __$.ZC.warning(`IdentityClient: failed refreshing token for client ID: ${K}: ${X}`), X;
        }
      });
    }
    generateAbortSignal(A) {
      let K = new AbortController(),
        q = this.abortControllers.get(A) || [];
      q.push(K), this.abortControllers.set(A, q);
      let Y = K.signal.onabort;
      return K.signal.onabort = (...z) => {
        if (this.abortControllers.set(A, void 0), Y) Y.apply(K.signal, z);
      }, K.signal;
    }
    abortRequests(A) {
      let K = A || __$.dhA,
        q = [...(this.abortControllers.get(K) || []), ...(this.abortControllers.get(__$.dhA) || [])];
      if (!q.length) return;
      for (let Y of q) Y.abort();
      this.abortControllers.set(K, void 0);
    }
    getCorrelationId(A) {
      var K;
      let q = (K = A === null || A === void 0 ? void 0 : A.body) === null || K === void 0 ? void 0 : K.split("&").map(Y => Y.split("=")).find(([Y]) => Y === "client-request-id");
      return q && q.length ? q[1] || __$.dhA : __$.dhA;
    }
    async sendGetRequestAsync(A, K) {
      let q = __$.wI({
          url: A,
          method: "GET",
          body: K === null || K === void 0 ? void 0 : K.body,
          allowInsecureConnection: this.allowInsecureConnection,
          headers: __$.U7A(K === null || K === void 0 ? void 0 : K.headers),
          abortSignal: this.generateAbortSignal(__$.dhA)
        }),
        Y = await this.sendRequest(q);
      return this.logIdentifiers(Y), {
        body: Y.bodyAsText ? JSON.parse(Y.bodyAsText) : void 0,
        headers: Y.headers.toJSON(),
        status: Y.status
      };
    }
    async sendPostRequestAsync(A, K) {
      let q = __$.wI({
          url: A,
          method: "POST",
          body: K === null || K === void 0 ? void 0 : K.body,
          headers: __$.U7A(K === null || K === void 0 ? void 0 : K.headers),
          allowInsecureConnection: this.allowInsecureConnection,
          abortSignal: this.generateAbortSignal(this.getCorrelationId(K))
        }),
        Y = await this.sendRequest(q);
      return this.logIdentifiers(Y), {
        body: Y.bodyAsText ? JSON.parse(Y.bodyAsText) : void 0,
        headers: Y.headers.toJSON(),
        status: Y.status
      };
    }
    getTokenCredentialOptions() {
      return this.tokenCredentialOptions;
    }
    logIdentifiers(A) {
      if (!this.allowLoggingAccountIdentifiers || !A.bodyAsText) return;
      let K = "No User Principal Name available";
      try {
        let Y = (A.parsedBody || JSON.parse(A.bodyAsText)).access_token;
        if (!Y) return;
        let z = Y.split(".")[1],
          {
            appid: w,
            upn: H,
            tid: J,
            oid: O
          } = JSON.parse(Buffer.from(z, "base64").toString("utf8"));
        __$.ZC.info(`[Authenticated account] Client ID: ${w}. Tenant ID: ${J}. User Principal Name: ${H || K}. Object ID (user): ${O}`);
      } catch (q) {
        __$.ZC.warning("allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:", q.message);
      }
    }
  };
});

// Register to shared state
__$.H06 = H06;
