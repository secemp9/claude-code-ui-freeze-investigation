// Module: EO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EO8 = v((vCz, vO8) => {
  var cwA = "[0-9](_*[0-9])*",
    faA = `\\.(${cwA})`,
    NaA = "[0-9a-fA-F](_*[0-9a-fA-F])*",
    ZVq = {
      className: "number",
      variants: [{
        begin: `(\\b(${cwA})((${faA})|\\.)?|(${faA}))[eE][+-]?(${cwA})[fFdD]?\\b`
      }, {
        begin: `\\b(${cwA})((${faA})[fFdD]?\\b|\\.([fFdD]\\b)?)`
      }, {
        begin: `(${faA})[fFdD]?\\b`
      }, {
        begin: `\\b(${cwA})[fFdD]\\b`
      }, {
        begin: `\\b0[xX]((${NaA})\\.?|(${NaA})?\\.(${NaA}))[pP][+-]?(${cwA})[fFdD]?\\b`
      }, {
        begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
      }, {
        begin: `\\b0[xX](${NaA})[lL]?\\b`
      }, {
        begin: "\\b0(_*[0-7])*[lL]?\\b"
      }, {
        begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
      }],
      relevance: 0
    };
  function WVq(A) {
    let K = {
        keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
        built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
        literal: "true false null"
      },
      q = {
        className: "keyword",
        begin: /\b(break|continue|return|this)\b/,
        starts: {
          contains: [{
            className: "symbol",
            begin: /@\w+/
          }]
        }
      },
      Y = {
        className: "symbol",
        begin: A.UNDERSCORE_IDENT_RE + "@"
      },
      z = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        contains: [A.C_NUMBER_MODE]
      },
      w = {
        className: "variable",
        begin: "\\$" + A.UNDERSCORE_IDENT_RE
      },
      H = {
        className: "string",
        variants: [{
          begin: '"""',
          end: '"""(?=[^"])',
          contains: [w, z]
        }, {
          begin: "'",
          end: "'",
          illegal: /\n/,
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [A.BACKSLASH_ESCAPE, w, z]
        }]
      };
    z.contains.push(H);
    let J = {
        className: "meta",
        begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + A.UNDERSCORE_IDENT_RE + ")?"
      },
      O = {
        className: "meta",
        begin: "@" + A.UNDERSCORE_IDENT_RE,
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: [A.inherit(H, {
            className: "meta-string"
          })]
        }]
      },
      X = ZVq,
      $ = A.COMMENT("/\\*", "\\*/", {
        contains: [A.C_BLOCK_COMMENT_MODE]
      }),
      _ = {
        variants: [{
          className: "type",
          begin: A.UNDERSCORE_IDENT_RE
        }, {
          begin: /\(/,
          end: /\)/,
          contains: []
        }]
      },
      G = _;
    return G.variants[1].contains = [_], _.variants[1].contains = [G], {
      name: "Kotlin",
      aliases: ["kt", "kts"],
      keywords: K,
      contains: [A.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      }), A.C_LINE_COMMENT_MODE, $, q, Y, J, O, {
        className: "function",
        beginKeywords: "fun",
        end: "[(]|$",
        returnBegin: !0,
        excludeEnd: !0,
        keywords: K,
        relevance: 5,
        contains: [{
          begin: A.UNDERSCORE_IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          relevance: 0,
          contains: [A.UNDERSCORE_TITLE_MODE]
        }, {
          className: "type",
          begin: /</,
          end: />/,
          keywords: "reified",
          relevance: 0
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          endsParent: !0,
          keywords: K,
          relevance: 0,
          contains: [{
            begin: /:/,
            end: /[=,\/]/,
            endsWithParent: !0,
            contains: [_, A.C_LINE_COMMENT_MODE, $],
            relevance: 0
          }, A.C_LINE_COMMENT_MODE, $, J, O, H, A.C_NUMBER_MODE]
        }, $]
      }, {
        className: "class",
        beginKeywords: "class interface trait",
        end: /[:\{(]|$/,
        excludeEnd: !0,
        illegal: "extends implements",
        contains: [{
          beginKeywords: "public protected internal private constructor"
        }, A.UNDERSCORE_TITLE_MODE, {
          className: "type",
          begin: /</,
          end: />/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0
        }, {
          className: "type",
          begin: /[,:]\s*/,
          end: /[<\(,]|$/,
          excludeBegin: !0,
          returnEnd: !0
        }, J, O]
      }, H, {
        className: "meta",
        begin: "^#!/usr/bin/env",
        end: "$",
        illegal: `
`
      }, X]
    };
  }
  vO8.exports = WVq;
});

// Register to shared state
__$.EO8 = EO8;
