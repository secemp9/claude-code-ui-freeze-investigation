// Module: AH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AH8 = v((Wkz, ew8) => {
  function JMq(A) {
    return {
      name: "Clojure REPL",
      contains: [{
        className: "meta",
        begin: /^([\w.-]+|\s*#_)?=>/,
        starts: {
          end: /$/,
          subLanguage: "clojure"
        }
      }]
    };
  }
  ew8.exports = JMq;
});

// Register to shared state
__$.AH8 = AH8;
