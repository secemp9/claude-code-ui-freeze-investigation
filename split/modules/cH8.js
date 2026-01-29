// Module: cH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cH8 = v((Bkz, dH8) => {
  function oMq(A) {
    return {
      name: "Dust",
      aliases: ["dst"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [{
        className: "template-tag",
        begin: /\{[#\/]/,
        end: /\}/,
        illegal: /;/,
        contains: [{
          className: "name",
          begin: /[a-zA-Z\.-]+/,
          starts: {
            endsWithParent: !0,
            relevance: 0,
            contains: [A.QUOTE_STRING_MODE]
          }
        }]
      }, {
        className: "template-variable",
        begin: /\{/,
        end: /\}/,
        illegal: /;/,
        keywords: "if eq ne lt lte gt gte select default math sep"
      }]
    };
  }
  dH8.exports = oMq;
});

// Register to shared state
__$.cH8 = cH8;
