// Module: gw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gw8 = v((Hkz, mw8) => {
  function rjq(A) {
    let K = {
      className: "literal",
      begin: /[+-]/,
      relevance: 0
    };
    return {
      name: "Brainfuck",
      aliases: ["bf"],
      contains: [A.COMMENT(`[^\\[\\]\\.,\\+\\-<> \r
]`, `[\\[\\]\\.,\\+\\-<> \r
]`, {
        returnEnd: !0,
        relevance: 0
      }), {
        className: "title",
        begin: "[\\[\\]]",
        relevance: 0
      }, {
        className: "string",
        begin: "[\\.,]",
        relevance: 0
      }, {
        begin: /(?:\+\+|--)/,
        contains: [K]
      }, K]
    };
  }
  mw8.exports = rjq;
});

// Register to shared state
__$.gw8 = gw8;
