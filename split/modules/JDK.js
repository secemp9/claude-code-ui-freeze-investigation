// Module: JDK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JDK = v((_FJ, HDK) => {
  function vdA(A) {
    if (!A || A < 1) throw Error("BitMatrix size must be defined and greater than 0");
    this.size = A, this.data = new Uint8Array(A * A), this.reservedBit = new Uint8Array(A * A);
  }
  vdA.prototype.set = function (A, K, q, Y) {
    let z = A * this.size + K;
    if (this.data[z] = q, Y) this.reservedBit[z] = !0;
  };
  vdA.prototype.get = function (A, K) {
    return this.data[A * this.size + K];
  };
  vdA.prototype.xor = function (A, K, q) {
    this.data[A * this.size + K] ^= q;
  };
  vdA.prototype.isReserved = function (A, K) {
    return this.reservedBit[A * this.size + K];
  };
  HDK.exports = vdA;
});

// Register to shared state
__$.JDK = JDK;
