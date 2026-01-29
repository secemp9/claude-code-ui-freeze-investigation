// Module: gDK
// Dependencies: Re, Ce

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gDK = v((LFJ, mDK) => {
  var zQ2 = __$.Re(),
    wQ2 = __$.Ce();
  function JVA(A) {
    this.mode = zQ2.KANJI, this.data = A;
  }
  JVA.getBitsLength = function (K) {
    return K * 13;
  };
  JVA.prototype.getLength = function () {
    return this.data.length;
  };
  JVA.prototype.getBitsLength = function () {
    return JVA.getBitsLength(this.data.length);
  };
  JVA.prototype.write = function (A) {
    let K;
    for (K = 0; K < this.data.length; K++) {
      let q = wQ2.toSJIS(this.data[K]);
      if (q >= 33088 && q <= 40956) q -= 33088;else if (q >= 57408 && q <= 60351) q -= 49472;else throw Error("Invalid SJIS character: " + this.data[K] + `
Make sure your charset is UTF-8`);
      q = (q >>> 8 & 255) * 192 + (q & 255), A.put(q, 13);
    }
  };
  mDK.exports = JVA;
});

// Register to shared state
__$.gDK = gDK;
