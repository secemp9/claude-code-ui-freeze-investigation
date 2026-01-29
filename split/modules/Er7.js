// Module: Er7
// Dependencies: wP, K9, EFA, wt, LFA, Lw, yj1, tp, Dr7, mf

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Er7 = v(Tr7 => {
  Object.defineProperty(Tr7, "__esModule", {
    value: !0
  });
  Tr7.WeightedRoundRobinLoadBalancingConfig = void 0;
  Tr7.setup = iJ2;
  var lG = __$.wP(),
    BJ2 = __$.K9(),
    $v = __$.EFA(),
    Pr7 = __$.wt(),
    mJ2 = __$.LFA(),
    gJ2 = __$.Lw(),
    Vr7 = __$.yj1(),
    IjA = __$.tp(),
    FJ2 = __$.Dr7(),
    jr7 = __$.mf(),
    QJ2 = "weighted_round_robin";
  function AL6(A) {
    gJ2.trace(BJ2.LogVerbosity.DEBUG, QJ2, A);
  }
  var KL6 = "weighted_round_robin",
    UJ2 = 1e4,
    pJ2 = 1e4,
    dJ2 = 180000,
    cJ2 = 1000,
    lJ2 = 1;
  function Mr7(A, K, q) {
    if (K in A && A[K] !== void 0 && typeof A[K] !== q) throw Error(`weighted round robin config ${K} parse error: expected ${q}, got ${typeof A[K]}`);
  }
  function Uj1(A, K) {
    if (K in A && A[K] !== void 0 && A[K] !== null) {
      let q;
      if ((0, $v.isDuration)(A[K])) q = A[K];else if ((0, $v.isDurationMessage)(A[K])) q = (0, $v.durationMessageToDuration)(A[K]);else if (typeof A[K] === "string") {
        let Y = (0, $v.parseDuration)(A[K]);
        if (!Y) throw Error(`weighted round robin config ${K}: failed to parse duration string ${A[K]}`);
        q = Y;
      } else throw Error(`weighted round robin config ${K}: expected duration, got ${typeof A[K]}`);
      return (0, $v.durationToMs)(q);
    }
    return null;
  }
  class hFA {
    constructor(A, K, q, Y, z, w) {
      this.enableOobLoadReport = A !== null && A !== void 0 ? A : !1, this.oobLoadReportingPeriodMs = K !== null && K !== void 0 ? K : UJ2, this.blackoutPeriodMs = q !== null && q !== void 0 ? q : pJ2, this.weightExpirationPeriodMs = Y !== null && Y !== void 0 ? Y : dJ2, this.weightUpdatePeriodMs = Math.max(z !== null && z !== void 0 ? z : cJ2, 100), this.errorUtilizationPenalty = w !== null && w !== void 0 ? w : lJ2;
    }
    getLoadBalancerName() {
      return KL6;
    }
    toJsonObject() {
      return {
        enable_oob_load_report: this.enableOobLoadReport,
        oob_load_reporting_period: (0, $v.durationToString)((0, $v.msToDuration)(this.oobLoadReportingPeriodMs)),
        blackout_period: (0, $v.durationToString)((0, $v.msToDuration)(this.blackoutPeriodMs)),
        weight_expiration_period: (0, $v.durationToString)((0, $v.msToDuration)(this.weightExpirationPeriodMs)),
        weight_update_period: (0, $v.durationToString)((0, $v.msToDuration)(this.weightUpdatePeriodMs)),
        error_utilization_penalty: this.errorUtilizationPenalty
      };
    }
    static createFromJson(A) {
      if (Mr7(A, "enable_oob_load_report", "boolean"), Mr7(A, "error_utilization_penalty", "number"), A.error_utilization_penalty < 0) throw Error("weighted round robin config error_utilization_penalty < 0");
      return new hFA(A.enable_oob_load_report, Uj1(A, "oob_load_reporting_period"), Uj1(A, "blackout_period"), Uj1(A, "weight_expiration_period"), Uj1(A, "weight_update_period"), A.error_utilization_penalty);
    }
    getEnableOobLoadReport() {
      return this.enableOobLoadReport;
    }
    getOobLoadReportingPeriodMs() {
      return this.oobLoadReportingPeriodMs;
    }
    getBlackoutPeriodMs() {
      return this.blackoutPeriodMs;
    }
    getWeightExpirationPeriodMs() {
      return this.weightExpirationPeriodMs;
    }
    getWeightUpdatePeriodMs() {
      return this.weightUpdatePeriodMs;
    }
    getErrorUtilizationPenalty() {
      return this.errorUtilizationPenalty;
    }
  }
  Tr7.WeightedRoundRobinLoadBalancingConfig = hFA;
  class fr7 {
    constructor(A, K) {
      this.metricsHandler = K, this.queue = new FJ2.PriorityQueue((z, w) => z.deadline < w.deadline);
      let q = A.filter(z => z.weight > 0),
        Y;
      if (q.length < 2) Y = 1;else {
        let z = 0;
        for (let {
          weight: w
        } of q) z += w;
        Y = z / q.length;
      }
      for (let z of A) {
        let w = z.weight > 0 ? 1 / z.weight : Y;
        this.queue.push({
          endpointName: z.endpointName,
          picker: z.picker,
          period: w,
          deadline: Math.random() * w
        });
      }
    }
    pick(A) {
      let K = this.queue.pop();
      this.queue.push(Object.assign(Object.assign({}, K), {
        deadline: K.deadline + K.period
      }));
      let q = K.picker.pick(A);
      if (q.pickResultType === IjA.PickResultType.COMPLETE) {
        if (this.metricsHandler) return Object.assign(Object.assign({}, q), {
          onCallEnded: (0, Vr7.createMetricsReader)(Y => this.metricsHandler(Y, K.endpointName), q.onCallEnded)
        });else {
          let Y = q.subchannel;
          return Object.assign(Object.assign({}, q), {
            subchannel: Y.getWrappedSubchannel()
          });
        }
      } else return q;
    }
  }
  class Nr7 {
    constructor(A) {
      this.channelControlHelper = A, this.latestConfig = null, this.children = new Map(), this.currentState = lG.ConnectivityState.IDLE, this.updatesPaused = !1, this.lastError = null, this.weightUpdateTimer = null;
    }
    countChildrenWithState(A) {
      let K = 0;
      for (let q of this.children.values()) if (q.child.getConnectivityState() === A) K += 1;
      return K;
    }
    updateWeight(A, K) {
      var q, Y;
      let {
        rps_fractional: z,
        application_utilization: w
      } = K;
      if (w > 0 && z > 0) w += K.eps / z * ((Y = (q = this.latestConfig) === null || q === void 0 ? void 0 : q.getErrorUtilizationPenalty()) !== null && Y !== void 0 ? Y : 0);
      let H = w === 0 ? 0 : z / w;
      if (H === 0) return;
      let J = new Date();
      if (A.nonEmptySince === null) A.nonEmptySince = J;
      A.lastUpdated = J, A.weight = H;
    }
    getWeight(A) {
      if (!this.latestConfig) return 0;
      let K = new Date().getTime();
      if (K - A.lastUpdated.getTime() >= this.latestConfig.getWeightExpirationPeriodMs()) return A.nonEmptySince = null, 0;
      let q = this.latestConfig.getBlackoutPeriodMs();
      if (q > 0 && (A.nonEmptySince === null || K - A.nonEmptySince.getTime() < q)) return 0;
      return A.weight;
    }
    calculateAndUpdateState() {
      if (this.updatesPaused || !this.latestConfig) return;
      if (this.countChildrenWithState(lG.ConnectivityState.READY) > 0) {
        let A = [];
        for (let [q, Y] of this.children) {
          if (Y.child.getConnectivityState() !== lG.ConnectivityState.READY) continue;
          A.push({
            endpointName: q,
            picker: Y.child.getPicker(),
            weight: this.getWeight(Y)
          });
        }
        AL6("Created picker with weights: " + A.map(q => q.endpointName + ":" + q.weight).join(","));
        let K;
        if (!this.latestConfig.getEnableOobLoadReport()) K = (q, Y) => {
          let z = this.children.get(Y);
          if (z) this.updateWeight(z, q);
        };else K = null;
        this.updateState(lG.ConnectivityState.READY, new fr7(A, K), null);
      } else if (this.countChildrenWithState(lG.ConnectivityState.CONNECTING) > 0) this.updateState(lG.ConnectivityState.CONNECTING, new IjA.QueuePicker(this), null);else if (this.countChildrenWithState(lG.ConnectivityState.TRANSIENT_FAILURE) > 0) {
        let A = `weighted_round_robin: No connection established. Last error: ${this.lastError}`;
        this.updateState(lG.ConnectivityState.TRANSIENT_FAILURE, new IjA.UnavailablePicker({
          details: A
        }), A);
      } else this.updateState(lG.ConnectivityState.IDLE, new IjA.QueuePicker(this), null);
      for (let {
        child: A
      } of this.children.values()) if (A.getConnectivityState() === lG.ConnectivityState.IDLE) A.exitIdle();
    }
    updateState(A, K, q) {
      AL6(lG.ConnectivityState[this.currentState] + " -> " + lG.ConnectivityState[A]), this.currentState = A, this.channelControlHelper.updateState(A, K, q);
    }
    updateAddressList(A, K, q, Y) {
      var z, w;
      if (!(K instanceof hFA)) return !1;
      if (!A.ok) {
        if (this.children.size === 0) this.updateState(lG.ConnectivityState.TRANSIENT_FAILURE, new IjA.UnavailablePicker(A.error), A.error.details);
        return !0;
      }
      if (A.value.length === 0) {
        let O = `No addresses resolved. Resolution note: ${Y}`;
        return this.updateState(lG.ConnectivityState.TRANSIENT_FAILURE, new IjA.UnavailablePicker({
          details: O
        }), O), !1;
      }
      AL6("Connect to endpoint list " + A.value.map(jr7.endpointToString));
      let H = new Date(),
        J = new Set();
      this.updatesPaused = !0, this.latestConfig = K;
      for (let O of A.value) {
        let X = (0, jr7.endpointToString)(O);
        J.add(X);
        let $ = this.children.get(X);
        if (!$) $ = {
          child: new mJ2.LeafLoadBalancer(O, (0, Pr7.createChildChannelControlHelper)(this.channelControlHelper, {
            updateState: (_, G, Z) => {
              if (this.currentState === lG.ConnectivityState.READY && _ !== lG.ConnectivityState.READY) this.channelControlHelper.requestReresolution();
              if (_ === lG.ConnectivityState.READY) $.nonEmptySince = null;
              if (Z) this.lastError = Z;
              this.calculateAndUpdateState();
            },
            createSubchannel: (_, G) => {
              let Z = this.channelControlHelper.createSubchannel(_, G);
              if ($ === null || $ === void 0 ? void 0 : $.oobMetricsListener) return new Vr7.OrcaOobMetricsSubchannelWrapper(Z, $.oobMetricsListener, this.latestConfig.getOobLoadReportingPeriodMs());else return Z;
            }
          }), q, Y),
          lastUpdated: H,
          nonEmptySince: null,
          weight: 0,
          oobMetricsListener: null
        }, this.children.set(X, $);
        if (K.getEnableOobLoadReport()) $.oobMetricsListener = _ => {
          this.updateWeight($, _);
        };else $.oobMetricsListener = null;
      }
      for (let [O, X] of this.children) if (J.has(O)) X.child.startConnecting();else X.child.destroy(), this.children.delete(O);
      if (this.updatesPaused = !1, this.calculateAndUpdateState(), this.weightUpdateTimer) clearInterval(this.weightUpdateTimer);
      return this.weightUpdateTimer = (w = (z = setInterval(() => {
        if (this.currentState === lG.ConnectivityState.READY) this.calculateAndUpdateState();
      }, K.getWeightUpdatePeriodMs())).unref) === null || w === void 0 ? void 0 : w.call(z), !0;
    }
    exitIdle() {}
    resetBackoff() {}
    destroy() {
      for (let A of this.children.values()) A.child.destroy();
      if (this.children.clear(), this.weightUpdateTimer) clearInterval(this.weightUpdateTimer);
    }
    getTypeName() {
      return KL6;
    }
  }
  function iJ2() {
    (0, Pr7.registerLoadBalancerType)(KL6, Nr7, hFA);
  }
});

// Register to shared state
__$.Er7 = Er7;
