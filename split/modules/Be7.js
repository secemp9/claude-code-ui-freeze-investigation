// Module: Be7
// Dependencies: oFA, mR6, Ne7, ye7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Be7 = v(ZG2 => {
  var JG2 = __$.oFA(),
    OG2 = __$.mR6(),
    Ie7 = __$.Ne7(),
    be7 = __$.ye7(),
    XG2 = OG2.DOMImplementation,
    Se7 = JG2.NAMESPACE,
    $G2 = be7.ParseError,
    _G2 = be7.XMLReader;
  function xe7(A) {
    return A.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
  }
  function ue7(A) {
    this.options = A || {
      locator: {}
    };
  }
  ue7.prototype.parseFromString = function (A, K) {
    var q = this.options,
      Y = new _G2(),
      z = q.domBuilder || new wQA(),
      w = q.errorHandler,
      H = q.locator,
      J = q.xmlns || {},
      O = /\/x?html?$/.test(K),
      X = O ? Ie7.HTML_ENTITIES : Ie7.XML_ENTITIES;
    if (H) z.setDocumentLocator(H);
    if (Y.errorHandler = GG2(w, z, H), Y.domBuilder = q.domBuilder || z, O) J[""] = Se7.HTML;
    J.xml = J.xml || Se7.XML;
    var $ = q.normalizeLineEndings || xe7;
    if (A && typeof A === "string") Y.parse($(A), J, X);else Y.errorHandler.error("invalid doc source");
    return z.doc;
  };
  function GG2(A, K, q) {
    if (!A) {
      if (K instanceof wQA) return K;
      A = K;
    }
    var Y = {},
      z = A instanceof Function;
    q = q || {};
    function w(H) {
      var J = A[H];
      if (!J && z) J = A.length == 2 ? function (O) {
        A(H, O);
      } : A;
      Y[H] = J && function (O) {
        J("[xmldom " + H + "]\t" + O + FR6(q));
      } || function () {};
    }
    return w("warning"), w("error"), w("fatalError"), Y;
  }
  function wQA() {
    this.cdata = !1;
  }
  function rjA(A, K) {
    K.lineNumber = A.lineNumber, K.columnNumber = A.columnNumber;
  }
  wQA.prototype = {
    startDocument: function () {
      if (this.doc = new XG2().createDocument(null, null, null), this.locator) this.doc.documentURI = this.locator.systemId;
    },
    startElement: function (A, K, q, Y) {
      var z = this.doc,
        w = z.createElementNS(A, q || K),
        H = Y.length;
      IM1(this, w), this.currentElement = w, this.locator && rjA(this.locator, w);
      for (var J = 0; J < H; J++) {
        var A = Y.getURI(J),
          O = Y.getValue(J),
          q = Y.getQName(J),
          X = z.createAttributeNS(A, q);
        this.locator && rjA(Y.getLocator(J), X), X.value = X.nodeValue = O, w.setAttributeNode(X);
      }
    },
    endElement: function (A, K, q) {
      var Y = this.currentElement,
        z = Y.tagName;
      this.currentElement = Y.parentNode;
    },
    startPrefixMapping: function (A, K) {},
    endPrefixMapping: function (A) {},
    processingInstruction: function (A, K) {
      var q = this.doc.createProcessingInstruction(A, K);
      this.locator && rjA(this.locator, q), IM1(this, q);
    },
    ignorableWhitespace: function (A, K, q) {},
    characters: function (A, K, q) {
      if (A = he7.apply(this, arguments), A) {
        if (this.cdata) var Y = this.doc.createCDATASection(A);else var Y = this.doc.createTextNode(A);
        if (this.currentElement) this.currentElement.appendChild(Y);else if (/^\s*$/.test(A)) this.doc.appendChild(Y);
        this.locator && rjA(this.locator, Y);
      }
    },
    skippedEntity: function (A) {},
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (A) {
      if (this.locator = A) A.lineNumber = 0;
    },
    comment: function (A, K, q) {
      A = he7.apply(this, arguments);
      var Y = this.doc.createComment(A);
      this.locator && rjA(this.locator, Y), IM1(this, Y);
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (A, K, q) {
      var Y = this.doc.implementation;
      if (Y && Y.createDocumentType) {
        var z = Y.createDocumentType(A, K, q);
        this.locator && rjA(this.locator, z), IM1(this, z), this.doc.doctype = z;
      }
    },
    warning: function (A) {
      console.warn("[xmldom warning]\t" + A, FR6(this.locator));
    },
    error: function (A) {
      console.error("[xmldom error]\t" + A, FR6(this.locator));
    },
    fatalError: function (A) {
      throw new $G2(A, this.locator);
    }
  };
  function FR6(A) {
    if (A) return `
@` + (A.systemId || "") + "#[line:" + A.lineNumber + ",col:" + A.columnNumber + "]";
  }
  function he7(A, K, q) {
    if (typeof A == "string") return A.substr(K, q);else {
      if (A.length >= K + q || K) return new java.lang.String(A, K, q) + "";
      return A;
    }
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (A) {
    wQA.prototype[A] = function () {
      return null;
    };
  });
  function IM1(A, K) {
    if (!A.currentElement) A.doc.appendChild(K);else A.currentElement.appendChild(K);
  }
  ZG2.__DOMHandler = wQA;
  ZG2.normalizeLineEndings = xe7;
  ZG2.DOMParser = ue7;
});

// Register to shared state
__$.Be7 = Be7;
