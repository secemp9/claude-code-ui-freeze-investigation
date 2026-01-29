// Module: xHA
// Dependencies: AEA, am1, GF, evA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xHA = k(() => {
  __$.AEA = Object.freeze({
    status: "aborted"
  });
  __$.am1 = Symbol("zod_brand");
  __$.GF = class GF extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  };
  __$.evA = {};
});

// Register to shared state
__$.xHA = xHA;
