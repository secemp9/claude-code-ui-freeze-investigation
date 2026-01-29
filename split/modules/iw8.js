// Module: iw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iw8 = v(($kz, lw8) => {
  function YMq(A) {
    return {
      name: "Cap’n Proto",
      aliases: ["capnp"],
      keywords: {
        keyword: "struct enum interface union group import using const annotation extends in of on as with from fixed",
        built_in: "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
        literal: "true false"
      },
      contains: [A.QUOTE_STRING_MODE, A.NUMBER_MODE, A.HASH_COMMENT_MODE, {
        className: "meta",
        begin: /@0x[\w\d]{16};/,
        illegal: /\n/
      }, {
        className: "symbol",
        begin: /@\d+\b/
      }, {
        className: "class",
        beginKeywords: "struct enum",
        end: /\{/,
        illegal: /\n/,
        contains: [A.inherit(A.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }, {
        className: "class",
        beginKeywords: "interface",
        end: /\{/,
        illegal: /\n/,
        contains: [A.inherit(A.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }]
    };
  }
  lw8.exports = YMq;
});

// Register to shared state
__$.iw8 = iw8;
