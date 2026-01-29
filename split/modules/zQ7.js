// Module: zQ7
// Dependencies: oF7, wD1, tF7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zQ7 = v(qQ7 => {
  Object.defineProperty(qQ7, "__esModule", {
    value: !0
  });
  qQ7.compressAndSend = qQ7.sendWithHttp = void 0;
  var E42 = CA("zlib"),
    k42 = CA("stream"),
    eF7 = __$.oF7(),
    C42 = __$.wD1(),
    L42 = __$.tF7(),
    AQ7 = `OTel-OTLP-Exporter-JavaScript/${L42.VERSION}`;
  function R42(A, K, q, Y, z, w, H, J, O) {
    let X = new URL(K);
    if (z) q["User-Agent"] = `${z} ${AQ7}`;else q["User-Agent"] = AQ7;
    let $ = {
        hostname: X.hostname,
        port: X.port,
        path: X.pathname,
        method: "POST",
        headers: q,
        agent: w
      },
      _ = A($, G => {
        let Z = [];
        G.on("data", W => Z.push(W)), G.on("end", () => {
          if (G.statusCode && G.statusCode < 299) J({
            status: "success",
            data: Buffer.concat(Z)
          });else if (G.statusCode && (0, eF7.isExportRetryable)(G.statusCode)) J({
            status: "retryable",
            retryInMillis: (0, eF7.parseRetryAfterToMills)(G.headers["retry-after"])
          });else {
            let W = new C42.OTLPExporterError(G.statusMessage, G.statusCode, Buffer.concat(Z).toString());
            J({
              status: "failure",
              error: W
            });
          }
        });
      });
    _.setTimeout(O, () => {
      _.destroy(), J({
        status: "failure",
        error: Error("Request Timeout")
      });
    }), _.on("error", G => {
      J({
        status: "failure",
        error: G
      });
    }), KQ7(_, Y, H, G => {
      J({
        status: "failure",
        error: G
      });
    });
  }
  qQ7.sendWithHttp = R42;
  function KQ7(A, K, q, Y) {
    let z = y42(q);
    if (K === "gzip") A.setHeader("Content-Encoding", "gzip"), z = z.on("error", Y).pipe(E42.createGzip()).on("error", Y);
    z.pipe(A).on("error", Y);
  }
  qQ7.compressAndSend = KQ7;
  function y42(A) {
    let K = new k42.Readable();
    return K.push(A), K.push(null), K;
  }
});

// Register to shared state
__$.zQ7 = zQ7;
