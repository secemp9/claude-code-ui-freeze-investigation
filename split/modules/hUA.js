// Module: hUA
// Dependencies: Kf1, Yf1, $f1, P0, QV1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hUA = v((jeH, rYK) => {
  rYK.exports = nYK;
  var lYK = __$.Kf1(),
    iYK = __$.Yf1(),
    jv2 = __$.$f1(),
    _f1 = __$.P0(),
    Mv2 = __$.QV1();
  function nYK(A) {
    this.contextObject = A;
  }
  var Pv2 = {
    xml: {
      "": !0,
      "1.0": !0,
      "2.0": !0
    },
    core: {
      "": !0,
      "2.0": !0
    },
    html: {
      "": !0,
      "1.0": !0,
      "2.0": !0
    },
    xhtml: {
      "": !0,
      "1.0": !0,
      "2.0": !0
    }
  };
  nYK.prototype = {
    hasFeature: function (K, q) {
      var Y = Pv2[(K || "").toLowerCase()];
      return Y && Y[q || ""] || !1;
    },
    createDocumentType: function (K, q, Y) {
      if (!Mv2.isValidQName(K)) _f1.InvalidCharacterError();
      return new iYK(this.contextObject, K, q, Y);
    },
    createDocument: function (K, q, Y) {
      var z = new lYK(!1, null),
        w;
      if (q) w = z.createElementNS(K, q);else w = null;
      if (Y) z.appendChild(Y);
      if (w) z.appendChild(w);
      if (K === _f1.NAMESPACE.HTML) z._contentType = "application/xhtml+xml";else if (K === _f1.NAMESPACE.SVG) z._contentType = "image/svg+xml";else z._contentType = "application/xml";
      return z;
    },
    createHTMLDocument: function (K) {
      var q = new lYK(!0, null);
      q.appendChild(new iYK(q, "html"));
      var Y = q.createElement("html");
      q.appendChild(Y);
      var z = q.createElement("head");
      if (Y.appendChild(z), K !== void 0) {
        var w = q.createElement("title");
        z.appendChild(w), w.appendChild(q.createTextNode(K));
      }
      return Y.appendChild(q.createElement("body")), q.modclock = 1, q;
    },
    mozSetOutputMutationHandler: function (A, K) {
      A.mutationHandler = K;
    },
    mozGetInputMutationHandler: function (A) {
      _f1.nyi();
    },
    mozHTMLParser: jv2
  };
});

// Register to shared state
__$.hUA = hUA;
