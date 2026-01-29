// Module: f54
// Dependencies: j9, ZT, IV, h66, _RA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var f54 = v((Z6w, V54) => {
  var {
      isUSVString: D54,
      bufferToLowerCasedHeaderName: xg3
    } = __$.j9(),
    {
      utf8DecodeBytes: ug3
    } = __$.ZT(),
    {
      HTTP_TOKEN_CODEPOINTS: Bg3,
      isomorphicDecode: j54
    } = __$.IV(),
    {
      isFileLike: mg3
    } = __$.h66(),
    {
      makeEntry: gg3
    } = __$._RA(),
    t71 = CA("node:assert"),
    {
      File: Fg3
    } = CA("node:buffer"),
    Qg3 = globalThis.File ?? Fg3,
    Ug3 = Buffer.from('form-data; name="'),
    M54 = Buffer.from("; filename"),
    pg3 = Buffer.from("--"),
    dg3 = Buffer.from(`--\r
`);
  function cg3(A) {
    for (let K = 0; K < A.length; ++K) if ((A.charCodeAt(K) & -128) !== 0) return !1;
    return !0;
  }
  function lg3(A) {
    let K = A.length;
    if (K < 27 || K > 70) return !1;
    for (let q = 0; q < K; ++q) {
      let Y = A.charCodeAt(q);
      if (!(Y >= 48 && Y <= 57 || Y >= 65 && Y <= 90 || Y >= 97 && Y <= 122 || Y === 39 || Y === 45 || Y === 95)) return !1;
    }
    return !0;
  }
  function ig3(A, K) {
    t71(K !== "failure" && K.essence === "multipart/form-data");
    let q = K.parameters.get("boundary");
    if (q === void 0) return "failure";
    let Y = Buffer.from(`--${q}`, "utf8"),
      z = [],
      w = {
        position: 0
      };
    while (A[w.position] === 13 && A[w.position + 1] === 10) w.position += 2;
    let H = A.length;
    while (A[H - 1] === 10 && A[H - 2] === 13) H -= 2;
    if (H !== A.length) A = A.subarray(0, H);
    while (!0) {
      if (A.subarray(w.position, w.position + Y.length).equals(Y)) w.position += Y.length;else return "failure";
      if (w.position === A.length - 2 && e71(A, pg3, w) || w.position === A.length - 4 && e71(A, dg3, w)) return z;
      if (A[w.position] !== 13 || A[w.position + 1] !== 10) return "failure";
      w.position += 2;
      let J = ng3(A, w);
      if (J === "failure") return "failure";
      let {
        name: O,
        filename: X,
        contentType: $,
        encoding: _
      } = J;
      w.position += 2;
      let G;
      {
        let W = A.indexOf(Y.subarray(2), w.position);
        if (W === -1) return "failure";
        if (G = A.subarray(w.position, W - 4), w.position += G.length, _ === "base64") G = Buffer.from(G.toString(), "base64");
      }
      if (A[w.position] !== 13 || A[w.position + 1] !== 10) return "failure";else w.position += 2;
      let Z;
      if (X !== null) {
        if ($ ??= "text/plain", !cg3($)) $ = "";
        Z = new Qg3([G], X, {
          type: $
        });
      } else Z = ug3(Buffer.from(G));
      t71(D54(O)), t71(typeof Z === "string" && D54(Z) || mg3(Z)), z.push(gg3(O, Z, X));
    }
  }
  function ng3(A, K) {
    let q = null,
      Y = null,
      z = null,
      w = null;
    while (!0) {
      if (A[K.position] === 13 && A[K.position + 1] === 10) {
        if (q === null) return "failure";
        return {
          name: q,
          filename: Y,
          contentType: z,
          encoding: w
        };
      }
      let H = Z0A(J => J !== 10 && J !== 13 && J !== 58, A, K);
      if (H = x66(H, !0, !0, J => J === 9 || J === 32), !Bg3.test(H.toString())) return "failure";
      if (A[K.position] !== 58) return "failure";
      switch (K.position++, Z0A(J => J === 32 || J === 9, A, K), xg3(H)) {
        case "content-disposition":
          {
            if (q = Y = null, !e71(A, Ug3, K)) return "failure";
            if (K.position += 17, q = P54(A, K), q === null) return "failure";
            if (e71(A, M54, K)) {
              let J = K.position + M54.length;
              if (A[J] === 42) K.position += 1, J += 1;
              if (A[J] !== 61 || A[J + 1] !== 34) return "failure";
              if (K.position += 12, Y = P54(A, K), Y === null) return "failure";
            }
            break;
          }
        case "content-type":
          {
            let J = Z0A(O => O !== 10 && O !== 13, A, K);
            J = x66(J, !1, !0, O => O === 9 || O === 32), z = j54(J);
            break;
          }
        case "content-transfer-encoding":
          {
            let J = Z0A(O => O !== 10 && O !== 13, A, K);
            J = x66(J, !1, !0, O => O === 9 || O === 32), w = j54(J);
            break;
          }
        default:
          Z0A(J => J !== 10 && J !== 13, A, K);
      }
      if (A[K.position] !== 13 && A[K.position + 1] !== 10) return "failure";else K.position += 2;
    }
  }
  function P54(A, K) {
    t71(A[K.position - 1] === 34);
    let q = Z0A(Y => Y !== 10 && Y !== 13 && Y !== 34, A, K);
    if (A[K.position] !== 34) return null;else K.position++;
    return q = new TextDecoder().decode(q).replace(/%0A/ig, `
`).replace(/%0D/ig, "\r").replace(/%22/g, '"'), q;
  }
  function Z0A(A, K, q) {
    let Y = q.position;
    while (Y < K.length && A(K[Y])) ++Y;
    return K.subarray(q.position, q.position = Y);
  }
  function x66(A, K, q, Y) {
    let z = 0,
      w = A.length - 1;
    if (K) while (z < A.length && Y(A[z])) z++;
    if (q) while (w > 0 && Y(A[w])) w--;
    return z === 0 && w === A.length - 1 ? A : A.subarray(z, w + 1);
  }
  function e71(A, K, q) {
    if (A.length < K.length) return !1;
    for (let Y = 0; Y < K.length; Y++) if (K[Y] !== A[q.position + Y]) return !1;
    return !0;
  }
  V54.exports = {
    multipartFormDataParser: ig3,
    validateBoundary: lg3
  };
});

// Register to shared state
__$.f54 = f54;
