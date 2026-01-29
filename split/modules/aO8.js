// Module: aO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aO8 = v((uCz, oO8) => {
  function UVq(A) {
    let K = {
        className: "variable",
        variants: [{
          begin: "\\$\\(" + A.UNDERSCORE_IDENT_RE + "\\)",
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: /\$[@%<?\^\+\*]/
        }]
      },
      q = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [A.BACKSLASH_ESCAPE, K]
      },
      Y = {
        className: "variable",
        begin: /\$\([\w-]+\s/,
        end: /\)/,
        keywords: {
          built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
        },
        contains: [K]
      },
      z = {
        begin: "^" + A.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)"
      },
      w = {
        className: "meta",
        begin: /^\.PHONY:/,
        end: /$/,
        keywords: {
          $pattern: /[\.\w]+/,
          "meta-keyword": ".PHONY"
        }
      },
      H = {
        className: "section",
        begin: /^[^\s]+:/,
        end: /$/,
        contains: [K]
      };
    return {
      name: "Makefile",
      aliases: ["mk", "mak", "make"],
      keywords: {
        $pattern: /[\w-]+/,
        keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
      },
      contains: [A.HASH_COMMENT_MODE, K, q, Y, z, w, H]
    };
  }
  oO8.exports = UVq;
});

// Register to shared state
__$.aO8 = aO8;
