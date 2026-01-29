// Module: SX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SX8 = v((vLz, IX8) => {
  function mfq(A) {
    function K(T) {
      return T.map(function (C) {
        return C.split("").map(function (R) {
          return "\\" + R;
        }).join("");
      }).join("|");
    }
    let q = "~?[a-z$_][0-9a-zA-Z$_]*",
      Y = "`?[A-Z$_][0-9a-zA-Z$_]*",
      z = "'?[a-z$_][0-9a-z$_]*",
      w = "\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*(" + z + "\\s*(," + z + "\\s*)*)?\\))?",
      H = q + "(" + w + "){0,2}",
      J = "(" + K(["||", "++", "**", "+.", "*", "/", "*.", "/.", "..."]) + "|\\|>|&&|==|===)",
      O = "\\s+" + J + "\\s+",
      X = {
        keyword: "and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",
        built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",
        literal: "true false"
      },
      $ = "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
      _ = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: $
        }, {
          begin: "\\(-" + $ + "\\)"
        }]
      },
      G = {
        className: "operator",
        relevance: 0,
        begin: J
      },
      Z = [{
        className: "identifier",
        relevance: 0,
        begin: q
      }, G, _],
      W = [A.QUOTE_STRING_MODE, G, {
        className: "module",
        begin: "\\b" + Y,
        returnBegin: !0,
        end: ".",
        contains: [{
          className: "identifier",
          begin: Y,
          relevance: 0
        }]
      }],
      D = [{
        className: "module",
        begin: "\\b" + Y,
        returnBegin: !0,
        end: ".",
        relevance: 0,
        contains: [{
          className: "identifier",
          begin: Y,
          relevance: 0
        }]
      }],
      j = {
        begin: q,
        end: "(,|\\n|\\))",
        relevance: 0,
        contains: [G, {
          className: "typing",
          begin: ":",
          end: "(,|\\n)",
          returnBegin: !0,
          relevance: 0,
          contains: D
        }]
      },
      M = {
        className: "function",
        relevance: 0,
        keywords: X,
        variants: [{
          begin: "\\s(\\(\\.?.*?\\)|" + q + ")\\s*=>",
          end: "\\s*=>",
          returnBegin: !0,
          relevance: 0,
          contains: [{
            className: "params",
            variants: [{
              begin: q
            }, {
              begin: H
            }, {
              begin: /\(\s*\)/
            }]
          }]
        }, {
          begin: "\\s\\(\\.?[^;\\|]*\\)\\s*=>",
          end: "\\s=>",
          returnBegin: !0,
          relevance: 0,
          contains: [{
            className: "params",
            relevance: 0,
            variants: [j]
          }]
        }, {
          begin: "\\(\\.\\s" + q + "\\)\\s*=>"
        }]
      };
    W.push(M);
    let P = {
        className: "constructor",
        begin: Y + "\\(",
        end: "\\)",
        illegal: "\\n",
        keywords: X,
        contains: [A.QUOTE_STRING_MODE, G, {
          className: "params",
          begin: "\\b" + q
        }]
      },
      f = {
        className: "pattern-match",
        begin: "\\|",
        returnBegin: !0,
        keywords: X,
        end: "=>",
        relevance: 0,
        contains: [P, G, {
          relevance: 0,
          className: "constructor",
          begin: Y
        }]
      },
      N = {
        className: "module-access",
        keywords: X,
        returnBegin: !0,
        variants: [{
          begin: "\\b(" + Y + "\\.)+" + q
        }, {
          begin: "\\b(" + Y + "\\.)+\\(",
          end: "\\)",
          returnBegin: !0,
          contains: [M, {
            begin: "\\(",
            end: "\\)",
            skip: !0
          }].concat(W)
        }, {
          begin: "\\b(" + Y + "\\.)+\\{",
          end: /\}/
        }],
        contains: W
      };
    return D.push(N), {
      name: "ReasonML",
      aliases: ["re"],
      keywords: X,
      illegal: "(:-|:=|\\$\\{|\\+=)",
      contains: [A.COMMENT("/\\*", "\\*/", {
        illegal: "^(#,\\/\\/)"
      }), {
        className: "character",
        begin: "'(\\\\[^']+|[^'])'",
        illegal: "\\n",
        relevance: 0
      }, A.QUOTE_STRING_MODE, {
        className: "literal",
        begin: "\\(\\)",
        relevance: 0
      }, {
        className: "literal",
        begin: "\\[\\|",
        end: "\\|\\]",
        relevance: 0,
        contains: Z
      }, {
        className: "literal",
        begin: "\\[",
        end: "\\]",
        relevance: 0,
        contains: Z
      }, P, {
        className: "operator",
        begin: O,
        illegal: "-->",
        relevance: 0
      }, _, A.C_LINE_COMMENT_MODE, f, M, {
        className: "module-def",
        begin: "\\bmodule\\s+" + q + "\\s+" + Y + "\\s+=\\s+\\{",
        end: /\}/,
        returnBegin: !0,
        keywords: X,
        relevance: 0,
        contains: [{
          className: "module",
          relevance: 0,
          begin: Y
        }, {
          begin: /\{/,
          end: /\}/,
          skip: !0
        }].concat(W)
      }, N]
    };
  }
  IX8.exports = mfq;
});

// Register to shared state
__$.SX8 = SX8;
