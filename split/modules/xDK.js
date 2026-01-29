// Module: xDK
// Dependencies: Re

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xDK = v((kFJ, bDK) => {
  var qQ2 = __$.Re(),
    Rg6 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
  function wVA(A) {
    this.mode = qQ2.ALPHANUMERIC, this.data = A;
  }
  wVA.getBitsLength = function (K) {
    return 11 * Math.floor(K / 2) + 6 * (K % 2);
  };
  wVA.prototype.getLength = function () {
    return this.data.length;
  };
  wVA.prototype.getBitsLength = function () {
    return wVA.getBitsLength(this.data.length);
  };
  wVA.prototype.write = function (K) {
    let q;
    for (q = 0; q + 2 <= this.data.length; q += 2) {
      let Y = Rg6.indexOf(this.data[q]) * 45;
      Y += Rg6.indexOf(this.data[q + 1]), K.put(Y, 11);
    }
    if (this.data.length % 2) K.put(Rg6.indexOf(this.data[q]), 6);
  };
  bDK.exports = wVA;
});

// Register to shared state
__$.xDK = xDK;
