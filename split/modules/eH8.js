// Module: eH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eH8 = v((Qkz, tH8) => {
  function eMq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function APq(A) {
    return sH8("(?=", A, ")");
  }
  function sH8(...A) {
    return A.map(q => eMq(q)).join("");
  }
  function KPq(A) {
    let q = {
        keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
        built_in: "proc lambda",
        literal: "true false nil"
      },
      Y = {
        className: "doctag",
        begin: "@[A-Za-z]+"
      },
      z = {
        begin: "#<",
        end: ">"
      },
      w = [A.COMMENT("#", "$", {
        contains: [Y]
      }), A.COMMENT("^=begin", "^=end", {
        contains: [Y],
        relevance: 10
      }), A.COMMENT("^__END__", "\\n$")],
      H = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: q
      },
      J = {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE, H],
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
          begin: /%[qQwWx]?\(/,
          end: /\)/
        }, {
          begin: /%[qQwWx]?\[/,
          end: /\]/
        }, {
          begin: /%[qQwWx]?\{/,
          end: /\}/
        }, {
          begin: /%[qQwWx]?</,
          end: />/
        }, {
          begin: /%[qQwWx]?\//,
          end: /\//
        }, {
          begin: /%[qQwWx]?%/,
          end: /%/
        }, {
          begin: /%[qQwWx]?-/,
          end: /-/
        }, {
          begin: /%[qQwWx]?\|/,
          end: /\|/
        }, {
          begin: /\B\?(\\\d{1,3})/
        }, {
          begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
        }, {
          begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
        }, {
          begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
        }, {
          begin: /\B\?\\(c|C-)[\x20-\x7e]/
        }, {
          begin: /\B\?\\?\S/
        }, {
          begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
          returnBegin: !0,
          contains: [{
            begin: /<<[-~]?'?/
          }, A.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [A.BACKSLASH_ESCAPE, H]
          })]
        }]
      },
      O = "[1-9](_?[0-9])*|0",
      X = "[0-9](_?[0-9])*",
      $ = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: "\\b([1-9](_?[0-9])*|0)(\\.([0-9](_?[0-9])*))?([eE][+-]?([0-9](_?[0-9])*)|r)?i?\\b"
        }, {
          begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
        }, {
          begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
        }, {
          begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
        }, {
          begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
        }, {
          begin: "\\b0(_?[0-7])+r?i?\\b"
        }]
      },
      _ = {
        className: "params",
        begin: "\\(",
        end: "\\)",
        endsParent: !0,
        keywords: q
      },
      G = [J, {
        className: "class",
        beginKeywords: "class module",
        end: "$|;",
        illegal: /=/,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        }), {
          begin: "<\\s*",
          contains: [{
            begin: "(" + A.IDENT_RE + "::)?" + A.IDENT_RE,
            relevance: 0
          }]
        }].concat(w)
      }, {
        className: "function",
        begin: sH8(/def\s+/, APq("([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)\\s*(\\(|;|$)")),
        relevance: 0,
        keywords: "def",
        end: "$|;",
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)"
        }), _].concat(w)
      }, {
        begin: A.IDENT_RE + "::"
      }, {
        className: "symbol",
        begin: A.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      }, {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [J, {
          begin: "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)"
        }],
        relevance: 0
      }, $, {
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
      }, {
        className: "params",
        begin: /\|/,
        end: /\|/,
        relevance: 0,
        keywords: q
      }, {
        begin: "(" + A.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [{
          className: "regexp",
          contains: [A.BACKSLASH_ESCAPE, H],
          illegal: /\n/,
          variants: [{
            begin: "/",
            end: "/[a-z]*"
          }, {
            begin: /%r\{/,
            end: /\}[a-z]*/
          }, {
            begin: "%r\\(",
            end: "\\)[a-z]*"
          }, {
            begin: "%r!",
            end: "![a-z]*"
          }, {
            begin: "%r\\[",
            end: "\\][a-z]*"
          }]
        }].concat(z, w),
        relevance: 0
      }].concat(z, w);
    H.contains = G, _.contains = G;
    let Z = "[>?]>",
      W = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
      D = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",
      j = [{
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: G
        }
      }, {
        className: "meta",
        begin: "^(" + Z + "|" + W + "|" + D + ")(?=[ ])",
        starts: {
          end: "$",
          contains: G
        }
      }];
    return w.unshift(z), {
      name: "Ruby",
      aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
      keywords: q,
      illegal: /\/\*/,
      contains: [A.SHEBANG({
        binary: "ruby"
      })].concat(j).concat(w).concat(G)
    };
  }
  tH8.exports = KPq;
});

// Register to shared state
__$.eH8 = eH8;
