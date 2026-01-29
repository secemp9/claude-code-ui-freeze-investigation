// Module: db
// Dependencies: Pr1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var db = v(cC5 => {
  var FC5 = __$.Pr1();
  cC5.RETRY_MODES = void 0;
  (function (A) {
    A.STANDARD = "standard", A.ADAPTIVE = "adaptive";
  })(cC5.RETRY_MODES || (cC5.RETRY_MODES = {}));
  var Vr1 = 3,
    QC5 = cC5.RETRY_MODES.STANDARD;
  class q81 {
    static setTimeoutFn = setTimeout;
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    currentCapacity = 0;
    enabled = !1;
    lastMaxRate = 0;
    measuredTxRate = 0;
    requestCount = 0;
    fillRate;
    lastThrottleTime;
    lastTimestamp = 0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow = 0;
    constructor(A) {
      this.beta = A?.beta ?? 0.7, this.minCapacity = A?.minCapacity ?? 1, this.minFillRate = A?.minFillRate ?? 0.5, this.scaleConstant = A?.scaleConstant ?? 0.4, this.smooth = A?.smooth ?? 0.8;
      let K = this.getCurrentTimeInSeconds();
      this.lastThrottleTime = K, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1000;
    }
    async getSendToken() {
      return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(A) {
      if (!this.enabled) return;
      if (this.refillTokenBucket(), A > this.currentCapacity) {
        let K = (A - this.currentCapacity) / this.fillRate * 1000;
        await new Promise(q => q81.setTimeoutFn(q, K));
      }
      this.currentCapacity = this.currentCapacity - A;
    }
    refillTokenBucket() {
      let A = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = A;
        return;
      }
      let K = (A - this.lastTimestamp) * this.fillRate;
      this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + K), this.lastTimestamp = A;
    }
    updateClientSendingRate(A) {
      let K;
      if (this.updateMeasuredRate(), FC5.isThrottlingError(A)) {
        let Y = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
        this.lastMaxRate = Y, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), K = this.cubicThrottle(Y), this.enableTokenBucket();
      } else this.calculateTimeWindow(), K = this.cubicSuccess(this.getCurrentTimeInSeconds());
      let q = Math.min(K, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(q);
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 0.3333333333333333));
    }
    cubicThrottle(A) {
      return this.getPrecise(A * this.beta);
    }
    cubicSuccess(A) {
      return this.getPrecise(this.scaleConstant * Math.pow(A - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
      this.enabled = !0;
    }
    updateTokenBucketRate(A) {
      this.refillTokenBucket(), this.fillRate = Math.max(A, this.minFillRate), this.maxCapacity = Math.max(A, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
      let A = this.getCurrentTimeInSeconds(),
        K = Math.floor(A * 2) / 2;
      if (this.requestCount++, K > this.lastTxRateBucket) {
        let q = this.requestCount / (K - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(q * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = K;
      }
    }
    getPrecise(A) {
      return parseFloat(A.toFixed(8));
    }
  }
  var iCA = 100,
    Nr1 = 20000,
    Dp8 = 500,
    fr1 = 500,
    jp8 = 5,
    Mp8 = 10,
    Pp8 = 1,
    UC5 = "amz-sdk-invocation-id",
    pC5 = "amz-sdk-request",
    dC5 = () => {
      let A = iCA;
      return {
        computeNextBackoffDelay: Y => {
          return Math.floor(Math.min(Nr1, Math.random() * 2 ** Y * A));
        },
        setDelayBase: Y => {
          A = Y;
        }
      };
    },
    Wp8 = ({
      retryDelay: A,
      retryCount: K,
      retryCost: q
    }) => {
      return {
        getRetryCount: () => K,
        getRetryDelay: () => Math.min(Nr1, A),
        getRetryCost: () => q
      };
    };
  class Y81 {
    maxAttempts;
    mode = cC5.RETRY_MODES.STANDARD;
    capacity = fr1;
    retryBackoffStrategy = dC5();
    maxAttemptsProvider;
    constructor(A) {
      this.maxAttempts = A, this.maxAttemptsProvider = typeof A === "function" ? A : async () => A;
    }
    async acquireInitialRetryToken(A) {
      return Wp8({
        retryDelay: iCA,
        retryCount: 0
      });
    }
    async refreshRetryTokenForRetry(A, K) {
      let q = await this.getMaxAttempts();
      if (this.shouldRetry(A, K, q)) {
        let Y = K.errorType;
        this.retryBackoffStrategy.setDelayBase(Y === "THROTTLING" ? Dp8 : iCA);
        let z = this.retryBackoffStrategy.computeNextBackoffDelay(A.getRetryCount()),
          w = K.retryAfterHint ? Math.max(K.retryAfterHint.getTime() - Date.now() || 0, z) : z,
          H = this.getCapacityCost(Y);
        return this.capacity -= H, Wp8({
          retryDelay: w,
          retryCount: A.getRetryCount() + 1,
          retryCost: H
        });
      }
      throw Error("No retry token available");
    }
    recordSuccess(A) {
      this.capacity = Math.max(fr1, this.capacity + (A.getRetryCost() ?? Pp8));
    }
    getCapacity() {
      return this.capacity;
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider();
      } catch (A) {
        return console.warn(`Max attempts provider could not resolve. Using default of ${Vr1}`), Vr1;
      }
    }
    shouldRetry(A, K, q) {
      return A.getRetryCount() + 1 < q && this.capacity >= this.getCapacityCost(K.errorType) && this.isRetryableError(K.errorType);
    }
    getCapacityCost(A) {
      return A === "TRANSIENT" ? Mp8 : jp8;
    }
    isRetryableError(A) {
      return A === "THROTTLING" || A === "TRANSIENT";
    }
  }
  class Vp8 {
    maxAttemptsProvider;
    rateLimiter;
    standardRetryStrategy;
    mode = cC5.RETRY_MODES.ADAPTIVE;
    constructor(A, K) {
      this.maxAttemptsProvider = A;
      let {
        rateLimiter: q
      } = K ?? {};
      this.rateLimiter = q ?? new q81(), this.standardRetryStrategy = new Y81(A);
    }
    async acquireInitialRetryToken(A) {
      return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(A);
    }
    async refreshRetryTokenForRetry(A, K) {
      return this.rateLimiter.updateClientSendingRate(K), this.standardRetryStrategy.refreshRetryTokenForRetry(A, K);
    }
    recordSuccess(A) {
      this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(A);
    }
  }
  class fp8 extends Y81 {
    computeNextBackoffDelay;
    constructor(A, K = iCA) {
      super(typeof A === "function" ? A : async () => A);
      if (typeof K === "number") this.computeNextBackoffDelay = () => K;else this.computeNextBackoffDelay = K;
    }
    async refreshRetryTokenForRetry(A, K) {
      let q = await super.refreshRetryTokenForRetry(A, K);
      return q.getRetryDelay = () => this.computeNextBackoffDelay(q.getRetryCount()), q;
    }
  }
  cC5.AdaptiveRetryStrategy = Vp8;
  cC5.ConfiguredRetryStrategy = fp8;
  cC5.DEFAULT_MAX_ATTEMPTS = Vr1;
  cC5.DEFAULT_RETRY_DELAY_BASE = iCA;
  cC5.DEFAULT_RETRY_MODE = QC5;
  cC5.DefaultRateLimiter = q81;
  cC5.INITIAL_RETRY_TOKENS = fr1;
  cC5.INVOCATION_ID_HEADER = UC5;
  cC5.MAXIMUM_RETRY_DELAY = Nr1;
  cC5.NO_RETRY_INCREMENT = Pp8;
  cC5.REQUEST_HEADER = pC5;
  cC5.RETRY_COST = jp8;
  cC5.StandardRetryStrategy = Y81;
  cC5.THROTTLING_RETRY_DELAY_BASE = Dp8;
  cC5.TIMEOUT_RETRY_COST = Mp8;
});

// Register to shared state
__$.db = db;
