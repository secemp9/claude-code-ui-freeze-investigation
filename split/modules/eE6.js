// Module: eE6
// Dependencies: Vp7, Ak6, wP, K9, UG, sE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eE6 = v(xp7 => {
  Object.defineProperty(xp7, "__esModule", {
    value: !0
  });
  xp7.Client = void 0;
  var yB = __$.Vp7(),
    u52 = __$.Ak6(),
    B52 = __$.wP(),
    Ht = __$.K9(),
    zjA = __$.UG(),
    BD1 = __$.sE6(),
    PS = Symbol(),
    wjA = Symbol(),
    HjA = Symbol(),
    ep = Symbol();
  function tE6(A) {
    return typeof A === "function";
  }
  function JjA(A) {
    var K;
    return ((K = A.stack) === null || K === void 0 ? void 0 : K.split(`
`).slice(1).join(`
`)) || "no stack trace available";
  }
  class bp7 {
    constructor(A, K, q = {}) {
      var Y, z;
      if (q = Object.assign({}, q), this[wjA] = (Y = q.interceptors) !== null && Y !== void 0 ? Y : [], delete q.interceptors, this[HjA] = (z = q.interceptor_providers) !== null && z !== void 0 ? z : [], delete q.interceptor_providers, this[wjA].length > 0 && this[HjA].length > 0) throw Error("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
      if (this[ep] = q.callInvocationTransformer, delete q.callInvocationTransformer, q.channelOverride) this[PS] = q.channelOverride;else if (q.channelFactoryOverride) {
        let w = q.channelFactoryOverride;
        delete q.channelFactoryOverride, this[PS] = w(A, K, q);
      } else this[PS] = new u52.ChannelImplementation(A, K, q);
    }
    close() {
      this[PS].close();
    }
    getChannel() {
      return this[PS];
    }
    waitForReady(A, K) {
      let q = Y => {
        if (Y) {
          K(Error("Failed to connect before the deadline"));
          return;
        }
        let z;
        try {
          z = this[PS].getConnectivityState(!0);
        } catch (w) {
          K(Error("The channel has been closed"));
          return;
        }
        if (z === B52.ConnectivityState.READY) K();else try {
          this[PS].watchConnectivityState(z, A, q);
        } catch (w) {
          K(Error("The channel has been closed"));
        }
      };
      setImmediate(q);
    }
    checkOptionalUnaryResponseArguments(A, K, q) {
      if (tE6(A)) return {
        metadata: new zjA.Metadata(),
        options: {},
        callback: A
      };else if (tE6(K)) {
        if (A instanceof zjA.Metadata) return {
          metadata: A,
          options: {},
          callback: K
        };else return {
          metadata: new zjA.Metadata(),
          options: A,
          callback: K
        };
      } else {
        if (!(A instanceof zjA.Metadata && K instanceof Object && tE6(q))) throw Error("Incorrect arguments passed");
        return {
          metadata: A,
          options: K,
          callback: q
        };
      }
    }
    makeUnaryRequest(A, K, q, Y, z, w, H) {
      var J, O;
      let X = this.checkOptionalUnaryResponseArguments(z, w, H),
        $ = {
          path: A,
          requestStream: !1,
          responseStream: !1,
          requestSerialize: K,
          responseDeserialize: q
        },
        _ = {
          argument: Y,
          metadata: X.metadata,
          call: new yB.ClientUnaryCallImpl(),
          channel: this[PS],
          methodDefinition: $,
          callOptions: X.options,
          callback: X.callback
        };
      if (this[ep]) _ = this[ep](_);
      let G = _.call,
        Z = {
          clientInterceptors: this[wjA],
          clientInterceptorProviders: this[HjA],
          callInterceptors: (J = _.callOptions.interceptors) !== null && J !== void 0 ? J : [],
          callInterceptorProviders: (O = _.callOptions.interceptor_providers) !== null && O !== void 0 ? O : []
        },
        W = (0, BD1.getInterceptingCall)(Z, _.methodDefinition, _.callOptions, _.channel);
      G.call = W;
      let D = null,
        j = !1,
        M = Error();
      return W.start(_.metadata, {
        onReceiveMetadata: P => {
          G.emit("metadata", P);
        },
        onReceiveMessage(P) {
          if (D !== null) W.cancelWithStatus(Ht.Status.UNIMPLEMENTED, "Too many responses received");
          D = P;
        },
        onReceiveStatus(P) {
          if (j) return;
          if (j = !0, P.code === Ht.Status.OK) {
            if (D === null) {
              let f = JjA(M);
              _.callback((0, yB.callErrorFromStatus)({
                code: Ht.Status.UNIMPLEMENTED,
                details: "No message received",
                metadata: P.metadata
              }, f));
            } else _.callback(null, D);
          } else {
            let f = JjA(M);
            _.callback((0, yB.callErrorFromStatus)(P, f));
          }
          M = null, G.emit("status", P);
        }
      }), W.sendMessage(Y), W.halfClose(), G;
    }
    makeClientStreamRequest(A, K, q, Y, z, w) {
      var H, J;
      let O = this.checkOptionalUnaryResponseArguments(Y, z, w),
        X = {
          path: A,
          requestStream: !0,
          responseStream: !1,
          requestSerialize: K,
          responseDeserialize: q
        },
        $ = {
          metadata: O.metadata,
          call: new yB.ClientWritableStreamImpl(K),
          channel: this[PS],
          methodDefinition: X,
          callOptions: O.options,
          callback: O.callback
        };
      if (this[ep]) $ = this[ep]($);
      let _ = $.call,
        G = {
          clientInterceptors: this[wjA],
          clientInterceptorProviders: this[HjA],
          callInterceptors: (H = $.callOptions.interceptors) !== null && H !== void 0 ? H : [],
          callInterceptorProviders: (J = $.callOptions.interceptor_providers) !== null && J !== void 0 ? J : []
        },
        Z = (0, BD1.getInterceptingCall)(G, $.methodDefinition, $.callOptions, $.channel);
      _.call = Z;
      let W = null,
        D = !1,
        j = Error();
      return Z.start($.metadata, {
        onReceiveMetadata: M => {
          _.emit("metadata", M);
        },
        onReceiveMessage(M) {
          if (W !== null) Z.cancelWithStatus(Ht.Status.UNIMPLEMENTED, "Too many responses received");
          W = M, Z.startRead();
        },
        onReceiveStatus(M) {
          if (D) return;
          if (D = !0, M.code === Ht.Status.OK) {
            if (W === null) {
              let P = JjA(j);
              $.callback((0, yB.callErrorFromStatus)({
                code: Ht.Status.UNIMPLEMENTED,
                details: "No message received",
                metadata: M.metadata
              }, P));
            } else $.callback(null, W);
          } else {
            let P = JjA(j);
            $.callback((0, yB.callErrorFromStatus)(M, P));
          }
          j = null, _.emit("status", M);
        }
      }), _;
    }
    checkMetadataAndOptions(A, K) {
      let q, Y;
      if (A instanceof zjA.Metadata) {
        if (q = A, K) Y = K;else Y = {};
      } else {
        if (A) Y = A;else Y = {};
        q = new zjA.Metadata();
      }
      return {
        metadata: q,
        options: Y
      };
    }
    makeServerStreamRequest(A, K, q, Y, z, w) {
      var H, J;
      let O = this.checkMetadataAndOptions(z, w),
        X = {
          path: A,
          requestStream: !1,
          responseStream: !0,
          requestSerialize: K,
          responseDeserialize: q
        },
        $ = {
          argument: Y,
          metadata: O.metadata,
          call: new yB.ClientReadableStreamImpl(q),
          channel: this[PS],
          methodDefinition: X,
          callOptions: O.options
        };
      if (this[ep]) $ = this[ep]($);
      let _ = $.call,
        G = {
          clientInterceptors: this[wjA],
          clientInterceptorProviders: this[HjA],
          callInterceptors: (H = $.callOptions.interceptors) !== null && H !== void 0 ? H : [],
          callInterceptorProviders: (J = $.callOptions.interceptor_providers) !== null && J !== void 0 ? J : []
        },
        Z = (0, BD1.getInterceptingCall)(G, $.methodDefinition, $.callOptions, $.channel);
      _.call = Z;
      let W = !1,
        D = Error();
      return Z.start($.metadata, {
        onReceiveMetadata(j) {
          _.emit("metadata", j);
        },
        onReceiveMessage(j) {
          _.push(j);
        },
        onReceiveStatus(j) {
          if (W) return;
          if (W = !0, _.push(null), j.code !== Ht.Status.OK) {
            let M = JjA(D);
            _.emit("error", (0, yB.callErrorFromStatus)(j, M));
          }
          D = null, _.emit("status", j);
        }
      }), Z.sendMessage(Y), Z.halfClose(), _;
    }
    makeBidiStreamRequest(A, K, q, Y, z) {
      var w, H;
      let J = this.checkMetadataAndOptions(Y, z),
        O = {
          path: A,
          requestStream: !0,
          responseStream: !0,
          requestSerialize: K,
          responseDeserialize: q
        },
        X = {
          metadata: J.metadata,
          call: new yB.ClientDuplexStreamImpl(K, q),
          channel: this[PS],
          methodDefinition: O,
          callOptions: J.options
        };
      if (this[ep]) X = this[ep](X);
      let $ = X.call,
        _ = {
          clientInterceptors: this[wjA],
          clientInterceptorProviders: this[HjA],
          callInterceptors: (w = X.callOptions.interceptors) !== null && w !== void 0 ? w : [],
          callInterceptorProviders: (H = X.callOptions.interceptor_providers) !== null && H !== void 0 ? H : []
        },
        G = (0, BD1.getInterceptingCall)(_, X.methodDefinition, X.callOptions, X.channel);
      $.call = G;
      let Z = !1,
        W = Error();
      return G.start(X.metadata, {
        onReceiveMetadata(D) {
          $.emit("metadata", D);
        },
        onReceiveMessage(D) {
          $.push(D);
        },
        onReceiveStatus(D) {
          if (Z) return;
          if (Z = !0, $.push(null), D.code !== Ht.Status.OK) {
            let j = JjA(W);
            $.emit("error", (0, yB.callErrorFromStatus)(D, j));
          }
          W = null, $.emit("status", D);
        }
      }), $;
    }
  }
  xp7.Client = bp7;
});

// Register to shared state
__$.eE6 = eE6;
