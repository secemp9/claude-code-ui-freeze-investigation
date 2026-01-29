// Module: UH6
// Dependencies: oy, $hA, B7A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UH6 = v(go4 => {
  Object.defineProperty(go4, "__esModule", {
    value: !0
  });
  go4.Compute = void 0;
  var ns9 = __$.oy(),
    Bo4 = __$.$hA(),
    rs9 = __$.B7A();
  class mo4 extends rs9.OAuth2Client {
    constructor(A = {}) {
      super(A);
      this.credentials = {
        expiry_date: 1,
        refresh_token: "compute-placeholder"
      }, this.serviceAccountEmail = A.serviceAccountEmail || "default", this.scopes = Array.isArray(A.scopes) ? A.scopes : A.scopes ? [A.scopes] : [];
    }
    async refreshTokenNoCache(A) {
      let K = `service-accounts/${this.serviceAccountEmail}/token`,
        q;
      try {
        let z = {
          property: K
        };
        if (this.scopes.length > 0) z.params = {
          scopes: this.scopes.join(",")
        };
        q = await Bo4.instance(z);
      } catch (z) {
        if (z instanceof ns9.GaxiosError) z.message = `Could not refresh access token: ${z.message}`, this.wrapError(z);
        throw z;
      }
      let Y = q;
      if (q && q.expires_in) Y.expiry_date = new Date().getTime() + q.expires_in * 1000, delete Y.expires_in;
      return this.emit("tokens", Y), {
        tokens: Y,
        res: null
      };
    }
    async fetchIdToken(A) {
      let K = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${A}`,
        q;
      try {
        let Y = {
          property: K
        };
        q = await Bo4.instance(Y);
      } catch (Y) {
        if (Y instanceof Error) Y.message = `Could not fetch ID token: ${Y.message}`;
        throw Y;
      }
      return q;
    }
    wrapError(A) {
      let K = A.response;
      if (K && K.status) {
        if (A.status = K.status, K.status === 403) A.message = "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " + A.message;else if (K.status === 404) A.message = "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " + A.message;
      }
    }
  }
  go4.Compute = mo4;
});

// Register to shared state
__$.UH6 = UH6;
