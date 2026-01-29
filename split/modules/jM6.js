// Module: jM6
// Dependencies: g$1, F$1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jM6 = v(SCY => {
  var ZCY = __$.g$1().FilterCSS,
    WCY = __$.g$1().getDefaultWhiteList,
    U$1 = __$.F$1();
  function pW7() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height", "loading"],
      ins: ["datetime"],
      kbd: [],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
    };
  }
  var dW7 = new ZCY();
  function DCY(A, K, q) {}
  function jCY(A, K, q) {}
  function MCY(A, K, q) {}
  function PCY(A, K, q) {}
  function cW7(A) {
    return A.replace(fCY, "&lt;").replace(NCY, "&gt;");
  }
  function VCY(A, K, q, Y) {
    if (q = aW7(q), K === "href" || K === "src") {
      if (q = U$1.trim(q), q === "#") return "#";
      if (!(q.substr(0, 7) === "http://" || q.substr(0, 8) === "https://" || q.substr(0, 7) === "mailto:" || q.substr(0, 4) === "tel:" || q.substr(0, 11) === "data:image/" || q.substr(0, 6) === "ftp://" || q.substr(0, 2) === "./" || q.substr(0, 3) === "../" || q[0] === "#" || q[0] === "/")) return "";
    } else if (K === "background") {
      if (Q$1.lastIndex = 0, Q$1.test(q)) return "";
    } else if (K === "style") {
      if (QW7.lastIndex = 0, QW7.test(q)) return "";
      if (UW7.lastIndex = 0, UW7.test(q)) {
        if (Q$1.lastIndex = 0, Q$1.test(q)) return "";
      }
      if (Y !== !1) Y = Y || dW7, q = Y.process(q);
    }
    return q = sW7(q), q;
  }
  var fCY = /</g,
    NCY = />/g,
    TCY = /"/g,
    vCY = /&quot;/g,
    ECY = /&#([a-zA-Z0-9]*);?/gim,
    kCY = /&colon;?/gim,
    CCY = /&newline;?/gim,
    Q$1 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
    QW7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
    UW7 = /u\s*r\s*l\s*\(.*/gi;
  function lW7(A) {
    return A.replace(TCY, "&quot;");
  }
  function iW7(A) {
    return A.replace(vCY, '"');
  }
  function nW7(A) {
    return A.replace(ECY, function (q, Y) {
      return Y[0] === "x" || Y[0] === "X" ? String.fromCharCode(parseInt(Y.substr(1), 16)) : String.fromCharCode(parseInt(Y, 10));
    });
  }
  function rW7(A) {
    return A.replace(kCY, ":").replace(CCY, " ");
  }
  function oW7(A) {
    var K = "";
    for (var q = 0, Y = A.length; q < Y; q++) K += A.charCodeAt(q) < 32 ? " " : A.charAt(q);
    return U$1.trim(K);
  }
  function aW7(A) {
    return A = iW7(A), A = nW7(A), A = rW7(A), A = oW7(A), A;
  }
  function sW7(A) {
    return A = lW7(A), A = cW7(A), A;
  }
  function LCY() {
    return "";
  }
  function RCY(A, K) {
    if (typeof K !== "function") K = function () {};
    var q = !Array.isArray(A);
    function Y(H) {
      if (q) return !0;
      return U$1.indexOf(A, H) !== -1;
    }
    var z = [],
      w = !1;
    return {
      onIgnoreTag: function (H, J, O) {
        if (Y(H)) {
          if (O.isClosing) {
            var X = "[/removed]",
              $ = O.position + X.length;
            return z.push([w !== !1 ? w : O.position, $]), w = !1, X;
          } else {
            if (!w) w = O.position;
            return "[removed]";
          }
        } else return K(H, J, O);
      },
      remove: function (H) {
        var J = "",
          O = 0;
        return U$1.forEach(z, function (X) {
          J += H.slice(O, X[0]), O = X[1];
        }), J += H.slice(O), J;
      }
    };
  }
  function yCY(A) {
    var K = "",
      q = 0;
    while (q < A.length) {
      var Y = A.indexOf("<!--", q);
      if (Y === -1) {
        K += A.slice(q);
        break;
      }
      K += A.slice(q, Y);
      var z = A.indexOf("-->", Y);
      if (z === -1) break;
      q = z + 3;
    }
    return K;
  }
  function ICY(A) {
    var K = A.split("");
    return K = K.filter(function (q) {
      var Y = q.charCodeAt(0);
      if (Y === 127) return !1;
      if (Y <= 31) {
        if (Y === 10 || Y === 13) return !0;
        return !1;
      }
      return !0;
    }), K.join("");
  }
  SCY.whiteList = pW7();
  SCY.getDefaultWhiteList = pW7;
  SCY.onTag = DCY;
  SCY.onIgnoreTag = jCY;
  SCY.onTagAttr = MCY;
  SCY.onIgnoreTagAttr = PCY;
  SCY.safeAttrValue = VCY;
  SCY.escapeHtml = cW7;
  SCY.escapeQuote = lW7;
  SCY.unescapeQuote = iW7;
  SCY.escapeHtmlEntities = nW7;
  SCY.escapeDangerHtml5Entities = rW7;
  SCY.clearNonPrintableCharacter = oW7;
  SCY.friendlyAttrValue = aW7;
  SCY.escapeAttrValue = sW7;
  SCY.onIgnoreTagStripAll = LCY;
  SCY.StripTagBody = RCY;
  SCY.stripCommentTag = yCY;
  SCY.stripBlankChar = ICY;
  SCY.attributeWrapSign = '"';
  SCY.cssFilter = dW7;
  SCY.getDefaultCSSWhiteList = WCY;
});

// Register to shared state
__$.jM6 = jM6;
