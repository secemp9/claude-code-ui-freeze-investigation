// Module: KC6
// Dependencies: tk6, K9, ek6, Lw

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KC6 = v(Jl7 => {
  Object.defineProperty(Jl7, "__esModule", {
    value: !0
  });
  Jl7.CompressionFilterFactory = Jl7.CompressionFilter = void 0;
  var Zj1 = CA("zlib"),
    ql7 = __$.tk6(),
    DjA = __$.K9(),
    _22 = __$.ek6(),
    G22 = __$.Lw(),
    Z22 = A => {
      return typeof A === "number" && typeof ql7.CompressionAlgorithms[A] === "string";
    };
  class WFA {
    async writeMessage(A, K) {
      let q = A;
      if (K) q = await this.compressMessage(q);
      let Y = Buffer.allocUnsafe(q.length + 5);
      return Y.writeUInt8(K ? 1 : 0, 0), Y.writeUInt32BE(q.length, 1), q.copy(Y, 5), Y;
    }
    async readMessage(A) {
      let K = A.readUInt8(0) === 1,
        q = A.slice(5);
      if (K) q = await this.decompressMessage(q);
      return q;
    }
  }
  class jjA extends WFA {
    async compressMessage(A) {
      return A;
    }
    async writeMessage(A, K) {
      let q = Buffer.allocUnsafe(A.length + 5);
      return q.writeUInt8(0, 0), q.writeUInt32BE(A.length, 1), A.copy(q, 5), q;
    }
    decompressMessage(A) {
      return Promise.reject(Error('Received compressed message but "grpc-encoding" header was identity'));
    }
  }
  class Yl7 extends WFA {
    constructor(A) {
      super();
      this.maxRecvMessageLength = A;
    }
    compressMessage(A) {
      return new Promise((K, q) => {
        Zj1.deflate(A, (Y, z) => {
          if (Y) q(Y);else K(z);
        });
      });
    }
    decompressMessage(A) {
      return new Promise((K, q) => {
        let Y = 0,
          z = [],
          w = Zj1.createInflate();
        w.on("data", H => {
          if (z.push(H), Y += H.byteLength, this.maxRecvMessageLength !== -1 && Y > this.maxRecvMessageLength) w.destroy(), q({
            code: DjA.Status.RESOURCE_EXHAUSTED,
            details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
          });
        }), w.on("end", () => {
          K(Buffer.concat(z));
        }), w.write(A), w.end();
      });
    }
  }
  class zl7 extends WFA {
    constructor(A) {
      super();
      this.maxRecvMessageLength = A;
    }
    compressMessage(A) {
      return new Promise((K, q) => {
        Zj1.gzip(A, (Y, z) => {
          if (Y) q(Y);else K(z);
        });
      });
    }
    decompressMessage(A) {
      return new Promise((K, q) => {
        let Y = 0,
          z = [],
          w = Zj1.createGunzip();
        w.on("data", H => {
          if (z.push(H), Y += H.byteLength, this.maxRecvMessageLength !== -1 && Y > this.maxRecvMessageLength) w.destroy(), q({
            code: DjA.Status.RESOURCE_EXHAUSTED,
            details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
          });
        }), w.on("end", () => {
          K(Buffer.concat(z));
        }), w.write(A), w.end();
      });
    }
  }
  class wl7 extends WFA {
    constructor(A) {
      super();
      this.compressionName = A;
    }
    compressMessage(A) {
      return Promise.reject(Error(`Received message compressed with unsupported compression method ${this.compressionName}`));
    }
    decompressMessage(A) {
      return Promise.reject(Error(`Compression method not supported: ${this.compressionName}`));
    }
  }
  function Kl7(A, K) {
    switch (A) {
      case "identity":
        return new jjA();
      case "deflate":
        return new Yl7(K);
      case "gzip":
        return new zl7(K);
      default:
        return new wl7(A);
    }
  }
  class AC6 extends _22.BaseFilter {
    constructor(A, K) {
      var q, Y, z;
      super();
      this.sharedFilterConfig = K, this.sendCompression = new jjA(), this.receiveCompression = new jjA(), this.currentCompressionAlgorithm = "identity";
      let w = A["grpc.default_compression_algorithm"];
      if (this.maxReceiveMessageLength = (q = A["grpc.max_receive_message_length"]) !== null && q !== void 0 ? q : DjA.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH, this.maxSendMessageLength = (Y = A["grpc.max_send_message_length"]) !== null && Y !== void 0 ? Y : DjA.DEFAULT_MAX_SEND_MESSAGE_LENGTH, w !== void 0) if (Z22(w)) {
        let H = ql7.CompressionAlgorithms[w],
          J = (z = K.serverSupportedEncodingHeader) === null || z === void 0 ? void 0 : z.split(",");
        if (!J || J.includes(H)) this.currentCompressionAlgorithm = H, this.sendCompression = Kl7(this.currentCompressionAlgorithm, -1);
      } else G22.log(DjA.LogVerbosity.ERROR, `Invalid value provided for grpc.default_compression_algorithm option: ${w}`);
    }
    async sendMetadata(A) {
      let K = await A;
      if (K.set("grpc-accept-encoding", "identity,deflate,gzip"), K.set("accept-encoding", "identity"), this.currentCompressionAlgorithm === "identity") K.remove("grpc-encoding");else K.set("grpc-encoding", this.currentCompressionAlgorithm);
      return K;
    }
    receiveMetadata(A) {
      let K = A.get("grpc-encoding");
      if (K.length > 0) {
        let Y = K[0];
        if (typeof Y === "string") this.receiveCompression = Kl7(Y, this.maxReceiveMessageLength);
      }
      A.remove("grpc-encoding");
      let q = A.get("grpc-accept-encoding")[0];
      if (q) {
        if (this.sharedFilterConfig.serverSupportedEncodingHeader = q, !q.split(",").includes(this.currentCompressionAlgorithm)) this.sendCompression = new jjA(), this.currentCompressionAlgorithm = "identity";
      }
      return A.remove("grpc-accept-encoding"), A;
    }
    async sendMessage(A) {
      var K;
      let q = await A;
      if (this.maxSendMessageLength !== -1 && q.message.length > this.maxSendMessageLength) throw {
        code: DjA.Status.RESOURCE_EXHAUSTED,
        details: `Attempted to send message with a size larger than ${this.maxSendMessageLength}`
      };
      let Y;
      if (this.sendCompression instanceof jjA) Y = !1;else Y = (((K = q.flags) !== null && K !== void 0 ? K : 0) & 2) === 0;
      return {
        message: await this.sendCompression.writeMessage(q.message, Y),
        flags: q.flags
      };
    }
    async receiveMessage(A) {
      return this.receiveCompression.readMessage(await A);
    }
  }
  Jl7.CompressionFilter = AC6;
  class Hl7 {
    constructor(A, K) {
      this.options = K, this.sharedFilterConfig = {};
    }
    createFilter() {
      return new AC6(this.options, this.sharedFilterConfig);
    }
  }
  Jl7.CompressionFilterFactory = Hl7;
});

// Register to shared state
__$.KC6 = KC6;
