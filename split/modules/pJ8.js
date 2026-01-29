// Module: pJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pJ8 = v((JCz, UJ8) => {
  function bPq(A) {
    let K = {
        variants: [A.COMMENT("--", "$"), A.COMMENT(/\{-/, /-\}/, {
          contains: ["self"]
        })]
      },
      q = {
        className: "meta",
        begin: /\{-#/,
        end: /#-\}/
      },
      Y = {
        className: "meta",
        begin: "^#",
        end: "$"
      },
      z = {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      },
      w = {
        begin: "\\(",
        end: "\\)",
        illegal: '"',
        contains: [q, Y, {
          className: "type",
          begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
        }, A.inherit(A.TITLE_MODE, {
          begin: "[_a-z][\\w']*"
        }), K]
      },
      H = {
        begin: /\{/,
        end: /\}/,
        contains: w.contains
      };
    return {
      name: "Haskell",
      aliases: ["hs"],
      keywords: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
      contains: [{
        beginKeywords: "module",
        end: "where",
        keywords: "module where",
        contains: [w, K],
        illegal: "\\W\\.|;"
      }, {
        begin: "\\bimport\\b",
        end: "$",
        keywords: "import qualified as hiding",
        contains: [w, K],
        illegal: "\\W\\.|;"
      }, {
        className: "class",
        begin: "^(\\s*)?(class|instance)\\b",
        end: "where",
        keywords: "class family instance where",
        contains: [z, w, K]
      }, {
        className: "class",
        begin: "\\b(data|(new)?type)\\b",
        end: "$",
        keywords: "data family type newtype deriving",
        contains: [q, z, w, H, K]
      }, {
        beginKeywords: "default",
        end: "$",
        contains: [z, w, K]
      }, {
        beginKeywords: "infix infixl infixr",
        end: "$",
        contains: [A.C_NUMBER_MODE, K]
      }, {
        begin: "\\bforeign\\b",
        end: "$",
        keywords: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
        contains: [z, A.QUOTE_STRING_MODE, K]
      }, {
        className: "meta",
        begin: "#!\\/usr\\/bin\\/env runhaskell",
        end: "$"
      }, q, Y, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, z, A.inherit(A.TITLE_MODE, {
        begin: "^[_a-z][\\w']*"
      }), K, {
        begin: "->|<-"
      }]
    };
  }
  UJ8.exports = bPq;
});

// Register to shared state
__$.pJ8 = pJ8;
