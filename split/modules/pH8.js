// Module: pH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pH8 = v((ukz, UH8) => {
  function rMq(A) {
    let K = {
        className: "string",
        variants: [A.inherit(A.QUOTE_STRING_MODE, {
          begin: '((u8?|U)|L)?"'
        }), {
          begin: '(u8?|U)?R"',
          end: '"',
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: "'\\\\?.",
          end: "'",
          illegal: "."
        }]
      },
      q = {
        className: "number",
        variants: [{
          begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, {
          begin: A.C_NUMBER_RE
        }],
        relevance: 0
      },
      Y = {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "if else elif endif define undef ifdef ifndef"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, {
          beginKeywords: "include",
          end: "$",
          keywords: {
            "meta-keyword": "include"
          },
          contains: [A.inherit(K, {
            className: "meta-string"
          }), {
            className: "meta-string",
            begin: "<",
            end: ">",
            illegal: "\\n"
          }]
        }, K, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
      },
      z = {
        className: "variable",
        begin: /&[a-z\d_]*\b/
      },
      w = {
        className: "meta-keyword",
        begin: "/[a-z][a-z\\d-]*/"
      },
      H = {
        className: "symbol",
        begin: "^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"
      },
      J = {
        className: "params",
        begin: "<",
        end: ">",
        contains: [q, z]
      },
      O = {
        className: "class",
        begin: /[a-zA-Z_][a-zA-Z\d_@]*\s\{/,
        end: /[{;=]/,
        returnBegin: !0,
        excludeEnd: !0
      };
    return {
      name: "Device Tree",
      keywords: "",
      contains: [{
        className: "class",
        begin: "/\\s*\\{",
        end: /\};/,
        relevance: 10,
        contains: [z, w, H, O, J, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, q, K]
      }, z, w, H, O, J, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, q, K, Y, {
        begin: A.IDENT_RE + "::",
        keywords: ""
      }]
    };
  }
  UH8.exports = rMq;
});

// Register to shared state
__$.pH8 = pH8;
