// Module: mR6
// Dependencies: oFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mR6 = v(Q_2 => {
  var et7 = __$.oFA(),
    iB = et7.find,
    aFA = et7.NAMESPACE;
  function L_2(A) {
    return A !== "";
  }
  function R_2(A) {
    return A ? A.split(/[\t\n\f\r ]+/).filter(L_2) : [];
  }
  function y_2(A, K) {
    if (!A.hasOwnProperty(K)) A[K] = !0;
    return A;
  }
  function it7(A) {
    if (!A) return [];
    var K = R_2(A);
    return Object.keys(K.reduce(y_2, {}));
  }
  function I_2(A) {
    return function (K) {
      return A && A.indexOf(K) !== -1;
    };
  }
  function tFA(A, K) {
    for (var q in A) if (Object.prototype.hasOwnProperty.call(A, q)) K[q] = A[q];
  }
  function pf(A, K) {
    var q = A.prototype;
    if (!(q instanceof K)) {
      let z = function () {};
      var Y = z;
      z.prototype = K.prototype, z = new z(), tFA(q, z), A.prototype = q = z;
    }
    if (q.constructor != A) {
      if (typeof A != "function") console.error("unknown Class:" + A);
      q.constructor = A;
    }
  }
  var df = {},
    RS = df.ELEMENT_NODE = 1,
    pjA = df.ATTRIBUTE_NODE = 2,
    vM1 = df.TEXT_NODE = 3,
    Ae7 = df.CDATA_SECTION_NODE = 4,
    Ke7 = df.ENTITY_REFERENCE_NODE = 5,
    S_2 = df.ENTITY_NODE = 6,
    qe7 = df.PROCESSING_INSTRUCTION_NODE = 7,
    Ye7 = df.COMMENT_NODE = 8,
    ze7 = df.DOCUMENT_NODE = 9,
    we7 = df.DOCUMENT_TYPE_NODE = 10,
    Md = df.DOCUMENT_FRAGMENT_NODE = 11,
    h_2 = df.NOTATION_NODE = 12,
    Zj = {},
    iG = {},
    VhH = Zj.INDEX_SIZE_ERR = (iG[1] = "Index size error", 1),
    fhH = Zj.DOMSTRING_SIZE_ERR = (iG[2] = "DOMString size error", 2),
    Uf = Zj.HIERARCHY_REQUEST_ERR = (iG[3] = "Hierarchy request error", 3),
    NhH = Zj.WRONG_DOCUMENT_ERR = (iG[4] = "Wrong document", 4),
    ThH = Zj.INVALID_CHARACTER_ERR = (iG[5] = "Invalid character", 5),
    vhH = Zj.NO_DATA_ALLOWED_ERR = (iG[6] = "No data allowed", 6),
    EhH = Zj.NO_MODIFICATION_ALLOWED_ERR = (iG[7] = "No modification allowed", 7),
    He7 = Zj.NOT_FOUND_ERR = (iG[8] = "Not found", 8),
    khH = Zj.NOT_SUPPORTED_ERR = (iG[9] = "Not supported", 9),
    nt7 = Zj.INUSE_ATTRIBUTE_ERR = (iG[10] = "Attribute in use", 10),
    ChH = Zj.INVALID_STATE_ERR = (iG[11] = "Invalid state", 11),
    LhH = Zj.SYNTAX_ERR = (iG[12] = "Syntax error", 12),
    RhH = Zj.INVALID_MODIFICATION_ERR = (iG[13] = "Invalid modification", 13),
    yhH = Zj.NAMESPACE_ERR = (iG[14] = "Invalid namespace", 14),
    IhH = Zj.INVALID_ACCESS_ERR = (iG[15] = "Invalid access", 15);
  function WX(A, K) {
    if (K instanceof Error) var q = K;else if (q = this, Error.call(this, iG[A]), this.message = iG[A], Error.captureStackTrace) Error.captureStackTrace(this, WX);
    if (q.code = A, K) this.message = this.message + ": " + K;
    return q;
  }
  WX.prototype = Error.prototype;
  tFA(Zj, WX);
  function jd() {}
  jd.prototype = {
    length: 0,
    item: function (A) {
      return A >= 0 && A < this.length ? this[A] : null;
    },
    toString: function (A, K) {
      for (var q = [], Y = 0; Y < this.length; Y++) UjA(this[Y], q, A, K);
      return q.join("");
    },
    filter: function (A) {
      return Array.prototype.filter.call(this, A);
    },
    indexOf: function (A) {
      return Array.prototype.indexOf.call(this, A);
    }
  };
  function djA(A, K) {
    this._node = A, this._refresh = K, yR6(this);
  }
  function yR6(A) {
    var K = A._node._inc || A._node.ownerDocument._inc;
    if (A._inc !== K) {
      var q = A._refresh(A._node);
      if (Pe7(A, "length", q.length), !A.$$length || q.length < A.$$length) {
        for (var Y = q.length; Y in A; Y++) if (Object.prototype.hasOwnProperty.call(A, Y)) delete A[Y];
      }
      tFA(q, A), A._inc = K;
    }
  }
  djA.prototype.item = function (A) {
    return yR6(this), this[A] || null;
  };
  pf(djA, jd);
  function EM1() {}
  function Je7(A, K) {
    var q = A.length;
    while (q--) if (A[q] === K) return q;
  }
  function rt7(A, K, q, Y) {
    if (Y) K[Je7(K, Y)] = q;else K[K.length++] = q;
    if (A) {
      q.ownerElement = A;
      var z = A.ownerDocument;
      if (z) Y && $e7(z, A, Y), b_2(z, A, q);
    }
  }
  function ot7(A, K, q) {
    var Y = Je7(K, q);
    if (Y >= 0) {
      var z = K.length - 1;
      while (Y < z) K[Y] = K[++Y];
      if (K.length = z, A) {
        var w = A.ownerDocument;
        if (w) $e7(w, A, q), q.ownerElement = null;
      }
    } else throw new WX(He7, Error(A.tagName + "@" + q));
  }
  EM1.prototype = {
    length: 0,
    item: jd.prototype.item,
    getNamedItem: function (A) {
      var K = this.length;
      while (K--) {
        var q = this[K];
        if (q.nodeName == A) return q;
      }
    },
    setNamedItem: function (A) {
      var K = A.ownerElement;
      if (K && K != this._ownerElement) throw new WX(nt7);
      var q = this.getNamedItem(A.nodeName);
      return rt7(this._ownerElement, this, A, q), q;
    },
    setNamedItemNS: function (A) {
      var K = A.ownerElement,
        q;
      if (K && K != this._ownerElement) throw new WX(nt7);
      return q = this.getNamedItemNS(A.namespaceURI, A.localName), rt7(this._ownerElement, this, A, q), q;
    },
    removeNamedItem: function (A) {
      var K = this.getNamedItem(A);
      return ot7(this._ownerElement, this, K), K;
    },
    removeNamedItemNS: function (A, K) {
      var q = this.getNamedItemNS(A, K);
      return ot7(this._ownerElement, this, q), q;
    },
    getNamedItemNS: function (A, K) {
      var q = this.length;
      while (q--) {
        var Y = this[q];
        if (Y.localName == K && Y.namespaceURI == A) return Y;
      }
      return null;
    }
  };
  function Oe7() {}
  Oe7.prototype = {
    hasFeature: function (A, K) {
      return !0;
    },
    createDocument: function (A, K, q) {
      var Y = new eFA();
      if (Y.implementation = this, Y.childNodes = new jd(), Y.doctype = q || null, q) Y.appendChild(q);
      if (K) {
        var z = Y.createElementNS(A, K);
        Y.appendChild(z);
      }
      return Y;
    },
    createDocumentType: function (A, K, q) {
      var Y = new LM1();
      return Y.name = A, Y.nodeName = A, Y.publicId = K || "", Y.systemId = q || "", Y;
    }
  };
  function Cz() {}
  Cz.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function (A, K) {
      return kM1(this, A, K);
    },
    replaceChild: function (A, K) {
      if (kM1(this, A, K, Ge7), K) this.removeChild(K);
    },
    removeChild: function (A) {
      return _e7(this, A);
    },
    appendChild: function (A) {
      return this.insertBefore(A, null);
    },
    hasChildNodes: function () {
      return this.firstChild != null;
    },
    cloneNode: function (A) {
      return RR6(this.ownerDocument || this, this, A);
    },
    normalize: function () {
      var A = this.firstChild;
      while (A) {
        var K = A.nextSibling;
        if (K && K.nodeType == vM1 && A.nodeType == vM1) this.removeChild(K), A.appendData(K.data);else A.normalize(), A = K;
      }
    },
    isSupported: function (A, K) {
      return this.ownerDocument.implementation.hasFeature(A, K);
    },
    hasAttributes: function () {
      return this.attributes.length > 0;
    },
    lookupPrefix: function (A) {
      var K = this;
      while (K) {
        var q = K._nsMap;
        if (q) {
          for (var Y in q) if (Object.prototype.hasOwnProperty.call(q, Y) && q[Y] === A) return Y;
        }
        K = K.nodeType == pjA ? K.ownerDocument : K.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function (A) {
      var K = this;
      while (K) {
        var q = K._nsMap;
        if (q) {
          if (Object.prototype.hasOwnProperty.call(q, A)) return q[A];
        }
        K = K.nodeType == pjA ? K.ownerDocument : K.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function (A) {
      var K = this.lookupPrefix(A);
      return K == null;
    }
  };
  function Xe7(A) {
    return A == "<" && "&lt;" || A == ">" && "&gt;" || A == "&" && "&amp;" || A == '"' && "&quot;" || "&#" + A.charCodeAt() + ";";
  }
  tFA(df, Cz);
  tFA(df, Cz.prototype);
  function sFA(A, K) {
    if (K(A)) return !0;
    if (A = A.firstChild) do if (sFA(A, K)) return !0; while (A = A.nextSibling);
  }
  function eFA() {
    this.ownerDocument = this;
  }
  function b_2(A, K, q) {
    A && A._inc++;
    var Y = q.namespaceURI;
    if (Y === aFA.XMLNS) K._nsMap[q.prefix ? q.localName : ""] = q.value;
  }
  function $e7(A, K, q, Y) {
    A && A._inc++;
    var z = q.namespaceURI;
    if (z === aFA.XMLNS) delete K._nsMap[q.prefix ? q.localName : ""];
  }
  function IR6(A, K, q) {
    if (A && A._inc) {
      A._inc++;
      var Y = K.childNodes;
      if (q) Y[Y.length++] = q;else {
        var z = K.firstChild,
          w = 0;
        while (z) Y[w++] = z, z = z.nextSibling;
        Y.length = w, delete Y[Y.length];
      }
    }
  }
  function _e7(A, K) {
    var {
      previousSibling: q,
      nextSibling: Y
    } = K;
    if (q) q.nextSibling = Y;else A.firstChild = Y;
    if (Y) Y.previousSibling = q;else A.lastChild = q;
    return K.parentNode = null, K.previousSibling = null, K.nextSibling = null, IR6(A.ownerDocument, A), K;
  }
  function x_2(A) {
    return A && (A.nodeType === Cz.DOCUMENT_NODE || A.nodeType === Cz.DOCUMENT_FRAGMENT_NODE || A.nodeType === Cz.ELEMENT_NODE);
  }
  function u_2(A) {
    return A && (nB(A) || SR6(A) || Pd(A) || A.nodeType === Cz.DOCUMENT_FRAGMENT_NODE || A.nodeType === Cz.COMMENT_NODE || A.nodeType === Cz.PROCESSING_INSTRUCTION_NODE);
  }
  function Pd(A) {
    return A && A.nodeType === Cz.DOCUMENT_TYPE_NODE;
  }
  function nB(A) {
    return A && A.nodeType === Cz.ELEMENT_NODE;
  }
  function SR6(A) {
    return A && A.nodeType === Cz.TEXT_NODE;
  }
  function at7(A, K) {
    var q = A.childNodes || [];
    if (iB(q, nB) || Pd(K)) return !1;
    var Y = iB(q, Pd);
    return !(K && Y && q.indexOf(Y) > q.indexOf(K));
  }
  function st7(A, K) {
    var q = A.childNodes || [];
    function Y(w) {
      return nB(w) && w !== K;
    }
    if (iB(q, Y)) return !1;
    var z = iB(q, Pd);
    return !(K && z && q.indexOf(z) > q.indexOf(K));
  }
  function B_2(A, K, q) {
    if (!x_2(A)) throw new WX(Uf, "Unexpected parent node type " + A.nodeType);
    if (q && q.parentNode !== A) throw new WX(He7, "child not in parent");
    if (!u_2(K) || Pd(K) && A.nodeType !== Cz.DOCUMENT_NODE) throw new WX(Uf, "Unexpected node type " + K.nodeType + " for parent node type " + A.nodeType);
  }
  function m_2(A, K, q) {
    var Y = A.childNodes || [],
      z = K.childNodes || [];
    if (K.nodeType === Cz.DOCUMENT_FRAGMENT_NODE) {
      var w = z.filter(nB);
      if (w.length > 1 || iB(z, SR6)) throw new WX(Uf, "More than one element or text in fragment");
      if (w.length === 1 && !at7(A, q)) throw new WX(Uf, "Element in fragment can not be inserted before doctype");
    }
    if (nB(K)) {
      if (!at7(A, q)) throw new WX(Uf, "Only one element can be added and only after doctype");
    }
    if (Pd(K)) {
      if (iB(Y, Pd)) throw new WX(Uf, "Only one doctype is allowed");
      var H = iB(Y, nB);
      if (q && Y.indexOf(H) < Y.indexOf(q)) throw new WX(Uf, "Doctype can only be inserted before an element");
      if (!q && H) throw new WX(Uf, "Doctype can not be appended since element is present");
    }
  }
  function Ge7(A, K, q) {
    var Y = A.childNodes || [],
      z = K.childNodes || [];
    if (K.nodeType === Cz.DOCUMENT_FRAGMENT_NODE) {
      var w = z.filter(nB);
      if (w.length > 1 || iB(z, SR6)) throw new WX(Uf, "More than one element or text in fragment");
      if (w.length === 1 && !st7(A, q)) throw new WX(Uf, "Element in fragment can not be inserted before doctype");
    }
    if (nB(K)) {
      if (!st7(A, q)) throw new WX(Uf, "Only one element can be added and only after doctype");
    }
    if (Pd(K)) {
      let O = function (X) {
        return Pd(X) && X !== q;
      };
      var J = O;
      if (iB(Y, O)) throw new WX(Uf, "Only one doctype is allowed");
      var H = iB(Y, nB);
      if (q && Y.indexOf(H) < Y.indexOf(q)) throw new WX(Uf, "Doctype can only be inserted before an element");
    }
  }
  function kM1(A, K, q, Y) {
    if (B_2(A, K, q), A.nodeType === Cz.DOCUMENT_NODE) (Y || m_2)(A, K, q);
    var z = K.parentNode;
    if (z) z.removeChild(K);
    if (K.nodeType === Md) {
      var w = K.firstChild;
      if (w == null) return K;
      var H = K.lastChild;
    } else w = H = K;
    var J = q ? q.previousSibling : A.lastChild;
    if (w.previousSibling = J, H.nextSibling = q, J) J.nextSibling = w;else A.firstChild = w;
    if (q == null) A.lastChild = H;else q.previousSibling = H;
    do w.parentNode = A; while (w !== H && (w = w.nextSibling));
    if (IR6(A.ownerDocument || A, A), K.nodeType == Md) K.firstChild = K.lastChild = null;
    return K;
  }
  function g_2(A, K) {
    if (K.parentNode) K.parentNode.removeChild(K);
    if (K.parentNode = A, K.previousSibling = A.lastChild, K.nextSibling = null, K.previousSibling) K.previousSibling.nextSibling = K;else A.firstChild = K;
    return A.lastChild = K, IR6(A.ownerDocument, A, K), K;
  }
  eFA.prototype = {
    nodeName: "#document",
    nodeType: ze7,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function (A, K) {
      if (A.nodeType == Md) {
        var q = A.firstChild;
        while (q) {
          var Y = q.nextSibling;
          this.insertBefore(q, K), q = Y;
        }
        return A;
      }
      if (kM1(this, A, K), A.ownerDocument = this, this.documentElement === null && A.nodeType === RS) this.documentElement = A;
      return A;
    },
    removeChild: function (A) {
      if (this.documentElement == A) this.documentElement = null;
      return _e7(this, A);
    },
    replaceChild: function (A, K) {
      if (kM1(this, A, K, Ge7), A.ownerDocument = this, K) this.removeChild(K);
      if (nB(A)) this.documentElement = A;
    },
    importNode: function (A, K) {
      return Me7(this, A, K);
    },
    getElementById: function (A) {
      var K = null;
      return sFA(this.documentElement, function (q) {
        if (q.nodeType == RS) {
          if (q.getAttribute("id") == A) return K = q, !0;
        }
      }), K;
    },
    getElementsByClassName: function (A) {
      var K = it7(A);
      return new djA(this, function (q) {
        var Y = [];
        if (K.length > 0) sFA(q.documentElement, function (z) {
          if (z !== q && z.nodeType === RS) {
            var w = z.getAttribute("class");
            if (w) {
              var H = A === w;
              if (!H) {
                var J = it7(w);
                H = K.every(I_2(J));
              }
              if (H) Y.push(z);
            }
          }
        });
        return Y;
      });
    },
    createElement: function (A) {
      var K = new D3A();
      K.ownerDocument = this, K.nodeName = A, K.tagName = A, K.localName = A, K.childNodes = new jd();
      var q = K.attributes = new EM1();
      return q._ownerElement = K, K;
    },
    createDocumentFragment: function () {
      var A = new RM1();
      return A.ownerDocument = this, A.childNodes = new jd(), A;
    },
    createTextNode: function (A) {
      var K = new hR6();
      return K.ownerDocument = this, K.appendData(A), K;
    },
    createComment: function (A) {
      var K = new bR6();
      return K.ownerDocument = this, K.appendData(A), K;
    },
    createCDATASection: function (A) {
      var K = new xR6();
      return K.ownerDocument = this, K.appendData(A), K;
    },
    createProcessingInstruction: function (A, K) {
      var q = new BR6();
      return q.ownerDocument = this, q.tagName = q.nodeName = q.target = A, q.nodeValue = q.data = K, q;
    },
    createAttribute: function (A) {
      var K = new CM1();
      return K.ownerDocument = this, K.name = A, K.nodeName = A, K.localName = A, K.specified = !0, K;
    },
    createEntityReference: function (A) {
      var K = new uR6();
      return K.ownerDocument = this, K.nodeName = A, K;
    },
    createElementNS: function (A, K) {
      var q = new D3A(),
        Y = K.split(":"),
        z = q.attributes = new EM1();
      if (q.childNodes = new jd(), q.ownerDocument = this, q.nodeName = K, q.tagName = K, q.namespaceURI = A, Y.length == 2) q.prefix = Y[0], q.localName = Y[1];else q.localName = K;
      return z._ownerElement = q, q;
    },
    createAttributeNS: function (A, K) {
      var q = new CM1(),
        Y = K.split(":");
      if (q.ownerDocument = this, q.nodeName = K, q.name = K, q.namespaceURI = A, q.specified = !0, Y.length == 2) q.prefix = Y[0], q.localName = Y[1];else q.localName = K;
      return q;
    }
  };
  pf(eFA, Cz);
  function D3A() {
    this._nsMap = {};
  }
  D3A.prototype = {
    nodeType: RS,
    hasAttribute: function (A) {
      return this.getAttributeNode(A) != null;
    },
    getAttribute: function (A) {
      var K = this.getAttributeNode(A);
      return K && K.value || "";
    },
    getAttributeNode: function (A) {
      return this.attributes.getNamedItem(A);
    },
    setAttribute: function (A, K) {
      var q = this.ownerDocument.createAttribute(A);
      q.value = q.nodeValue = "" + K, this.setAttributeNode(q);
    },
    removeAttribute: function (A) {
      var K = this.getAttributeNode(A);
      K && this.removeAttributeNode(K);
    },
    appendChild: function (A) {
      if (A.nodeType === Md) return this.insertBefore(A, null);else return g_2(this, A);
    },
    setAttributeNode: function (A) {
      return this.attributes.setNamedItem(A);
    },
    setAttributeNodeNS: function (A) {
      return this.attributes.setNamedItemNS(A);
    },
    removeAttributeNode: function (A) {
      return this.attributes.removeNamedItem(A.nodeName);
    },
    removeAttributeNS: function (A, K) {
      var q = this.getAttributeNodeNS(A, K);
      q && this.removeAttributeNode(q);
    },
    hasAttributeNS: function (A, K) {
      return this.getAttributeNodeNS(A, K) != null;
    },
    getAttributeNS: function (A, K) {
      var q = this.getAttributeNodeNS(A, K);
      return q && q.value || "";
    },
    setAttributeNS: function (A, K, q) {
      var Y = this.ownerDocument.createAttributeNS(A, K);
      Y.value = Y.nodeValue = "" + q, this.setAttributeNode(Y);
    },
    getAttributeNodeNS: function (A, K) {
      return this.attributes.getNamedItemNS(A, K);
    },
    getElementsByTagName: function (A) {
      return new djA(this, function (K) {
        var q = [];
        return sFA(K, function (Y) {
          if (Y !== K && Y.nodeType == RS && (A === "*" || Y.tagName == A)) q.push(Y);
        }), q;
      });
    },
    getElementsByTagNameNS: function (A, K) {
      return new djA(this, function (q) {
        var Y = [];
        return sFA(q, function (z) {
          if (z !== q && z.nodeType === RS && (A === "*" || z.namespaceURI === A) && (K === "*" || z.localName == K)) Y.push(z);
        }), Y;
      });
    }
  };
  eFA.prototype.getElementsByTagName = D3A.prototype.getElementsByTagName;
  eFA.prototype.getElementsByTagNameNS = D3A.prototype.getElementsByTagNameNS;
  pf(D3A, Cz);
  function CM1() {}
  CM1.prototype.nodeType = pjA;
  pf(CM1, Cz);
  function AQA() {}
  AQA.prototype = {
    data: "",
    substringData: function (A, K) {
      return this.data.substring(A, A + K);
    },
    appendData: function (A) {
      A = this.data + A, this.nodeValue = this.data = A, this.length = A.length;
    },
    insertData: function (A, K) {
      this.replaceData(A, 0, K);
    },
    appendChild: function (A) {
      throw Error(iG[Uf]);
    },
    deleteData: function (A, K) {
      this.replaceData(A, K, "");
    },
    replaceData: function (A, K, q) {
      var Y = this.data.substring(0, A),
        z = this.data.substring(A + K);
      q = Y + q + z, this.nodeValue = this.data = q, this.length = q.length;
    }
  };
  pf(AQA, Cz);
  function hR6() {}
  hR6.prototype = {
    nodeName: "#text",
    nodeType: vM1,
    splitText: function (A) {
      var K = this.data,
        q = K.substring(A);
      K = K.substring(0, A), this.data = this.nodeValue = K, this.length = K.length;
      var Y = this.ownerDocument.createTextNode(q);
      if (this.parentNode) this.parentNode.insertBefore(Y, this.nextSibling);
      return Y;
    }
  };
  pf(hR6, AQA);
  function bR6() {}
  bR6.prototype = {
    nodeName: "#comment",
    nodeType: Ye7
  };
  pf(bR6, AQA);
  function xR6() {}
  xR6.prototype = {
    nodeName: "#cdata-section",
    nodeType: Ae7
  };
  pf(xR6, AQA);
  function LM1() {}
  LM1.prototype.nodeType = we7;
  pf(LM1, Cz);
  function Ze7() {}
  Ze7.prototype.nodeType = h_2;
  pf(Ze7, Cz);
  function We7() {}
  We7.prototype.nodeType = S_2;
  pf(We7, Cz);
  function uR6() {}
  uR6.prototype.nodeType = Ke7;
  pf(uR6, Cz);
  function RM1() {}
  RM1.prototype.nodeName = "#document-fragment";
  RM1.prototype.nodeType = Md;
  pf(RM1, Cz);
  function BR6() {}
  BR6.prototype.nodeType = qe7;
  pf(BR6, Cz);
  function De7() {}
  De7.prototype.serializeToString = function (A, K, q) {
    return je7.call(A, K, q);
  };
  Cz.prototype.toString = je7;
  function je7(A, K) {
    var q = [],
      Y = this.nodeType == 9 && this.documentElement || this,
      z = Y.prefix,
      w = Y.namespaceURI;
    if (w && z == null) {
      var z = Y.lookupPrefix(w);
      if (z == null) var H = [{
        namespace: w,
        prefix: null
      }];
    }
    return UjA(this, q, A, K, H), q.join("");
  }
  function tt7(A, K, q) {
    var Y = A.prefix || "",
      z = A.namespaceURI;
    if (!z) return !1;
    if (Y === "xml" && z === aFA.XML || z === aFA.XMLNS) return !1;
    var w = q.length;
    while (w--) {
      var H = q[w];
      if (H.prefix === Y) return H.namespace !== z;
    }
    return !0;
  }
  function LR6(A, K, q) {
    A.push(" ", K, '="', q.replace(/[<>&"\t\n\r]/g, Xe7), '"');
  }
  function UjA(A, K, q, Y, z) {
    if (!z) z = [];
    if (Y) if (A = Y(A), A) {
      if (typeof A == "string") {
        K.push(A);
        return;
      }
    } else return;
    switch (A.nodeType) {
      case RS:
        var w = A.attributes,
          H = w.length,
          M = A.firstChild,
          J = A.tagName;
        q = aFA.isHTML(A.namespaceURI) || q;
        var O = J;
        if (!q && !A.prefix && A.namespaceURI) {
          var X;
          for (var $ = 0; $ < w.length; $++) if (w.item($).name === "xmlns") {
            X = w.item($).value;
            break;
          }
          if (!X) for (var _ = z.length - 1; _ >= 0; _--) {
            var G = z[_];
            if (G.prefix === "" && G.namespace === A.namespaceURI) {
              X = G.namespace;
              break;
            }
          }
          if (X !== A.namespaceURI) for (var _ = z.length - 1; _ >= 0; _--) {
            var G = z[_];
            if (G.namespace === A.namespaceURI) {
              if (G.prefix) O = G.prefix + ":" + J;
              break;
            }
          }
        }
        K.push("<", O);
        for (var Z = 0; Z < H; Z++) {
          var W = w.item(Z);
          if (W.prefix == "xmlns") z.push({
            prefix: W.localName,
            namespace: W.value
          });else if (W.nodeName == "xmlns") z.push({
            prefix: "",
            namespace: W.value
          });
        }
        for (var Z = 0; Z < H; Z++) {
          var W = w.item(Z);
          if (tt7(W, q, z)) {
            var D = W.prefix || "",
              j = W.namespaceURI;
            LR6(K, D ? "xmlns:" + D : "xmlns", j), z.push({
              prefix: D,
              namespace: j
            });
          }
          UjA(W, K, q, Y, z);
        }
        if (J === O && tt7(A, q, z)) {
          var D = A.prefix || "",
            j = A.namespaceURI;
          LR6(K, D ? "xmlns:" + D : "xmlns", j), z.push({
            prefix: D,
            namespace: j
          });
        }
        if (M || q && !/^(?:meta|link|img|br|hr|input)$/i.test(J)) {
          if (K.push(">"), q && /^script$/i.test(J)) while (M) {
            if (M.data) K.push(M.data);else UjA(M, K, q, Y, z.slice());
            M = M.nextSibling;
          } else while (M) UjA(M, K, q, Y, z.slice()), M = M.nextSibling;
          K.push("</", O, ">");
        } else K.push("/>");
        return;
      case ze7:
      case Md:
        var M = A.firstChild;
        while (M) UjA(M, K, q, Y, z.slice()), M = M.nextSibling;
        return;
      case pjA:
        return LR6(K, A.name, A.value);
      case vM1:
        return K.push(A.data.replace(/[<&>]/g, Xe7));
      case Ae7:
        return K.push("<![CDATA[", A.data, "]]>");
      case Ye7:
        return K.push("<!--", A.data, "-->");
      case we7:
        var {
          publicId: P,
          systemId: f
        } = A;
        if (K.push("<!DOCTYPE ", A.name), P) {
          if (K.push(" PUBLIC ", P), f && f != ".") K.push(" ", f);
          K.push(">");
        } else if (f && f != ".") K.push(" SYSTEM ", f, ">");else {
          var N = A.internalSubset;
          if (N) K.push(" [", N, "]");
          K.push(">");
        }
        return;
      case qe7:
        return K.push("<?", A.target, " ", A.data, "?>");
      case Ke7:
        return K.push("&", A.nodeName, ";");
      default:
        K.push("??", A.nodeName);
    }
  }
  function Me7(A, K, q) {
    var Y;
    switch (K.nodeType) {
      case RS:
        Y = K.cloneNode(!1), Y.ownerDocument = A;
      case Md:
        break;
      case pjA:
        q = !0;
        break;
    }
    if (!Y) Y = K.cloneNode(!1);
    if (Y.ownerDocument = A, Y.parentNode = null, q) {
      var z = K.firstChild;
      while (z) Y.appendChild(Me7(A, z, q)), z = z.nextSibling;
    }
    return Y;
  }
  function RR6(A, K, q) {
    var Y = new K.constructor();
    for (var z in K) if (Object.prototype.hasOwnProperty.call(K, z)) {
      var w = K[z];
      if (typeof w != "object") {
        if (w != Y[z]) Y[z] = w;
      }
    }
    if (K.childNodes) Y.childNodes = new jd();
    switch (Y.ownerDocument = A, Y.nodeType) {
      case RS:
        var H = K.attributes,
          J = Y.attributes = new EM1(),
          O = H.length;
        J._ownerElement = Y;
        for (var X = 0; X < O; X++) Y.setAttributeNode(RR6(A, H.item(X), !0));
        break;
      case pjA:
        q = !0;
    }
    if (q) {
      var $ = K.firstChild;
      while ($) Y.appendChild(RR6(A, $, q)), $ = $.nextSibling;
    }
    return Y;
  }
  function Pe7(A, K, q) {
    A[K] = q;
  }
  try {
    if (Object.defineProperty) {
      let A = function (K) {
        switch (K.nodeType) {
          case RS:
          case Md:
            var q = [];
            K = K.firstChild;
            while (K) {
              if (K.nodeType !== 7 && K.nodeType !== 8) q.push(A(K));
              K = K.nextSibling;
            }
            return q.join("");
          default:
            return K.nodeValue;
        }
      };
      F_2 = A, Object.defineProperty(djA.prototype, "length", {
        get: function () {
          return yR6(this), this.$$length;
        }
      }), Object.defineProperty(Cz.prototype, "textContent", {
        get: function () {
          return A(this);
        },
        set: function (K) {
          switch (this.nodeType) {
            case RS:
            case Md:
              while (this.firstChild) this.removeChild(this.firstChild);
              if (K || String(K)) this.appendChild(this.ownerDocument.createTextNode(K));
              break;
            default:
              this.data = K, this.value = K, this.nodeValue = K;
          }
        }
      }), Pe7 = function (K, q, Y) {
        K["$$" + q] = Y;
      };
    }
  } catch (A) {}
  var F_2;
  Q_2.DocumentType = LM1;
  Q_2.DOMException = WX;
  Q_2.DOMImplementation = Oe7;
  Q_2.Element = D3A;
  Q_2.Node = Cz;
  Q_2.NodeList = jd;
  Q_2.XMLSerializer = De7;
});

// Register to shared state
__$.mR6 = mR6;
