// Module: aw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aw8 = v((Gkz, ow8) => {
  function wMq(A) {
    return {
      name: "Clean",
      aliases: ["icl", "dcl"],
      keywords: {
        keyword: "if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr",
        built_in: "Int Real Char Bool",
        literal: "True False"
      },
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, {
        begin: "->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>"
      }]
    };
  }
  ow8.exports = wMq;
});

// Register to shared state
__$.aw8 = aw8;
