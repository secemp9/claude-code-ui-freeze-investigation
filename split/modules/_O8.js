// Module: _O8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _O8 = v((MCz, $O8) => {
  var dwA = "[0-9](_*[0-9])*",
    PaA = `\\.(${dwA})`,
    VaA = "[0-9a-fA-F](_*[0-9a-fA-F])*",
    tPq = {
      className: "number",
      variants: [{
        begin: `(\\b(${dwA})((${PaA})|\\.)?|(${PaA}))[eE][+-]?(${dwA})[fFdD]?\\b`
      }, {
        begin: `\\b(${dwA})((${PaA})[fFdD]?\\b|\\.([fFdD]\\b)?)`
      }, {
        begin: `(${PaA})[fFdD]?\\b`
      }, {
        begin: `\\b(${dwA})[fFdD]\\b`
      }, {
        begin: `\\b0[xX]((${VaA})\\.?|(${VaA})?\\.(${VaA}))[pP][+-]?(${dwA})[fFdD]?\\b`
      }, {
        begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
      }, {
        begin: `\\b0[xX](${VaA})[lL]?\\b`
      }, {
        begin: "\\b0(_*[0-7])*[lL]?\\b"
      }, {
        begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
      }],
      relevance: 0
    };
  function ePq(A) {
    var K = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
      q = K + "(<" + K + "(\\s*,\\s*" + K + ")*>)?",
      Y = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
      z = {
        className: "meta",
        begin: "@" + K,
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
        }]
      };
    let w = tPq;
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: Y,
      illegal: /<\/|#/,
      contains: [A.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{
          begin: /\w+@/,
          relevance: 0
        }, {
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      }), {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
        className: "class",
        beginKeywords: "class interface enum",
        end: /[{;=]/,
        excludeEnd: !0,
        relevance: 1,
        keywords: "class interface enum",
        illegal: /[:"\[\]]/,
        contains: [{
          beginKeywords: "extends implements"
        }, A.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "new throw return else",
        relevance: 0
      }, {
        className: "class",
        begin: "record\\s+" + A.UNDERSCORE_IDENT_RE + "\\s*\\(",
        returnBegin: !0,
        excludeEnd: !0,
        end: /[{;=]/,
        keywords: Y,
        contains: [{
          beginKeywords: "record"
        }, {
          begin: A.UNDERSCORE_IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          relevance: 0,
          contains: [A.UNDERSCORE_TITLE_MODE]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: Y,
          relevance: 0,
          contains: [A.C_BLOCK_COMMENT_MODE]
        }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
      }, {
        className: "function",
        begin: "(" + q + "\\s+)+" + A.UNDERSCORE_IDENT_RE + "\\s*\\(",
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: Y,
        contains: [{
          begin: A.UNDERSCORE_IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          relevance: 0,
          contains: [A.UNDERSCORE_TITLE_MODE]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: Y,
          relevance: 0,
          contains: [z, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, w, A.C_BLOCK_COMMENT_MODE]
        }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
      }, w, z]
    };
  }
  $O8.exports = ePq;
});

// Register to shared state
__$._O8 = _O8;
