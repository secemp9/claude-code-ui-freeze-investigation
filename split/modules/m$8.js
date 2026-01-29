// Module: m$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var m$8 = v((oLz, B$8) => {
  function LNq(A) {
    var K = "true false yes no null",
      q = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
      Y = {
        className: "attr",
        variants: [{
          begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)"
        }, {
          begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
        }, {
          begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
        }]
      },
      z = {
        className: "template-variable",
        variants: [{
          begin: /\{\{/,
          end: /\}\}/
        }, {
          begin: /%\{/,
          end: /\}/
        }]
      },
      w = {
        className: "string",
        relevance: 0,
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /\S+/
        }],
        contains: [A.BACKSLASH_ESCAPE, z]
      },
      H = A.inherit(w, {
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /[^\s,{}[\]]+/
        }]
      }),
      J = "[0-9]{4}(-[0-9][0-9]){0,2}",
      O = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",
      X = "(\\.[0-9]*)?",
      $ = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",
      _ = {
        className: "number",
        begin: "\\b" + J + O + X + $ + "\\b"
      },
      G = {
        end: ",",
        endsWithParent: !0,
        excludeEnd: !0,
        keywords: K,
        relevance: 0
      },
      Z = {
        begin: /\{/,
        end: /\}/,
        contains: [G],
        illegal: "\\n",
        relevance: 0
      },
      W = {
        begin: "\\[",
        end: "\\]",
        contains: [G],
        illegal: "\\n",
        relevance: 0
      },
      D = [Y, {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      }, {
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      }, {
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }, {
        className: "type",
        begin: "!\\w+!" + q
      }, {
        className: "type",
        begin: "!<" + q + ">"
      }, {
        className: "type",
        begin: "!" + q
      }, {
        className: "type",
        begin: "!!" + q
      }, {
        className: "meta",
        begin: "&" + A.UNDERSCORE_IDENT_RE + "$"
      }, {
        className: "meta",
        begin: "\\*" + A.UNDERSCORE_IDENT_RE + "$"
      }, {
        className: "bullet",
        begin: "-(?=[ ]|$)",
        relevance: 0
      }, A.HASH_COMMENT_MODE, {
        beginKeywords: K,
        keywords: {
          literal: K
        }
      }, _, {
        className: "number",
        begin: A.C_NUMBER_RE + "\\b",
        relevance: 0
      }, Z, W, w],
      j = [...D];
    return j.pop(), j.push(H), G.contains = j, {
      name: "YAML",
      case_insensitive: !0,
      aliases: ["yml"],
      contains: D
    };
  }
  B$8.exports = LNq;
});

// Register to shared state
__$.m$8 = m$8;
