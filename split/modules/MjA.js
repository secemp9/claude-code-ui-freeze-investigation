// Module: MjA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MjA = v($l7 => {
  Object.defineProperty($l7, "__esModule", {
    value: !0
  });
  $l7.minDeadline = P22;
  $l7.getDeadlineTimeoutString = f22;
  $l7.getRelativeTimeout = T22;
  $l7.deadlineToString = v22;
  $l7.formatDateDifference = E22;
  function P22(...A) {
    let K = 1 / 0;
    for (let q of A) {
      let Y = q instanceof Date ? q.getTime() : q;
      if (Y < K) K = Y;
    }
    return K;
  }
  var V22 = [["m", 1], ["S", 1000], ["M", 60000], ["H", 3600000]];
  function f22(A) {
    let K = new Date().getTime();
    if (A instanceof Date) A = A.getTime();
    let q = Math.max(A - K, 0);
    for (let [Y, z] of V22) {
      let w = q / z;
      if (w < 1e8) return String(Math.ceil(w)) + Y;
    }
    throw Error("Deadline is too far in the future");
  }
  var N22 = 2147483647;
  function T22(A) {
    let K = A instanceof Date ? A.getTime() : A,
      q = new Date().getTime(),
      Y = K - q;
    if (Y < 0) return 0;else if (Y > N22) return 1 / 0;else return Y;
  }
  function v22(A) {
    if (A instanceof Date) return A.toISOString();else {
      let K = new Date(A);
      if (Number.isNaN(K.getTime())) return "" + A;else return K.toISOString();
    }
  }
  function E22(A, K) {
    return ((K.getTime() - A.getTime()) / 1000).toFixed(3) + "s";
  }
});

// Register to shared state
__$.MjA = MjA;
