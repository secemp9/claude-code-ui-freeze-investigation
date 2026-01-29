// Module: QH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QH8 = v((xkz, FH8) => {
  function nMq(A) {
    return {
      keywords: "dsconfig",
      contains: [{
        className: "keyword",
        begin: "^dsconfig",
        end: /\s/,
        excludeEnd: !0,
        relevance: 10
      }, {
        className: "built_in",
        begin: /(list|create|get|set|delete)-(\w+)/,
        end: /\s/,
        excludeEnd: !0,
        illegal: "!@#$%^&*()",
        relevance: 10
      }, {
        className: "built_in",
        begin: /--(\w+)/,
        end: /\s/,
        excludeEnd: !0
      }, {
        className: "string",
        begin: /"/,
        end: /"/
      }, {
        className: "string",
        begin: /'/,
        end: /'/
      }, {
        className: "string",
        begin: /[\w\-?]+:\w+/,
        end: /\W/,
        relevance: 0
      }, {
        className: "string",
        begin: /\w+(\-\w+)*/,
        end: /(?=\W)/,
        relevance: 0
      }, A.HASH_COMMENT_MODE]
    };
  }
  FH8.exports = nMq;
});

// Register to shared state
__$.QH8 = QH8;
