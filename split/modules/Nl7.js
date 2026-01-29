// Module: Nl7
// Dependencies: wP, YjA, Lw, K9, zP, mf, Gt, Ml7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Nl7 = v(Vl7 => {
  Object.defineProperty(Vl7, "__esModule", {
    value: !0
  });
  Vl7.Subchannel = void 0;
  var Kw = __$.wP(),
    g22 = __$.YjA(),
    wC6 = __$.Lw(),
    jj1 = __$.K9(),
    F22 = __$.zP(),
    Q22 = __$.mf(),
    gB = __$.Gt(),
    U22 = __$.Ml7(),
    p22 = "subchannel",
    d22 = 2147483647;
  class Pl7 {
    constructor(A, K, q, Y, z) {
      var w;
      this.channelTarget = A, this.subchannelAddress = K, this.options = q, this.connector = z, this.connectivityState = Kw.ConnectivityState.IDLE, this.transport = null, this.continueConnecting = !1, this.stateListeners = new Set(), this.refcount = 0, this.channelzEnabled = !0, this.dataProducers = new Map(), this.subchannelChannel = null;
      let H = {
        initialDelay: q["grpc.initial_reconnect_backoff_ms"],
        maxDelay: q["grpc.max_reconnect_backoff_ms"]
      };
      if (this.backoffTimeout = new g22.BackoffTimeout(() => {
        this.handleBackoffTimer();
      }, H), this.backoffTimeout.unref(), this.subchannelAddressString = (0, Q22.subchannelAddressToString)(K), this.keepaliveTime = (w = q["grpc.keepalive_time_ms"]) !== null && w !== void 0 ? w : -1, q["grpc.enable_channelz"] === 0) this.channelzEnabled = !1, this.channelzTrace = new gB.ChannelzTraceStub(), this.callTracker = new gB.ChannelzCallTrackerStub(), this.childrenTracker = new gB.ChannelzChildrenTrackerStub(), this.streamTracker = new gB.ChannelzCallTrackerStub();else this.channelzTrace = new gB.ChannelzTrace(), this.callTracker = new gB.ChannelzCallTracker(), this.childrenTracker = new gB.ChannelzChildrenTracker(), this.streamTracker = new gB.ChannelzCallTracker();
      this.channelzRef = (0, gB.registerChannelzSubchannel)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled), this.channelzTrace.addTrace("CT_INFO", "Subchannel created"), this.trace("Subchannel constructed with options " + JSON.stringify(q, void 0, 2)), this.secureConnector = Y._createSecureConnector(A, q);
    }
    getChannelzInfo() {
      return {
        state: this.connectivityState,
        trace: this.channelzTrace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists(),
        target: this.subchannelAddressString
      };
    }
    trace(A) {
      wC6.trace(jj1.LogVerbosity.DEBUG, p22, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A);
    }
    refTrace(A) {
      wC6.trace(jj1.LogVerbosity.DEBUG, "subchannel_refcount", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A);
    }
    handleBackoffTimer() {
      if (this.continueConnecting) this.transitionToState([Kw.ConnectivityState.TRANSIENT_FAILURE], Kw.ConnectivityState.CONNECTING);else this.transitionToState([Kw.ConnectivityState.TRANSIENT_FAILURE], Kw.ConnectivityState.IDLE);
    }
    startBackoff() {
      this.backoffTimeout.runOnce();
    }
    stopBackoff() {
      this.backoffTimeout.stop(), this.backoffTimeout.reset();
    }
    startConnectingInternal() {
      let A = this.options;
      if (A["grpc.keepalive_time_ms"]) {
        let K = Math.min(this.keepaliveTime, d22);
        A = Object.assign(Object.assign({}, A), {
          "grpc.keepalive_time_ms": K
        });
      }
      this.connector.connect(this.subchannelAddress, this.secureConnector, A).then(K => {
        if (this.transitionToState([Kw.ConnectivityState.CONNECTING], Kw.ConnectivityState.READY)) {
          if (this.transport = K, this.channelzEnabled) this.childrenTracker.refChild(K.getChannelzRef());
          K.addDisconnectListener(q => {
            if (this.transitionToState([Kw.ConnectivityState.READY], Kw.ConnectivityState.IDLE), q && this.keepaliveTime > 0) this.keepaliveTime *= 2, wC6.log(jj1.LogVerbosity.ERROR, `Connection to ${(0, F22.uriToString)(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`);
          });
        } else K.shutdown();
      }, K => {
        this.transitionToState([Kw.ConnectivityState.CONNECTING], Kw.ConnectivityState.TRANSIENT_FAILURE, `${K}`);
      });
    }
    transitionToState(A, K, q) {
      var Y, z;
      if (A.indexOf(this.connectivityState) === -1) return !1;
      if (q) this.trace(Kw.ConnectivityState[this.connectivityState] + " -> " + Kw.ConnectivityState[K] + ' with error "' + q + '"');else this.trace(Kw.ConnectivityState[this.connectivityState] + " -> " + Kw.ConnectivityState[K]);
      if (this.channelzEnabled) this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + Kw.ConnectivityState[K]);
      let w = this.connectivityState;
      switch (this.connectivityState = K, K) {
        case Kw.ConnectivityState.READY:
          this.stopBackoff();
          break;
        case Kw.ConnectivityState.CONNECTING:
          this.startBackoff(), this.startConnectingInternal(), this.continueConnecting = !1;
          break;
        case Kw.ConnectivityState.TRANSIENT_FAILURE:
          if (this.channelzEnabled && this.transport) this.childrenTracker.unrefChild(this.transport.getChannelzRef());
          if ((Y = this.transport) === null || Y === void 0 || Y.shutdown(), this.transport = null, !this.backoffTimeout.isRunning()) process.nextTick(() => {
            this.handleBackoffTimer();
          });
          break;
        case Kw.ConnectivityState.IDLE:
          if (this.channelzEnabled && this.transport) this.childrenTracker.unrefChild(this.transport.getChannelzRef());
          (z = this.transport) === null || z === void 0 || z.shutdown(), this.transport = null;
          break;
        default:
          throw Error(`Invalid state: unknown ConnectivityState ${K}`);
      }
      for (let H of this.stateListeners) H(this, w, K, this.keepaliveTime, q);
      return !0;
    }
    ref() {
      this.refTrace("refcount " + this.refcount + " -> " + (this.refcount + 1)), this.refcount += 1;
    }
    unref() {
      if (this.refTrace("refcount " + this.refcount + " -> " + (this.refcount - 1)), this.refcount -= 1, this.refcount === 0) this.channelzTrace.addTrace("CT_INFO", "Shutting down"), (0, gB.unregisterChannelzRef)(this.channelzRef), this.secureConnector.destroy(), process.nextTick(() => {
        this.transitionToState([Kw.ConnectivityState.CONNECTING, Kw.ConnectivityState.READY], Kw.ConnectivityState.IDLE);
      });
    }
    unrefIfOneRef() {
      if (this.refcount === 1) return this.unref(), !0;
      return !1;
    }
    createCall(A, K, q, Y) {
      if (!this.transport) throw Error("Cannot create call, subchannel not READY");
      let z;
      if (this.channelzEnabled) this.callTracker.addCallStarted(), this.streamTracker.addCallStarted(), z = {
        onCallEnd: w => {
          if (w.code === jj1.Status.OK) this.callTracker.addCallSucceeded();else this.callTracker.addCallFailed();
        }
      };else z = {};
      return this.transport.createCall(A, K, q, Y, z);
    }
    startConnecting() {
      process.nextTick(() => {
        if (!this.transitionToState([Kw.ConnectivityState.IDLE], Kw.ConnectivityState.CONNECTING)) {
          if (this.connectivityState === Kw.ConnectivityState.TRANSIENT_FAILURE) this.continueConnecting = !0;
        }
      });
    }
    getConnectivityState() {
      return this.connectivityState;
    }
    addConnectivityStateListener(A) {
      this.stateListeners.add(A);
    }
    removeConnectivityStateListener(A) {
      this.stateListeners.delete(A);
    }
    resetBackoff() {
      process.nextTick(() => {
        this.backoffTimeout.reset(), this.transitionToState([Kw.ConnectivityState.TRANSIENT_FAILURE], Kw.ConnectivityState.CONNECTING);
      });
    }
    getAddress() {
      return this.subchannelAddressString;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    isHealthy() {
      return !0;
    }
    addHealthStateWatcher(A) {}
    removeHealthStateWatcher(A) {}
    getRealSubchannel() {
      return this;
    }
    realSubchannelEquals(A) {
      return A.getRealSubchannel() === this;
    }
    throttleKeepalive(A) {
      if (A > this.keepaliveTime) this.keepaliveTime = A;
    }
    getCallCredentials() {
      return this.secureConnector.getCallCredentials();
    }
    getChannel() {
      if (!this.subchannelChannel) this.subchannelChannel = new U22.SingleSubchannelChannel(this, this.channelTarget, this.options);
      return this.subchannelChannel;
    }
    addDataWatcher(A) {
      throw Error("Not implemented");
    }
    getOrCreateDataProducer(A, K) {
      let q = this.dataProducers.get(A);
      if (q) return q;
      let Y = K(this);
      return this.dataProducers.set(A, Y), Y;
    }
    removeDataProducer(A) {
      this.dataProducers.delete(A);
    }
  }
  Vl7.Subchannel = Pl7;
});

// Register to shared state
__$.Nl7 = Nl7;
