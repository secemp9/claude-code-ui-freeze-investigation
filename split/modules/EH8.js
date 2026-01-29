// Module: EH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EH8 = v((Ckz, vH8) => {
  function mMq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function gMq(...A) {
    return A.map(q => mMq(q)).join("");
  }
  function FMq(A) {
    let K = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0
      },
      q = {
        begin: "^[-\\*]{3,}",
        end: "$"
      },
      Y = {
        className: "code",
        variants: [{
          begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
        }, {
          begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
        }, {
          begin: "```",
          end: "```+[ ]*$"
        }, {
          begin: "~~~",
          end: "~~~+[ ]*$"
        }, {
          begin: "`.+?`"
        }, {
          begin: "(?=^( {4}|\\t))",
          contains: [{
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }],
          relevance: 0
        }]
      },
      z = {
        className: "bullet",
        begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
        end: "\\s+",
        excludeEnd: !0
      },
      w = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: !0,
        contains: [{
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "link",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }]
      },
      J = {
        variants: [{
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        }, {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        }, {
          begin: gMq(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
          relevance: 2
        }, {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        }, {
          begin: /\[.+?\]\(.*?\)/,
          relevance: 0
        }],
        returnBegin: !0,
        contains: [{
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        }, {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }]
      },
      O = {
        className: "strong",
        contains: [],
        variants: [{
          begin: /_{2}/,
          end: /_{2}/
        }, {
          begin: /\*{2}/,
          end: /\*{2}/
        }]
      },
      X = {
        className: "emphasis",
        contains: [],
        variants: [{
          begin: /\*(?!\*)/,
          end: /\*/
        }, {
          begin: /_(?!_)/,
          end: /_/,
          relevance: 0
        }]
      };
    O.contains.push(X), X.contains.push(O);
    let $ = [K, J];
    return O.contains = O.contains.concat($), X.contains = X.contains.concat($), $ = $.concat(O, X), {
      name: "Markdown",
      aliases: ["md", "mkdown", "mkd"],
      contains: [{
        className: "section",
        variants: [{
          begin: "^#{1,6}",
          end: "$",
          contains: $
        }, {
          begin: "(?=^.+?\\n[=-]{2,}$)",
          contains: [{
            begin: "^[=-]*$"
          }, {
            begin: "^",
            end: "\\n",
            contains: $
          }]
        }]
      }, K, z, O, X, {
        className: "quote",
        begin: "^>\\s+",
        contains: $,
        end: "$"
      }, Y, q, J, w]
    };
  }
  vH8.exports = FMq;
});

// Register to shared state
__$.EH8 = EH8;
