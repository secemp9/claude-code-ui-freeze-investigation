// Module: eT7
// Dependencies: iT7, mG1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eT7 = v(XY => {
  var $mY = XY && XY.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      var z = Object.getOwnPropertyDescriptor(K, q);
      if (!z || ("get" in z ? !K.__esModule : z.writable || z.configurable)) z = {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      };
      Object.defineProperty(A, Y, z);
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    _mY = XY && XY.__exportStar || function (A, K) {
      for (var q in A) if (q !== "default" && !Object.prototype.hasOwnProperty.call(K, q)) $mY(K, A, q);
    };
  Object.defineProperty(XY, "__esModule", {
    value: !0
  });
  XY.createMessageConnection = XY.createServerSocketTransport = XY.createClientSocketTransport = XY.createServerPipeTransport = XY.createClientPipeTransport = XY.generateRandomPipeName = XY.StreamMessageWriter = XY.StreamMessageReader = XY.SocketMessageWriter = XY.SocketMessageReader = XY.PortMessageWriter = XY.PortMessageReader = XY.IPCMessageWriter = XY.IPCMessageReader = void 0;
  var uWA = __$.iT7();
  uWA.default.install();
  var nT7 = CA("path"),
    GmY = CA("os"),
    ZmY = CA("crypto"),
    FG1 = CA("net"),
    qv = __$.mG1();
  _mY(__$.mG1(), XY);
  class oT7 extends qv.AbstractMessageReader {
    constructor(A) {
      super();
      this.process = A;
      let K = this.process;
      K.on("error", q => this.fireError(q)), K.on("close", () => this.fireClose());
    }
    listen(A) {
      return this.process.on("message", A), qv.Disposable.create(() => this.process.off("message", A));
    }
  }
  XY.IPCMessageReader = oT7;
  class aT7 extends qv.AbstractMessageWriter {
    constructor(A) {
      super();
      this.process = A, this.errorCount = 0;
      let K = this.process;
      K.on("error", q => this.fireError(q)), K.on("close", () => this.fireClose);
    }
    write(A) {
      try {
        if (typeof this.process.send === "function") this.process.send(A, void 0, void 0, K => {
          if (K) this.errorCount++, this.handleError(K, A);else this.errorCount = 0;
        });
        return Promise.resolve();
      } catch (K) {
        return this.handleError(K, A), Promise.reject(K);
      }
    }
    handleError(A, K) {
      this.errorCount++, this.fireError(A, K, this.errorCount);
    }
    end() {}
  }
  XY.IPCMessageWriter = aT7;
  class sT7 extends qv.AbstractMessageReader {
    constructor(A) {
      super();
      this.onData = new qv.Emitter(), A.on("close", () => this.fireClose), A.on("error", K => this.fireError(K)), A.on("message", K => {
        this.onData.fire(K);
      });
    }
    listen(A) {
      return this.onData.event(A);
    }
  }
  XY.PortMessageReader = sT7;
  class tT7 extends qv.AbstractMessageWriter {
    constructor(A) {
      super();
      this.port = A, this.errorCount = 0, A.on("close", () => this.fireClose()), A.on("error", K => this.fireError(K));
    }
    write(A) {
      try {
        return this.port.postMessage(A), Promise.resolve();
      } catch (K) {
        return this.handleError(K, A), Promise.reject(K);
      }
    }
    handleError(A, K) {
      this.errorCount++, this.fireError(A, K, this.errorCount);
    }
    end() {}
  }
  XY.PortMessageWriter = tT7;
  class BWA extends qv.ReadableStreamMessageReader {
    constructor(A, K = "utf-8") {
      super((0, uWA.default)().stream.asReadableStream(A), K);
    }
  }
  XY.SocketMessageReader = BWA;
  class mWA extends qv.WriteableStreamMessageWriter {
    constructor(A, K) {
      super((0, uWA.default)().stream.asWritableStream(A), K);
      this.socket = A;
    }
    dispose() {
      super.dispose(), this.socket.destroy();
    }
  }
  XY.SocketMessageWriter = mWA;
  class Of6 extends qv.ReadableStreamMessageReader {
    constructor(A, K) {
      super((0, uWA.default)().stream.asReadableStream(A), K);
    }
  }
  XY.StreamMessageReader = Of6;
  class Xf6 extends qv.WriteableStreamMessageWriter {
    constructor(A, K) {
      super((0, uWA.default)().stream.asWritableStream(A), K);
    }
  }
  XY.StreamMessageWriter = Xf6;
  var rT7 = process.env.XDG_RUNTIME_DIR,
    WmY = new Map([["linux", 107], ["darwin", 103]]);
  function DmY() {
    let A = (0, ZmY.randomBytes)(21).toString("hex");
    if (process.platform === "win32") return `\\\\.\\pipe\\vscode-jsonrpc-${A}-sock`;
    let K;
    if (rT7) K = nT7.join(rT7, `vscode-ipc-${A}.sock`);else K = nT7.join(GmY.tmpdir(), `vscode-${A}.sock`);
    let q = WmY.get(process.platform);
    if (q !== void 0 && K.length > q) (0, uWA.default)().console.warn(`WARNING: IPC handle "${K}" is longer than ${q} characters.`);
    return K;
  }
  XY.generateRandomPipeName = DmY;
  function jmY(A, K = "utf-8") {
    let q,
      Y = new Promise((z, w) => {
        q = z;
      });
    return new Promise((z, w) => {
      let H = (0, FG1.createServer)(J => {
        H.close(), q([new BWA(J, K), new mWA(J, K)]);
      });
      H.on("error", w), H.listen(A, () => {
        H.removeListener("error", w), z({
          onConnected: () => {
            return Y;
          }
        });
      });
    });
  }
  XY.createClientPipeTransport = jmY;
  function MmY(A, K = "utf-8") {
    let q = (0, FG1.createConnection)(A);
    return [new BWA(q, K), new mWA(q, K)];
  }
  XY.createServerPipeTransport = MmY;
  function PmY(A, K = "utf-8") {
    let q,
      Y = new Promise((z, w) => {
        q = z;
      });
    return new Promise((z, w) => {
      let H = (0, FG1.createServer)(J => {
        H.close(), q([new BWA(J, K), new mWA(J, K)]);
      });
      H.on("error", w), H.listen(A, "127.0.0.1", () => {
        H.removeListener("error", w), z({
          onConnected: () => {
            return Y;
          }
        });
      });
    });
  }
  XY.createClientSocketTransport = PmY;
  function VmY(A, K = "utf-8") {
    let q = (0, FG1.createConnection)(A, "127.0.0.1");
    return [new BWA(q, K), new mWA(q, K)];
  }
  XY.createServerSocketTransport = VmY;
  function fmY(A) {
    let K = A;
    return K.read !== void 0 && K.addListener !== void 0;
  }
  function NmY(A) {
    let K = A;
    return K.write !== void 0 && K.addListener !== void 0;
  }
  function TmY(A, K, q, Y) {
    if (!q) q = qv.NullLogger;
    let z = fmY(A) ? new Of6(A) : A,
      w = NmY(K) ? new Xf6(K) : K;
    if (qv.ConnectionStrategy.is(Y)) Y = {
      connectionStrategy: Y
    };
    return (0, qv.createMessageConnection)(z, w, q, Y);
  }
  XY.createMessageConnection = TmY;
});

// Register to shared state
__$.eT7 = eT7;
