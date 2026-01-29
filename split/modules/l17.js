// Module: l17
// Dependencies: $H1, dbA, YGA, PKA, zH, KGA, nbA, bH1, So, Io
//   ... and 69 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var l17 = k(() => {
  __$.$H1();
  __$.dbA();
  __$.YGA();
  __$.PKA();
  __$.zH();
  __$.KGA();
  __$.nbA();
  __$.bH1();
  __$.So();
  __$.Io();
  __$.H$();
  __$.HGA();
  __$.xo();
  __$.ho();
  __$.CbA();
  __$.s_A();
  __$.ibA();
  __$.JI();
  __$.uU();
  __$.xH1();
  __$.EH1();
  __$.RH1();
  __$.IU();
  __$.zX(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.OGA = class OGA extends __$.FD {
    constructor(A, K) {
      super(A, K);
    }
    async acquireToken(A) {
      this.performanceClient?.addQueueMeasurement(__$.j6.RefreshTokenClientAcquireToken, A.correlationId);
      let K = __$.gT(),
        q = await __$.e9(this.executeTokenRequest.bind(this), __$.j6.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, A.correlationId)(A, this.authority),
        Y = q.headers?.[__$.YH.X_MS_REQUEST_ID],
        z = new __$.K0(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
      return z.validateTokenResponse(q.body), __$.e9(z.handleServerTokenResponse.bind(z), __$.j6.HandleServerTokenResponse, this.logger, this.performanceClient, A.correlationId)(q.body, this.authority, K, A, void 0, void 0, !0, A.forceCache, Y);
    }
    async acquireTokenByRefreshToken(A) {
      if (!A) throw __$.az(__$.ZKA);
      if (this.performanceClient?.addQueueMeasurement(__$.j6.RefreshTokenClientAcquireTokenByRefreshToken, A.correlationId), !A.account) throw __$.t6(__$.kU);
      if (this.cacheManager.isAppMetadataFOCI(A.account.environment)) try {
        return await __$.e9(this.acquireTokenWithCachedRefreshToken.bind(this), __$.j6.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, A.correlationId)(A, !0);
      } catch (q) {
        let Y = q instanceof __$.FT && q.errorCode === __$.uo,
          z = q instanceof __$.RM && q.errorCode === __$.lhA.INVALID_GRANT_ERROR && q.subError === __$.lhA.CLIENT_MISMATCH_ERROR;
        if (Y || z) return __$.e9(this.acquireTokenWithCachedRefreshToken.bind(this), __$.j6.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, A.correlationId)(A, !1);else throw q;
      }
      return __$.e9(this.acquireTokenWithCachedRefreshToken.bind(this), __$.j6.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, A.correlationId)(A, !1);
    }
    async acquireTokenWithCachedRefreshToken(A, K) {
      this.performanceClient?.addQueueMeasurement(__$.j6.RefreshTokenClientAcquireTokenWithCachedRefreshToken, A.correlationId);
      let q = __$.B17(this.cacheManager.getRefreshToken.bind(this.cacheManager), __$.j6.CacheManagerGetRefreshToken, this.logger, this.performanceClient, A.correlationId)(A.account, K, A.correlationId, void 0, this.performanceClient);
      if (!q) throw __$.SH1(__$.uo);
      if (q.expiresOn && __$.zGA(q.expiresOn, A.refreshTokenExpirationOffsetSeconds || __$.i8Y)) throw this.performanceClient?.addFields({
        rtExpiresOnMs: Number(q.expiresOn)
      }, A.correlationId), __$.SH1(__$.lbA);
      let Y = {
        ...A,
        refreshToken: q.secret,
        authenticationScheme: A.authenticationScheme || __$.x9.BEARER,
        ccsCredential: {
          credential: A.account.homeAccountId,
          type: __$.CM.HOME_ACCOUNT_ID
        }
      };
      try {
        return await __$.e9(this.acquireToken.bind(this), __$.j6.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, A.correlationId)(Y);
      } catch (z) {
        if (z instanceof __$.FT) {
          if (this.performanceClient?.addFields({
            rtExpiresOnMs: Number(q.expiresOn)
          }, A.correlationId), z.subError === __$.Bo) {
            this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
            let w = this.cacheManager.generateCredentialKey(q);
            this.cacheManager.removeRefreshToken(w, A.correlationId);
          }
        }
        throw z;
      }
    }
    async executeTokenRequest(A, K) {
      this.performanceClient?.addQueueMeasurement(__$.j6.RefreshTokenClientExecuteTokenRequest, A.correlationId);
      let q = this.createTokenQueryParameters(A),
        Y = __$.p5.appendQueryString(K.tokenEndpoint, q),
        z = await __$.e9(this.createTokenRequestBody.bind(this), __$.j6.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, A.correlationId)(A),
        w = this.createTokenRequestHeaders(A.ccsCredential),
        H = __$.JGA(this.config.authOptions.clientId, A);
      return __$.e9(this.executePostToTokenEndpoint.bind(this), __$.j6.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, A.correlationId)(Y, z, w, H, A.correlationId, __$.j6.RefreshTokenClientExecutePostToTokenEndpoint);
    }
    async createTokenRequestBody(A) {
      this.performanceClient?.addQueueMeasurement(__$.j6.RefreshTokenClientCreateTokenRequestBody, A.correlationId);
      let K = new Map();
      if (__$.vKA(K, A.embeddedClientId || A.tokenBodyParameters?.[__$.ku] || this.config.authOptions.clientId), A.redirectUri) __$.EKA(K, A.redirectUri);
      if (__$.TKA(K, A.scopes, !0, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes), __$.xbA(K, __$.aV.REFRESH_TOKEN_GRANT), __$.LKA(K), __$.RbA(K, this.config.libraryInfo), __$.ybA(K, this.config.telemetry.application), __$.FbA(K), this.serverTelemetryManager && !__$.XH1(this.config)) __$.gbA(K, this.serverTelemetryManager);
      if (__$.PX6(K, A.refreshToken), this.config.clientCredentials.clientSecret) __$.SbA(K, this.config.clientCredentials.clientSecret);
      if (this.config.clientCredentials.clientAssertion) {
        let q = this.config.clientCredentials.clientAssertion;
        __$.hbA(K, await __$.yM(q.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), __$.bbA(K, q.assertionType);
      }
      if (A.authenticationScheme === __$.x9.POP) {
        let q = new __$.RKA(this.cryptoUtils, this.performanceClient),
          Y;
        if (!A.popKid) Y = (await __$.e9(q.generateCnf.bind(q), __$.j6.PopTokenGenerateCnf, this.logger, this.performanceClient, A.correlationId)(A, this.logger)).reqCnfString;else Y = this.cryptoUtils.encodeKid(A.popKid);
        __$.BbA(K, Y);
      } else if (A.authenticationScheme === __$.x9.SSH) if (A.sshJwk) __$.mbA(K, A.sshJwk);else throw __$.az(__$.yU);
      if (!__$.Vw.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) __$.kKA(K, A.claims, this.config.authOptions.clientCapabilities);
      if (this.config.systemOptions.preventCorsPreflight && A.ccsCredential) switch (A.ccsCredential.type) {
        case __$.CM.HOME_ACCOUNT_ID:
          try {
            let q = __$.vu(A.ccsCredential.credential);
            __$.hU(K, q);
          } catch (q) {
            this.logger.verbose("Could not parse home account ID for CCS Header: " + q);
          }
          break;
        case __$.CM.UPN:
          __$.bo(K, A.ccsCredential.credential);
          break;
      }
      if (A.embeddedClientId) __$.xU(K, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
      if (A.tokenBodyParameters) __$.bU(K, A.tokenBodyParameters);
      return __$.NKA(K, A.correlationId, this.performanceClient), __$.Eu(K);
    }
  };
});

// Register to shared state
__$.l17 = l17;
