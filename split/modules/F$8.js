// Module: F$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var F$8 = v((aLz, g$8) => {
  function RNq(A) {
    return {
      name: "Test Anything Protocol",
      case_insensitive: !0,
      contains: [A.HASH_COMMENT_MODE, {
        className: "meta",
        variants: [{
          begin: "^TAP version (\\d+)$"
        }, {
          begin: "^1\\.\\.(\\d+)$"
        }]
      }, {
        begin: /---$/,
        end: "\\.\\.\\.$",
        subLanguage: "yaml",
        relevance: 0
      }, {
        className: "number",
        begin: " (\\d+) "
      }, {
        className: "symbol",
        variants: [{
          begin: "^ok"
        }, {
          begin: "^not ok"
        }]
      }]
    };
  }
  g$8.exports = RNq;
});

// Register to shared state
__$.F$8 = F$8;
