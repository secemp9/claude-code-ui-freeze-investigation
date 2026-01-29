// Module: E$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var E$8 = v((iLz, v$8) => {
  function VNq(A) {
    return {
      name: "SubUnit",
      case_insensitive: !0,
      contains: [{
        className: "string",
        begin: `\\[
(multipart)?`,
        end: `\\]
`
      }, {
        className: "string",
        begin: "\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"
      }, {
        className: "string",
        begin: "(\\+|-)\\d+"
      }, {
        className: "keyword",
        relevance: 10,
        variants: [{
          begin: "^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"
        }, {
          begin: "^progress(:?)(\\s+)?(pop|push)?"
        }, {
          begin: "^tags:"
        }, {
          begin: "^time:"
        }]
      }]
    };
  }
  v$8.exports = VNq;
});

// Register to shared state
__$.E$8 = E$8;
