// Module: PI1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PI1 = v((hZz, w18) => {
  var UzA = 1000,
    pzA = UzA * 60,
    dzA = pzA * 60,
    M1A = dzA * 24,
    w6q = M1A * 7,
    H6q = M1A * 365.25;
  w18.exports = function (A, K) {
    K = K || {};
    var q = typeof A;
    if (q === "string" && A.length > 0) return J6q(A);else if (q === "number" && isFinite(A)) return K.long ? X6q(A) : O6q(A);
    throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(A));
  };
  function J6q(A) {
    if (A = String(A), A.length > 100) return;
    var K = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(A);
    if (!K) return;
    var q = parseFloat(K[1]),
      Y = (K[2] || "ms").toLowerCase();
    switch (Y) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return q * H6q;
      case "weeks":
      case "week":
      case "w":
        return q * w6q;
      case "days":
      case "day":
      case "d":
        return q * M1A;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return q * dzA;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return q * pzA;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return q * UzA;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return q;
      default:
        return;
    }
  }
  function O6q(A) {
    var K = Math.abs(A);
    if (K >= M1A) return Math.round(A / M1A) + "d";
    if (K >= dzA) return Math.round(A / dzA) + "h";
    if (K >= pzA) return Math.round(A / pzA) + "m";
    if (K >= UzA) return Math.round(A / UzA) + "s";
    return A + "ms";
  }
  function X6q(A) {
    var K = Math.abs(A);
    if (K >= M1A) return erA(A, K, M1A, "day");
    if (K >= dzA) return erA(A, K, dzA, "hour");
    if (K >= pzA) return erA(A, K, pzA, "minute");
    if (K >= UzA) return erA(A, K, UzA, "second");
    return A + " ms";
  }
  function erA(A, K, q, Y) {
    var z = K >= q * 1.5;
    return Math.round(A / q) + " " + Y + (z ? "s" : "");
  }
});

// Register to shared state
__$.PI1 = PI1;
