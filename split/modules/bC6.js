// Module: bC6
// Dependencies: UG, K9, ND1, _C6, Lw, yj1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bC6 = v($n7 => {
  Object.defineProperty($n7, "__esModule", {
    value: !0
  });
  $n7.BaseServerInterceptingCall = $n7.ServerInterceptingCall = $n7.ResponderBuilder = $n7.ServerListenerBuilder = void 0;
  $n7.isInterceptingServerListener = OH2;
  $n7.getServerInterceptingCall = ZH2;
  var hj1 = __$.UG(),
    gf = __$.K9(),
    vjA = CA("http2"),
    si7 = __$.ND1(),
    ti7 = CA("zlib"),
    HH2 = __$._C6(),
    Yn7 = __$.Lw(),
    JH2 = CA("tls"),
    ei7 = __$.yj1(),
    zn7 = "server_call";
  function z3A(A) {
    Yn7.trace(gf.LogVerbosity.DEBUG, zn7, A);
  }
  class wn7 {
    constructor() {
      this.metadata = void 0, this.message = void 0, this.halfClose = void 0, this.cancel = void 0;
    }
    withOnReceiveMetadata(A) {
      return this.metadata = A, this;
    }
    withOnReceiveMessage(A) {
      return this.message = A, this;
    }
    withOnReceiveHalfClose(A) {
      return this.halfClose = A, this;
    }
    withOnCancel(A) {
      return this.cancel = A, this;
    }
    build() {
      return {
        onReceiveMetadata: this.metadata,
        onReceiveMessage: this.message,
        onReceiveHalfClose: this.halfClose,
        onCancel: this.cancel
      };
    }
  }
  $n7.ServerListenerBuilder = wn7;
  function OH2(A) {
    return A.onReceiveMetadata !== void 0 && A.onReceiveMetadata.length === 1;
  }
  class Hn7 {
    constructor(A, K) {
      this.listener = A, this.nextListener = K, this.cancelled = !1, this.processingMetadata = !1, this.hasPendingMessage = !1, this.pendingMessage = null, this.processingMessage = !1, this.hasPendingHalfClose = !1;
    }
    processPendingMessage() {
      if (this.hasPendingMessage) this.nextListener.onReceiveMessage(this.pendingMessage), this.pendingMessage = null, this.hasPendingMessage = !1;
    }
    processPendingHalfClose() {
      if (this.hasPendingHalfClose) this.nextListener.onReceiveHalfClose(), this.hasPendingHalfClose = !1;
    }
    onReceiveMetadata(A) {
      if (this.cancelled) return;
      this.processingMetadata = !0, this.listener.onReceiveMetadata(A, K => {
        if (this.processingMetadata = !1, this.cancelled) return;
        this.nextListener.onReceiveMetadata(K), this.processPendingMessage(), this.processPendingHalfClose();
      });
    }
    onReceiveMessage(A) {
      if (this.cancelled) return;
      this.processingMessage = !0, this.listener.onReceiveMessage(A, K => {
        if (this.processingMessage = !1, this.cancelled) return;
        if (this.processingMetadata) this.pendingMessage = K, this.hasPendingMessage = !0;else this.nextListener.onReceiveMessage(K), this.processPendingHalfClose();
      });
    }
    onReceiveHalfClose() {
      if (this.cancelled) return;
      this.listener.onReceiveHalfClose(() => {
        if (this.cancelled) return;
        if (this.processingMetadata || this.processingMessage) this.hasPendingHalfClose = !0;else this.nextListener.onReceiveHalfClose();
      });
    }
    onCancel() {
      this.cancelled = !0, this.listener.onCancel(), this.nextListener.onCancel();
    }
  }
  class Jn7 {
    constructor() {
      this.start = void 0, this.metadata = void 0, this.message = void 0, this.status = void 0;
    }
    withStart(A) {
      return this.start = A, this;
    }
    withSendMetadata(A) {
      return this.metadata = A, this;
    }
    withSendMessage(A) {
      return this.message = A, this;
    }
    withSendStatus(A) {
      return this.status = A, this;
    }
    build() {
      return {
        start: this.start,
        sendMetadata: this.metadata,
        sendMessage: this.message,
        sendStatus: this.status
      };
    }
  }
  $n7.ResponderBuilder = Jn7;
  var Ij1 = {
      onReceiveMetadata: (A, K) => {
        K(A);
      },
      onReceiveMessage: (A, K) => {
        K(A);
      },
      onReceiveHalfClose: A => {
        A();
      },
      onCancel: () => {}
    },
    Sj1 = {
      start: A => {
        A();
      },
      sendMetadata: (A, K) => {
        K(A);
      },
      sendMessage: (A, K) => {
        K(A);
      },
      sendStatus: (A, K) => {
        K(A);
      }
    };
  class On7 {
    constructor(A, K) {
      var q, Y, z, w;
      this.nextCall = A, this.processingMetadata = !1, this.sentMetadata = !1, this.processingMessage = !1, this.pendingMessage = null, this.pendingMessageCallback = null, this.pendingStatus = null, this.responder = {
        start: (q = K === null || K === void 0 ? void 0 : K.start) !== null && q !== void 0 ? q : Sj1.start,
        sendMetadata: (Y = K === null || K === void 0 ? void 0 : K.sendMetadata) !== null && Y !== void 0 ? Y : Sj1.sendMetadata,
        sendMessage: (z = K === null || K === void 0 ? void 0 : K.sendMessage) !== null && z !== void 0 ? z : Sj1.sendMessage,
        sendStatus: (w = K === null || K === void 0 ? void 0 : K.sendStatus) !== null && w !== void 0 ? w : Sj1.sendStatus
      };
    }
    processPendingMessage() {
      if (this.pendingMessageCallback) this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback), this.pendingMessage = null, this.pendingMessageCallback = null;
    }
    processPendingStatus() {
      if (this.pendingStatus) this.nextCall.sendStatus(this.pendingStatus), this.pendingStatus = null;
    }
    start(A) {
      this.responder.start(K => {
        var q, Y, z, w;
        let H = {
            onReceiveMetadata: (q = K === null || K === void 0 ? void 0 : K.onReceiveMetadata) !== null && q !== void 0 ? q : Ij1.onReceiveMetadata,
            onReceiveMessage: (Y = K === null || K === void 0 ? void 0 : K.onReceiveMessage) !== null && Y !== void 0 ? Y : Ij1.onReceiveMessage,
            onReceiveHalfClose: (z = K === null || K === void 0 ? void 0 : K.onReceiveHalfClose) !== null && z !== void 0 ? z : Ij1.onReceiveHalfClose,
            onCancel: (w = K === null || K === void 0 ? void 0 : K.onCancel) !== null && w !== void 0 ? w : Ij1.onCancel
          },
          J = new Hn7(H, A);
        this.nextCall.start(J);
      });
    }
    sendMetadata(A) {
      this.processingMetadata = !0, this.sentMetadata = !0, this.responder.sendMetadata(A, K => {
        this.processingMetadata = !1, this.nextCall.sendMetadata(K), this.processPendingMessage(), this.processPendingStatus();
      });
    }
    sendMessage(A, K) {
      if (this.processingMessage = !0, !this.sentMetadata) this.sendMetadata(new hj1.Metadata());
      this.responder.sendMessage(A, q => {
        if (this.processingMessage = !1, this.processingMetadata) this.pendingMessage = q, this.pendingMessageCallback = K;else this.nextCall.sendMessage(q, K);
      });
    }
    sendStatus(A) {
      this.responder.sendStatus(A, K => {
        if (this.processingMetadata || this.processingMessage) this.pendingStatus = K;else this.nextCall.sendStatus(K);
      });
    }
    startRead() {
      this.nextCall.startRead();
    }
    getPeer() {
      return this.nextCall.getPeer();
    }
    getDeadline() {
      return this.nextCall.getDeadline();
    }
    getHost() {
      return this.nextCall.getHost();
    }
    getAuthContext() {
      return this.nextCall.getAuthContext();
    }
    getConnectionInfo() {
      return this.nextCall.getConnectionInfo();
    }
    getMetricsRecorder() {
      return this.nextCall.getMetricsRecorder();
    }
  }
  $n7.ServerInterceptingCall = On7;
  var Xn7 = "grpc-accept-encoding",
    SC6 = "grpc-encoding",
    An7 = "grpc-message",
    Kn7 = "grpc-status",
    IC6 = "grpc-timeout",
    XH2 = /(\d{1,8})\s*([HMSmun])/,
    $H2 = {
      H: 3600000,
      M: 60000,
      S: 1000,
      m: 1,
      u: 0.001,
      n: 0.000001
    },
    _H2 = {
      [Xn7]: "identity,deflate,gzip",
      [SC6]: "identity"
    },
    qn7 = {
      [vjA.constants.HTTP2_HEADER_STATUS]: vjA.constants.HTTP_STATUS_OK,
      [vjA.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
    },
    GH2 = {
      waitForTrailers: !0
    };
  class hC6 {
    constructor(A, K, q, Y, z) {
      var w, H;
      if (this.stream = A, this.callEventTracker = q, this.handler = Y, this.listener = null, this.deadlineTimer = null, this.deadline = 1 / 0, this.maxSendMessageSize = gf.DEFAULT_MAX_SEND_MESSAGE_LENGTH, this.maxReceiveMessageSize = gf.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH, this.cancelled = !1, this.metadataSent = !1, this.wantTrailers = !1, this.cancelNotified = !1, this.incomingEncoding = "identity", this.readQueue = [], this.isReadPending = !1, this.receivedHalfClose = !1, this.streamEnded = !1, this.metricsRecorder = new ei7.PerRequestMetricRecorder(), this.stream.once("error", _ => {}), this.stream.once("close", () => {
        var _;
        if (z3A("Request to method " + ((_ = this.handler) === null || _ === void 0 ? void 0 : _.path) + " stream closed with rstCode " + this.stream.rstCode), this.callEventTracker && !this.streamEnded) this.streamEnded = !0, this.callEventTracker.onStreamEnd(!1), this.callEventTracker.onCallEnd({
          code: gf.Status.CANCELLED,
          details: "Stream closed before sending status",
          metadata: null
        });
        this.notifyOnCancel();
      }), this.stream.on("data", _ => {
        this.handleDataFrame(_);
      }), this.stream.pause(), this.stream.on("end", () => {
        this.handleEndEvent();
      }), "grpc.max_send_message_length" in z) this.maxSendMessageSize = z["grpc.max_send_message_length"];
      if ("grpc.max_receive_message_length" in z) this.maxReceiveMessageSize = z["grpc.max_receive_message_length"];
      this.host = (w = K[":authority"]) !== null && w !== void 0 ? w : K.host, this.decoder = new HH2.StreamDecoder(this.maxReceiveMessageSize);
      let J = hj1.Metadata.fromHttp2Headers(K);
      if (Yn7.isTracerEnabled(zn7)) z3A("Request to " + this.handler.path + " received headers " + JSON.stringify(J.toJSON()));
      let O = J.get(IC6);
      if (O.length > 0) this.handleTimeoutHeader(O[0]);
      let X = J.get(SC6);
      if (X.length > 0) this.incomingEncoding = X[0];
      J.remove(IC6), J.remove(SC6), J.remove(Xn7), J.remove(vjA.constants.HTTP2_HEADER_ACCEPT_ENCODING), J.remove(vjA.constants.HTTP2_HEADER_TE), J.remove(vjA.constants.HTTP2_HEADER_CONTENT_TYPE), this.metadata = J;
      let $ = (H = A.session) === null || H === void 0 ? void 0 : H.socket;
      this.connectionInfo = {
        localAddress: $ === null || $ === void 0 ? void 0 : $.localAddress,
        localPort: $ === null || $ === void 0 ? void 0 : $.localPort,
        remoteAddress: $ === null || $ === void 0 ? void 0 : $.remoteAddress,
        remotePort: $ === null || $ === void 0 ? void 0 : $.remotePort
      }, this.shouldSendMetrics = !!z["grpc.server_call_metric_recording"];
    }
    handleTimeoutHeader(A) {
      let K = A.toString().match(XH2);
      if (K === null) {
        let z = {
          code: gf.Status.INTERNAL,
          details: `Invalid ${IC6} value "${A}"`,
          metadata: null
        };
        process.nextTick(() => {
          this.sendStatus(z);
        });
        return;
      }
      let q = +K[1] * $H2[K[2]] | 0,
        Y = new Date();
      this.deadline = Y.setMilliseconds(Y.getMilliseconds() + q), this.deadlineTimer = setTimeout(() => {
        let z = {
          code: gf.Status.DEADLINE_EXCEEDED,
          details: "Deadline exceeded",
          metadata: null
        };
        this.sendStatus(z);
      }, q);
    }
    checkCancelled() {
      if (!this.cancelled && (this.stream.destroyed || this.stream.closed)) this.notifyOnCancel(), this.cancelled = !0;
      return this.cancelled;
    }
    notifyOnCancel() {
      if (this.cancelNotified) return;
      if (this.cancelNotified = !0, this.cancelled = !0, process.nextTick(() => {
        var A;
        (A = this.listener) === null || A === void 0 || A.onCancel();
      }), this.deadlineTimer) clearTimeout(this.deadlineTimer);
      this.stream.resume();
    }
    maybeSendMetadata() {
      if (!this.metadataSent) this.sendMetadata(new hj1.Metadata());
    }
    serializeMessage(A) {
      let K = this.handler.serialize(A),
        q = K.byteLength,
        Y = Buffer.allocUnsafe(q + 5);
      return Y.writeUInt8(0, 0), Y.writeUInt32BE(q, 1), K.copy(Y, 5), Y;
    }
    decompressMessage(A, K) {
      let q = A.subarray(5);
      if (K === "identity") return q;else if (K === "deflate" || K === "gzip") {
        let Y;
        if (K === "deflate") Y = ti7.createInflate();else Y = ti7.createGunzip();
        return new Promise((z, w) => {
          let H = 0,
            J = [];
          Y.on("data", O => {
            if (J.push(O), H += O.byteLength, this.maxReceiveMessageSize !== -1 && H > this.maxReceiveMessageSize) Y.destroy(), w({
              code: gf.Status.RESOURCE_EXHAUSTED,
              details: `Received message that decompresses to a size larger than ${this.maxReceiveMessageSize}`
            });
          }), Y.on("end", () => {
            z(Buffer.concat(J));
          }), Y.write(q), Y.end();
        });
      } else return Promise.reject({
        code: gf.Status.UNIMPLEMENTED,
        details: `Received message compressed with unsupported encoding "${K}"`
      });
    }
    async decompressAndMaybePush(A) {
      if (A.type !== "COMPRESSED") throw Error(`Invalid queue entry type: ${A.type}`);
      let q = A.compressedMessage.readUInt8(0) === 1 ? this.incomingEncoding : "identity",
        Y;
      try {
        Y = await this.decompressMessage(A.compressedMessage, q);
      } catch (z) {
        this.sendStatus(z);
        return;
      }
      try {
        A.parsedMessage = this.handler.deserialize(Y);
      } catch (z) {
        this.sendStatus({
          code: gf.Status.INTERNAL,
          details: `Error deserializing request: ${z.message}`
        });
        return;
      }
      A.type = "READABLE", this.maybePushNextMessage();
    }
    maybePushNextMessage() {
      if (this.listener && this.isReadPending && this.readQueue.length > 0 && this.readQueue[0].type !== "COMPRESSED") {
        this.isReadPending = !1;
        let A = this.readQueue.shift();
        if (A.type === "READABLE") this.listener.onReceiveMessage(A.parsedMessage);else this.listener.onReceiveHalfClose();
      }
    }
    handleDataFrame(A) {
      var K;
      if (this.checkCancelled()) return;
      z3A("Request to " + this.handler.path + " received data frame of size " + A.length);
      let q;
      try {
        q = this.decoder.write(A);
      } catch (Y) {
        this.sendStatus({
          code: gf.Status.RESOURCE_EXHAUSTED,
          details: Y.message
        });
        return;
      }
      for (let Y of q) {
        this.stream.pause();
        let z = {
          type: "COMPRESSED",
          compressedMessage: Y,
          parsedMessage: null
        };
        this.readQueue.push(z), this.decompressAndMaybePush(z), (K = this.callEventTracker) === null || K === void 0 || K.addMessageReceived();
      }
    }
    handleEndEvent() {
      this.readQueue.push({
        type: "HALF_CLOSE",
        compressedMessage: null,
        parsedMessage: null
      }), this.receivedHalfClose = !0, this.maybePushNextMessage();
    }
    start(A) {
      if (z3A("Request to " + this.handler.path + " start called"), this.checkCancelled()) return;
      this.listener = A, A.onReceiveMetadata(this.metadata);
    }
    sendMetadata(A) {
      if (this.checkCancelled()) return;
      if (this.metadataSent) return;
      this.metadataSent = !0;
      let K = A ? A.toHttp2Headers() : null,
        q = Object.assign(Object.assign(Object.assign({}, qn7), _H2), K);
      this.stream.respond(q, GH2);
    }
    sendMessage(A, K) {
      if (this.checkCancelled()) return;
      let q;
      try {
        q = this.serializeMessage(A);
      } catch (Y) {
        this.sendStatus({
          code: gf.Status.INTERNAL,
          details: `Error serializing response: ${(0, si7.getErrorMessage)(Y)}`,
          metadata: null
        });
        return;
      }
      if (this.maxSendMessageSize !== -1 && q.length - 5 > this.maxSendMessageSize) {
        this.sendStatus({
          code: gf.Status.RESOURCE_EXHAUSTED,
          details: `Sent message larger than max (${q.length} vs. ${this.maxSendMessageSize})`,
          metadata: null
        });
        return;
      }
      this.maybeSendMetadata(), z3A("Request to " + this.handler.path + " sent data frame of size " + q.length), this.stream.write(q, Y => {
        var z;
        if (Y) {
          this.sendStatus({
            code: gf.Status.INTERNAL,
            details: `Error writing message: ${(0, si7.getErrorMessage)(Y)}`,
            metadata: null
          });
          return;
        }
        (z = this.callEventTracker) === null || z === void 0 || z.addMessageSent(), K();
      });
    }
    sendStatus(A) {
      var K, q, Y;
      if (this.checkCancelled()) return;
      z3A("Request to method " + ((K = this.handler) === null || K === void 0 ? void 0 : K.path) + " ended with status code: " + gf.Status[A.code] + " details: " + A.details);
      let z = (Y = (q = A.metadata) === null || q === void 0 ? void 0 : q.clone()) !== null && Y !== void 0 ? Y : new hj1.Metadata();
      if (this.shouldSendMetrics) z.set(ei7.GRPC_METRICS_HEADER, this.metricsRecorder.serialize());
      if (this.metadataSent) {
        if (!this.wantTrailers) this.wantTrailers = !0, this.stream.once("wantTrailers", () => {
          if (this.callEventTracker && !this.streamEnded) this.streamEnded = !0, this.callEventTracker.onStreamEnd(!0), this.callEventTracker.onCallEnd(A);
          let w = Object.assign({
            [Kn7]: A.code,
            [An7]: encodeURI(A.details)
          }, z.toHttp2Headers());
          this.stream.sendTrailers(w), this.notifyOnCancel();
        }), this.stream.end();else this.notifyOnCancel();
      } else {
        if (this.callEventTracker && !this.streamEnded) this.streamEnded = !0, this.callEventTracker.onStreamEnd(!0), this.callEventTracker.onCallEnd(A);
        let w = Object.assign(Object.assign({
          [Kn7]: A.code,
          [An7]: encodeURI(A.details)
        }, qn7), z.toHttp2Headers());
        this.stream.respond(w, {
          endStream: !0
        }), this.notifyOnCancel();
      }
    }
    startRead() {
      if (z3A("Request to " + this.handler.path + " startRead called"), this.checkCancelled()) return;
      if (this.isReadPending = !0, this.readQueue.length === 0) {
        if (!this.receivedHalfClose) this.stream.resume();
      } else this.maybePushNextMessage();
    }
    getPeer() {
      var A;
      let K = (A = this.stream.session) === null || A === void 0 ? void 0 : A.socket;
      if (K === null || K === void 0 ? void 0 : K.remoteAddress) {
        if (K.remotePort) return `${K.remoteAddress}:${K.remotePort}`;else return K.remoteAddress;
      } else return "unknown";
    }
    getDeadline() {
      return this.deadline;
    }
    getHost() {
      return this.host;
    }
    getAuthContext() {
      var A;
      if (((A = this.stream.session) === null || A === void 0 ? void 0 : A.socket) instanceof JH2.TLSSocket) {
        let K = this.stream.session.socket.getPeerCertificate();
        return {
          transportSecurityType: "ssl",
          sslPeerCertificate: K.raw ? K : void 0
        };
      } else return {};
    }
    getConnectionInfo() {
      return this.connectionInfo;
    }
    getMetricsRecorder() {
      return this.metricsRecorder;
    }
  }
  $n7.BaseServerInterceptingCall = hC6;
  function ZH2(A, K, q, Y, z, w) {
    let H = {
        path: z.path,
        requestStream: z.type === "clientStream" || z.type === "bidi",
        responseStream: z.type === "serverStream" || z.type === "bidi",
        requestDeserialize: z.deserialize,
        responseSerialize: z.serialize
      },
      J = new hC6(K, q, Y, z, w);
    return A.reduce((O, X) => {
      return X(H, O);
    }, J);
  }
});

// Register to shared state
__$.bC6 = bC6;
