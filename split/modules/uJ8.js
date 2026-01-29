// Module: uJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uJ8 = v((zCz, xJ8) => {
  function EPq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function kPq(A) {
    return CPq("(?=", A, ")");
  }
  function CPq(...A) {
    return A.map(q => EPq(q)).join("");
  }
  function Gx1(A, K = {}) {
    return K.variants = A, K;
  }
  function LPq(A) {
    let q = Gx1([A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{
          begin: /\w+@/,
          relevance: 0
        }, {
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      })]),
      Y = {
        className: "regexp",
        begin: /~?\/[^\/\n]+\//,
        contains: [A.BACKSLASH_ESCAPE]
      },
      z = Gx1([A.BINARY_NUMBER_MODE, A.C_NUMBER_MODE]),
      w = Gx1([{
        begin: /"""/,
        end: /"""/
      }, {
        begin: /'''/,
        end: /'''/
      }, {
        begin: "\\$/",
        end: "/\\$",
        relevance: 10
      }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE], {
        className: "string"
      });
    return {
      name: "Groovy",
      keywords: {
        built_in: "this super",
        literal: "true false null",
        keyword: "byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
      },
      contains: [A.SHEBANG({
        binary: "groovy",
        relevance: 10
      }), q, w, Y, z, {
        className: "class",
        beginKeywords: "class interface trait enum",
        end: /\{/,
        illegal: ":",
        contains: [{
          beginKeywords: "extends implements"
        }, A.UNDERSCORE_TITLE_MODE]
      }, {
        className: "meta",
        begin: "@[A-Za-z]+",
        relevance: 0
      }, {
        className: "attr",
        begin: "[A-Za-z0-9_$]+[ \t]*:",
        relevance: 0
      }, {
        begin: /\?/,
        end: /:/,
        relevance: 0,
        contains: [q, w, Y, z, "self"]
      }, {
        className: "symbol",
        begin: "^[ \t]*" + kPq("[A-Za-z0-9_$]+:"),
        excludeBegin: !0,
        end: "[A-Za-z0-9_$]+:",
        relevance: 0
      }],
      illegal: /#|<\//
    };
  }
  xJ8.exports = LPq;
});

// Register to shared state
__$.uJ8 = uJ8;
