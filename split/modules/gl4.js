// Module: gl4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gl4 = v((hNw, ml4) => {
  var il9 = /^xn--/,
    nl9 = /[^\0-\x7F]/,
    rl9 = /[\x2E\u3002\uFF0E\uFF61]/g,
    ol9 = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    },
    Xu = Math.floor,
    Bw6 = String.fromCharCode;
  function Yo(A) {
    throw RangeError(ol9[A]);
  }
  function al9(A, K) {
    let q = [],
      Y = A.length;
    while (Y--) q[Y] = K(A[Y]);
    return q;
  }
  function hl4(A, K) {
    let q = A.split("@"),
      Y = "";
    if (q.length > 1) Y = q[0] + "@", A = q[1];
    A = A.replace(rl9, ".");
    let z = A.split("."),
      w = al9(z, K).join(".");
    return Y + w;
  }
  function bl4(A) {
    let K = [],
      q = 0,
      Y = A.length;
    while (q < Y) {
      let z = A.charCodeAt(q++);
      if (z >= 55296 && z <= 56319 && q < Y) {
        let w = A.charCodeAt(q++);
        if ((w & 64512) == 56320) K.push(((z & 1023) << 10) + (w & 1023) + 65536);else K.push(z), q--;
      } else K.push(z);
    }
    return K;
  }
  var sl9 = A => String.fromCodePoint(...A),
    tl9 = function (A) {
      if (A >= 48 && A < 58) return 26 + (A - 48);
      if (A >= 65 && A < 91) return A - 65;
      if (A >= 97 && A < 123) return A - 97;
      return 36;
    },
    Sl4 = function (A, K) {
      return A + 22 + 75 * (A < 26) - ((K != 0) << 5);
    },
    xl4 = function (A, K, q) {
      let Y = 0;
      A = q ? Xu(A / 700) : A >> 1, A += Xu(A / K);
      for (; A > 455; Y += 36) A = Xu(A / 35);
      return Xu(Y + 36 * A / (A + 38));
    },
    ul4 = function (A) {
      let K = [],
        q = A.length,
        Y = 0,
        z = 128,
        w = 72,
        H = A.lastIndexOf("-");
      if (H < 0) H = 0;
      for (let J = 0; J < H; ++J) {
        if (A.charCodeAt(J) >= 128) Yo("not-basic");
        K.push(A.charCodeAt(J));
      }
      for (let J = H > 0 ? H + 1 : 0; J < q;) {
        let O = Y;
        for (let $ = 1, _ = 36;; _ += 36) {
          if (J >= q) Yo("invalid-input");
          let G = tl9(A.charCodeAt(J++));
          if (G >= 36) Yo("invalid-input");
          if (G > Xu((2147483647 - Y) / $)) Yo("overflow");
          Y += G * $;
          let Z = _ <= w ? 1 : _ >= w + 26 ? 26 : _ - w;
          if (G < Z) break;
          let W = 36 - Z;
          if ($ > Xu(2147483647 / W)) Yo("overflow");
          $ *= W;
        }
        let X = K.length + 1;
        if (w = xl4(Y - O, X, O == 0), Xu(Y / X) > 2147483647 - z) Yo("overflow");
        z += Xu(Y / X), Y %= X, K.splice(Y++, 0, z);
      }
      return String.fromCodePoint(...K);
    },
    Bl4 = function (A) {
      let K = [];
      A = bl4(A);
      let q = A.length,
        Y = 128,
        z = 0,
        w = 72;
      for (let O of A) if (O < 128) K.push(Bw6(O));
      let H = K.length,
        J = H;
      if (H) K.push("-");
      while (J < q) {
        let O = 2147483647;
        for (let $ of A) if ($ >= Y && $ < O) O = $;
        let X = J + 1;
        if (O - Y > Xu((2147483647 - z) / X)) Yo("overflow");
        z += (O - Y) * X, Y = O;
        for (let $ of A) {
          if ($ < Y && ++z > 2147483647) Yo("overflow");
          if ($ === Y) {
            let _ = z;
            for (let G = 36;; G += 36) {
              let Z = G <= w ? 1 : G >= w + 26 ? 26 : G - w;
              if (_ < Z) break;
              let W = _ - Z,
                D = 36 - Z;
              K.push(Bw6(Sl4(Z + W % D, 0))), _ = Xu(W / D);
            }
            K.push(Bw6(Sl4(_, 0))), w = xl4(z, X, J === H), z = 0, ++J;
          }
        }
        ++z, ++Y;
      }
      return K.join("");
    },
    el9 = function (A) {
      return hl4(A, function (K) {
        return il9.test(K) ? ul4(K.slice(4).toLowerCase()) : K;
      });
    },
    Ai9 = function (A) {
      return hl4(A, function (K) {
        return nl9.test(K) ? "xn--" + Bl4(K) : K;
      });
    },
    Ki9 = {
      version: "2.3.1",
      ucs2: {
        decode: bl4,
        encode: sl9
      },
      decode: ul4,
      encode: Bl4,
      toASCII: Ai9,
      toUnicode: el9
    };
  ml4.exports = Ki9;
});

// Register to shared state
__$.gl4 = gl4;
