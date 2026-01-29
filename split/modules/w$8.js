// Module: w$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var w$8 = v((mLz, z$8) => {
  function YNq(A) {
    let q = {
        className: "string",
        begin: "\\$.{1}"
      },
      Y = {
        className: "symbol",
        begin: "#" + A.UNDERSCORE_IDENT_RE
      };
    return {
      name: "Smalltalk",
      aliases: ["st"],
      keywords: "self super nil true false thisContext",
      contains: [A.COMMENT('"', '"'), A.APOS_STRING_MODE, {
        className: "type",
        begin: "\\b[A-Z][A-Za-z0-9_]*",
        relevance: 0
      }, {
        begin: "[a-z][a-zA-Z0-9_]*:",
        relevance: 0
      }, A.C_NUMBER_MODE, Y, q, {
        begin: "\\|[ ]*[a-z][a-zA-Z0-9_]*([ ]+[a-z][a-zA-Z0-9_]*)*[ ]*\\|",
        returnBegin: !0,
        end: /\|/,
        illegal: /\S/,
        contains: [{
          begin: "(\\|[ ]*)?[a-z][a-zA-Z0-9_]*"
        }]
      }, {
        begin: "#\\(",
        end: "\\)",
        contains: [A.APOS_STRING_MODE, q, A.C_NUMBER_MODE, Y]
      }]
    };
  }
  z$8.exports = YNq;
});

// Register to shared state
__$.w$8 = w$8;
