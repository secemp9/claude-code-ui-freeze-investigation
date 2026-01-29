// Module: Vp7
// Dependencies: K9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vp7 = v(Mp7 => {
  Object.defineProperty(Mp7, "__esModule", {
    value: !0
  });
  Mp7.ClientDuplexStreamImpl = Mp7.ClientWritableStreamImpl = Mp7.ClientReadableStreamImpl = Mp7.ClientUnaryCallImpl = void 0;
  Mp7.callErrorFromStatus = D52;
  var W52 = CA("events"),
    rE6 = CA("stream"),
    ogA = __$.K9();
  function D52(A, K) {
    let q = `${A.code} ${ogA.Status[A.code]}: ${A.details}`,
      z = `${Error(q).stack}
for call at
${K}`;
    return Object.assign(Error(q), A, {
      stack: z
    });
  }
  class Zp7 extends W52.EventEmitter {
    constructor() {
      super();
    }
    cancel() {
      var A;
      (A = this.call) === null || A === void 0 || A.cancelWithStatus(ogA.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var A, K;
      return (K = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null && K !== void 0 ? K : "unknown";
    }
    getAuthContext() {
      var A, K;
      return (K = (A = this.call) === null || A === void 0 ? void 0 : A.getAuthContext()) !== null && K !== void 0 ? K : null;
    }
  }
  Mp7.ClientUnaryCallImpl = Zp7;
  class Wp7 extends rE6.Readable {
    constructor(A) {
      super({
        objectMode: !0
      });
      this.deserialize = A;
    }
    cancel() {
      var A;
      (A = this.call) === null || A === void 0 || A.cancelWithStatus(ogA.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var A, K;
      return (K = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null && K !== void 0 ? K : "unknown";
    }
    getAuthContext() {
      var A, K;
      return (K = (A = this.call) === null || A === void 0 ? void 0 : A.getAuthContext()) !== null && K !== void 0 ? K : null;
    }
    _read(A) {
      var K;
      (K = this.call) === null || K === void 0 || K.startRead();
    }
  }
  Mp7.ClientReadableStreamImpl = Wp7;
  class Dp7 extends rE6.Writable {
    constructor(A) {
      super({
        objectMode: !0
      });
      this.serialize = A;
    }
    cancel() {
      var A;
      (A = this.call) === null || A === void 0 || A.cancelWithStatus(ogA.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var A, K;
      return (K = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null && K !== void 0 ? K : "unknown";
    }
    getAuthContext() {
      var A, K;
      return (K = (A = this.call) === null || A === void 0 ? void 0 : A.getAuthContext()) !== null && K !== void 0 ? K : null;
    }
    _write(A, K, q) {
      var Y;
      let z = {
          callback: q
        },
        w = Number(K);
      if (!Number.isNaN(w)) z.flags = w;
      (Y = this.call) === null || Y === void 0 || Y.sendMessageWithContext(z, A);
    }
    _final(A) {
      var K;
      (K = this.call) === null || K === void 0 || K.halfClose(), A();
    }
  }
  Mp7.ClientWritableStreamImpl = Dp7;
  class jp7 extends rE6.Duplex {
    constructor(A, K) {
      super({
        objectMode: !0
      });
      this.serialize = A, this.deserialize = K;
    }
    cancel() {
      var A;
      (A = this.call) === null || A === void 0 || A.cancelWithStatus(ogA.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var A, K;
      return (K = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null && K !== void 0 ? K : "unknown";
    }
    getAuthContext() {
      var A, K;
      return (K = (A = this.call) === null || A === void 0 ? void 0 : A.getAuthContext()) !== null && K !== void 0 ? K : null;
    }
    _read(A) {
      var K;
      (K = this.call) === null || K === void 0 || K.startRead();
    }
    _write(A, K, q) {
      var Y;
      let z = {
          callback: q
        },
        w = Number(K);
      if (!Number.isNaN(w)) z.flags = w;
      (Y = this.call) === null || Y === void 0 || Y.sendMessageWithContext(z, A);
    }
    _final(A) {
      var K;
      (K = this.call) === null || K === void 0 || K.halfClose(), A();
    }
  }
  Mp7.ClientDuplexStreamImpl = jp7;
});

// Register to shared state
__$.Vp7 = Vp7;
