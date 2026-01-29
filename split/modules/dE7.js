// Module: dE7
// Dependencies: KZ1, FE7, hf6, DB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dE7 = v((P_H, pE7) => {
  var ogY = __$.KZ1(),
    agY = __$.FE7(),
    sgY = __$.hf6(),
    QE7 = __$.DB();
  class UE7 extends ogY {
    constructor(A, K) {
      super(A, K);
      this.opts = K, this.ctLoc = null, this.locBeforeToken = !1;
    }
    _setErrorLocation(A) {
      if (this.ctLoc) A.startLine = this.ctLoc.startLine, A.startCol = this.ctLoc.startCol, A.startOffset = this.ctLoc.startOffset, A.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine, A.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol, A.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset;
    }
    _getOverriddenMethods(A, K) {
      return {
        _bootstrap(q, Y) {
          K._bootstrap.call(this, q, Y), QE7.install(this.tokenizer, agY, A.opts), QE7.install(this.tokenizer, sgY);
        },
        _processInputToken(q) {
          A.ctLoc = q.location, K._processInputToken.call(this, q);
        },
        _err(q, Y) {
          A.locBeforeToken = Y && Y.beforeToken, A._reportError(q);
        }
      };
    }
  }
  pE7.exports = UE7;
});

// Register to shared state
__$.dE7 = dE7;
