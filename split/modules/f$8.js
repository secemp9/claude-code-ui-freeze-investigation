// Module: f$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var f$8 = v((cLz, V$8) => {
  function _Nq(A) {
    return {
      name: "STEP Part 21",
      aliases: ["p21", "step", "stp"],
      case_insensitive: !0,
      keywords: {
        $pattern: "[A-Z_][A-Z0-9_.]*",
        keyword: "HEADER ENDSEC DATA"
      },
      contains: [{
        className: "meta",
        begin: "ISO-10303-21;",
        relevance: 10
      }, {
        className: "meta",
        begin: "END-ISO-10303-21;",
        relevance: 10
      }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.COMMENT("/\\*\\*!", "\\*/"), A.C_NUMBER_MODE, A.inherit(A.APOS_STRING_MODE, {
        illegal: null
      }), A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "string",
        begin: "'",
        end: "'"
      }, {
        className: "symbol",
        variants: [{
          begin: "#",
          end: "\\d+",
          illegal: "\\W"
        }]
      }]
    };
  }
  V$8.exports = _Nq;
});

// Register to shared state
__$.f$8 = f$8;
