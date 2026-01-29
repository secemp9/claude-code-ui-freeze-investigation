// Module: b08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b08 = v((sCz, h08) => {
  function zfq(A) {
    return {
      name: "Node REPL",
      contains: [{
        className: "meta",
        starts: {
          end: / |$/,
          starts: {
            end: "$",
            subLanguage: "javascript"
          }
        },
        variants: [{
          begin: /^>(?=[ ]|$)/
        }, {
          begin: /^\.\.\.(?=[ ]|$)/
        }]
      }]
    };
  }
  h08.exports = zfq;
});

// Register to shared state
__$.b08 = b08;
