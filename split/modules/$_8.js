// Module: $_8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $_8 = v((wRz, X_8) => {
  function nNq(A) {
    return {
      name: "VBScript in HTML",
      subLanguage: "xml",
      contains: [{
        begin: "<%",
        end: "%>",
        subLanguage: "vbscript"
      }]
    };
  }
  X_8.exports = nNq;
});

// Register to shared state
__$.$_8 = $_8;
