// Module: QMA
// Dependencies: QV1, P0, yh6, RW, A9A, Mh6, g3K, uV1, Sh6, cV1
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QMA = v((ptH, Y9K) => {
  Y9K.exports = tt;
  var gh6 = __$.QV1(),
    fO = __$.P0(),
    Zm = fO.NAMESPACE,
    nV1 = __$.yh6(),
    lS = __$.RW(),
    Fh6 = __$.A9A(),
    iN2 = __$.Mh6(),
    iV1 = __$.g3K(),
    FMA = __$.uV1(),
    nN2 = __$.Sh6(),
    Qh6 = __$.cV1(),
    A9K = __$.FV1(),
    rN2 = __$.lV1(),
    oN2 = __$.Bh6(),
    K9K = __$.mh6(),
    e3K = Object.create(null);
  function tt(A, K, q, Y) {
    A9K.call(this), this.nodeType = lS.ELEMENT_NODE, this.ownerDocument = A, this.localName = K, this.namespaceURI = q, this.prefix = Y, this._tagName = void 0, this._attrsByQName = Object.create(null), this._attrsByLName = Object.create(null), this._attrKeys = [];
  }
  function Uh6(A, K) {
    if (A.nodeType === lS.TEXT_NODE) K.push(A._data);else for (var q = 0, Y = A.childNodes.length; q < Y; q++) Uh6(A.childNodes[q], K);
  }
  tt.prototype = Object.create(A9K.prototype, {
    isHTML: {
      get: function () {
        return this.namespaceURI === Zm.HTML && this.ownerDocument.isHTML;
      }
    },
    tagName: {
      get: function () {
        if (this._tagName === void 0) {
          var K;
          if (this.prefix === null) K = this.localName;else K = this.prefix + ":" + this.localName;
          if (this.isHTML) {
            var q = e3K[K];
            if (!q) e3K[K] = q = fO.toASCIIUpperCase(K);
            K = q;
          }
          this._tagName = K;
        }
        return this._tagName;
      }
    },
    nodeName: {
      get: function () {
        return this.tagName;
      }
    },
    nodeValue: {
      get: function () {
        return null;
      },
      set: function () {}
    },
    textContent: {
      get: function () {
        var A = [];
        return Uh6(this, A), A.join("");
      },
      set: function (A) {
        if (this.removeChildren(), A !== null && A !== void 0 && A !== "") this._appendChild(this.ownerDocument.createTextNode(A));
      }
    },
    innerText: {
      get: function () {
        var A = [];
        return Uh6(this, A), A.join("").replace(/[ \t\n\f\r]+/g, " ").trim();
      },
      set: function (A) {
        if (this.removeChildren(), A !== null && A !== void 0 && A !== "") this._appendChild(this.ownerDocument.createTextNode(A));
      }
    },
    innerHTML: {
      get: function () {
        return this.serialize();
      },
      set: fO.nyi
    },
    outerHTML: {
      get: function () {
        return iN2.serializeOne(this, {
          nodeType: 0
        });
      },
      set: function (A) {
        var K = this.ownerDocument,
          q = this.parentNode;
        if (q === null) return;
        if (q.nodeType === lS.DOCUMENT_NODE) fO.NoModificationAllowedError();
        if (q.nodeType === lS.DOCUMENT_FRAGMENT_NODE) q = q.ownerDocument.createElement("body");
        var Y = K.implementation.mozHTMLParser(K._address, q);
        Y.parse(A === null ? "" : String(A), !0), this.replaceWith(Y._asDocumentFragment());
      }
    },
    _insertAdjacent: {
      value: function (K, q) {
        var Y = !1;
        switch (K) {
          case "beforebegin":
            Y = !0;
          case "afterend":
            var z = this.parentNode;
            if (z === null) return null;
            return z.insertBefore(q, Y ? this : this.nextSibling);
          case "afterbegin":
            Y = !0;
          case "beforeend":
            return this.insertBefore(q, Y ? this.firstChild : null);
          default:
            return fO.SyntaxError();
        }
      }
    },
    insertAdjacentElement: {
      value: function (K, q) {
        if (q.nodeType !== lS.ELEMENT_NODE) throw TypeError("not an element");
        return K = fO.toASCIILowerCase(String(K)), this._insertAdjacent(K, q);
      }
    },
    insertAdjacentText: {
      value: function (K, q) {
        var Y = this.ownerDocument.createTextNode(q);
        K = fO.toASCIILowerCase(String(K)), this._insertAdjacent(K, Y);
      }
    },
    insertAdjacentHTML: {
      value: function (K, q) {
        K = fO.toASCIILowerCase(String(K)), q = String(q);
        var Y;
        switch (K) {
          case "beforebegin":
          case "afterend":
            if (Y = this.parentNode, Y === null || Y.nodeType === lS.DOCUMENT_NODE) fO.NoModificationAllowedError();
            break;
          case "afterbegin":
          case "beforeend":
            Y = this;
            break;
          default:
            fO.SyntaxError();
        }
        if (!(Y instanceof tt) || Y.ownerDocument.isHTML && Y.localName === "html" && Y.namespaceURI === Zm.HTML) Y = Y.ownerDocument.createElementNS(Zm.HTML, "body");
        var z = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, Y);
        z.parse(q, !0), this._insertAdjacent(K, z._asDocumentFragment());
      }
    },
    children: {
      get: function () {
        if (!this._children) this._children = new q9K(this);
        return this._children;
      }
    },
    attributes: {
      get: function () {
        if (!this._attributes) this._attributes = new dh6(this);
        return this._attributes;
      }
    },
    firstElementChild: {
      get: function () {
        for (var A = this.firstChild; A !== null; A = A.nextSibling) if (A.nodeType === lS.ELEMENT_NODE) return A;
        return null;
      }
    },
    lastElementChild: {
      get: function () {
        for (var A = this.lastChild; A !== null; A = A.previousSibling) if (A.nodeType === lS.ELEMENT_NODE) return A;
        return null;
      }
    },
    childElementCount: {
      get: function () {
        return this.children.length;
      }
    },
    nextElement: {
      value: function (A) {
        if (!A) A = this.ownerDocument.documentElement;
        var K = this.firstElementChild;
        if (!K) {
          if (this === A) return null;
          K = this.nextElementSibling;
        }
        if (K) return K;
        for (var q = this.parentElement; q && q !== A; q = q.parentElement) if (K = q.nextElementSibling, K) return K;
        return null;
      }
    },
    getElementsByTagName: {
      value: function (K) {
        var q;
        if (!K) return new Fh6();
        if (K === "*") q = function () {
          return !0;
        };else if (this.isHTML) q = aN2(K);else q = ph6(K);
        return new iV1(this, q);
      }
    },
    getElementsByTagNameNS: {
      value: function (K, q) {
        var Y;
        if (K === "*" && q === "*") Y = function () {
          return !0;
        };else if (K === "*") Y = ph6(q);else if (q === "*") Y = sN2(K);else Y = tN2(K, q);
        return new iV1(this, Y);
      }
    },
    getElementsByClassName: {
      value: function (K) {
        if (K = String(K).trim(), K === "") {
          var q = new Fh6();
          return q;
        }
        return K = K.split(/[ \t\r\n\f]+/), new iV1(this, eN2(K));
      }
    },
    getElementsByName: {
      value: function (K) {
        return new iV1(this, AT2(String(K)));
      }
    },
    clone: {
      value: function () {
        var K;
        if (this.namespaceURI !== Zm.HTML || this.prefix || !this.ownerDocument.isHTML) K = this.ownerDocument.createElementNS(this.namespaceURI, this.prefix !== null ? this.prefix + ":" + this.localName : this.localName);else K = this.ownerDocument.createElement(this.localName);
        for (var q = 0, Y = this._attrKeys.length; q < Y; q++) {
          var z = this._attrKeys[q],
            w = this._attrsByLName[z],
            H = w.cloneNode();
          H._setOwnerElement(K), K._attrsByLName[z] = H, K._addQName(H);
        }
        return K._attrKeys = this._attrKeys.concat(), K;
      }
    },
    isEqual: {
      value: function (K) {
        if (this.localName !== K.localName || this.namespaceURI !== K.namespaceURI || this.prefix !== K.prefix || this._numattrs !== K._numattrs) return !1;
        for (var q = 0, Y = this._numattrs; q < Y; q++) {
          var z = this._attr(q);
          if (!K.hasAttributeNS(z.namespaceURI, z.localName)) return !1;
          if (K.getAttributeNS(z.namespaceURI, z.localName) !== z.value) return !1;
        }
        return !0;
      }
    },
    _lookupNamespacePrefix: {
      value: function (K, q) {
        if (this.namespaceURI && this.namespaceURI === K && this.prefix !== null && q.lookupNamespaceURI(this.prefix) === K) return this.prefix;
        for (var Y = 0, z = this._numattrs; Y < z; Y++) {
          var w = this._attr(Y);
          if (w.prefix === "xmlns" && w.value === K && q.lookupNamespaceURI(w.localName) === K) return w.localName;
        }
        var H = this.parentElement;
        return H ? H._lookupNamespacePrefix(K, q) : null;
      }
    },
    lookupNamespaceURI: {
      value: function (K) {
        if (K === "" || K === void 0) K = null;
        if (this.namespaceURI !== null && this.prefix === K) return this.namespaceURI;
        for (var q = 0, Y = this._numattrs; q < Y; q++) {
          var z = this._attr(q);
          if (z.namespaceURI === Zm.XMLNS) {
            if (z.prefix === "xmlns" && z.localName === K || K === null && z.prefix === null && z.localName === "xmlns") return z.value || null;
          }
        }
        var w = this.parentElement;
        return w ? w.lookupNamespaceURI(K) : null;
      }
    },
    getAttribute: {
      value: function (K) {
        var q = this.getAttributeNode(K);
        return q ? q.value : null;
      }
    },
    getAttributeNS: {
      value: function (K, q) {
        var Y = this.getAttributeNodeNS(K, q);
        return Y ? Y.value : null;
      }
    },
    getAttributeNode: {
      value: function (K) {
        if (K = String(K), /[A-Z]/.test(K) && this.isHTML) K = fO.toASCIILowerCase(K);
        var q = this._attrsByQName[K];
        if (!q) return null;
        if (Array.isArray(q)) q = q[0];
        return q;
      }
    },
    getAttributeNodeNS: {
      value: function (K, q) {
        K = K === void 0 || K === null ? "" : String(K), q = String(q);
        var Y = this._attrsByLName[K + "|" + q];
        return Y ? Y : null;
      }
    },
    hasAttribute: {
      value: function (K) {
        if (K = String(K), /[A-Z]/.test(K) && this.isHTML) K = fO.toASCIILowerCase(K);
        return this._attrsByQName[K] !== void 0;
      }
    },
    hasAttributeNS: {
      value: function (K, q) {
        K = K === void 0 || K === null ? "" : String(K), q = String(q);
        var Y = K + "|" + q;
        return this._attrsByLName[Y] !== void 0;
      }
    },
    hasAttributes: {
      value: function () {
        return this._numattrs > 0;
      }
    },
    toggleAttribute: {
      value: function (K, q) {
        if (K = String(K), !gh6.isValidName(K)) fO.InvalidCharacterError();
        if (/[A-Z]/.test(K) && this.isHTML) K = fO.toASCIILowerCase(K);
        var Y = this._attrsByQName[K];
        if (Y === void 0) {
          if (q === void 0 || q === !0) return this._setAttribute(K, ""), !0;
          return !1;
        } else {
          if (q === void 0 || q === !1) return this.removeAttribute(K), !1;
          return !0;
        }
      }
    },
    _setAttribute: {
      value: function (K, q) {
        var Y = this._attrsByQName[K],
          z;
        if (!Y) Y = this._newattr(K), z = !0;else if (Array.isArray(Y)) Y = Y[0];
        if (Y.value = q, this._attributes) this._attributes[K] = Y;
        if (z && this._newattrhook) this._newattrhook(K, q);
      }
    },
    setAttribute: {
      value: function (K, q) {
        if (K = String(K), !gh6.isValidName(K)) fO.InvalidCharacterError();
        if (/[A-Z]/.test(K) && this.isHTML) K = fO.toASCIILowerCase(K);
        this._setAttribute(K, String(q));
      }
    },
    _setAttributeNS: {
      value: function (K, q, Y) {
        var z = q.indexOf(":"),
          w,
          H;
        if (z < 0) w = null, H = q;else w = q.substring(0, z), H = q.substring(z + 1);
        if (K === "" || K === void 0) K = null;
        var J = (K === null ? "" : K) + "|" + H,
          O = this._attrsByLName[J],
          X;
        if (!O) {
          if (O = new TUA(this, H, w, K), X = !0, this._attrsByLName[J] = O, this._attributes) this._attributes[this._attrKeys.length] = O;
          this._attrKeys.push(J), this._addQName(O);
        }
        if (O.value = Y, X && this._newattrhook) this._newattrhook(q, Y);
      }
    },
    setAttributeNS: {
      value: function (K, q, Y) {
        if (K = K === null || K === void 0 || K === "" ? null : String(K), q = String(q), !gh6.isValidQName(q)) fO.InvalidCharacterError();
        var z = q.indexOf(":"),
          w = z < 0 ? null : q.substring(0, z);
        if (w !== null && K === null || w === "xml" && K !== Zm.XML || (q === "xmlns" || w === "xmlns") && K !== Zm.XMLNS || K === Zm.XMLNS && !(q === "xmlns" || w === "xmlns")) fO.NamespaceError();
        this._setAttributeNS(K, q, String(Y));
      }
    },
    setAttributeNode: {
      value: function (K) {
        if (K.ownerElement !== null && K.ownerElement !== this) throw new FMA(FMA.INUSE_ATTRIBUTE_ERR);
        var q = null,
          Y = this._attrsByQName[K.name];
        if (Y) {
          if (!Array.isArray(Y)) Y = [Y];
          if (Y.some(function (z) {
            return z === K;
          })) return K;else if (K.ownerElement !== null) throw new FMA(FMA.INUSE_ATTRIBUTE_ERR);
          Y.forEach(function (z) {
            this.removeAttributeNode(z);
          }, this), q = Y[0];
        }
        return this.setAttributeNodeNS(K), q;
      }
    },
    setAttributeNodeNS: {
      value: function (K) {
        if (K.ownerElement !== null) throw new FMA(FMA.INUSE_ATTRIBUTE_ERR);
        var q = K.namespaceURI,
          Y = (q === null ? "" : q) + "|" + K.localName,
          z = this._attrsByLName[Y];
        if (z) this.removeAttributeNode(z);
        if (K._setOwnerElement(this), this._attrsByLName[Y] = K, this._attributes) this._attributes[this._attrKeys.length] = K;
        if (this._attrKeys.push(Y), this._addQName(K), this._newattrhook) this._newattrhook(K.name, K.value);
        return z || null;
      }
    },
    removeAttribute: {
      value: function (K) {
        if (K = String(K), /[A-Z]/.test(K) && this.isHTML) K = fO.toASCIILowerCase(K);
        var q = this._attrsByQName[K];
        if (!q) return;
        if (Array.isArray(q)) {
          if (q.length > 2) q = q.shift();else this._attrsByQName[K] = q[1], q = q[0];
        } else this._attrsByQName[K] = void 0;
        var Y = q.namespaceURI,
          z = (Y === null ? "" : Y) + "|" + q.localName;
        this._attrsByLName[z] = void 0;
        var w = this._attrKeys.indexOf(z);
        if (this._attributes) Array.prototype.splice.call(this._attributes, w, 1), this._attributes[K] = void 0;
        this._attrKeys.splice(w, 1);
        var H = q.onchange;
        if (q._setOwnerElement(null), H) H.call(q, this, q.localName, q.value, null);
        if (this.rooted) this.ownerDocument.mutateRemoveAttr(q);
      }
    },
    removeAttributeNS: {
      value: function (K, q) {
        K = K === void 0 || K === null ? "" : String(K), q = String(q);
        var Y = K + "|" + q,
          z = this._attrsByLName[Y];
        if (!z) return;
        this._attrsByLName[Y] = void 0;
        var w = this._attrKeys.indexOf(Y);
        if (this._attributes) Array.prototype.splice.call(this._attributes, w, 1);
        this._attrKeys.splice(w, 1), this._removeQName(z);
        var H = z.onchange;
        if (z._setOwnerElement(null), H) H.call(z, this, z.localName, z.value, null);
        if (this.rooted) this.ownerDocument.mutateRemoveAttr(z);
      }
    },
    removeAttributeNode: {
      value: function (K) {
        var q = K.namespaceURI,
          Y = (q === null ? "" : q) + "|" + K.localName;
        if (this._attrsByLName[Y] !== K) fO.NotFoundError();
        return this.removeAttributeNS(q, K.localName), K;
      }
    },
    getAttributeNames: {
      value: function () {
        var K = this;
        return this._attrKeys.map(function (q) {
          return K._attrsByLName[q].name;
        });
      }
    },
    _getattr: {
      value: function (K) {
        var q = this._attrsByQName[K];
        return q ? q.value : null;
      }
    },
    _setattr: {
      value: function (K, q) {
        var Y = this._attrsByQName[K],
          z;
        if (!Y) Y = this._newattr(K), z = !0;
        if (Y.value = String(q), this._attributes) this._attributes[K] = Y;
        if (z && this._newattrhook) this._newattrhook(K, q);
      }
    },
    _newattr: {
      value: function (K) {
        var q = new TUA(this, K, null, null),
          Y = "|" + K;
        if (this._attrsByQName[K] = q, this._attrsByLName[Y] = q, this._attributes) this._attributes[this._attrKeys.length] = q;
        return this._attrKeys.push(Y), q;
      }
    },
    _addQName: {
      value: function (A) {
        var K = A.name,
          q = this._attrsByQName[K];
        if (!q) this._attrsByQName[K] = A;else if (Array.isArray(q)) q.push(A);else this._attrsByQName[K] = [q, A];
        if (this._attributes) this._attributes[K] = A;
      }
    },
    _removeQName: {
      value: function (A) {
        var K = A.name,
          q = this._attrsByQName[K];
        if (Array.isArray(q)) {
          var Y = q.indexOf(A);
          if (fO.assert(Y !== -1), q.length === 2) {
            if (this._attrsByQName[K] = q[1 - Y], this._attributes) this._attributes[K] = this._attrsByQName[K];
          } else if (q.splice(Y, 1), this._attributes && this._attributes[K] === A) this._attributes[K] = q[0];
        } else if (fO.assert(q === A), this._attrsByQName[K] = void 0, this._attributes) this._attributes[K] = void 0;
      }
    },
    _numattrs: {
      get: function () {
        return this._attrKeys.length;
      }
    },
    _attr: {
      value: function (A) {
        return this._attrsByLName[this._attrKeys[A]];
      }
    },
    id: nV1.property({
      name: "id"
    }),
    className: nV1.property({
      name: "class"
    }),
    classList: {
      get: function () {
        var A = this;
        if (this._classList) return this._classList;
        var K = new nN2(function () {
          return A.className || "";
        }, function (q) {
          A.className = q;
        });
        return this._classList = K, K;
      },
      set: function (A) {
        this.className = A;
      }
    },
    matches: {
      value: function (A) {
        return Qh6.matches(this, A);
      }
    },
    closest: {
      value: function (A) {
        var K = this;
        do {
          if (K.matches && K.matches(A)) return K;
          K = K.parentElement || K.parentNode;
        } while (K !== null && K.nodeType === lS.ELEMENT_NODE);
        return null;
      }
    },
    querySelector: {
      value: function (A) {
        return Qh6(A, this)[0];
      }
    },
    querySelectorAll: {
      value: function (A) {
        var K = Qh6(A, this);
        return K.item ? K : new Fh6(K);
      }
    }
  });
  Object.defineProperties(tt.prototype, rN2);
  Object.defineProperties(tt.prototype, oN2);
  nV1.registerChangeHandler(tt, "id", function (A, K, q, Y) {
    if (A.rooted) {
      if (q) A.ownerDocument.delId(q, A);
      if (Y) A.ownerDocument.addId(Y, A);
    }
  });
  nV1.registerChangeHandler(tt, "class", function (A, K, q, Y) {
    if (A._classList) A._classList._update();
  });
  function TUA(A, K, q, Y, z) {
    this.localName = K, this.prefix = q === null || q === "" ? null : "" + q, this.namespaceURI = Y === null || Y === "" ? null : "" + Y, this.data = z, this._setOwnerElement(A);
  }
  TUA.prototype = Object.create(Object.prototype, {
    ownerElement: {
      get: function () {
        return this._ownerElement;
      }
    },
    _setOwnerElement: {
      value: function (K) {
        if (this._ownerElement = K, this.prefix === null && this.namespaceURI === null && K) this.onchange = K._attributeChangeHandlers[this.localName];else this.onchange = null;
      }
    },
    name: {
      get: function () {
        return this.prefix ? this.prefix + ":" + this.localName : this.localName;
      }
    },
    specified: {
      get: function () {
        return !0;
      }
    },
    value: {
      get: function () {
        return this.data;
      },
      set: function (A) {
        var K = this.data;
        if (A = A === void 0 ? "" : A + "", A === K) return;
        if (this.data = A, this.ownerElement) {
          if (this.onchange) this.onchange(this.ownerElement, this.localName, K, A);
          if (this.ownerElement.rooted) this.ownerElement.ownerDocument.mutateAttr(this, K);
        }
      }
    },
    cloneNode: {
      value: function (K) {
        return new TUA(null, this.localName, this.prefix, this.namespaceURI, this.data);
      }
    },
    nodeType: {
      get: function () {
        return lS.ATTRIBUTE_NODE;
      }
    },
    nodeName: {
      get: function () {
        return this.name;
      }
    },
    nodeValue: {
      get: function () {
        return this.value;
      },
      set: function (A) {
        this.value = A;
      }
    },
    textContent: {
      get: function () {
        return this.value;
      },
      set: function (A) {
        if (A === null || A === void 0) A = "";
        this.value = A;
      }
    },
    innerText: {
      get: function () {
        return this.value;
      },
      set: function (A) {
        if (A === null || A === void 0) A = "";
        this.value = A;
      }
    }
  });
  tt._Attr = TUA;
  function dh6(A) {
    K9K.call(this, A);
    for (var K in A._attrsByQName) this[K] = A._attrsByQName[K];
    for (var q = 0; q < A._attrKeys.length; q++) this[q] = A._attrsByLName[A._attrKeys[q]];
  }
  dh6.prototype = Object.create(K9K.prototype, {
    length: {
      get: function () {
        return this.element._attrKeys.length;
      },
      set: function () {}
    },
    item: {
      value: function (A) {
        if (A = A >>> 0, A >= this.length) return null;
        return this.element._attrsByLName[this.element._attrKeys[A]];
      }
    }
  });
  if (globalThis.Symbol?.iterator) dh6.prototype[globalThis.Symbol.iterator] = function () {
    var A = 0,
      K = this.length,
      q = this;
    return {
      next: function () {
        if (A < K) return {
          value: q.item(A++)
        };
        return {
          done: !0
        };
      }
    };
  };
  function q9K(A) {
    this.element = A, this.updateCache();
  }
  q9K.prototype = Object.create(Object.prototype, {
    length: {
      get: function () {
        return this.updateCache(), this.childrenByNumber.length;
      }
    },
    item: {
      value: function (K) {
        return this.updateCache(), this.childrenByNumber[K] || null;
      }
    },
    namedItem: {
      value: function (K) {
        return this.updateCache(), this.childrenByName[K] || null;
      }
    },
    namedItems: {
      get: function () {
        return this.updateCache(), this.childrenByName;
      }
    },
    updateCache: {
      value: function () {
        var K = /^(a|applet|area|embed|form|frame|frameset|iframe|img|object)$/;
        if (this.lastModTime !== this.element.lastModTime) {
          this.lastModTime = this.element.lastModTime;
          var q = this.childrenByNumber && this.childrenByNumber.length || 0;
          for (var Y = 0; Y < q; Y++) this[Y] = void 0;
          this.childrenByNumber = [], this.childrenByName = Object.create(null);
          for (var z = this.element.firstChild; z !== null; z = z.nextSibling) if (z.nodeType === lS.ELEMENT_NODE) {
            this[this.childrenByNumber.length] = z, this.childrenByNumber.push(z);
            var w = z.getAttribute("id");
            if (w && !this.childrenByName[w]) this.childrenByName[w] = z;
            var H = z.getAttribute("name");
            if (H && this.element.namespaceURI === Zm.HTML && K.test(this.element.localName) && !this.childrenByName[H]) this.childrenByName[w] = z;
          }
        }
      }
    }
  });
  function ph6(A) {
    return function (K) {
      return K.localName === A;
    };
  }
  function aN2(A) {
    var K = fO.toASCIILowerCase(A);
    if (K === A) return ph6(A);
    return function (q) {
      return q.isHTML ? q.localName === K : q.localName === A;
    };
  }
  function sN2(A) {
    return function (K) {
      return K.namespaceURI === A;
    };
  }
  function tN2(A, K) {
    return function (q) {
      return q.namespaceURI === A && q.localName === K;
    };
  }
  function eN2(A) {
    return function (K) {
      return A.every(function (q) {
        return K.classList.contains(q);
      });
    };
  }
  function AT2(A) {
    return function (K) {
      if (K.namespaceURI !== Zm.HTML) return !1;
      return K.getAttribute("name") === A;
    };
  }
});

// Register to shared state
__$.QMA = QMA;
