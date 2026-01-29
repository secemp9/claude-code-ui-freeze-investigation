// Module: c17
// Dependencies: dbA, YGA, PKA, zH, KGA, $H1, nbA, So, H$, ho
//   ... and 67 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var c17 = k(() => {
  __$.dbA();
  __$.YGA();
  __$.PKA();
  __$.zH();
  __$.KGA();
  __$.$H1();
  __$.nbA();
  __$.So();
  __$.H$();
  __$.ho();
  __$.bH1();
  __$.xo();
  __$.s_A();
  __$.CbA();
  __$.Io();
  __$.JI();
  __$.uU();
  __$.xH1();
  __$.EH1();
  __$.zX();
  __$.IU(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.uH1 = class uH1 extends __$.FD {
    constructor(A, K) {
      super(A, K);
      this.includeRedirectUri = !0, this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
    }
    async acquireToken(A, K) {
      if (this.performanceClient?.addQueueMeasurement(__$.j6.AuthClientAcquireToken, A.correlationId), !A.code) throw __$.t6(__$.KKA);
      let q = __$.gT(),
        Y = await __$.e9(this.executeTokenRequest.bind(this), __$.j6.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, A.correlationId)(this.authority, A),
        z = Y.headers?.[__$.YH.X_MS_REQUEST_ID],
        w = new __$.K0(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
      return w.validateTokenResponse(Y.body), __$.e9(w.handleServerTokenResponse.bind(w), __$.j6.HandleServerTokenResponse, this.logger, this.performanceClient, A.correlationId)(Y.body, this.authority, q, A, K, void 0, void 0, void 0, z);
    }
    getLogoutUri(A) {
      if (!A) throw __$.az(__$.WKA);
      let K = this.createLogoutUrlQueryString(A);
      return __$.p5.appendQueryString(this.authority.endSessionEndpoint, K);
    }
    async executeTokenRequest(A, K) {
      this.performanceClient?.addQueueMeasurement(__$.j6.AuthClientExecuteTokenRequest, K.correlationId);
      let q = this.createTokenQueryParameters(K),
        Y = __$.p5.appendQueryString(A.tokenEndpoint, q),
        z = await __$.e9(this.createTokenRequestBody.bind(this), __$.j6.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, K.correlationId)(K),
        w = void 0;
      if (K.clientInfo) try {
        let O = __$.a_A(K.clientInfo, this.cryptoUtils.base64Decode);
        w = {
          credential: `${O.uid}${__$.vU.CLIENT_INFO_SEPARATOR}${O.utid}`,
          type: __$.CM.HOME_ACCOUNT_ID
        };
      } catch (O) {
        this.logger.verbose("Could not parse client info for CCS Header: " + O);
      }
      let H = this.createTokenRequestHeaders(w || K.ccsCredential),
        J = __$.JGA(this.config.authOptions.clientId, K);
      return __$.e9(this.executePostToTokenEndpoint.bind(this), __$.j6.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, K.correlationId)(Y, z, H, J, K.correlationId, __$.j6.AuthorizationCodeClientExecutePostToTokenEndpoint);
    }
    async createTokenRequestBody(A) {
      this.performanceClient?.addQueueMeasurement(__$.j6.AuthClientCreateTokenRequestBody, A.correlationId);
      let K = new Map();
      if (__$.vKA(K, A.embeddedClientId || A.tokenBodyParameters?.[__$.ku] || this.config.authOptions.clientId), !this.includeRedirectUri) {
        if (!A.redirectUri) throw __$.az(__$.XKA);
      } else __$.EKA(K, A.redirectUri);
      if (__$.TKA(K, A.scopes, !0, this.oidcDefaultScopes), __$.MX6(K, A.code), __$.RbA(K, this.config.libraryInfo), __$.ybA(K, this.config.telemetry.application), __$.FbA(K), this.serverTelemetryManager && !__$.XH1(this.config)) __$.gbA(K, this.serverTelemetryManager);
      if (A.codeVerifier) __$.VX6(K, A.codeVerifier);
      if (this.config.clientCredentials.clientSecret) __$.SbA(K, this.config.clientCredentials.clientSecret);
      if (this.config.clientCredentials.clientAssertion) {
        let Y = this.config.clientCredentials.clientAssertion;
        __$.hbA(K, await __$.yM(Y.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), __$.bbA(K, Y.assertionType);
      }
      if (__$.xbA(K, __$.aV.AUTHORIZATION_CODE_GRANT), __$.LKA(K), A.authenticationScheme === __$.x9.POP) {
        let Y = new __$.RKA(this.cryptoUtils, this.performanceClient),
          z;
        if (!A.popKid) z = (await __$.e9(Y.generateCnf.bind(Y), __$.j6.PopTokenGenerateCnf, this.logger, this.performanceClient, A.correlationId)(A, this.logger)).reqCnfString;else z = this.cryptoUtils.encodeKid(A.popKid);
        __$.BbA(K, z);
      } else if (A.authenticationScheme === __$.x9.SSH) if (A.sshJwk) __$.mbA(K, A.sshJwk);else throw __$.az(__$.yU);
      if (!__$.Vw.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) __$.kKA(K, A.claims, this.config.authOptions.clientCapabilities);
      let q = void 0;
      if (A.clientInfo) try {
        let Y = __$.a_A(A.clientInfo, this.cryptoUtils.base64Decode);
        q = {
          credential: `${Y.uid}${__$.vU.CLIENT_INFO_SEPARATOR}${Y.utid}`,
          type: __$.CM.HOME_ACCOUNT_ID
        };
      } catch (Y) {
        this.logger.verbose("Could not parse client info for CCS Header: " + Y);
      } else q = A.ccsCredential;
      if (this.config.systemOptions.preventCorsPreflight && q) switch (q.type) {
        case __$.CM.HOME_ACCOUNT_ID:
          try {
            let Y = __$.vu(q.credential);
            __$.hU(K, Y);
          } catch (Y) {
            this.logger.verbose("Could not parse home account ID for CCS Header: " + Y);
          }
          break;
        case __$.CM.UPN:
          __$.bo(K, q.credential);
          break;
      }
      if (A.embeddedClientId) __$.xU(K, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
      if (A.tokenBodyParameters) __$.bU(K, A.tokenBodyParameters);
      if (A.enableSpaAuthorizationCode && (!A.tokenBodyParameters || !A.tokenBodyParameters[__$.WH1])) __$.bU(K, {
        [__$.WH1]: "1"
      });
      return __$.NKA(K, A.correlationId, this.performanceClient), __$.Eu(K);
    }
    createLogoutUrlQueryString(A) {
      let K = new Map();
      if (A.postLogoutRedirectUri) __$.GX6(K, A.postLogoutRedirectUri);
      if (A.correlationId) __$.CKA(K, A.correlationId);
      if (A.idTokenHint) __$.ZX6(K, A.idTokenHint);
      if (A.state) __$.IbA(K, A.state);
      if (A.logoutHint) __$.fX6(K, A.logoutHint);
      if (A.extraQueryParameters) __$.bU(K, A.extraQueryParameters);
      if (this.config.authOptions.instanceAware) __$.ubA(K);
      return __$.Eu(K, this.config.authOptions.encodeExtraQueryParams, A.extraQueryParameters);
    }
  };
});

// Register to shared state
__$.c17 = c17;
