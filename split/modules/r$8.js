// Module: r$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var r$8 = v((ARz, n$8) => {
  function xNq(A) {
    var K = {
        className: "params",
        begin: "\\(",
        end: "\\)"
      },
      q = "attribute block constant cycle date dump include max min parent random range source template_from_string",
      Y = {
        beginKeywords: q,
        keywords: {
          name: q
        },
        relevance: 0,
        contains: [K]
      },
      z = {
        begin: /\|[A-Za-z_]+:?/,
        keywords: "abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode",
        contains: [Y]
      },
      w = "apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with";
    return w = w + " " + w.split(" ").map(function (H) {
      return "end" + H;
    }).join(" "), {
      name: "Twig",
      aliases: ["craftcms"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [A.COMMENT(/\{#/, /#\}/), {
        className: "template-tag",
        begin: /\{%/,
        end: /%\}/,
        contains: [{
          className: "name",
          begin: /\w+/,
          keywords: w,
          starts: {
            endsWithParent: !0,
            contains: [z, Y],
            relevance: 0
          }
        }]
      }, {
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: ["self", z, Y]
      }]
    };
  }
  n$8.exports = xNq;
});

// Register to shared state
__$.r$8 = r$8;
