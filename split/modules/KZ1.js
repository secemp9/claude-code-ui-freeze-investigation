// Module: KZ1
// Dependencies: DB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KZ1 = v((D_H, bE7) => {
  var pgY = __$.DB();
  class hE7 extends pgY {
    constructor(A, K) {
      super(A);
      this.posTracker = null, this.onParseError = K.onParseError;
    }
    _setErrorLocation(A) {
      A.startLine = A.endLine = this.posTracker.line, A.startCol = A.endCol = this.posTracker.col, A.startOffset = A.endOffset = this.posTracker.offset;
    }
    _reportError(A) {
      let K = {
        code: A,
        startLine: -1,
        startCol: -1,
        startOffset: -1,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      };
      this._setErrorLocation(K), this.onParseError(K);
    }
    _getOverriddenMethods(A) {
      return {
        _err(K) {
          A._reportError(K);
        }
      };
    }
  }
  bE7.exports = hE7;
});

// Register to shared state
__$.KZ1 = KZ1;
