// Module: BB1
// Dependencies: H8, tsA, FX, SB1, xE, Gb, KF, SP8, XHA, n1A
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BB1 = v(gP8 => {
  Object.defineProperty(gP8, "__esModule", {
    value: !0
  });
  var lY = __$.H8(),
    FQq = __$.tsA(),
    Wb = __$.FX(),
    hP8 = __$.SB1(),
    QQq = __$.xE(),
    UQq = __$.Gb(),
    AtA = __$.KF(),
    pQq = __$.SP8(),
    bP8 = __$.XHA(),
    dQq = __$.n1A(),
    cQq = __$.IsA(),
    xP8 = "Not capturing exception because it's already been captured.";
  class uP8 {
    constructor(A) {
      if (this._options = A, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], A.dsn) this._dsn = lY.makeDsn(A.dsn);else Wb.DEBUG_BUILD && lY.logger.warn("No DSN provided, client will not send events.");
      if (this._dsn) {
        let K = FQq.getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, A);
        this._transport = A.transport({
          tunnel: this._options.tunnel,
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...A.transportOptions,
          url: K
        });
      }
    }
    captureException(A, K, q) {
      if (lY.checkOrSetAlreadyCaught(A)) {
        Wb.DEBUG_BUILD && lY.logger.log(xP8);
        return;
      }
      let Y = K && K.event_id;
      return this._process(this.eventFromException(A, K).then(z => this._captureEvent(z, K, q)).then(z => {
        Y = z;
      })), Y;
    }
    captureMessage(A, K, q, Y) {
      let z = q && q.event_id,
        w = lY.isParameterizedString(A) ? A : String(A),
        H = lY.isPrimitive(A) ? this.eventFromMessage(w, K, q) : this.eventFromException(A, q);
      return this._process(H.then(J => this._captureEvent(J, q, Y)).then(J => {
        z = J;
      })), z;
    }
    captureEvent(A, K, q) {
      if (K && K.originalException && lY.checkOrSetAlreadyCaught(K.originalException)) {
        Wb.DEBUG_BUILD && lY.logger.log(xP8);
        return;
      }
      let Y = K && K.event_id,
        w = (A.sdkProcessingMetadata || {}).capturedSpanScope;
      return this._process(this._captureEvent(A, K, w || q).then(H => {
        Y = H;
      })), Y;
    }
    captureSession(A) {
      if (typeof A.release !== "string") Wb.DEBUG_BUILD && lY.logger.warn("Discarded session because of missing or non-string release");else this.sendSession(A), bP8.updateSession(A, {
        init: !1
      });
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(A) {
      let K = this._transport;
      if (K) {
        if (this.metricsAggregator) this.metricsAggregator.flush();
        return this._isClientDoneProcessing(A).then(q => {
          return K.flush(A).then(Y => q && Y);
        });
      } else return lY.resolvedSyncPromise(!0);
    }
    close(A) {
      return this.flush(A).then(K => {
        if (this.getOptions().enabled = !1, this.metricsAggregator) this.metricsAggregator.close();
        return K;
      });
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(A) {
      this._eventProcessors.push(A);
    }
    setupIntegrations(A) {
      if (A && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) this._setupIntegrations();
    }
    init() {
      if (this._isEnabled()) this._setupIntegrations();
    }
    getIntegrationById(A) {
      return this.getIntegrationByName(A);
    }
    getIntegrationByName(A) {
      return this._integrations[A];
    }
    getIntegration(A) {
      try {
        return this._integrations[A.id] || null;
      } catch (K) {
        return Wb.DEBUG_BUILD && lY.logger.warn(`Cannot retrieve integration ${A.id} from the current Client`), null;
      }
    }
    addIntegration(A) {
      let K = this._integrations[A.name];
      if (AtA.setupIntegration(this, A, this._integrations), !K) AtA.afterSetupIntegrations(this, [A]);
    }
    sendEvent(A, K = {}) {
      this.emit("beforeSendEvent", A, K);
      let q = hP8.createEventEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
      for (let z of K.attachments || []) q = lY.addItemToEnvelope(q, lY.createAttachmentEnvelopeItem(z, this._options.transportOptions && this._options.transportOptions.textEncoder));
      let Y = this._sendEnvelope(q);
      if (Y) Y.then(z => this.emit("afterSendEvent", A, z), null);
    }
    sendSession(A) {
      let K = hP8.createSessionEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(K);
    }
    recordDroppedEvent(A, K, q) {
      if (this._options.sendClientReports) {
        let Y = typeof q === "number" ? q : 1,
          z = `${A}:${K}`;
        Wb.DEBUG_BUILD && lY.logger.log(`Recording outcome: "${z}"${Y > 1 ? ` (${Y} times)` : ""}`), this._outcomes[z] = (this._outcomes[z] || 0) + Y;
      }
    }
    captureAggregateMetrics(A) {
      Wb.DEBUG_BUILD && lY.logger.log(`Flushing aggregated metrics, number of metrics: ${A.length}`);
      let K = pQq.createMetricEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(K);
    }
    on(A, K) {
      if (!this._hooks[A]) this._hooks[A] = [];
      this._hooks[A].push(K);
    }
    emit(A, ...K) {
      if (this._hooks[A]) this._hooks[A].forEach(q => q(...K));
    }
    _setupIntegrations() {
      let {
        integrations: A
      } = this._options;
      this._integrations = AtA.setupIntegrations(this, A), AtA.afterSetupIntegrations(this, A), this._integrationsInitialized = !0;
    }
    _updateSessionFromEvent(A, K) {
      let q = !1,
        Y = !1,
        z = K.exception && K.exception.values;
      if (z) {
        Y = !0;
        for (let J of z) {
          let O = J.mechanism;
          if (O && O.handled === !1) {
            q = !0;
            break;
          }
        }
      }
      let w = A.status === "ok";
      if (w && A.errors === 0 || w && q) bP8.updateSession(A, {
        ...(q && {
          status: "crashed"
        }),
        errors: A.errors || Number(Y || q)
      }), this.captureSession(A);
    }
    _isClientDoneProcessing(A) {
      return new lY.SyncPromise(K => {
        let q = 0,
          Y = 1,
          z = setInterval(() => {
            if (this._numProcessing == 0) clearInterval(z), K(!0);else if (q += Y, A && q >= A) clearInterval(z), K(!1);
          }, Y);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== !1 && this._transport !== void 0;
    }
    _prepareEvent(A, K, q, Y = UQq.getIsolationScope()) {
      let z = this.getOptions(),
        w = Object.keys(this._integrations);
      if (!K.integrations && w.length > 0) K.integrations = w;
      return this.emit("preprocessEvent", A, K), cQq.prepareEvent(z, A, K, q, this, Y).then(H => {
        if (H === null) return H;
        let J = {
          ...Y.getPropagationContext(),
          ...(q ? q.getPropagationContext() : void 0)
        };
        if (!(H.contexts && H.contexts.trace) && J) {
          let {
            traceId: X,
            spanId: $,
            parentSpanId: _,
            dsc: G
          } = J;
          H.contexts = {
            trace: {
              trace_id: X,
              span_id: $,
              parent_span_id: _
            },
            ...H.contexts
          };
          let Z = G ? G : dQq.getDynamicSamplingContextFromClient(X, this, q);
          H.sdkProcessingMetadata = {
            dynamicSamplingContext: Z,
            ...H.sdkProcessingMetadata
          };
        }
        return H;
      });
    }
    _captureEvent(A, K = {}, q) {
      return this._processEvent(A, K, q).then(Y => {
        return Y.event_id;
      }, Y => {
        if (Wb.DEBUG_BUILD) {
          let z = Y;
          if (z.logLevel === "log") lY.logger.log(z.message);else lY.logger.warn(z);
        }
        return;
      });
    }
    _processEvent(A, K, q) {
      let Y = this.getOptions(),
        {
          sampleRate: z
        } = Y,
        w = mP8(A),
        H = BP8(A),
        J = A.type || "error",
        O = `before send for type \`${J}\``;
      if (H && typeof z === "number" && Math.random() > z) return this.recordDroppedEvent("sample_rate", "error", A), lY.rejectedSyncPromise(new lY.SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${z})`, "log"));
      let X = J === "replay_event" ? "replay" : J,
        _ = (A.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
      return this._prepareEvent(A, K, q, _).then(G => {
        if (G === null) throw this.recordDroppedEvent("event_processor", X, A), new lY.SentryError("An event processor returned `null`, will not send event.", "log");
        if (K.data && K.data.__sentry__ === !0) return G;
        let W = iQq(Y, G, K);
        return lQq(W, O);
      }).then(G => {
        if (G === null) {
          if (this.recordDroppedEvent("before_send", X, A), w) {
            let j = 1 + (A.spans || []).length;
            this.recordDroppedEvent("before_send", "span", j);
          }
          throw new lY.SentryError(`${O} returned \`null\`, will not send event.`, "log");
        }
        let Z = q && q.getSession();
        if (!w && Z) this._updateSessionFromEvent(Z, G);
        if (w) {
          let D = G.sdkProcessingMetadata && G.sdkProcessingMetadata.spanCountBeforeProcessing || 0,
            j = G.spans ? G.spans.length : 0,
            M = D - j;
          if (M > 0) this.recordDroppedEvent("before_send", "span", M);
        }
        let W = G.transaction_info;
        if (w && W && G.transaction !== A.transaction) G.transaction_info = {
          ...W,
          source: "custom"
        };
        return this.sendEvent(G, K), G;
      }).then(null, G => {
        if (G instanceof lY.SentryError) throw G;
        throw this.captureException(G, {
          data: {
            __sentry__: !0
          },
          originalException: G
        }), new lY.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${G}`);
      });
    }
    _process(A) {
      this._numProcessing++, A.then(K => {
        return this._numProcessing--, K;
      }, K => {
        return this._numProcessing--, K;
      });
    }
    _sendEnvelope(A) {
      if (this.emit("beforeEnvelope", A), this._isEnabled() && this._transport) return this._transport.send(A).then(null, K => {
        Wb.DEBUG_BUILD && lY.logger.error("Error while sending event:", K);
      });else Wb.DEBUG_BUILD && lY.logger.error("Transport disabled");
    }
    _clearOutcomes() {
      let A = this._outcomes;
      return this._outcomes = {}, Object.keys(A).map(K => {
        let [q, Y] = K.split(":");
        return {
          reason: q,
          category: Y,
          quantity: A[K]
        };
      });
    }
  }
  function lQq(A, K) {
    let q = `${K} must return \`null\` or a valid event.`;
    if (lY.isThenable(A)) return A.then(Y => {
      if (!lY.isPlainObject(Y) && Y !== null) throw new lY.SentryError(q);
      return Y;
    }, Y => {
      throw new lY.SentryError(`${K} rejected with ${Y}`);
    });else if (!lY.isPlainObject(A) && A !== null) throw new lY.SentryError(q);
    return A;
  }
  function iQq(A, K, q) {
    let {
      beforeSend: Y,
      beforeSendTransaction: z
    } = A;
    if (BP8(K) && Y) return Y(K, q);
    if (mP8(K) && z) {
      if (K.spans) {
        let w = K.spans.length;
        K.sdkProcessingMetadata = {
          ...K.sdkProcessingMetadata,
          spanCountBeforeProcessing: w
        };
      }
      return z(K, q);
    }
    return K;
  }
  function BP8(A) {
    return A.type === void 0;
  }
  function mP8(A) {
    return A.type === "transaction";
  }
  function nQq(A) {
    let K = QQq.getClient();
    if (!K || !K.addEventProcessor) return;
    K.addEventProcessor(A);
  }
  gP8.BaseClient = uP8;
  gP8.addEventProcessor = nQq;
});

// Register to shared state
__$.BB1 = BB1;
