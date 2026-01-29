// Module: BO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BO8 = v((RCz, uO8) => {
  var NVq = A => {
      return {
        IMPORTANT: {
          className: "meta",
          begin: "!important"
        },
        HEXCOLOR: {
          className: "number",
          begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
        }
      };
    },
    TVq = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
    vVq = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
    bO8 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
    xO8 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
    EVq = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse(),
    kVq = bO8.concat(xO8);
  function CVq(A) {
    let K = NVq(A),
      q = kVq,
      Y = "and or not only",
      z = "[\\w-]+",
      w = "([\\w-]+|@\\{[\\w-]+\\})",
      H = [],
      J = [],
      O = function (f) {
        return {
          className: "string",
          begin: "~?" + f + ".*?" + f
        };
      },
      X = function (f, N, T) {
        return {
          className: f,
          begin: N,
          relevance: T
        };
      },
      $ = {
        $pattern: /[a-z-]+/,
        keyword: "and or not only",
        attribute: vVq.join(" ")
      },
      _ = {
        begin: "\\(",
        end: "\\)",
        contains: J,
        keywords: $,
        relevance: 0
      };
    J.push(A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, O("'"), O('"'), A.CSS_NUMBER_MODE, {
      begin: "(url|data-uri)\\(",
      starts: {
        className: "string",
        end: "[\\)\\n]",
        excludeEnd: !0
      }
    }, K.HEXCOLOR, _, X("variable", "@@?[\\w-]+", 10), X("variable", "@\\{[\\w-]+\\}"), X("built_in", "~?`[^`]*?`"), {
      className: "attribute",
      begin: "[\\w-]+\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0
    }, K.IMPORTANT);
    let G = J.concat({
        begin: /\{/,
        end: /\}/,
        contains: H
      }),
      Z = {
        beginKeywords: "when",
        endsWithParent: !0,
        contains: [{
          beginKeywords: "and not"
        }].concat(J)
      },
      W = {
        begin: w + "\\s*:",
        returnBegin: !0,
        end: /[;}]/,
        relevance: 0,
        contains: [{
          begin: /-(webkit|moz|ms|o)-/
        }, {
          className: "attribute",
          begin: "\\b(" + EVq.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: !0,
            illegal: "[<=$]",
            relevance: 0,
            contains: J
          }
        }]
      },
      D = {
        className: "keyword",
        begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
          end: "[;{}]",
          keywords: $,
          returnEnd: !0,
          contains: J,
          relevance: 0
        }
      },
      j = {
        className: "variable",
        variants: [{
          begin: "@[\\w-]+\\s*:",
          relevance: 15
        }, {
          begin: "@[\\w-]+"
        }],
        starts: {
          end: "[;}]",
          returnEnd: !0,
          contains: G
        }
      },
      M = {
        variants: [{
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
        }, {
          begin: w,
          end: /\{/
        }],
        returnBegin: !0,
        returnEnd: !0,
        illegal: `[<='$"]`,
        relevance: 0,
        contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, Z, X("keyword", "all\\b"), X("variable", "@\\{[\\w-]+\\}"), {
          begin: "\\b(" + TVq.join("|") + ")\\b",
          className: "selector-tag"
        }, X("selector-tag", w + "%?", 0), X("selector-id", "#" + w), X("selector-class", "\\." + w, 0), X("selector-tag", "&", 0), K.ATTRIBUTE_SELECTOR_MODE, {
          className: "selector-pseudo",
          begin: ":(" + bO8.join("|") + ")"
        }, {
          className: "selector-pseudo",
          begin: "::(" + xO8.join("|") + ")"
        }, {
          begin: "\\(",
          end: "\\)",
          contains: G
        }, {
          begin: "!important"
        }]
      },
      P = {
        begin: `[\\w-]+:(:)?(${q.join("|")})`,
        returnBegin: !0,
        contains: [M]
      };
    return H.push(A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, D, j, P, W, M), {
      name: "Less",
      case_insensitive: !0,
      illegal: `[=>'/<($"]`,
      contains: H
    };
  }
  uO8.exports = CVq;
});

// Register to shared state
__$.BO8 = BO8;
