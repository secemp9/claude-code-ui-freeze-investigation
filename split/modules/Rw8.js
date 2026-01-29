// Module: Rw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rw8 = v((Kkz, Lw8) => {
  function Ujq(A) {
    let K = {
        className: "variable",
        variants: [{
          begin: /\$[\w\d#@][\w\d_]*/
        }, {
          begin: /\$\{(.*?)\}/
        }]
      },
      q = "BEGIN END if else while do for in break continue delete next nextfile function func exit|10",
      Y = {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE],
        variants: [{
          begin: /(u|b)?r?'''/,
          end: /'''/,
          relevance: 10
        }, {
          begin: /(u|b)?r?"""/,
          end: /"""/,
          relevance: 10
        }, {
          begin: /(u|r|ur)'/,
          end: /'/,
          relevance: 10
        }, {
          begin: /(u|r|ur)"/,
          end: /"/,
          relevance: 10
        }, {
          begin: /(b|br)'/,
          end: /'/
        }, {
          begin: /(b|br)"/,
          end: /"/
        }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
      };
    return {
      name: "Awk",
      keywords: {
        keyword: "BEGIN END if else while do for in break continue delete next nextfile function func exit|10"
      },
      contains: [K, Y, A.REGEXP_MODE, A.HASH_COMMENT_MODE, A.NUMBER_MODE]
    };
  }
  Lw8.exports = Ujq;
});

// Register to shared state
__$.Rw8 = Rw8;
