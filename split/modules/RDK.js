// Module: RDK
// Dependencies: Ce, jg6, Tv1, Re, Vg6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RDK = v(oF2 => {
  var Cv1 = __$.Ce(),
    lF2 = __$.jg6(),
    EDK = __$.Tv1(),
    ye = __$.Re(),
    Cg6 = __$.Vg6(),
    kDK = Cv1.getBCHDigit(7973);
  function iF2(A, K, q) {
    for (let Y = 1; Y <= 40; Y++) if (K <= oF2.getCapacity(Y, q, A)) return Y;
    return;
  }
  function CDK(A, K) {
    return ye.getCharCountIndicator(A, K) + 4;
  }
  function nF2(A, K) {
    let q = 0;
    return A.forEach(function (Y) {
      let z = CDK(Y.mode, K);
      q += z + Y.getBitsLength();
    }), q;
  }
  function rF2(A, K) {
    for (let q = 1; q <= 40; q++) if (nF2(A, q) <= oF2.getCapacity(q, K, ye.MIXED)) return q;
    return;
  }
  oF2.from = function (K, q) {
    if (Cg6.isValid(K)) return parseInt(K, 10);
    return q;
  };
  oF2.getCapacity = function (K, q, Y) {
    if (!Cg6.isValid(K)) throw Error("Invalid QR Code version");
    if (typeof Y > "u") Y = ye.BYTE;
    let z = Cv1.getSymbolTotalCodewords(K),
      w = lF2.getTotalCodewordsCount(K, q),
      H = (z - w) * 8;
    if (Y === ye.MIXED) return H;
    let J = H - CDK(Y, K);
    switch (Y) {
      case ye.NUMERIC:
        return Math.floor(J / 10 * 3);
      case ye.ALPHANUMERIC:
        return Math.floor(J / 11 * 2);
      case ye.KANJI:
        return Math.floor(J / 13);
      case ye.BYTE:
      default:
        return Math.floor(J / 8);
    }
  };
  oF2.getBestVersionForData = function (K, q) {
    let Y,
      z = EDK.from(q, EDK.M);
    if (Array.isArray(K)) {
      if (K.length > 1) return rF2(K, z);
      if (K.length === 0) return 1;
      Y = K[0];
    } else Y = K;
    return iF2(Y.mode, Y.getLength(), z);
  };
  oF2.getEncodedBits = function (K) {
    if (!Cg6.isValid(K) || K < 7) throw Error("Invalid QR Code version");
    let q = K << 12;
    while (Cv1.getBCHDigit(q) - kDK >= 0) q ^= 7973 << Cv1.getBCHDigit(q) - kDK;
    return K << 12 | q;
  };
});

// Register to shared state
__$.RDK = RDK;
