// Module: rH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rH8 = v((gkz, nH8) => {
  function sMq(A) {
    let Y = {
        $pattern: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
        keyword: "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0"
      },
      z = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: Y
      },
      w = {
        className: "number",
        begin: "(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",
        relevance: 0
      },
      H = `[/|([{<"']`,
      J = {
        className: "string",
        begin: `~[a-z](?=[/|([{<"'])`,
        contains: [{
          endsParent: !0,
          contains: [{
            contains: [A.BACKSLASH_ESCAPE, z],
            variants: [{
              begin: /"/,
              end: /"/
            }, {
              begin: /'/,
              end: /'/
            }, {
              begin: /\//,
              end: /\//
            }, {
              begin: /\|/,
              end: /\|/
            }, {
              begin: /\(/,
              end: /\)/
            }, {
              begin: /\[/,
              end: /\]/
            }, {
              begin: /\{/,
              end: /\}/
            }, {
              begin: /</,
              end: />/
            }]
          }]
        }]
      },
      O = {
        className: "string",
        begin: `~[A-Z](?=[/|([{<"'])`,
        contains: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /'/,
          end: /'/
        }, {
          begin: /\//,
          end: /\//
        }, {
          begin: /\|/,
          end: /\|/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          begin: /\[/,
          end: /\]/
        }, {
          begin: /\{/,
          end: /\}/
        }, {
          begin: /</,
          end: />/
        }]
      },
      X = {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE, z],
        variants: [{
          begin: /"""/,
          end: /"""/
        }, {
          begin: /'''/,
          end: /'''/
        }, {
          begin: /~S"""/,
          end: /"""/,
          contains: []
        }, {
          begin: /~S"/,
          end: /"/,
          contains: []
        }, {
          begin: /~S'''/,
          end: /'''/,
          contains: []
        }, {
          begin: /~S'/,
          end: /'/,
          contains: []
        }, {
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }]
      },
      $ = {
        className: "function",
        beginKeywords: "def defp defmacro",
        end: /\B\b/,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
          endsParent: !0
        })]
      },
      _ = A.inherit($, {
        className: "class",
        beginKeywords: "defimpl defmodule defprotocol defrecord",
        end: /\bdo\b|$|;/
      }),
      G = [X, O, J, A.HASH_COMMENT_MODE, _, $, {
        begin: "::"
      }, {
        className: "symbol",
        begin: ":(?![\\s:])",
        contains: [X, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
        }],
        relevance: 0
      }, {
        className: "symbol",
        begin: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?:(?!:)",
        relevance: 0
      }, w, {
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))"
      }, {
        begin: "->"
      }, {
        begin: "(" + A.RE_STARTERS_RE + ")\\s*",
        contains: [A.HASH_COMMENT_MODE, {
          begin: /\/: (?=\d+\s*[,\]])/,
          relevance: 0,
          contains: [w]
        }, {
          className: "regexp",
          illegal: "\\n",
          contains: [A.BACKSLASH_ESCAPE, z],
          variants: [{
            begin: "/",
            end: "/[a-z]*"
          }, {
            begin: "%r\\[",
            end: "\\][a-z]*"
          }]
        }],
        relevance: 0
      }];
    return z.contains = G, {
      name: "Elixir",
      keywords: Y,
      contains: G
    };
  }
  nH8.exports = sMq;
});

// Register to shared state
__$.rH8 = rH8;
