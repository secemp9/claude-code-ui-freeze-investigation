// Module: L08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var L08 = v((rCz, C08) => {
  function Kfq(A) {
    let K = {
        className: "variable",
        variants: [{
          begin: /\$\d+/
        }, {
          begin: /\$\{/,
          end: /\}/
        }, {
          begin: /[$@]/ + A.UNDERSCORE_IDENT_RE
        }]
      },
      q = {
        endsWithParent: !0,
        keywords: {
          $pattern: "[a-z/_]+",
          literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        relevance: 0,
        illegal: "=>",
        contains: [A.HASH_COMMENT_MODE, {
          className: "string",
          contains: [A.BACKSLASH_ESCAPE, K],
          variants: [{
            begin: /"/,
            end: /"/
          }, {
            begin: /'/,
            end: /'/
          }]
        }, {
          begin: "([a-z]+):/",
          end: "\\s",
          endsWithParent: !0,
          excludeEnd: !0,
          contains: [K]
        }, {
          className: "regexp",
          contains: [A.BACKSLASH_ESCAPE, K],
          variants: [{
            begin: "\\s\\^",
            end: "\\s|\\{|;",
            returnEnd: !0
          }, {
            begin: "~\\*?\\s+",
            end: "\\s|\\{|;",
            returnEnd: !0
          }, {
            begin: "\\*(\\.[a-z\\-]+)+"
          }, {
            begin: "([a-z\\-]+\\.)+\\*"
          }]
        }, {
          className: "number",
          begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        }, {
          className: "number",
          begin: "\\b\\d+[kKmMgGdshdwy]*\\b",
          relevance: 0
        }, K]
      };
    return {
      name: "Nginx config",
      aliases: ["nginxconf"],
      contains: [A.HASH_COMMENT_MODE, {
        begin: A.UNDERSCORE_IDENT_RE + "\\s+\\{",
        returnBegin: !0,
        end: /\{/,
        contains: [{
          className: "section",
          begin: A.UNDERSCORE_IDENT_RE
        }],
        relevance: 0
      }, {
        begin: A.UNDERSCORE_IDENT_RE + "\\s",
        end: ";|\\{",
        returnBegin: !0,
        contains: [{
          className: "attribute",
          begin: A.UNDERSCORE_IDENT_RE,
          starts: q
        }],
        relevance: 0
      }],
      illegal: "[^\\s\\}]"
    };
  }
  C08.exports = Kfq;
});

// Register to shared state
__$.L08 = L08;
