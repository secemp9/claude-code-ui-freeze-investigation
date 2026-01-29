// Module: rT8
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rT8 = v(nT8 => {
  Object.defineProperty(nT8, "__esModule", {
    value: !0
  });
  var Uaq = __$.H8();
  function ItA(...A) {
    Uaq.logger.log("[https-proxy-agent:parse-proxy-response]", ...A);
  }
  function paq(A) {
    return new Promise((K, q) => {
      let Y = 0,
        z = [];
      function w() {
        let $ = A.read();
        if ($) X($);else A.once("readable", w);
      }
      function H() {
        A.removeListener("end", J), A.removeListener("error", O), A.removeListener("readable", w);
      }
      function J() {
        H(), ItA("onend"), q(Error("Proxy connection ended before receiving CONNECT response"));
      }
      function O($) {
        H(), ItA("onerror %o", $), q($);
      }
      function X($) {
        z.push($), Y += $.length;
        let _ = Buffer.concat(z, Y),
          G = _.indexOf(`\r
\r
`);
        if (G === -1) {
          ItA("have not received end of HTTP headers yet..."), w();
          return;
        }
        let Z = _.slice(0, G).toString("ascii").split(`\r
`),
          W = Z.shift();
        if (!W) return A.destroy(), q(Error("No header received from proxy CONNECT response"));
        let D = W.split(" "),
          j = +D[1],
          M = D.slice(2).join(" "),
          P = {};
        for (let f of Z) {
          if (!f) continue;
          let N = f.indexOf(":");
          if (N === -1) return A.destroy(), q(Error(`Invalid header from proxy CONNECT response: "${f}"`));
          let T = f.slice(0, N).toLowerCase(),
            C = f.slice(N + 1).trimStart(),
            R = P[T];
          if (typeof R === "string") P[T] = [R, C];else if (Array.isArray(R)) R.push(C);else P[T] = C;
        }
        ItA("got proxy server response: %o %o", W, P), H(), K({
          connect: {
            statusCode: j,
            statusText: M,
            headers: P
          },
          buffered: _
        });
      }
      A.on("error", O), A.on("end", J), w();
    });
  }
  nT8.parseProxyResponse = paq;
});

// Register to shared state
__$.rT8 = rT8;
