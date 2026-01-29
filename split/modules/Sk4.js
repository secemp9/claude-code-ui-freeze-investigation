// Module: Sk4
// Dependencies: e56

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sk4 = v(yk4 => {
  Object.defineProperty(yk4, "__esModule", {
    value: !0
  });
  yk4.addHrTimes = yk4.isTimeInput = yk4.isTimeInputHrTime = yk4.hrTimeToMicroseconds = yk4.hrTimeToMilliseconds = yk4.hrTimeToNanoseconds = yk4.hrTimeToTimeStamp = yk4.hrTimeDuration = yk4.timeInputToHrTime = yk4.hrTime = yk4.getTimeOrigin = yk4.millisToHrTime = void 0;
  var A36 = __$.e56(),
    Ck4 = 9,
    I09 = 6,
    S09 = Math.pow(10, I09),
    t31 = Math.pow(10, Ck4);
  function EIA(A) {
    let K = A / 1000,
      q = Math.trunc(K),
      Y = Math.round(A % 1000 * S09);
    return [q, Y];
  }
  yk4.millisToHrTime = EIA;
  function K36() {
    let A = A36.otperformance.timeOrigin;
    if (typeof A !== "number") {
      let K = A36.otperformance;
      A = K.timing && K.timing.fetchStart;
    }
    return A;
  }
  yk4.getTimeOrigin = K36;
  function Lk4(A) {
    let K = EIA(K36()),
      q = EIA(typeof A === "number" ? A : A36.otperformance.now());
    return Rk4(K, q);
  }
  yk4.hrTime = Lk4;
  function h09(A) {
    if (q36(A)) return A;else if (typeof A === "number") {
      if (A < K36()) return Lk4(A);else return EIA(A);
    } else if (A instanceof Date) return EIA(A.getTime());else throw TypeError("Invalid input type");
  }
  yk4.timeInputToHrTime = h09;
  function b09(A, K) {
    let q = K[0] - A[0],
      Y = K[1] - A[1];
    if (Y < 0) q -= 1, Y += t31;
    return [q, Y];
  }
  yk4.hrTimeDuration = b09;
  function x09(A) {
    let K = Ck4,
      q = `${"0".repeat(K)}${A[1]}Z`,
      Y = q.substring(q.length - K - 1);
    return new Date(A[0] * 1000).toISOString().replace("000Z", Y);
  }
  yk4.hrTimeToTimeStamp = x09;
  function u09(A) {
    return A[0] * t31 + A[1];
  }
  yk4.hrTimeToNanoseconds = u09;
  function B09(A) {
    return A[0] * 1000 + A[1] / 1e6;
  }
  yk4.hrTimeToMilliseconds = B09;
  function m09(A) {
    return A[0] * 1e6 + A[1] / 1000;
  }
  yk4.hrTimeToMicroseconds = m09;
  function q36(A) {
    return Array.isArray(A) && A.length === 2 && typeof A[0] === "number" && typeof A[1] === "number";
  }
  yk4.isTimeInputHrTime = q36;
  function g09(A) {
    return q36(A) || typeof A === "number" || A instanceof Date;
  }
  yk4.isTimeInput = g09;
  function Rk4(A, K) {
    let q = [A[0] + K[0], A[1] + K[1]];
    if (q[1] >= t31) q[1] -= t31, q[0] += 1;
    return q;
  }
  yk4.addHrTimes = Rk4;
});

// Register to shared state
__$.Sk4 = Sk4;
