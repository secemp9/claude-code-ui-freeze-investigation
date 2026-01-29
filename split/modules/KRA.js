// Module: KRA
// Dependencies: V1A, e16, p74

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KRA = v(Mk => {
  var Wu3 = Mk && Mk.__createBinding || (Object.create ? function (A, K, q, Y) {
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
    Du3 = Mk && Mk.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    i74 = Mk && Mk.__importStar || function (A) {
      if (A && A.__esModule) return A;
      var K = {};
      if (A != null) {
        for (var q in A) if (q !== "default" && Object.prototype.hasOwnProperty.call(A, q)) Wu3(K, A, q);
      }
      return Du3(K, A), K;
    },
    n74 = Mk && Mk.__importDefault || function (A) {
      return A && A.__esModule ? A : {
        default: A
      };
    };
  Object.defineProperty(Mk, "__esModule", {
    value: !0
  });
  Mk.HttpsProxyAgent = void 0;
  var b71 = i74(CA("net")),
    d74 = i74(CA("tls")),
    ju3 = n74(CA("assert")),
    Mu3 = n74(__$.V1A()),
    Pu3 = __$.e16(),
    Vu3 = CA("url"),
    fu3 = __$.p74(),
    ARA = (0, Mu3.default)("https-proxy-agent"),
    c74 = A => {
      if (A.servername === void 0 && A.host && !b71.isIP(A.host)) return {
        ...A,
        servername: A.host
      };
      return A;
    };
  class A66 extends Pu3.Agent {
    constructor(A, K) {
      super(K);
      this.options = {
        path: void 0
      }, this.proxy = typeof A === "string" ? new Vu3.URL(A) : A, this.proxyHeaders = K?.headers ?? {}, ARA("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
      let q = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        Y = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ALPNProtocols: ["http/1.1"],
        ...(K ? l74(K, "headers") : null),
        host: q,
        port: Y
      };
    }
    async connect(A, K) {
      let {
        proxy: q
      } = this;
      if (!K.host) throw TypeError('No "host" provided');
      let Y;
      if (q.protocol === "https:") ARA("Creating `tls.Socket`: %o", this.connectOpts), Y = d74.connect(c74(this.connectOpts));else ARA("Creating `net.Socket`: %o", this.connectOpts), Y = b71.connect(this.connectOpts);
      let z = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
          ...this.proxyHeaders
        },
        w = b71.isIPv6(K.host) ? `[${K.host}]` : K.host,
        H = `CONNECT ${w}:${K.port} HTTP/1.1\r
`;
      if (q.username || q.password) {
        let _ = `${decodeURIComponent(q.username)}:${decodeURIComponent(q.password)}`;
        z["Proxy-Authorization"] = `Basic ${Buffer.from(_).toString("base64")}`;
      }
      if (z.Host = `${w}:${K.port}`, !z["Proxy-Connection"]) z["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let _ of Object.keys(z)) H += `${_}: ${z[_]}\r
`;
      let J = (0, fu3.parseProxyResponse)(Y);
      Y.write(`${H}\r
`);
      let {
        connect: O,
        buffered: X
      } = await J;
      if (A.emit("proxyConnect", O), this.emit("proxyConnect", O, A), O.statusCode === 200) {
        if (A.once("socket", Nu3), K.secureEndpoint) return ARA("Upgrading socket connection to TLS"), d74.connect({
          ...l74(c74(K), "host", "path", "port"),
          socket: Y
        });
        return Y;
      }
      Y.destroy();
      let $ = new b71.Socket({
        writable: !1
      });
      return $.readable = !0, A.once("socket", _ => {
        ARA("Replaying proxy buffer for failed request"), (0, ju3.default)(_.listenerCount("data") > 0), _.push(X), _.push(null);
      }), $;
    }
  }
  A66.protocols = ["http", "https"];
  Mk.HttpsProxyAgent = A66;
  function Nu3(A) {
    A.resume();
  }
  function l74(A, ...K) {
    let q = {},
      Y;
    for (Y in A) if (!K.includes(Y)) q[Y] = A[Y];
    return q;
  }
});

// Register to shared state
__$.KRA = KRA;
