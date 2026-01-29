// Module: Tw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tw8 = v((tEz, Nw8) => {
  function gjq(A) {
    let K = {
      begin: "`[\\s\\S]"
    };
    return {
      name: "AutoHotkey",
      case_insensitive: !0,
      aliases: ["ahk"],
      keywords: {
        keyword: "Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",
        literal: "true false NOT AND OR",
        built_in: "ComSpec Clipboard ClipboardAll ErrorLevel"
      },
      contains: [K, A.inherit(A.QUOTE_STRING_MODE, {
        contains: [K]
      }), A.COMMENT(";", "$", {
        relevance: 0
      }), A.C_BLOCK_COMMENT_MODE, {
        className: "number",
        begin: A.NUMBER_RE,
        relevance: 0
      }, {
        className: "variable",
        begin: "%[a-zA-Z0-9#_$@]+%"
      }, {
        className: "built_in",
        begin: "^\\s*\\w+\\s*(,|%)"
      }, {
        className: "title",
        variants: [{
          begin: '^[^\\n";]+::(?!=)'
        }, {
          begin: '^[^\\n";]+:(?!=)',
          relevance: 0
        }]
      }, {
        className: "meta",
        begin: "^\\s*#\\w+",
        end: "$",
        relevance: 0
      }, {
        className: "built_in",
        begin: "A_[a-zA-Z0-9]+"
      }, {
        begin: ",\\s*,"
      }]
    };
  }
  Nw8.exports = gjq;
});

// Register to shared state
__$.Tw8 = Tw8;
