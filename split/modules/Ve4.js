// Module: Ve4
// Dependencies: V1A, e16

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ve4 = v(WC => {
  var b1Y = WC && WC.__createBinding || (Object.create ? function (A, K, q, Y) {
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
    x1Y = WC && WC.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    Pe4 = WC && WC.__importStar || function (A) {
      if (A && A.__esModule) return A;
      var K = {};
      if (A != null) {
        for (var q in A) if (q !== "default" && Object.prototype.hasOwnProperty.call(A, q)) b1Y(K, A, q);
      }
      return x1Y(K, A), K;
    },
    u1Y = WC && WC.__importDefault || function (A) {
      return A && A.__esModule ? A : {
        default: A
      };
    };
  Object.defineProperty(WC, "__esModule", {
    value: !0
  });
  WC.HttpProxyAgent = void 0;
  var B1Y = Pe4(CA("net")),
    m1Y = Pe4(CA("tls")),
    g1Y = u1Y(__$.V1A()),
    F1Y = CA("events"),
    Q1Y = __$.e16(),
    Me4 = CA("url"),
    x_A = (0, g1Y.default)("http-proxy-agent");
  class FO6 extends Q1Y.Agent {
    constructor(A, K) {
      super(K);
      this.proxy = typeof A === "string" ? new Me4.URL(A) : A, this.proxyHeaders = K?.headers ?? {}, x_A("Creating new HttpProxyAgent instance: %o", this.proxy.href);
      let q = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        Y = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ...(K ? U1Y(K, "headers") : null),
        host: q,
        port: Y
      };
    }
    addRequest(A, K) {
      A._header = null, this.setRequestProps(A, K), super.addRequest(A, K);
    }
    setRequestProps(A, K) {
      let {
          proxy: q
        } = this,
        Y = K.secureEndpoint ? "https:" : "http:",
        z = A.getHeader("host") || "localhost",
        w = `${Y}//${z}`,
        H = new Me4.URL(A.path, w);
      if (K.port !== 80) H.port = String(K.port);
      A.path = String(H);
      let J = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
        ...this.proxyHeaders
      };
      if (q.username || q.password) {
        let O = `${decodeURIComponent(q.username)}:${decodeURIComponent(q.password)}`;
        J["Proxy-Authorization"] = `Basic ${Buffer.from(O).toString("base64")}`;
      }
      if (!J["Proxy-Connection"]) J["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let O of Object.keys(J)) {
        let X = J[O];
        if (X) A.setHeader(O, X);
      }
    }
    async connect(A, K) {
      if (A._header = null, !A.path.includes("://")) this.setRequestProps(A, K);
      let q, Y;
      if (x_A("Regenerating stored HTTP header string for request"), A._implicitHeader(), A.outputData && A.outputData.length > 0) x_A("Patching connection write() output buffer with updated header"), q = A.outputData[0].data, Y = q.indexOf(`\r
\r
`) + 4, A.outputData[0].data = A._header + q.substring(Y), x_A("Output buffer: %o", A.outputData[0].data);
      let z;
      if (this.proxy.protocol === "https:") x_A("Creating `tls.Socket`: %o", this.connectOpts), z = m1Y.connect(this.connectOpts);else x_A("Creating `net.Socket`: %o", this.connectOpts), z = B1Y.connect(this.connectOpts);
      return await (0, F1Y.once)(z, "connect"), z;
    }
  }
  FO6.protocols = ["http", "https"];
  WC.HttpProxyAgent = FO6;
  function U1Y(A, ...K) {
    let q = {},
      Y;
    for (Y in A) if (!K.includes(Y)) q[Y] = A[Y];
    return q;
  }
});

// Register to shared state
__$.Ve4 = Ve4;
