// Module: xi7
// Dependencies: K9, UG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xi7 = v(hi7 => {
  Object.defineProperty(hi7, "__esModule", {
    value: !0
  });
  hi7.ServerDuplexStreamImpl = hi7.ServerWritableStreamImpl = hi7.ServerReadableStreamImpl = hi7.ServerUnaryCallImpl = void 0;
  hi7.serverErrorToStatus = vC6;
  var Ew2 = CA("events"),
    NC6 = CA("stream"),
    TC6 = __$.K9(),
    Li7 = __$.UG();
  function vC6(A, K) {
    var q;
    let Y = {
      code: TC6.Status.UNKNOWN,
      details: "message" in A ? A.message : "Unknown Error",
      metadata: (q = K !== null && K !== void 0 ? K : A.metadata) !== null && q !== void 0 ? q : null
    };
    if ("code" in A && typeof A.code === "number" && Number.isInteger(A.code)) {
      if (Y.code = A.code, "details" in A && typeof A.details === "string") Y.details = A.details;
    }
    return Y;
  }
  class Ri7 extends Ew2.EventEmitter {
    constructor(A, K, q, Y) {
      super();
      this.path = A, this.call = K, this.metadata = q, this.request = Y, this.cancelled = !1;
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(A) {
      this.call.sendMetadata(A);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  hi7.ServerUnaryCallImpl = Ri7;
  class yi7 extends NC6.Readable {
    constructor(A, K, q) {
      super({
        objectMode: !0
      });
      this.path = A, this.call = K, this.metadata = q, this.cancelled = !1;
    }
    _read(A) {
      this.call.startRead();
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(A) {
      this.call.sendMetadata(A);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  hi7.ServerReadableStreamImpl = yi7;
  class Ii7 extends NC6.Writable {
    constructor(A, K, q, Y) {
      super({
        objectMode: !0
      });
      this.path = A, this.call = K, this.metadata = q, this.request = Y, this.pendingStatus = {
        code: TC6.Status.OK,
        details: "OK"
      }, this.cancelled = !1, this.trailingMetadata = new Li7.Metadata(), this.on("error", z => {
        this.pendingStatus = vC6(z), this.end();
      });
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(A) {
      this.call.sendMetadata(A);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _write(A, K, q) {
      this.call.sendMessage(A, q);
    }
    _final(A) {
      var K;
      A(null), this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), {
        metadata: (K = this.pendingStatus.metadata) !== null && K !== void 0 ? K : this.trailingMetadata
      }));
    }
    end(A) {
      if (A) this.trailingMetadata = A;
      return super.end();
    }
  }
  hi7.ServerWritableStreamImpl = Ii7;
  class Si7 extends NC6.Duplex {
    constructor(A, K, q) {
      super({
        objectMode: !0
      });
      this.path = A, this.call = K, this.metadata = q, this.pendingStatus = {
        code: TC6.Status.OK,
        details: "OK"
      }, this.cancelled = !1, this.trailingMetadata = new Li7.Metadata(), this.on("error", Y => {
        this.pendingStatus = vC6(Y), this.end();
      });
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(A) {
      this.call.sendMetadata(A);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _read(A) {
      this.call.startRead();
    }
    _write(A, K, q) {
      this.call.sendMessage(A, q);
    }
    _final(A) {
      var K;
      A(null), this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), {
        metadata: (K = this.pendingStatus.metadata) !== null && K !== void 0 ? K : this.trailingMetadata
      }));
    }
    end(A) {
      if (A) this.trailingMetadata = A;
      return super.end();
    }
  }
  hi7.ServerDuplexStreamImpl = Si7;
});

// Register to shared state
__$.xi7 = xi7;
