// Module: BH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BH8 = v((hkz, uH8) => {
  function lMq(A) {
    return {
      name: "Dockerfile",
      aliases: ["docker"],
      case_insensitive: !0,
      keywords: "from maintainer expose env arg user onbuild stopsignal",
      contains: [A.HASH_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.NUMBER_MODE, {
        beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
        starts: {
          end: /[^\\]$/,
          subLanguage: "bash"
        }
      }],
      illegal: "</"
    };
  }
  uH8.exports = lMq;
});

// Register to shared state
__$.BH8 = BH8;
