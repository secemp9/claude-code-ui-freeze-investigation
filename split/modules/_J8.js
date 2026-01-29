// Module: _J8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _J8 = v((ikz, $J8) => {
  function XPq(A) {
    let K = {
        className: "string",
        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
      },
      q = {
        className: "string",
        variants: [{
          begin: '"',
          end: '"'
        }]
      },
      z = {
        className: "function",
        beginKeywords: "def",
        end: /[:={\[(\n;]/,
        excludeEnd: !0,
        contains: [{
          className: "title",
          relevance: 0,
          begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
        }]
      };
    return {
      name: "Flix",
      keywords: {
        literal: "true false",
        keyword: "case class def else enum if impl import in lat rel index let match namespace switch type yield with"
      },
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, K, q, z, A.C_NUMBER_MODE]
    };
  }
  $J8.exports = XPq;
});

// Register to shared state
__$._J8 = _J8;
