// Module: O_8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var O_8 = v((zRz, J_8) => {
  function H_8(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function cNq(...A) {
    return A.map(q => H_8(q)).join("");
  }
  function lNq(...A) {
    return "(" + A.map(q => H_8(q)).join("|") + ")";
  }
  function iNq(A) {
    let K = "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err".split(" "),
      q = ["server", "response", "request", "scriptengine", "scriptenginebuildversion", "scriptengineminorversion", "scriptenginemajorversion"],
      Y = {
        begin: cNq(lNq(...K), "\\s*\\("),
        relevance: 0,
        keywords: {
          built_in: K
        }
      };
    return {
      name: "VBScript",
      aliases: ["vbs"],
      case_insensitive: !0,
      keywords: {
        keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
        built_in: q,
        literal: "true false null nothing empty"
      },
      illegal: "//",
      contains: [Y, A.inherit(A.QUOTE_STRING_MODE, {
        contains: [{
          begin: '""'
        }]
      }), A.COMMENT(/'/, /$/, {
        relevance: 0
      }), A.C_NUMBER_MODE]
    };
  }
  J_8.exports = iNq;
});

// Register to shared state
__$.O_8 = O_8;
