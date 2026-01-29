// Module: i17
// Dependencies: dbA, xo, H$, nbA, zH, So, t_A, JI, uU, TH1
//   ... and 17 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var i17 = k(() => {
  __$.dbA();
  __$.xo();
  __$.H$();
  __$.nbA();
  __$.zH();
  __$.So();
  __$.t_A();
  __$.JI();
  __$.uU();
  __$.TH1();
  __$.zX(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.BH1 = class BH1 extends __$.FD {
    constructor(A, K) {
      super(A, K);
    }
    async acquireCachedToken(A) {
      this.performanceClient?.addQueueMeasurement(__$.j6.SilentFlowClientAcquireCachedToken, A.correlationId);
      let K = __$.Pw.NOT_APPLICABLE;
      if (A.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !__$.Vw.isEmptyObj(A.claims)) throw this.setCacheOutcome(__$.Pw.FORCE_REFRESH_OR_CLAIMS, A.correlationId), __$.t6(__$.LU);
      if (!A.account) throw __$.t6(__$.kU);
      let q = A.account.tenantId || __$.g17(A.authority),
        Y = this.cacheManager.getTokenKeys(),
        z = this.cacheManager.getAccessToken(A.account, A, Y, q);
      if (!z) throw this.setCacheOutcome(__$.Pw.NO_CACHED_ACCESS_TOKEN, A.correlationId), __$.t6(__$.LU);else if (__$.NX6(z.cachedAt) || __$.zGA(z.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.setCacheOutcome(__$.Pw.CACHED_ACCESS_TOKEN_EXPIRED, A.correlationId), __$.t6(__$.LU);else if (z.refreshOn && __$.zGA(z.refreshOn, 0)) K = __$.Pw.PROACTIVELY_REFRESHED;
      let w = A.authority || this.authority.getPreferredCache(),
        H = {
          account: this.cacheManager.getAccount(this.cacheManager.generateAccountKey(A.account), A.correlationId),
          accessToken: z,
          idToken: this.cacheManager.getIdToken(A.account, A.correlationId, Y, q, this.performanceClient),
          refreshToken: null,
          appMetadata: this.cacheManager.readAppMetadataFromCache(w)
        };
      if (this.setCacheOutcome(K, A.correlationId), this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
      return [await __$.e9(this.generateResultFromCacheRecord.bind(this), __$.j6.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, A.correlationId)(H, A), K];
    }
    setCacheOutcome(A, K) {
      if (this.serverTelemetryManager?.setCacheOutcome(A), this.performanceClient?.addFields({
        cacheOutcome: A
      }, K), A !== __$.Pw.NOT_APPLICABLE) this.logger.info(`Token refresh is required due to cache outcome: ${A}`);
    }
    async generateResultFromCacheRecord(A, K) {
      this.performanceClient?.addQueueMeasurement(__$.j6.SilentFlowClientGenerateResultFromCacheRecord, K.correlationId);
      let q;
      if (A.idToken) q = __$.SU(A.idToken.secret, this.config.cryptoInterface.base64Decode);
      if (K.maxAge || K.maxAge === 0) {
        let Y = q?.auth_time;
        if (!Y) throw __$.t6(__$.EU);
        __$.vbA(Y, K.maxAge);
      }
      return __$.K0.generateAuthenticationResult(this.cryptoUtils, this.authority, A, !0, K, q);
    }
  };
});

// Register to shared state
__$.i17 = i17;
