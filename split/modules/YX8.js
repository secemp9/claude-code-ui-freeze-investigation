// Module: YX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YX8 = v((XLz, qX8) => {
  function jfq(A) {
    let K = {
        keyword: "actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",
        meta: "iso val tag trn box ref",
        literal: "this false true"
      },
      q = {
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 10
      },
      Y = {
        className: "string",
        begin: '"',
        end: '"',
        contains: [A.BACKSLASH_ESCAPE]
      },
      z = {
        className: "string",
        begin: "'",
        end: "'",
        contains: [A.BACKSLASH_ESCAPE],
        relevance: 0
      },
      w = {
        className: "type",
        begin: "\\b_?[A-Z][\\w]*",
        relevance: 0
      },
      H = {
        begin: A.IDENT_RE + "'",
        relevance: 0
      };
    return {
      name: "Pony",
      keywords: K,
      contains: [w, q, Y, z, H, {
        className: "number",
        begin: "(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        relevance: 0
      }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
    };
  }
  qX8.exports = jfq;
});

// Register to shared state
__$.YX8 = YX8;
