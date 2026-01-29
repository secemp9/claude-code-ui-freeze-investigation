// Module: TH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TH8 = v((kkz, NH8) => {
  function BMq(A) {
    let K = {
        $pattern: A.UNDERSCORE_IDENT_RE,
        keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
        built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
        literal: "false null true"
      },
      q = "(0|[1-9][\\d_]*)",
      Y = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",
      z = "0[bB][01_]+",
      w = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
      H = "0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
      J = "([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))",
      O = "((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|" + J + ")|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)" + J + "?)",
      X = "(0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))",
      $ = "((0|[1-9][\\d_]*)|0[bB][01_]+|" + H + ")",
      _ = "(" + X + "|" + O + ")",
      G = `\\\\(['"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};`,
      Z = {
        className: "number",
        begin: "\\b" + $ + "(L|u|U|Lu|LU|uL|UL)?",
        relevance: 0
      },
      W = {
        className: "number",
        begin: "\\b(" + _ + "([fF]|L|i|[fF]i|Li)?|" + $ + "(i|[fF]i|Li))",
        relevance: 0
      },
      D = {
        className: "string",
        begin: "'(" + G + "|.)",
        end: "'",
        illegal: "."
      },
      M = {
        className: "string",
        begin: '"',
        contains: [{
          begin: G,
          relevance: 0
        }],
        end: '"[cwd]?'
      },
      P = {
        className: "string",
        begin: '[rq]"',
        end: '"[cwd]?',
        relevance: 5
      },
      f = {
        className: "string",
        begin: "`",
        end: "`[cwd]?"
      },
      N = {
        className: "string",
        begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
        relevance: 10
      },
      T = {
        className: "string",
        begin: 'q"\\{',
        end: '\\}"'
      },
      C = {
        className: "meta",
        begin: "^#!",
        end: "$",
        relevance: 5
      },
      R = {
        className: "meta",
        begin: "#(line)",
        end: "$",
        relevance: 5
      },
      x = {
        className: "keyword",
        begin: "@[a-zA-Z_][a-zA-Z_\\d]*"
      },
      y = A.COMMENT("\\/\\+", "\\+\\/", {
        contains: ["self"],
        relevance: 10
      });
    return {
      name: "D",
      keywords: K,
      contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, y, N, M, P, f, T, W, Z, D, C, R, x]
    };
  }
  NH8.exports = BMq;
});

// Register to shared state
__$.TH8 = TH8;
