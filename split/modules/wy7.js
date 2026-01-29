// Module: wy7
// Dependencies: hs, wL, wS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wy7 = v((MDH, zy7) => {
  var LrY = CA("http"),
    RrY = CA("https"),
    {
      ono: FZ1
    } = __$.hs(),
    QZ1 = __$.wL(),
    {
      ResolverError: qy7
    } = __$.wS();
  zy7.exports = {
    order: 200,
    headers: null,
    timeout: 5000,
    redirects: 5,
    withCredentials: !1,
    canRead(A) {
      return QZ1.isHttp(A.url);
    },
    read(A) {
      let K = QZ1.parse(A.url);
      return Yy7(K, this);
    }
  };
  function Yy7(A, K, q) {
    return new Promise((Y, z) => {
      A = QZ1.parse(A), q = q || [], q.push(A.href), yrY(A, K).then(w => {
        if (w.statusCode >= 400) throw FZ1({
          status: w.statusCode
        }, `HTTP ERROR ${w.statusCode}`);else if (w.statusCode >= 300) {
          if (q.length > K.redirects) z(new qy7(FZ1({
            status: w.statusCode
          }, `Error downloading ${q[0]}. 
Too many redirects: 
  ${q.join(` 
  `)}`)));else if (!w.headers.location) throw FZ1({
            status: w.statusCode
          }, `HTTP ${w.statusCode} redirect with no location header`);else {
            let H = QZ1.resolve(A, w.headers.location);
            Yy7(H, K, q).then(Y, z);
          }
        } else Y(w.body || Buffer.alloc(0));
      }).catch(w => {
        z(new qy7(FZ1(w, `Error downloading ${A.href}`), A.href));
      });
    });
  }
  function yrY(A, K) {
    return new Promise((q, Y) => {
      let w = (A.protocol === "https:" ? RrY : LrY).get({
        hostname: A.hostname,
        port: A.port,
        path: A.path,
        auth: A.auth,
        protocol: A.protocol,
        headers: K.headers || {},
        withCredentials: K.withCredentials
      });
      if (typeof w.setTimeout === "function") w.setTimeout(K.timeout);
      w.on("timeout", () => {
        w.abort();
      }), w.on("error", Y), w.once("response", H => {
        H.body = Buffer.alloc(0), H.on("data", J => {
          H.body = Buffer.concat([H.body, Buffer.from(J)]);
        }), H.on("error", Y), H.on("end", () => {
          q(H);
        });
      });
    });
  }
});

// Register to shared state
__$.wy7 = wy7;
