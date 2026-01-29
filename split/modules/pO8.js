// Module: pO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pO8 = v((SCz, UO8) => {
  var yVq = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
    IVq = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    SVq = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
    hVq = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    bVq = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
    xVq = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
    uVq = [].concat(bVq, xVq, SVq, hVq);
  function BVq(A) {
    let K = ["npm", "print"],
      q = ["yes", "no", "on", "off", "it", "that", "void"],
      Y = ["then", "unless", "until", "loop", "of", "by", "when", "and", "or", "is", "isnt", "not", "it", "that", "otherwise", "from", "to", "til", "fallthrough", "case", "enum", "native", "list", "map", "__hasProp", "__extends", "__slice", "__bind", "__indexOf"],
      z = {
        keyword: yVq.concat(Y),
        literal: IVq.concat(q),
        built_in: uVq.concat(K)
      },
      w = "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",
      H = A.inherit(A.TITLE_MODE, {
        begin: "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*"
      }),
      J = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: z
      },
      O = {
        className: "subst",
        begin: /#[A-Za-z$_]/,
        end: /(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
        keywords: z
      },
      X = [A.BINARY_NUMBER_MODE, {
        className: "number",
        begin: "(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",
        relevance: 0,
        starts: {
          end: "(\\s*/)?",
          relevance: 0
        }
      }, {
        className: "string",
        variants: [{
          begin: /'''/,
          end: /'''/,
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: /'/,
          end: /'/,
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: /"""/,
          end: /"""/,
          contains: [A.BACKSLASH_ESCAPE, J, O]
        }, {
          begin: /"/,
          end: /"/,
          contains: [A.BACKSLASH_ESCAPE, J, O]
        }, {
          begin: /\\/,
          end: /(\s|$)/,
          excludeEnd: !0
        }]
      }, {
        className: "regexp",
        variants: [{
          begin: "//",
          end: "//[gim]*",
          contains: [J, A.HASH_COMMENT_MODE]
        }, {
          begin: /\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/
        }]
      }, {
        begin: "@[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*"
      }, {
        begin: "``",
        end: "``",
        excludeBegin: !0,
        excludeEnd: !0,
        subLanguage: "javascript"
      }];
    J.contains = X;
    let $ = {
        className: "params",
        begin: "\\(",
        returnBegin: !0,
        contains: [{
          begin: /\(/,
          end: /\)/,
          keywords: z,
          contains: ["self"].concat(X)
        }]
      },
      _ = {
        begin: "(#=>|=>|\\|>>|-?->|!->)"
      };
    return {
      name: "LiveScript",
      aliases: ["ls"],
      keywords: z,
      illegal: /\/\*/,
      contains: X.concat([A.COMMENT("\\/\\*", "\\*\\/"), A.HASH_COMMENT_MODE, _, {
        className: "function",
        contains: [H, $],
        returnBegin: !0,
        variants: [{
          begin: "([A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?",
          end: "->\\*?"
        }, {
          begin: "([A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?",
          end: "[-~]{1,2}>\\*?"
        }, {
          begin: "([A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?",
          end: "!?[-~]{1,2}>\\*?"
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
          contains: [H]
        }, H]
      }, {
        begin: "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*:",
        end: ":",
        returnBegin: !0,
        returnEnd: !0,
        relevance: 0
      }])
    };
  }
  UO8.exports = BVq;
});

// Register to shared state
__$.pO8 = pO8;
