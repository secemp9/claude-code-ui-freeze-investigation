// Module: WT7
// Dependencies: $s, SWA, hWA, lV6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WT7 = v(GT7 => {
  Object.defineProperty(GT7, "__esModule", {
    value: !0
  });
  GT7.ReadableStreamMessageReader = GT7.AbstractMessageReader = GT7.MessageReader = void 0;
  var nV6 = __$.$s(),
    bWA = __$.SWA(),
    iV6 = __$.hWA(),
    SBY = __$.lV6(),
    $T7;
  (function (A) {
    function K(q) {
      let Y = q;
      return Y && bWA.func(Y.listen) && bWA.func(Y.dispose) && bWA.func(Y.onError) && bWA.func(Y.onClose) && bWA.func(Y.onPartialMessage);
    }
    A.is = K;
  })($T7 || (GT7.MessageReader = $T7 = {}));
  class oV6 {
    constructor() {
      this.errorEmitter = new iV6.Emitter(), this.closeEmitter = new iV6.Emitter(), this.partialMessageEmitter = new iV6.Emitter();
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(A) {
      this.errorEmitter.fire(this.asError(A));
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    get onPartialMessage() {
      return this.partialMessageEmitter.event;
    }
    firePartialMessage(A) {
      this.partialMessageEmitter.fire(A);
    }
    asError(A) {
      if (A instanceof Error) return A;else return Error(`Reader received error. Reason: ${bWA.string(A.message) ? A.message : "unknown"}`);
    }
  }
  GT7.AbstractMessageReader = oV6;
  var rV6;
  (function (A) {
    function K(q) {
      let Y,
        z,
        w,
        H = new Map(),
        J,
        O = new Map();
      if (q === void 0 || typeof q === "string") Y = q ?? "utf-8";else {
        if (Y = q.charset ?? "utf-8", q.contentDecoder !== void 0) w = q.contentDecoder, H.set(w.name, w);
        if (q.contentDecoders !== void 0) for (let X of q.contentDecoders) H.set(X.name, X);
        if (q.contentTypeDecoder !== void 0) J = q.contentTypeDecoder, O.set(J.name, J);
        if (q.contentTypeDecoders !== void 0) for (let X of q.contentTypeDecoders) O.set(X.name, X);
      }
      if (J === void 0) J = (0, nV6.default)().applicationJson.decoder, O.set(J.name, J);
      return {
        charset: Y,
        contentDecoder: w,
        contentDecoders: H,
        contentTypeDecoder: J,
        contentTypeDecoders: O
      };
    }
    A.fromOptions = K;
  })(rV6 || (rV6 = {}));
  class _T7 extends oV6 {
    constructor(A, K) {
      super();
      this.readable = A, this.options = rV6.fromOptions(K), this.buffer = (0, nV6.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new SBY.Semaphore(1);
    }
    set partialMessageTimeout(A) {
      this._partialMessageTimeout = A;
    }
    get partialMessageTimeout() {
      return this._partialMessageTimeout;
    }
    listen(A) {
      this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = A;
      let K = this.readable.onData(q => {
        this.onData(q);
      });
      return this.readable.onError(q => this.fireError(q)), this.readable.onClose(() => this.fireClose()), K;
    }
    onData(A) {
      try {
        this.buffer.append(A);
        while (!0) {
          if (this.nextMessageLength === -1) {
            let q = this.buffer.tryReadHeaders(!0);
            if (!q) return;
            let Y = q.get("content-length");
            if (!Y) {
              this.fireError(Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(q))}`));
              return;
            }
            let z = parseInt(Y);
            if (isNaN(z)) {
              this.fireError(Error(`Content-Length value must be a number. Got ${Y}`));
              return;
            }
            this.nextMessageLength = z;
          }
          let K = this.buffer.tryReadBody(this.nextMessageLength);
          if (K === void 0) {
            this.setPartialMessageTimer();
            return;
          }
          this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
            let q = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(K) : K,
              Y = await this.options.contentTypeDecoder.decode(q, this.options);
            this.callback(Y);
          }).catch(q => {
            this.fireError(q);
          });
        }
      } catch (K) {
        this.fireError(K);
      }
    }
    clearPartialMessageTimer() {
      if (this.partialMessageTimer) this.partialMessageTimer.dispose(), this.partialMessageTimer = void 0;
    }
    setPartialMessageTimer() {
      if (this.clearPartialMessageTimer(), this._partialMessageTimeout <= 0) return;
      this.partialMessageTimer = (0, nV6.default)().timer.setTimeout((A, K) => {
        if (this.partialMessageTimer = void 0, A === this.messageToken) this.firePartialMessage({
          messageToken: A,
          waitingTime: K
        }), this.setPartialMessageTimer();
      }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
    }
  }
  GT7.ReadableStreamMessageReader = _T7;
});

// Register to shared state
__$.WT7 = WT7;
