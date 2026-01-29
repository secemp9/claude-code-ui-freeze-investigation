// Module: pw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pw8 = v((Okz, Uw8) => {
  function ejq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function jaA(A) {
    return AMq("(", A, ")?");
  }
  function AMq(...A) {
    return A.map(q => ejq(q)).join("");
  }
  function KMq(A) {
    let K = A.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }),
      q = "decltype\\(auto\\)",
      Y = "[a-zA-Z_]\\w*::",
      z = "<[^<>]+>",
      w = "(decltype\\(auto\\)|" + jaA("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + jaA("<[^<>]+>") + ")",
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
        begin: jaA("[a-zA-Z_]\\w*::") + A.IDENT_RE,
        relevance: 0
      },
      G = jaA("[a-zA-Z_]\\w*::") + A.IDENT_RE + "\\s*\\(",
      Z = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
        literal: "true false nullptr NULL"
      },
      W = [$, H, K, A.C_BLOCK_COMMENT_MODE, X, O],
      D = {
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
        keywords: Z,
        contains: W.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: Z,
          contains: W.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      },
      j = {
        className: "function",
        begin: "(" + w + "[\\*&\\s]+)+" + G,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: Z,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: Z,
          relevance: 0
        }, {
          begin: G,
          returnBegin: !0,
          contains: [_],
          relevance: 0
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: Z,
          relevance: 0,
          contains: [K, A.C_BLOCK_COMMENT_MODE, O, X, H, {
            begin: /\(/,
            end: /\)/,
            keywords: Z,
            relevance: 0,
            contains: ["self", K, A.C_BLOCK_COMMENT_MODE, O, X, H]
          }]
        }, H, K, A.C_BLOCK_COMMENT_MODE, $]
      };
    return {
      name: "C",
      aliases: ["h"],
      keywords: Z,
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(D, j, W, [$, {
        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: Z,
        contains: ["self", H]
      }, {
        begin: A.IDENT_RE + "::",
        keywords: Z
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
        keywords: Z
      }
    };
  }
  Uw8.exports = KMq;
});

// Register to shared state
__$.pw8 = pw8;
