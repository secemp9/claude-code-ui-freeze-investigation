// Module: rz8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rz8 = v((UEz, nz8) => {
  function Pjq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function Vjq(...A) {
    return A.map(q => Pjq(q)).join("");
  }
  function fjq(A) {
    let K = /[a-zA-Z_$][a-zA-Z0-9_$]*/,
      q = /([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)/,
      Y = {
        className: "rest_arg",
        begin: /[.]{3}/,
        end: K,
        relevance: 10
      };
    return {
      name: "ActionScript",
      aliases: ["as"],
      keywords: {
        keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
        literal: "true false null undefined"
      },
      contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.C_NUMBER_MODE, {
        className: "class",
        beginKeywords: "package",
        end: /\{/,
        contains: [A.TITLE_MODE]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        contains: [{
          beginKeywords: "extends implements"
        }, A.TITLE_MODE]
      }, {
        className: "meta",
        beginKeywords: "import include",
        end: /;/,
        keywords: {
          "meta-keyword": "import include"
        }
      }, {
        className: "function",
        beginKeywords: "function",
        end: /[{;]/,
        excludeEnd: !0,
        illegal: /\S/,
        contains: [A.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, Y]
        }, {
          begin: Vjq(/:\s*/, q)
        }]
      }, A.METHOD_GUARD],
      illegal: /#/
    };
  }
  nz8.exports = fjq;
});

// Register to shared state
__$.rz8 = rz8;
