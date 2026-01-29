// Module: HDA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HDA = v((FlY, N5A) => {
  function uL7(A) {
    return typeof A > "u" || A === null;
  }
  function xlY(A) {
    return typeof A === "object" && A !== null;
  }
  function ulY(A) {
    if (Array.isArray(A)) return A;else if (uL7(A)) return [];
    return [A];
  }
  function BlY(A, K) {
    var q, Y, z, w;
    if (K) {
      w = Object.keys(K);
      for (q = 0, Y = w.length; q < Y; q += 1) z = w[q], A[z] = K[z];
    }
    return A;
  }
  function mlY(A, K) {
    var q = "",
      Y;
    for (Y = 0; Y < K; Y += 1) q += A;
    return q;
  }
  function glY(A) {
    return A === 0 && Number.NEGATIVE_INFINITY === 1 / A;
  }
  FlY.isNothing = uL7;
  FlY.isObject = xlY;
  FlY.toArray = ulY;
  FlY.repeat = mlY;
  FlY.isNegativeZero = glY;
  FlY.extend = BlY;
});

// Register to shared state
__$.HDA = HDA;
