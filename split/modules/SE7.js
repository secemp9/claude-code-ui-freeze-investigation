// Module: SE7
// Dependencies: DB, BmA, hf6, LE7, Ts

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SE7 = v((W_H, IE7) => {
  var bf6 = __$.DB(),
    RE7 = __$.BmA(),
    FgY = __$.hf6(),
    QgY = __$.LE7(),
    UgY = __$.Ts(),
    xf6 = UgY.TAG_NAMES;
  class yE7 extends bf6 {
    constructor(A) {
      super(A);
      this.parser = A, this.treeAdapter = this.parser.treeAdapter, this.posTracker = null, this.lastStartTagToken = null, this.lastFosterParentingLocation = null, this.currentToken = null;
    }
    _setStartLocation(A) {
      let K = null;
      if (this.lastStartTagToken) K = Object.assign({}, this.lastStartTagToken.location), K.startTag = this.lastStartTagToken.location;
      this.treeAdapter.setNodeSourceCodeLocation(A, K);
    }
    _setEndLocation(A, K) {
      let q = this.treeAdapter.getNodeSourceCodeLocation(A);
      if (q) {
        if (K.location) {
          let Y = K.location,
            z = this.treeAdapter.getTagName(A);
          if (K.type === RE7.END_TAG_TOKEN && z === K.tagName) q.endTag = Object.assign({}, Y), q.endLine = Y.endLine, q.endCol = Y.endCol, q.endOffset = Y.endOffset;else q.endLine = Y.startLine, q.endCol = Y.startCol, q.endOffset = Y.startOffset;
        }
      }
    }
    _getOverriddenMethods(A, K) {
      return {
        _bootstrap(q, Y) {
          K._bootstrap.call(this, q, Y), A.lastStartTagToken = null, A.lastFosterParentingLocation = null, A.currentToken = null;
          let z = bf6.install(this.tokenizer, FgY);
          A.posTracker = z.posTracker, bf6.install(this.openElements, QgY, {
            onItemPop: function (w) {
              A._setEndLocation(w, A.currentToken);
            }
          });
        },
        _runParsingLoop(q) {
          K._runParsingLoop.call(this, q);
          for (let Y = this.openElements.stackTop; Y >= 0; Y--) A._setEndLocation(this.openElements.items[Y], A.currentToken);
        },
        _processTokenInForeignContent(q) {
          A.currentToken = q, K._processTokenInForeignContent.call(this, q);
        },
        _processToken(q) {
          if (A.currentToken = q, K._processToken.call(this, q), q.type === RE7.END_TAG_TOKEN && (q.tagName === xf6.HTML || q.tagName === xf6.BODY && this.openElements.hasInScope(xf6.BODY))) for (let z = this.openElements.stackTop; z >= 0; z--) {
            let w = this.openElements.items[z];
            if (this.treeAdapter.getTagName(w) === q.tagName) {
              A._setEndLocation(w, q);
              break;
            }
          }
        },
        _setDocumentType(q) {
          K._setDocumentType.call(this, q);
          let Y = this.treeAdapter.getChildNodes(this.document),
            z = Y.length;
          for (let w = 0; w < z; w++) {
            let H = Y[w];
            if (this.treeAdapter.isDocumentTypeNode(H)) {
              this.treeAdapter.setNodeSourceCodeLocation(H, q.location);
              break;
            }
          }
        },
        _attachElementToTree(q) {
          A._setStartLocation(q), A.lastStartTagToken = null, K._attachElementToTree.call(this, q);
        },
        _appendElement(q, Y) {
          A.lastStartTagToken = q, K._appendElement.call(this, q, Y);
        },
        _insertElement(q, Y) {
          A.lastStartTagToken = q, K._insertElement.call(this, q, Y);
        },
        _insertTemplate(q) {
          A.lastStartTagToken = q, K._insertTemplate.call(this, q);
          let Y = this.treeAdapter.getTemplateContent(this.openElements.current);
          this.treeAdapter.setNodeSourceCodeLocation(Y, null);
        },
        _insertFakeRootElement() {
          K._insertFakeRootElement.call(this), this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null);
        },
        _appendCommentNode(q, Y) {
          K._appendCommentNode.call(this, q, Y);
          let z = this.treeAdapter.getChildNodes(Y),
            w = z[z.length - 1];
          this.treeAdapter.setNodeSourceCodeLocation(w, q.location);
        },
        _findFosterParentingLocation() {
          return A.lastFosterParentingLocation = K._findFosterParentingLocation.call(this), A.lastFosterParentingLocation;
        },
        _insertCharacters(q) {
          K._insertCharacters.call(this, q);
          let Y = this._shouldFosterParentOnInsertion(),
            z = Y && A.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current,
            w = this.treeAdapter.getChildNodes(z),
            H = Y && A.lastFosterParentingLocation.beforeElement ? w.indexOf(A.lastFosterParentingLocation.beforeElement) - 1 : w.length - 1,
            J = w[H],
            O = this.treeAdapter.getNodeSourceCodeLocation(J);
          if (O) O.endLine = q.location.endLine, O.endCol = q.location.endCol, O.endOffset = q.location.endOffset;else this.treeAdapter.setNodeSourceCodeLocation(J, q.location);
        }
      };
    }
  }
  IE7.exports = yE7;
});

// Register to shared state
__$.SE7 = SE7;
