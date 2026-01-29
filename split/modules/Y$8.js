// Module: Y$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y$8 = v((BLz, q$8) => {
  function qNq(A) {
    let K = ["add", "and", "cmp", "cmpg", "cmpl", "const", "div", "double", "float", "goto", "if", "int", "long", "move", "mul", "neg", "new", "nop", "not", "or", "rem", "return", "shl", "shr", "sput", "sub", "throw", "ushr", "xor"],
      q = ["aget", "aput", "array", "check", "execute", "fill", "filled", "goto/16", "goto/32", "iget", "instance", "invoke", "iput", "monitor", "packed", "sget", "sparse"],
      Y = ["transient", "constructor", "abstract", "final", "synthetic", "public", "private", "protected", "static", "bridge", "system"];
    return {
      name: "Smali",
      contains: [{
        className: "string",
        begin: '"',
        end: '"',
        relevance: 0
      }, A.COMMENT("#", "$", {
        relevance: 0
      }), {
        className: "keyword",
        variants: [{
          begin: "\\s*\\.end\\s[a-zA-Z0-9]*"
        }, {
          begin: "^[ ]*\\.[a-zA-Z]*",
          relevance: 0
        }, {
          begin: "\\s:[a-zA-Z_0-9]*",
          relevance: 0
        }, {
          begin: "\\s(" + Y.join("|") + ")"
        }]
      }, {
        className: "built_in",
        variants: [{
          begin: "\\s(" + K.join("|") + ")\\s"
        }, {
          begin: "\\s(" + K.join("|") + ")((-|/)[a-zA-Z0-9]+)+\\s",
          relevance: 10
        }, {
          begin: "\\s(" + q.join("|") + ")((-|/)[a-zA-Z0-9]+)*\\s",
          relevance: 10
        }]
      }, {
        className: "class",
        begin: `L[^(;:
]*;`,
        relevance: 0
      }, {
        begin: "[vp][0-9]+"
      }]
    };
  }
  q$8.exports = qNq;
});

// Register to shared state
__$.Y$8 = Y$8;
