// Module: Re
// Dependencies: Vg6, fg6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Re = v(FF2 => {
  var mF2 = __$.Vg6(),
    Ng6 = __$.fg6();
  FF2.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  };
  FF2.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  };
  FF2.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  };
  FF2.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  };
  FF2.MIXED = {
    bit: -1
  };
  FF2.getCharCountIndicator = function (K, q) {
    if (!K.ccBits) throw Error("Invalid mode: " + K);
    if (!mF2.isValid(q)) throw Error("Invalid version: " + q);
    if (q >= 1 && q < 10) return K.ccBits[0];else if (q < 27) return K.ccBits[1];
    return K.ccBits[2];
  };
  FF2.getBestModeForData = function (K) {
    if (Ng6.testNumeric(K)) return FF2.NUMERIC;else if (Ng6.testAlphanumeric(K)) return FF2.ALPHANUMERIC;else if (Ng6.testKanji(K)) return FF2.KANJI;else return FF2.BYTE;
  };
  FF2.toString = function (K) {
    if (K && K.id) return K.id;
    throw Error("Invalid mode");
  };
  FF2.isValid = function (K) {
    return K && K.bit && K.ccBits;
  };
  function gF2(A) {
    if (typeof A !== "string") throw Error("Param is not a string");
    switch (A.toLowerCase()) {
      case "numeric":
        return FF2.NUMERIC;
      case "alphanumeric":
        return FF2.ALPHANUMERIC;
      case "kanji":
        return FF2.KANJI;
      case "byte":
        return FF2.BYTE;
      default:
        throw Error("Unknown mode: " + A);
    }
  }
  FF2.from = function (K, q) {
    if (FF2.isValid(K)) return K;
    try {
      return gF2(K);
    } catch (Y) {
      return q;
    }
  };
});

// Register to shared state
__$.Re = Re;
