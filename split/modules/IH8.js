// Module: IH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IH8 = v((ykz, yH8) => {
  function pMq(A) {
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [{
        className: "meta",
        relevance: 10,
        variants: [{
          begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
        }, {
          begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
        }, {
          begin: /^--- +\d+,\d+ +----$/
        }]
      }, {
        className: "comment",
        variants: [{
          begin: /Index: /,
          end: /$/
        }, {
          begin: /^index/,
          end: /$/
        }, {
          begin: /={3,}/,
          end: /$/
        }, {
          begin: /^-{3}/,
          end: /$/
        }, {
          begin: /^\*{3} /,
          end: /$/
        }, {
          begin: /^\+{3}/,
          end: /$/
        }, {
          begin: /^\*{15}$/
        }, {
          begin: /^diff --git/,
          end: /$/
        }]
      }, {
        className: "addition",
        begin: /^\+/,
        end: /$/
      }, {
        className: "deletion",
        begin: /^-/,
        end: /$/
      }, {
        className: "addition",
        begin: /^!/,
        end: /$/
      }]
    };
  }
  yH8.exports = pMq;
});

// Register to shared state
__$.IH8 = IH8;
