// Module: fC6
// Dependencies: qjA, iU7, ol7, tp, UG, K9, Wj1, KC6, jS, Lw
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fC6 = v(Ni7 => {
  Object.defineProperty(Ni7, "__esModule", {
    value: !0
  });
  Ni7.InternalChannel = Ni7.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = void 0;
  var ww2 = __$.qjA(),
    Hw2 = __$.iU7(),
    Jw2 = __$.ol7(),
    VC6 = __$.tp(),
    Ow2 = __$.UG(),
    Wt = __$.K9(),
    Xw2 = __$.Wj1(),
    $w2 = __$.KC6(),
    ji7 = __$.jS(),
    Ej1 = __$.Lw(),
    _w2 = __$.$C6(),
    kj1 = __$.zP(),
    GL = __$.wP(),
    vFA = __$.Gt(),
    Gw2 = __$.Ki7(),
    Zw2 = __$.MjA(),
    Ww2 = __$.Hi7(),
    MC6 = __$.Gj1(),
    Dw2 = __$.DFA(),
    PC6 = __$.Gi7(),
    jw2 = __$.TFA(),
    Mw2 = 2147483647,
    Pw2 = 1000,
    Vw2 = 1800000,
    Cj1 = new Map(),
    fw2 = 16777216,
    Nw2 = 1048576;
  class Mi7 extends jw2.BaseSubchannelWrapper {
    constructor(A, K) {
      super(A);
      this.channel = K, this.refCount = 0, this.subchannelStateListener = (q, Y, z, w) => {
        K.throttleKeepalive(w);
      };
    }
    ref() {
      if (this.refCount === 0) this.child.addConnectivityStateListener(this.subchannelStateListener), this.channel.addWrappedSubchannel(this);
      this.child.ref(), this.refCount += 1;
    }
    unref() {
      if (this.child.unref(), this.refCount -= 1, this.refCount <= 0) this.child.removeConnectivityStateListener(this.subchannelStateListener), this.channel.removeWrappedSubchannel(this);
    }
  }
  class Pi7 {
    pick(A) {
      return {
        pickResultType: VC6.PickResultType.DROP,
        status: {
          code: Wt.Status.UNAVAILABLE,
          details: "Channel closed before call started",
          metadata: new Ow2.Metadata()
        },
        subchannel: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  Ni7.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = "grpc.internal.no_subchannel";
  class Vi7 {
    constructor(A) {
      this.target = A, this.trace = new vFA.ChannelzTrace(), this.callTracker = new vFA.ChannelzCallTracker(), this.childrenTracker = new vFA.ChannelzChildrenTracker(), this.state = GL.ConnectivityState.IDLE;
    }
    getChannelzInfoCallback() {
      return () => {
        return {
          target: this.target,
          state: this.state,
          trace: this.trace,
          callTracker: this.callTracker,
          children: this.childrenTracker.getChildLists()
        };
      };
    }
  }
  class fi7 {
    constructor(A, K, q) {
      var Y, z, w, H, J, O;
      if (this.credentials = K, this.options = q, this.connectivityState = GL.ConnectivityState.IDLE, this.currentPicker = new VC6.UnavailablePicker(), this.configSelectionQueue = [], this.pickQueue = [], this.connectivityStateWatchers = [], this.callRefTimer = null, this.configSelector = null, this.currentResolutionError = null, this.wrappedSubchannels = new Set(), this.callCount = 0, this.idleTimer = null, this.channelzEnabled = !0, this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER), typeof A !== "string") throw TypeError("Channel target must be a string");
      if (!(K instanceof ww2.ChannelCredentials)) throw TypeError("Channel credentials must be a ChannelCredentials object");
      if (q) {
        if (typeof q !== "object") throw TypeError("Channel options must be an object");
      }
      this.channelzInfoTracker = new Vi7(A);
      let X = (0, kj1.parseUri)(A);
      if (X === null) throw Error(`Could not parse target name "${A}"`);
      let $ = (0, ji7.mapUriDefaultScheme)(X);
      if ($ === null) throw Error(`Could not find a default scheme for target name "${A}"`);
      if (this.options["grpc.enable_channelz"] === 0) this.channelzEnabled = !1;
      if (this.channelzRef = (0, vFA.registerChannelzChannel)(A, this.channelzInfoTracker.getChannelzInfoCallback(), this.channelzEnabled), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Channel created");
      if (this.options["grpc.default_authority"]) this.defaultAuthority = this.options["grpc.default_authority"];else this.defaultAuthority = (0, ji7.getDefaultAuthority)($);
      let _ = (0, _w2.mapProxyName)($, q);
      this.target = _.target, this.options = Object.assign({}, this.options, _.extraOptions), this.subchannelPool = (0, Jw2.getSubchannelPool)(((Y = this.options["grpc.use_local_subchannel_pool"]) !== null && Y !== void 0 ? Y : 0) === 0), this.retryBufferTracker = new PC6.MessageBufferTracker((z = this.options["grpc.retry_buffer_size"]) !== null && z !== void 0 ? z : fw2, (w = this.options["grpc.per_rpc_retry_buffer_size"]) !== null && w !== void 0 ? w : Nw2), this.keepaliveTime = (H = this.options["grpc.keepalive_time_ms"]) !== null && H !== void 0 ? H : -1, this.idleTimeoutMs = Math.max((J = this.options["grpc.client_idle_timeout_ms"]) !== null && J !== void 0 ? J : Vw2, Pw2);
      let G = {
        createSubchannel: (W, D) => {
          let j = {};
          for (let [f, N] of Object.entries(D)) if (!f.startsWith(Ni7.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX)) j[f] = N;
          let M = this.subchannelPool.getOrCreateSubchannel(this.target, W, j, this.credentials);
          if (M.throttleKeepalive(this.keepaliveTime), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Created subchannel or used existing subchannel", M.getChannelzRef());
          return new Mi7(M, this);
        },
        updateState: (W, D) => {
          this.currentPicker = D;
          let j = this.pickQueue.slice();
          if (this.pickQueue = [], j.length > 0) this.callRefTimerUnref();
          for (let M of j) M.doPick();
          this.updateState(W);
        },
        requestReresolution: () => {
          throw Error("Resolving load balancer should never call requestReresolution");
        },
        addChannelzChild: W => {
          if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.refChild(W);
        },
        removeChannelzChild: W => {
          if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.unrefChild(W);
        }
      };
      this.resolvingLoadBalancer = new Hw2.ResolvingLoadBalancer(this.target, G, this.options, (W, D) => {
        var j;
        if (W.retryThrottling) Cj1.set(this.getTarget(), new PC6.RetryThrottler(W.retryThrottling.maxTokens, W.retryThrottling.tokenRatio, Cj1.get(this.getTarget())));else Cj1.delete(this.getTarget());
        if (this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Address resolution succeeded");
        (j = this.configSelector) === null || j === void 0 || j.unref(), this.configSelector = D, this.currentResolutionError = null, process.nextTick(() => {
          let M = this.configSelectionQueue;
          if (this.configSelectionQueue = [], M.length > 0) this.callRefTimerUnref();
          for (let P of M) P.getConfig();
        });
      }, W => {
        if (this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_WARNING", "Address resolution failed with code " + W.code + ' and details "' + W.details + '"');
        if (this.configSelectionQueue.length > 0) this.trace("Name resolution failed with calls queued for config selection");
        if (this.configSelector === null) this.currentResolutionError = Object.assign(Object.assign({}, (0, Dw2.restrictControlPlaneStatusCode)(W.code, W.details)), {
          metadata: W.metadata
        });
        let D = this.configSelectionQueue;
        if (this.configSelectionQueue = [], D.length > 0) this.callRefTimerUnref();
        for (let j of D) j.reportResolverError(W);
      }), this.filterStackFactory = new Xw2.FilterStackFactory([new $w2.CompressionFilterFactory(this, this.options)]), this.trace("Channel constructed with options " + JSON.stringify(q, void 0, 2));
      let Z = Error();
      if ((0, Ej1.isTracerEnabled)("channel_stacktrace")) (0, Ej1.trace)(Wt.LogVerbosity.DEBUG, "channel_stacktrace", "(" + this.channelzRef.id + `) Channel constructed 
` + ((O = Z.stack) === null || O === void 0 ? void 0 : O.substring(Z.stack.indexOf(`
`) + 1)));
      this.lastActivityTimestamp = new Date();
    }
    trace(A, K) {
      (0, Ej1.trace)(K !== null && K !== void 0 ? K : Wt.LogVerbosity.DEBUG, "channel", "(" + this.channelzRef.id + ") " + (0, kj1.uriToString)(this.target) + " " + A);
    }
    callRefTimerRef() {
      var A, K, q, Y;
      if (!this.callRefTimer) this.callRefTimer = setInterval(() => {}, Mw2);
      if (!((K = (A = this.callRefTimer).hasRef) === null || K === void 0 ? void 0 : K.call(A))) this.trace("callRefTimer.ref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length), (Y = (q = this.callRefTimer).ref) === null || Y === void 0 || Y.call(q);
    }
    callRefTimerUnref() {
      var A, K, q;
      if (!((A = this.callRefTimer) === null || A === void 0 ? void 0 : A.hasRef) || this.callRefTimer.hasRef()) this.trace("callRefTimer.unref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length), (q = (K = this.callRefTimer) === null || K === void 0 ? void 0 : K.unref) === null || q === void 0 || q.call(K);
    }
    removeConnectivityStateWatcher(A) {
      let K = this.connectivityStateWatchers.findIndex(q => q === A);
      if (K >= 0) this.connectivityStateWatchers.splice(K, 1);
    }
    updateState(A) {
      if ((0, Ej1.trace)(Wt.LogVerbosity.DEBUG, "connectivity_state", "(" + this.channelzRef.id + ") " + (0, kj1.uriToString)(this.target) + " " + GL.ConnectivityState[this.connectivityState] + " -> " + GL.ConnectivityState[A]), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Connectivity state change to " + GL.ConnectivityState[A]);
      this.connectivityState = A, this.channelzInfoTracker.state = A;
      let K = this.connectivityStateWatchers.slice();
      for (let q of K) if (A !== q.currentState) {
        if (q.timer) clearTimeout(q.timer);
        this.removeConnectivityStateWatcher(q), q.callback();
      }
      if (A !== GL.ConnectivityState.TRANSIENT_FAILURE) this.currentResolutionError = null;
    }
    throttleKeepalive(A) {
      if (A > this.keepaliveTime) {
        this.keepaliveTime = A;
        for (let K of this.wrappedSubchannels) K.throttleKeepalive(A);
      }
    }
    addWrappedSubchannel(A) {
      this.wrappedSubchannels.add(A);
    }
    removeWrappedSubchannel(A) {
      this.wrappedSubchannels.delete(A);
    }
    doPick(A, K) {
      return this.currentPicker.pick({
        metadata: A,
        extraPickInfo: K
      });
    }
    queueCallForPick(A) {
      this.pickQueue.push(A), this.callRefTimerRef();
    }
    getConfig(A, K) {
      if (this.connectivityState !== GL.ConnectivityState.SHUTDOWN) this.resolvingLoadBalancer.exitIdle();
      if (this.configSelector) return {
        type: "SUCCESS",
        config: this.configSelector.invoke(A, K, this.randomChannelId)
      };else if (this.currentResolutionError) return {
        type: "ERROR",
        error: this.currentResolutionError
      };else return {
        type: "NONE"
      };
    }
    queueCallForConfig(A) {
      this.configSelectionQueue.push(A), this.callRefTimerRef();
    }
    enterIdle() {
      if (this.resolvingLoadBalancer.destroy(), this.updateState(GL.ConnectivityState.IDLE), this.currentPicker = new VC6.QueuePicker(this.resolvingLoadBalancer), this.idleTimer) clearTimeout(this.idleTimer), this.idleTimer = null;
      if (this.callRefTimer) clearInterval(this.callRefTimer), this.callRefTimer = null;
    }
    startIdleTimeout(A) {
      var K, q;
      this.idleTimer = setTimeout(() => {
        if (this.callCount > 0) {
          this.startIdleTimeout(this.idleTimeoutMs);
          return;
        }
        let z = new Date().valueOf() - this.lastActivityTimestamp.valueOf();
        if (z >= this.idleTimeoutMs) this.trace("Idle timer triggered after " + this.idleTimeoutMs + "ms of inactivity"), this.enterIdle();else this.startIdleTimeout(this.idleTimeoutMs - z);
      }, A), (q = (K = this.idleTimer).unref) === null || q === void 0 || q.call(K);
    }
    maybeStartIdleTimer() {
      if (this.connectivityState !== GL.ConnectivityState.SHUTDOWN && !this.idleTimer) this.startIdleTimeout(this.idleTimeoutMs);
    }
    onCallStart() {
      if (this.channelzEnabled) this.channelzInfoTracker.callTracker.addCallStarted();
      this.callCount += 1;
    }
    onCallEnd(A) {
      if (this.channelzEnabled) if (A.code === Wt.Status.OK) this.channelzInfoTracker.callTracker.addCallSucceeded();else this.channelzInfoTracker.callTracker.addCallFailed();
      this.callCount -= 1, this.lastActivityTimestamp = new Date(), this.maybeStartIdleTimer();
    }
    createLoadBalancingCall(A, K, q, Y, z) {
      let w = (0, MC6.getNextCallNumber)();
      return this.trace("createLoadBalancingCall [" + w + '] method="' + K + '"'), new Gw2.LoadBalancingCall(this, A, K, q, Y, z, w);
    }
    createRetryingCall(A, K, q, Y, z) {
      let w = (0, MC6.getNextCallNumber)();
      return this.trace("createRetryingCall [" + w + '] method="' + K + '"'), new PC6.RetryingCall(this, A, K, q, Y, z, w, this.retryBufferTracker, Cj1.get(this.getTarget()));
    }
    createResolvingCall(A, K, q, Y, z) {
      let w = (0, MC6.getNextCallNumber)();
      this.trace("createResolvingCall [" + w + '] method="' + A + '", deadline=' + (0, Zw2.deadlineToString)(K));
      let H = {
          deadline: K,
          flags: z !== null && z !== void 0 ? z : Wt.Propagate.DEFAULTS,
          host: q !== null && q !== void 0 ? q : this.defaultAuthority,
          parentCall: Y
        },
        J = new Ww2.ResolvingCall(this, A, H, this.filterStackFactory.clone(), w);
      return this.onCallStart(), J.addStatusWatcher(O => {
        this.onCallEnd(O);
      }), J;
    }
    close() {
      var A;
      this.resolvingLoadBalancer.destroy(), this.updateState(GL.ConnectivityState.SHUTDOWN), this.currentPicker = new Pi7();
      for (let K of this.configSelectionQueue) K.cancelWithStatus(Wt.Status.UNAVAILABLE, "Channel closed before call started");
      this.configSelectionQueue = [];
      for (let K of this.pickQueue) K.cancelWithStatus(Wt.Status.UNAVAILABLE, "Channel closed before call started");
      if (this.pickQueue = [], this.callRefTimer) clearInterval(this.callRefTimer);
      if (this.idleTimer) clearTimeout(this.idleTimer);
      if (this.channelzEnabled) (0, vFA.unregisterChannelzRef)(this.channelzRef);
      this.subchannelPool.unrefUnusedSubchannels(), (A = this.configSelector) === null || A === void 0 || A.unref(), this.configSelector = null;
    }
    getTarget() {
      return (0, kj1.uriToString)(this.target);
    }
    getConnectivityState(A) {
      let K = this.connectivityState;
      if (A) this.resolvingLoadBalancer.exitIdle(), this.lastActivityTimestamp = new Date(), this.maybeStartIdleTimer();
      return K;
    }
    watchConnectivityState(A, K, q) {
      if (this.connectivityState === GL.ConnectivityState.SHUTDOWN) throw Error("Channel has been shut down");
      let Y = null;
      if (K !== 1 / 0) {
        let w = K instanceof Date ? K : new Date(K),
          H = new Date();
        if (K === -1 / 0 || w <= H) {
          process.nextTick(q, Error("Deadline passed without connectivity state change"));
          return;
        }
        Y = setTimeout(() => {
          this.removeConnectivityStateWatcher(z), q(Error("Deadline passed without connectivity state change"));
        }, w.getTime() - H.getTime());
      }
      let z = {
        currentState: A,
        callback: q,
        timer: Y
      };
      this.connectivityStateWatchers.push(z);
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    createCall(A, K, q, Y, z) {
      if (typeof A !== "string") throw TypeError("Channel#createCall: method must be a string");
      if (!(typeof K === "number" || K instanceof Date)) throw TypeError("Channel#createCall: deadline must be a number or Date");
      if (this.connectivityState === GL.ConnectivityState.SHUTDOWN) throw Error("Channel has been shut down");
      return this.createResolvingCall(A, K, q, Y, z);
    }
    getOptions() {
      return this.options;
    }
  }
  Ni7.InternalChannel = fi7;
});

// Register to shared state
__$.fC6 = fC6;
