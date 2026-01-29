// Module: IO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IO8 = v((CCz, yO8) => {
  function VVq(A) {
    return {
      name: "LDIF",
      contains: [{
        className: "attribute",
        begin: "^dn",
        end: ": ",
        excludeEnd: !0,
        starts: {
          end: "$",
          relevance: 0
        },
        relevance: 10
      }, {
        className: "attribute",
        begin: "^\\w",
        end: ": ",
        excludeEnd: !0,
        starts: {
          end: "$",
          relevance: 0
        }
      }, {
        className: "literal",
        begin: "^-",
        end: "$"
      }, A.HASH_COMMENT_MODE]
    };
  }
  yO8.exports = VVq;
});

// Register to shared state
__$.IO8 = IO8;
