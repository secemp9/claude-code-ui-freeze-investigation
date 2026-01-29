// Module: iH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iH8 = v((mkz, lH8) => {
  function aMq(A) {
    let K = A.COMMENT(/\(\*/, /\*\)/),
      q = {
        className: "attribute",
        begin: /^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/
      },
      z = {
        begin: /=/,
        end: /[.;]/,
        contains: [K, {
          className: "meta",
          begin: /\?.*\?/
        }, {
          className: "string",
          variants: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
            begin: "`",
            end: "`"
          }]
        }]
      };
    return {
      name: "Extended Backus-Naur Form",
      illegal: /\S/,
      contains: [K, q, z]
    };
  }
  lH8.exports = aMq;
});

// Register to shared state
__$.iH8 = iH8;
