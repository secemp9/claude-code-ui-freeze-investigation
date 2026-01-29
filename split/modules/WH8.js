// Module: WH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WH8 = v((Nkz, ZH8) => {
  function vMq(A) {
    let H = {
        $pattern: "[a-zA-Z_]\\w*[!?=]?",
        keyword: "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
        literal: "false nil true"
      },
      J = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: H
      },
      O = {
        className: "template-variable",
        variants: [{
          begin: "\\{\\{",
          end: "\\}\\}"
        }, {
          begin: "\\{%",
          end: "%\\}"
        }],
        keywords: H
      };
    function X(j, M) {
      let P = [{
        begin: j,
        end: M
      }];
      return P[0].contains = P, P;
    }
    let $ = {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE, J],
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /`/,
          end: /`/
        }, {
          begin: "%[Qwi]?\\(",
          end: "\\)",
          contains: X("\\(", "\\)")
        }, {
          begin: "%[Qwi]?\\[",
          end: "\\]",
          contains: X("\\[", "\\]")
        }, {
          begin: "%[Qwi]?\\{",
          end: /\}/,
          contains: X(/\{/, /\}/)
        }, {
          begin: "%[Qwi]?<",
          end: ">",
          contains: X("<", ">")
        }, {
          begin: "%[Qwi]?\\|",
          end: "\\|"
        }, {
          begin: /<<-\w+$/,
          end: /^\s*\w+$/
        }],
        relevance: 0
      },
      _ = {
        className: "string",
        variants: [{
          begin: "%q\\(",
          end: "\\)",
          contains: X("\\(", "\\)")
        }, {
          begin: "%q\\[",
          end: "\\]",
          contains: X("\\[", "\\]")
        }, {
          begin: "%q\\{",
          end: /\}/,
          contains: X(/\{/, /\}/)
        }, {
          begin: "%q<",
          end: ">",
          contains: X("<", ">")
        }, {
          begin: "%q\\|",
          end: "\\|"
        }, {
          begin: /<<-'\w+'$/,
          end: /^\s*\w+$/
        }],
        relevance: 0
      },
      G = {
        begin: "(?!%\\})(" + A.RE_STARTERS_RE + "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
        keywords: "case if select unless until when while",
        contains: [{
          className: "regexp",
          contains: [A.BACKSLASH_ESCAPE, J],
          variants: [{
            begin: "//[a-z]*",
            relevance: 0
          }, {
            begin: "/(?!\\/)",
            end: "/[a-z]*"
          }]
        }],
        relevance: 0
      },
      Z = {
        className: "regexp",
        contains: [A.BACKSLASH_ESCAPE, J],
        variants: [{
          begin: "%r\\(",
          end: "\\)",
          contains: X("\\(", "\\)")
        }, {
          begin: "%r\\[",
          end: "\\]",
          contains: X("\\[", "\\]")
        }, {
          begin: "%r\\{",
          end: /\}/,
          contains: X(/\{/, /\}/)
        }, {
          begin: "%r<",
          end: ">",
          contains: X("<", ">")
        }, {
          begin: "%r\\|",
          end: "\\|"
        }],
        relevance: 0
      },
      W = {
        className: "meta",
        begin: "@\\[",
        end: "\\]",
        contains: [A.inherit(A.QUOTE_STRING_MODE, {
          className: "meta-string"
        })]
      },
      D = [O, $, _, Z, G, W, A.HASH_COMMENT_MODE, {
        className: "class",
        beginKeywords: "class module struct",
        end: "$|;",
        illegal: /=/,
        contains: [A.HASH_COMMENT_MODE, A.inherit(A.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        }), {
          begin: "<"
        }]
      }, {
        className: "class",
        beginKeywords: "lib enum union",
        end: "$|;",
        illegal: /=/,
        contains: [A.HASH_COMMENT_MODE, A.inherit(A.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        })]
      }, {
        beginKeywords: "annotation",
        end: "$|;",
        illegal: /=/,
        contains: [A.HASH_COMMENT_MODE, A.inherit(A.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        })],
        relevance: 2
      }, {
        className: "function",
        beginKeywords: "def",
        end: /\B\b/,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
          endsParent: !0
        })]
      }, {
        className: "function",
        beginKeywords: "fun macro",
        end: /\B\b/,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
          endsParent: !0
        })],
        relevance: 2
      }, {
        className: "symbol",
        begin: A.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      }, {
        className: "symbol",
        begin: ":",
        contains: [$, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?"
        }],
        relevance: 0
      }, {
        className: "number",
        variants: [{
          begin: "\\b0b([01_]+)(_?[ui](8|16|32|64|128))?"
        }, {
          begin: "\\b0o([0-7_]+)(_?[ui](8|16|32|64|128))?"
        }, {
          begin: "\\b0x([A-Fa-f0-9_]+)(_?[ui](8|16|32|64|128))?"
        }, {
          begin: "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?(_?f(32|64))?(?!_)"
        }, {
          begin: "\\b([1-9][0-9_]*|0)(_?[ui](8|16|32|64|128))?"
        }],
        relevance: 0
      }];
    return J.contains = D, O.contains = D.slice(1), {
      name: "Crystal",
      aliases: ["cr"],
      keywords: H,
      contains: D
    };
  }
  ZH8.exports = vMq;
});

// Register to shared state
__$.WH8 = WH8;
