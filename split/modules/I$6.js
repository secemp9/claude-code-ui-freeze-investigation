// Module: I$6
// Dependencies: p2, MxA, FD, FH, K0, p5, CM, t4, p_A, aV
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var I$6 = k(() => {
  __$.p2(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.MxA = class MxA extends __$.FD {
    constructor(A) {
      super(A);
    }
    async acquireToken(A) {
      this.logger.info("in acquireToken call in username-password client");
      let K = __$.FH.nowSeconds(),
        q = await this.executeTokenRequest(this.authority, A),
        Y = new __$.K0(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
      return Y.validateTokenResponse(q.body), Y.handleServerTokenResponse(q.body, this.authority, K, A);
    }
    async executeTokenRequest(A, K) {
      let q = this.createTokenQueryParameters(K),
        Y = __$.p5.appendQueryString(A.tokenEndpoint, q),
        z = await this.createTokenRequestBody(K),
        w = this.createTokenRequestHeaders({
          credential: K.username,
          type: __$.CM.UPN
        }),
        H = {
          clientId: this.config.authOptions.clientId,
          authority: A.canonicalAuthority,
          scopes: K.scopes,
          claims: K.claims,
          authenticationScheme: K.authenticationScheme,
          resourceRequestMethod: K.resourceRequestMethod,
          resourceRequestUri: K.resourceRequestUri,
          shrClaims: K.shrClaims,
          sshKid: K.sshKid
        };
      return this.executePostToTokenEndpoint(Y, z, w, H, K.correlationId);
    }
    async createTokenRequestBody(A) {
      let K = new Map();
      if (__$.t4.addClientId(K, this.config.authOptions.clientId), __$.t4.addUsername(K, A.username), __$.t4.addPassword(K, A.password), __$.t4.addScopes(K, A.scopes), __$.t4.addResponseType(K, __$.p_A.IDTOKEN_TOKEN), __$.t4.addGrantType(K, __$.aV.RESOURCE_OWNER_PASSWORD_GRANT), __$.t4.addClientInfo(K), __$.t4.addLibraryInfo(K, this.config.libraryInfo), __$.t4.addApplicationTelemetry(K, this.config.telemetry.application), __$.t4.addThrottling(K), this.serverTelemetryManager) __$.t4.addServerTelemetry(K, this.serverTelemetryManager);
      let q = A.correlationId || this.config.cryptoInterface.createNewGuid();
      if (__$.t4.addCorrelationId(K, q), this.config.clientCredentials.clientSecret) __$.t4.addClientSecret(K, this.config.clientCredentials.clientSecret);
      let Y = this.config.clientCredentials.clientAssertion;
      if (Y) __$.t4.addClientAssertion(K, await __$.yM(Y.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), __$.t4.addClientAssertionType(K, Y.assertionType);
      if (!__$.Vw.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) __$.t4.addClaims(K, A.claims, this.config.authOptions.clientCapabilities);
      if (this.config.systemOptions.preventCorsPreflight && A.username) __$.t4.addCcsUpn(K, A.username);
      return __$.iZ.mapToQueryString(K);
    }
  };
});

// Register to shared state
__$.I$6 = I$6;
