// Module: E_8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var E_8 = v((GRz, v_8) => {
  function ATq(A) {
    let K = {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE],
        variants: [A.inherit(A.APOS_STRING_MODE, {
          illegal: null
        }), A.inherit(A.QUOTE_STRING_MODE, {
          illegal: null
        })]
      },
      q = A.UNDERSCORE_TITLE_MODE,
      Y = {
        variants: [A.BINARY_NUMBER_MODE, A.C_NUMBER_MODE]
      },
      z = "namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined";
    return {
      name: "Zephir",
      aliases: ["zep"],
      keywords: z,
      contains: [A.C_LINE_COMMENT_MODE, A.COMMENT(/\/\*/, /\*\//, {
        contains: [{
          className: "doctag",
          begin: /@[A-Za-z]+/
        }]
      }), {
        className: "string",
        begin: /<<<['"]?\w+['"]?$/,
        end: /^\w+;/,
        contains: [A.BACKSLASH_ESCAPE]
      }, {
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      }, {
        className: "function",
        beginKeywords: "function fn",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: /\$|\[|%/,
        contains: [q, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: z,
          contains: ["self", A.C_BLOCK_COMMENT_MODE, K, Y]
        }]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        illegal: /[:($"]/,
        contains: [{
          beginKeywords: "extends implements"
        }, q]
      }, {
        beginKeywords: "namespace",
        end: /;/,
        illegal: /[.']/,
        contains: [q]
      }, {
        beginKeywords: "use",
        end: /;/,
        contains: [q]
      }, {
        begin: /=>/
      }, K, Y]
    };
  }
  v_8.exports = ATq;
});

// Register to shared state
__$.E_8 = E_8;
