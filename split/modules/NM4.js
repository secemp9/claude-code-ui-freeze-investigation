// Module: NM4
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NM4 = v(VM4 => {
  Object.defineProperty(VM4, "__esModule", {
    value: !0
  });
  VM4.getStringListFromEnv = VM4.getBooleanFromEnv = VM4.getStringFromEnv = VM4.getNumberFromEnv = void 0;
  var jM4 = __$.RK(),
    MM4 = CA("util");
  function Pq9(A) {
    let K = process.env[A];
    if (K == null || K.trim() === "") return;
    let q = Number(K);
    if (isNaN(q)) {
      jM4.diag.warn(`Unknown value ${(0, MM4.inspect)(K)} for ${A}, expected a number, using defaults`);
      return;
    }
    return q;
  }
  VM4.getNumberFromEnv = Pq9;
  function PM4(A) {
    let K = process.env[A];
    if (K == null || K.trim() === "") return;
    return K;
  }
  VM4.getStringFromEnv = PM4;
  function Vq9(A) {
    let K = process.env[A]?.trim().toLowerCase();
    if (K == null || K === "") return !1;
    if (K === "true") return !0;else if (K === "false") return !1;else return jM4.diag.warn(`Unknown value ${(0, MM4.inspect)(K)} for ${A}, expected 'true' or 'false', falling back to 'false' (default)`), !1;
  }
  VM4.getBooleanFromEnv = Vq9;
  function fq9(A) {
    return PM4(A)?.split(",").map(K => K.trim()).filter(K => K !== "");
  }
  VM4.getStringListFromEnv = fq9;
});

// Register to shared state
__$.NM4 = NM4;
