// Module: eJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eJ8 = v((GCz, tJ8) => {
  function cPq(A) {
    var K = "a-zA-Z_\\-!.?+*=<>&#'",
      q = "[" + K + "][" + K + "0-9/;:]*",
      Y = {
        $pattern: q,
        "builtin-name": "!= % %= & &= * ** **= *= *map + += , --build-class-- --import-- -= . / // //= /= < << <<= <= = > >= >> >>= @ @= ^ ^= abs accumulate all and any ap-compose ap-dotimes ap-each ap-each-while ap-filter ap-first ap-if ap-last ap-map ap-map-when ap-pipe ap-reduce ap-reject apply as-> ascii assert assoc bin break butlast callable calling-module-name car case cdr chain chr coll? combinations compile compress cond cons cons? continue count curry cut cycle dec def default-method defclass defmacro defmacro-alias defmacro/g! defmain defmethod defmulti defn defn-alias defnc defnr defreader defseq del delattr delete-route dict-comp dir disassemble dispatch-reader-macro distinct divmod do doto drop drop-last drop-while empty? end-sequence eval eval-and-compile eval-when-compile even? every? except exec filter first flatten float? fn fnc fnr for for* format fraction genexpr gensym get getattr global globals group-by hasattr hash hex id identity if if* if-not if-python2 import in inc input instance? integer integer-char? integer? interleave interpose is is-coll is-cons is-empty is-even is-every is-float is-instance is-integer is-integer-char is-iterable is-iterator is-keyword is-neg is-none is-not is-numeric is-odd is-pos is-string is-symbol is-zero isinstance islice issubclass iter iterable? iterate iterator? keyword keyword? lambda last len let lif lif-not list* list-comp locals loop macro-error macroexpand macroexpand-1 macroexpand-all map max merge-with method-decorator min multi-decorator multicombinations name neg? next none? nonlocal not not-in not? nth numeric? oct odd? open or ord partition permutations pos? post-route postwalk pow prewalk print product profile/calls profile/cpu put-route quasiquote quote raise range read read-str recursive-replace reduce remove repeat repeatedly repr require rest round route route-with-methods rwm second seq set-comp setattr setv some sorted string string? sum switch symbol? take take-nth take-while tee try unless unquote unquote-splicing vars walk when while with with* with-decorator with-gensyms xi xor yield yield-from zero? zip zip-longest | |= ~"
      },
      z = "[-+]?\\d+(\\.\\d+)?",
      w = {
        begin: q,
        relevance: 0
      },
      H = {
        className: "number",
        begin: z,
        relevance: 0
      },
      J = A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }),
      O = A.COMMENT(";", "$", {
        relevance: 0
      }),
      X = {
        className: "literal",
        begin: /\b([Tt]rue|[Ff]alse|nil|None)\b/
      },
      $ = {
        begin: "[\\[\\{]",
        end: "[\\]\\}]"
      },
      _ = {
        className: "comment",
        begin: "\\^" + q
      },
      G = A.COMMENT("\\^\\{", "\\}"),
      Z = {
        className: "symbol",
        begin: "[:]{1,2}" + q
      },
      W = {
        begin: "\\(",
        end: "\\)"
      },
      D = {
        endsWithParent: !0,
        relevance: 0
      },
      j = {
        className: "name",
        relevance: 0,
        keywords: Y,
        begin: q,
        starts: D
      },
      M = [W, J, _, G, O, Z, $, H, X, w];
    return W.contains = [A.COMMENT("comment", ""), j, D], D.contains = M, $.contains = M, {
      name: "Hy",
      aliases: ["hylang"],
      illegal: /\S/,
      contains: [A.SHEBANG(), W, J, _, G, O, Z, $, H, X]
    };
  }
  tJ8.exports = cPq;
});

// Register to shared state
__$.eJ8 = eJ8;
