// Module: wJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wJ8 = v((dkz, zJ8) => {
  function HPq(A) {
    let q = "([a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*|[a-z'][a-zA-Z0-9_']*)",
      Y = {
        keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
        literal: "false true"
      },
      z = A.COMMENT("%", "$"),
      w = {
        className: "number",
        begin: "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
        relevance: 0
      },
      H = {
        begin: "fun\\s+[a-z'][a-zA-Z0-9_']*/\\d+"
      },
      J = {
        begin: q + "\\(",
        end: "\\)",
        returnBegin: !0,
        relevance: 0,
        contains: [{
          begin: q,
          relevance: 0
        }, {
          begin: "\\(",
          end: "\\)",
          endsWithParent: !0,
          returnEnd: !0,
          relevance: 0
        }]
      },
      O = {
        begin: /\{/,
        end: /\}/,
        relevance: 0
      },
      X = {
        begin: "\\b_([A-Z][A-Za-z0-9_]*)?",
        relevance: 0
      },
      $ = {
        begin: "[A-Z][a-zA-Z0-9_]*",
        relevance: 0
      },
      _ = {
        begin: "#" + A.UNDERSCORE_IDENT_RE,
        relevance: 0,
        returnBegin: !0,
        contains: [{
          begin: "#" + A.UNDERSCORE_IDENT_RE,
          relevance: 0
        }, {
          begin: /\{/,
          end: /\}/,
          relevance: 0
        }]
      },
      G = {
        beginKeywords: "fun receive if try case",
        end: "end",
        keywords: Y
      };
    G.contains = [z, H, A.inherit(A.APOS_STRING_MODE, {
      className: ""
    }), G, J, A.QUOTE_STRING_MODE, w, O, X, $, _];
    let Z = [z, H, G, J, A.QUOTE_STRING_MODE, w, O, X, $, _];
    J.contains[1].contains = Z, O.contains = Z, _.contains[1].contains = Z;
    let W = ["-module", "-record", "-undef", "-export", "-ifdef", "-ifndef", "-author", "-copyright", "-doc", "-vsn", "-import", "-include", "-include_lib", "-compile", "-define", "-else", "-endif", "-file", "-behaviour", "-behavior", "-spec"],
      D = {
        className: "params",
        begin: "\\(",
        end: "\\)",
        contains: Z
      };
    return {
      name: "Erlang",
      aliases: ["erl"],
      keywords: Y,
      illegal: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
      contains: [{
        className: "function",
        begin: "^[a-z'][a-zA-Z0-9_']*\\s*\\(",
        end: "->",
        returnBegin: !0,
        illegal: "\\(|#|//|/\\*|\\\\|:|;",
        contains: [D, A.inherit(A.TITLE_MODE, {
          begin: "[a-z'][a-zA-Z0-9_']*"
        })],
        starts: {
          end: ";|\\.",
          keywords: Y,
          contains: Z
        }
      }, z, {
        begin: "^-",
        end: "\\.",
        relevance: 0,
        excludeEnd: !0,
        returnBegin: !0,
        keywords: {
          $pattern: "-" + A.IDENT_RE,
          keyword: W.map(j => `${j}|1.5`).join(" ")
        },
        contains: [D]
      }, w, A.QUOTE_STRING_MODE, _, X, $, O, {
        begin: /\.$/
      }]
    };
  }
  zJ8.exports = HPq;
});

// Register to shared state
__$.wJ8 = wJ8;
