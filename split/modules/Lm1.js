// Module: Lm1
// Dependencies: H8, sq, tT8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Lm1 = v(Kv8 => {
  var {
    _nullishCoalesce: Cm1
  } = __$.H8();
  Object.defineProperty(Kv8, "__esModule", {
    value: !0
  });
  var taq = CA("http"),
    eaq = CA("https"),
    Asq = CA("stream"),
    Av8 = CA("url"),
    Ksq = CA("zlib"),
    eT8 = __$.sq(),
    qsq = __$.H8(),
    Ysq = __$.tT8(),
    zsq = 32768;
  function wsq(A) {
    return new Asq.Readable({
      read() {
        this.push(A), this.push(null);
      }
    });
  }
  function Hsq(A) {
    let K;
    try {
      K = new Av8.URL(A.url);
    } catch (O) {
      return qsq.consoleSandbox(() => {
        console.warn("[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used.");
      }), eT8.createTransport(A, () => Promise.resolve({}));
    }
    let q = K.protocol === "https:",
      Y = Jsq(K, A.proxy || (q ? process.env.https_proxy : void 0) || process.env.http_proxy),
      z = q ? eaq : taq,
      w = A.keepAlive === void 0 ? !1 : A.keepAlive,
      H = Y ? new Ysq.HttpsProxyAgent(Y) : new z.Agent({
        keepAlive: w,
        maxSockets: 30,
        timeout: 2000
      }),
      J = Osq(A, Cm1(A.httpModule, () => z), H);
    return eT8.createTransport(A, J);
  }
  function Jsq(A, K) {
    let {
      no_proxy: q
    } = process.env;
    if (q && q.split(",").some(z => A.host.endsWith(z) || A.hostname.endsWith(z))) return;else return K;
  }
  function Osq(A, K, q) {
    let {
      hostname: Y,
      pathname: z,
      port: w,
      protocol: H,
      search: J
    } = new Av8.URL(A.url);
    return function (X) {
      return new Promise(($, _) => {
        let G = wsq(X.body),
          Z = {
            ...A.headers
          };
        if (X.body.length > zsq) Z["content-encoding"] = "gzip", G = G.pipe(Ksq.createGzip());
        let W = K.request({
          method: "POST",
          agent: q,
          headers: Z,
          hostname: Y,
          path: `${z}${J}`,
          port: w,
          protocol: H,
          ca: A.caCerts
        }, D => {
          D.on("data", () => {}), D.on("end", () => {}), D.setEncoding("utf8");
          let j = Cm1(D.headers["retry-after"], () => null),
            M = Cm1(D.headers["x-sentry-rate-limits"], () => null);
          $({
            statusCode: D.statusCode,
            headers: {
              "retry-after": j,
              "x-sentry-rate-limits": Array.isArray(M) ? M[0] : M
            }
          });
        });
        W.on("error", _), G.pipe(W);
      });
    };
  }
  Kv8.makeNodeTransport = Hsq;
});

// Register to shared state
__$.Lm1 = Lm1;
