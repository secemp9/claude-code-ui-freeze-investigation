// Module: yJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yJ8 = v((KCz, RJ8) => {
  function NPq(A) {
    let K = {
      keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
      literal: "true false iota nil",
      built_in: "append cap close complex copy imag len make new panic print println real recover delete"
    };
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: K,
      illegal: "</",
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
        className: "string",
        variants: [A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, {
          begin: "`",
          end: "`"
        }]
      }, {
        className: "number",
        variants: [{
          begin: A.C_NUMBER_RE + "[i]",
          relevance: 1
        }, A.C_NUMBER_MODE]
      }, {
        begin: /:=/
      }, {
        className: "function",
        beginKeywords: "func",
        end: "\\s*(\\{|$)",
        excludeEnd: !0,
        contains: [A.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: K,
          illegal: /["']/
        }]
      }]
    };
  }
  RJ8.exports = NPq;
});

// Register to shared state
__$.yJ8 = yJ8;
