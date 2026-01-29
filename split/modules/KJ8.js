// Module: KJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KJ8 = v((Ukz, AJ8) => {
  function qPq(A) {
    return {
      name: "ERB",
      subLanguage: "xml",
      contains: [A.COMMENT("<%#", "%>"), {
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0
      }]
    };
  }
  AJ8.exports = qPq;
});

// Register to shared state
__$.KJ8 = KJ8;
