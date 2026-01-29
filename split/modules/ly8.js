// Module: ly8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ly8 = v((vpz, cy8) => {
  var {
      create: F35,
      defineProperty: dA1,
      getOwnPropertyDescriptor: Q35,
      getOwnPropertyNames: U35,
      getPrototypeOf: p35
    } = Object,
    d35 = Object.prototype.hasOwnProperty,
    c35 = (A, K) => {
      for (var q in K) dA1(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    Fy8 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of U35(K)) if (!d35.call(A, z) && z !== q) dA1(A, z, {
          get: () => K[z],
          enumerable: !(Y = Q35(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    Qy8 = (A, K, q) => (q = A != null ? F35(p35(A)) : {}, Fy8(K || !A || !A.__esModule ? dA1(q, "default", {
      value: A,
      enumerable: !0
    }) : q, A)),
    l35 = A => Fy8(dA1({}, "__esModule", {
      value: !0
    }), A),
    Uy8 = {};
  c35(Uy8, {
    Socks5Server: () => dy8,
    createServer: () => o35,
    defaultConnectionHandler: () => vd1
  });
  cy8.exports = l35(Uy8);
  var i35 = Qy8(CA("net")),
    py8 = (A => {
      return A[A.connect = 1] = "connect", A[A.bind = 2] = "bind", A[A.udp = 3] = "udp", A;
    })(py8 || {}),
    Td1 = (A => {
      return A[A.REQUEST_GRANTED = 0] = "REQUEST_GRANTED", A[A.GENERAL_FAILURE = 1] = "GENERAL_FAILURE", A[A.CONNECTION_NOT_ALLOWED = 2] = "CONNECTION_NOT_ALLOWED", A[A.NETWORK_UNREACHABLE = 3] = "NETWORK_UNREACHABLE", A[A.HOST_UNREACHABLE = 4] = "HOST_UNREACHABLE", A[A.CONNECTION_REFUSED = 5] = "CONNECTION_REFUSED", A[A.TTL_EXPIRED = 6] = "TTL_EXPIRED", A[A.COMMAND_NOT_SUPPORTED = 7] = "COMMAND_NOT_SUPPORTED", A[A.ADDRESS_TYPE_NOT_SUPPORTED = 8] = "ADDRESS_TYPE_NOT_SUPPORTED", A;
    })(Td1 || {}),
    n35 = class {
      constructor(A, K) {
        this.errorHandler = () => {}, this.metadata = {}, this.socket = K, this.server = A, K.on("error", this.errorHandler), K.pause(), this.handleGreeting();
      }
      readBytes(A) {
        return new Promise(K => {
          let q = Buffer.allocUnsafe(A),
            Y = 0,
            z = w => {
              let H = Math.min(w.length, A - Y);
              if (w.copy(q, Y, 0, H), Y += H, Y < A) return;
              this.socket.removeListener("data", z), this.socket.push(w.subarray(H)), K(q), this.socket.pause();
            };
          this.socket.on("data", z), this.socket.resume();
        });
      }
      async handleGreeting() {
        if ((await this.readBytes(1)).readUInt8() !== 5) return this.socket.destroy();
        let K = (await this.readBytes(1)).readUInt8();
        if (K > 128 || K === 0) return this.socket.destroy();
        let q = await this.readBytes(K),
          Y = this.server.authHandler ? 2 : 0;
        if (!q.includes(Y)) return this.socket.write(Buffer.from([5, 255])), this.socket.destroy();
        if (this.socket.write(Buffer.from([5, Y])), this.server.authHandler) this.handleUserPassword();else this.handleConnectionRequest();
      }
      async handleUserPassword() {
        await this.readBytes(1);
        let A = (await this.readBytes(1)).readUint8(),
          K = (await this.readBytes(A)).toString(),
          q = (await this.readBytes(1)).readUint8(),
          Y = (await this.readBytes(q)).toString();
        this.username = K, this.password = Y;
        let z = !1,
          w = () => {
            if (z) return;
            z = !0, this.socket.write(Buffer.from([1, 0])), this.handleConnectionRequest();
          },
          H = () => {
            if (z) return;
            z = !0, this.socket.write(Buffer.from([1, 1])), this.socket.destroy();
          },
          J = await this.server.authHandler(this, w, H);
        if (J === !0) w();else if (J === !1) H();
      }
      async handleConnectionRequest() {
        await this.readBytes(1);
        let A = (await this.readBytes(1))[0],
          K = py8[A];
        if (!K) return this.socket.destroy();
        this.command = K, await this.readBytes(1);
        let q = (await this.readBytes(1)).readUInt8(),
          Y = "";
        switch (q) {
          case 1:
            Y = (await this.readBytes(4)).join(".");
            break;
          case 3:
            let X = (await this.readBytes(1)).readUInt8();
            Y = (await this.readBytes(X)).toString();
            break;
          case 4:
            let $ = await this.readBytes(16);
            for (let _ = 0; _ < 16; _++) {
              if (_ % 2 === 0 && _ > 0) Y += ":";
              Y += `${$[_] < 16 ? "0" : ""}${$[_].toString(16)}`;
            }
            break;
          default:
            this.socket.destroy();
            return;
        }
        let z = (await this.readBytes(2)).readUInt16BE();
        if (!this.server.supportedCommands.has(K)) return this.socket.write(Buffer.from([5, 7])), this.socket.destroy();
        this.destAddress = Y, this.destPort = z;
        let w = !1,
          H = () => {
            if (w) return;
            w = !0, this.connect();
          };
        if (!this.server.rulesetValidator) return H();
        let J = () => {
            if (w) return;
            w = !0, this.socket.write(Buffer.from([5, 2, 0, 1, 0, 0, 0, 0, 0, 0])), this.socket.destroy();
          },
          O = await this.server.rulesetValidator(this, H, J);
        if (O === !0) H();else if (O === !1) J();
      }
      connect() {
        this.socket.removeListener("error", this.errorHandler), this.server.connectionHandler(this, A => {
          if (Td1[A] === void 0) throw Error(`"${A}" is not a valid status.`);
          if (this.socket.write(Buffer.from([5, Td1[A], 0, 1, 0, 0, 0, 0, 0, 0])), A !== "REQUEST_GRANTED") this.socket.destroy();
        }), this.socket.resume();
      }
    },
    r35 = Qy8(CA("net"));
  function vd1(A, K) {
    if (A.command !== "connect") return K("COMMAND_NOT_SUPPORTED");
    A.socket.on("error", () => {});
    let q = r35.default.createConnection({
      host: A.destAddress,
      port: A.destPort
    });
    q.setNoDelay();
    let Y = !1;
    return q.on("error", z => {
      if (!Y) switch (z.code) {
        case "EINVAL":
        case "ENOENT":
        case "ENOTFOUND":
        case "ETIMEDOUT":
        case "EADDRNOTAVAIL":
        case "EHOSTUNREACH":
          K("HOST_UNREACHABLE");
          break;
        case "ENETUNREACH":
          K("NETWORK_UNREACHABLE");
          break;
        case "ECONNREFUSED":
          K("CONNECTION_REFUSED");
          break;
        default:
          K("GENERAL_FAILURE");
      }
    }), q.on("ready", () => {
      Y = !0, K("REQUEST_GRANTED"), A.socket.pipe(q).pipe(A.socket);
    }), A.socket.on("close", () => q.destroy()), q;
  }
  var dy8 = class {
    constructor() {
      this.supportedCommands = new Set(["connect"]), this.connectionHandler = vd1, this.server = i35.default.createServer(A => {
        A.setNoDelay(), this._handleConnection(A);
      });
    }
    listen(...A) {
      return this.server.listen(...A), this;
    }
    close(A) {
      return this.server.close(A), this;
    }
    setAuthHandler(A) {
      return this.authHandler = A, this;
    }
    disableAuthHandler() {
      return this.authHandler = void 0, this;
    }
    setRulesetValidator(A) {
      return this.rulesetValidator = A, this;
    }
    disableRulesetValidator() {
      return this.rulesetValidator = void 0, this;
    }
    setConnectionHandler(A) {
      return this.connectionHandler = A, this;
    }
    useDefaultConnectionHandler() {
      return this.connectionHandler = vd1, this;
    }
    _handleConnection(A) {
      return new n35(this, A), this;
    }
  };
  function o35(A) {
    let K = new dy8();
    if (A?.auth) K.setAuthHandler(q => {
      return q.username === A.auth.username && q.password === A.auth.password;
    });
    if (A?.port) K.listen(A.port, A.hostname);
    return K;
  }
});

// Register to shared state
__$.ly8 = ly8;
