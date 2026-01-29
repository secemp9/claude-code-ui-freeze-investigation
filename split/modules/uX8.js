// Module: uX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uX8 = v((kLz, xX8) => {
  function Ffq(A) {
    let q = {
      className: "attribute",
      begin: /[a-zA-Z-_]+/,
      end: /\s*:/,
      excludeEnd: !0,
      starts: {
        end: ";",
        relevance: 0,
        contains: [{
          className: "variable",
          begin: /\.[a-zA-Z-_]+/
        }, {
          className: "keyword",
          begin: /\(optional\)/
        }]
      }
    };
    return {
      name: "Roboconf",
      aliases: ["graph", "instances"],
      case_insensitive: !0,
      keywords: "import",
      contains: [{
        begin: "^facet [a-zA-Z-_][^\\n{]+\\{",
        end: /\}/,
        keywords: "facet",
        contains: [q, A.HASH_COMMENT_MODE]
      }, {
        begin: "^\\s*instance of [a-zA-Z-_][^\\n{]+\\{",
        end: /\}/,
        keywords: "name count channels instance-data instance-state instance of",
        illegal: /\S/,
        contains: ["self", q, A.HASH_COMMENT_MODE]
      }, {
        begin: "^[a-zA-Z-_][^\\n{]+\\{",
        end: /\}/,
        contains: [q, A.HASH_COMMENT_MODE]
      }, A.HASH_COMMENT_MODE]
    };
  }
  xX8.exports = Ffq;
});

// Register to shared state
__$.uX8 = uX8;
