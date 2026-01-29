// Module: ag6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ag6 = v((iFJ, LjK) => {
  var CjK = LjK.exports = function (A) {
    this._buffer = A, this._reads = [];
  };
  CjK.prototype.read = function (A, K) {
    this._reads.push({
      length: Math.abs(A),
      allowLess: A < 0,
      func: K
    });
  };
  CjK.prototype.process = function () {
    while (this._reads.length > 0 && this._buffer.length) {
      let A = this._reads[0];
      if (this._buffer.length && (this._buffer.length >= A.length || A.allowLess)) {
        this._reads.shift();
        let K = this._buffer;
        this._buffer = K.slice(A.length), A.func.call(this, K.slice(0, A.length));
      } else break;
    }
    if (this._reads.length > 0) return Error("There are some read requests waitng on finished stream");
    if (this._buffer.length > 0) return Error("unrecognised content at end of stream");
  };
});

// Register to shared state
__$.ag6 = ag6;
