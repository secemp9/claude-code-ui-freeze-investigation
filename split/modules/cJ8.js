// Module: cJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cJ8 = v((OCz, dJ8) => {
  function xPq(A) {
    return {
      name: "Haxe",
      aliases: ["hx"],
      keywords: {
        keyword: "break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while Int Float String Bool Dynamic Void Array ",
        built_in: "trace this",
        literal: "true false null _"
      },
      contains: [{
        className: "string",
        begin: "'",
        end: "'",
        contains: [A.BACKSLASH_ESCAPE, {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}"
        }, {
          className: "subst",
          begin: "\\$",
          end: /\W\}/
        }]
      }, A.QUOTE_STRING_MODE, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.C_NUMBER_MODE, {
        className: "meta",
        begin: "@:",
        end: "$"
      }, {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "if else elseif end error"
        }
      }, {
        className: "type",
        begin: ":[ \t]*",
        end: "[^A-Za-z0-9_ \t\\->]",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }, {
        className: "type",
        begin: ":[ \t]*",
        end: "\\W",
        excludeBegin: !0,
        excludeEnd: !0
      }, {
        className: "type",
        begin: "new *",
        end: "\\W",
        excludeBegin: !0,
        excludeEnd: !0
      }, {
        className: "class",
        beginKeywords: "enum",
        end: "\\{",
        contains: [A.TITLE_MODE]
      }, {
        className: "class",
        beginKeywords: "abstract",
        end: "[\\{$]",
        contains: [{
          className: "type",
          begin: "\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "type",
          begin: "from +",
          end: "\\W",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "type",
          begin: "to +",
          end: "\\W",
          excludeBegin: !0,
          excludeEnd: !0
        }, A.TITLE_MODE],
        keywords: {
          keyword: "abstract from to"
        }
      }, {
        className: "class",
        begin: "\\b(class|interface) +",
        end: "[\\{$]",
        excludeEnd: !0,
        keywords: "class interface",
        contains: [{
          className: "keyword",
          begin: "\\b(extends|implements) +",
          keywords: "extends implements",
          contains: [{
            className: "type",
            begin: A.IDENT_RE,
            relevance: 0
          }]
        }, A.TITLE_MODE]
      }, {
        className: "function",
        beginKeywords: "function",
        end: "\\(",
        excludeEnd: !0,
        illegal: "\\S",
        contains: [A.TITLE_MODE]
      }],
      illegal: /<\//
    };
  }
  dJ8.exports = xPq;
});

// Register to shared state
__$.cJ8 = cJ8;
