// Module: RW
// Dependencies: Dh6, jh6, Mh6, P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RW = v((ItH, v3K) => {
  v3K.exports = BJ;
  var T3K = __$.Dh6(),
    mV1 = __$.jh6(),
    P3K = __$.Mh6(),
    V2 = __$.P0();
  function BJ() {
    T3K.call(this), this.parentNode = null, this._nextSibling = this._previousSibling = this, this._index = void 0;
  }
  var ef = BJ.ELEMENT_NODE = 1,
    Ph6 = BJ.ATTRIBUTE_NODE = 2,
    gV1 = BJ.TEXT_NODE = 3,
    GN2 = BJ.CDATA_SECTION_NODE = 4,
    ZN2 = BJ.ENTITY_REFERENCE_NODE = 5,
    Vh6 = BJ.ENTITY_NODE = 6,
    V3K = BJ.PROCESSING_INSTRUCTION_NODE = 7,
    f3K = BJ.COMMENT_NODE = 8,
    jUA = BJ.DOCUMENT_NODE = 9,
    fL = BJ.DOCUMENT_TYPE_NODE = 10,
    at = BJ.DOCUMENT_FRAGMENT_NODE = 11,
    fh6 = BJ.NOTATION_NODE = 12,
    Nh6 = BJ.DOCUMENT_POSITION_DISCONNECTED = 1,
    Th6 = BJ.DOCUMENT_POSITION_PRECEDING = 2,
    vh6 = BJ.DOCUMENT_POSITION_FOLLOWING = 4,
    N3K = BJ.DOCUMENT_POSITION_CONTAINS = 8,
    Eh6 = BJ.DOCUMENT_POSITION_CONTAINED_BY = 16,
    kh6 = BJ.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
  BJ.prototype = Object.create(T3K.prototype, {
    baseURI: {
      get: V2.nyi
    },
    parentElement: {
      get: function () {
        return this.parentNode && this.parentNode.nodeType === ef ? this.parentNode : null;
      }
    },
    hasChildNodes: {
      value: V2.shouldOverride
    },
    firstChild: {
      get: V2.shouldOverride
    },
    lastChild: {
      get: V2.shouldOverride
    },
    isConnected: {
      get: function () {
        let A = this;
        while (A != null) {
          if (A.nodeType === BJ.DOCUMENT_NODE) return !0;
          if (A = A.parentNode, A != null && A.nodeType === BJ.DOCUMENT_FRAGMENT_NODE) A = A.host;
        }
        return !1;
      }
    },
    previousSibling: {
      get: function () {
        var A = this.parentNode;
        if (!A) return null;
        if (this === A.firstChild) return null;
        return this._previousSibling;
      }
    },
    nextSibling: {
      get: function () {
        var A = this.parentNode,
          K = this._nextSibling;
        if (!A) return null;
        if (K === A.firstChild) return null;
        return K;
      }
    },
    textContent: {
      get: function () {
        return null;
      },
      set: function (A) {}
    },
    innerText: {
      get: function () {
        return null;
      },
      set: function (A) {}
    },
    _countChildrenOfType: {
      value: function (A) {
        var K = 0;
        for (var q = this.firstChild; q !== null; q = q.nextSibling) if (q.nodeType === A) K++;
        return K;
      }
    },
    _ensureInsertValid: {
      value: function (K, q, Y) {
        var z = this,
          w,
          H;
        if (!K.nodeType) throw TypeError("not a node");
        switch (z.nodeType) {
          case jUA:
          case at:
          case ef:
            break;
          default:
            V2.HierarchyRequestError();
        }
        if (K.isAncestor(z)) V2.HierarchyRequestError();
        if (q !== null || !Y) {
          if (q.parentNode !== z) V2.NotFoundError();
        }
        switch (K.nodeType) {
          case at:
          case fL:
          case ef:
          case gV1:
          case V3K:
          case f3K:
            break;
          default:
            V2.HierarchyRequestError();
        }
        if (z.nodeType === jUA) switch (K.nodeType) {
          case gV1:
            V2.HierarchyRequestError();
            break;
          case at:
            if (K._countChildrenOfType(gV1) > 0) V2.HierarchyRequestError();
            switch (K._countChildrenOfType(ef)) {
              case 0:
                break;
              case 1:
                if (q !== null) {
                  if (Y && q.nodeType === fL) V2.HierarchyRequestError();
                  for (H = q.nextSibling; H !== null; H = H.nextSibling) if (H.nodeType === fL) V2.HierarchyRequestError();
                }
                if (w = z._countChildrenOfType(ef), Y) {
                  if (w > 0) V2.HierarchyRequestError();
                } else if (w > 1 || w === 1 && q.nodeType !== ef) V2.HierarchyRequestError();
                break;
              default:
                V2.HierarchyRequestError();
            }
            break;
          case ef:
            if (q !== null) {
              if (Y && q.nodeType === fL) V2.HierarchyRequestError();
              for (H = q.nextSibling; H !== null; H = H.nextSibling) if (H.nodeType === fL) V2.HierarchyRequestError();
            }
            if (w = z._countChildrenOfType(ef), Y) {
              if (w > 0) V2.HierarchyRequestError();
            } else if (w > 1 || w === 1 && q.nodeType !== ef) V2.HierarchyRequestError();
            break;
          case fL:
            if (q === null) {
              if (z._countChildrenOfType(ef)) V2.HierarchyRequestError();
            } else for (H = z.firstChild; H !== null; H = H.nextSibling) {
              if (H === q) break;
              if (H.nodeType === ef) V2.HierarchyRequestError();
            }
            if (w = z._countChildrenOfType(fL), Y) {
              if (w > 0) V2.HierarchyRequestError();
            } else if (w > 1 || w === 1 && q.nodeType !== fL) V2.HierarchyRequestError();
            break;
        } else if (K.nodeType === fL) V2.HierarchyRequestError();
      }
    },
    insertBefore: {
      value: function (K, q) {
        var Y = this;
        Y._ensureInsertValid(K, q, !0);
        var z = q;
        if (z === K) z = K.nextSibling;
        return Y.doc.adoptNode(K), K._insertOrReplace(Y, z, !1), K;
      }
    },
    appendChild: {
      value: function (A) {
        return this.insertBefore(A, null);
      }
    },
    _appendChild: {
      value: function (A) {
        A._insertOrReplace(this, null, !1);
      }
    },
    removeChild: {
      value: function (K) {
        var q = this;
        if (!K.nodeType) throw TypeError("not a node");
        if (K.parentNode !== q) V2.NotFoundError();
        return K.remove(), K;
      }
    },
    replaceChild: {
      value: function (K, q) {
        var Y = this;
        if (Y._ensureInsertValid(K, q, !1), K.doc !== Y.doc) Y.doc.adoptNode(K);
        return K._insertOrReplace(Y, q, !0), q;
      }
    },
    contains: {
      value: function (K) {
        if (K === null) return !1;
        if (this === K) return !0;
        return (this.compareDocumentPosition(K) & Eh6) !== 0;
      }
    },
    compareDocumentPosition: {
      value: function (K) {
        if (this === K) return 0;
        if (this.doc !== K.doc || this.rooted !== K.rooted) return Nh6 + kh6;
        var q = [],
          Y = [];
        for (var z = this; z !== null; z = z.parentNode) q.push(z);
        for (z = K; z !== null; z = z.parentNode) Y.push(z);
        if (q.reverse(), Y.reverse(), q[0] !== Y[0]) return Nh6 + kh6;
        z = Math.min(q.length, Y.length);
        for (var w = 1; w < z; w++) if (q[w] !== Y[w]) if (q[w].index < Y[w].index) return vh6;else return Th6;
        if (q.length < Y.length) return vh6 + Eh6;else return Th6 + N3K;
      }
    },
    isSameNode: {
      value: function (K) {
        return this === K;
      }
    },
    isEqualNode: {
      value: function (K) {
        if (!K) return !1;
        if (K.nodeType !== this.nodeType) return !1;
        if (!this.isEqual(K)) return !1;
        for (var q = this.firstChild, Y = K.firstChild; q && Y; q = q.nextSibling, Y = Y.nextSibling) if (!q.isEqualNode(Y)) return !1;
        return q === null && Y === null;
      }
    },
    cloneNode: {
      value: function (A) {
        var K = this.clone();
        if (A) for (var q = this.firstChild; q !== null; q = q.nextSibling) K._appendChild(q.cloneNode(!0));
        return K;
      }
    },
    lookupPrefix: {
      value: function (K) {
        var q;
        if (K === "" || K === null || K === void 0) return null;
        switch (this.nodeType) {
          case ef:
            return this._lookupNamespacePrefix(K, this);
          case jUA:
            return q = this.documentElement, q ? q.lookupPrefix(K) : null;
          case Vh6:
          case fh6:
          case at:
          case fL:
            return null;
          case Ph6:
            return q = this.ownerElement, q ? q.lookupPrefix(K) : null;
          default:
            return q = this.parentElement, q ? q.lookupPrefix(K) : null;
        }
      }
    },
    lookupNamespaceURI: {
      value: function (K) {
        if (K === "" || K === void 0) K = null;
        var q;
        switch (this.nodeType) {
          case ef:
            return V2.shouldOverride();
          case jUA:
            return q = this.documentElement, q ? q.lookupNamespaceURI(K) : null;
          case Vh6:
          case fh6:
          case fL:
          case at:
            return null;
          case Ph6:
            return q = this.ownerElement, q ? q.lookupNamespaceURI(K) : null;
          default:
            return q = this.parentElement, q ? q.lookupNamespaceURI(K) : null;
        }
      }
    },
    isDefaultNamespace: {
      value: function (K) {
        if (K === "" || K === void 0) K = null;
        var q = this.lookupNamespaceURI(null);
        return q === K;
      }
    },
    index: {
      get: function () {
        var A = this.parentNode;
        if (this === A.firstChild) return 0;
        var K = A.childNodes;
        if (this._index === void 0 || K[this._index] !== this) {
          for (var q = 0; q < K.length; q++) K[q]._index = q;
          V2.assert(K[this._index] === this);
        }
        return this._index;
      }
    },
    isAncestor: {
      value: function (A) {
        if (this.doc !== A.doc) return !1;
        if (this.rooted !== A.rooted) return !1;
        for (var K = A; K; K = K.parentNode) if (K === this) return !0;
        return !1;
      }
    },
    ensureSameDoc: {
      value: function (A) {
        if (A.ownerDocument === null) A.ownerDocument = this.doc;else if (A.ownerDocument !== this.doc) V2.WrongDocumentError();
      }
    },
    removeChildren: {
      value: V2.shouldOverride
    },
    _insertOrReplace: {
      value: function (K, q, Y) {
        var z = this,
          w,
          H;
        if (z.nodeType === at && z.rooted) V2.HierarchyRequestError();
        if (K._childNodes) {
          if (w = q === null ? K._childNodes.length : q.index, z.parentNode === K) {
            var J = z.index;
            if (J < w) w--;
          }
        }
        if (Y) {
          if (q.rooted) q.doc.mutateRemove(q);
          q.parentNode = null;
        }
        var O = q;
        if (O === null) O = K.firstChild;
        var X = z.rooted && K.rooted;
        if (z.nodeType === at) {
          var $ = [0, Y ? 1 : 0],
            _;
          for (var G = z.firstChild; G !== null; G = _) _ = G.nextSibling, $.push(G), G.parentNode = K;
          var Z = $.length;
          if (Y) mV1.replace(O, Z > 2 ? $[2] : null);else if (Z > 2 && O !== null) mV1.insertBefore($[2], O);
          if (K._childNodes) {
            $[0] = q === null ? K._childNodes.length : q._index, K._childNodes.splice.apply(K._childNodes, $);
            for (H = 2; H < Z; H++) $[H]._index = $[0] + (H - 2);
          } else if (K._firstChild === q) {
            if (Z > 2) K._firstChild = $[2];else if (Y) K._firstChild = null;
          }
          if (z._childNodes) z._childNodes.length = 0;else z._firstChild = null;
          if (K.rooted) {
            K.modify();
            for (H = 2; H < Z; H++) K.doc.mutateInsert($[H]);
          }
        } else {
          if (q === z) return;
          if (X) z._remove();else if (z.parentNode) z.remove();
          if (z.parentNode = K, Y) {
            if (mV1.replace(O, z), K._childNodes) z._index = w, K._childNodes[w] = z;else if (K._firstChild === q) K._firstChild = z;
          } else {
            if (O !== null) mV1.insertBefore(z, O);
            if (K._childNodes) z._index = w, K._childNodes.splice(w, 0, z);else if (K._firstChild === q) K._firstChild = z;
          }
          if (X) K.modify(), K.doc.mutateMove(z);else if (K.rooted) K.modify(), K.doc.mutateInsert(z);
        }
      }
    },
    lastModTime: {
      get: function () {
        if (!this._lastModTime) this._lastModTime = this.doc.modclock;
        return this._lastModTime;
      }
    },
    modify: {
      value: function () {
        if (this.doc.modclock) {
          var A = ++this.doc.modclock;
          for (var K = this; K; K = K.parentElement) if (K._lastModTime) K._lastModTime = A;
        }
      }
    },
    doc: {
      get: function () {
        return this.ownerDocument || this;
      }
    },
    rooted: {
      get: function () {
        return !!this._nid;
      }
    },
    normalize: {
      value: function () {
        var A;
        for (var K = this.firstChild; K !== null; K = A) {
          if (A = K.nextSibling, K.normalize) K.normalize();
          if (K.nodeType !== BJ.TEXT_NODE) continue;
          if (K.nodeValue === "") {
            this.removeChild(K);
            continue;
          }
          var q = K.previousSibling;
          if (q === null) continue;else if (q.nodeType === BJ.TEXT_NODE) q.appendData(K.nodeValue), this.removeChild(K);
        }
      }
    },
    serialize: {
      value: function () {
        if (this._innerHTML) return this._innerHTML;
        var A = "";
        for (var K = this.firstChild; K !== null; K = K.nextSibling) A += P3K.serializeOne(K, this);
        return A;
      }
    },
    outerHTML: {
      get: function () {
        return P3K.serializeOne(this, {
          nodeType: 0
        });
      },
      set: V2.nyi
    },
    ELEMENT_NODE: {
      value: ef
    },
    ATTRIBUTE_NODE: {
      value: Ph6
    },
    TEXT_NODE: {
      value: gV1
    },
    CDATA_SECTION_NODE: {
      value: GN2
    },
    ENTITY_REFERENCE_NODE: {
      value: ZN2
    },
    ENTITY_NODE: {
      value: Vh6
    },
    PROCESSING_INSTRUCTION_NODE: {
      value: V3K
    },
    COMMENT_NODE: {
      value: f3K
    },
    DOCUMENT_NODE: {
      value: jUA
    },
    DOCUMENT_TYPE_NODE: {
      value: fL
    },
    DOCUMENT_FRAGMENT_NODE: {
      value: at
    },
    NOTATION_NODE: {
      value: fh6
    },
    DOCUMENT_POSITION_DISCONNECTED: {
      value: Nh6
    },
    DOCUMENT_POSITION_PRECEDING: {
      value: Th6
    },
    DOCUMENT_POSITION_FOLLOWING: {
      value: vh6
    },
    DOCUMENT_POSITION_CONTAINS: {
      value: N3K
    },
    DOCUMENT_POSITION_CONTAINED_BY: {
      value: Eh6
    },
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {
      value: kh6
    }
  });
});

// Register to shared state
__$.RW = RW;
