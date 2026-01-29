// Module: j86
// Dependencies: MJ, E0A, v0A, J0A, _2, wRA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var j86 = v((C6w, a34) => {
  var {
      kProxy: BU3,
      kClose: mU3,
      kDestroy: gU3,
      kInterceptors: FU3
    } = __$.MJ(),
    {
      URL: RRA
    } = CA("node:url"),
    QU3 = __$.E0A(),
    UU3 = __$.v0A(),
    pU3 = __$.J0A(),
    {
      InvalidArgumentError: NK1,
      RequestAbortedError: dU3,
      SecureProxyConnectionError: cU3
    } = __$._2(),
    i34 = __$.wRA(),
    VK1 = Symbol("proxy agent"),
    fK1 = Symbol("proxy client"),
    yRA = Symbol("proxy headers"),
    D86 = Symbol("request tls settings"),
    n34 = Symbol("proxy tls settings"),
    r34 = Symbol("connect endpoint function");
  function lU3(A) {
    return A === "https:" ? 443 : 80;
  }
  function iU3(A, K) {
    return new UU3(A, K);
  }
  var nU3 = () => {};
  class o34 extends pU3 {
    constructor(A) {
      super();
      if (!A || typeof A === "object" && !(A instanceof RRA) && !A.uri) throw new NK1("Proxy uri is mandatory");
      let {
        clientFactory: K = iU3
      } = A;
      if (typeof K !== "function") throw new NK1("Proxy opts.clientFactory must be a function.");
      let q = this.#A(A),
        {
          href: Y,
          origin: z,
          port: w,
          protocol: H,
          username: J,
          password: O,
          hostname: X
        } = q;
      if (this[BU3] = {
        uri: Y,
        protocol: H
      }, this[FU3] = A.interceptors?.ProxyAgent && Array.isArray(A.interceptors.ProxyAgent) ? A.interceptors.ProxyAgent : [], this[D86] = A.requestTls, this[n34] = A.proxyTls, this[yRA] = A.headers || {}, A.auth && A.token) throw new NK1("opts.auth cannot be used in combination with opts.token");else if (A.auth) this[yRA]["proxy-authorization"] = `Basic ${A.auth}`;else if (A.token) this[yRA]["proxy-authorization"] = A.token;else if (J && O) this[yRA]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(J)}:${decodeURIComponent(O)}`).toString("base64")}`;
      let $ = i34({
        ...A.proxyTls
      });
      this[r34] = i34({
        ...A.requestTls
      }), this[fK1] = K(q, {
        connect: $
      }), this[VK1] = new QU3({
        ...A,
        connect: async (_, G) => {
          let Z = _.host;
          if (!_.port) Z += `:${lU3(_.protocol)}`;
          try {
            let {
              socket: W,
              statusCode: D
            } = await this[fK1].connect({
              origin: z,
              port: w,
              path: Z,
              signal: _.signal,
              headers: {
                ...this[yRA],
                host: _.host
              },
              servername: this[n34]?.servername || X
            });
            if (D !== 200) W.on("error", nU3).destroy(), G(new dU3(`Proxy response (${D}) !== 200 when HTTP Tunneling`));
            if (_.protocol !== "https:") {
              G(null, W);
              return;
            }
            let j;
            if (this[D86]) j = this[D86].servername;else j = _.servername;
            this[r34]({
              ..._,
              servername: j,
              httpSocket: W
            }, G);
          } catch (W) {
            if (W.code === "ERR_TLS_CERT_ALTNAME_INVALID") G(new cU3(W));else G(W);
          }
        }
      });
    }
    dispatch(A, K) {
      let q = rU3(A.headers);
      if (oU3(q), q && !("host" in q) && !("Host" in q)) {
        let {
          host: Y
        } = new RRA(A.origin);
        q.host = Y;
      }
      return this[VK1].dispatch({
        ...A,
        headers: q
      }, K);
    }
    #A(A) {
      if (typeof A === "string") return new RRA(A);else if (A instanceof RRA) return A;else return new RRA(A.uri);
    }
    async [mU3]() {
      await this[VK1].close(), await this[fK1].close();
    }
    async [gU3]() {
      await this[VK1].destroy(), await this[fK1].destroy();
    }
  }
  function rU3(A) {
    if (Array.isArray(A)) {
      let K = {};
      for (let q = 0; q < A.length; q += 2) K[A[q]] = A[q + 1];
      return K;
    }
    return A;
  }
  function oU3(A) {
    if (A && Object.keys(A).find(q => q.toLowerCase() === "proxy-authorization")) throw new NK1("Proxy-Authorization should be sent in ProxyAgent constructor");
  }
  a34.exports = o34;
});

// Register to shared state
__$.j86 = j86;
