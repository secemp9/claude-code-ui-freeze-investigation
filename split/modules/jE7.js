// Module: jE7
// Dependencies: Ts

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jE7 = v((O_H, DE7) => {
  var ZE7 = __$.Ts(),
    V4 = ZE7.TAG_NAMES,
    Aw = ZE7.NAMESPACES;
  function GE7(A) {
    switch (A.length) {
      case 1:
        return A === V4.P;
      case 2:
        return A === V4.RB || A === V4.RP || A === V4.RT || A === V4.DD || A === V4.DT || A === V4.LI;
      case 3:
        return A === V4.RTC;
      case 6:
        return A === V4.OPTION;
      case 8:
        return A === V4.OPTGROUP;
    }
    return !1;
  }
  function ugY(A) {
    switch (A.length) {
      case 1:
        return A === V4.P;
      case 2:
        return A === V4.RB || A === V4.RP || A === V4.RT || A === V4.DD || A === V4.DT || A === V4.LI || A === V4.TD || A === V4.TH || A === V4.TR;
      case 3:
        return A === V4.RTC;
      case 5:
        return A === V4.TBODY || A === V4.TFOOT || A === V4.THEAD;
      case 6:
        return A === V4.OPTION;
      case 7:
        return A === V4.CAPTION;
      case 8:
        return A === V4.OPTGROUP || A === V4.COLGROUP;
    }
    return !1;
  }
  function AZ1(A, K) {
    switch (A.length) {
      case 2:
        if (A === V4.TD || A === V4.TH) return K === Aw.HTML;else if (A === V4.MI || A === V4.MO || A === V4.MN || A === V4.MS) return K === Aw.MATHML;
        break;
      case 4:
        if (A === V4.HTML) return K === Aw.HTML;else if (A === V4.DESC) return K === Aw.SVG;
        break;
      case 5:
        if (A === V4.TABLE) return K === Aw.HTML;else if (A === V4.MTEXT) return K === Aw.MATHML;else if (A === V4.TITLE) return K === Aw.SVG;
        break;
      case 6:
        return (A === V4.APPLET || A === V4.OBJECT) && K === Aw.HTML;
      case 7:
        return (A === V4.CAPTION || A === V4.MARQUEE) && K === Aw.HTML;
      case 8:
        return A === V4.TEMPLATE && K === Aw.HTML;
      case 13:
        return A === V4.FOREIGN_OBJECT && K === Aw.SVG;
      case 14:
        return A === V4.ANNOTATION_XML && K === Aw.MATHML;
    }
    return !1;
  }
  class WE7 {
    constructor(A, K) {
      this.stackTop = -1, this.items = [], this.current = A, this.currentTagName = null, this.currentTmplContent = null, this.tmplCount = 0, this.treeAdapter = K;
    }
    _indexOf(A) {
      let K = -1;
      for (let q = this.stackTop; q >= 0; q--) if (this.items[q] === A) {
        K = q;
        break;
      }
      return K;
    }
    _isInTemplate() {
      return this.currentTagName === V4.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === Aw.HTML;
    }
    _updateCurrentElement() {
      this.current = this.items[this.stackTop], this.currentTagName = this.current && this.treeAdapter.getTagName(this.current), this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
    }
    push(A) {
      if (this.items[++this.stackTop] = A, this._updateCurrentElement(), this._isInTemplate()) this.tmplCount++;
    }
    pop() {
      if (this.stackTop--, this.tmplCount > 0 && this._isInTemplate()) this.tmplCount--;
      this._updateCurrentElement();
    }
    replace(A, K) {
      let q = this._indexOf(A);
      if (this.items[q] = K, q === this.stackTop) this._updateCurrentElement();
    }
    insertAfter(A, K) {
      let q = this._indexOf(A) + 1;
      if (this.items.splice(q, 0, K), q === ++this.stackTop) this._updateCurrentElement();
    }
    popUntilTagNamePopped(A) {
      while (this.stackTop > -1) {
        let K = this.currentTagName,
          q = this.treeAdapter.getNamespaceURI(this.current);
        if (this.pop(), K === A && q === Aw.HTML) break;
      }
    }
    popUntilElementPopped(A) {
      while (this.stackTop > -1) {
        let K = this.current;
        if (this.pop(), K === A) break;
      }
    }
    popUntilNumberedHeaderPopped() {
      while (this.stackTop > -1) {
        let A = this.currentTagName,
          K = this.treeAdapter.getNamespaceURI(this.current);
        if (this.pop(), A === V4.H1 || A === V4.H2 || A === V4.H3 || A === V4.H4 || A === V4.H5 || A === V4.H6 && K === Aw.HTML) break;
      }
    }
    popUntilTableCellPopped() {
      while (this.stackTop > -1) {
        let A = this.currentTagName,
          K = this.treeAdapter.getNamespaceURI(this.current);
        if (this.pop(), A === V4.TD || A === V4.TH && K === Aw.HTML) break;
      }
    }
    popAllUpToHtmlElement() {
      this.stackTop = 0, this._updateCurrentElement();
    }
    clearBackToTableContext() {
      while (this.currentTagName !== V4.TABLE && this.currentTagName !== V4.TEMPLATE && this.currentTagName !== V4.HTML || this.treeAdapter.getNamespaceURI(this.current) !== Aw.HTML) this.pop();
    }
    clearBackToTableBodyContext() {
      while (this.currentTagName !== V4.TBODY && this.currentTagName !== V4.TFOOT && this.currentTagName !== V4.THEAD && this.currentTagName !== V4.TEMPLATE && this.currentTagName !== V4.HTML || this.treeAdapter.getNamespaceURI(this.current) !== Aw.HTML) this.pop();
    }
    clearBackToTableRowContext() {
      while (this.currentTagName !== V4.TR && this.currentTagName !== V4.TEMPLATE && this.currentTagName !== V4.HTML || this.treeAdapter.getNamespaceURI(this.current) !== Aw.HTML) this.pop();
    }
    remove(A) {
      for (let K = this.stackTop; K >= 0; K--) if (this.items[K] === A) {
        this.items.splice(K, 1), this.stackTop--, this._updateCurrentElement();
        break;
      }
    }
    tryPeekProperlyNestedBodyElement() {
      let A = this.items[1];
      return A && this.treeAdapter.getTagName(A) === V4.BODY ? A : null;
    }
    contains(A) {
      return this._indexOf(A) > -1;
    }
    getCommonAncestor(A) {
      let K = this._indexOf(A);
      return --K >= 0 ? this.items[K] : null;
    }
    isRootHtmlElementCurrent() {
      return this.stackTop === 0 && this.currentTagName === V4.HTML;
    }
    hasInScope(A) {
      for (let K = this.stackTop; K >= 0; K--) {
        let q = this.treeAdapter.getTagName(this.items[K]),
          Y = this.treeAdapter.getNamespaceURI(this.items[K]);
        if (q === A && Y === Aw.HTML) return !0;
        if (AZ1(q, Y)) return !1;
      }
      return !0;
    }
    hasNumberedHeaderInScope() {
      for (let A = this.stackTop; A >= 0; A--) {
        let K = this.treeAdapter.getTagName(this.items[A]),
          q = this.treeAdapter.getNamespaceURI(this.items[A]);
        if ((K === V4.H1 || K === V4.H2 || K === V4.H3 || K === V4.H4 || K === V4.H5 || K === V4.H6) && q === Aw.HTML) return !0;
        if (AZ1(K, q)) return !1;
      }
      return !0;
    }
    hasInListItemScope(A) {
      for (let K = this.stackTop; K >= 0; K--) {
        let q = this.treeAdapter.getTagName(this.items[K]),
          Y = this.treeAdapter.getNamespaceURI(this.items[K]);
        if (q === A && Y === Aw.HTML) return !0;
        if ((q === V4.UL || q === V4.OL) && Y === Aw.HTML || AZ1(q, Y)) return !1;
      }
      return !0;
    }
    hasInButtonScope(A) {
      for (let K = this.stackTop; K >= 0; K--) {
        let q = this.treeAdapter.getTagName(this.items[K]),
          Y = this.treeAdapter.getNamespaceURI(this.items[K]);
        if (q === A && Y === Aw.HTML) return !0;
        if (q === V4.BUTTON && Y === Aw.HTML || AZ1(q, Y)) return !1;
      }
      return !0;
    }
    hasInTableScope(A) {
      for (let K = this.stackTop; K >= 0; K--) {
        let q = this.treeAdapter.getTagName(this.items[K]);
        if (this.treeAdapter.getNamespaceURI(this.items[K]) !== Aw.HTML) continue;
        if (q === A) return !0;
        if (q === V4.TABLE || q === V4.TEMPLATE || q === V4.HTML) return !1;
      }
      return !0;
    }
    hasTableBodyContextInTableScope() {
      for (let A = this.stackTop; A >= 0; A--) {
        let K = this.treeAdapter.getTagName(this.items[A]);
        if (this.treeAdapter.getNamespaceURI(this.items[A]) !== Aw.HTML) continue;
        if (K === V4.TBODY || K === V4.THEAD || K === V4.TFOOT) return !0;
        if (K === V4.TABLE || K === V4.HTML) return !1;
      }
      return !0;
    }
    hasInSelectScope(A) {
      for (let K = this.stackTop; K >= 0; K--) {
        let q = this.treeAdapter.getTagName(this.items[K]);
        if (this.treeAdapter.getNamespaceURI(this.items[K]) !== Aw.HTML) continue;
        if (q === A) return !0;
        if (q !== V4.OPTION && q !== V4.OPTGROUP) return !1;
      }
      return !0;
    }
    generateImpliedEndTags() {
      while (GE7(this.currentTagName)) this.pop();
    }
    generateImpliedEndTagsThoroughly() {
      while (ugY(this.currentTagName)) this.pop();
    }
    generateImpliedEndTagsWithExclusion(A) {
      while (GE7(this.currentTagName) && this.currentTagName !== A) this.pop();
    }
  }
  DE7.exports = WE7;
});

// Register to shared state
__$.jE7 = jE7;
