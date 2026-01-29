// Module: cw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cw8 = v((Xkz, dw8) => {
  function qMq(A) {
    let K = "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",
      q = "false true",
      Y = [A.C_LINE_COMMENT_MODE, A.COMMENT(/\{/, /\}/, {
        relevance: 0
      }), A.COMMENT(/\(\*/, /\*\)/, {
        relevance: 10
      })],
      z = {
        className: "string",
        begin: /'/,
        end: /'/,
        contains: [{
          begin: /''/
        }]
      },
      w = {
        className: "string",
        begin: /(#\d+)+/
      },
      H = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(DT|D|T)",
        relevance: 0
      },
      J = {
        className: "string",
        begin: '"',
        end: '"'
      },
      O = {
        className: "function",
        beginKeywords: "procedure",
        end: /[:;]/,
        keywords: "procedure|10",
        contains: [A.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: K,
          contains: [z, w]
        }].concat(Y)
      },
      X = {
        className: "class",
        begin: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
        returnBegin: !0,
        contains: [A.TITLE_MODE, O]
      };
    return {
      name: "C/AL",
      case_insensitive: !0,
      keywords: {
        keyword: K,
        literal: "false true"
      },
      illegal: /\/\*/,
      contains: [z, w, H, J, A.NUMBER_MODE, X, O]
    };
  }
  dw8.exports = qMq;
});

// Register to shared state
__$.cw8 = cw8;
