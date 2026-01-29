// Module: RO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RO8 = v((kCz, LO8) => {
  function jVq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function MVq(...A) {
    return "(" + A.map(q => jVq(q)).join("|") + ")";
  }
  function PVq(A) {
    let K = MVq(...["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)", "Provides(?:Expl)?(?:Package|Class|File)", "(?:DeclareOption|ProcessOptions)", "(?:documentclass|usepackage|input|include)", "makeat(?:letter|other)", "ExplSyntax(?:On|Off)", "(?:new|renew|provide)?command", "(?:re)newenvironment", "(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand", "(?:New|Renew|Provide|Declare)DocumentEnvironment", "(?:(?:e|g|x)?def|let)", "(?:begin|end)", "(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)", "caption", "(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)", "(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)", "(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)", "(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)", "(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)", "(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map(y => y + "(?![a-zA-Z@:_])")),
      q = new RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*", "[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}", "[qs]__?[a-zA-Z](?:_?[a-zA-Z])+", "use(?:_i)?:[a-zA-Z]*", "(?:else|fi|or):", "(?:if|cs|exp):w", "(?:hbox|vbox):n", "::[a-zA-Z]_unbraced", "::[a-zA-Z:]"].map(y => y + "(?![a-zA-Z:_])").join("|")),
      Y = [{
        begin: /[a-zA-Z@]+/
      }, {
        begin: /[^a-zA-Z@]?/
      }],
      z = [{
        begin: /\^{6}[0-9a-f]{6}/
      }, {
        begin: /\^{5}[0-9a-f]{5}/
      }, {
        begin: /\^{4}[0-9a-f]{4}/
      }, {
        begin: /\^{3}[0-9a-f]{3}/
      }, {
        begin: /\^{2}[0-9a-f]{2}/
      }, {
        begin: /\^{2}[\u0000-\u007f]/
      }],
      w = {
        className: "keyword",
        begin: /\\/,
        relevance: 0,
        contains: [{
          endsParent: !0,
          begin: K
        }, {
          endsParent: !0,
          begin: q
        }, {
          endsParent: !0,
          variants: z
        }, {
          endsParent: !0,
          relevance: 0,
          variants: Y
        }]
      },
      H = {
        className: "params",
        relevance: 0,
        begin: /#+\d?/
      },
      J = {
        variants: z
      },
      O = {
        className: "built_in",
        relevance: 0,
        begin: /[$&^_]/
      },
      X = {
        className: "meta",
        begin: "% !TeX",
        end: "$",
        relevance: 10
      },
      $ = A.COMMENT("%", "$", {
        relevance: 0
      }),
      _ = [w, H, J, O, X, $],
      G = {
        begin: /\{/,
        end: /\}/,
        relevance: 0,
        contains: ["self", ..._]
      },
      Z = A.inherit(G, {
        relevance: 0,
        endsParent: !0,
        contains: [G, ..._]
      }),
      W = {
        begin: /\[/,
        end: /\]/,
        endsParent: !0,
        relevance: 0,
        contains: [G, ..._]
      },
      D = {
        begin: /\s+/,
        relevance: 0
      },
      j = [Z],
      M = [W],
      P = function (y, B) {
        return {
          contains: [D],
          starts: {
            relevance: 0,
            contains: y,
            starts: B
          }
        };
      },
      f = function (y, B) {
        return {
          begin: "\\\\" + y + "(?![a-zA-Z@:_])",
          keywords: {
            $pattern: /\\[a-zA-Z]+/,
            keyword: "\\" + y
          },
          relevance: 0,
          contains: [D],
          starts: B
        };
      },
      N = function (y, B) {
        return A.inherit({
          begin: "\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{" + y + "\\})",
          keywords: {
            $pattern: /\\[a-zA-Z]+/,
            keyword: "\\begin"
          },
          relevance: 0
        }, P(j, B));
      },
      T = (y = "string") => {
        return A.END_SAME_AS_BEGIN({
          className: y,
          begin: /(.|\r?\n)/,
          end: /(.|\r?\n)/,
          excludeBegin: !0,
          excludeEnd: !0,
          endsParent: !0
        });
      },
      C = function (y) {
        return {
          className: "string",
          end: "(?=\\\\end\\{" + y + "\\})"
        };
      },
      R = (y = "string") => {
        return {
          relevance: 0,
          begin: /\{/,
          starts: {
            endsParent: !0,
            contains: [{
              className: y,
              end: /(?=\})/,
              endsParent: !0,
              contains: [{
                begin: /\{/,
                end: /\}/,
                relevance: 0,
                contains: ["self"]
              }]
            }]
          }
        };
      },
      x = [...["verb", "lstinline"].map(y => f(y, {
        contains: [T()]
      })), f("mint", P(j, {
        contains: [T()]
      })), f("mintinline", P(j, {
        contains: [R(), T()]
      })), f("url", {
        contains: [R("link"), R("link")]
      }), f("hyperref", {
        contains: [R("link")]
      }), f("href", P(M, {
        contains: [R("link")]
      })), ...[].concat(...["", "\\*"].map(y => [N("verbatim" + y, C("verbatim" + y)), N("filecontents" + y, P(j, C("filecontents" + y))), ...["", "B", "L"].map(B => N(B + "Verbatim" + y, P(M, C(B + "Verbatim" + y))))])), N("minted", P(M, P(j, C("minted"))))];
    return {
      name: "LaTeX",
      aliases: ["tex"],
      contains: [...x, ..._]
    };
  }
  LO8.exports = PVq;
});

// Register to shared state
__$.RO8 = RO8;
