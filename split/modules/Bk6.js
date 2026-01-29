// Module: Bk6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Bk6 = v((NEH, td7) => {
  td7.exports = sd7;
  var uk6 = /[\s{}=;:[\],'"()<>]/g,
    N92 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
    T92 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
    v92 = /^ *[*/]+ */,
    E92 = /^\s*\*?\/*/,
    k92 = /\n/g,
    C92 = /\s/,
    L92 = /\\(.?)/g,
    R92 = {
      "0": "\x00",
      r: "\r",
      n: `
`,
      t: "\t"
    };
  function ad7(A) {
    return A.replace(L92, function (K, q) {
      switch (q) {
        case "\\":
        case "":
          return q;
        default:
          return R92[q] || "";
      }
    });
  }
  sd7.unescape = ad7;
  function sd7(A, K) {
    A = A.toString();
    var q = 0,
      Y = A.length,
      z = 1,
      w = 0,
      H = {},
      J = [],
      O = null;
    function X(N) {
      return Error("illegal " + N + " (line " + z + ")");
    }
    function $() {
      var N = O === "'" ? T92 : N92;
      N.lastIndex = q - 1;
      var T = N.exec(A);
      if (!T) throw X("string");
      return q = N.lastIndex, j(O), O = null, ad7(T[1]);
    }
    function _(N) {
      return A.charAt(N);
    }
    function G(N, T, C) {
      var R = {
          type: A.charAt(N++),
          lineEmpty: !1,
          leading: C
        },
        x;
      if (K) x = 2;else x = 3;
      var y = N - x,
        B;
      do if (--y < 0 || (B = A.charAt(y)) === `
`) {
        R.lineEmpty = !0;
        break;
      } while (B === " " || B === "\t");
      var b = A.substring(N, T).split(k92);
      for (var F = 0; F < b.length; ++F) b[F] = b[F].replace(K ? E92 : v92, "").trim();
      R.text = b.join(`
`).trim(), H[z] = R, w = z;
    }
    function Z(N) {
      var T = W(N),
        C = A.substring(N, T),
        R = /^\s*\/\//.test(C);
      return R;
    }
    function W(N) {
      var T = N;
      while (T < Y && _(T) !== `
`) T++;
      return T;
    }
    function D() {
      if (J.length > 0) return J.shift();
      if (O) return $();
      var N,
        T,
        C,
        R,
        x,
        y = q === 0;
      do {
        if (q === Y) return null;
        N = !1;
        while (C92.test(C = _(q))) {
          if (C === `
`) y = !0, ++z;
          if (++q === Y) return null;
        }
        if (_(q) === "/") {
          if (++q === Y) throw X("comment");
          if (_(q) === "/") {
            if (!K) {
              x = _(R = q + 1) === "/";
              while (_(++q) !== `
`) if (q === Y) return null;
              if (++q, x) G(R, q - 1, y), y = !0;
              ++z, N = !0;
            } else {
              if (R = q, x = !1, Z(q - 1)) {
                x = !0;
                do {
                  if (q = W(q), q === Y) break;
                  if (q++, !y) break;
                } while (Z(q));
              } else q = Math.min(Y, W(q) + 1);
              if (x) G(R, q, y), y = !0;
              z++, N = !0;
            }
          } else if ((C = _(q)) === "*") {
            R = q + 1, x = K || _(R) === "*";
            do {
              if (C === `
`) ++z;
              if (++q === Y) throw X("comment");
              T = C, C = _(q);
            } while (T !== "*" || C !== "/");
            if (++q, x) G(R, q - 2, y), y = !0;
            N = !0;
          } else return "/";
        }
      } while (N);
      var B = q;
      uk6.lastIndex = 0;
      var b = uk6.test(_(B++));
      if (!b) while (B < Y && !uk6.test(_(B))) ++B;
      var F = A.substring(q, q = B);
      if (F === '"' || F === "'") O = F;
      return F;
    }
    function j(N) {
      J.push(N);
    }
    function M() {
      if (!J.length) {
        var N = D();
        if (N === null) return null;
        j(N);
      }
      return J[0];
    }
    function P(N, T) {
      var C = M(),
        R = C === N;
      if (R) return D(), !0;
      if (!T) throw X("token '" + C + "', '" + N + "' expected");
      return !1;
    }
    function f(N) {
      var T = null,
        C;
      if (N === void 0) {
        if (C = H[z - 1], delete H[z - 1], C && (K || C.type === "*" || C.lineEmpty)) T = C.leading ? C.text : null;
      } else {
        if (w < N) M();
        if (C = H[N], delete H[N], C && !C.lineEmpty && (K || C.type === "/")) T = C.leading ? null : C.text;
      }
      return T;
    }
    return Object.defineProperty({
      next: D,
      peek: M,
      push: j,
      skip: P,
      cmnt: f
    }, "line", {
      get: function () {
        return z;
      }
    });
  }
});

// Register to shared state
__$.Bk6 = Bk6;
