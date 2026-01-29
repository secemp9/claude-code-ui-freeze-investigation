// Module: hO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hO8 = v((LCz, SO8) => {
  function fVq(A) {
    return {
      name: "Leaf",
      contains: [{
        className: "function",
        begin: "#+[A-Za-z_0-9]*\\(",
        end: / \{/,
        returnBegin: !0,
        excludeEnd: !0,
        contains: [{
          className: "keyword",
          begin: "#+"
        }, {
          className: "title",
          begin: "[A-Za-z_][A-Za-z_0-9]*"
        }, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          endsParent: !0,
          contains: [{
            className: "string",
            begin: '"',
            end: '"'
          }, {
            className: "variable",
            begin: "[A-Za-z_][A-Za-z_0-9]*"
          }]
        }]
      }]
    };
  }
  SO8.exports = fVq;
});

// Register to shared state
__$.hO8 = hO8;
