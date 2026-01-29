// Module: pA8
// Dependencies: ATA, QA8, FA8, gA8, UA8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pA8 = k(() => {
  __$.ATA();
  __$.QA8 = __$.FA8.prototype;
  __$.QA8.append = function (K, q) {
    this._pairs.push([K, q]);
  };
  __$.QA8.toString = function (K) {
    let q = K ? function (Y) {
      return K.call(this, Y, __$.gA8);
    } : __$.gA8;
    return this._pairs.map(function (z) {
      return q(z[0]) + "=" + q(z[1]);
    }, "").join("&");
  };
  __$.UA8 = __$.FA8;
});

// Register to shared state
__$.pA8 = pA8;
