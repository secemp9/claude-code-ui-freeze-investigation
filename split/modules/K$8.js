// Module: K$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K$8 = v((uLz, A$8) => {
  function KNq(A) {
    return {
      name: "Shell Session",
      aliases: ["console"],
      contains: [{
        className: "meta",
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }]
    };
  }
  A$8.exports = KNq;
});

// Register to shared state
__$.K$8 = K$8;
