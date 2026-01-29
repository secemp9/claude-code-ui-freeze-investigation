// Module: LX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LX8 = v((NLz, CX8) => {
  function Sfq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function hfq(...A) {
    return A.map(q => Sfq(q)).join("");
  }
  function bfq(A) {
    let K = {
        keyword: "in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4d Promise"
      },
      q = "[a-zA-Z_][a-zA-Z0-9\\._]*",
      Y = {
        className: "keyword",
        begin: "\\bproperty\\b",
        starts: {
          className: "string",
          end: "(:|=|;|,|//|/\\*|$)",
          returnEnd: !0
        }
      },
      z = {
        className: "keyword",
        begin: "\\bsignal\\b",
        starts: {
          className: "string",
          end: "(\\(|:|=|;|,|//|/\\*|$)",
          returnEnd: !0
        }
      },
      w = {
        className: "attribute",
        begin: "\\bid\\s*:",
        starts: {
          className: "string",
          end: "[a-zA-Z_][a-zA-Z0-9\\._]*",
          returnEnd: !1
        }
      },
      H = {
        begin: "[a-zA-Z_][a-zA-Z0-9\\._]*\\s*:",
        returnBegin: !0,
        contains: [{
          className: "attribute",
          begin: "[a-zA-Z_][a-zA-Z0-9\\._]*",
          end: "\\s*:",
          excludeEnd: !0,
          relevance: 0
        }],
        relevance: 0
      },
      J = {
        begin: hfq("[a-zA-Z_][a-zA-Z0-9\\._]*", /\s*\{/),
        end: /\{/,
        returnBegin: !0,
        relevance: 0,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "[a-zA-Z_][a-zA-Z0-9\\._]*"
        })]
      };
    return {
      name: "QML",
      aliases: ["qt"],
      case_insensitive: !1,
      keywords: K,
      contains: [{
        className: "meta",
        begin: /^\s*['"]use (strict|asm)['"]/
      }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
        className: "string",
        begin: "`",
        end: "`",
        contains: [A.BACKSLASH_ESCAPE, {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}"
        }]
      }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
        className: "number",
        variants: [{
          begin: "\\b(0[bB][01]+)"
        }, {
          begin: "\\b(0[oO][0-7]+)"
        }, {
          begin: A.C_NUMBER_RE
        }],
        relevance: 0
      }, {
        begin: "(" + A.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.REGEXP_MODE, {
          begin: /</,
          end: />\s*[);\]]/,
          relevance: 0,
          subLanguage: "xml"
        }],
        relevance: 0
      }, z, Y, {
        className: "function",
        beginKeywords: "function",
        end: /\{/,
        excludeEnd: !0,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: /[A-Za-z$_][0-9A-Za-z$_]*/
        }), {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
        }],
        illegal: /\[|%/
      }, {
        begin: "\\." + A.IDENT_RE,
        relevance: 0
      }, w, H, J],
      illegal: /#/
    };
  }
  CX8.exports = bfq;
});

// Register to shared state
__$.LX8 = LX8;
