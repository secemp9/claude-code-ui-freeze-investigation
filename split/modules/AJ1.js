// Module: AJ1
// Dependencies: p2, mH1, rw1, eH1, Z87, hKA, VKA, e_A, J$, LM
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AJ1 = k(() => {
  __$.p2();
  __$.mH1();
  __$.rw1();
  __$.eH1();
  __$.Z87(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.hKA = class hKA extends __$.VKA {
    constructor(A, K, q, Y) {
      super(K, q, A, new __$.e_A(), Y);
      this.cache = {}, this.changeEmitters = [], this.logger = A;
    }
    registerChangeEmitter(A) {
      this.changeEmitters.push(A);
    }
    emitChange() {
      this.changeEmitters.forEach(A => A.call(null));
    }
    cacheToInMemoryCache(A) {
      let K = {
        accounts: {},
        idTokens: {},
        accessTokens: {},
        refreshTokens: {},
        appMetadata: {}
      };
      for (let q in A) {
        let Y = A[q];
        if (typeof Y !== "object") continue;
        if (Y instanceof __$.J$) K.accounts[q] = Y;else if (__$.LM.isIdTokenEntity(Y)) K.idTokens[q] = Y;else if (__$.LM.isAccessTokenEntity(Y)) K.accessTokens[q] = Y;else if (__$.LM.isRefreshTokenEntity(Y)) K.refreshTokens[q] = Y;else if (__$.LM.isAppMetadataEntity(q, Y)) K.appMetadata[q] = Y;else continue;
      }
      return K;
    }
    inMemoryCacheToCache(A) {
      let K = this.getCache();
      return K = {
        ...K,
        ...A.accounts,
        ...A.idTokens,
        ...A.accessTokens,
        ...A.refreshTokens,
        ...A.appMetadata
      }, K;
    }
    getInMemoryCache() {
      return this.logger.trace("Getting in-memory cache"), this.cacheToInMemoryCache(this.getCache());
    }
    setInMemoryCache(A) {
      this.logger.trace("Setting in-memory cache");
      let K = this.inMemoryCacheToCache(A);
      this.setCache(K), this.emitChange();
    }
    getCache() {
      return this.logger.trace("Getting cache key-value store"), this.cache;
    }
    setCache(A) {
      this.logger.trace("Setting cache key value store"), this.cache = A, this.emitChange();
    }
    getItem(A) {
      return this.logger.tracePii(`Item key: ${A}`), this.getCache()[A];
    }
    setItem(A, K) {
      this.logger.tracePii(`Item key: ${A}`);
      let q = this.getCache();
      q[A] = K, this.setCache(q);
    }
    generateCredentialKey(A) {
      return __$._87(A);
    }
    generateAccountKey(A) {
      return __$.G87(A);
    }
    getAccountKeys() {
      let A = this.getInMemoryCache();
      return Object.keys(A.accounts);
    }
    getTokenKeys() {
      let A = this.getInMemoryCache();
      return {
        idToken: Object.keys(A.idTokens),
        accessToken: Object.keys(A.accessTokens),
        refreshToken: Object.keys(A.refreshTokens)
      };
    }
    getAccount(A) {
      return this.getItem(A) ? Object.assign(new __$.J$(), this.getItem(A)) : null;
    }
    async setAccount(A) {
      let K = this.generateAccountKey(__$.J$.getAccountInfo(A));
      this.setItem(K, A);
    }
    getIdTokenCredential(A) {
      let K = this.getItem(A);
      if (__$.LM.isIdTokenEntity(K)) return K;
      return null;
    }
    async setIdTokenCredential(A) {
      let K = this.generateCredentialKey(A);
      this.setItem(K, A);
    }
    getAccessTokenCredential(A) {
      let K = this.getItem(A);
      if (__$.LM.isAccessTokenEntity(K)) return K;
      return null;
    }
    async setAccessTokenCredential(A) {
      let K = this.generateCredentialKey(A);
      this.setItem(K, A);
    }
    getRefreshTokenCredential(A) {
      let K = this.getItem(A);
      if (__$.LM.isRefreshTokenEntity(K)) return K;
      return null;
    }
    async setRefreshTokenCredential(A) {
      let K = this.generateCredentialKey(A);
      this.setItem(K, A);
    }
    getAppMetadata(A) {
      let K = this.getItem(A);
      if (__$.LM.isAppMetadataEntity(A, K)) return K;
      return null;
    }
    setAppMetadata(A) {
      let K = __$.LM.generateAppMetadataKey(A);
      this.setItem(K, A);
    }
    getServerTelemetry(A) {
      let K = this.getItem(A);
      if (K && __$.LM.isServerTelemetryEntity(A, K)) return K;
      return null;
    }
    setServerTelemetry(A, K) {
      this.setItem(A, K);
    }
    getAuthorityMetadata(A) {
      let K = this.getItem(A);
      if (K && __$.LM.isAuthorityMetadataEntity(A, K)) return K;
      return null;
    }
    getAuthorityMetadataKeys() {
      return this.getKeys().filter(A => {
        return this.isAuthorityMetadata(A);
      });
    }
    setAuthorityMetadata(A, K) {
      this.setItem(A, K);
    }
    getThrottlingCache(A) {
      let K = this.getItem(A);
      if (K && __$.LM.isThrottlingEntity(A, K)) return K;
      return null;
    }
    setThrottlingCache(A, K) {
      this.setItem(A, K);
    }
    removeItem(A) {
      this.logger.tracePii(`Item key: ${A}`);
      let K = !1,
        q = this.getCache();
      if (q[A]) delete q[A], K = !0;
      if (K) this.setCache(q), this.emitChange();
      return K;
    }
    removeOutdatedAccount(A) {
      this.removeItem(A);
    }
    containsKey(A) {
      return this.getKeys().includes(A);
    }
    getKeys() {
      this.logger.trace("Retrieving all cache keys");
      let A = this.getCache();
      return [...Object.keys(A)];
    }
    clear() {
      this.logger.trace("Clearing cache entries created by MSAL"), this.getKeys().forEach(K => {
        this.removeItem(K);
      }), this.emitChange();
    }
    static generateInMemoryCache(A) {
      return __$.go.deserializeAllCache(__$.go.deserializeJSONBlob(A));
    }
    static generateJsonCache(A) {
      return __$.p7A.serializeAllCache(A);
    }
    updateCredentialCacheKey(A, K) {
      let q = this.generateCredentialKey(K);
      if (A !== q) {
        let Y = this.getItem(A);
        if (Y) return this.removeItem(A), this.setItem(q, Y), this.logger.verbose(`Updated an outdated ${K.credentialType} cache key`), q;else this.logger.error(`Attempted to update an outdated ${K.credentialType} cache key but no item matching the outdated key was found in storage`);
      }
      return A;
    }
  };
});

// Register to shared state
__$.AJ1 = AJ1;
