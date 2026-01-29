// Module: ycA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ycA = v(ns2 => {
  class RU6 extends Error {
    constructor(A, K, q) {
      super(q);
      Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name, this.code = K, this.exitCode = A, this.nestedError = void 0;
    }
  }
  class KkK extends RU6 {
    constructor(A) {
      super(1, "commander.invalidArgument", A);
      Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name;
    }
  }
  ns2.CommanderError = RU6;
  ns2.InvalidArgumentError = KkK;
});

// Register to shared state
__$.ycA = ycA;
