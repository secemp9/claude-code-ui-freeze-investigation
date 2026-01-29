// Module: MJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MJ8 = v((okz, jJ8) => {
  function ZPq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function WPq(A) {
    return _x1("(", A, ")*");
  }
  function _x1(...A) {
    return A.map(q => ZPq(q)).join("");
  }
  function DPq(A) {
    let K = {
        keyword: "abort acronym acronyms alias all and assign binary card diag display else eq file files for free ge gt if integer le loop lt maximizing minimizing model models ne negative no not option options or ord positive prod put putpage puttl repeat sameas semicont semiint smax smin solve sos1 sos2 sum system table then until using while xor yes",
        literal: "eps inf na",
        built_in: "abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power randBinomial randLinear randTriangle round rPower sigmoid sign signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion handleCollect handleDelete handleStatus handleSubmit heapFree heapLimit heapSize jobHandle jobKill jobStatus jobTerminate licenseLevel licenseStatus maxExecError sleep timeClose timeComp timeElapsed timeExec timeStart"
      },
      q = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      Y = {
        className: "symbol",
        variants: [{
          begin: /=[lgenxc]=/
        }, {
          begin: /\$/
        }]
      },
      z = {
        className: "comment",
        variants: [{
          begin: "'",
          end: "'"
        }, {
          begin: '"',
          end: '"'
        }],
        illegal: "\\n",
        contains: [A.BACKSLASH_ESCAPE]
      },
      w = {
        begin: "/",
        end: "/",
        keywords: K,
        contains: [z, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, A.C_NUMBER_MODE]
      },
      H = /[a-z0-9&#*=?@\\><:,()$[\]_.{}!+%^-]+/,
      J = {
        begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
        excludeBegin: !0,
        end: "$",
        endsWithParent: !0,
        contains: [z, w, {
          className: "comment",
          begin: _x1(H, WPq(_x1(/[ ]+/, H))),
          relevance: 0
        }]
      };
    return {
      name: "GAMS",
      aliases: ["gms"],
      case_insensitive: !0,
      keywords: K,
      contains: [A.COMMENT(/^\$ontext/, /^\$offtext/), {
        className: "meta",
        begin: "^\\$[a-z0-9]+",
        end: "$",
        returnBegin: !0,
        contains: [{
          className: "meta-keyword",
          begin: "^\\$[a-z0-9]+"
        }]
      }, A.COMMENT("^\\*", "$"), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, {
        beginKeywords: "set sets parameter parameters variable variables scalar scalars equation equations",
        end: ";",
        contains: [A.COMMENT("^\\*", "$"), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, w, J]
      }, {
        beginKeywords: "table",
        end: ";",
        returnBegin: !0,
        contains: [{
          beginKeywords: "table",
          end: "$",
          contains: [J]
        }, A.COMMENT("^\\*", "$"), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, A.C_NUMBER_MODE]
      }, {
        className: "function",
        begin: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
        returnBegin: !0,
        contains: [{
          className: "title",
          begin: /^[a-z0-9_]+/
        }, q, Y]
      }, A.C_NUMBER_MODE, Y]
    };
  }
  jJ8.exports = DPq;
});

// Register to shared state
__$.MJ8 = MJ8;
