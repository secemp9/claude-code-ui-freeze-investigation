// Module: V08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V08 = v((cCz, P08) => {
  function sVq(A) {
    return {
      name: "Mojolicious",
      subLanguage: "xml",
      contains: [{
        className: "meta",
        begin: "^__(END|DATA)__$"
      }, {
        begin: "^\\s*%{1,2}={0,2}",
        end: "$",
        subLanguage: "perl"
      }, {
        begin: "<%{1,2}={0,2}",
        end: "={0,1}%>",
        subLanguage: "perl",
        excludeBegin: !0,
        excludeEnd: !0
      }]
    };
  }
  P08.exports = sVq;
});

// Register to shared state
__$.V08 = V08;
