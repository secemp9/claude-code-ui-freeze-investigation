// Module: NJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NJ8 = v((skz, fJ8) => {
  function MPq(A) {
    let Y = {
        $pattern: "[A-Z_][A-Z0-9_.]*",
        keyword: "IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR"
      },
      z = {
        className: "meta",
        begin: "([O])([0-9]+)"
      },
      w = A.inherit(A.C_NUMBER_MODE, {
        begin: "([-+]?((\\.\\d+)|(\\d+)(\\.\\d*)?))|" + A.C_NUMBER_RE
      }),
      H = [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.COMMENT(/\(/, /\)/), w, A.inherit(A.APOS_STRING_MODE, {
        illegal: null
      }), A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "name",
        begin: "([G])([0-9]+\\.?[0-9]?)"
      }, {
        className: "name",
        begin: "([M])([0-9]+\\.?[0-9]?)"
      }, {
        className: "attr",
        begin: "(VC|VS|#)",
        end: "(\\d+)"
      }, {
        className: "attr",
        begin: "(VZOFX|VZOFY|VZOFZ)"
      }, {
        className: "built_in",
        begin: "(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",
        contains: [w],
        end: "\\]"
      }, {
        className: "symbol",
        variants: [{
          begin: "N",
          end: "\\d+",
          illegal: "\\W"
        }]
      }];
    return {
      name: "G-code (ISO 6983)",
      aliases: ["nc"],
      case_insensitive: !0,
      keywords: Y,
      contains: [{
        className: "meta",
        begin: "%"
      }, z].concat(H)
    };
  }
  fJ8.exports = MPq;
});

// Register to shared state
__$.NJ8 = NJ8;
