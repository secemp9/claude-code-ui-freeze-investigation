// Module: nX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nX8 = v((SLz, iX8) => {
  function lfq(A) {
    let K = {
        className: "meta",
        begin: "@[A-Za-z]+"
      },
      q = {
        className: "subst",
        variants: [{
          begin: "\\$[A-Za-z0-9_]+"
        }, {
          begin: /\$\{/,
          end: /\}/
        }]
      },
      Y = {
        className: "string",
        variants: [{
          begin: '"""',
          end: '"""'
        }, {
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: '[a-z]+"',
          end: '"',
          illegal: "\\n",
          contains: [A.BACKSLASH_ESCAPE, q]
        }, {
          className: "string",
          begin: '[a-z]+"""',
          end: '"""',
          contains: [q],
          relevance: 10
        }]
      },
      z = {
        className: "symbol",
        begin: "'\\w[\\w\\d_]*(?!')"
      },
      w = {
        className: "type",
        begin: "\\b[A-Z][A-Za-z0-9_]*",
        relevance: 0
      },
      H = {
        className: "title",
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
        relevance: 0
      },
      J = {
        className: "class",
        beginKeywords: "class object trait type",
        end: /[:={\[\n;]/,
        excludeEnd: !0,
        contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
          beginKeywords: "extends with",
          relevance: 10
        }, {
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          contains: [w]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          contains: [w]
        }, H]
      },
      O = {
        className: "function",
        beginKeywords: "def",
        end: /[:={\[(\n;]/,
        excludeEnd: !0,
        contains: [H]
      };
    return {
      name: "Scala",
      keywords: {
        literal: "true false null",
        keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
      },
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, Y, z, w, O, J, A.C_NUMBER_MODE, K]
    };
  }
  iX8.exports = lfq;
});

// Register to shared state
__$.nX8 = nX8;
