// Module: c$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var c$8 = v((tLz, d$8) => {
  function hNq(A) {
    return {
      name: "Thrift",
      keywords: {
        keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
        built_in: "bool byte i16 i32 i64 double string binary",
        literal: "true false"
      },
      contains: [A.QUOTE_STRING_MODE, A.NUMBER_MODE, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "struct enum service exception",
        end: /\{/,
        illegal: /\n/,
        contains: [A.inherit(A.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }, {
        begin: "\\b(set|list|map)\\s*<",
        end: ">",
        keywords: "bool byte i16 i32 i64 double string binary",
        contains: ["self"]
      }]
    };
  }
  d$8.exports = hNq;
});

// Register to shared state
__$.c$8 = c$8;
