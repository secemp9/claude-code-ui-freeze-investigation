// Module: If6
// Dependencies: DB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var If6 = v((__H, NE7) => {
  var BgY = __$.DB();
  class fE7 extends BgY {
    constructor(A) {
      super(A);
      this.preprocessor = A, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.offset = 0, this.col = 0, this.line = 1;
    }
    _getOverriddenMethods(A, K) {
      return {
        advance() {
          let q = this.pos + 1,
            Y = this.html[q];
          if (A.isEol) A.isEol = !1, A.line++, A.lineStartPos = q;
          if (Y === `
` || Y === "\r" && this.html[q + 1] !== `
`) A.isEol = !0;
          return A.col = q - A.lineStartPos + 1, A.offset = A.droppedBufferSize + q, K.advance.call(this);
        },
        retreat() {
          K.retreat.call(this), A.isEol = !1, A.col = this.pos - A.lineStartPos + 1;
        },
        dropParsedChunk() {
          let q = this.pos;
          K.dropParsedChunk.call(this);
          let Y = q - this.pos;
          A.lineStartPos -= Y, A.droppedBufferSize += Y, A.offset = A.droppedBufferSize + this.pos;
        }
      };
    }
  }
  NE7.exports = fE7;
});

// Register to shared state
__$.If6 = If6;
