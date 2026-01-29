// Module: XX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XX8 = v((GLz, OX8) => {
  function Vfq(A) {
    return {
      name: "Python profiler",
      contains: [A.C_NUMBER_MODE, {
        begin: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
        end: ":",
        excludeEnd: !0
      }, {
        begin: "(ncalls|tottime|cumtime)",
        end: "$",
        keywords: "ncalls tottime|10 cumtime|10 filename",
        relevance: 10
      }, {
        begin: "function calls",
        end: "$",
        contains: [A.C_NUMBER_MODE],
        relevance: 10
      }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
        className: "string",
        begin: "\\(",
        end: "\\)$",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }]
    };
  }
  OX8.exports = Vfq;
});

// Register to shared state
__$.XX8 = XX8;
