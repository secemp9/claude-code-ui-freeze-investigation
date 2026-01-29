// Module: XJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XJ8 = v((lkz, OJ8) => {
  function OPq(A) {
    return {
      name: "FIX",
      contains: [{
        begin: /[^\u2401\u0001]+/,
        end: /[\u2401\u0001]/,
        excludeEnd: !0,
        returnBegin: !0,
        returnEnd: !1,
        contains: [{
          begin: /([^\u2401\u0001=]+)/,
          end: /=([^\u2401\u0001=]+)/,
          returnEnd: !0,
          returnBegin: !1,
          className: "attr"
        }, {
          begin: /=/,
          end: /([\u2401\u0001])/,
          excludeEnd: !0,
          excludeBegin: !0,
          className: "string"
        }]
      }],
      case_insensitive: !0
    };
  }
  OJ8.exports = OPq;
});

// Register to shared state
__$.XJ8 = XJ8;
