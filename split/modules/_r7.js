// Module: _r7
// Dependencies: wP, K9, EFA, UC6, wt, bD1, tp, mf, TFA, Lw

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _r7 = v(Xr7 => {
  var nC6;
  Object.defineProperty(Xr7, "__esModule", {
    value: !0
  });
  Xr7.OutlierDetectionLoadBalancer = Xr7.OutlierDetectionLoadBalancingConfig = void 0;
  Xr7.setup = bJ2;
  var vJ2 = __$.wP(),
    zr7 = __$.K9(),
    w3A = __$.EFA(),
    wr7 = __$.UC6(),
    EJ2 = __$.wt(),
    kJ2 = __$.bD1(),
    CJ2 = __$.tp(),
    rC6 = __$.mf(),
    LJ2 = __$.TFA(),
    RJ2 = __$.Lw(),
    yJ2 = "outlier_detection";
  function cG(A) {
    RJ2.trace(zr7.LogVerbosity.DEBUG, yJ2, A);
  }
  var sC6 = "outlier_detection",
    IJ2 = ((nC6 = process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION) !== null && nC6 !== void 0 ? nC6 : "true") === "true",
    SJ2 = {
      stdev_factor: 1900,
      enforcement_percentage: 100,
      minimum_hosts: 5,
      request_volume: 100
    },
    hJ2 = {
      threshold: 85,
      enforcement_percentage: 100,
      minimum_hosts: 5,
      request_volume: 50
    };
  function RjA(A, K, q, Y) {
    if (K in A && A[K] !== void 0 && typeof A[K] !== q) {
      let z = Y ? `${Y}.${K}` : K;
      throw Error(`outlier detection config ${z} parse error: expected ${q}, got ${typeof A[K]}`);
    }
  }
  function oC6(A, K, q) {
    let Y = q ? `${q}.${K}` : K;
    if (K in A && A[K] !== void 0) {
      if (!(0, w3A.isDuration)(A[K])) throw Error(`outlier detection config ${Y} parse error: expected Duration, got ${typeof A[K]}`);
      if (!(A[K].seconds >= 0 && A[K].seconds <= 315576000000 && A[K].nanos >= 0 && A[K].nanos <= 999999999)) throw Error(`outlier detection config ${Y} parse error: values out of range for non-negative Duaration`);
    }
  }
  function Fj1(A, K, q) {
    let Y = q ? `${q}.${K}` : K;
    if (RjA(A, K, "number", q), K in A && A[K] !== void 0 && !(A[K] >= 0 && A[K] <= 100)) throw Error(`outlier detection config ${Y} parse error: value out of range for percentage (0-100)`);
  }
  class IFA {
    constructor(A, K, q, Y, z, w, H) {
      if (this.childPolicy = H, H.getLoadBalancerName() === "pick_first") throw Error("outlier_detection LB policy cannot have a pick_first child policy");
      this.intervalMs = A !== null && A !== void 0 ? A : 1e4, this.baseEjectionTimeMs = K !== null && K !== void 0 ? K : 30000, this.maxEjectionTimeMs = q !== null && q !== void 0 ? q : 300000, this.maxEjectionPercent = Y !== null && Y !== void 0 ? Y : 10, this.successRateEjection = z ? Object.assign(Object.assign({}, SJ2), z) : null, this.failurePercentageEjection = w ? Object.assign(Object.assign({}, hJ2), w) : null;
    }
    getLoadBalancerName() {
      return sC6;
    }
    toJsonObject() {
      var A, K;
      return {
        outlier_detection: {
          interval: (0, w3A.msToDuration)(this.intervalMs),
          base_ejection_time: (0, w3A.msToDuration)(this.baseEjectionTimeMs),
          max_ejection_time: (0, w3A.msToDuration)(this.maxEjectionTimeMs),
          max_ejection_percent: this.maxEjectionPercent,
          success_rate_ejection: (A = this.successRateEjection) !== null && A !== void 0 ? A : void 0,
          failure_percentage_ejection: (K = this.failurePercentageEjection) !== null && K !== void 0 ? K : void 0,
          child_policy: [this.childPolicy.toJsonObject()]
        }
      };
    }
    getIntervalMs() {
      return this.intervalMs;
    }
    getBaseEjectionTimeMs() {
      return this.baseEjectionTimeMs;
    }
    getMaxEjectionTimeMs() {
      return this.maxEjectionTimeMs;
    }
    getMaxEjectionPercent() {
      return this.maxEjectionPercent;
    }
    getSuccessRateEjectionConfig() {
      return this.successRateEjection;
    }
    getFailurePercentageEjectionConfig() {
      return this.failurePercentageEjection;
    }
    getChildPolicy() {
      return this.childPolicy;
    }
    static createFromJson(A) {
      var K;
      if (oC6(A, "interval"), oC6(A, "base_ejection_time"), oC6(A, "max_ejection_time"), Fj1(A, "max_ejection_percent"), "success_rate_ejection" in A && A.success_rate_ejection !== void 0) {
        if (typeof A.success_rate_ejection !== "object") throw Error("outlier detection config success_rate_ejection must be an object");
        RjA(A.success_rate_ejection, "stdev_factor", "number", "success_rate_ejection"), Fj1(A.success_rate_ejection, "enforcement_percentage", "success_rate_ejection"), RjA(A.success_rate_ejection, "minimum_hosts", "number", "success_rate_ejection"), RjA(A.success_rate_ejection, "request_volume", "number", "success_rate_ejection");
      }
      if ("failure_percentage_ejection" in A && A.failure_percentage_ejection !== void 0) {
        if (typeof A.failure_percentage_ejection !== "object") throw Error("outlier detection config failure_percentage_ejection must be an object");
        Fj1(A.failure_percentage_ejection, "threshold", "failure_percentage_ejection"), Fj1(A.failure_percentage_ejection, "enforcement_percentage", "failure_percentage_ejection"), RjA(A.failure_percentage_ejection, "minimum_hosts", "number", "failure_percentage_ejection"), RjA(A.failure_percentage_ejection, "request_volume", "number", "failure_percentage_ejection");
      }
      if (!("child_policy" in A) || !Array.isArray(A.child_policy)) throw Error("outlier detection config child_policy must be an array");
      let q = (0, EJ2.selectLbConfigFromList)(A.child_policy);
      if (!q) throw Error("outlier detection config child_policy: no valid recognized policy found");
      return new IFA(A.interval ? (0, w3A.durationToMs)(A.interval) : null, A.base_ejection_time ? (0, w3A.durationToMs)(A.base_ejection_time) : null, A.max_ejection_time ? (0, w3A.durationToMs)(A.max_ejection_time) : null, (K = A.max_ejection_percent) !== null && K !== void 0 ? K : null, A.success_rate_ejection, A.failure_percentage_ejection, q);
    }
  }
  Xr7.OutlierDetectionLoadBalancingConfig = IFA;
  class Hr7 extends LJ2.BaseSubchannelWrapper {
    constructor(A, K) {
      super(A);
      this.mapEntry = K, this.refCount = 0;
    }
    ref() {
      this.child.ref(), this.refCount += 1;
    }
    unref() {
      if (this.child.unref(), this.refCount -= 1, this.refCount <= 0) {
        if (this.mapEntry) {
          let A = this.mapEntry.subchannelWrappers.indexOf(this);
          if (A >= 0) this.mapEntry.subchannelWrappers.splice(A, 1);
        }
      }
    }
    eject() {
      this.setHealthy(!1);
    }
    uneject() {
      this.setHealthy(!0);
    }
    getMapEntry() {
      return this.mapEntry;
    }
    getWrappedSubchannel() {
      return this.child;
    }
  }
  function aC6() {
    return {
      success: 0,
      failure: 0
    };
  }
  class Jr7 {
    constructor() {
      this.activeBucket = aC6(), this.inactiveBucket = aC6();
    }
    addSuccess() {
      this.activeBucket.success += 1;
    }
    addFailure() {
      this.activeBucket.failure += 1;
    }
    switchBuckets() {
      this.inactiveBucket = this.activeBucket, this.activeBucket = aC6();
    }
    getLastSuccesses() {
      return this.inactiveBucket.success;
    }
    getLastFailures() {
      return this.inactiveBucket.failure;
    }
  }
  class Or7 {
    constructor(A, K) {
      this.wrappedPicker = A, this.countCalls = K;
    }
    pick(A) {
      let K = this.wrappedPicker.pick(A);
      if (K.pickResultType === CJ2.PickResultType.COMPLETE) {
        let q = K.subchannel,
          Y = q.getMapEntry();
        if (Y) {
          let z = K.onCallEnded;
          if (this.countCalls) z = (w, H, J) => {
            var O;
            if (w === zr7.Status.OK) Y.counter.addSuccess();else Y.counter.addFailure();
            (O = K.onCallEnded) === null || O === void 0 || O.call(K, w, H, J);
          };
          return Object.assign(Object.assign({}, K), {
            subchannel: q.getWrappedSubchannel(),
            onCallEnded: z
          });
        } else return Object.assign(Object.assign({}, K), {
          subchannel: q.getWrappedSubchannel()
        });
      } else return K;
    }
  }
  class tC6 {
    constructor(A) {
      this.entryMap = new rC6.EndpointMap(), this.latestConfig = null, this.timerStartTime = null, this.childBalancer = new kJ2.ChildLoadBalancerHandler((0, wr7.createChildChannelControlHelper)(A, {
        createSubchannel: (K, q) => {
          let Y = A.createSubchannel(K, q),
            z = this.entryMap.getForSubchannelAddress(K),
            w = new Hr7(Y, z);
          if ((z === null || z === void 0 ? void 0 : z.currentEjectionTimestamp) !== null) w.eject();
          return z === null || z === void 0 || z.subchannelWrappers.push(w), w;
        },
        updateState: (K, q, Y) => {
          if (K === vJ2.ConnectivityState.READY) A.updateState(K, new Or7(q, this.isCountingEnabled()), Y);else A.updateState(K, q, Y);
        }
      })), this.ejectionTimer = setInterval(() => {}, 0), clearInterval(this.ejectionTimer);
    }
    isCountingEnabled() {
      return this.latestConfig !== null && (this.latestConfig.getSuccessRateEjectionConfig() !== null || this.latestConfig.getFailurePercentageEjectionConfig() !== null);
    }
    getCurrentEjectionPercent() {
      let A = 0;
      for (let K of this.entryMap.values()) if (K.currentEjectionTimestamp !== null) A += 1;
      return A * 100 / this.entryMap.size;
    }
    runSuccessRateCheck(A) {
      if (!this.latestConfig) return;
      let K = this.latestConfig.getSuccessRateEjectionConfig();
      if (!K) return;
      cG("Running success rate check");
      let q = K.request_volume,
        Y = 0,
        z = [];
      for (let [$, _] of this.entryMap.entries()) {
        let G = _.counter.getLastSuccesses(),
          Z = _.counter.getLastFailures();
        if (cG("Stats for " + (0, rC6.endpointToString)($) + ": successes=" + G + " failures=" + Z + " targetRequestVolume=" + q), G + Z >= q) Y += 1, z.push(G / (G + Z));
      }
      if (cG("Found " + Y + " success rate candidates; currentEjectionPercent=" + this.getCurrentEjectionPercent() + " successRates=[" + z + "]"), Y < K.minimum_hosts) return;
      let w = z.reduce(($, _) => $ + _) / z.length,
        H = 0;
      for (let $ of z) {
        let _ = $ - w;
        H += _ * _;
      }
      let J = H / z.length,
        O = Math.sqrt(J),
        X = w - O * (K.stdev_factor / 1000);
      cG("stdev=" + O + " ejectionThreshold=" + X);
      for (let [$, _] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
        let G = _.counter.getLastSuccesses(),
          Z = _.counter.getLastFailures();
        if (G + Z < q) continue;
        let W = G / (G + Z);
        if (cG("Checking candidate " + $ + " successRate=" + W), W < X) {
          let D = Math.random() * 100;
          if (cG("Candidate " + $ + " randomNumber=" + D + " enforcement_percentage=" + K.enforcement_percentage), D < K.enforcement_percentage) cG("Ejecting candidate " + $), this.eject(_, A);
        }
      }
    }
    runFailurePercentageCheck(A) {
      if (!this.latestConfig) return;
      let K = this.latestConfig.getFailurePercentageEjectionConfig();
      if (!K) return;
      cG("Running failure percentage check. threshold=" + K.threshold + " request volume threshold=" + K.request_volume);
      let q = 0;
      for (let Y of this.entryMap.values()) {
        let z = Y.counter.getLastSuccesses(),
          w = Y.counter.getLastFailures();
        if (z + w >= K.request_volume) q += 1;
      }
      if (q < K.minimum_hosts) return;
      for (let [Y, z] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
        let w = z.counter.getLastSuccesses(),
          H = z.counter.getLastFailures();
        if (cG("Candidate successes=" + w + " failures=" + H), w + H < K.request_volume) continue;
        if (H * 100 / (H + w) > K.threshold) {
          let O = Math.random() * 100;
          if (cG("Candidate " + Y + " randomNumber=" + O + " enforcement_percentage=" + K.enforcement_percentage), O < K.enforcement_percentage) cG("Ejecting candidate " + Y), this.eject(z, A);
        }
      }
    }
    eject(A, K) {
      A.currentEjectionTimestamp = new Date(), A.ejectionTimeMultiplier += 1;
      for (let q of A.subchannelWrappers) q.eject();
    }
    uneject(A) {
      A.currentEjectionTimestamp = null;
      for (let K of A.subchannelWrappers) K.uneject();
    }
    switchAllBuckets() {
      for (let A of this.entryMap.values()) A.counter.switchBuckets();
    }
    startTimer(A) {
      var K, q;
      this.ejectionTimer = setTimeout(() => this.runChecks(), A), (q = (K = this.ejectionTimer).unref) === null || q === void 0 || q.call(K);
    }
    runChecks() {
      let A = new Date();
      if (cG("Ejection timer running"), this.switchAllBuckets(), !this.latestConfig) return;
      this.timerStartTime = A, this.startTimer(this.latestConfig.getIntervalMs()), this.runSuccessRateCheck(A), this.runFailurePercentageCheck(A);
      for (let [K, q] of this.entryMap.entries()) if (q.currentEjectionTimestamp === null) {
        if (q.ejectionTimeMultiplier > 0) q.ejectionTimeMultiplier -= 1;
      } else {
        let Y = this.latestConfig.getBaseEjectionTimeMs(),
          z = this.latestConfig.getMaxEjectionTimeMs(),
          w = new Date(q.currentEjectionTimestamp.getTime());
        if (w.setMilliseconds(w.getMilliseconds() + Math.min(Y * q.ejectionTimeMultiplier, Math.max(Y, z))), w < new Date()) cG("Unejecting " + K), this.uneject(q);
      }
    }
    updateAddressList(A, K, q, Y) {
      if (!(K instanceof IFA)) return !1;
      if (cG("Received update with config: " + JSON.stringify(K.toJsonObject(), void 0, 2)), A.ok) {
        for (let w of A.value) if (!this.entryMap.has(w)) cG("Adding map entry for " + (0, rC6.endpointToString)(w)), this.entryMap.set(w, {
          counter: new Jr7(),
          currentEjectionTimestamp: null,
          ejectionTimeMultiplier: 0,
          subchannelWrappers: []
        });
        this.entryMap.deleteMissing(A.value);
      }
      let z = K.getChildPolicy();
      if (this.childBalancer.updateAddressList(A, z, q, Y), K.getSuccessRateEjectionConfig() || K.getFailurePercentageEjectionConfig()) {
        if (this.timerStartTime) {
          cG("Previous timer existed. Replacing timer"), clearTimeout(this.ejectionTimer);
          let w = K.getIntervalMs() - (new Date().getTime() - this.timerStartTime.getTime());
          this.startTimer(w);
        } else cG("Starting new timer"), this.timerStartTime = new Date(), this.startTimer(K.getIntervalMs()), this.switchAllBuckets();
      } else {
        cG("Counting disabled. Cancelling timer."), this.timerStartTime = null, clearTimeout(this.ejectionTimer);
        for (let w of this.entryMap.values()) this.uneject(w), w.ejectionTimeMultiplier = 0;
      }
      return this.latestConfig = K, !0;
    }
    exitIdle() {
      this.childBalancer.exitIdle();
    }
    resetBackoff() {
      this.childBalancer.resetBackoff();
    }
    destroy() {
      clearTimeout(this.ejectionTimer), this.childBalancer.destroy();
    }
    getTypeName() {
      return sC6;
    }
  }
  Xr7.OutlierDetectionLoadBalancer = tC6;
  function bJ2() {
    if (IJ2) (0, wr7.registerLoadBalancerType)(sC6, tC6, IFA);
  }
});

// Register to shared state
__$._r7 = _r7;
