// Module: jH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jH8 = v((Tkz, DH8) => {
  function EMq(A) {
    let K = ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
      q = ["public", "private", "protected", "static", "internal", "protected", "abstract", "async", "extern", "override", "unsafe", "virtual", "new", "sealed", "partial"],
      Y = ["default", "false", "null", "true"],
      z = ["abstract", "as", "base", "break", "case", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"],
      w = ["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"],
      H = {
        keyword: z.concat(w),
        built_in: K,
        literal: Y
      },
      J = A.inherit(A.TITLE_MODE, {
        begin: "[a-zA-Z](\\.?\\w)*"
      }),
      O = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      X = {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{
          begin: '""'
        }]
      },
      $ = A.inherit(X, {
        illegal: /\n/
      }),
      _ = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: H
      },
      G = A.inherit(_, {
        illegal: /\n/
      }),
      Z = {
        className: "string",
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, A.BACKSLASH_ESCAPE, G]
      },
      W = {
        className: "string",
        begin: /\$@"/,
        end: '"',
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, {
          begin: '""'
        }, _]
      },
      D = A.inherit(W, {
        illegal: /\n/,
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, {
          begin: '""'
        }, G]
      });
    _.contains = [W, Z, X, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, O, A.C_BLOCK_COMMENT_MODE], G.contains = [D, Z, $, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, O, A.inherit(A.C_BLOCK_COMMENT_MODE, {
      illegal: /\n/
    })];
    let j = {
        variants: [W, Z, X, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
      },
      M = {
        begin: "<",
        end: ">",
        contains: [{
          beginKeywords: "in out"
        }, J]
      },
      P = A.IDENT_RE + "(<" + A.IDENT_RE + "(\\s*,\\s*" + A.IDENT_RE + ")*>)?(\\[\\])?",
      f = {
        begin: "@" + A.IDENT_RE,
        relevance: 0
      };
    return {
      name: "C#",
      aliases: ["cs", "c#"],
      keywords: H,
      illegal: /::/,
      contains: [A.COMMENT("///", "$", {
        returnBegin: !0,
        contains: [{
          className: "doctag",
          variants: [{
            begin: "///",
            relevance: 0
          }, {
            begin: "<!--|-->"
          }, {
            begin: "</?",
            end: ">"
          }]
        }]
      }), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
        }
      }, j, O, {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [{
          beginKeywords: "where class"
        }, J, M, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
      }, {
        beginKeywords: "namespace",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [J, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
      }, {
        beginKeywords: "record",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [J, M, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
      }, {
        className: "meta",
        begin: "^\\s*\\[",
        excludeBegin: !0,
        end: "\\]",
        excludeEnd: !0,
        contains: [{
          className: "meta-string",
          begin: /"/,
          end: /"/
        }]
      }, {
        beginKeywords: "new return throw await else",
        relevance: 0
      }, {
        className: "function",
        begin: "(" + P + "\\s+)+" + A.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: H,
        contains: [{
          beginKeywords: q.join(" "),
          relevance: 0
        }, {
          begin: A.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
          returnBegin: !0,
          contains: [A.TITLE_MODE, M],
          relevance: 0
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: H,
          relevance: 0,
          contains: [j, O, A.C_BLOCK_COMMENT_MODE]
        }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
      }, f]
    };
  }
  DH8.exports = EMq;
});

// Register to shared state
__$.jH8 = jH8;
