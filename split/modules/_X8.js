// Module: _X8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _X8 = v((ZLz, $X8) => {
  function ffq(A) {
    let K = {
        begin: /[a-z][A-Za-z0-9_]*/,
        relevance: 0
      },
      q = {
        className: "symbol",
        variants: [{
          begin: /[A-Z][a-zA-Z0-9_]*/
        }, {
          begin: /_[A-Za-z0-9_]*/
        }],
        relevance: 0
      },
      Y = {
        begin: /\(/,
        end: /\)/,
        relevance: 0
      },
      z = {
        begin: /\[/,
        end: /\]/
      },
      w = {
        className: "comment",
        begin: /%/,
        end: /$/,
        contains: [A.PHRASAL_WORDS_MODE]
      },
      H = {
        className: "string",
        begin: /`/,
        end: /`/,
        contains: [A.BACKSLASH_ESCAPE]
      },
      J = {
        className: "string",
        begin: /0'(\\'|.)/
      },
      O = {
        className: "string",
        begin: /0'\\s/
      },
      $ = [K, q, Y, {
        begin: /:-/
      }, z, w, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, H, J, O, A.C_NUMBER_MODE];
    return Y.contains = $, z.contains = $, {
      name: "Prolog",
      contains: $.concat([{
        begin: /\.$/
      }])
    };
  }
  $X8.exports = ffq;
});

// Register to shared state
__$._X8 = _X8;
