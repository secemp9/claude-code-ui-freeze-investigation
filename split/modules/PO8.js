// Module: PO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PO8 = v((fCz, MO8) => {
  function $Vq(A) {
    let K = {
        literal: "true false null"
      },
      q = [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE],
      Y = [A.QUOTE_STRING_MODE, A.C_NUMBER_MODE],
      z = {
        end: ",",
        endsWithParent: !0,
        excludeEnd: !0,
        contains: Y,
        keywords: K
      },
      w = {
        begin: /\{/,
        end: /\}/,
        contains: [{
          className: "attr",
          begin: /"/,
          end: /"/,
          contains: [A.BACKSLASH_ESCAPE],
          illegal: "\\n"
        }, A.inherit(z, {
          begin: /:/
        })].concat(q),
        illegal: "\\S"
      },
      H = {
        begin: "\\[",
        end: "\\]",
        contains: [A.inherit(z)],
        illegal: "\\S"
      };
    return Y.push(w, H), q.forEach(function (J) {
      Y.push(J);
    }), {
      name: "JSON",
      contains: Y,
      keywords: K,
      illegal: "\\S"
    };
  }
  MO8.exports = $Vq;
});

// Register to shared state
__$.PO8 = PO8;
