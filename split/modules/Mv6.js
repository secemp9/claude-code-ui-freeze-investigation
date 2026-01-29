// Module: Mv6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mv6 = v(Qb7 => {
  Object.defineProperty(Qb7, "__esModule", {
    value: !0
  });
  Qb7.getSignificand = Qb7.getNormalBase2 = Qb7.MIN_VALUE = Qb7.MAX_NORMAL_EXPONENT = Qb7.MIN_NORMAL_EXPONENT = Qb7.SIGNIFICAND_WIDTH = void 0;
  Qb7.SIGNIFICAND_WIDTH = 52;
  var yeY = 2146435072,
    IeY = 1048575,
    jv6 = 1023;
  Qb7.MIN_NORMAL_EXPONENT = -jv6 + 1;
  Qb7.MAX_NORMAL_EXPONENT = jv6;
  Qb7.MIN_VALUE = Math.pow(2, -1022);
  function SeY(A) {
    let K = new DataView(new ArrayBuffer(8));
    return K.setFloat64(0, A), ((K.getUint32(0) & yeY) >> 20) - jv6;
  }
  Qb7.getNormalBase2 = SeY;
  function heY(A) {
    let K = new DataView(new ArrayBuffer(8));
    K.setFloat64(0, A);
    let q = K.getUint32(0),
      Y = K.getUint32(4);
    return (q & IeY) * Math.pow(2, 32) + Y;
  }
  Qb7.getSignificand = heY;
});

// Register to shared state
__$.Mv6 = Mv6;
