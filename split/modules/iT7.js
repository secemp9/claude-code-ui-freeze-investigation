// Module: iT7
// Dependencies: mG1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iT7 = v(lT7 => {
  Object.defineProperty(lT7, "__esModule", {
    value: !0
  });
  var UT7 = CA("util"),
    up = __$.mG1();
  class gG1 extends up.AbstractMessageBuffer {
    constructor(A = "utf-8") {
      super(A);
    }
    emptyBuffer() {
      return gG1.emptyBuffer;
    }
    fromString(A, K) {
      return Buffer.from(A, K);
    }
    toString(A, K) {
      if (A instanceof Buffer) return A.toString(K);else return new UT7.TextDecoder(K).decode(A);
    }
    asNative(A, K) {
      if (K === void 0) return A instanceof Buffer ? A : Buffer.from(A);else return A instanceof Buffer ? A.slice(0, K) : Buffer.from(A, 0, K);
    }
    allocNative(A) {
      return Buffer.allocUnsafe(A);
    }
  }
  gG1.emptyBuffer = Buffer.allocUnsafe(0);
  class pT7 {
    constructor(A) {
      this.stream = A;
    }
    onClose(A) {
      return this.stream.on("close", A), up.Disposable.create(() => this.stream.off("close", A));
    }
    onError(A) {
      return this.stream.on("error", A), up.Disposable.create(() => this.stream.off("error", A));
    }
    onEnd(A) {
      return this.stream.on("end", A), up.Disposable.create(() => this.stream.off("end", A));
    }
    onData(A) {
      return this.stream.on("data", A), up.Disposable.create(() => this.stream.off("data", A));
    }
  }
  class dT7 {
    constructor(A) {
      this.stream = A;
    }
    onClose(A) {
      return this.stream.on("close", A), up.Disposable.create(() => this.stream.off("close", A));
    }
    onError(A) {
      return this.stream.on("error", A), up.Disposable.create(() => this.stream.off("error", A));
    }
    onEnd(A) {
      return this.stream.on("end", A), up.Disposable.create(() => this.stream.off("end", A));
    }
    write(A, K) {
      return new Promise((q, Y) => {
        let z = w => {
          if (w === void 0 || w === null) q();else Y(w);
        };
        if (typeof A === "string") this.stream.write(A, K, z);else this.stream.write(A, z);
      });
    }
    end() {
      this.stream.end();
    }
  }
  var cT7 = Object.freeze({
    messageBuffer: Object.freeze({
      create: A => new gG1(A)
    }),
    applicationJson: Object.freeze({
      encoder: Object.freeze({
        name: "application/json",
        encode: (A, K) => {
          try {
            return Promise.resolve(Buffer.from(JSON.stringify(A, void 0, 0), K.charset));
          } catch (q) {
            return Promise.reject(q);
          }
        }
      }),
      decoder: Object.freeze({
        name: "application/json",
        decode: (A, K) => {
          try {
            if (A instanceof Buffer) return Promise.resolve(JSON.parse(A.toString(K.charset)));else return Promise.resolve(JSON.parse(new UT7.TextDecoder(K.charset).decode(A)));
          } catch (q) {
            return Promise.reject(q);
          }
        }
      })
    }),
    stream: Object.freeze({
      asReadableStream: A => new pT7(A),
      asWritableStream: A => new dT7(A)
    }),
    console,
    timer: Object.freeze({
      setTimeout(A, K, ...q) {
        let Y = setTimeout(A, K, ...q);
        return {
          dispose: () => clearTimeout(Y)
        };
      },
      setImmediate(A, ...K) {
        let q = setImmediate(A, ...K);
        return {
          dispose: () => clearImmediate(q)
        };
      },
      setInterval(A, K, ...q) {
        let Y = setInterval(A, K, ...q);
        return {
          dispose: () => clearInterval(Y)
        };
      }
    })
  });
  function Jf6() {
    return cT7;
  }
  (function (A) {
    function K() {
      up.RAL.install(cT7);
    }
    A.install = K;
  })(Jf6 || (Jf6 = {}));
  lT7.default = Jf6;
});

// Register to shared state
__$.iT7 = iT7;
