// Module: iD1
// Dependencies: kB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iD1 = v((HEH, vd7) => {
  vd7.exports = IB;
  var p32 = __$.kB();
  function IB(A) {
    if (A) for (var K = Object.keys(A), q = 0; q < K.length; ++q) this[K[q]] = A[K[q]];
  }
  IB.create = function (K) {
    return this.$type.create(K);
  };
  IB.encode = function (K, q) {
    return this.$type.encode(K, q);
  };
  IB.encodeDelimited = function (K, q) {
    return this.$type.encodeDelimited(K, q);
  };
  IB.decode = function (K) {
    return this.$type.decode(K);
  };
  IB.decodeDelimited = function (K) {
    return this.$type.decodeDelimited(K);
  };
  IB.verify = function (K) {
    return this.$type.verify(K);
  };
  IB.fromObject = function (K) {
    return this.$type.fromObject(K);
  };
  IB.toObject = function (K, q) {
    return this.$type.toObject(K, q);
  };
  IB.prototype.toJSON = function () {
    return this.$type.toObject(this, p32.toJSONOptions);
  };
});

// Register to shared state
__$.iD1 = iD1;
