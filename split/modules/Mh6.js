// Module: Mh6
// Dependencies: P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mh6 = v((ytH, M3K) => {
  M3K.exports = {
    serializeOne: _N2,
    ɵescapeMatchingClosingTag: W3K,
    ɵescapeClosingCommentTag: D3K,
    ɵescapeProcessingInstructionContent: j3K
  };
  var Z3K = __$.P0(),
    e3A = Z3K.NAMESPACE,
    $3K = {
      STYLE: !0,
      SCRIPT: !0,
      XMP: !0,
      IFRAME: !0,
      NOEMBED: !0,
      NOFRAMES: !0,
      PLAINTEXT: !0
    },
    wN2 = {
      area: !0,
      base: !0,
      basefont: !0,
      bgsound: !0,
      br: !0,
      col: !0,
      embed: !0,
      frame: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    },
    HN2 = {},
    _3K = /[&<>\u00A0]/g,
    G3K = /[&"<>\u00A0]/g;
  function JN2(A) {
    if (!_3K.test(A)) return A;
    return A.replace(_3K, K => {
      switch (K) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case " ":
          return "&nbsp;";
      }
    });
  }
  function ON2(A) {
    if (!G3K.test(A)) return A;
    return A.replace(G3K, K => {
      switch (K) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
        case '"':
          return "&quot;";
        case " ":
          return "&nbsp;";
      }
    });
  }
  function XN2(A) {
    var K = A.namespaceURI;
    if (!K) return A.localName;
    if (K === e3A.XML) return "xml:" + A.localName;
    if (K === e3A.XLINK) return "xlink:" + A.localName;
    if (K === e3A.XMLNS) if (A.localName === "xmlns") return "xmlns";else return "xmlns:" + A.localName;
    return A.name;
  }
  function W3K(A, K) {
    let q = "</" + K;
    if (!A.toLowerCase().includes(q)) return A;
    let Y = [...A],
      z = A.matchAll(new RegExp(q, "ig"));
    for (let w of z) Y[w.index] = "&lt;";
    return Y.join("");
  }
  var $N2 = /--!?>/;
  function D3K(A) {
    if (!$N2.test(A)) return A;
    return A.replace(/(--\!?)>/g, "$1&gt;");
  }
  function j3K(A) {
    return A.includes(">") ? A.replaceAll(">", "&gt;") : A;
  }
  function _N2(A, K) {
    var q = "";
    switch (A.nodeType) {
      case 1:
        var Y = A.namespaceURI,
          z = Y === e3A.HTML,
          w = z || Y === e3A.SVG || Y === e3A.MATHML ? A.localName : A.tagName;
        q += "<" + w;
        for (var H = 0, J = A._numattrs; H < J; H++) {
          var O = A._attr(H);
          if (q += " " + XN2(O), O.value !== void 0) q += '="' + ON2(O.value) + '"';
        }
        if (q += ">", !(z && wN2[w])) {
          var X = A.serialize();
          if ($3K[w.toUpperCase()]) X = W3K(X, w);
          if (z && HN2[w] && X.charAt(0) === `
`) q += `
`;
          q += X, q += "</" + w + ">";
        }
        break;
      case 3:
      case 4:
        var $;
        if (K.nodeType === 1 && K.namespaceURI === e3A.HTML) $ = K.tagName;else $ = "";
        if ($3K[$] || $ === "NOSCRIPT" && K.ownerDocument._scripting_enabled) q += A.data;else q += JN2(A.data);
        break;
      case 8:
        q += "<!--" + D3K(A.data) + "-->";
        break;
      case 7:
        let _ = j3K(A.data);
        q += "<?" + A.target + " " + _ + "?>";
        break;
      case 10:
        q += "<!DOCTYPE " + A.name, q += ">";
        break;
      default:
        Z3K.InvalidStateError();
    }
    return q;
  }
});

// Register to shared state
__$.Mh6 = Mh6;
