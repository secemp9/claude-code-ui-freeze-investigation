// Module: Iw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Iw8 = v((qkz, yw8) => {
  function pjq(A) {
    return {
      name: "X++",
      aliases: ["x++"],
      keywords: {
        keyword: ["abstract", "as", "asc", "avg", "break", "breakpoint", "by", "byref", "case", "catch", "changecompany", "class", "client", "client", "common", "const", "continue", "count", "crosscompany", "delegate", "delete_from", "desc", "display", "div", "do", "edit", "else", "eventhandler", "exists", "extends", "final", "finally", "firstfast", "firstonly", "firstonly1", "firstonly10", "firstonly100", "firstonly1000", "flush", "for", "forceliterals", "forcenestedloop", "forceplaceholders", "forceselectorder", "forupdate", "from", "generateonly", "group", "hint", "if", "implements", "in", "index", "insert_recordset", "interface", "internal", "is", "join", "like", "maxof", "minof", "mod", "namespace", "new", "next", "nofetch", "notexists", "optimisticlock", "order", "outer", "pessimisticlock", "print", "private", "protected", "public", "readonly", "repeatableread", "retry", "return", "reverse", "select", "server", "setting", "static", "sum", "super", "switch", "this", "throw", "try", "ttsabort", "ttsbegin", "ttscommit", "unchecked", "update_recordset", "using", "validtimestate", "void", "where", "while"],
        built_in: ["anytype", "boolean", "byte", "char", "container", "date", "double", "enum", "guid", "int", "int64", "long", "real", "short", "str", "utcdatetime", "var"],
        literal: ["default", "false", "null", "true"]
      },
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$"
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        illegal: ":",
        contains: [{
          beginKeywords: "extends implements"
        }, A.UNDERSCORE_TITLE_MODE]
      }]
    };
  }
  yw8.exports = pjq;
});

// Register to shared state
__$.Iw8 = Iw8;
