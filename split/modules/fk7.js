// Module: fk7
// Dependencies: uf6, Bf6, mf6, Ts

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fk7 = v((L_H, Vk7) => {
  var BUY = __$.uf6(),
    mUY = __$.Bf6(),
    gUY = __$.mf6(),
    Pk7 = __$.Ts(),
    Cw = Pk7.TAG_NAMES,
    OZ1 = Pk7.NAMESPACES,
    FUY = {
      treeAdapter: BUY
    },
    QUY = /&/g,
    UUY = /\u00a0/g,
    pUY = /"/g,
    dUY = /</g,
    cUY = />/g;
  class lmA {
    constructor(A, K) {
      this.options = mUY(FUY, K), this.treeAdapter = this.options.treeAdapter, this.html = "", this.startNode = A;
    }
    serialize() {
      return this._serializeChildNodes(this.startNode), this.html;
    }
    _serializeChildNodes(A) {
      let K = this.treeAdapter.getChildNodes(A);
      if (K) for (let q = 0, Y = K.length; q < Y; q++) {
        let z = K[q];
        if (this.treeAdapter.isElementNode(z)) this._serializeElement(z);else if (this.treeAdapter.isTextNode(z)) this._serializeTextNode(z);else if (this.treeAdapter.isCommentNode(z)) this._serializeCommentNode(z);else if (this.treeAdapter.isDocumentTypeNode(z)) this._serializeDocumentTypeNode(z);
      }
    }
    _serializeElement(A) {
      let K = this.treeAdapter.getTagName(A),
        q = this.treeAdapter.getNamespaceURI(A);
      if (this.html += "<" + K, this._serializeAttributes(A), this.html += ">", K !== Cw.AREA && K !== Cw.BASE && K !== Cw.BASEFONT && K !== Cw.BGSOUND && K !== Cw.BR && K !== Cw.COL && K !== Cw.EMBED && K !== Cw.FRAME && K !== Cw.HR && K !== Cw.IMG && K !== Cw.INPUT && K !== Cw.KEYGEN && K !== Cw.LINK && K !== Cw.META && K !== Cw.PARAM && K !== Cw.SOURCE && K !== Cw.TRACK && K !== Cw.WBR) {
        let Y = K === Cw.TEMPLATE && q === OZ1.HTML ? this.treeAdapter.getTemplateContent(A) : A;
        this._serializeChildNodes(Y), this.html += "</" + K + ">";
      }
    }
    _serializeAttributes(A) {
      let K = this.treeAdapter.getAttrList(A);
      for (let q = 0, Y = K.length; q < Y; q++) {
        let z = K[q],
          w = lmA.escapeString(z.value, !0);
        if (this.html += " ", !z.namespace) this.html += z.name;else if (z.namespace === OZ1.XML) this.html += "xml:" + z.name;else if (z.namespace === OZ1.XMLNS) {
          if (z.name !== "xmlns") this.html += "xmlns:";
          this.html += z.name;
        } else if (z.namespace === OZ1.XLINK) this.html += "xlink:" + z.name;else this.html += z.prefix + ":" + z.name;
        this.html += '="' + w + '"';
      }
    }
    _serializeTextNode(A) {
      let K = this.treeAdapter.getTextNodeContent(A),
        q = this.treeAdapter.getParentNode(A),
        Y = void 0;
      if (q && this.treeAdapter.isElementNode(q)) Y = this.treeAdapter.getTagName(q);
      if (Y === Cw.STYLE || Y === Cw.SCRIPT || Y === Cw.XMP || Y === Cw.IFRAME || Y === Cw.NOEMBED || Y === Cw.NOFRAMES || Y === Cw.PLAINTEXT || Y === Cw.NOSCRIPT) this.html += K;else this.html += lmA.escapeString(K, !1);
    }
    _serializeCommentNode(A) {
      this.html += "<!--" + this.treeAdapter.getCommentNodeContent(A) + "-->";
    }
    _serializeDocumentTypeNode(A) {
      let K = this.treeAdapter.getDocumentTypeNodeName(A);
      this.html += "<" + gUY.serializeContent(K, null, null) + ">";
    }
  }
  lmA.escapeString = function (A, K) {
    if (A = A.replace(QUY, "&amp;").replace(UUY, "&nbsp;"), K) A = A.replace(pUY, "&quot;");else A = A.replace(dUY, "&lt;").replace(cUY, "&gt;");
    return A;
  };
  Vk7.exports = lmA;
});

// Register to shared state
__$.fk7 = fk7;
