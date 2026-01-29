// Module: oP8
// Dependencies: H8, BB1, gB1, FX, xE, lP8, hB1, IB1, qV, $HA
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oP8 = v(rP8 => {
  Object.defineProperty(rP8, "__esModule", {
    value: !0
  });
  var qF = __$.H8(),
    vUq = __$.BB1(),
    EUq = __$.gB1(),
    YtA = __$.FX(),
    kUq = __$.xE(),
    CUq = __$.lP8(),
    LUq = __$.hB1(),
    RUq = __$.IB1(),
    yUq = __$.qV(),
    IUq = __$.$HA();
  __$.ZHA();
  var iP8 = __$.n1A();
  class nP8 extends vUq.BaseClient {
    constructor(A) {
      RUq.addTracingExtensions();
      super(A);
      if (A._experiments && A._experiments.metricsAggregator) this.metricsAggregator = new CUq.MetricsAggregator(this);
    }
    eventFromException(A, K) {
      return qF.resolvedSyncPromise(qF.eventFromUnknownInput(kUq.getClient(), this._options.stackParser, A, K));
    }
    eventFromMessage(A, K = "info", q) {
      return qF.resolvedSyncPromise(qF.eventFromMessage(this._options.stackParser, A, K, q, this._options.attachStacktrace));
    }
    captureException(A, K, q) {
      if (this._options.autoSessionTracking && this._sessionFlusher && q) {
        let Y = q.getRequestSession();
        if (Y && Y.status === "ok") Y.status = "errored";
      }
      return super.captureException(A, K, q);
    }
    captureEvent(A, K, q) {
      if (this._options.autoSessionTracking && this._sessionFlusher && q) {
        if ((A.type || "exception") === "exception" && A.exception && A.exception.values && A.exception.values.length > 0) {
          let w = q.getRequestSession();
          if (w && w.status === "ok") w.status = "errored";
        }
      }
      return super.captureEvent(A, K, q);
    }
    close(A) {
      if (this._sessionFlusher) this._sessionFlusher.close();
      return super.close(A);
    }
    initSessionFlusher() {
      let {
        release: A,
        environment: K
      } = this._options;
      if (!A) YtA.DEBUG_BUILD && qF.logger.warn("Cannot initialise an instance of SessionFlusher if no release is provided!");else this._sessionFlusher = new LUq.SessionFlusher(this, {
        release: A,
        environment: K
      });
    }
    captureCheckIn(A, K, q) {
      let Y = "checkInId" in A && A.checkInId ? A.checkInId : qF.uuid4();
      if (!this._isEnabled()) return YtA.DEBUG_BUILD && qF.logger.warn("SDK not enabled, will not capture checkin."), Y;
      let z = this.getOptions(),
        {
          release: w,
          environment: H,
          tunnel: J
        } = z,
        O = {
          check_in_id: Y,
          monitor_slug: A.monitorSlug,
          status: A.status,
          release: w,
          environment: H
        };
      if ("duration" in A) O.duration = A.duration;
      if (K) O.monitor_config = {
        schedule: K.schedule,
        checkin_margin: K.checkinMargin,
        max_runtime: K.maxRuntime,
        timezone: K.timezone
      };
      let [X, $] = this._getTraceInfoFromScope(q);
      if ($) O.contexts = {
        trace: $
      };
      let _ = EUq.createCheckInEnvelope(O, X, this.getSdkMetadata(), J, this.getDsn());
      return YtA.DEBUG_BUILD && qF.logger.info("Sending checkin:", A.monitorSlug, A.status), this._sendEnvelope(_), Y;
    }
    _captureRequestSession() {
      if (!this._sessionFlusher) YtA.DEBUG_BUILD && qF.logger.warn("Discarded request mode session because autoSessionTracking option was disabled");else this._sessionFlusher.incrementSessionStatusCount();
    }
    _prepareEvent(A, K, q, Y) {
      if (this._options.platform) A.platform = A.platform || this._options.platform;
      if (this._options.runtime) A.contexts = {
        ...A.contexts,
        runtime: (A.contexts || {}).runtime || this._options.runtime
      };
      if (this._options.serverName) A.server_name = A.server_name || this._options.serverName;
      return super._prepareEvent(A, K, q, Y);
    }
    _getTraceInfoFromScope(A) {
      if (!A) return [void 0, void 0];
      let K = A.getSpan();
      if (K) return [IUq.getRootSpan(K) ? iP8.getDynamicSamplingContextFromSpan(K) : void 0, yUq.spanToTraceContext(K)];
      let {
          traceId: q,
          spanId: Y,
          parentSpanId: z,
          dsc: w
        } = A.getPropagationContext(),
        H = {
          trace_id: q,
          span_id: Y,
          parent_span_id: z
        };
      if (w) return [w, H];
      return [iP8.getDynamicSamplingContextFromClient(q, this, A), H];
    }
  }
  rP8.ServerRuntimeClient = nP8;
});

// Register to shared state
__$.oP8 = oP8;
