// Module: h$6
// Dependencies: p2, PxA, FD, FH, K0, p5, t4, iZ, t6, oz
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var h$6 = k(() => {
  __$.p2(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.PxA = class PxA extends __$.FD {
    constructor(A) {
      super(A);
    }
    async acquireToken(A) {
      let K = await this.getDeviceCode(A);
      A.deviceCodeCallback(K);
      let q = __$.FH.nowSeconds(),
        Y = await this.acquireTokenWithDeviceCode(A, K),
        z = new __$.K0(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
      return z.validateTokenResponse(Y), z.handleServerTokenResponse(Y, this.authority, q, A);
    }
    async getDeviceCode(A) {
      let K = this.createExtraQueryParameters(A),
        q = __$.p5.appendQueryString(this.authority.deviceCodeEndpoint, K),
        Y = this.createQueryString(A),
        z = this.createTokenRequestHeaders(),
        w = {
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
      return this.executePostRequestToDeviceCodeEndpoint(q, Y, z, w, A.correlationId);
    }
    createExtraQueryParameters(A) {
      let K = new Map();
      if (A.extraQueryParameters) __$.t4.addExtraQueryParameters(K, A.extraQueryParameters);
      return __$.iZ.mapToQueryString(K);
    }
    async executePostRequestToDeviceCodeEndpoint(A, K, q, Y, z) {
      let {
        body: {
          user_code: w,
          device_code: H,
          verification_uri: J,
          expires_in: O,
          interval: X,
          message: $
        }
      } = await this.sendPostRequest(Y, A, {
        body: K,
        headers: q
      }, z);
      return {
        userCode: w,
        deviceCode: H,
        verificationUri: J,
        expiresIn: O,
        interval: X,
        message: $
      };
    }
    createQueryString(A) {
      let K = new Map();
      if (__$.t4.addScopes(K, A.scopes), __$.t4.addClientId(K, this.config.authOptions.clientId), A.extraQueryParameters) __$.t4.addExtraQueryParameters(K, A.extraQueryParameters);
      if (A.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) __$.t4.addClaims(K, A.claims, this.config.authOptions.clientCapabilities);
      return __$.iZ.mapToQueryString(K);
    }
    continuePolling(A, K, q) {
      if (q) throw this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true"), __$.t6(__$.oz.deviceCodePollingCancelled);else if (K && K < A && __$.FH.nowSeconds() > K) throw this.logger.error(`User defined timeout for device code polling reached. The timeout was set for ${K}`), __$.t6(__$.oz.userTimeoutReached);else if (__$.FH.nowSeconds() > A) {
        if (K) this.logger.verbose(`User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for ${K}`);
        throw this.logger.error(`Device code expired. Expiration time of device code was ${A}`), __$.t6(__$.oz.deviceCodeExpired);
      }
      return !0;
    }
    async acquireTokenWithDeviceCode(A, K) {
      let q = this.createTokenQueryParameters(A),
        Y = __$.p5.appendQueryString(this.authority.tokenEndpoint, q),
        z = this.createTokenRequestBody(A, K),
        w = this.createTokenRequestHeaders(),
        H = A.timeout ? __$.FH.nowSeconds() + A.timeout : void 0,
        J = __$.FH.nowSeconds() + K.expiresIn,
        O = K.interval * 1000;
      while (this.continuePolling(J, H, A.cancel)) {
        let X = {
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
          $ = await this.executePostToTokenEndpoint(Y, z, w, X, A.correlationId);
        if ($.body && $.body.error) {
          if ($.body.error === __$.u6.AUTHORIZATION_PENDING) this.logger.info("Authorization pending. Continue polling."), await __$.FH.delay(O);else throw this.logger.info("Unexpected error in polling from the server"), __$.$06(__$.l_A.postRequestFailed, $.body.error);
        } else return this.logger.verbose("Authorization completed successfully. Polling stopped."), $.body;
      }
      throw this.logger.error("Polling stopped for unknown reasons."), __$.t6(__$.oz.deviceCodeUnknownError);
    }
    createTokenRequestBody(A, K) {
      let q = new Map();
      __$.t4.addScopes(q, A.scopes), __$.t4.addClientId(q, this.config.authOptions.clientId), __$.t4.addGrantType(q, __$.aV.DEVICE_CODE_GRANT), __$.t4.addDeviceCode(q, K.deviceCode);
      let Y = A.correlationId || this.config.cryptoInterface.createNewGuid();
      if (__$.t4.addCorrelationId(q, Y), __$.t4.addClientInfo(q), __$.t4.addLibraryInfo(q, this.config.libraryInfo), __$.t4.addApplicationTelemetry(q, this.config.telemetry.application), __$.t4.addThrottling(q), this.serverTelemetryManager) __$.t4.addServerTelemetry(q, this.serverTelemetryManager);
      if (!__$.Vw.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) __$.t4.addClaims(q, A.claims, this.config.authOptions.clientCapabilities);
      return __$.iZ.mapToQueryString(q);
    }
  };
});

// Register to shared state
__$.h$6 = h$6;
