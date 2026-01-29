// Module: wDK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wDK = v(($FJ, zDK) => {
  function YDK() {
    this.buffer = [], this.length = 0;
  }
  YDK.prototype = {
    get: function (A) {
      let K = Math.floor(A / 8);
      return (this.buffer[K] >>> 7 - A % 8 & 1) === 1;
    },
    put: function (A, K) {
      for (let q = 0; q < K; q++) this.putBit((A >>> K - q - 1 & 1) === 1);
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (A) {
      let K = Math.floor(this.length / 8);
      if (this.buffer.length <= K) this.buffer.push(0);
      if (A) this.buffer[K] |= 128 >>> this.length % 8;
      this.length++;
    }
  };
  zDK.exports = YDK;
});

// Register to shared state
__$.wDK = wDK;
