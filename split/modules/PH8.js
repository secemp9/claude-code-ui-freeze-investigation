// Module: PH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PH8 = v((vkz, MH8) => {
  function kMq(A) {
    return {
      name: "CSP",
      case_insensitive: !1,
      keywords: {
        $pattern: "[a-zA-Z][a-zA-Z0-9_-]*",
        keyword: "base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src"
      },
      contains: [{
        className: "string",
        begin: "'",
        end: "'"
      }, {
        className: "attribute",
        begin: "^Content",
        end: ":",
        excludeEnd: !0
      }]
    };
  }
  MH8.exports = kMq;
});

// Register to shared state
__$.PH8 = PH8;
