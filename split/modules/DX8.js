// Module: DX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DX8 = v((DLz, WX8) => {
  function Tfq(A) {
    return {
      name: "Protocol Buffers",
      keywords: {
        keyword: "package import option optional required repeated group oneof",
        built_in: "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
        literal: "true false"
      },
      contains: [A.QUOTE_STRING_MODE, A.NUMBER_MODE, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "message enum service",
        end: /\{/,
        illegal: /\n/,
        contains: [A.inherit(A.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }, {
        className: "function",
        beginKeywords: "rpc",
        end: /[{;]/,
        excludeEnd: !0,
        keywords: "rpc returns"
      }, {
        begin: /^\s*[A-Z_]+(?=\s*=[^\n]+;$)/
      }]
    };
  }
  WX8.exports = Tfq;
});

// Register to shared state
__$.DX8 = DX8;
