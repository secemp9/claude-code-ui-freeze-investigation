// Module: YJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YJ8 = v((pkz, qJ8) => {
  function YPq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function zPq(...A) {
    return A.map(q => YPq(q)).join("");
  }
  function wPq(A) {
    return {
      name: "Erlang REPL",
      keywords: {
        built_in: "spawn spawn_link self",
        keyword: "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
      },
      contains: [{
        className: "meta",
        begin: "^[0-9]+> ",
        relevance: 10
      }, A.COMMENT("%", "$"), {
        className: "number",
        begin: "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
        relevance: 0
      }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
        begin: zPq(/\?(::)?/, /([A-Z]\w*)/, /((::)[A-Z]\w*)*/)
      }, {
        begin: "->"
      }, {
        begin: "ok"
      }, {
        begin: "!"
      }, {
        begin: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
        relevance: 0
      }, {
        begin: "[A-Z][a-zA-Z0-9_']*",
        relevance: 0
      }]
    };
  }
  qJ8.exports = wPq;
});

// Register to shared state
__$.YJ8 = YJ8;
