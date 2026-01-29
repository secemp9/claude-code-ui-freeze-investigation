// Module: NX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NX8 = v((PLz, fX8) => {
  function kfq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function Cfq(A) {
    return Lfq("(?=", A, ")");
  }
  function Lfq(...A) {
    return A.map(q => kfq(q)).join("");
  }
  function Rfq(A) {
    let w = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: ["and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
        built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
        literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
        type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
      },
      H = {
        className: "meta",
        begin: /^(>>>|\.\.\.) /
      },
      J = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: w,
        illegal: /#/
      },
      O = {
        begin: /\{\{/,
        relevance: 0
      },
      X = {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE],
        variants: [{
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [A.BACKSLASH_ESCAPE, H],
          relevance: 10
        }, {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [A.BACKSLASH_ESCAPE, H],
          relevance: 10
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [A.BACKSLASH_ESCAPE, H, O, J]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [A.BACKSLASH_ESCAPE, H, O, J]
        }, {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        }, {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [A.BACKSLASH_ESCAPE, O, J]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [A.BACKSLASH_ESCAPE, O, J]
        }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
      },
      $ = "[0-9](_?[0-9])*",
      _ = "(\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.",
      G = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: "(\\b([0-9](_?[0-9])*)|((\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.))[eE][+-]?([0-9](_?[0-9])*)[jJ]?\\b"
        }, {
          begin: "((\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.)[jJ]?"
        }, {
          begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"
        }, {
          begin: "\\b0[bB](_?[01])+[lL]?\\b"
        }, {
          begin: "\\b0[oO](_?[0-7])+[lL]?\\b"
        }, {
          begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"
        }, {
          begin: "\\b([0-9](_?[0-9])*)[jJ]\\b"
        }]
      },
      Z = {
        className: "comment",
        begin: Cfq(/# type:/),
        end: /$/,
        keywords: w,
        contains: [{
          begin: /# type:/
        }, {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }]
      },
      W = {
        className: "params",
        variants: [{
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        }, {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: w,
          contains: ["self", H, G, X, A.HASH_COMMENT_MODE]
        }]
      };
    return J.contains = [X, G, H], {
      name: "Python",
      aliases: ["py", "gyp", "ipython"],
      keywords: w,
      illegal: /(<\/|->|\?)|=>/,
      contains: [H, G, {
        begin: /\bself\b/
      }, {
        beginKeywords: "if",
        relevance: 0
      }, X, Z, A.HASH_COMMENT_MODE, {
        variants: [{
          className: "function",
          beginKeywords: "def"
        }, {
          className: "class",
          beginKeywords: "class"
        }],
        end: /:/,
        illegal: /[${=;\n,]/,
        contains: [A.UNDERSCORE_TITLE_MODE, W, {
          begin: /->/,
          endsWithParent: !0,
          keywords: w
        }]
      }, {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [G, W, X]
      }]
    };
  }
  fX8.exports = Rfq;
});

// Register to shared state
__$.NX8 = NX8;
