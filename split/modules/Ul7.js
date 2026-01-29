// Module: Ul7
// Dependencies: K9, UG, _C6, Lw

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ul7 = v(Fl7 => {
  Object.defineProperty(Fl7, "__esModule", {
    value: !0
  });
  Fl7.Http2SubchannelCall = void 0;
  var Hd = CA("http2"),
    Zz2 = CA("os"),
    qw = __$.K9(),
    Jd = __$.UG(),
    Wz2 = __$._C6(),
    Dz2 = __$.Lw(),
    jz2 = __$.K9(),
    Mz2 = "subchannel_call";
  function Pz2(A) {
    for (let [K, q] of Object.entries(Zz2.constants.errno)) if (q === A) return K;
    return "Unknown system error " + A;
  }
  function GC6(A) {
    let K = `Received HTTP status code ${A}`,
      q;
    switch (A) {
      case 400:
        q = qw.Status.INTERNAL;
        break;
      case 401:
        q = qw.Status.UNAUTHENTICATED;
        break;
      case 403:
        q = qw.Status.PERMISSION_DENIED;
        break;
      case 404:
        q = qw.Status.UNIMPLEMENTED;
        break;
      case 429:
      case 502:
      case 503:
      case 504:
        q = qw.Status.UNAVAILABLE;
        break;
      default:
        q = qw.Status.UNKNOWN;
    }
    return {
      code: q,
      details: K,
      metadata: new Jd.Metadata()
    };
  }
  class gl7 {
    constructor(A, K, q, Y, z) {
      var w;
      this.http2Stream = A, this.callEventTracker = K, this.listener = q, this.transport = Y, this.callId = z, this.isReadFilterPending = !1, this.isPushPending = !1, this.canPush = !1, this.readsClosed = !1, this.statusOutput = !1, this.unpushedReadMessages = [], this.finalStatus = null, this.internalError = null, this.serverEndedCall = !1, this.connectionDropped = !1;
      let H = (w = Y.getOptions()["grpc.max_receive_message_length"]) !== null && w !== void 0 ? w : qw.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
      this.decoder = new Wz2.StreamDecoder(H), A.on("response", (J, O) => {
        let X = "";
        for (let $ of Object.keys(J)) X += "\t\t" + $ + ": " + J[$] + `
`;
        if (this.trace(`Received server headers:
` + X), this.httpStatusCode = J[":status"], O & Hd.constants.NGHTTP2_FLAG_END_STREAM) this.handleTrailers(J);else {
          let $;
          try {
            $ = Jd.Metadata.fromHttp2Headers(J);
          } catch (_) {
            this.endCall({
              code: qw.Status.UNKNOWN,
              details: _.message,
              metadata: new Jd.Metadata()
            });
            return;
          }
          this.listener.onReceiveMetadata($);
        }
      }), A.on("trailers", J => {
        this.handleTrailers(J);
      }), A.on("data", J => {
        if (this.statusOutput) return;
        this.trace("receive HTTP/2 data frame of length " + J.length);
        let O;
        try {
          O = this.decoder.write(J);
        } catch (X) {
          if (this.httpStatusCode !== void 0 && this.httpStatusCode !== 200) {
            let $ = GC6(this.httpStatusCode);
            this.cancelWithStatus($.code, $.details);
          } else this.cancelWithStatus(qw.Status.RESOURCE_EXHAUSTED, X.message);
          return;
        }
        for (let X of O) this.trace("parsed message of length " + X.length), this.callEventTracker.addMessageReceived(), this.tryPush(X);
      }), A.on("end", () => {
        this.readsClosed = !0, this.maybeOutputStatus();
      }), A.on("close", () => {
        this.serverEndedCall = !0, process.nextTick(() => {
          var J;
          if (this.trace("HTTP/2 stream closed with code " + A.rstCode), ((J = this.finalStatus) === null || J === void 0 ? void 0 : J.code) === qw.Status.OK) return;
          let O,
            X = "";
          switch (A.rstCode) {
            case Hd.constants.NGHTTP2_NO_ERROR:
              if (this.finalStatus !== null) return;
              if (this.httpStatusCode && this.httpStatusCode !== 200) {
                let $ = GC6(this.httpStatusCode);
                O = $.code, X = $.details;
              } else O = qw.Status.INTERNAL, X = `Received RST_STREAM with code ${A.rstCode} (Call ended without gRPC status)`;
              break;
            case Hd.constants.NGHTTP2_REFUSED_STREAM:
              O = qw.Status.UNAVAILABLE, X = "Stream refused by server";
              break;
            case Hd.constants.NGHTTP2_CANCEL:
              if (this.connectionDropped) O = qw.Status.UNAVAILABLE, X = "Connection dropped";else O = qw.Status.CANCELLED, X = "Call cancelled";
              break;
            case Hd.constants.NGHTTP2_ENHANCE_YOUR_CALM:
              O = qw.Status.RESOURCE_EXHAUSTED, X = "Bandwidth exhausted or memory limit exceeded";
              break;
            case Hd.constants.NGHTTP2_INADEQUATE_SECURITY:
              O = qw.Status.PERMISSION_DENIED, X = "Protocol not secure enough";
              break;
            case Hd.constants.NGHTTP2_INTERNAL_ERROR:
              if (O = qw.Status.INTERNAL, this.internalError === null) X = `Received RST_STREAM with code ${A.rstCode} (Internal server error)`;else if (this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT") O = qw.Status.UNAVAILABLE, X = this.internalError.message;else X = `Received RST_STREAM with code ${A.rstCode} triggered by internal client error: ${this.internalError.message}`;
              break;
            default:
              O = qw.Status.INTERNAL, X = `Received RST_STREAM with code ${A.rstCode}`;
          }
          this.endCall({
            code: O,
            details: X,
            metadata: new Jd.Metadata(),
            rstCode: A.rstCode
          });
        });
      }), A.on("error", J => {
        if (J.code !== "ERR_HTTP2_STREAM_ERROR") this.trace("Node error event: message=" + J.message + " code=" + J.code + " errno=" + Pz2(J.errno) + " syscall=" + J.syscall), this.internalError = J;
        this.callEventTracker.onStreamEnd(!1);
      });
    }
    getDeadlineInfo() {
      return [`remote_addr=${this.getPeer()}`];
    }
    onDisconnect() {
      this.connectionDropped = !0, setImmediate(() => {
        this.endCall({
          code: qw.Status.UNAVAILABLE,
          details: "Connection dropped",
          metadata: new Jd.Metadata()
        });
      });
    }
    outputStatus() {
      if (!this.statusOutput) this.statusOutput = !0, this.trace("ended with status: code=" + this.finalStatus.code + ' details="' + this.finalStatus.details + '"'), this.callEventTracker.onCallEnd(this.finalStatus), process.nextTick(() => {
        this.listener.onReceiveStatus(this.finalStatus);
      }), this.http2Stream.resume();
    }
    trace(A) {
      Dz2.trace(jz2.LogVerbosity.DEBUG, Mz2, "[" + this.callId + "] " + A);
    }
    endCall(A) {
      if (this.finalStatus === null || this.finalStatus.code === qw.Status.OK) this.finalStatus = A, this.maybeOutputStatus();
      this.destroyHttp2Stream();
    }
    maybeOutputStatus() {
      if (this.finalStatus !== null) {
        if (this.finalStatus.code !== qw.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && !this.isReadFilterPending && !this.isPushPending) this.outputStatus();
      }
    }
    push(A) {
      this.trace("pushing to reader message of length " + (A instanceof Buffer ? A.length : null)), this.canPush = !1, this.isPushPending = !0, process.nextTick(() => {
        if (this.isPushPending = !1, this.statusOutput) return;
        this.listener.onReceiveMessage(A), this.maybeOutputStatus();
      });
    }
    tryPush(A) {
      if (this.canPush) this.http2Stream.pause(), this.push(A);else this.trace("unpushedReadMessages.push message of length " + A.length), this.unpushedReadMessages.push(A);
    }
    handleTrailers(A) {
      this.serverEndedCall = !0, this.callEventTracker.onStreamEnd(!0);
      let K = "";
      for (let w of Object.keys(A)) K += "\t\t" + w + ": " + A[w] + `
`;
      this.trace(`Received server trailers:
` + K);
      let q;
      try {
        q = Jd.Metadata.fromHttp2Headers(A);
      } catch (w) {
        q = new Jd.Metadata();
      }
      let Y = q.getMap(),
        z;
      if (typeof Y["grpc-status"] === "string") {
        let w = Number(Y["grpc-status"]);
        this.trace("received status code " + w + " from server"), q.remove("grpc-status");
        let H = "";
        if (typeof Y["grpc-message"] === "string") {
          try {
            H = decodeURI(Y["grpc-message"]);
          } catch (J) {
            H = Y["grpc-message"];
          }
          q.remove("grpc-message"), this.trace('received status details string "' + H + '" from server');
        }
        z = {
          code: w,
          details: H,
          metadata: q
        };
      } else if (this.httpStatusCode) z = GC6(this.httpStatusCode), z.metadata = q;else z = {
        code: qw.Status.UNKNOWN,
        details: "No status information received",
        metadata: q
      };
      this.endCall(z);
    }
    destroyHttp2Stream() {
      var A;
      if (this.http2Stream.destroyed) return;
      if (this.serverEndedCall) this.http2Stream.end();else {
        let K;
        if (((A = this.finalStatus) === null || A === void 0 ? void 0 : A.code) === qw.Status.OK) K = Hd.constants.NGHTTP2_NO_ERROR;else K = Hd.constants.NGHTTP2_CANCEL;
        this.trace("close http2 stream with code " + K), this.http2Stream.close(K);
      }
    }
    cancelWithStatus(A, K) {
      this.trace("cancelWithStatus code: " + A + ' details: "' + K + '"'), this.endCall({
        code: A,
        details: K,
        metadata: new Jd.Metadata()
      });
    }
    getStatus() {
      return this.finalStatus;
    }
    getPeer() {
      return this.transport.getPeerName();
    }
    getCallNumber() {
      return this.callId;
    }
    getAuthContext() {
      return this.transport.getAuthContext();
    }
    startRead() {
      if (this.finalStatus !== null && this.finalStatus.code !== qw.Status.OK) {
        this.readsClosed = !0, this.maybeOutputStatus();
        return;
      }
      if (this.canPush = !0, this.unpushedReadMessages.length > 0) {
        let A = this.unpushedReadMessages.shift();
        this.push(A);
        return;
      }
      this.http2Stream.resume();
    }
    sendMessageWithContext(A, K) {
      this.trace("write() called with message of length " + K.length);
      let q = Y => {
        process.nextTick(() => {
          var z;
          let w = qw.Status.UNAVAILABLE;
          if ((Y === null || Y === void 0 ? void 0 : Y.code) === "ERR_STREAM_WRITE_AFTER_END") w = qw.Status.INTERNAL;
          if (Y) this.cancelWithStatus(w, `Write error: ${Y.message}`);
          (z = A.callback) === null || z === void 0 || z.call(A);
        });
      };
      this.trace("sending data chunk of length " + K.length), this.callEventTracker.addMessageSent();
      try {
        this.http2Stream.write(K, q);
      } catch (Y) {
        this.endCall({
          code: qw.Status.UNAVAILABLE,
          details: `Write failed with error ${Y.message}`,
          metadata: new Jd.Metadata()
        });
      }
    }
    halfClose() {
      this.trace("end() called"), this.trace("calling end() on HTTP/2 stream"), this.http2Stream.end();
    }
  }
  Fl7.Http2SubchannelCall = gl7;
});

// Register to shared state
__$.Ul7 = Ul7;
