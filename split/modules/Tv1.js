// Module: Tv1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tv1 = v(AF2 => {
  AF2.L = {
    bit: 1
  };
  AF2.M = {
    bit: 0
  };
  AF2.Q = {
    bit: 3
  };
  AF2.H = {
    bit: 2
  };
  function eg2(A) {
    if (typeof A !== "string") throw Error("Param is not a string");
    switch (A.toLowerCase()) {
      case "l":
      case "low":
        return AF2.L;
      case "m":
      case "medium":
        return AF2.M;
      case "q":
      case "quartile":
        return AF2.Q;
      case "h":
      case "high":
        return AF2.H;
      default:
        throw Error("Unknown EC Level: " + A);
    }
  }
  AF2.isValid = function (K) {
    return K && typeof K.bit < "u" && K.bit >= 0 && K.bit < 4;
  };
  AF2.from = function (K, q) {
    if (AF2.isValid(K)) return K;
    try {
      return eg2(K);
    } catch (Y) {
      return q;
    }
  };
});

// Register to shared state
__$.Tv1 = Tv1;
