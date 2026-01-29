// Module: S08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var S08 = v((aCz, I08) => {
  function Yfq(A) {
    let K = {
        keyword: "rec with let in inherit assert if else then",
        literal: "true false or and null",
        built_in: "import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"
      },
      q = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        keywords: K
      },
      Y = {
        begin: /[a-zA-Z0-9-_]+(\s*=)/,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          className: "attr",
          begin: /\S+/
        }]
      },
      z = {
        className: "string",
        contains: [q],
        variants: [{
          begin: "''",
          end: "''"
        }, {
          begin: '"',
          end: '"'
        }]
      },
      w = [A.NUMBER_MODE, A.HASH_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, z, Y];
    return q.contains = w, {
      name: "Nix",
      aliases: ["nixos"],
      keywords: K,
      contains: w
    };
  }
  I08.exports = Yfq;
});

// Register to shared state
__$.S08 = S08;
