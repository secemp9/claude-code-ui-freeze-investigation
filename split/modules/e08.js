// Module: e08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e08 = v((JLz, t08) => {
  function Wfq(A) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [{
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: "php",
        contains: [{
          begin: "/\\*",
          end: "\\*/",
          skip: !0
        }, {
          begin: 'b"',
          end: '"',
          skip: !0
        }, {
          begin: "b'",
          end: "'",
          skip: !0
        }, A.inherit(A.APOS_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: !0
        }), A.inherit(A.QUOTE_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: !0
        })]
      }]
    };
  }
  t08.exports = Wfq;
});

// Register to shared state
__$.e08 = e08;
