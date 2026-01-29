// Module: TO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TO8 = v((TCz, NO8) => {
  function GVq(A) {
    return {
      name: "Julia REPL",
      contains: [{
        className: "meta",
        begin: /^julia>/,
        relevance: 10,
        starts: {
          end: /^(?![ ]{6})/,
          subLanguage: "julia"
        },
        aliases: ["jldoctest"]
      }]
    };
  }
  NO8.exports = GVq;
});

// Register to shared state
__$.TO8 = TO8;
