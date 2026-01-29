// Module: CH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CH8 = v((Lkz, kH8) => {
  function QMq(A) {
    let K = {
        className: "subst",
        variants: [{
          begin: "\\$[A-Za-z0-9_]+"
        }]
      },
      q = {
        className: "subst",
        variants: [{
          begin: /\$\{/,
          end: /\}/
        }],
        keywords: "true false null this is new super"
      },
      Y = {
        className: "string",
        variants: [{
          begin: "r'''",
          end: "'''"
        }, {
          begin: 'r"""',
          end: '"""'
        }, {
          begin: "r'",
          end: "'",
          illegal: "\\n"
        }, {
          begin: 'r"',
          end: '"',
          illegal: "\\n"
        }, {
          begin: "'''",
          end: "'''",
          contains: [A.BACKSLASH_ESCAPE, K, q]
        }, {
          begin: '"""',
          end: '"""',
          contains: [A.BACKSLASH_ESCAPE, K, q]
        }, {
          begin: "'",
          end: "'",
          illegal: "\\n",
          contains: [A.BACKSLASH_ESCAPE, K, q]
        }, {
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [A.BACKSLASH_ESCAPE, K, q]
        }]
      };
    q.contains = [A.C_NUMBER_MODE, Y];
    let z = ["Comparable", "DateTime", "Duration", "Function", "Iterable", "Iterator", "List", "Map", "Match", "Object", "Pattern", "RegExp", "Set", "Stopwatch", "String", "StringBuffer", "StringSink", "Symbol", "Type", "Uri", "bool", "double", "int", "num", "Element", "ElementList"],
      w = z.map(J => `${J}?`);
    return {
      name: "Dart",
      keywords: {
        keyword: "abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in inferface is late library mixin new null on operator part required rethrow return set show static super switch sync this throw true try typedef var void while with yield",
        built_in: z.concat(w).concat(["Never", "Null", "dynamic", "print", "document", "querySelector", "querySelectorAll", "window"]),
        $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
      },
      contains: [Y, A.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
        subLanguage: "markdown",
        relevance: 0
      }), A.COMMENT(/\/{3,} ?/, /$/, {
        contains: [{
          subLanguage: "markdown",
          begin: ".",
          end: "$",
          relevance: 0
        }]
      }), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        contains: [{
          beginKeywords: "extends implements"
        }, A.UNDERSCORE_TITLE_MODE]
      }, A.C_NUMBER_MODE, {
        className: "meta",
        begin: "@[A-Za-z]+"
      }, {
        begin: "=>"
      }]
    };
  }
  kH8.exports = QMq;
});

// Register to shared state
__$.CH8 = CH8;
