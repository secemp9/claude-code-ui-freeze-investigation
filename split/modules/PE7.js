// Module: PE7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PE7 = v((X_H, ME7) => {
  class KS {
    constructor(A) {
      this.length = 0, this.entries = [], this.treeAdapter = A, this.bookmark = null;
    }
    _getNoahArkConditionCandidates(A) {
      let K = [];
      if (this.length >= 3) {
        let q = this.treeAdapter.getAttrList(A).length,
          Y = this.treeAdapter.getTagName(A),
          z = this.treeAdapter.getNamespaceURI(A);
        for (let w = this.length - 1; w >= 0; w--) {
          let H = this.entries[w];
          if (H.type === KS.MARKER_ENTRY) break;
          let J = H.element,
            O = this.treeAdapter.getAttrList(J);
          if (this.treeAdapter.getTagName(J) === Y && this.treeAdapter.getNamespaceURI(J) === z && O.length === q) K.push({
            idx: w,
            attrs: O
          });
        }
      }
      return K.length < 3 ? [] : K;
    }
    _ensureNoahArkCondition(A) {
      let K = this._getNoahArkConditionCandidates(A),
        q = K.length;
      if (q) {
        let Y = this.treeAdapter.getAttrList(A),
          z = Y.length,
          w = Object.create(null);
        for (let H = 0; H < z; H++) {
          let J = Y[H];
          w[J.name] = J.value;
        }
        for (let H = 0; H < z; H++) for (let J = 0; J < q; J++) {
          let O = K[J].attrs[H];
          if (w[O.name] !== O.value) K.splice(J, 1), q--;
          if (K.length < 3) return;
        }
        for (let H = q - 1; H >= 2; H--) this.entries.splice(K[H].idx, 1), this.length--;
      }
    }
    insertMarker() {
      this.entries.push({
        type: KS.MARKER_ENTRY
      }), this.length++;
    }
    pushElement(A, K) {
      this._ensureNoahArkCondition(A), this.entries.push({
        type: KS.ELEMENT_ENTRY,
        element: A,
        token: K
      }), this.length++;
    }
    insertElementAfterBookmark(A, K) {
      let q = this.length - 1;
      for (; q >= 0; q--) if (this.entries[q] === this.bookmark) break;
      this.entries.splice(q + 1, 0, {
        type: KS.ELEMENT_ENTRY,
        element: A,
        token: K
      }), this.length++;
    }
    removeEntry(A) {
      for (let K = this.length - 1; K >= 0; K--) if (this.entries[K] === A) {
        this.entries.splice(K, 1), this.length--;
        break;
      }
    }
    clearToLastMarker() {
      while (this.length) {
        let A = this.entries.pop();
        if (this.length--, A.type === KS.MARKER_ENTRY) break;
      }
    }
    getElementEntryInScopeWithTagName(A) {
      for (let K = this.length - 1; K >= 0; K--) {
        let q = this.entries[K];
        if (q.type === KS.MARKER_ENTRY) return null;
        if (this.treeAdapter.getTagName(q.element) === A) return q;
      }
      return null;
    }
    getElementEntry(A) {
      for (let K = this.length - 1; K >= 0; K--) {
        let q = this.entries[K];
        if (q.type === KS.ELEMENT_ENTRY && q.element === A) return q;
      }
      return null;
    }
  }
  KS.MARKER_ENTRY = "MARKER_ENTRY";
  KS.ELEMENT_ENTRY = "ELEMENT_ENTRY";
  ME7.exports = KS;
});

// Register to shared state
__$.PE7 = PE7;
