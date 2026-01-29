// Module: mJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mJ8 = v((wCz, BJ8) => {
  function RPq(A) {
    return {
      name: "HAML",
      case_insensitive: !0,
      contains: [{
        className: "meta",
        begin: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
        relevance: 10
      }, A.COMMENT("^\\s*(!=#|=#|-#|/).*$", !1, {
        relevance: 0
      }), {
        begin: "^\\s*(-|=|!=)(?!#)",
        starts: {
          end: "\\n",
          subLanguage: "ruby"
        }
      }, {
        className: "tag",
        begin: "^\\s*%",
        contains: [{
          className: "selector-tag",
          begin: "\\w+"
        }, {
          className: "selector-id",
          begin: "#[\\w-]+"
        }, {
          className: "selector-class",
          begin: "\\.[\\w-]+"
        }, {
          begin: /\{\s*/,
          end: /\s*\}/,
          contains: [{
            begin: ":\\w+\\s*=>",
            end: ",\\s+",
            returnBegin: !0,
            endsWithParent: !0,
            contains: [{
              className: "attr",
              begin: ":\\w+"
            }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
              begin: "\\w+",
              relevance: 0
            }]
          }]
        }, {
          begin: "\\(\\s*",
          end: "\\s*\\)",
          excludeEnd: !0,
          contains: [{
            begin: "\\w+\\s*=",
            end: "\\s+",
            returnBegin: !0,
            endsWithParent: !0,
            contains: [{
              className: "attr",
              begin: "\\w+",
              relevance: 0
            }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
              begin: "\\w+",
              relevance: 0
            }]
          }]
        }]
      }, {
        begin: "^\\s*[=~]\\s*"
      }, {
        begin: /#\{/,
        starts: {
          end: /\}/,
          subLanguage: "ruby"
        }
      }]
    };
  }
  BJ8.exports = RPq;
});

// Register to shared state
__$.mJ8 = mJ8;
