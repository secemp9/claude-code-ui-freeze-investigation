// Module: v08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var v08 = v((iCz, T08) => {
  function eVq(A) {
    let K = {
        keyword: "if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",
        literal: "true false nil",
        built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
      },
      q = "[A-Za-z$_][0-9A-Za-z$_]*",
      Y = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: K
      },
      z = [A.inherit(A.C_NUMBER_MODE, {
        starts: {
          end: "(\\s*/)?",
          relevance: 0
        }
      }), {
        className: "string",
        variants: [{
          begin: /'/,
          end: /'/,
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: /"/,
          end: /"/,
          contains: [A.BACKSLASH_ESCAPE, Y]
        }]
      }, {
        className: "built_in",
        begin: "@__" + A.IDENT_RE
      }, {
        begin: "@" + A.IDENT_RE
      }, {
        begin: A.IDENT_RE + "\\\\" + A.IDENT_RE
      }];
    Y.contains = z;
    let w = A.inherit(A.TITLE_MODE, {
        begin: "[A-Za-z$_][0-9A-Za-z$_]*"
      }),
      H = "(\\(.*\\)\\s*)?\\B[-=]>",
      J = {
        className: "params",
        begin: "\\([^\\(]",
        returnBegin: !0,
        contains: [{
          begin: /\(/,
          end: /\)/,
          keywords: K,
          contains: ["self"].concat(z)
        }]
      };
    return {
      name: "MoonScript",
      aliases: ["moon"],
      keywords: K,
      illegal: /\/\*/,
      contains: z.concat([A.COMMENT("--", "$"), {
        className: "function",
        begin: "^\\s*[A-Za-z$_][0-9A-Za-z$_]*\\s*=\\s*" + H,
        end: "[-=]>",
        returnBegin: !0,
        contains: [w, J]
      }, {
        begin: /[\(,:=]\s*/,
        relevance: 0,
        contains: [{
          className: "function",
          begin: H,
          end: "[-=]>",
          returnBegin: !0,
          contains: [J]
        }]
      }, {
        className: "class",
        beginKeywords: "class",
        end: "$",
        illegal: /[:="\[\]]/,
        contains: [{
          beginKeywords: "extends",
          endsWithParent: !0,
          illegal: /[:="\[\]]/,
          contains: [w]
        }, w]
      }, {
        className: "name",
        begin: "[A-Za-z$_][0-9A-Za-z$_]*:",
        end: ":",
        returnBegin: !0,
        returnEnd: !0,
        relevance: 0
      }])
    };
  }
  T08.exports = eVq;
});

// Register to shared state
__$.v08 = v08;
