// Module: Pn7
// Dependencies: K9, xi7, Lj1, jS, Lw, mf, zP, Gt, bC6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pn7 = v(jt => {
  var VH2 = jt && jt.__runInitializers || function (A, K, q) {
      var Y = arguments.length > 2;
      for (var z = 0; z < K.length; z++) q = Y ? K[z].call(A, q) : K[z].call(A);
      return Y ? q : void 0;
    },
    fH2 = jt && jt.__esDecorate || function (A, K, q, Y, z, w) {
      function H(M) {
        if (M !== void 0 && typeof M !== "function") throw TypeError("Function expected");
        return M;
      }
      var J = Y.kind,
        O = J === "getter" ? "get" : J === "setter" ? "set" : "value",
        X = !K && A ? Y.static ? A : A.prototype : null,
        $ = K || (X ? Object.getOwnPropertyDescriptor(X, Y.name) : {}),
        _,
        G = !1;
      for (var Z = q.length - 1; Z >= 0; Z--) {
        var W = {};
        for (var D in Y) W[D] = D === "access" ? {} : Y[D];
        for (var D in Y.access) W.access[D] = Y.access[D];
        W.addInitializer = function (M) {
          if (G) throw TypeError("Cannot add initializers after decoration has completed");
          w.push(H(M || null));
        };
        var j = (0, q[Z])(J === "accessor" ? {
          get: $.get,
          set: $.set
        } : $[O], W);
        if (J === "accessor") {
          if (j === void 0) continue;
          if (j === null || typeof j !== "object") throw TypeError("Object expected");
          if (_ = H(j.get)) $.get = _;
          if (_ = H(j.set)) $.set = _;
          if (_ = H(j.init)) z.unshift(_);
        } else if (_ = H(j)) if (J === "field") z.unshift(_);else $[O] = _;
      }
      if (X) Object.defineProperty(X, Y.name, $);
      G = !0;
    };
  Object.defineProperty(jt, "__esModule", {
    value: !0
  });
  jt.Server = void 0;
  var Ff = CA("http2"),
    NH2 = CA("util"),
    GX = __$.K9(),
    CjA = __$.xi7(),
    xC6 = __$.Lj1(),
    Gn7 = __$.jS(),
    kjA = __$.Lw(),
    Dt = __$.mf(),
    TS = __$.zP(),
    j_ = __$.Gt(),
    Zn7 = __$.bC6(),
    EjA = 2147483647,
    uC6 = 2147483647,
    TH2 = 20000,
    Wn7 = 2147483647,
    {
      HTTP2_HEADER_PATH: Dn7
    } = Ff.constants,
    vH2 = "server",
    jn7 = Buffer.from("max_age");
  function Mn7(A) {
    kjA.trace(GX.LogVerbosity.DEBUG, "server_call", A);
  }
  function EH2() {}
  function kH2(A) {
    return function (K, q) {
      return NH2.deprecate(K, A);
    };
  }
  function BC6(A) {
    return {
      code: GX.Status.UNIMPLEMENTED,
      details: `The server does not implement the method ${A}`
    };
  }
  function CH2(A, K) {
    let q = BC6(K);
    switch (A) {
      case "unary":
        return (Y, z) => {
          z(q, null);
        };
      case "clientStream":
        return (Y, z) => {
          z(q, null);
        };
      case "serverStream":
        return Y => {
          Y.emit("error", q);
        };
      case "bidi":
        return Y => {
          Y.emit("error", q);
        };
      default:
        throw Error(`Invalid handlerType ${A}`);
    }
  }
  var LH2 = (() => {
    var A;
    let K = [],
      q;
    return A = class {
      constructor(z) {
        var w, H, J, O, X, $;
        if (this.boundPorts = (VH2(this, K), new Map()), this.http2Servers = new Map(), this.sessionIdleTimeouts = new Map(), this.handlers = new Map(), this.sessions = new Map(), this.started = !1, this.shutdown = !1, this.serverAddressString = "null", this.channelzEnabled = !0, this.options = z !== null && z !== void 0 ? z : {}, this.options["grpc.enable_channelz"] === 0) this.channelzEnabled = !1, this.channelzTrace = new j_.ChannelzTraceStub(), this.callTracker = new j_.ChannelzCallTrackerStub(), this.listenerChildrenTracker = new j_.ChannelzChildrenTrackerStub(), this.sessionChildrenTracker = new j_.ChannelzChildrenTrackerStub();else this.channelzTrace = new j_.ChannelzTrace(), this.callTracker = new j_.ChannelzCallTracker(), this.listenerChildrenTracker = new j_.ChannelzChildrenTracker(), this.sessionChildrenTracker = new j_.ChannelzChildrenTracker();
        if (this.channelzRef = (0, j_.registerChannelzServer)("server", () => this.getChannelzInfo(), this.channelzEnabled), this.channelzTrace.addTrace("CT_INFO", "Server created"), this.maxConnectionAgeMs = (w = this.options["grpc.max_connection_age_ms"]) !== null && w !== void 0 ? w : EjA, this.maxConnectionAgeGraceMs = (H = this.options["grpc.max_connection_age_grace_ms"]) !== null && H !== void 0 ? H : EjA, this.keepaliveTimeMs = (J = this.options["grpc.keepalive_time_ms"]) !== null && J !== void 0 ? J : uC6, this.keepaliveTimeoutMs = (O = this.options["grpc.keepalive_timeout_ms"]) !== null && O !== void 0 ? O : TH2, this.sessionIdleTimeout = (X = this.options["grpc.max_connection_idle_ms"]) !== null && X !== void 0 ? X : Wn7, this.commonServerOptions = {
          maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER
        }, "grpc-node.max_session_memory" in this.options) this.commonServerOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];else this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
        if ("grpc.max_concurrent_streams" in this.options) this.commonServerOptions.settings = {
          maxConcurrentStreams: this.options["grpc.max_concurrent_streams"]
        };
        this.interceptors = ($ = this.options.interceptors) !== null && $ !== void 0 ? $ : [], this.trace("Server constructed");
      }
      getChannelzInfo() {
        return {
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          listenerChildren: this.listenerChildrenTracker.getChildLists(),
          sessionChildren: this.sessionChildrenTracker.getChildLists()
        };
      }
      getChannelzSessionInfo(z) {
        var w, H, J;
        let O = this.sessions.get(z),
          X = z.socket,
          $ = X.remoteAddress ? (0, Dt.stringToSubchannelAddress)(X.remoteAddress, X.remotePort) : null,
          _ = X.localAddress ? (0, Dt.stringToSubchannelAddress)(X.localAddress, X.localPort) : null,
          G;
        if (z.encrypted) {
          let W = X,
            D = W.getCipher(),
            j = W.getCertificate(),
            M = W.getPeerCertificate();
          G = {
            cipherSuiteStandardName: (w = D.standardName) !== null && w !== void 0 ? w : null,
            cipherSuiteOtherName: D.standardName ? null : D.name,
            localCertificate: j && "raw" in j ? j.raw : null,
            remoteCertificate: M && "raw" in M ? M.raw : null
          };
        } else G = null;
        return {
          remoteAddress: $,
          localAddress: _,
          security: G,
          remoteName: null,
          streamsStarted: O.streamTracker.callsStarted,
          streamsSucceeded: O.streamTracker.callsSucceeded,
          streamsFailed: O.streamTracker.callsFailed,
          messagesSent: O.messagesSent,
          messagesReceived: O.messagesReceived,
          keepAlivesSent: O.keepAlivesSent,
          lastLocalStreamCreatedTimestamp: null,
          lastRemoteStreamCreatedTimestamp: O.streamTracker.lastCallStartedTimestamp,
          lastMessageSentTimestamp: O.lastMessageSentTimestamp,
          lastMessageReceivedTimestamp: O.lastMessageReceivedTimestamp,
          localFlowControlWindow: (H = z.state.localWindowSize) !== null && H !== void 0 ? H : null,
          remoteFlowControlWindow: (J = z.state.remoteWindowSize) !== null && J !== void 0 ? J : null
        };
      }
      trace(z) {
        kjA.trace(GX.LogVerbosity.DEBUG, vH2, "(" + this.channelzRef.id + ") " + z);
      }
      keepaliveTrace(z) {
        kjA.trace(GX.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + z);
      }
      addProtoService() {
        throw Error("Not implemented. Use addService() instead");
      }
      addService(z, w) {
        if (z === null || typeof z !== "object" || w === null || typeof w !== "object") throw Error("addService() requires two objects as arguments");
        let H = Object.keys(z);
        if (H.length === 0) throw Error("Cannot add an empty service to a server");
        H.forEach(J => {
          let O = z[J],
            X;
          if (O.requestStream) {
            if (O.responseStream) X = "bidi";else X = "clientStream";
          } else if (O.responseStream) X = "serverStream";else X = "unary";
          let $ = w[J],
            _;
          if ($ === void 0 && typeof O.originalName === "string") $ = w[O.originalName];
          if ($ !== void 0) _ = $.bind(w);else _ = CH2(X, J);
          if (this.register(O.path, _, O.responseSerialize, O.requestDeserialize, X) === !1) throw Error(`Method handler for ${O.path} already provided.`);
        });
      }
      removeService(z) {
        if (z === null || typeof z !== "object") throw Error("removeService() requires object as argument");
        Object.keys(z).forEach(H => {
          let J = z[H];
          this.unregister(J.path);
        });
      }
      bind(z, w) {
        throw Error("Not implemented. Use bindAsync() instead");
      }
      experimentalRegisterListenerToChannelz(z) {
        return (0, j_.registerChannelzSocket)((0, Dt.subchannelAddressToString)(z), () => {
          return {
            localAddress: z,
            remoteAddress: null,
            security: null,
            remoteName: null,
            streamsStarted: 0,
            streamsSucceeded: 0,
            streamsFailed: 0,
            messagesSent: 0,
            messagesReceived: 0,
            keepAlivesSent: 0,
            lastLocalStreamCreatedTimestamp: null,
            lastRemoteStreamCreatedTimestamp: null,
            lastMessageSentTimestamp: null,
            lastMessageReceivedTimestamp: null,
            localFlowControlWindow: null,
            remoteFlowControlWindow: null
          };
        }, this.channelzEnabled);
      }
      experimentalUnregisterListenerFromChannelz(z) {
        (0, j_.unregisterChannelzRef)(z);
      }
      createHttp2Server(z) {
        let w;
        if (z._isSecure()) {
          let H = z._getConstructorOptions(),
            J = z._getSecureContextOptions(),
            O = Object.assign(Object.assign(Object.assign(Object.assign({}, this.commonServerOptions), H), J), {
              enableTrace: this.options["grpc-node.tls_enable_trace"] === 1
            }),
            X = J !== null;
          this.trace("Initial credentials valid: " + X), w = Ff.createSecureServer(O), w.prependListener("connection", _ => {
            if (!X) this.trace("Dropped connection from " + JSON.stringify(_.address()) + " due to unloaded credentials"), _.destroy();
          }), w.on("secureConnection", _ => {
            _.on("error", G => {
              this.trace("An incoming TLS connection closed with error: " + G.message);
            });
          });
          let $ = _ => {
            if (_) {
              let G = w;
              try {
                G.setSecureContext(_);
              } catch (Z) {
                kjA.log(GX.LogVerbosity.ERROR, "Failed to set secure context with error " + Z.message), _ = null;
              }
            }
            X = _ !== null, this.trace("Post-update credentials valid: " + X);
          };
          z._addWatcher($), w.on("close", () => {
            z._removeWatcher($);
          });
        } else w = Ff.createServer(this.commonServerOptions);
        return w.setTimeout(0, EH2), this._setupHandlers(w, z._getInterceptors()), w;
      }
      bindOneAddress(z, w) {
        this.trace("Attempting to bind " + (0, Dt.subchannelAddressToString)(z));
        let H = this.createHttp2Server(w.credentials);
        return new Promise((J, O) => {
          let X = $ => {
            this.trace("Failed to bind " + (0, Dt.subchannelAddressToString)(z) + " with error " + $.message), J({
              port: "port" in z ? z.port : 1,
              error: $.message
            });
          };
          H.once("error", X), H.listen(z, () => {
            let $ = H.address(),
              _;
            if (typeof $ === "string") _ = {
              path: $
            };else _ = {
              host: $.address,
              port: $.port
            };
            let G = this.experimentalRegisterListenerToChannelz(_);
            this.listenerChildrenTracker.refChild(G), this.http2Servers.set(H, {
              channelzRef: G,
              sessions: new Set(),
              ownsChannelzRef: !0
            }), w.listeningServers.add(H), this.trace("Successfully bound " + (0, Dt.subchannelAddressToString)(_)), J({
              port: "port" in _ ? _.port : 1
            }), H.removeListener("error", X);
          });
        });
      }
      async bindManyPorts(z, w) {
        if (z.length === 0) return {
          count: 0,
          port: 0,
          errors: []
        };
        if ((0, Dt.isTcpSubchannelAddress)(z[0]) && z[0].port === 0) {
          let H = await this.bindOneAddress(z[0], w);
          if (H.error) {
            let J = await this.bindManyPorts(z.slice(1), w);
            return Object.assign(Object.assign({}, J), {
              errors: [H.error, ...J.errors]
            });
          } else {
            let J = z.slice(1).map($ => (0, Dt.isTcpSubchannelAddress)($) ? {
                host: $.host,
                port: H.port
              } : $),
              O = await Promise.all(J.map($ => this.bindOneAddress($, w))),
              X = [H, ...O];
            return {
              count: X.filter($ => $.error === void 0).length,
              port: H.port,
              errors: X.filter($ => $.error).map($ => $.error)
            };
          }
        } else {
          let H = await Promise.all(z.map(J => this.bindOneAddress(J, w)));
          return {
            count: H.filter(J => J.error === void 0).length,
            port: H[0].port,
            errors: H.filter(J => J.error).map(J => J.error)
          };
        }
      }
      async bindAddressList(z, w) {
        let H = await this.bindManyPorts(z, w);
        if (H.count > 0) {
          if (H.count < z.length) kjA.log(GX.LogVerbosity.INFO, `WARNING Only ${H.count} addresses added out of total ${z.length} resolved`);
          return H.port;
        } else {
          let J = `No address added out of total ${z.length} resolved`;
          throw kjA.log(GX.LogVerbosity.ERROR, J), Error(`${J} errors: [${H.errors.join(",")}]`);
        }
      }
      resolvePort(z) {
        return new Promise((w, H) => {
          let J = !1,
            O = ($, _, G, Z) => {
              if (J) return !0;
              if (J = !0, !$.ok) return H(Error($.error.details)), !0;
              let W = [].concat(...$.value.map(D => D.addresses));
              if (W.length === 0) return H(Error(`No addresses resolved for port ${z}`)), !0;
              return w(W), !0;
            };
          (0, Gn7.createResolver)(z, O, this.options).updateResolution();
        });
      }
      async bindPort(z, w) {
        let H = await this.resolvePort(z);
        if (w.cancelled) throw this.completeUnbind(w), Error("bindAsync operation cancelled by unbind call");
        let J = await this.bindAddressList(H, w);
        if (w.cancelled) throw this.completeUnbind(w), Error("bindAsync operation cancelled by unbind call");
        return J;
      }
      normalizePort(z) {
        let w = (0, TS.parseUri)(z);
        if (w === null) throw Error(`Could not parse port "${z}"`);
        let H = (0, Gn7.mapUriDefaultScheme)(w);
        if (H === null) throw Error(`Could not get a default scheme for port "${z}"`);
        return H;
      }
      bindAsync(z, w, H) {
        if (this.shutdown) throw Error("bindAsync called after shutdown");
        if (typeof z !== "string") throw TypeError("port must be a string");
        if (w === null || !(w instanceof xC6.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
        if (typeof H !== "function") throw TypeError("callback must be a function");
        this.trace("bindAsync port=" + z);
        let J = this.normalizePort(z),
          O = (G, Z) => {
            process.nextTick(() => H(G, Z));
          },
          X = this.boundPorts.get((0, TS.uriToString)(J));
        if (X) {
          if (!w._equals(X.credentials)) {
            O(Error(`${z} already bound with incompatible credentials`), 0);
            return;
          }
          if (X.cancelled = !1, X.completionPromise) X.completionPromise.then(G => H(null, G), G => H(G, 0));else O(null, X.portNumber);
          return;
        }
        X = {
          mapKey: (0, TS.uriToString)(J),
          originalUri: J,
          completionPromise: null,
          cancelled: !1,
          portNumber: 0,
          credentials: w,
          listeningServers: new Set()
        };
        let $ = (0, TS.splitHostPort)(J.path),
          _ = this.bindPort(J, X);
        if (X.completionPromise = _, ($ === null || $ === void 0 ? void 0 : $.port) === 0) _.then(G => {
          let Z = {
            scheme: J.scheme,
            authority: J.authority,
            path: (0, TS.combineHostPort)({
              host: $.host,
              port: G
            })
          };
          X.mapKey = (0, TS.uriToString)(Z), X.completionPromise = null, X.portNumber = G, this.boundPorts.set(X.mapKey, X), H(null, G);
        }, G => {
          H(G, 0);
        });else this.boundPorts.set(X.mapKey, X), _.then(G => {
          X.completionPromise = null, X.portNumber = G, H(null, G);
        }, G => {
          H(G, 0);
        });
      }
      registerInjectorToChannelz() {
        return (0, j_.registerChannelzSocket)("injector", () => {
          return {
            localAddress: null,
            remoteAddress: null,
            security: null,
            remoteName: null,
            streamsStarted: 0,
            streamsSucceeded: 0,
            streamsFailed: 0,
            messagesSent: 0,
            messagesReceived: 0,
            keepAlivesSent: 0,
            lastLocalStreamCreatedTimestamp: null,
            lastRemoteStreamCreatedTimestamp: null,
            lastMessageSentTimestamp: null,
            lastMessageReceivedTimestamp: null,
            localFlowControlWindow: null,
            remoteFlowControlWindow: null
          };
        }, this.channelzEnabled);
      }
      experimentalCreateConnectionInjectorWithChannelzRef(z, w, H = !1) {
        if (z === null || !(z instanceof xC6.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
        if (this.channelzEnabled) this.listenerChildrenTracker.refChild(w);
        let J = this.createHttp2Server(z),
          O = new Set();
        return this.http2Servers.set(J, {
          channelzRef: w,
          sessions: O,
          ownsChannelzRef: H
        }), {
          injectConnection: X => {
            J.emit("connection", X);
          },
          drain: X => {
            var $, _;
            for (let G of O) this.closeSession(G);
            (_ = ($ = setTimeout(() => {
              for (let G of O) G.destroy(Ff.constants.NGHTTP2_CANCEL);
            }, X)).unref) === null || _ === void 0 || _.call($);
          },
          destroy: () => {
            this.closeServer(J);
            for (let X of O) this.closeSession(X);
          }
        };
      }
      createConnectionInjector(z) {
        if (z === null || !(z instanceof xC6.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
        let w = this.registerInjectorToChannelz();
        return this.experimentalCreateConnectionInjectorWithChannelzRef(z, w, !0);
      }
      closeServer(z, w) {
        this.trace("Closing server with address " + JSON.stringify(z.address()));
        let H = this.http2Servers.get(z);
        z.close(() => {
          if (H && H.ownsChannelzRef) this.listenerChildrenTracker.unrefChild(H.channelzRef), (0, j_.unregisterChannelzRef)(H.channelzRef);
          this.http2Servers.delete(z), w === null || w === void 0 || w();
        });
      }
      closeSession(z, w) {
        var H;
        this.trace("Closing session initiated by " + ((H = z.socket) === null || H === void 0 ? void 0 : H.remoteAddress));
        let J = this.sessions.get(z),
          O = () => {
            if (J) this.sessionChildrenTracker.unrefChild(J.ref), (0, j_.unregisterChannelzRef)(J.ref);
            w === null || w === void 0 || w();
          };
        if (z.closed) queueMicrotask(O);else z.close(O);
      }
      completeUnbind(z) {
        for (let w of z.listeningServers) {
          let H = this.http2Servers.get(w);
          if (this.closeServer(w, () => {
            z.listeningServers.delete(w);
          }), H) for (let J of H.sessions) this.closeSession(J);
        }
        this.boundPorts.delete(z.mapKey);
      }
      unbind(z) {
        this.trace("unbind port=" + z);
        let w = this.normalizePort(z),
          H = (0, TS.splitHostPort)(w.path);
        if ((H === null || H === void 0 ? void 0 : H.port) === 0) throw Error("Cannot unbind port 0");
        let J = this.boundPorts.get((0, TS.uriToString)(w));
        if (J) if (this.trace("unbinding " + J.mapKey + " originally bound as " + (0, TS.uriToString)(J.originalUri)), J.completionPromise) J.cancelled = !0;else this.completeUnbind(J);
      }
      drain(z, w) {
        var H, J;
        this.trace("drain port=" + z + " graceTimeMs=" + w);
        let O = this.normalizePort(z),
          X = (0, TS.splitHostPort)(O.path);
        if ((X === null || X === void 0 ? void 0 : X.port) === 0) throw Error("Cannot drain port 0");
        let $ = this.boundPorts.get((0, TS.uriToString)(O));
        if (!$) return;
        let _ = new Set();
        for (let G of $.listeningServers) {
          let Z = this.http2Servers.get(G);
          if (Z) for (let W of Z.sessions) _.add(W), this.closeSession(W, () => {
            _.delete(W);
          });
        }
        (J = (H = setTimeout(() => {
          for (let G of _) G.destroy(Ff.constants.NGHTTP2_CANCEL);
        }, w)).unref) === null || J === void 0 || J.call(H);
      }
      forceShutdown() {
        for (let z of this.boundPorts.values()) z.cancelled = !0;
        this.boundPorts.clear();
        for (let z of this.http2Servers.keys()) this.closeServer(z);
        this.sessions.forEach((z, w) => {
          this.closeSession(w), w.destroy(Ff.constants.NGHTTP2_CANCEL);
        }), this.sessions.clear(), (0, j_.unregisterChannelzRef)(this.channelzRef), this.shutdown = !0;
      }
      register(z, w, H, J, O) {
        if (this.handlers.has(z)) return !1;
        return this.handlers.set(z, {
          func: w,
          serialize: H,
          deserialize: J,
          type: O,
          path: z
        }), !0;
      }
      unregister(z) {
        return this.handlers.delete(z);
      }
      start() {
        if (this.http2Servers.size === 0 || [...this.http2Servers.keys()].every(z => !z.listening)) throw Error("server must be bound in order to start");
        if (this.started === !0) throw Error("server is already started");
        this.started = !0;
      }
      tryShutdown(z) {
        var w;
        let H = X => {
            (0, j_.unregisterChannelzRef)(this.channelzRef), z(X);
          },
          J = 0;
        function O() {
          if (J--, J === 0) H();
        }
        this.shutdown = !0;
        for (let [X, $] of this.http2Servers.entries()) {
          J++;
          let _ = $.channelzRef.name;
          this.trace("Waiting for server " + _ + " to close"), this.closeServer(X, () => {
            this.trace("Server " + _ + " finished closing"), O();
          });
          for (let G of $.sessions.keys()) {
            J++;
            let Z = (w = G.socket) === null || w === void 0 ? void 0 : w.remoteAddress;
            this.trace("Waiting for session " + Z + " to close"), this.closeSession(G, () => {
              this.trace("Session " + Z + " finished closing"), O();
            });
          }
        }
        if (J === 0) H();
      }
      addHttp2Port() {
        throw Error("Not yet implemented");
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      _verifyContentType(z, w) {
        let H = w[Ff.constants.HTTP2_HEADER_CONTENT_TYPE];
        if (typeof H !== "string" || !H.startsWith("application/grpc")) return z.respond({
          [Ff.constants.HTTP2_HEADER_STATUS]: Ff.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
        }, {
          endStream: !0
        }), !1;
        return !0;
      }
      _retrieveHandler(z) {
        Mn7("Received call to method " + z + " at address " + this.serverAddressString);
        let w = this.handlers.get(z);
        if (w === void 0) return Mn7("No handler registered for method " + z + ". Sending UNIMPLEMENTED status."), null;
        return w;
      }
      _respondWithError(z, w, H = null) {
        var J, O;
        let X = Object.assign({
          "grpc-status": (J = z.code) !== null && J !== void 0 ? J : GX.Status.INTERNAL,
          "grpc-message": z.details,
          [Ff.constants.HTTP2_HEADER_STATUS]: Ff.constants.HTTP_STATUS_OK,
          [Ff.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
        }, (O = z.metadata) === null || O === void 0 ? void 0 : O.toHttp2Headers());
        w.respond(X, {
          endStream: !0
        }), this.callTracker.addCallFailed(), H === null || H === void 0 || H.streamTracker.addCallFailed();
      }
      _channelzHandler(z, w, H) {
        this.onStreamOpened(w);
        let J = this.sessions.get(w.session);
        if (this.callTracker.addCallStarted(), J === null || J === void 0 || J.streamTracker.addCallStarted(), !this._verifyContentType(w, H)) {
          this.callTracker.addCallFailed(), J === null || J === void 0 || J.streamTracker.addCallFailed();
          return;
        }
        let O = H[Dn7],
          X = this._retrieveHandler(O);
        if (!X) {
          this._respondWithError(BC6(O), w, J);
          return;
        }
        let $ = {
            addMessageSent: () => {
              if (J) J.messagesSent += 1, J.lastMessageSentTimestamp = new Date();
            },
            addMessageReceived: () => {
              if (J) J.messagesReceived += 1, J.lastMessageReceivedTimestamp = new Date();
            },
            onCallEnd: G => {
              if (G.code === GX.Status.OK) this.callTracker.addCallSucceeded();else this.callTracker.addCallFailed();
            },
            onStreamEnd: G => {
              if (J) if (G) J.streamTracker.addCallSucceeded();else J.streamTracker.addCallFailed();
            }
          },
          _ = (0, Zn7.getServerInterceptingCall)([...z, ...this.interceptors], w, H, $, X, this.options);
        if (!this._runHandlerForCall(_, X)) this.callTracker.addCallFailed(), J === null || J === void 0 || J.streamTracker.addCallFailed(), _.sendStatus({
          code: GX.Status.INTERNAL,
          details: `Unknown handler type: ${X.type}`
        });
      }
      _streamHandler(z, w, H) {
        if (this.onStreamOpened(w), this._verifyContentType(w, H) !== !0) return;
        let J = H[Dn7],
          O = this._retrieveHandler(J);
        if (!O) {
          this._respondWithError(BC6(J), w, null);
          return;
        }
        let X = (0, Zn7.getServerInterceptingCall)([...z, ...this.interceptors], w, H, null, O, this.options);
        if (!this._runHandlerForCall(X, O)) X.sendStatus({
          code: GX.Status.INTERNAL,
          details: `Unknown handler type: ${O.type}`
        });
      }
      _runHandlerForCall(z, w) {
        let {
          type: H
        } = w;
        if (H === "unary") RH2(z, w);else if (H === "clientStream") yH2(z, w);else if (H === "serverStream") IH2(z, w);else if (H === "bidi") SH2(z, w);else return !1;
        return !0;
      }
      _setupHandlers(z, w) {
        if (z === null) return;
        let H = z.address(),
          J = "null";
        if (H) if (typeof H === "string") J = H;else J = H.address + ":" + H.port;
        this.serverAddressString = J;
        let O = this.channelzEnabled ? this._channelzHandler : this._streamHandler,
          X = this.channelzEnabled ? this._channelzSessionHandler(z) : this._sessionHandler(z);
        z.on("stream", O.bind(this, w)), z.on("session", X);
      }
      _sessionHandler(z) {
        return w => {
          var H, J;
          (H = this.http2Servers.get(z)) === null || H === void 0 || H.sessions.add(w);
          let O = null,
            X = null,
            $ = null,
            _ = !1,
            G = this.enableIdleTimeout(w);
          if (this.maxConnectionAgeMs !== EjA) {
            let M = this.maxConnectionAgeMs / 10,
              P = Math.random() * M * 2 - M;
            O = setTimeout(() => {
              var f, N;
              _ = !0, this.trace("Connection dropped by max connection age: " + ((f = w.socket) === null || f === void 0 ? void 0 : f.remoteAddress));
              try {
                w.goaway(Ff.constants.NGHTTP2_NO_ERROR, 2147483647, jn7);
              } catch (T) {
                w.destroy();
                return;
              }
              if (w.close(), this.maxConnectionAgeGraceMs !== EjA) X = setTimeout(() => {
                w.destroy();
              }, this.maxConnectionAgeGraceMs), (N = X.unref) === null || N === void 0 || N.call(X);
            }, this.maxConnectionAgeMs + P), (J = O.unref) === null || J === void 0 || J.call(O);
          }
          let Z = () => {
              if ($) clearTimeout($), $ = null;
            },
            W = () => {
              return !w.destroyed && this.keepaliveTimeMs < uC6 && this.keepaliveTimeMs > 0;
            },
            D,
            j = () => {
              var M;
              if (!W()) return;
              this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), $ = setTimeout(() => {
                Z(), D();
              }, this.keepaliveTimeMs), (M = $.unref) === null || M === void 0 || M.call($);
            };
          D = () => {
            var M;
            if (!W()) return;
            this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
            let P = "";
            try {
              if (!w.ping((N, T, C) => {
                if (Z(), N) this.keepaliveTrace("Ping failed with error: " + N.message), _ = !0, w.close();else this.keepaliveTrace("Received ping response"), j();
              })) P = "Ping returned false";
            } catch (f) {
              P = (f instanceof Error ? f.message : "") || "Unknown error";
            }
            if (P) {
              this.keepaliveTrace("Ping send failed: " + P), this.trace("Connection dropped due to ping send error: " + P), _ = !0, w.close();
              return;
            }
            $ = setTimeout(() => {
              Z(), this.keepaliveTrace("Ping timeout passed without response"), this.trace("Connection dropped by keepalive timeout"), _ = !0, w.close();
            }, this.keepaliveTimeoutMs), (M = $.unref) === null || M === void 0 || M.call($);
          }, j(), w.on("close", () => {
            var M, P;
            if (!_) this.trace(`Connection dropped by client ${(M = w.socket) === null || M === void 0 ? void 0 : M.remoteAddress}`);
            if (O) clearTimeout(O);
            if (X) clearTimeout(X);
            if (Z(), G !== null) clearTimeout(G.timeout), this.sessionIdleTimeouts.delete(w);
            (P = this.http2Servers.get(z)) === null || P === void 0 || P.sessions.delete(w);
          });
        };
      }
      _channelzSessionHandler(z) {
        return w => {
          var H, J, O, X;
          let $ = (0, j_.registerChannelzSocket)((J = (H = w.socket) === null || H === void 0 ? void 0 : H.remoteAddress) !== null && J !== void 0 ? J : "unknown", this.getChannelzSessionInfo.bind(this, w), this.channelzEnabled),
            _ = {
              ref: $,
              streamTracker: new j_.ChannelzCallTracker(),
              messagesSent: 0,
              messagesReceived: 0,
              keepAlivesSent: 0,
              lastMessageSentTimestamp: null,
              lastMessageReceivedTimestamp: null
            };
          (O = this.http2Servers.get(z)) === null || O === void 0 || O.sessions.add(w), this.sessions.set(w, _);
          let G = `${w.socket.remoteAddress}:${w.socket.remotePort}`;
          this.channelzTrace.addTrace("CT_INFO", "Connection established by client " + G), this.trace("Connection established by client " + G), this.sessionChildrenTracker.refChild($);
          let Z = null,
            W = null,
            D = null,
            j = !1,
            M = this.enableIdleTimeout(w);
          if (this.maxConnectionAgeMs !== EjA) {
            let C = this.maxConnectionAgeMs / 10,
              R = Math.random() * C * 2 - C;
            Z = setTimeout(() => {
              var x;
              j = !0, this.channelzTrace.addTrace("CT_INFO", "Connection dropped by max connection age from " + G);
              try {
                w.goaway(Ff.constants.NGHTTP2_NO_ERROR, 2147483647, jn7);
              } catch (y) {
                w.destroy();
                return;
              }
              if (w.close(), this.maxConnectionAgeGraceMs !== EjA) W = setTimeout(() => {
                w.destroy();
              }, this.maxConnectionAgeGraceMs), (x = W.unref) === null || x === void 0 || x.call(W);
            }, this.maxConnectionAgeMs + R), (X = Z.unref) === null || X === void 0 || X.call(Z);
          }
          let P = () => {
              if (D) clearTimeout(D), D = null;
            },
            f = () => {
              return !w.destroyed && this.keepaliveTimeMs < uC6 && this.keepaliveTimeMs > 0;
            },
            N,
            T = () => {
              var C;
              if (!f()) return;
              this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), D = setTimeout(() => {
                P(), N();
              }, this.keepaliveTimeMs), (C = D.unref) === null || C === void 0 || C.call(D);
            };
          N = () => {
            var C;
            if (!f()) return;
            this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
            let R = "";
            try {
              if (!w.ping((y, B, b) => {
                if (P(), y) this.keepaliveTrace("Ping failed with error: " + y.message), this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to error of a ping frame " + y.message + " return in " + B), j = !0, w.close();else this.keepaliveTrace("Received ping response"), T();
              })) R = "Ping returned false";
            } catch (x) {
              R = (x instanceof Error ? x.message : "") || "Unknown error";
            }
            if (R) {
              this.keepaliveTrace("Ping send failed: " + R), this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to ping send error: " + R), j = !0, w.close();
              return;
            }
            _.keepAlivesSent += 1, D = setTimeout(() => {
              P(), this.keepaliveTrace("Ping timeout passed without response"), this.channelzTrace.addTrace("CT_INFO", "Connection dropped by keepalive timeout from " + G), j = !0, w.close();
            }, this.keepaliveTimeoutMs), (C = D.unref) === null || C === void 0 || C.call(D);
          }, T(), w.on("close", () => {
            var C;
            if (!j) this.channelzTrace.addTrace("CT_INFO", "Connection dropped by client " + G);
            if (this.sessionChildrenTracker.unrefChild($), (0, j_.unregisterChannelzRef)($), Z) clearTimeout(Z);
            if (W) clearTimeout(W);
            if (P(), M !== null) clearTimeout(M.timeout), this.sessionIdleTimeouts.delete(w);
            (C = this.http2Servers.get(z)) === null || C === void 0 || C.sessions.delete(w), this.sessions.delete(w);
          });
        };
      }
      enableIdleTimeout(z) {
        var w, H;
        if (this.sessionIdleTimeout >= Wn7) return null;
        let J = {
          activeStreams: 0,
          lastIdle: Date.now(),
          onClose: this.onStreamClose.bind(this, z),
          timeout: setTimeout(this.onIdleTimeout, this.sessionIdleTimeout, this, z)
        };
        (H = (w = J.timeout).unref) === null || H === void 0 || H.call(w), this.sessionIdleTimeouts.set(z, J);
        let {
          socket: O
        } = z;
        return this.trace("Enable idle timeout for " + O.remoteAddress + ":" + O.remotePort), J;
      }
      onIdleTimeout(z, w) {
        let {
            socket: H
          } = w,
          J = z.sessionIdleTimeouts.get(w);
        if (J !== void 0 && J.activeStreams === 0) if (Date.now() - J.lastIdle >= z.sessionIdleTimeout) z.trace("Session idle timeout triggered for " + (H === null || H === void 0 ? void 0 : H.remoteAddress) + ":" + (H === null || H === void 0 ? void 0 : H.remotePort) + " last idle at " + J.lastIdle), z.closeSession(w);else J.timeout.refresh();
      }
      onStreamOpened(z) {
        let w = z.session,
          H = this.sessionIdleTimeouts.get(w);
        if (H) H.activeStreams += 1, z.once("close", H.onClose);
      }
      onStreamClose(z) {
        var w, H;
        let J = this.sessionIdleTimeouts.get(z);
        if (J) {
          if (J.activeStreams -= 1, J.activeStreams === 0) J.lastIdle = Date.now(), J.timeout.refresh(), this.trace("Session onStreamClose" + ((w = z.socket) === null || w === void 0 ? void 0 : w.remoteAddress) + ":" + ((H = z.socket) === null || H === void 0 ? void 0 : H.remotePort) + " at " + J.lastIdle);
        }
      }
    }, (() => {
      let Y = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
      if (q = [kH2("Calling start() is no longer necessary. It can be safely omitted.")], fH2(A, null, q, {
        kind: "method",
        name: "start",
        static: !1,
        private: !1,
        access: {
          has: z => "start" in z,
          get: z => z.start
        },
        metadata: Y
      }, null, K), Y) Object.defineProperty(A, Symbol.metadata, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Y
      });
    })(), A;
  })();
  jt.Server = LH2;
  async function RH2(A, K) {
    let q;
    function Y(H, J, O, X) {
      if (H) {
        A.sendStatus((0, CjA.serverErrorToStatus)(H, O));
        return;
      }
      A.sendMessage(J, () => {
        A.sendStatus({
          code: GX.Status.OK,
          details: "OK",
          metadata: O !== null && O !== void 0 ? O : null
        });
      });
    }
    let z,
      w = null;
    A.start({
      onReceiveMetadata(H) {
        z = H, A.startRead();
      },
      onReceiveMessage(H) {
        if (w) {
          A.sendStatus({
            code: GX.Status.UNIMPLEMENTED,
            details: `Received a second request message for server streaming method ${K.path}`,
            metadata: null
          });
          return;
        }
        w = H, A.startRead();
      },
      onReceiveHalfClose() {
        if (!w) {
          A.sendStatus({
            code: GX.Status.UNIMPLEMENTED,
            details: `Received no request message for server streaming method ${K.path}`,
            metadata: null
          });
          return;
        }
        q = new CjA.ServerWritableStreamImpl(K.path, A, z, w);
        try {
          K.func(q, Y);
        } catch (H) {
          A.sendStatus({
            code: GX.Status.UNKNOWN,
            details: `Server method handler threw error ${H.message}`,
            metadata: null
          });
        }
      },
      onCancel() {
        if (q) q.cancelled = !0, q.emit("cancelled", "cancelled");
      }
    });
  }
  function yH2(A, K) {
    let q;
    function Y(z, w, H, J) {
      if (z) {
        A.sendStatus((0, CjA.serverErrorToStatus)(z, H));
        return;
      }
      A.sendMessage(w, () => {
        A.sendStatus({
          code: GX.Status.OK,
          details: "OK",
          metadata: H !== null && H !== void 0 ? H : null
        });
      });
    }
    A.start({
      onReceiveMetadata(z) {
        q = new CjA.ServerDuplexStreamImpl(K.path, A, z);
        try {
          K.func(q, Y);
        } catch (w) {
          A.sendStatus({
            code: GX.Status.UNKNOWN,
            details: `Server method handler threw error ${w.message}`,
            metadata: null
          });
        }
      },
      onReceiveMessage(z) {
        q.push(z);
      },
      onReceiveHalfClose() {
        q.push(null);
      },
      onCancel() {
        if (q) q.cancelled = !0, q.emit("cancelled", "cancelled"), q.destroy();
      }
    });
  }
  function IH2(A, K) {
    let q,
      Y,
      z = null;
    A.start({
      onReceiveMetadata(w) {
        Y = w, A.startRead();
      },
      onReceiveMessage(w) {
        if (z) {
          A.sendStatus({
            code: GX.Status.UNIMPLEMENTED,
            details: `Received a second request message for server streaming method ${K.path}`,
            metadata: null
          });
          return;
        }
        z = w, A.startRead();
      },
      onReceiveHalfClose() {
        if (!z) {
          A.sendStatus({
            code: GX.Status.UNIMPLEMENTED,
            details: `Received no request message for server streaming method ${K.path}`,
            metadata: null
          });
          return;
        }
        q = new CjA.ServerWritableStreamImpl(K.path, A, Y, z);
        try {
          K.func(q);
        } catch (w) {
          A.sendStatus({
            code: GX.Status.UNKNOWN,
            details: `Server method handler threw error ${w.message}`,
            metadata: null
          });
        }
      },
      onCancel() {
        if (q) q.cancelled = !0, q.emit("cancelled", "cancelled"), q.destroy();
      }
    });
  }
  function SH2(A, K) {
    let q;
    A.start({
      onReceiveMetadata(Y) {
        q = new CjA.ServerDuplexStreamImpl(K.path, A, Y);
        try {
          K.func(q);
        } catch (z) {
          A.sendStatus({
            code: GX.Status.UNKNOWN,
            details: `Server method handler threw error ${z.message}`,
            metadata: null
          });
        }
      },
      onReceiveMessage(Y) {
        q.push(Y);
      },
      onReceiveHalfClose() {
        q.push(null);
      },
      onCancel() {
        if (q) q.cancelled = !0, q.emit("cancelled", "cancelled"), q.destroy();
      }
    });
  }
});

// Register to shared state
__$.Pn7 = Pn7;
