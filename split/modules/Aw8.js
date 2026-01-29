// Module: Aw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Aw8 = v((cEz, ez8) => {
  function vjq(A) {
    let K = {
        className: "number",
        begin: /[$%]\d+/
      },
      q = {
        className: "number",
        begin: /\d+/
      },
      Y = {
        className: "number",
        begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
      },
      z = {
        className: "number",
        begin: /:\d{1,5}/
      };
    return {
      name: "Apache config",
      aliases: ["apacheconf"],
      case_insensitive: !0,
      contains: [A.HASH_COMMENT_MODE, {
        className: "section",
        begin: /<\/?/,
        end: />/,
        contains: [Y, z, A.inherit(A.QUOTE_STRING_MODE, {
          relevance: 0
        })]
      }, {
        className: "attribute",
        begin: /\w+/,
        relevance: 0,
        keywords: {
          nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
        },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: {
            literal: "on off all deny allow"
          },
          contains: [{
            className: "meta",
            begin: /\s\[/,
            end: /\]$/
          }, {
            className: "variable",
            begin: /[\$%]\{/,
            end: /\}/,
            contains: ["self", K]
          }, Y, q, A.QUOTE_STRING_MODE]
        }
      }],
      illegal: /\S/
    };
  }
  ez8.exports = vjq;
});

// Register to shared state
__$.Aw8 = Aw8;
