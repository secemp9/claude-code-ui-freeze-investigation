// Module: Qw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qw8 = v((Jkz, Fw8) => {
  function ojq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function ajq(A) {
    return Ox1("(?=", A, ")");
  }
  function DaA(A) {
    return Ox1("(", A, ")?");
  }
  function Ox1(...A) {
    return A.map(q => ojq(q)).join("");
  }
  function sjq(A) {
    let K = A.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }),
      q = "decltype\\(auto\\)",
      Y = "[a-zA-Z_]\\w*::",
      z = "<[^<>]+>",
      w = "(decltype\\(auto\\)|" + DaA("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + DaA("<[^<>]+>") + ")",
      H = {
        className: "keyword",
        begin: "\\b[a-z\\d_]*_t\\b"
      },
      J = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      O = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, A.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      },
      X = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      $ = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, A.inherit(O, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<.*?>/
        }, K, A.C_BLOCK_COMMENT_MODE]
      },
      _ = {
        className: "title",
        begin: DaA("[a-zA-Z_]\\w*::") + A.IDENT_RE,
        relevance: 0
      },
      G = DaA("[a-zA-Z_]\\w*::") + A.IDENT_RE + "\\s*\\(",
      W = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "_Bool _Complex _Imaginary",
        _relevance_hints: ["asin", "atan2", "atan", "calloc", "ceil", "cosh", "cos", "exit", "exp", "fabs", "floor", "fmod", "fprintf", "fputs", "free", "frexp", "auto_ptr", "deque", "list", "queue", "stack", "vector", "map", "set", "pair", "bitset", "multiset", "multimap", "unordered_set", "fscanf", "future", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "tolower", "toupper", "labs", "ldexp", "log10", "log", "malloc", "realloc", "memchr", "memcmp", "memcpy", "memset", "modf", "pow", "printf", "putchar", "puts", "scanf", "sinh", "sin", "snprintf", "sprintf", "sqrt", "sscanf", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "tanh", "tan", "unordered_map", "unordered_multiset", "unordered_multimap", "priority_queue", "make_pair", "array", "shared_ptr", "abort", "terminate", "abs", "acos", "vfprintf", "vprintf", "vsprintf", "endl", "initializer_list", "unique_ptr", "complex", "imaginary", "std", "string", "wstring", "cin", "cout", "cerr", "clog", "stdin", "stdout", "stderr", "stringstream", "istringstream", "ostringstream"],
        literal: "true false nullptr NULL"
      },
      D = {
        className: "function.dispatch",
        relevance: 0,
        keywords: W,
        begin: Ox1(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, A.IDENT_RE, ajq(/\s*\(/))
      },
      j = [D, $, H, K, A.C_BLOCK_COMMENT_MODE, X, O],
      M = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: W,
        contains: j.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: W,
          contains: j.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      },
      P = {
        className: "function",
        begin: "(" + w + "[\\*&\\s]+)+" + G,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: W,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: W,
          relevance: 0
        }, {
          begin: G,
          returnBegin: !0,
          contains: [_],
          relevance: 0
        }, {
          begin: /::/,
          relevance: 0
        }, {
          begin: /:/,
          endsWithParent: !0,
          contains: [O, X]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: W,
          relevance: 0,
          contains: [K, A.C_BLOCK_COMMENT_MODE, O, X, H, {
            begin: /\(/,
            end: /\)/,
            keywords: W,
            relevance: 0,
            contains: ["self", K, A.C_BLOCK_COMMENT_MODE, O, X, H]
          }]
        }, H, K, A.C_BLOCK_COMMENT_MODE, $]
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: W,
      illegal: "</",
      classNameAliases: {
        "function.dispatch": "built_in"
      },
      contains: [].concat(M, P, D, j, [$, {
        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: W,
        contains: ["self", H]
      }, {
        begin: A.IDENT_RE + "::",
        keywords: W
      }, {
        className: "class",
        beginKeywords: "enum class struct union",
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: "final class struct"
        }, A.TITLE_MODE]
      }]),
      exports: {
        preprocessor: $,
        strings: O,
        keywords: W
      }
    };
  }
  function tjq(A) {
    let K = sjq(A),
      q = ["c", "h"],
      Y = ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"];
    if (K.disableAutodetect = !0, K.aliases = [], !A.getLanguage("c")) K.aliases.push(...q);
    if (!A.getLanguage("cpp")) K.aliases.push(...Y);
    return K;
  }
  Fw8.exports = tjq;
});

// Register to shared state
__$.Qw8 = Qw8;
