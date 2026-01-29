// Module: Do7
// Dependencies: RK, P9, ss, _L6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Do7 = v(Zo7 => {
  Object.defineProperty(Zo7, "__esModule", {
    value: !0
  });
  Zo7.PrometheusExporter = void 0;
  var mFA = __$.RK(),
    E02 = __$.P9(),
    GL6 = __$.ss(),
    k02 = CA("http"),
    C02 = __$._L6(),
    L02 = CA("url");
  class Od extends GL6.MetricReader {
    static DEFAULT_OPTIONS = {
      host: void 0,
      port: 9464,
      endpoint: "/metrics",
      prefix: "",
      appendTimestamp: !1,
      withResourceConstantLabels: void 0,
      withoutTargetInfo: !1
    };
    _host;
    _port;
    _baseUrl;
    _endpoint;
    _server;
    _prefix;
    _appendTimestamp;
    _serializer;
    _startServerPromise;
    constructor(A = {}, K = () => {}) {
      super({
        aggregationSelector: z => {
          return {
            type: GL6.AggregationType.DEFAULT
          };
        },
        aggregationTemporalitySelector: z => GL6.AggregationTemporality.CUMULATIVE,
        metricProducers: A.metricProducers
      });
      this._host = A.host || process.env.OTEL_EXPORTER_PROMETHEUS_HOST || Od.DEFAULT_OPTIONS.host, this._port = A.port || Number(process.env.OTEL_EXPORTER_PROMETHEUS_PORT) || Od.DEFAULT_OPTIONS.port, this._prefix = A.prefix || Od.DEFAULT_OPTIONS.prefix, this._appendTimestamp = typeof A.appendTimestamp === "boolean" ? A.appendTimestamp : Od.DEFAULT_OPTIONS.appendTimestamp;
      let q = A.withResourceConstantLabels || Od.DEFAULT_OPTIONS.withResourceConstantLabels,
        Y = A.withoutTargetInfo || Od.DEFAULT_OPTIONS.withoutTargetInfo;
      if (this._server = (0, k02.createServer)(this._requestHandler).unref(), this._serializer = new C02.PrometheusSerializer(this._prefix, this._appendTimestamp, q, Y), this._baseUrl = `http://${this._host}:${this._port}/`, this._endpoint = (A.endpoint || Od.DEFAULT_OPTIONS.endpoint).replace(/^([^/])/, "/$1"), A.preventServerStart !== !0) this.startServer().then(K, z => {
        mFA.diag.error(z), K(z);
      });else if (K) queueMicrotask(K);
    }
    async onForceFlush() {}
    onShutdown() {
      return this.stopServer();
    }
    stopServer() {
      if (!this._server) return mFA.diag.debug("Prometheus stopServer() was called but server was never started."), Promise.resolve();else return new Promise(A => {
        this._server.close(K => {
          if (!K) mFA.diag.debug("Prometheus exporter was stopped");else if (K.code !== "ERR_SERVER_NOT_RUNNING") (0, E02.globalErrorHandler)(K);
          A();
        });
      });
    }
    startServer() {
      return this._startServerPromise ??= new Promise((A, K) => {
        this._server.once("error", K), this._server.listen({
          port: this._port,
          host: this._host
        }, () => {
          mFA.diag.debug(`Prometheus exporter server started: ${this._host}:${this._port}/${this._endpoint}`), A();
        });
      }), this._startServerPromise;
    }
    getMetricsRequestHandler(A, K) {
      this._exportMetrics(K);
    }
    _requestHandler = (A, K) => {
      if (A.url != null && new L02.URL(A.url, this._baseUrl).pathname === this._endpoint) this._exportMetrics(K);else this._notFound(K);
    };
    _exportMetrics = A => {
      A.statusCode = 200, A.setHeader("content-type", "text/plain"), this.collect().then(K => {
        let {
          resourceMetrics: q,
          errors: Y
        } = K;
        if (Y.length) mFA.diag.error("PrometheusExporter: metrics collection errors", ...Y);
        A.end(this._serializer.serialize(q));
      }, K => {
        A.end(`# failed to export metrics: ${K}`);
      });
    };
    _notFound = A => {
      A.statusCode = 404, A.end();
    };
  }
  Zo7.PrometheusExporter = Od;
});

// Register to shared state
__$.Do7 = Do7;
