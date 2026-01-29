// Module: hf6
// Dependencies: DB, BmA, If6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hf6 = v((G_H, EE7) => {
  var TE7 = __$.DB(),
    Sf6 = __$.BmA(),
    mgY = __$.If6();
  class vE7 extends TE7 {
    constructor(A) {
      super(A);
      this.tokenizer = A, this.posTracker = TE7.install(A.preprocessor, mgY), this.currentAttrLocation = null, this.ctLoc = null;
    }
    _getCurrentLocation() {
      return {
        startLine: this.posTracker.line,
        startCol: this.posTracker.col,
        startOffset: this.posTracker.offset,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      };
    }
    _attachCurrentAttrLocationInfo() {
      this.currentAttrLocation.endLine = this.posTracker.line, this.currentAttrLocation.endCol = this.posTracker.col, this.currentAttrLocation.endOffset = this.posTracker.offset;
      let A = this.tokenizer.currentToken,
        K = this.tokenizer.currentAttr;
      if (!A.location.attrs) A.location.attrs = Object.create(null);
      A.location.attrs[K.name] = this.currentAttrLocation;
    }
    _getOverriddenMethods(A, K) {
      let q = {
        _createStartTagToken() {
          K._createStartTagToken.call(this), this.currentToken.location = A.ctLoc;
        },
        _createEndTagToken() {
          K._createEndTagToken.call(this), this.currentToken.location = A.ctLoc;
        },
        _createCommentToken() {
          K._createCommentToken.call(this), this.currentToken.location = A.ctLoc;
        },
        _createDoctypeToken(Y) {
          K._createDoctypeToken.call(this, Y), this.currentToken.location = A.ctLoc;
        },
        _createCharacterToken(Y, z) {
          K._createCharacterToken.call(this, Y, z), this.currentCharacterToken.location = A.ctLoc;
        },
        _createEOFToken() {
          K._createEOFToken.call(this), this.currentToken.location = A._getCurrentLocation();
        },
        _createAttr(Y) {
          K._createAttr.call(this, Y), A.currentAttrLocation = A._getCurrentLocation();
        },
        _leaveAttrName(Y) {
          K._leaveAttrName.call(this, Y), A._attachCurrentAttrLocationInfo();
        },
        _leaveAttrValue(Y) {
          K._leaveAttrValue.call(this, Y), A._attachCurrentAttrLocationInfo();
        },
        _emitCurrentToken() {
          let Y = this.currentToken.location;
          if (this.currentCharacterToken) this.currentCharacterToken.location.endLine = Y.startLine, this.currentCharacterToken.location.endCol = Y.startCol, this.currentCharacterToken.location.endOffset = Y.startOffset;
          if (this.currentToken.type === Sf6.EOF_TOKEN) Y.endLine = Y.startLine, Y.endCol = Y.startCol, Y.endOffset = Y.startOffset;else Y.endLine = A.posTracker.line, Y.endCol = A.posTracker.col + 1, Y.endOffset = A.posTracker.offset + 1;
          K._emitCurrentToken.call(this);
        },
        _emitCurrentCharacterToken() {
          let Y = this.currentCharacterToken && this.currentCharacterToken.location;
          if (Y && Y.endOffset === -1) Y.endLine = A.posTracker.line, Y.endCol = A.posTracker.col, Y.endOffset = A.posTracker.offset;
          K._emitCurrentCharacterToken.call(this);
        }
      };
      return Object.keys(Sf6.MODE).forEach(Y => {
        let z = Sf6.MODE[Y];
        q[z] = function (w) {
          A.ctLoc = A._getCurrentLocation(), K[z].call(this, w);
        };
      }), q;
    }
  }
  EE7.exports = vE7;
});

// Register to shared state
__$.hf6 = hf6;
