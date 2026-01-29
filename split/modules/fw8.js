// Module: fw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fw8 = v((sEz, Vw8) => {
  function Bjq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function Jx1(...A) {
    return A.map(q => Bjq(q)).join("");
  }
  function mjq(A) {
    let K = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance",
      q = "get set args call";
    return {
      name: "AspectJ",
      keywords: K,
      illegal: /<\/|#/,
      contains: [A.COMMENT(/\/\*\*/, /\*\//, {
        relevance: 0,
        contains: [{
          begin: /\w+@/,
          relevance: 0
        }, {
          className: "doctag",
          begin: /@[A-Za-z]+/
        }]
      }), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
        className: "class",
        beginKeywords: "aspect",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:;"\[\]]/,
        contains: [{
          beginKeywords: "extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton"
        }, A.UNDERSCORE_TITLE_MODE, {
          begin: /\([^\)]*/,
          end: /[)]+/,
          keywords: K + " get set args call",
          excludeEnd: !1
        }]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /[{;=]/,
        excludeEnd: !0,
        relevance: 0,
        keywords: "class interface",
        illegal: /[:"\[\]]/,
        contains: [{
          beginKeywords: "extends implements"
        }, A.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "pointcut after before around throwing returning",
        end: /[)]/,
        excludeEnd: !1,
        illegal: /["\[\]]/,
        contains: [{
          begin: Jx1(A.UNDERSCORE_IDENT_RE, /\s*\(/),
          returnBegin: !0,
          contains: [A.UNDERSCORE_TITLE_MODE]
        }]
      }, {
        begin: /[:]/,
        returnBegin: !0,
        end: /[{;]/,
        relevance: 0,
        excludeEnd: !1,
        keywords: K,
        illegal: /["\[\]]/,
        contains: [{
          begin: Jx1(A.UNDERSCORE_IDENT_RE, /\s*\(/),
          keywords: K + " get set args call",
          relevance: 0
        }, A.QUOTE_STRING_MODE]
      }, {
        beginKeywords: "new throw",
        relevance: 0
      }, {
        className: "function",
        begin: /\w+ +\w+(\.\w+)?\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
        returnBegin: !0,
        end: /[{;=]/,
        keywords: K,
        excludeEnd: !0,
        contains: [{
          begin: Jx1(A.UNDERSCORE_IDENT_RE, /\s*\(/),
          returnBegin: !0,
          relevance: 0,
          contains: [A.UNDERSCORE_TITLE_MODE]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          keywords: K,
          contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, A.C_BLOCK_COMMENT_MODE]
        }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
      }, A.C_NUMBER_MODE, {
        className: "meta",
        begin: /@[A-Za-z]+/
      }]
    };
  }
  Vw8.exports = mjq;
});

// Register to shared state
__$.fw8 = fw8;
