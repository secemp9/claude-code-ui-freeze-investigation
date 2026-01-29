// Module: yj1
// Dependencies: mD1, EFA, qjA, TFA, K9, YjA, wP, ik6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yj1 = v(ri7 => {
  var __dirname = "/home/runner/code/tmp/claude-cli-external-build-2157/node_modules/@grpc/grpc-js/build/src";
  Object.defineProperty(ri7, "__esModule", {
    value: !0
  });
  ri7.OrcaOobMetricsSubchannelWrapper = ri7.GRPC_METRICS_HEADER = ri7.ServerMetricRecorder = ri7.PerRequestMetricRecorder = void 0;
  ri7.createOrcaClient = di7;
  ri7.createMetricsReader = AH2;
  var rw2 = __$.mD1(),
    yC6 = __$.EFA(),
    ow2 = __$.qjA(),
    aw2 = __$.TFA(),
    gi7 = __$.K9(),
    sw2 = __$.YjA(),
    tw2 = __$.wP(),
    Fi7 = null;
  function Rj1() {
    if (Fi7) return Fi7;
    let A = __$.ik6().loadSync,
      K = A("xds/service/orca/v3/orca.proto", {
        keepCase: !0,
        longs: String,
        enums: String,
        defaults: !0,
        oneofs: !0,
        includeDirs: [`${__dirname}/../../proto/xds`, `${__dirname}/../../proto/protoc-gen-validate`]
      });
    return (0, rw2.loadPackageDefinition)(K);
  }
  class Ui7 {
    constructor() {
      this.message = {};
    }
    recordRequestCostMetric(A, K) {
      if (!this.message.request_cost) this.message.request_cost = {};
      this.message.request_cost[A] = K;
    }
    recordUtilizationMetric(A, K) {
      if (!this.message.utilization) this.message.utilization = {};
      this.message.utilization[A] = K;
    }
    recordNamedMetric(A, K) {
      if (!this.message.named_metrics) this.message.named_metrics = {};
      this.message.named_metrics[A] = K;
    }
    recordCPUUtilizationMetric(A) {
      this.message.cpu_utilization = A;
    }
    recordMemoryUtilizationMetric(A) {
      this.message.mem_utilization = A;
    }
    recordApplicationUtilizationMetric(A) {
      this.message.application_utilization = A;
    }
    recordQpsMetric(A) {
      this.message.rps_fractional = A;
    }
    recordEpsMetric(A) {
      this.message.eps = A;
    }
    serialize() {
      return Rj1().xds.data.orca.v3.OrcaLoadReport.serialize(this.message);
    }
  }
  ri7.PerRequestMetricRecorder = Ui7;
  var ew2 = 30000;
  class pi7 {
    constructor() {
      this.message = {}, this.serviceImplementation = {
        StreamCoreMetrics: A => {
          let K = A.request.report_interval ? (0, yC6.durationToMs)((0, yC6.durationMessageToDuration)(A.request.report_interval)) : ew2,
            q = setInterval(() => {
              A.write(this.message);
            }, K);
          A.on("cancelled", () => {
            clearInterval(q);
          });
        }
      };
    }
    putUtilizationMetric(A, K) {
      if (!this.message.utilization) this.message.utilization = {};
      this.message.utilization[A] = K;
    }
    setAllUtilizationMetrics(A) {
      this.message.utilization = Object.assign({}, A);
    }
    deleteUtilizationMetric(A) {
      var K;
      (K = this.message.utilization) === null || K === void 0 || delete K[A];
    }
    setCpuUtilizationMetric(A) {
      this.message.cpu_utilization = A;
    }
    deleteCpuUtilizationMetric() {
      delete this.message.cpu_utilization;
    }
    setApplicationUtilizationMetric(A) {
      this.message.application_utilization = A;
    }
    deleteApplicationUtilizationMetric() {
      delete this.message.application_utilization;
    }
    setQpsMetric(A) {
      this.message.rps_fractional = A;
    }
    deleteQpsMetric() {
      delete this.message.rps_fractional;
    }
    setEpsMetric(A) {
      this.message.eps = A;
    }
    deleteEpsMetric() {
      delete this.message.eps;
    }
    addToServer(A) {
      let K = Rj1().xds.service.orca.v3.OpenRcaService.service;
      A.addService(K, this.serviceImplementation);
    }
  }
  ri7.ServerMetricRecorder = pi7;
  function di7(A) {
    return new (Rj1().xds.service.orca.v3.OpenRcaService)("unused", ow2.ChannelCredentials.createInsecure(), {
      channelOverride: A
    });
  }
  ri7.GRPC_METRICS_HEADER = "endpoint-load-metrics-bin";
  var Qi7 = "grpc_orca_load_report";
  function AH2(A, K) {
    return (q, Y, z) => {
      let w = z.getOpaque(Qi7);
      if (w) A(w);else {
        let H = z.get(ri7.GRPC_METRICS_HEADER);
        if (H.length > 0) w = Rj1().xds.data.orca.v3.OrcaLoadReport.deserialize(H[0]), A(w), z.setOpaque(Qi7, w);
      }
      if (K) K(q, Y, z);
    };
  }
  var ci7 = "orca_oob_metrics";
  class li7 {
    constructor(A, K) {
      this.metricsListener = A, this.intervalMs = K, this.dataProducer = null;
    }
    setSubchannel(A) {
      let K = A.getOrCreateDataProducer(ci7, KH2);
      this.dataProducer = K, K.addDataWatcher(this);
    }
    destroy() {
      var A;
      (A = this.dataProducer) === null || A === void 0 || A.removeDataWatcher(this);
    }
    getInterval() {
      return this.intervalMs;
    }
    onMetricsUpdate(A) {
      this.metricsListener(A);
    }
  }
  class ii7 {
    constructor(A) {
      this.subchannel = A, this.dataWatchers = new Set(), this.orcaSupported = !0, this.metricsCall = null, this.currentInterval = 1 / 0, this.backoffTimer = new sw2.BackoffTimeout(() => this.updateMetricsSubscription()), this.subchannelStateListener = () => this.updateMetricsSubscription();
      let K = A.getChannel();
      this.client = di7(K), A.addConnectivityStateListener(this.subchannelStateListener);
    }
    addDataWatcher(A) {
      this.dataWatchers.add(A), this.updateMetricsSubscription();
    }
    removeDataWatcher(A) {
      var K;
      if (this.dataWatchers.delete(A), this.dataWatchers.size === 0) this.subchannel.removeDataProducer(ci7), (K = this.metricsCall) === null || K === void 0 || K.cancel(), this.metricsCall = null, this.client.close(), this.subchannel.removeConnectivityStateListener(this.subchannelStateListener);else this.updateMetricsSubscription();
    }
    updateMetricsSubscription() {
      var A;
      if (this.dataWatchers.size === 0 || !this.orcaSupported || this.subchannel.getConnectivityState() !== tw2.ConnectivityState.READY) return;
      let K = Math.min(...Array.from(this.dataWatchers).map(q => q.getInterval()));
      if (!this.metricsCall || K !== this.currentInterval) {
        (A = this.metricsCall) === null || A === void 0 || A.cancel(), this.currentInterval = K;
        let q = this.client.streamCoreMetrics({
          report_interval: (0, yC6.msToDuration)(K)
        });
        this.metricsCall = q, q.on("data", Y => {
          this.dataWatchers.forEach(z => {
            z.onMetricsUpdate(Y);
          });
        }), q.on("error", Y => {
          if (this.metricsCall = null, Y.code === gi7.Status.UNIMPLEMENTED) {
            this.orcaSupported = !1;
            return;
          }
          if (Y.code === gi7.Status.CANCELLED) return;
          this.backoffTimer.runOnce();
        });
      }
    }
  }
  class ni7 extends aw2.BaseSubchannelWrapper {
    constructor(A, K, q) {
      super(A);
      this.addDataWatcher(new li7(K, q));
    }
    getWrappedSubchannel() {
      return this.child;
    }
  }
  ri7.OrcaOobMetricsSubchannelWrapper = ni7;
  function KH2(A) {
    return new ii7(A);
  }
});

// Register to shared state
__$.yj1 = yj1;
