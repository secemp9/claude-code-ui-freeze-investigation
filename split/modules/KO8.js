// Module: KO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KO8 = v((ZCz, AO8) => {
  function lPq(A) {
    return {
      name: "Inform 7",
      aliases: ["i7"],
      case_insensitive: !0,
      keywords: {
        keyword: "thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule"
      },
      contains: [{
        className: "string",
        begin: '"',
        end: '"',
        relevance: 0,
        contains: [{
          className: "subst",
          begin: "\\[",
          end: "\\]"
        }]
      }, {
        className: "section",
        begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
        end: "$"
      }, {
        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
        end: ":",
        contains: [{
          begin: "\\(This",
          end: "\\)"
        }]
      }, {
        className: "comment",
        begin: "\\[",
        end: "\\]",
        contains: ["self"]
      }]
    };
  }
  AO8.exports = lPq;
});

// Register to shared state
__$.KO8 = KO8;
