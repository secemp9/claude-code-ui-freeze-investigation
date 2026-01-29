// Module: zH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zH8 = v((jkz, YH8) => {
  var XMq = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
    $Mq = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    _Mq = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
    GMq = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    ZMq = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
    WMq = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
    DMq = [].concat(ZMq, WMq, _Mq, GMq);
  function jMq(A) {
    let K = ["npm", "print"],
      q = ["yes", "no", "on", "off"],
      Y = ["then", "unless", "until", "loop", "by", "when", "and", "or", "is", "isnt", "not"],
      z = ["var", "const", "let", "function", "static"],
      w = Z => W => !Z.includes(W),
      H = {
        keyword: XMq.concat(Y).filter(w(z)),
        literal: $Mq.concat(q),
        built_in: DMq.concat(K)
      },
      J = "[A-Za-z$_][0-9A-Za-z$_]*",
      O = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: H
      },
      X = [A.BINARY_NUMBER_MODE, A.inherit(A.C_NUMBER_MODE, {
        starts: {
          end: "(\\s*/)?",
          relevance: 0
        }
      }), {
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
          contains: [A.BACKSLASH_ESCAPE, O]
        }, {
          begin: /"/,
          end: /"/,
          contains: [A.BACKSLASH_ESCAPE, O]
        }]
      }, {
        className: "regexp",
        variants: [{
          begin: "///",
          end: "///",
          contains: [O, A.HASH_COMMENT_MODE]
        }, {
          begin: "//[gim]{0,3}(?=\\W)",
          relevance: 0
        }, {
          begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
        }]
      }, {
        begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
      }, {
        subLanguage: "javascript",
        excludeBegin: !0,
        excludeEnd: !0,
        variants: [{
          begin: "```",
          end: "```"
        }, {
          begin: "`",
          end: "`"
        }]
      }];
    O.contains = X;
    let $ = A.inherit(A.TITLE_MODE, {
        begin: "[A-Za-z$_][0-9A-Za-z$_]*"
      }),
      _ = "(\\(.*\\)\\s*)?\\B[-=]>",
      G = {
        className: "params",
        begin: "\\([^\\(]",
        returnBegin: !0,
        contains: [{
          begin: /\(/,
          end: /\)/,
          keywords: H,
          contains: ["self"].concat(X)
        }]
      };
    return {
      name: "CoffeeScript",
      aliases: ["coffee", "cson", "iced"],
      keywords: H,
      illegal: /\/\*/,
      contains: X.concat([A.COMMENT("###", "###"), A.HASH_COMMENT_MODE, {
        className: "function",
        begin: "^\\s*[A-Za-z$_][0-9A-Za-z$_]*\\s*=\\s*" + _,
        end: "[-=]>",
        returnBegin: !0,
        contains: [$, G]
      }, {
        begin: /[:\(,=]\s*/,
        relevance: 0,
        contains: [{
          className: "function",
          begin: _,
          end: "[-=]>",
          returnBegin: !0,
          contains: [G]
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
          contains: [$]
        }, $]
      }, {
        begin: "[A-Za-z$_][0-9A-Za-z$_]*:",
        end: ":",
        returnBegin: !0,
        returnEnd: !0,
        relevance: 0
      }])
    };
  }
  YH8.exports = jMq;
});

// Register to shared state
__$.zH8 = zH8;
