// Module: EFA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EFA = v(mi7 => {
  Object.defineProperty(mi7, "__esModule", {
    value: !0
  });
  mi7.durationMessageToDuration = bw2;
  mi7.msToDuration = xw2;
  mi7.durationToMs = uw2;
  mi7.isDuration = Bw2;
  mi7.isDurationMessage = mw2;
  mi7.parseDuration = Fw2;
  mi7.durationToString = Qw2;
  function bw2(A) {
    return {
      seconds: Number.parseInt(A.seconds),
      nanos: A.nanos
    };
  }
  function xw2(A) {
    return {
      seconds: A / 1000 | 0,
      nanos: A % 1000 * 1e6 | 0
    };
  }
  function uw2(A) {
    return A.seconds * 1000 + A.nanos / 1e6 | 0;
  }
  function Bw2(A) {
    return typeof A.seconds === "number" && typeof A.nanos === "number";
  }
  function mw2(A) {
    return typeof A.seconds === "string" && typeof A.nanos === "number";
  }
  var gw2 = /^(\d+)(?:\.(\d+))?s$/;
  function Fw2(A) {
    let K = A.match(gw2);
    if (!K) return null;
    return {
      seconds: Number.parseInt(K[1], 10),
      nanos: K[2] ? Number.parseInt(K[2].padEnd(9, "0"), 10) : 0
    };
  }
  function Qw2(A) {
    if (A.nanos === 0) return `${A.seconds}s`;
    let K;
    if (A.nanos % 1e6 === 0) K = 1e6;else if (A.nanos % 1000 === 0) K = 1000;else K = 1;
    return `${A.seconds}.${A.nanos / K}s`;
  }
});

// Register to shared state
__$.EFA = EFA;
