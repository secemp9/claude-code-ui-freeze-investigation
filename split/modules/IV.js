// Module: IV
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IV = v((J6w, dq4) => {
  var i71 = CA("node:assert"),
    Zm3 = new TextEncoder(),
    JRA = /^[!#$%&'*+\-.^_|~A-Za-z0-9]+$/,
    Wm3 = /[\u000A\u000D\u0009\u0020]/,
    Dm3 = /[\u0009\u000A\u000C\u000D\u0020]/g,
    jm3 = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
  function Mm3(A) {
    i71(A.protocol === "data:");
    let K = Fq4(A, !0);
    K = K.slice(5);
    let q = {
        position: 0
      },
      Y = $0A(",", K, q),
      z = Y.length;
    if (Y = vm3(Y, !0, !0), q.position >= K.length) return "failure";
    q.position++;
    let w = K.slice(z + 1),
      H = Qq4(w);
    if (/;(\u0020){0,}base64$/i.test(Y)) {
      let O = pq4(H);
      if (H = Vm3(O), H === "failure") return "failure";
      Y = Y.slice(0, -6), Y = Y.replace(/(\u0020)+$/, ""), Y = Y.slice(0, -1);
    }
    if (Y.startsWith(";")) Y = "text/plain" + Y;
    let J = R66(Y);
    if (J === "failure") J = R66("text/plain;charset=US-ASCII");
    return {
      mimeType: J,
      body: H
    };
  }
  function Fq4(A, K = !1) {
    if (!K) return A.href;
    let q = A.href,
      Y = A.hash.length,
      z = Y === 0 ? q : q.substring(0, q.length - Y);
    if (!Y && q.endsWith("#")) return z.slice(0, -1);
    return z;
  }
  function n71(A, K, q) {
    let Y = "";
    while (q.position < K.length && A(K[q.position])) Y += K[q.position], q.position++;
    return Y;
  }
  function $0A(A, K, q) {
    let Y = K.indexOf(A, q.position),
      z = q.position;
    if (Y === -1) return q.position = K.length, K.slice(z);
    return q.position = Y, K.slice(z, q.position);
  }
  function Qq4(A) {
    let K = Zm3.encode(A);
    return Pm3(K);
  }
  function mq4(A) {
    return A >= 48 && A <= 57 || A >= 65 && A <= 70 || A >= 97 && A <= 102;
  }
  function gq4(A) {
    return A >= 48 && A <= 57 ? A - 48 : (A & 223) - 55;
  }
  function Pm3(A) {
    let K = A.length,
      q = new Uint8Array(K),
      Y = 0;
    for (let z = 0; z < K; ++z) {
      let w = A[z];
      if (w !== 37) q[Y++] = w;else if (w === 37 && !(mq4(A[z + 1]) && mq4(A[z + 2]))) q[Y++] = 37;else q[Y++] = gq4(A[z + 1]) << 4 | gq4(A[z + 2]), z += 2;
    }
    return K === Y ? q : q.subarray(0, Y);
  }
  function R66(A) {
    A = l71(A, !0, !0);
    let K = {
        position: 0
      },
      q = $0A("/", A, K);
    if (q.length === 0 || !JRA.test(q)) return "failure";
    if (K.position > A.length) return "failure";
    K.position++;
    let Y = $0A(";", A, K);
    if (Y = l71(Y, !1, !0), Y.length === 0 || !JRA.test(Y)) return "failure";
    let z = q.toLowerCase(),
      w = Y.toLowerCase(),
      H = {
        type: z,
        subtype: w,
        parameters: new Map(),
        essence: `${z}/${w}`
      };
    while (K.position < A.length) {
      K.position++, n71(X => Wm3.test(X), A, K);
      let J = n71(X => X !== ";" && X !== "=", A, K);
      if (J = J.toLowerCase(), K.position < A.length) {
        if (A[K.position] === ";") continue;
        K.position++;
      }
      if (K.position > A.length) break;
      let O = null;
      if (A[K.position] === '"') O = Uq4(A, K, !0), $0A(";", A, K);else if (O = $0A(";", A, K), O = l71(O, !1, !0), O.length === 0) continue;
      if (J.length !== 0 && JRA.test(J) && (O.length === 0 || jm3.test(O)) && !H.parameters.has(J)) H.parameters.set(J, O);
    }
    return H;
  }
  function Vm3(A) {
    A = A.replace(Dm3, "");
    let K = A.length;
    if (K % 4 === 0) {
      if (A.charCodeAt(K - 1) === 61) {
        if (--K, A.charCodeAt(K - 1) === 61) --K;
      }
    }
    if (K % 4 === 1) return "failure";
    if (/[^+/0-9A-Za-z]/.test(A.length === K ? A : A.substring(0, K))) return "failure";
    let q = Buffer.from(A, "base64");
    return new Uint8Array(q.buffer, q.byteOffset, q.byteLength);
  }
  function Uq4(A, K, q) {
    let Y = K.position,
      z = "";
    i71(A[K.position] === '"'), K.position++;
    while (!0) {
      if (z += n71(H => H !== '"' && H !== "\\", A, K), K.position >= A.length) break;
      let w = A[K.position];
      if (K.position++, w === "\\") {
        if (K.position >= A.length) {
          z += "\\";
          break;
        }
        z += A[K.position], K.position++;
      } else {
        i71(w === '"');
        break;
      }
    }
    if (q) return z;
    return A.slice(Y, K.position);
  }
  function fm3(A) {
    i71(A !== "failure");
    let {
        parameters: K,
        essence: q
      } = A,
      Y = q;
    for (let [z, w] of K.entries()) {
      if (Y += ";", Y += z, Y += "=", !JRA.test(w)) w = w.replace(/(\\|")/g, "\\$1"), w = '"' + w, w += '"';
      Y += w;
    }
    return Y;
  }
  function Nm3(A) {
    return A === 13 || A === 10 || A === 9 || A === 32;
  }
  function l71(A, K = !0, q = !0) {
    return y66(A, K, q, Nm3);
  }
  function Tm3(A) {
    return A === 13 || A === 10 || A === 9 || A === 12 || A === 32;
  }
  function vm3(A, K = !0, q = !0) {
    return y66(A, K, q, Tm3);
  }
  function y66(A, K, q, Y) {
    let z = 0,
      w = A.length - 1;
    if (K) while (z < A.length && Y(A.charCodeAt(z))) z++;
    if (q) while (w > 0 && Y(A.charCodeAt(w))) w--;
    return z === 0 && w === A.length - 1 ? A : A.slice(z, w + 1);
  }
  function pq4(A) {
    let K = A.length;
    if (65535 > K) return String.fromCharCode.apply(null, A);
    let q = "",
      Y = 0,
      z = 65535;
    while (Y < K) {
      if (Y + z > K) z = K - Y;
      q += String.fromCharCode.apply(null, A.subarray(Y, Y += z));
    }
    return q;
  }
  function Em3(A) {
    switch (A.essence) {
      case "application/ecmascript":
      case "application/javascript":
      case "application/x-ecmascript":
      case "application/x-javascript":
      case "text/ecmascript":
      case "text/javascript":
      case "text/javascript1.0":
      case "text/javascript1.1":
      case "text/javascript1.2":
      case "text/javascript1.3":
      case "text/javascript1.4":
      case "text/javascript1.5":
      case "text/jscript":
      case "text/livescript":
      case "text/x-ecmascript":
      case "text/x-javascript":
        return "text/javascript";
      case "application/json":
      case "text/json":
        return "application/json";
      case "image/svg+xml":
        return "image/svg+xml";
      case "text/xml":
      case "application/xml":
        return "application/xml";
    }
    if (A.subtype.endsWith("+json")) return "application/json";
    if (A.subtype.endsWith("+xml")) return "application/xml";
    return "";
  }
  dq4.exports = {
    dataURLProcessor: Mm3,
    URLSerializer: Fq4,
    collectASequenceOfCodePoints: n71,
    collectASequenceOfCodePointsFast: $0A,
    stringPercentDecode: Qq4,
    parseMIMEType: R66,
    collectAnHTTPQuotedString: Uq4,
    serializeAMimeType: fm3,
    removeChars: y66,
    removeHTTPWhitespace: l71,
    minimizeSupportedMimeType: Em3,
    HTTP_TOKEN_CODEPOINTS: JRA,
    isomorphicDecode: pq4
  };
});

// Register to shared state
__$.IV = IV;
