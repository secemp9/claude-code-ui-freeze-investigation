// Module: b$6
// Dependencies: p2, qxA, fxA, FD, A0, Pw, t6, oz, FH, HH1
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b$6 = k(() => {
  __$.p2();
  __$.qxA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.fxA = class fxA extends __$.FD {
    constructor(A) {
      super(A);
    }
    async acquireToken(A) {
      if (this.scopeSet = new __$.A0(A.scopes || []), this.userAssertionHash = await this.cryptoUtils.hashString(A.oboAssertion), A.skipCache || A.claims) return this.executeTokenRequest(A, this.authority, this.userAssertionHash);
      try {
        return await this.getCachedAuthenticationResult(A);
      } catch (K) {
        return await this.executeTokenRequest(A, this.authority, this.userAssertionHash);
      }
    }
    async getCachedAuthenticationResult(A) {
      let K = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, A);
      if (!K) throw this.serverTelemetryManager?.setCacheOutcome(__$.Pw.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), __$.t6(__$.oz.tokenRefreshRequired);else if (__$.FH.isTokenExpired(K.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.serverTelemetryManager?.setCacheOutcome(__$.Pw.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info(`OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within ${this.config.systemOptions.tokenRenewalOffsetSeconds} seconds.`), __$.t6(__$.oz.tokenRefreshRequired);
      let q = this.readIdTokenFromCacheForOBO(K.homeAccountId, A.correlationId),
        Y,
        z = null;
      if (q) {
        Y = __$.HH1.extractTokenClaims(q.secret, __$.eV.base64Decode);
        let w = Y.oid || Y.sub,
          H = {
            homeAccountId: q.homeAccountId,
            environment: q.environment,
            tenantId: q.realm,
            username: __$.u6.EMPTY_STRING,
            localAccountId: w || __$.u6.EMPTY_STRING
          };
        z = this.cacheManager.getAccount(this.cacheManager.generateAccountKey(H), A.correlationId);
      }
      if (this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
      return __$.K0.generateAuthenticationResult(this.cryptoUtils, this.authority, {
        account: z,
        accessToken: K,
        idToken: q,
        refreshToken: null,
        appMetadata: null
      }, !0, A, Y);
    }
    readIdTokenFromCacheForOBO(A, K) {
      let q = {
          homeAccountId: A,
          environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
          credentialType: __$.U2.ID_TOKEN,
          clientId: this.config.authOptions.clientId,
          realm: this.authority.tenant
        },
        Y = this.cacheManager.getIdTokensByFilter(q, K);
      if (Object.values(Y).length < 1) return null;
      return Object.values(Y)[0];
    }
    readAccessTokenFromCacheForOBO(A, K) {
      let q = K.authenticationScheme || __$.x9.BEARER,
        z = {
          credentialType: q && q.toLowerCase() !== __$.x9.BEARER.toLowerCase() ? __$.U2.ACCESS_TOKEN_WITH_AUTH_SCHEME : __$.U2.ACCESS_TOKEN,
          clientId: A,
          target: __$.A0.createSearchScopes(this.scopeSet.asArray()),
          tokenType: q,
          keyId: K.sshKid,
          requestedClaimsHash: K.requestedClaimsHash,
          userAssertionHash: this.userAssertionHash
        },
        w = this.cacheManager.getAccessTokensByFilter(z, K.correlationId),
        H = w.length;
      if (H < 1) return null;else if (H > 1) throw __$.t6(__$.oz.multipleMatchingTokens);
      return w[0];
    }
    async executeTokenRequest(A, K, q) {
      let Y = this.createTokenQueryParameters(A),
        z = __$.p5.appendQueryString(K.tokenEndpoint, Y),
        w = await this.createTokenRequestBody(A),
        H = this.createTokenRequestHeaders(),
        J = {
          clientId: this.config.authOptions.clientId,
          authority: A.authority,
          scopes: A.scopes,
          claims: A.claims,
          authenticationScheme: A.authenticationScheme,
          resourceRequestMethod: A.resourceRequestMethod,
          resourceRequestUri: A.resourceRequestUri,
          shrClaims: A.shrClaims,
          sshKid: A.sshKid
        },
        O = __$.FH.nowSeconds(),
        X = await this.executePostToTokenEndpoint(z, w, H, J, A.correlationId),
        $ = new __$.K0(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
      return $.validateTokenResponse(X.body), await $.handleServerTokenResponse(X.body, this.authority, O, A, void 0, q);
    }
    async createTokenRequestBody(A) {
      let K = new Map();
      if (__$.t4.addClientId(K, this.config.authOptions.clientId), __$.t4.addScopes(K, A.scopes), __$.t4.addGrantType(K, __$.aV.JWT_BEARER), __$.t4.addClientInfo(K), __$.t4.addLibraryInfo(K, this.config.libraryInfo), __$.t4.addApplicationTelemetry(K, this.config.telemetry.application), __$.t4.addThrottling(K), this.serverTelemetryManager) __$.t4.addServerTelemetry(K, this.serverTelemetryManager);
      let q = A.correlationId || this.config.cryptoInterface.createNewGuid();
      if (__$.t4.addCorrelationId(K, q), __$.t4.addRequestTokenUse(K, __$.fKA.ON_BEHALF_OF), __$.t4.addOboAssertion(K, A.oboAssertion), this.config.clientCredentials.clientSecret) __$.t4.addClientSecret(K, this.config.clientCredentials.clientSecret);
      let Y = this.config.clientCredentials.clientAssertion;
      if (Y) __$.t4.addClientAssertion(K, await __$.yM(Y.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), __$.t4.addClientAssertionType(K, Y.assertionType);
      if (A.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) __$.t4.addClaims(K, A.claims, this.config.authOptions.clientCapabilities);
      return __$.iZ.mapToQueryString(K);
    }
  };
});

// Register to shared state
__$.b$6 = b$6;
