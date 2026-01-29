// Module: aH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aH8 = v((Fkz, oH8) => {
  function tMq(A) {
    let K = {
        variants: [A.COMMENT("--", "$"), A.COMMENT(/\{-/, /-\}/, {
          contains: ["self"]
        })]
      },
      q = {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      },
      Y = {
        begin: "\\(",
        end: "\\)",
        illegal: '"',
        contains: [{
          className: "type",
          begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
        }, K]
      },
      z = {
        begin: /\{/,
        end: /\}/,
        contains: Y.contains
      },
      w = {
        className: "string",
        begin: "'\\\\?.",
        end: "'",
        illegal: "."
      };
    return {
      name: "Elm",
      keywords: "let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",
      contains: [{
        beginKeywords: "port effect module",
        end: "exposing",
        keywords: "port effect module where command subscription exposing",
        contains: [Y, K],
        illegal: "\\W\\.|;"
      }, {
        begin: "import",
        end: "$",
        keywords: "import as exposing",
        contains: [Y, K],
        illegal: "\\W\\.|;"
      }, {
        begin: "type",
        end: "$",
        keywords: "type alias",
        contains: [q, Y, z, K]
      }, {
        beginKeywords: "infix infixl infixr",
        end: "$",
        contains: [A.C_NUMBER_MODE, K]
      }, {
        begin: "port",
        end: "$",
        keywords: "port",
        contains: [K]
      }, w, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, q, A.inherit(A.TITLE_MODE, {
        begin: "^[_a-z][\\w']*"
      }), K, {
        begin: "->|<-"
      }],
      illegal: /;/
    };
  }
  oH8.exports = tMq;
});

// Register to shared state
__$.aH8 = aH8;
