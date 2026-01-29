// Module: sJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sJ8 = v((_Cz, aJ8) => {
  function UPq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function pPq(...A) {
    return A.map(q => UPq(q)).join("");
  }
  function dPq(A) {
    let Y = {
        className: "attribute",
        begin: pPq("^", /[A-Za-z][A-Za-z0-9-]*/, "(?=\\:\\s)"),
        starts: {
          contains: [{
            className: "punctuation",
            begin: /: /,
            relevance: 0,
            starts: {
              end: "$",
              relevance: 0
            }
          }]
        }
      },
      z = [Y, {
        begin: "\\n\\n",
        starts: {
          subLanguage: [],
          endsWithParent: !0
        }
      }];
    return {
      name: "HTTP",
      aliases: ["https"],
      illegal: /\S/,
      contains: [{
        begin: "^(?=HTTP/(2|1\\.[01]) \\d{3})",
        end: /$/,
        contains: [{
          className: "meta",
          begin: "HTTP/(2|1\\.[01])"
        }, {
          className: "number",
          begin: "\\b\\d{3}\\b"
        }],
        starts: {
          end: /\b\B/,
          illegal: /\S/,
          contains: z
        }
      }, {
        begin: "(?=^[A-Z]+ (.*?) HTTP/(2|1\\.[01])$)",
        end: /$/,
        contains: [{
          className: "string",
          begin: " ",
          end: " ",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "meta",
          begin: "HTTP/(2|1\\.[01])"
        }, {
          className: "keyword",
          begin: "[A-Z]+"
        }],
        starts: {
          end: /\b\B/,
          illegal: /\S/,
          contains: z
        }
      }, A.inherit(Y, {
        relevance: 0
      })]
    };
  }
  aJ8.exports = dPq;
});

// Register to shared state
__$.sJ8 = sJ8;
