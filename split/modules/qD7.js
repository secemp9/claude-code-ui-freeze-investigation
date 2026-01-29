// Module: qD7
// Dependencies: g$1, jM6, MM6, F$1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qD7 = v((W3H, KD7) => {
  var GLY = __$.g$1().FilterCSS,
    dC = __$.jM6(),
    eW7 = __$.MM6(),
    ZLY = eW7.parseTag,
    WLY = eW7.parseAttr,
    d$1 = __$.F$1();
  function p$1(A) {
    return A === void 0 || A === null;
  }
  function DLY(A) {
    var K = d$1.spaceIndex(A);
    if (K === -1) return {
      html: "",
      closing: A[A.length - 2] === "/"
    };
    A = d$1.trim(A.slice(K + 1, -1));
    var q = A[A.length - 1] === "/";
    if (q) A = d$1.trim(A.slice(0, -1));
    return {
      html: A,
      closing: q
    };
  }
  function jLY(A) {
    var K = {};
    for (var q in A) K[q] = A[q];
    return K;
  }
  function MLY(A) {
    var K = {};
    for (var q in A) if (Array.isArray(A[q])) K[q.toLowerCase()] = A[q].map(function (Y) {
      return Y.toLowerCase();
    });else K[q.toLowerCase()] = A[q];
    return K;
  }
  function AD7(A) {
    if (A = jLY(A || {}), A.stripIgnoreTag) {
      if (A.onIgnoreTag) console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
      A.onIgnoreTag = dC.onIgnoreTagStripAll;
    }
    if (A.whiteList || A.allowList) A.whiteList = MLY(A.whiteList || A.allowList);else A.whiteList = dC.whiteList;
    if (this.attributeWrapSign = A.singleQuotedAttributeValue === !0 ? "'" : dC.attributeWrapSign, A.onTag = A.onTag || dC.onTag, A.onTagAttr = A.onTagAttr || dC.onTagAttr, A.onIgnoreTag = A.onIgnoreTag || dC.onIgnoreTag, A.onIgnoreTagAttr = A.onIgnoreTagAttr || dC.onIgnoreTagAttr, A.safeAttrValue = A.safeAttrValue || dC.safeAttrValue, A.escapeHtml = A.escapeHtml || dC.escapeHtml, this.options = A, A.css === !1) this.cssFilter = !1;else A.css = A.css || {}, this.cssFilter = new GLY(A.css);
  }
  AD7.prototype.process = function (A) {
    if (A = A || "", A = A.toString(), !A) return "";
    var K = this,
      q = K.options,
      Y = q.whiteList,
      z = q.onTag,
      w = q.onIgnoreTag,
      H = q.onTagAttr,
      J = q.onIgnoreTagAttr,
      O = q.safeAttrValue,
      X = q.escapeHtml,
      $ = K.attributeWrapSign,
      _ = K.cssFilter;
    if (q.stripBlankChar) A = dC.stripBlankChar(A);
    if (!q.allowCommentTag) A = dC.stripCommentTag(A);
    var G = !1;
    if (q.stripIgnoreTagBody) G = dC.StripTagBody(q.stripIgnoreTagBody, w), w = G.onIgnoreTag;
    var Z = ZLY(A, function (W, D, j, M, P) {
      var f = {
          sourcePosition: W,
          position: D,
          isClosing: P,
          isWhite: Object.prototype.hasOwnProperty.call(Y, j)
        },
        N = z(j, M, f);
      if (!p$1(N)) return N;
      if (f.isWhite) {
        if (f.isClosing) return "</" + j + ">";
        var T = DLY(M),
          C = Y[j],
          R = WLY(T.html, function (x, y) {
            var B = d$1.indexOf(C, x) !== -1,
              b = H(j, x, y, B);
            if (!p$1(b)) return b;
            if (B) {
              if (y = O(j, x, y, _), y) return x + "=" + $ + y + $;else return x;
            } else {
              if (b = J(j, x, y, B), !p$1(b)) return b;
              return;
            }
          });
        if (M = "<" + j, R) M += " " + R;
        if (T.closing) M += " /";
        return M += ">", M;
      } else {
        if (N = w(j, M, f), !p$1(N)) return N;
        return X(M);
      }
    }, X);
    if (G) Z = G.remove(Z);
    return Z;
  };
  KD7.exports = AD7;
});

// Register to shared state
__$.qD7 = qD7;
