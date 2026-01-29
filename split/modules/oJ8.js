// Module: oJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oJ8 = v(($Cz, rJ8) => {
  function nJ8(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function BPq(A) {
    return iTA("(", A, ")*");
  }
  function mPq(A) {
    return iTA("(", A, ")?");
  }
  function iTA(...A) {
    return A.map(q => nJ8(q)).join("");
  }
  function gPq(...A) {
    return "(" + A.map(q => nJ8(q)).join("|") + ")";
  }
  function FPq(A) {
    let K = {
        "builtin-name": ["action", "bindattr", "collection", "component", "concat", "debugger", "each", "each-in", "get", "hash", "if", "in", "input", "link-to", "loc", "log", "lookup", "mut", "outlet", "partial", "query-params", "render", "template", "textarea", "unbound", "unless", "view", "with", "yield"]
      },
      q = {
        literal: ["true", "false", "undefined", "null"]
      },
      Y = /""|"[^"]+"/,
      z = /''|'[^']+'/,
      w = /\[\]|\[[^\]]+\]/,
      H = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
      J = /(\.|\/)/,
      O = gPq(Y, z, w, H),
      X = iTA(mPq(/\.|\.\/|\//), O, BPq(iTA(J, O))),
      $ = iTA("(", w, "|", H, ")(?==)"),
      _ = {
        begin: X,
        lexemes: /[\w.\/]+/
      },
      G = A.inherit(_, {
        keywords: q
      }),
      Z = {
        begin: /\(/,
        end: /\)/
      },
      W = {
        className: "attr",
        begin: $,
        relevance: 0,
        starts: {
          begin: /=/,
          end: /=/,
          starts: {
            contains: [A.NUMBER_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, G, Z]
          }
        }
      },
      D = {
        begin: /as\s+\|/,
        keywords: {
          keyword: "as"
        },
        end: /\|/,
        contains: [{
          begin: /\w+/
        }]
      },
      j = {
        contains: [A.NUMBER_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, D, W, G, Z],
        returnEnd: !0
      },
      M = A.inherit(_, {
        className: "name",
        keywords: K,
        starts: A.inherit(j, {
          end: /\)/
        })
      });
    Z.contains = [M];
    let P = A.inherit(_, {
        keywords: K,
        className: "name",
        starts: A.inherit(j, {
          end: /\}\}/
        })
      }),
      f = A.inherit(_, {
        keywords: K,
        className: "name"
      }),
      N = A.inherit(_, {
        className: "name",
        keywords: K,
        starts: A.inherit(j, {
          end: /\}\}/
        })
      });
    return {
      name: "Handlebars",
      aliases: ["hbs", "html.hbs", "html.handlebars", "htmlbars"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [{
        begin: /\\\{\{/,
        skip: !0
      }, {
        begin: /\\\\(?=\{\{)/,
        skip: !0
      }, A.COMMENT(/\{\{!--/, /--\}\}/), A.COMMENT(/\{\{!/, /\}\}/), {
        className: "template-tag",
        begin: /\{\{\{\{(?!\/)/,
        end: /\}\}\}\}/,
        contains: [P],
        starts: {
          end: /\{\{\{\{\//,
          returnEnd: !0,
          subLanguage: "xml"
        }
      }, {
        className: "template-tag",
        begin: /\{\{\{\{\//,
        end: /\}\}\}\}/,
        contains: [f]
      }, {
        className: "template-tag",
        begin: /\{\{#/,
        end: /\}\}/,
        contains: [P]
      }, {
        className: "template-tag",
        begin: /\{\{(?=else\}\})/,
        end: /\}\}/,
        keywords: "else"
      }, {
        className: "template-tag",
        begin: /\{\{(?=else if)/,
        end: /\}\}/,
        keywords: "else if"
      }, {
        className: "template-tag",
        begin: /\{\{\//,
        end: /\}\}/,
        contains: [f]
      }, {
        className: "template-variable",
        begin: /\{\{\{/,
        end: /\}\}\}/,
        contains: [N]
      }, {
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: [N]
      }]
    };
  }
  function QPq(A) {
    let K = FPq(A);
    if (K.name = "HTMLbars", A.getLanguage("handlebars")) K.disableAutodetect = !0;
    return K;
  }
  rJ8.exports = QPq;
});

// Register to shared state
__$.oJ8 = oJ8;
