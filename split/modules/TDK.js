// Module: TDK
// Dependencies: VDK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TDK = v((PFJ, NDK) => {
  var fDK = __$.VDK();
  function Pg6(A) {
    if (this.genPoly = void 0, this.degree = A, this.degree) this.initialize(this.degree);
  }
  Pg6.prototype.initialize = function (K) {
    this.degree = K, this.genPoly = fDK.generateECPolynomial(this.degree);
  };
  Pg6.prototype.encode = function (K) {
    if (!this.genPoly) throw Error("Encoder not initialized");
    let q = new Uint8Array(K.length + this.degree);
    q.set(K);
    let Y = fDK.mod(q, this.genPoly),
      z = this.degree - Y.length;
    if (z > 0) {
      let w = new Uint8Array(this.degree);
      return w.set(Y, z), w;
    }
    return Y;
  };
  NDK.exports = Pg6;
});

// Register to shared state
__$.TDK = TDK;
