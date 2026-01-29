// Module: wE7
// Dependencies: sG1, tG1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wE7 = v((q_H, zE7) => {
  var pWA = __$.sG1(),
    Cf6 = __$.tG1(),
    J5A = pWA.CODE_POINTS;
  class YE7 {
    constructor() {
      this.html = null, this.pos = -1, this.lastGapPos = -1, this.lastCharPos = -1, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = 65536;
    }
    _err() {}
    _addGap() {
      this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
    }
    _processSurrogate(A) {
      if (this.pos !== this.lastCharPos) {
        let K = this.html.charCodeAt(this.pos + 1);
        if (pWA.isSurrogatePair(K)) return this.pos++, this._addGap(), pWA.getSurrogatePairCodePoint(A, K);
      } else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, J5A.EOF;
      return this._err(Cf6.surrogateInInputStream), A;
    }
    dropParsedChunk() {
      if (this.pos > this.bufferWaterline) this.lastCharPos -= this.pos, this.html = this.html.substring(this.pos), this.pos = 0, this.lastGapPos = -1, this.gapStack = [];
    }
    write(A, K) {
      if (this.html) this.html += A;else this.html = A;
      this.lastCharPos = this.html.length - 1, this.endOfChunkHit = !1, this.lastChunkWritten = K;
    }
    insertHtmlAtCurrentPos(A) {
      this.html = this.html.substring(0, this.pos + 1) + A + this.html.substring(this.pos + 1, this.html.length), this.lastCharPos = this.html.length - 1, this.endOfChunkHit = !1;
    }
    advance() {
      if (this.pos++, this.pos > this.lastCharPos) return this.endOfChunkHit = !this.lastChunkWritten, J5A.EOF;
      let A = this.html.charCodeAt(this.pos);
      if (this.skipNextNewLine && A === J5A.LINE_FEED) return this.skipNextNewLine = !1, this._addGap(), this.advance();
      if (A === J5A.CARRIAGE_RETURN) return this.skipNextNewLine = !0, J5A.LINE_FEED;
      if (this.skipNextNewLine = !1, pWA.isSurrogate(A)) A = this._processSurrogate(A);
      if (!(A > 31 && A < 127 || A === J5A.LINE_FEED || A === J5A.CARRIAGE_RETURN || A > 159 && A < 64976)) this._checkForProblematicCharacters(A);
      return A;
    }
    _checkForProblematicCharacters(A) {
      if (pWA.isControlCodePoint(A)) this._err(Cf6.controlCharacterInInputStream);else if (pWA.isUndefinedCodePoint(A)) this._err(Cf6.noncharacterInInputStream);
    }
    retreat() {
      if (this.pos === this.lastGapPos) this.lastGapPos = this.gapStack.pop(), this.pos--;
      this.pos--;
    }
  }
  zE7.exports = YE7;
});

// Register to shared state
__$.wE7 = wE7;
