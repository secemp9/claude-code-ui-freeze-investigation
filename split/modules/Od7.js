// Module: Od7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Od7 = v((tvH, Jd7) => {
  var d52 = 1 / 0,
    c52 = "[object Symbol]",
    l52 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    i52 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    FD1 = "\\ud800-\\udfff",
    lp7 = "\\u0300-\\u036f\\ufe20-\\ufe23",
    ip7 = "\\u20d0-\\u20f0",
    np7 = "\\u2700-\\u27bf",
    rp7 = "a-z\\xdf-\\xf6\\xf8-\\xff",
    n52 = "\\xac\\xb1\\xd7\\xf7",
    r52 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    o52 = "\\u2000-\\u206f",
    a52 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    op7 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    ap7 = "\\ufe0e\\ufe0f",
    sp7 = n52 + r52 + o52 + a52,
    Yk6 = "['’]",
    s52 = "[" + FD1 + "]",
    gp7 = "[" + sp7 + "]",
    gD1 = "[" + lp7 + ip7 + "]",
    tp7 = "\\d+",
    t52 = "[" + np7 + "]",
    ep7 = "[" + rp7 + "]",
    Ad7 = "[^" + FD1 + sp7 + tp7 + np7 + rp7 + op7 + "]",
    qk6 = "\\ud83c[\\udffb-\\udfff]",
    e52 = "(?:" + gD1 + "|" + qk6 + ")",
    Kd7 = "[^" + FD1 + "]",
    zk6 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    wk6 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    OjA = "[" + op7 + "]",
    qd7 = "\\u200d",
    Fp7 = "(?:" + ep7 + "|" + Ad7 + ")",
    A32 = "(?:" + OjA + "|" + Ad7 + ")",
    Qp7 = "(?:" + Yk6 + "(?:d|ll|m|re|s|t|ve))?",
    Up7 = "(?:" + Yk6 + "(?:D|LL|M|RE|S|T|VE))?",
    Yd7 = e52 + "?",
    zd7 = "[" + ap7 + "]?",
    K32 = "(?:" + qd7 + "(?:" + [Kd7, zk6, wk6].join("|") + ")" + zd7 + Yd7 + ")*",
    wd7 = zd7 + Yd7 + K32,
    q32 = "(?:" + [t52, zk6, wk6].join("|") + ")" + wd7,
    Y32 = "(?:" + [Kd7 + gD1 + "?", gD1, zk6, wk6, s52].join("|") + ")",
    z32 = RegExp(Yk6, "g"),
    w32 = RegExp(gD1, "g"),
    H32 = RegExp(qk6 + "(?=" + qk6 + ")|" + Y32 + wd7, "g"),
    J32 = RegExp([OjA + "?" + ep7 + "+" + Qp7 + "(?=" + [gp7, OjA, "$"].join("|") + ")", A32 + "+" + Up7 + "(?=" + [gp7, OjA + Fp7, "$"].join("|") + ")", OjA + "?" + Fp7 + "+" + Qp7, OjA + "+" + Up7, tp7, q32].join("|"), "g"),
    O32 = RegExp("[" + qd7 + FD1 + lp7 + ip7 + ap7 + "]"),
    X32 = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    $32 = {
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss",
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ď": "D",
      "Đ": "D",
      "ď": "d",
      "đ": "d",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Į": "I",
      "İ": "I",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "ĸ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "Ŋ": "N",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŋ": "n",
      "Ō": "O",
      "Ŏ": "O",
      "Ő": "O",
      "ō": "o",
      "ŏ": "o",
      "ő": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "Ŵ": "W",
      "ŵ": "w",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "Oe",
      "œ": "oe",
      "ŉ": "'n",
      "ſ": "ss"
    },
    _32 = typeof global == "object" && global && global.Object === Object && global,
    G32 = typeof self == "object" && self && self.Object === Object && self,
    Z32 = _32 || G32 || Function("return this")();
  function W32(A, K, q, Y) {
    var z = -1,
      w = A ? A.length : 0;
    if (Y && w) q = A[++z];
    while (++z < w) q = K(q, A[z], z, A);
    return q;
  }
  function D32(A) {
    return A.split("");
  }
  function j32(A) {
    return A.match(l52) || [];
  }
  function M32(A) {
    return function (K) {
      return A == null ? void 0 : A[K];
    };
  }
  var P32 = M32($32);
  function Hd7(A) {
    return O32.test(A);
  }
  function V32(A) {
    return X32.test(A);
  }
  function f32(A) {
    return Hd7(A) ? N32(A) : D32(A);
  }
  function N32(A) {
    return A.match(H32) || [];
  }
  function T32(A) {
    return A.match(J32) || [];
  }
  var v32 = Object.prototype,
    E32 = v32.toString,
    pp7 = Z32.Symbol,
    dp7 = pp7 ? pp7.prototype : void 0,
    cp7 = dp7 ? dp7.toString : void 0;
  function k32(A, K, q) {
    var Y = -1,
      z = A.length;
    if (K < 0) K = -K > z ? 0 : z + K;
    if (q = q > z ? z : q, q < 0) q += z;
    z = K > q ? 0 : q - K >>> 0, K >>>= 0;
    var w = Array(z);
    while (++Y < z) w[Y] = A[Y + K];
    return w;
  }
  function C32(A) {
    if (typeof A == "string") return A;
    if (S32(A)) return cp7 ? cp7.call(A) : "";
    var K = A + "";
    return K == "0" && 1 / A == -d52 ? "-0" : K;
  }
  function L32(A, K, q) {
    var Y = A.length;
    return q = q === void 0 ? Y : q, !K && q >= Y ? A : k32(A, K, q);
  }
  function R32(A) {
    return function (K) {
      K = QD1(K);
      var q = Hd7(K) ? f32(K) : void 0,
        Y = q ? q[0] : K.charAt(0),
        z = q ? L32(q, 1).join("") : K.slice(1);
      return Y[A]() + z;
    };
  }
  function y32(A) {
    return function (K) {
      return W32(B32(x32(K).replace(z32, "")), A, "");
    };
  }
  function I32(A) {
    return !!A && typeof A == "object";
  }
  function S32(A) {
    return typeof A == "symbol" || I32(A) && E32.call(A) == c52;
  }
  function QD1(A) {
    return A == null ? "" : C32(A);
  }
  var h32 = y32(function (A, K, q) {
    return K = K.toLowerCase(), A + (q ? b32(K) : K);
  });
  function b32(A) {
    return u32(QD1(A).toLowerCase());
  }
  function x32(A) {
    return A = QD1(A), A && A.replace(i52, P32).replace(w32, "");
  }
  var u32 = R32("toUpperCase");
  function B32(A, K, q) {
    if (A = QD1(A), K = q ? void 0 : K, K === void 0) return V32(A) ? T32(A) : j32(A);
    return A.match(K) || [];
  }
  Jd7.exports = h32;
});

// Register to shared state
__$.Od7 = Od7;
