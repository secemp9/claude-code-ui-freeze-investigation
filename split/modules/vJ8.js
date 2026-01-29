// Module: vJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vJ8 = v((tkz, TJ8) => {
  function PPq(A) {
    return {
      name: "Gherkin",
      aliases: ["feature"],
      keywords: "Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",
      contains: [{
        className: "symbol",
        begin: "\\*",
        relevance: 0
      }, {
        className: "meta",
        begin: "@[^@\\s]+"
      }, {
        begin: "\\|",
        end: "\\|\\w*$",
        contains: [{
          className: "string",
          begin: "[^|]+"
        }]
      }, {
        className: "variable",
        begin: "<",
        end: ">"
      }, A.HASH_COMMENT_MODE, {
        className: "string",
        begin: '"""',
        end: '"""'
      }, A.QUOTE_STRING_MODE]
    };
  }
  TJ8.exports = PPq;
});

// Register to shared state
__$.vJ8 = vJ8;
