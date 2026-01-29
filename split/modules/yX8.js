// Module: yX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yX8 = v((TLz, RX8) => {
  function xfq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function ufq(A) {
    return Dx1("(?=", A, ")");
  }
  function Dx1(...A) {
    return A.map(q => xfq(q)).join("");
  }
  function Bfq(A) {
    let K = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
      q = /[a-zA-Z][a-zA-Z_0-9]*/;
    return {
      name: "R",
      illegal: /->/,
      keywords: {
        $pattern: K,
        keyword: "function if in break next repeat else for while",
        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
      },
      compilerExtensions: [(Y, z) => {
        if (!Y.beforeMatch) return;
        if (Y.starts) throw Error("beforeMatch cannot be used with starts");
        let w = Object.assign({}, Y);
        Object.keys(Y).forEach(H => {
          delete Y[H];
        }), Y.begin = Dx1(w.beforeMatch, ufq(w.begin)), Y.starts = {
          relevance: 0,
          contains: [Object.assign(w, {
            endsParent: !0
          })]
        }, Y.relevance = 0, delete w.beforeMatch;
      }],
      contains: [A.COMMENT(/#'/, /$/, {
        contains: [{
          className: "doctag",
          begin: "@examples",
          starts: {
            contains: [{
              begin: /\n/
            }, {
              begin: /#'\s*(?=@[a-zA-Z]+)/,
              endsParent: !0
            }, {
              begin: /#'/,
              end: /$/,
              excludeBegin: !0
            }]
          }
        }, {
          className: "doctag",
          begin: "@param",
          end: /$/,
          contains: [{
            className: "variable",
            variants: [{
              begin: K
            }, {
              begin: /`(?:\\.|[^`\\])+`/
            }],
            endsParent: !0
          }]
        }, {
          className: "doctag",
          begin: /@[a-zA-Z]+/
        }, {
          className: "meta-keyword",
          begin: /\\[a-zA-Z]+/
        }]
      }), A.HASH_COMMENT_MODE, {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE],
        variants: [A.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\(/,
          end: /\)(-*)"/
        }), A.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\{/,
          end: /\}(-*)"/
        }), A.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\[/,
          end: /\](-*)"/
        }), A.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\(/,
          end: /\)(-*)'/
        }), A.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\{/,
          end: /\}(-*)'/
        }), A.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\[/,
          end: /\](-*)'/
        }), {
          begin: '"',
          end: '"',
          relevance: 0
        }, {
          begin: "'",
          end: "'",
          relevance: 0
        }]
      }, {
        className: "number",
        relevance: 0,
        beforeMatch: /([^a-zA-Z0-9._])/,
        variants: [{
          match: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/
        }, {
          match: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/
        }, {
          match: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/
        }]
      }, {
        begin: "%",
        end: "%"
      }, {
        begin: Dx1(q, "\\s+<-\\s+")
      }, {
        begin: "`",
        end: "`",
        contains: [{
          begin: /\\./
        }]
      }]
    };
  }
  RX8.exports = Bfq;
});

// Register to shared state
__$.yX8 = yX8;
