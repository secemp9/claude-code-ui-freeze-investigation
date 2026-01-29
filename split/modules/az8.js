// Module: az8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var az8 = v((pEz, oz8) => {
  function Njq(A) {
    let q = "[eE][-+]?\\d(_|\\d)*",
      Y = "\\d(_|\\d)*(\\.\\d(_|\\d)*)?(" + q + ")?",
      z = "\\w+",
      H = "\\b(" + ("\\d(_|\\d)*#\\w+(\\.\\w+)?#(" + q + ")?") + "|" + Y + ")",
      J = "[A-Za-z](_?[A-Za-z0-9.])*",
      O = `[]\\{\\}%#'"`,
      X = A.COMMENT("--", "$"),
      $ = {
        begin: "\\s+:\\s+",
        end: "\\s*(:=|;|\\)|=>|$)",
        illegal: `[]\\{\\}%#'"`,
        contains: [{
          beginKeywords: "loop for declare others",
          endsParent: !0
        }, {
          className: "keyword",
          beginKeywords: "not null constant access function procedure in out aliased exception"
        }, {
          className: "type",
          begin: "[A-Za-z](_?[A-Za-z0-9.])*",
          endsParent: !0,
          relevance: 0
        }]
      };
    return {
      name: "Ada",
      case_insensitive: !0,
      keywords: {
        keyword: "abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",
        literal: "True False"
      },
      contains: [X, {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [{
          begin: /""/,
          relevance: 0
        }]
      }, {
        className: "string",
        begin: /'.'/
      }, {
        className: "number",
        begin: H,
        relevance: 0
      }, {
        className: "symbol",
        begin: "'[A-Za-z](_?[A-Za-z0-9.])*"
      }, {
        className: "title",
        begin: "(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",
        end: "(is|$)",
        keywords: "package body",
        excludeBegin: !0,
        excludeEnd: !0,
        illegal: `[]\\{\\}%#'"`
      }, {
        begin: "(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",
        end: "(\\bis|\\bwith|\\brenames|\\)\\s*;)",
        keywords: "overriding function procedure with is renames return",
        returnBegin: !0,
        contains: [X, {
          className: "title",
          begin: "(\\bwith\\s+)?\\b(function|procedure)\\s+",
          end: "(\\(|\\s+|$)",
          excludeBegin: !0,
          excludeEnd: !0,
          illegal: `[]\\{\\}%#'"`
        }, $, {
          className: "type",
          begin: "\\breturn\\s+",
          end: "(\\s+|;|$)",
          keywords: "return",
          excludeBegin: !0,
          excludeEnd: !0,
          endsParent: !0,
          illegal: `[]\\{\\}%#'"`
        }]
      }, {
        className: "type",
        begin: "\\b(sub)?type\\s+",
        end: "\\s+",
        keywords: "type",
        excludeBegin: !0,
        illegal: `[]\\{\\}%#'"`
      }, $]
    };
  }
  oz8.exports = Njq;
});

// Register to shared state
__$.az8 = az8;
