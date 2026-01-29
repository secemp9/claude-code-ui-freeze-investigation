// Module: q_8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q_8 = v((qRz, K_8) => {
  function pNq(A) {
    return {
      name: "Vala",
      keywords: {
        keyword: "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
        built_in: "DBus GLib CCode Gee Object Gtk Posix",
        literal: "false true null"
      },
      contains: [{
        className: "class",
        beginKeywords: "class interface namespace",
        end: /\{/,
        excludeEnd: !0,
        illegal: "[^,:\\n\\s\\.]",
        contains: [A.UNDERSCORE_TITLE_MODE]
      }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 5
      }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, {
        className: "meta",
        begin: "^#",
        end: "$",
        relevance: 2
      }]
    };
  }
  K_8.exports = pNq;
});

// Register to shared state
__$.q_8 = q_8;
