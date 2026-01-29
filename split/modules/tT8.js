// Module: tT8
// Dependencies: H8, iT8, rT8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tT8 = v(sT8 => {
  var {
    _nullishCoalesce: caq,
    _optionalChain: laq
  } = __$.H8();
  Object.defineProperty(sT8, "__esModule", {
    value: !0
  });
  var lvA = CA("net"),
    oT8 = CA("tls"),
    iaq = CA("url"),
    naq = __$.H8(),
    raq = __$.iT8(),
    oaq = __$.rT8();
  function ivA(...A) {
    naq.logger.log("[https-proxy-agent]", ...A);
  }
  class km1 extends raq.Agent {
    static __initStatic() {
      this.protocols = ["http", "https"];
    }
    constructor(A, K) {
      super(K);
      this.options = {}, this.proxy = typeof A === "string" ? new iaq.URL(A) : A, this.proxyHeaders = caq(laq([K, "optionalAccess", z => z.headers]), () => ({})), ivA("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
      let q = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        Y = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ALPNProtocols: ["http/1.1"],
        ...(K ? aT8(K, "headers") : null),
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
      if (q.protocol === "https:") {
        ivA("Creating `tls.Socket`: %o", this.connectOpts);
        let _ = this.connectOpts.servername || this.connectOpts.host;
        Y = oT8.connect({
          ...this.connectOpts,
          servername: _ && lvA.isIP(_) ? void 0 : _
        });
      } else ivA("Creating `net.Socket`: %o", this.connectOpts), Y = lvA.connect(this.connectOpts);
      let z = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
          ...this.proxyHeaders
        },
        w = lvA.isIPv6(K.host) ? `[${K.host}]` : K.host,
        H = `CONNECT ${w}:${K.port} HTTP/1.1\r
`;
      if (q.username || q.password) {
        let _ = `${decodeURIComponent(q.username)}:${decodeURIComponent(q.password)}`;
        z["Proxy-Authorization"] = `Basic ${Buffer.from(_).toString("base64")}`;
      }
      if (z.Host = `${w}:${K.port}`, !z["Proxy-Connection"]) z["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let _ of Object.keys(z)) H += `${_}: ${z[_]}\r
`;
      let J = oaq.parseProxyResponse(Y);
      Y.write(`${H}\r
`);
      let {
        connect: O,
        buffered: X
      } = await J;
      if (A.emit("proxyConnect", O), this.emit("proxyConnect", O, A), O.statusCode === 200) {
        if (A.once("socket", aaq), K.secureEndpoint) {
          ivA("Upgrading socket connection to TLS");
          let _ = K.servername || K.host;
          return oT8.connect({
            ...aT8(K, "host", "path", "port"),
            socket: Y,
            servername: lvA.isIP(_) ? void 0 : _
          });
        }
        return Y;
      }
      Y.destroy();
      let $ = new lvA.Socket({
        writable: !1
      });
      return $.readable = !0, A.once("socket", _ => {
        ivA("Replaying proxy buffer for failed request"), _.push(X), _.push(null);
      }), $;
    }
  }
  km1.__initStatic();
  function aaq(A) {
    A.resume();
  }
  function aT8(A, ...K) {
    let q = {},
      Y;
    for (Y in A) if (!K.includes(Y)) q[Y] = A[Y];
    return q;
  }
  sT8.HttpsProxyAgent = km1;
});

// Register to shared state
__$.tT8 = tT8;
