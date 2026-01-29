// Module: RJ1
// Dependencies: p2, uKA, FD, Pw, MC, id, A0, FH, c_A, K0
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RJ1 = k(() => {
  __$.p2(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.uKA = class uKA extends __$.FD {
    constructor(A, K) {
      super(A);
      this.appTokenProvider = K;
    }
    async acquireToken(A) {
      if (A.skipCache || A.claims) return this.executeTokenRequest(A, this.authority);
      let [K, q] = await this.getCachedAuthenticationResult(A, this.config, this.cryptoUtils, this.authority, this.cacheManager, this.serverTelemetryManager);
      if (K) {
        if (q === __$.Pw.PROACTIVELY_REFRESHED) {
          this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
          let Y = !0;
          await this.executeTokenRequest(A, this.authority, Y);
        }
        return K;
      } else return this.executeTokenRequest(A, this.authority);
    }
    async getCachedAuthenticationResult(A, K, q, Y, z, w) {
      let H = K,
        J = K,
        O = __$.Pw.NOT_APPLICABLE,
        X;
      if (H.serializableCache && H.persistencePlugin) X = new __$.MC(H.serializableCache, !1), await H.persistencePlugin.beforeCacheAccess(X);
      let $ = this.readAccessTokenFromCache(Y, J.managedIdentityId?.id || H.authOptions.clientId, new __$.A0(A.scopes || []), z, A.correlationId);
      if (H.serializableCache && H.persistencePlugin && X) await H.persistencePlugin.afterCacheAccess(X);
      if (!$) return w?.setCacheOutcome(__$.Pw.NO_CACHED_ACCESS_TOKEN), [null, __$.Pw.NO_CACHED_ACCESS_TOKEN];
      if (__$.FH.isTokenExpired($.expiresOn, H.systemOptions?.tokenRenewalOffsetSeconds || __$.c_A)) return w?.setCacheOutcome(__$.Pw.CACHED_ACCESS_TOKEN_EXPIRED), [null, __$.Pw.CACHED_ACCESS_TOKEN_EXPIRED];
      if ($.refreshOn && __$.FH.isTokenExpired($.refreshOn.toString(), 0)) O = __$.Pw.PROACTIVELY_REFRESHED, w?.setCacheOutcome(__$.Pw.PROACTIVELY_REFRESHED);
      return [await __$.K0.generateAuthenticationResult(q, Y, {
        account: null,
        idToken: null,
        accessToken: $,
        refreshToken: null,
        appMetadata: null
      }, !0, A), O];
    }
    readAccessTokenFromCache(A, K, q, Y, z) {
      let w = {
          homeAccountId: __$.u6.EMPTY_STRING,
          environment: A.canonicalAuthorityUrlComponents.HostNameAndPort,
          credentialType: __$.U2.ACCESS_TOKEN,
          clientId: K,
          realm: A.tenant,
          target: __$.A0.createSearchScopes(q.asArray())
        },
        H = Y.getAccessTokensByFilter(w, z);
      if (H.length < 1) return null;else if (H.length > 1) throw __$.t6(__$.oz.multipleMatchingTokens);
      return H[0];
    }
    async executeTokenRequest(A, K, q) {
      let Y, z;
      if (this.appTokenProvider) {
        this.logger.info("Using appTokenProvider extensibility.");
        let J = {
          correlationId: A.correlationId,
          tenantId: this.config.authOptions.authority.tenant,
          scopes: A.scopes,
          claims: A.claims
        };
        z = __$.FH.nowSeconds();
        let O = await this.appTokenProvider(J);
        Y = {
          access_token: O.accessToken,
          expires_in: O.expiresInSeconds,
          refresh_in: O.refreshInSeconds,
          token_type: __$.x9.BEARER
        };
      } else {
        let J = this.createTokenQueryParameters(A),
          O = __$.p5.appendQueryString(K.tokenEndpoint, J),
          X = await this.createTokenRequestBody(A),
          $ = this.createTokenRequestHeaders(),
          _ = {
            clientId: this.config.authOptions.clientId,
            authority: A.authority,
            scopes: A.scopes,
            claims: A.claims,
            authenticationScheme: A.authenticationScheme,
            resourceRequestMethod: A.resourceRequestMethod,
            resourceRequestUri: A.resourceRequestUri,
            shrClaims: A.shrClaims,
            sshKid: A.sshKid
          };
        this.logger.info("Sending token request to endpoint: " + K.tokenEndpoint), z = __$.FH.nowSeconds();
        let G = await this.executePostToTokenEndpoint(O, X, $, _, A.correlationId);
        Y = G.body, Y.status = G.status;
      }
      let w = new __$.K0(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
      return w.validateTokenResponse(Y, q), await w.handleServerTokenResponse(Y, this.authority, z, A);
    }
    async createTokenRequestBody(A) {
      let K = new Map();
      if (__$.t4.addClientId(K, this.config.authOptions.clientId), __$.t4.addScopes(K, A.scopes, !1), __$.t4.addGrantType(K, __$.aV.CLIENT_CREDENTIALS_GRANT), __$.t4.addLibraryInfo(K, this.config.libraryInfo), __$.t4.addApplicationTelemetry(K, this.config.telemetry.application), __$.t4.addThrottling(K), this.serverTelemetryManager) __$.t4.addServerTelemetry(K, this.serverTelemetryManager);
      let q = A.correlationId || this.config.cryptoInterface.createNewGuid();
      if (__$.t4.addCorrelationId(K, q), this.config.clientCredentials.clientSecret) __$.t4.addClientSecret(K, this.config.clientCredentials.clientSecret);
      let Y = A.clientAssertion || this.config.clientCredentials.clientAssertion;
      if (Y) __$.t4.addClientAssertion(K, await __$.yM(Y.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), __$.t4.addClientAssertionType(K, Y.assertionType);
      if (!__$.Vw.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) __$.t4.addClaims(K, A.claims, this.config.authOptions.clientCapabilities);
      return __$.iZ.mapToQueryString(K);
    }
  };
});

// Register to shared state
__$.RJ1 = RJ1;
