// Module: BDK
// Dependencies: Re

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BDK = v((CFJ, uDK) => {
  var YQ2 = __$.Re();
  function HVA(A) {
    if (this.mode = YQ2.BYTE, typeof A === "string") this.data = new TextEncoder().encode(A);else this.data = new Uint8Array(A);
  }
  HVA.getBitsLength = function (K) {
    return K * 8;
  };
  HVA.prototype.getLength = function () {
    return this.data.length;
  };
  HVA.prototype.getBitsLength = function () {
    return HVA.getBitsLength(this.data.length);
  };
  HVA.prototype.write = function (A) {
    for (let K = 0, q = this.data.length; K < q; K++) A.put(this.data[K], 8);
  };
  uDK.exports = HVA;
});

// Register to shared state
__$.BDK = BDK;
