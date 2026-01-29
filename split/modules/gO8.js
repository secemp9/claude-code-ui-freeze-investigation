// Module: gO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gO8 = v((yCz, mO8) => {
  function LVq(A) {
    var K = "[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",
      q = "\\|[^]*?\\|",
      Y = "(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",
      z = {
        className: "literal",
        begin: "\\b(t{1}|nil)\\b"
      },
      w = {
        className: "number",
        variants: [{
          begin: Y,
          relevance: 0
        }, {
          begin: "#(b|B)[0-1]+(/[0-1]+)?"
        }, {
          begin: "#(o|O)[0-7]+(/[0-7]+)?"
        }, {
          begin: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"
        }, {
          begin: "#(c|C)\\(" + Y + " +" + Y,
          end: "\\)"
        }]
      },
      H = A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }),
      J = A.COMMENT(";", "$", {
        relevance: 0
      }),
      O = {
        begin: "\\*",
        end: "\\*"
      },
      X = {
        className: "symbol",
        begin: "[:&]" + K
      },
      $ = {
        begin: K,
        relevance: 0
      },
      _ = {
        begin: q
      },
      G = {
        begin: "\\(",
        end: "\\)",
        contains: ["self", z, H, w, $]
      },
      Z = {
        contains: [w, H, O, X, G, $],
        variants: [{
          begin: "['`]\\(",
          end: "\\)"
        }, {
          begin: "\\(quote ",
          end: "\\)",
          keywords: {
            name: "quote"
          }
        }, {
          begin: "'" + q
        }]
      },
      W = {
        variants: [{
          begin: "'" + K
        }, {
          begin: "#'" + K + "(::" + K + ")*"
        }]
      },
      D = {
        begin: "\\(\\s*",
        end: "\\)"
      },
      j = {
        endsWithParent: !0,
        relevance: 0
      };
    return D.contains = [{
      className: "name",
      variants: [{
        begin: K,
        relevance: 0
      }, {
        begin: q
      }]
    }, j], j.contains = [Z, W, D, z, w, H, J, O, X, _, $], {
      name: "Lisp",
      illegal: /\S/,
      contains: [w, A.SHEBANG(), z, H, J, Z, W, D, $]
    };
  }
  mO8.exports = LVq;
});

// Register to shared state
__$.gO8 = gO8;
