// Module: WO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WO8 = v((PCz, ZO8) => {
  var AVq = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
    KVq = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    qVq = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
    YVq = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    zVq = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
    wVq = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
    HVq = [].concat(zVq, wVq, qVq, YVq);
  function JVq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function GO8(A) {
    return Wx1("(?=", A, ")");
  }
  function Wx1(...A) {
    return A.map(q => JVq(q)).join("");
  }
  function OVq(A) {
    let K = (N, {
        after: T
      }) => {
        let C = "</" + N[0].slice(1);
        return N.input.indexOf(C, T) !== -1;
      },
      q = "[A-Za-z$_][0-9A-Za-z$_]*",
      Y = {
        begin: "<>",
        end: "</>"
      },
      z = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (N, T) => {
          let C = N[0].length + N.index,
            R = N.input[C];
          if (R === "<") {
            T.ignoreMatch();
            return;
          }
          if (R === ">") {
            if (!K(N, {
              after: C
            })) T.ignoreMatch();
          }
        }
      },
      w = {
        $pattern: "[A-Za-z$_][0-9A-Za-z$_]*",
        keyword: AVq,
        literal: KVq,
        built_in: HVq
      },
      H = "[0-9](_?[0-9])*",
      J = "\\.([0-9](_?[0-9])*)",
      O = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
      X = {
        className: "number",
        variants: [{
          begin: "(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((\\.([0-9](_?[0-9])*))|\\.)?|(\\.([0-9](_?[0-9])*)))[eE][+-]?([0-9](_?[0-9])*)\\b"
        }, {
          begin: "\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((\\.([0-9](_?[0-9])*))\\b|\\.)?|(\\.([0-9](_?[0-9])*))\\b"
        }, {
          begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
        }, {
          begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
        }, {
          begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
        }, {
          begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
        }, {
          begin: "\\b0[0-7]+n?\\b"
        }],
        relevance: 0
      },
      $ = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: w,
        contains: []
      },
      _ = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [A.BACKSLASH_ESCAPE, $],
          subLanguage: "xml"
        }
      },
      G = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [A.BACKSLASH_ESCAPE, $],
          subLanguage: "css"
        }
      },
      Z = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [A.BACKSLASH_ESCAPE, $]
      },
      D = {
        className: "comment",
        variants: [A.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [{
            className: "doctag",
            begin: "@[A-Za-z]+",
            contains: [{
              className: "type",
              begin: "\\{",
              end: "\\}",
              relevance: 0
            }, {
              className: "variable",
              begin: "[A-Za-z$_][0-9A-Za-z$_]*(?=\\s*(-)|$)",
              endsParent: !0,
              relevance: 0
            }, {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }]
          }]
        }), A.C_BLOCK_COMMENT_MODE, A.C_LINE_COMMENT_MODE]
      },
      j = [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, _, G, Z, X, A.REGEXP_MODE];
    $.contains = j.concat({
      begin: /\{/,
      end: /\}/,
      keywords: w,
      contains: ["self"].concat(j)
    });
    let M = [].concat(D, $.contains),
      P = M.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: w,
        contains: ["self"].concat(M)
      }]),
      f = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: w,
        contains: P
      };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: w,
      exports: {
        PARAMS_CONTAINS: P
      },
      illegal: /#(?![$_A-z])/,
      contains: [A.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }), {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, _, G, Z, D, X, {
        begin: Wx1(/[{,\n]\s*/, GO8(Wx1(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, "[A-Za-z$_][0-9A-Za-z$_]*\\s*:"))),
        relevance: 0,
        contains: [{
          className: "attr",
          begin: "[A-Za-z$_][0-9A-Za-z$_]*" + GO8("\\s*:"),
          relevance: 0
        }]
      }, {
        begin: "(" + A.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [D, A.REGEXP_MODE, {
          className: "function",
          begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + A.UNDERSCORE_IDENT_RE + ")\\s*=>",
          returnBegin: !0,
          end: "\\s*=>",
          contains: [{
            className: "params",
            variants: [{
              begin: A.UNDERSCORE_IDENT_RE,
              relevance: 0
            }, {
              className: null,
              begin: /\(\s*\)/,
              skip: !0
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: w,
              contains: P
            }]
          }]
        }, {
          begin: /,/,
          relevance: 0
        }, {
          className: "",
          begin: /\s/,
          end: /\s*/,
          skip: !0
        }, {
          variants: [{
            begin: Y.begin,
            end: Y.end
          }, {
            begin: z.begin,
            "on:begin": z.isTrulyOpeningTag,
            end: z.end
          }],
          subLanguage: "xml",
          contains: [{
            begin: z.begin,
            end: z.end,
            skip: !0,
            contains: ["self"]
          }]
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "function",
        end: /[{;]/,
        excludeEnd: !0,
        keywords: w,
        contains: ["self", A.inherit(A.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        }), f],
        illegal: /%/
      }, {
        beginKeywords: "while if switch catch for"
      }, {
        className: "function",
        begin: A.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        contains: [f, A.inherit(A.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        })]
      }, {
        variants: [{
          begin: "\\.[A-Za-z$_][0-9A-Za-z$_]*"
        }, {
          begin: "\\$[A-Za-z$_][0-9A-Za-z$_]*"
        }],
        relevance: 0
      }, {
        className: "class",
        beginKeywords: "class",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:"[\]]/,
        contains: [{
          beginKeywords: "extends"
        }, A.UNDERSCORE_TITLE_MODE]
      }, {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: !0,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        }), "self", f]
      }, {
        begin: "(get|set)\\s+(?=[A-Za-z$_][0-9A-Za-z$_]*\\()",
        end: /\{/,
        keywords: "get set",
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        }), {
          begin: /\(\)/
        }, f]
      }, {
        begin: /\$[(.]/
      }]
    };
  }
  ZO8.exports = OVq;
});

// Register to shared state
__$.WO8 = WO8;
