// Module: u$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var u$8 = v((rLz, x$8) => {
  function CNq(A) {
    return {
      name: "Tagger Script",
      contains: [{
        className: "comment",
        begin: /\$noop\(/,
        end: /\)/,
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: ["self", {
            begin: /\\./
          }]
        }],
        relevance: 10
      }, {
        className: "keyword",
        begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
        end: /\(/,
        excludeEnd: !0
      }, {
        className: "variable",
        begin: /%[_a-zA-Z0-9:]*/,
        end: "%"
      }, {
        className: "symbol",
        begin: /\\./
      }]
    };
  }
  x$8.exports = CNq;
});

// Register to shared state
__$.u$8 = u$8;
