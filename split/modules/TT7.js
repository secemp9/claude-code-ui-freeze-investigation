// Module: TT7
// Dependencies: $s, SWA, lV6, hWA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TT7 = v(fT7 => {
  Object.defineProperty(fT7, "__esModule", {
    value: !0
  });
  fT7.WriteableStreamMessageWriter = fT7.AbstractMessageWriter = fT7.MessageWriter = void 0;
  var DT7 = __$.$s(),
    LmA = __$.SWA(),
    xBY = __$.lV6(),
    jT7 = __$.hWA(),
    uBY = "Content-Length: ",
    MT7 = `\r
`,
    PT7;
  (function (A) {
    function K(q) {
      let Y = q;
      return Y && LmA.func(Y.dispose) && LmA.func(Y.onClose) && LmA.func(Y.onError) && LmA.func(Y.write);
    }
    A.is = K;
  })(PT7 || (fT7.MessageWriter = PT7 = {}));
  class sV6 {
    constructor() {
      this.errorEmitter = new jT7.Emitter(), this.closeEmitter = new jT7.Emitter();
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(A, K, q) {
      this.errorEmitter.fire([this.asError(A), K, q]);
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    asError(A) {
      if (A instanceof Error) return A;else return Error(`Writer received error. Reason: ${LmA.string(A.message) ? A.message : "unknown"}`);
    }
  }
  fT7.AbstractMessageWriter = sV6;
  var aV6;
  (function (A) {
    function K(q) {
      if (q === void 0 || typeof q === "string") return {
        charset: q ?? "utf-8",
        contentTypeEncoder: (0, DT7.default)().applicationJson.encoder
      };else return {
        charset: q.charset ?? "utf-8",
        contentEncoder: q.contentEncoder,
        contentTypeEncoder: q.contentTypeEncoder ?? (0, DT7.default)().applicationJson.encoder
      };
    }
    A.fromOptions = K;
  })(aV6 || (aV6 = {}));
  class VT7 extends sV6 {
    constructor(A, K) {
      super();
      this.writable = A, this.options = aV6.fromOptions(K), this.errorCount = 0, this.writeSemaphore = new xBY.Semaphore(1), this.writable.onError(q => this.fireError(q)), this.writable.onClose(() => this.fireClose());
    }
    async write(A) {
      return this.writeSemaphore.lock(async () => {
        return this.options.contentTypeEncoder.encode(A, this.options).then(q => {
          if (this.options.contentEncoder !== void 0) return this.options.contentEncoder.encode(q);else return q;
        }).then(q => {
          let Y = [];
          return Y.push(uBY, q.byteLength.toString(), MT7), Y.push(MT7), this.doWrite(A, Y, q);
        }, q => {
          throw this.fireError(q), q;
        });
      });
    }
    async doWrite(A, K, q) {
      try {
        return await this.writable.write(K.join(""), "ascii"), this.writable.write(q);
      } catch (Y) {
        return this.handleError(Y, A), Promise.reject(Y);
      }
    }
    handleError(A, K) {
      this.errorCount++, this.fireError(A, K, this.errorCount);
    }
    end() {
      this.writable.end();
    }
  }
  fT7.WriteableStreamMessageWriter = VT7;
});

// Register to shared state
__$.TT7 = TT7;
