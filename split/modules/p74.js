// Module: p74
// Dependencies: V1A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var p74 = v(A0A => {
  var _u3 = A0A && A0A.__importDefault || function (A) {
    return A && A.__esModule ? A : {
      default: A
    };
  };
  Object.defineProperty(A0A, "__esModule", {
    value: !0
  });
  A0A.parseProxyResponse = void 0;
  var Gu3 = _u3(__$.V1A()),
    h71 = (0, Gu3.default)("https-proxy-agent:parse-proxy-response");
  function Zu3(A) {
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
        H(), h71("onend"), q(Error("Proxy connection ended before receiving CONNECT response"));
      }
      function O($) {
        H(), h71("onerror %o", $), q($);
      }
      function X($) {
        z.push($), Y += $.length;
        let _ = Buffer.concat(z, Y),
          G = _.indexOf(`\r
\r
`);
        if (G === -1) {
          h71("have not received end of HTTP headers yet..."), w();
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
        h71("got proxy server response: %o %o", W, P), H(), K({
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
  A0A.parseProxyResponse = Zu3;
});

// Register to shared state
__$.p74 = p74;
