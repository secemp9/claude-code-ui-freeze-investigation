// Module: F08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var F08 = v((ALz, g08) => {
  function Jfq(A) {
    return {
      name: "OCaml",
      aliases: ["ml"],
      keywords: {
        $pattern: "[a-z_]\\w*!?",
        keyword: "and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
        built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
        literal: "true false"
      },
      illegal: /\/\/|>>/,
      contains: [{
        className: "literal",
        begin: "\\[(\\|\\|)?\\]|\\(\\)",
        relevance: 0
      }, A.COMMENT("\\(\\*", "\\*\\)", {
        contains: ["self"]
      }), {
        className: "symbol",
        begin: "'[A-Za-z_](?!')[\\w']*"
      }, {
        className: "type",
        begin: "`[A-Z][\\w']*"
      }, {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      }, {
        begin: "[a-z_]\\w*'[\\w']*",
        relevance: 0
      }, A.inherit(A.APOS_STRING_MODE, {
        className: "string",
        relevance: 0
      }), A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "number",
        begin: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
        relevance: 0
      }, {
        begin: /->/
      }]
    };
  }
  g08.exports = Jfq;
});

// Register to shared state
__$.F08 = F08;
