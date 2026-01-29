// Module: wO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wO8 = v((WCz, zO8) => {
  function qO8(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function iPq(A) {
    return YO8("(?=", A, ")");
  }
  function YO8(...A) {
    return A.map(q => qO8(q)).join("");
  }
  function nPq(...A) {
    return "(" + A.map(q => qO8(q)).join("|") + ")";
  }
  function rPq(A) {
    let K = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: /([+-]+)?[\d]+_[\d_]+/
        }, {
          begin: A.NUMBER_RE
        }]
      },
      q = A.COMMENT();
    q.variants = [{
      begin: /;/,
      end: /$/
    }, {
      begin: /#/,
      end: /$/
    }];
    let Y = {
        className: "variable",
        variants: [{
          begin: /\$[\w\d"][\w\d_]*/
        }, {
          begin: /\$\{(.*?)\}/
        }]
      },
      z = {
        className: "literal",
        begin: /\bon|off|true|false|yes|no\b/
      },
      w = {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE],
        variants: [{
          begin: "'''",
          end: "'''",
          relevance: 10
        }, {
          begin: '"""',
          end: '"""',
          relevance: 10
        }, {
          begin: '"',
          end: '"'
        }, {
          begin: "'",
          end: "'"
        }]
      },
      H = {
        begin: /\[/,
        end: /\]/,
        contains: [q, z, Y, w, K, "self"],
        relevance: 0
      },
      $ = nPq(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/),
      _ = YO8($, "(\\s*\\.\\s*", $, ")*", iPq(/\s*=\s*[^#\s]/));
    return {
      name: "TOML, also INI",
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [q, {
        className: "section",
        begin: /\[+/,
        end: /\]+/
      }, {
        begin: _,
        className: "attr",
        starts: {
          end: /$/,
          contains: [q, H, z, Y, w, K]
        }
      }]
    };
  }
  zO8.exports = rPq;
});

// Register to shared state
__$.wO8 = wO8;
