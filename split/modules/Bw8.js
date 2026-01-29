// Module: Bw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Bw8 = v((wkz, uw8) => {
  function njq(A) {
    return {
      name: "Backus–Naur Form",
      contains: [{
        className: "attribute",
        begin: /</,
        end: />/
      }, {
        begin: /::=/,
        end: /$/,
        contains: [{
          begin: /</,
          end: />/
        }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
      }]
    };
  }
  uw8.exports = njq;
});

// Register to shared state
__$.Bw8 = Bw8;
