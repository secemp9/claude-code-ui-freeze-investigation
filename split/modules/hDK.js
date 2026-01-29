// Module: hDK
// Dependencies: Re

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hDK = v((EFJ, SDK) => {
  var KQ2 = __$.Re();
  function zVA(A) {
    this.mode = KQ2.NUMERIC, this.data = A.toString();
  }
  zVA.getBitsLength = function (K) {
    return 10 * Math.floor(K / 3) + (K % 3 ? K % 3 * 3 + 1 : 0);
  };
  zVA.prototype.getLength = function () {
    return this.data.length;
  };
  zVA.prototype.getBitsLength = function () {
    return zVA.getBitsLength(this.data.length);
  };
  zVA.prototype.write = function (K) {
    let q, Y, z;
    for (q = 0; q + 3 <= this.data.length; q += 3) Y = this.data.substr(q, 3), z = parseInt(Y, 10), K.put(z, 10);
    let w = this.data.length - q;
    if (w > 0) Y = this.data.substr(q), z = parseInt(Y, 10), K.put(z, w * 3 + 1);
  };
  SDK.exports = zVA;
});

// Register to shared state
__$.hDK = hDK;
