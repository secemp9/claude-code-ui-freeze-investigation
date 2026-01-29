// Module: vqA
// Dependencies: m3, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vqA = v((Z4H, N_7) => {
  var iX1 = __$.m3();
  __$.bY();
  var f_7 = N_7.exports = iX1.pem = iX1.pem || {};
  f_7.encode = function (A, K) {
    K = K || {};
    var q = "-----BEGIN " + A.type + `-----\r
`,
      Y;
    if (A.procType) Y = {
      name: "Proc-Type",
      values: [String(A.procType.version), A.procType.type]
    }, q += lX1(Y);
    if (A.contentDomain) Y = {
      name: "Content-Domain",
      values: [A.contentDomain]
    }, q += lX1(Y);
    if (A.dekInfo) {
      if (Y = {
        name: "DEK-Info",
        values: [A.dekInfo.algorithm]
      }, A.dekInfo.parameters) Y.values.push(A.dekInfo.parameters);
      q += lX1(Y);
    }
    if (A.headers) for (var z = 0; z < A.headers.length; ++z) q += lX1(A.headers[z]);
    if (A.procType) q += `\r
`;
    return q += iX1.util.encode64(A.body, K.maxline || 64) + `\r
`, q += "-----END " + A.type + `-----\r
`, q;
  };
  f_7.decode = function (A) {
    var K = [],
      q = /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,
      Y = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,
      z = /\r?\n/,
      w;
    while (!0) {
      if (w = q.exec(A), !w) break;
      var H = w[1];
      if (H === "NEW CERTIFICATE REQUEST") H = "CERTIFICATE REQUEST";
      var J = {
        type: H,
        procType: null,
        contentDomain: null,
        dekInfo: null,
        headers: [],
        body: iX1.util.decode64(w[3])
      };
      if (K.push(J), !w[2]) continue;
      var O = w[2].split(z),
        X = 0;
      while (w && X < O.length) {
        var $ = O[X].replace(/\s+$/, "");
        for (var _ = X + 1; _ < O.length; ++_) {
          var G = O[_];
          if (!/\s/.test(G[0])) break;
          $ += G, X = _;
        }
        if (w = $.match(Y), w) {
          var Z = {
              name: w[1],
              values: []
            },
            W = w[2].split(",");
          for (var D = 0; D < W.length; ++D) Z.values.push(fNY(W[D]));
          if (!J.procType) {
            if (Z.name !== "Proc-Type") throw Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');else if (Z.values.length !== 2) throw Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');
            J.procType = {
              version: W[0],
              type: W[1]
            };
          } else if (!J.contentDomain && Z.name === "Content-Domain") J.contentDomain = W[0] || "";else if (!J.dekInfo && Z.name === "DEK-Info") {
            if (Z.values.length === 0) throw Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');
            J.dekInfo = {
              algorithm: W[0],
              parameters: W[1] || null
            };
          } else J.headers.push(Z);
        }
        ++X;
      }
      if (J.procType === "ENCRYPTED" && !J.dekInfo) throw Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".');
    }
    if (K.length === 0) throw Error("Invalid PEM formatted message.");
    return K;
  };
  function lX1(A) {
    var K = A.name + ": ",
      q = [],
      Y = function (O, X) {
        return " " + X;
      };
    for (var z = 0; z < A.values.length; ++z) q.push(A.values[z].replace(/^(\S+\r\n)/, Y));
    K += q.join(",") + `\r
`;
    var w = 0,
      H = -1;
    for (var z = 0; z < K.length; ++z, ++w) if (w > 65 && H !== -1) {
      var J = K[H];
      if (J === ",") ++H, K = K.substr(0, H) + `\r
 ` + K.substr(H);else K = K.substr(0, H) + `\r
` + J + K.substr(H + 1);
      w = z - H - 1, H = -1, ++z;
    } else if (K[z] === " " || K[z] === "\t" || K[z] === ",") H = z;
    return K;
  }
  function fNY(A) {
    return A.replace(/^\s+/, "");
  }
});

// Register to shared state
__$.vqA = vqA;
