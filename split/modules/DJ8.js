// Module: DJ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DJ8 = v((rkz, WJ8) => {
  function GPq(A) {
    let K = {
      begin: "<",
      end: ">",
      contains: [A.inherit(A.TITLE_MODE, {
        begin: /'[a-zA-Z0-9_]+/
      })]
    };
    return {
      name: "F#",
      aliases: ["fs"],
      keywords: "abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
      illegal: /\/\*/,
      contains: [{
        className: "keyword",
        begin: /\b(yield|return|let|do)!/
      }, {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{
          begin: '""'
        }]
      }, {
        className: "string",
        begin: '"""',
        end: '"""'
      }, A.COMMENT("\\(\\*(\\s)", "\\*\\)", {
        contains: ["self"]
      }), {
        className: "class",
        beginKeywords: "type",
        end: "\\(|=|$",
        excludeEnd: !0,
        contains: [A.UNDERSCORE_TITLE_MODE, K]
      }, {
        className: "meta",
        begin: "\\[<",
        end: ">\\]",
        relevance: 10
      }, {
        className: "symbol",
        begin: "\\B('[A-Za-z])\\b",
        contains: [A.BACKSLASH_ESCAPE]
      }, A.C_LINE_COMMENT_MODE, A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }), A.C_NUMBER_MODE]
    };
  }
  WJ8.exports = GPq;
});

// Register to shared state
__$.DJ8 = DJ8;
