// Module: _J6
// Dependencies: oy, GhA, XJ6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _J6 = v(ia4 => {
  Object.defineProperty(ia4, "__esModule", {
    value: !0
  });
  ia4.StsCredentials = void 0;
  var Xe9 = __$.oy(),
    $e9 = CA("querystring"),
    _e9 = __$.GhA(),
    la4 = __$.XJ6();
  class $J6 extends la4.OAuthClientAuthHandler {
    constructor(A, K) {
      super(K);
      this.tokenExchangeEndpoint = A, this.transporter = new _e9.DefaultTransporter();
    }
    async exchangeToken(A, K, q) {
      var Y, z, w;
      let H = {
        grant_type: A.grantType,
        resource: A.resource,
        audience: A.audience,
        scope: (Y = A.scope) === null || Y === void 0 ? void 0 : Y.join(" "),
        requested_token_type: A.requestedTokenType,
        subject_token: A.subjectToken,
        subject_token_type: A.subjectTokenType,
        actor_token: (z = A.actingParty) === null || z === void 0 ? void 0 : z.actorToken,
        actor_token_type: (w = A.actingParty) === null || w === void 0 ? void 0 : w.actorTokenType,
        options: q && JSON.stringify(q)
      };
      Object.keys(H).forEach(X => {
        if (typeof H[X] > "u") delete H[X];
      });
      let J = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      Object.assign(J, K || {});
      let O = {
        ...$J6.RETRY_CONFIG,
        url: this.tokenExchangeEndpoint.toString(),
        method: "POST",
        headers: J,
        data: $e9.stringify(H),
        responseType: "json"
      };
      this.applyClientAuthenticationOptions(O);
      try {
        let X = await this.transporter.request(O),
          $ = X.data;
        return $.res = X, $;
      } catch (X) {
        if (X instanceof Xe9.GaxiosError && X.response) throw (0, la4.getErrorFromOAuthErrorResponse)(X.response.data, X);
        throw X;
      }
    }
  }
  ia4.StsCredentials = $J6;
});

// Register to shared state
__$._J6 = _J6;
