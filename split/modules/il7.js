// Module: il7
// Dependencies: Gt, K9, $C6, Lw, jS, mf, zP, Ul7, Gj1, RE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var il7 = v(cl7 => {
  Object.defineProperty(cl7, "__esModule", {
    value: !0
  });
  cl7.Http2SubchannelConnector = void 0;
  var K3A = CA("http2"),
    Vz2 = CA("tls"),
    Pj1 = __$.Gt(),
    fFA = __$.K9(),
    fz2 = __$.$C6(),
    NjA = __$.Lw(),
    Nz2 = __$.jS(),
    Vj1 = __$.mf(),
    ZC6 = __$.zP(),
    Tz2 = CA("net"),
    vz2 = __$.Ul7(),
    Ez2 = __$.Gj1(),
    WC6 = "transport",
    kz2 = "transport_flowctrl",
    Cz2 = __$.RE6().version,
    {
      HTTP2_HEADER_AUTHORITY: Lz2,
      HTTP2_HEADER_CONTENT_TYPE: Rz2,
      HTTP2_HEADER_METHOD: yz2,
      HTTP2_HEADER_PATH: Iz2,
      HTTP2_HEADER_TE: Sz2,
      HTTP2_HEADER_USER_AGENT: hz2
    } = K3A.constants,
    bz2 = 20000,
    xz2 = Buffer.from("too_many_pings", "ascii");
  class pl7 {
    constructor(A, K, q, Y) {
      if (this.session = A, this.options = q, this.remoteName = Y, this.keepaliveTimer = null, this.pendingSendKeepalivePing = !1, this.activeCalls = new Set(), this.disconnectListeners = [], this.disconnectHandled = !1, this.channelzEnabled = !0, this.keepalivesSent = 0, this.messagesSent = 0, this.messagesReceived = 0, this.lastMessageSentTimestamp = null, this.lastMessageReceivedTimestamp = null, this.subchannelAddressString = (0, Vj1.subchannelAddressToString)(K), q["grpc.enable_channelz"] === 0) this.channelzEnabled = !1, this.streamTracker = new Pj1.ChannelzCallTrackerStub();else this.streamTracker = new Pj1.ChannelzCallTracker();
      if (this.channelzRef = (0, Pj1.registerChannelzSocket)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled), this.userAgent = [q["grpc.primary_user_agent"], `grpc-node-js/${Cz2}`, q["grpc.secondary_user_agent"]].filter(z => z).join(" "), "grpc.keepalive_time_ms" in q) this.keepaliveTimeMs = q["grpc.keepalive_time_ms"];else this.keepaliveTimeMs = -1;
      if ("grpc.keepalive_timeout_ms" in q) this.keepaliveTimeoutMs = q["grpc.keepalive_timeout_ms"];else this.keepaliveTimeoutMs = bz2;
      if ("grpc.keepalive_permit_without_calls" in q) this.keepaliveWithoutCalls = q["grpc.keepalive_permit_without_calls"] === 1;else this.keepaliveWithoutCalls = !1;
      if (A.once("close", () => {
        this.trace("session closed"), this.handleDisconnect();
      }), A.once("goaway", (z, w, H) => {
        let J = !1;
        if (z === K3A.constants.NGHTTP2_ENHANCE_YOUR_CALM && H && H.equals(xz2)) J = !0;
        this.trace("connection closed by GOAWAY with code " + z + " and data " + (H === null || H === void 0 ? void 0 : H.toString())), this.reportDisconnectToOwner(J);
      }), A.once("error", z => {
        this.trace("connection closed with error " + z.message), this.handleDisconnect();
      }), A.socket.once("close", z => {
        this.trace("connection closed. hadError=" + z), this.handleDisconnect();
      }), NjA.isTracerEnabled(WC6)) A.on("remoteSettings", z => {
        this.trace("new settings received" + (this.session !== A ? " on the old connection" : "") + ": " + JSON.stringify(z));
      }), A.on("localSettings", z => {
        this.trace("local settings acknowledged by remote" + (this.session !== A ? " on the old connection" : "") + ": " + JSON.stringify(z));
      });
      if (this.keepaliveWithoutCalls) this.maybeStartKeepalivePingTimer();
      if (A.socket instanceof Vz2.TLSSocket) this.authContext = {
        transportSecurityType: "ssl",
        sslPeerCertificate: A.socket.getPeerCertificate()
      };else this.authContext = {};
    }
    getChannelzInfo() {
      var A, K, q;
      let Y = this.session.socket,
        z = Y.remoteAddress ? (0, Vj1.stringToSubchannelAddress)(Y.remoteAddress, Y.remotePort) : null,
        w = Y.localAddress ? (0, Vj1.stringToSubchannelAddress)(Y.localAddress, Y.localPort) : null,
        H;
      if (this.session.encrypted) {
        let O = Y,
          X = O.getCipher(),
          $ = O.getCertificate(),
          _ = O.getPeerCertificate();
        H = {
          cipherSuiteStandardName: (A = X.standardName) !== null && A !== void 0 ? A : null,
          cipherSuiteOtherName: X.standardName ? null : X.name,
          localCertificate: $ && "raw" in $ ? $.raw : null,
          remoteCertificate: _ && "raw" in _ ? _.raw : null
        };
      } else H = null;
      return {
        remoteAddress: z,
        localAddress: w,
        security: H,
        remoteName: this.remoteName,
        streamsStarted: this.streamTracker.callsStarted,
        streamsSucceeded: this.streamTracker.callsSucceeded,
        streamsFailed: this.streamTracker.callsFailed,
        messagesSent: this.messagesSent,
        messagesReceived: this.messagesReceived,
        keepAlivesSent: this.keepalivesSent,
        lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
        lastRemoteStreamCreatedTimestamp: null,
        lastMessageSentTimestamp: this.lastMessageSentTimestamp,
        lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
        localFlowControlWindow: (K = this.session.state.localWindowSize) !== null && K !== void 0 ? K : null,
        remoteFlowControlWindow: (q = this.session.state.remoteWindowSize) !== null && q !== void 0 ? q : null
      };
    }
    trace(A) {
      NjA.trace(fFA.LogVerbosity.DEBUG, WC6, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A);
    }
    keepaliveTrace(A) {
      NjA.trace(fFA.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A);
    }
    flowControlTrace(A) {
      NjA.trace(fFA.LogVerbosity.DEBUG, kz2, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A);
    }
    internalsTrace(A) {
      NjA.trace(fFA.LogVerbosity.DEBUG, "transport_internals", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + A);
    }
    reportDisconnectToOwner(A) {
      if (this.disconnectHandled) return;
      this.disconnectHandled = !0, this.disconnectListeners.forEach(K => K(A));
    }
    handleDisconnect() {
      this.clearKeepaliveTimeout(), this.reportDisconnectToOwner(!1);
      for (let A of this.activeCalls) A.onDisconnect();
      setImmediate(() => {
        this.session.destroy();
      });
    }
    addDisconnectListener(A) {
      this.disconnectListeners.push(A);
    }
    canSendPing() {
      return !this.session.destroyed && this.keepaliveTimeMs > 0 && (this.keepaliveWithoutCalls || this.activeCalls.size > 0);
    }
    maybeSendPing() {
      var A, K;
      if (!this.canSendPing()) {
        this.pendingSendKeepalivePing = !0;
        return;
      }
      if (this.keepaliveTimer) {
        console.error("keepaliveTimeout is not null");
        return;
      }
      if (this.channelzEnabled) this.keepalivesSent += 1;
      this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms"), this.keepaliveTimer = setTimeout(() => {
        this.keepaliveTimer = null, this.keepaliveTrace("Ping timeout passed without response"), this.handleDisconnect();
      }, this.keepaliveTimeoutMs), (K = (A = this.keepaliveTimer).unref) === null || K === void 0 || K.call(A);
      let q = "";
      try {
        if (!this.session.ping((z, w, H) => {
          if (this.clearKeepaliveTimeout(), z) this.keepaliveTrace("Ping failed with error " + z.message), this.handleDisconnect();else this.keepaliveTrace("Received ping response"), this.maybeStartKeepalivePingTimer();
        })) q = "Ping returned false";
      } catch (Y) {
        q = (Y instanceof Error ? Y.message : "") || "Unknown error";
      }
      if (q) this.keepaliveTrace("Ping send failed: " + q), this.handleDisconnect();
    }
    maybeStartKeepalivePingTimer() {
      var A, K;
      if (!this.canSendPing()) return;
      if (this.pendingSendKeepalivePing) this.pendingSendKeepalivePing = !1, this.maybeSendPing();else if (!this.keepaliveTimer) this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), this.keepaliveTimer = setTimeout(() => {
        this.keepaliveTimer = null, this.maybeSendPing();
      }, this.keepaliveTimeMs), (K = (A = this.keepaliveTimer).unref) === null || K === void 0 || K.call(A);
    }
    clearKeepaliveTimeout() {
      if (this.keepaliveTimer) clearTimeout(this.keepaliveTimer), this.keepaliveTimer = null;
    }
    removeActiveCall(A) {
      if (this.activeCalls.delete(A), this.activeCalls.size === 0) this.session.unref();
    }
    addActiveCall(A) {
      if (this.activeCalls.add(A), this.activeCalls.size === 1) {
        if (this.session.ref(), !this.keepaliveWithoutCalls) this.maybeStartKeepalivePingTimer();
      }
    }
    createCall(A, K, q, Y, z) {
      let w = A.toHttp2Headers();
      w[Lz2] = K, w[hz2] = this.userAgent, w[Rz2] = "application/grpc", w[yz2] = "POST", w[Iz2] = q, w[Sz2] = "trailers";
      let H;
      try {
        H = this.session.request(w);
      } catch (X) {
        throw this.handleDisconnect(), X;
      }
      this.flowControlTrace("local window size: " + this.session.state.localWindowSize + " remote window size: " + this.session.state.remoteWindowSize), this.internalsTrace("session.closed=" + this.session.closed + " session.destroyed=" + this.session.destroyed + " session.socket.destroyed=" + this.session.socket.destroyed);
      let J, O;
      if (this.channelzEnabled) this.streamTracker.addCallStarted(), J = {
        addMessageSent: () => {
          var X;
          this.messagesSent += 1, this.lastMessageSentTimestamp = new Date(), (X = z.addMessageSent) === null || X === void 0 || X.call(z);
        },
        addMessageReceived: () => {
          var X;
          this.messagesReceived += 1, this.lastMessageReceivedTimestamp = new Date(), (X = z.addMessageReceived) === null || X === void 0 || X.call(z);
        },
        onCallEnd: X => {
          var $;
          ($ = z.onCallEnd) === null || $ === void 0 || $.call(z, X), this.removeActiveCall(O);
        },
        onStreamEnd: X => {
          var $;
          if (X) this.streamTracker.addCallSucceeded();else this.streamTracker.addCallFailed();
          ($ = z.onStreamEnd) === null || $ === void 0 || $.call(z, X);
        }
      };else J = {
        addMessageSent: () => {
          var X;
          (X = z.addMessageSent) === null || X === void 0 || X.call(z);
        },
        addMessageReceived: () => {
          var X;
          (X = z.addMessageReceived) === null || X === void 0 || X.call(z);
        },
        onCallEnd: X => {
          var $;
          ($ = z.onCallEnd) === null || $ === void 0 || $.call(z, X), this.removeActiveCall(O);
        },
        onStreamEnd: X => {
          var $;
          ($ = z.onStreamEnd) === null || $ === void 0 || $.call(z, X);
        }
      };
      return O = new vz2.Http2SubchannelCall(H, J, Y, this, (0, Ez2.getNextCallNumber)()), this.addActiveCall(O), O;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    getPeerName() {
      return this.subchannelAddressString;
    }
    getOptions() {
      return this.options;
    }
    getAuthContext() {
      return this.authContext;
    }
    shutdown() {
      this.session.close(), (0, Pj1.unregisterChannelzRef)(this.channelzRef);
    }
  }
  class dl7 {
    constructor(A) {
      this.channelTarget = A, this.session = null, this.isShutdown = !1;
    }
    trace(A) {
      NjA.trace(fFA.LogVerbosity.DEBUG, WC6, (0, ZC6.uriToString)(this.channelTarget) + " " + A);
    }
    createSession(A, K, q) {
      if (this.isShutdown) return Promise.reject();
      if (A.socket.closed) return Promise.reject("Connection closed before starting HTTP/2 handshake");
      return new Promise((Y, z) => {
        var w, H, J, O, X, $, _;
        let G = null,
          Z = this.channelTarget;
        if ("grpc.http_connect_target" in q) {
          let x = (0, ZC6.parseUri)(q["grpc.http_connect_target"]);
          if (x) Z = x, G = (0, ZC6.uriToString)(x);
        }
        let W = A.secure ? "https" : "http",
          D = (0, Nz2.getDefaultAuthority)(Z),
          j = () => {
            var x;
            (x = this.session) === null || x === void 0 || x.destroy(), this.session = null, setImmediate(() => {
              if (!R) R = !0, z(`${C.trim()} (${new Date().toISOString()})`);
            });
          },
          M = x => {
            var y;
            if ((y = this.session) === null || y === void 0 || y.destroy(), C = x.message, this.trace("connection failed with error " + C), !R) R = !0, z(`${C} (${new Date().toISOString()})`);
          },
          P = {
            createConnection: (x, y) => {
              return A.socket;
            },
            settings: {
              initialWindowSize: (O = (w = q["grpc-node.flow_control_window"]) !== null && w !== void 0 ? w : (J = (H = K3A.getDefaultSettings) === null || H === void 0 ? void 0 : H.call(K3A)) === null || J === void 0 ? void 0 : J.initialWindowSize) !== null && O !== void 0 ? O : 65535
            }
          },
          f = K3A.connect(`${W}://${D}`, P),
          N = (_ = ($ = (X = K3A.getDefaultSettings) === null || X === void 0 ? void 0 : X.call(K3A)) === null || $ === void 0 ? void 0 : $.initialWindowSize) !== null && _ !== void 0 ? _ : 65535,
          T = q["grpc-node.flow_control_window"];
        this.session = f;
        let C = "Failed to connect",
          R = !1;
        f.unref(), f.once("remoteSettings", () => {
          var x;
          if (T && T > N) try {
            f.setLocalWindowSize(T);
          } catch (y) {
            let B = T - ((x = f.state.localWindowSize) !== null && x !== void 0 ? x : N);
            if (B > 0) f.incrementWindowSize(B);
          }
          f.removeAllListeners(), A.socket.removeListener("close", j), A.socket.removeListener("error", M), Y(new pl7(f, K, q, G)), this.session = null;
        }), f.once("close", j), f.once("error", M), A.socket.once("close", j), A.socket.once("error", M);
      });
    }
    tcpConnect(A, K) {
      return (0, fz2.getProxiedConnection)(A, K).then(q => {
        if (q) return q;else return new Promise((Y, z) => {
          let w = () => {
              z(Error("Socket closed"));
            },
            H = O => {
              z(O);
            },
            J = Tz2.connect(A, () => {
              J.removeListener("close", w), J.removeListener("error", H), Y(J);
            });
          J.once("close", w), J.once("error", H);
        });
      });
    }
    async connect(A, K, q) {
      if (this.isShutdown) return Promise.reject();
      let Y = null,
        z = null,
        w = (0, Vj1.subchannelAddressToString)(A);
      try {
        return this.trace(w + " Waiting for secureConnector to be ready"), await K.waitForReady(), this.trace(w + " secureConnector is ready"), Y = await this.tcpConnect(A, q), Y.setNoDelay(), this.trace(w + " Established TCP connection"), z = await K.connect(Y), this.trace(w + " Established secure connection"), this.createSession(z, A, q);
      } catch (H) {
        throw Y === null || Y === void 0 || Y.destroy(), z === null || z === void 0 || z.socket.destroy(), H;
      }
    }
    shutdown() {
      var A;
      this.isShutdown = !0, (A = this.session) === null || A === void 0 || A.close(), this.session = null;
    }
  }
  cl7.Http2SubchannelConnector = dl7;
});

// Register to shared state
__$.il7 = il7;
