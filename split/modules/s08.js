// Module: s08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var s08 = v((HLz, a08) => {
  function Zfq(A) {
    let K = {
        className: "variable",
        begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" + "(?![A-Za-z0-9])(?![$])"
      },
      q = {
        className: "meta",
        variants: [{
          begin: /<\?php/,
          relevance: 10
        }, {
          begin: /<\?[=]?/
        }, {
          begin: /\?>/
        }]
      },
      Y = {
        className: "subst",
        variants: [{
          begin: /\$\w+/
        }, {
          begin: /\{\$/,
          end: /\}/
        }]
      },
      z = A.inherit(A.APOS_STRING_MODE, {
        illegal: null
      }),
      w = A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null,
        contains: A.QUOTE_STRING_MODE.contains.concat(Y)
      }),
      H = A.END_SAME_AS_BEGIN({
        begin: /<<<[ \t]*(\w+)\n/,
        end: /[ \t]*(\w+)\b/,
        contains: A.QUOTE_STRING_MODE.contains.concat(Y)
      }),
      J = {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE, q],
        variants: [A.inherit(z, {
          begin: "b'",
          end: "'"
        }), A.inherit(w, {
          begin: 'b"',
          end: '"'
        }), w, z, H]
      },
      O = {
        className: "number",
        variants: [{
          begin: "\\b0b[01]+(?:_[01]+)*\\b"
        }, {
          begin: "\\b0o[0-7]+(?:_[0-7]+)*\\b"
        }, {
          begin: "\\b0x[\\da-f]+(?:_[\\da-f]+)*\\b"
        }, {
          begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:e[+-]?\\d+)?"
        }],
        relevance: 0
      },
      X = {
        keyword: "__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 mixed new object or private protected public real return string switch throw trait try unset use var void while xor yield",
        literal: "false null true",
        built_in: "Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException UnhandledMatchError ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Stringable Throwable Traversable WeakReference WeakMap Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
      };
    return {
      aliases: ["php3", "php4", "php5", "php6", "php7", "php8"],
      case_insensitive: !0,
      keywords: X,
      contains: [A.HASH_COMMENT_MODE, A.COMMENT("//", "$", {
        contains: [q]
      }), A.COMMENT("/\\*", "\\*/", {
        contains: [{
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      }), A.COMMENT("__halt_compiler.+?;", !1, {
        endsWithParent: !0,
        keywords: "__halt_compiler"
      }), q, {
        className: "keyword",
        begin: /\$this\b/
      }, K, {
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      }, {
        className: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [{
          beginKeywords: "use"
        }, A.UNDERSCORE_TITLE_MODE, {
          begin: "=>",
          endsParent: !0
        }, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: X,
          contains: ["self", K, A.C_BLOCK_COMMENT_MODE, J, O]
        }]
      }, {
        className: "class",
        variants: [{
          beginKeywords: "enum",
          illegal: /[($"]/
        }, {
          beginKeywords: "class interface trait",
          illegal: /[:($"]/
        }],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [{
          beginKeywords: "extends implements"
        }, A.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [A.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [A.UNDERSCORE_TITLE_MODE]
      }, J, O]
    };
  }
  a08.exports = Zfq;
});

// Register to shared state
__$.s08 = s08;
