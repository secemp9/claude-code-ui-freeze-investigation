// Module: Dw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dw8 = v((oEz, Ww8) => {
  function Zw8(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function Gw8(A) {
    return g1A("(?=", A, ")");
  }
  function Sjq(A) {
    return g1A("(", A, ")?");
  }
  function g1A(...A) {
    return A.map(q => Zw8(q)).join("");
  }
  function hjq(...A) {
    return "(" + A.map(q => Zw8(q)).join("|") + ")";
  }
  function bjq(A) {
    let K = g1A(/[A-Z_]/, Sjq(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/),
      q = /[A-Za-z0-9._:-]+/,
      Y = {
        className: "symbol",
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
      },
      z = {
        begin: /\s/,
        contains: [{
          className: "meta-keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }]
      },
      w = A.inherit(z, {
        begin: /\(/,
        end: /\)/
      }),
      H = A.inherit(A.APOS_STRING_MODE, {
        className: "meta-string"
      }),
      J = A.inherit(A.QUOTE_STRING_MODE, {
        className: "meta-string"
      }),
      O = {
        endsWithParent: !0,
        illegal: /</,
        relevance: 0,
        contains: [{
          className: "attr",
          begin: q,
          relevance: 0
        }, {
          begin: /=\s*/,
          relevance: 0,
          contains: [{
            className: "string",
            endsParent: !0,
            variants: [{
              begin: /"/,
              end: /"/,
              contains: [Y]
            }, {
              begin: /'/,
              end: /'/,
              contains: [Y]
            }, {
              begin: /[^\s"'=<>`]+/
            }]
          }]
        }]
      };
    return {
      name: "HTML, XML",
      aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
      case_insensitive: !0,
      contains: [{
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [z, J, H, w, {
          begin: /\[/,
          end: /\]/,
          contains: [{
            className: "meta",
            begin: /<![a-z]/,
            end: />/,
            contains: [z, w, J, H]
          }]
        }]
      }, A.COMMENT(/<!--/, /-->/, {
        relevance: 10
      }), {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      }, Y, {
        className: "meta",
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      }, {
        className: "tag",
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: "style"
        },
        contains: [O],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: ["css", "xml"]
        }
      }, {
        className: "tag",
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: "script"
        },
        contains: [O],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: ["javascript", "handlebars", "xml"]
        }
      }, {
        className: "tag",
        begin: /<>|<\/>/
      }, {
        className: "tag",
        begin: g1A(/</, Gw8(g1A(K, hjq(/\/>/, />/, /\s/)))),
        end: /\/?>/,
        contains: [{
          className: "name",
          begin: K,
          relevance: 0,
          starts: O
        }]
      }, {
        className: "tag",
        begin: g1A(/<\//, Gw8(g1A(K, />/))),
        contains: [{
          className: "name",
          begin: K,
          relevance: 0
        }, {
          begin: />/,
          relevance: 0,
          endsParent: !0
        }]
      }]
    };
  }
  Ww8.exports = bjq;
});

// Register to shared state
__$.Dw8 = Dw8;
