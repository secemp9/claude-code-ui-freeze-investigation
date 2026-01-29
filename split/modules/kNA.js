// Module: kNA
// Dependencies: NnA, hn6, bn6, TnA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kNA = k(() => {
  __$.NnA = __$.hn6("BASH_MAX_OUTPUT_LENGTH"), __$.bn6 = __$.hn6("TASK_MAX_OUTPUT_LENGTH"), __$.TnA = {
    name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
    default: 32000,
    validate: A => {
      if (!A) return {
        effective: 32000,
        status: "valid"
      };
      let Y = parseInt(A, 10);
      if (isNaN(Y) || Y <= 0) return {
        effective: 32000,
        status: "invalid",
        message: `Invalid value "${A}" (using default: 32000)`
      };
      if (Y > 64000) return {
        effective: 64000,
        status: "capped",
        message: `Capped from ${Y} to 64000`
      };
      return {
        effective: Y,
        status: "valid"
      };
    }
  };
});

// Register to shared state
__$.kNA = kNA;
